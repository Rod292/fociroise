import { Resend } from 'resend'
import { NextResponse } from 'next/server'

const resend = process.env.RESEND_API_KEY ? new Resend(process.env.RESEND_API_KEY) : null

export async function POST(request: Request) {
  try {
    const body = await request.json()
    const {
      nom,
      prenom,
      adresseProfessionnelle,
      codePostal,
      ville,
      pays,
      email,
      telephone,
      module1,
      module2,
      module3,
      moduleProthesiste,
      message,
    } = body

    // Check if Resend is configured
    if (!resend) {
      console.log('Resend API key not configured. Logging form submission:', body)
      return NextResponse.json({ success: true, message: 'Form submitted (email service not configured)' })
    }

    // Email to admin
    const adminEmail = await resend.emails.send({
      from: 'FOC Iroise <onboarding@resend.dev>', // You'll need to configure your domain
      to: 'contact@fociroise.fr',
      subject: `Nouvelle inscription - ${prenom} ${nom}`,
      html: `
        <h2>Nouvelle demande d'inscription</h2>

        <h3>Informations personnelles</h3>
        <p><strong>Nom:</strong> ${nom}</p>
        <p><strong>Prénom:</strong> ${prenom}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Téléphone:</strong> ${telephone}</p>

        <h3>Adresse professionnelle</h3>
        <p>${adresseProfessionnelle}</p>
        <p>${codePostal} ${ville}</p>
        <p>${pays}</p>

        <h3>Modules sélectionnés</h3>
        ${module1 ? `<p><strong>Module 1:</strong> ${module1}</p>` : ''}
        ${module2 ? `<p><strong>Module 2:</strong> ${module2}</p>` : ''}
        ${module3 ? `<p><strong>Module 3:</strong> ${module3}</p>` : ''}
        ${moduleProthesiste ? `<p><strong>Module Prothésiste:</strong> ${moduleProthesiste}</p>` : ''}

        ${message ? `<h3>Message</h3><p>${message}</p>` : ''}
      `,
    })

    // Confirmation email to user
    const userEmail = await resend.emails.send({
      from: 'FOC Iroise <onboarding@resend.dev>', // You'll need to configure your domain
      to: email,
      subject: 'Confirmation de votre demande d\'inscription - FOC Iroise',
      html: `
        <h2>Bonjour ${prenom} ${nom},</h2>

        <p>Nous avons bien reçu votre demande d'inscription à la formation FOC Iroise.</p>

        <h3>Récapitulatif de votre demande</h3>
        ${module1 ? `<p><strong>Module 1:</strong> ${module1}</p>` : ''}
        ${module2 ? `<p><strong>Module 2:</strong> ${module2}</p>` : ''}
        ${module3 ? `<p><strong>Module 3:</strong> ${module3}</p>` : ''}
        ${moduleProthesiste ? `<p><strong>Module Prothésiste:</strong> ${moduleProthesiste}</p>` : ''}

        <p>Nous vous contacterons prochainement pour confirmer votre inscription et vous communiquer les informations complémentaires.</p>

        <p><strong>Rappel:</strong> Le coût de chaque module de 2 jours est de 1100€. Ce prix comprend l'inscription, le repas du midi ainsi que la mise à disposition de l'articulateur et du gros matériel.</p>

        <p>L'inscription ne sera définitive qu'à la réception du règlement du Module 1 (le chèque sera déposé en banque quinze jours avant la date du module).</p>

        <p>Cordialement,<br/>L'équipe FOC Iroise</p>

        <hr/>
        <p style="font-size: 12px; color: #666;">
          FOC Iroise Brest<br/>
          22 rue Algésiras, 29200 Brest<br/>
          Email: contact@fociroise.fr<br/>
          Téléphone: 02 98 07 23 04
        </p>
      `,
    })

    return NextResponse.json({ success: true })
  } catch (error) {
    console.error('Error sending email:', error)
    return NextResponse.json(
      { error: 'Failed to send email' },
      { status: 500 }
    )
  }
}
