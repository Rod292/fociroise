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
      from: 'FOC Iroise <inscription@fociroise.fr>',
      to: 'contact@fociroise.fr',
      subject: `🆕 Nouvelle inscription - ${prenom} ${nom}`,
      html: `
        <!DOCTYPE html>
        <html>
        <head>
          <meta charset="utf-8">
          <meta name="viewport" content="width=device-width, initial-scale=1.0">
        </head>
        <body style="margin: 0; padding: 0; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif; background-color: #f3f4f6;">
          <table width="100%" cellpadding="0" cellspacing="0" style="background-color: #f3f4f6; padding: 40px 0;">
            <tr>
              <td align="center">
                <table width="600" cellpadding="0" cellspacing="0" style="background-color: #ffffff; border-radius: 8px; overflow: hidden; box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);">
                  <!-- Header -->
                  <tr>
                    <td style="background: linear-gradient(135deg, #2563eb 0%, #1e40af 100%); padding: 40px 30px; text-align: center;">
                      <h1 style="margin: 0; color: #ffffff; font-size: 28px; font-weight: bold;">Nouvelle inscription</h1>
                      <p style="margin: 10px 0 0 0; color: #dbeafe; font-size: 16px;">Demande reçue le ${new Date().toLocaleDateString('fr-FR', { day: 'numeric', month: 'long', year: 'numeric' })}</p>
                    </td>
                  </tr>

                  <!-- Content -->
                  <tr>
                    <td style="padding: 30px;">
                      <!-- Informations personnelles -->
                      <table width="100%" cellpadding="0" cellspacing="0" style="margin-bottom: 25px;">
                        <tr>
                          <td style="background-color: #f9fafb; border-left: 4px solid #2563eb; padding: 20px; border-radius: 6px;">
                            <h2 style="margin: 0 0 15px 0; color: #1f2937; font-size: 18px; font-weight: 600;">👤 Informations personnelles</h2>
                            <table width="100%" cellpadding="8" cellspacing="0">
                              <tr>
                                <td style="color: #6b7280; font-size: 14px; width: 140px;"><strong>Nom :</strong></td>
                                <td style="color: #1f2937; font-size: 14px;">${nom}</td>
                              </tr>
                              <tr>
                                <td style="color: #6b7280; font-size: 14px;"><strong>Prénom :</strong></td>
                                <td style="color: #1f2937; font-size: 14px;">${prenom}</td>
                              </tr>
                              <tr>
                                <td style="color: #6b7280; font-size: 14px;"><strong>Email :</strong></td>
                                <td style="color: #1f2937; font-size: 14px;"><a href="mailto:${email}" style="color: #2563eb; text-decoration: none;">${email}</a></td>
                              </tr>
                              <tr>
                                <td style="color: #6b7280; font-size: 14px;"><strong>Téléphone :</strong></td>
                                <td style="color: #1f2937; font-size: 14px;"><a href="tel:${telephone}" style="color: #2563eb; text-decoration: none;">${telephone}</a></td>
                              </tr>
                            </table>
                          </td>
                        </tr>
                      </table>

                      <!-- Adresse -->
                      <table width="100%" cellpadding="0" cellspacing="0" style="margin-bottom: 25px;">
                        <tr>
                          <td style="background-color: #f9fafb; border-left: 4px solid #059669; padding: 20px; border-radius: 6px;">
                            <h2 style="margin: 0 0 15px 0; color: #1f2937; font-size: 18px; font-weight: 600;">📍 Adresse professionnelle</h2>
                            <p style="margin: 0; color: #1f2937; font-size: 14px; line-height: 1.6;">
                              ${adresseProfessionnelle}<br/>
                              ${codePostal} ${ville}<br/>
                              ${pays}
                            </p>
                          </td>
                        </tr>
                      </table>

                      <!-- Modules -->
                      <table width="100%" cellpadding="0" cellspacing="0" style="margin-bottom: 25px;">
                        <tr>
                          <td style="background-color: #f9fafb; border-left: 4px solid #7c3aed; padding: 20px; border-radius: 6px;">
                            <h2 style="margin: 0 0 15px 0; color: #1f2937; font-size: 18px; font-weight: 600;">📅 Modules sélectionnés</h2>
                            ${module1 ? `
                              <div style="background-color: #ffffff; padding: 12px; border-radius: 6px; margin-bottom: 8px; border: 1px solid #e5e7eb;">
                                <strong style="color: #7c3aed;">Module 1 :</strong> <span style="color: #1f2937;">${module1}</span>
                              </div>
                            ` : ''}
                            ${module2 ? `
                              <div style="background-color: #ffffff; padding: 12px; border-radius: 6px; margin-bottom: 8px; border: 1px solid #e5e7eb;">
                                <strong style="color: #7c3aed;">Module 2 :</strong> <span style="color: #1f2937;">${module2}</span>
                              </div>
                            ` : ''}
                            ${module3 ? `
                              <div style="background-color: #ffffff; padding: 12px; border-radius: 6px; margin-bottom: 8px; border: 1px solid #e5e7eb;">
                                <strong style="color: #7c3aed;">Module 3 :</strong> <span style="color: #1f2937;">${module3}</span>
                              </div>
                            ` : ''}
                            ${moduleProthesiste ? `
                              <div style="background-color: #fef3c7; padding: 12px; border-radius: 6px; border: 1px solid #fbbf24;">
                                <strong style="color: #d97706;">Module Prothésiste :</strong> <span style="color: #1f2937;">${moduleProthesiste}</span>
                              </div>
                            ` : ''}
                          </td>
                        </tr>
                      </table>

                      ${message ? `
                        <!-- Message -->
                        <table width="100%" cellpadding="0" cellspacing="0">
                          <tr>
                            <td style="background-color: #fef3c7; border-left: 4px solid #f59e0b; padding: 20px; border-radius: 6px;">
                              <h2 style="margin: 0 0 15px 0; color: #1f2937; font-size: 18px; font-weight: 600;">💬 Message du participant</h2>
                              <p style="margin: 0; color: #1f2937; font-size: 14px; line-height: 1.6; white-space: pre-wrap;">${message}</p>
                            </td>
                          </tr>
                        </table>
                      ` : ''}
                    </td>
                  </tr>

                  <!-- Footer -->
                  <tr>
                    <td style="background-color: #f9fafb; padding: 20px 30px; border-top: 1px solid #e5e7eb;">
                      <p style="margin: 0; color: #6b7280; font-size: 12px; text-align: center;">
                        FOC Iroise Brest • 22 rue Algésiras, 29200 Brest<br/>
                        <a href="mailto:contact@fociroise.fr" style="color: #2563eb; text-decoration: none;">contact@fociroise.fr</a> •
                        <a href="tel:0298072304" style="color: #2563eb; text-decoration: none;">02 98 07 23 04</a>
                      </p>
                    </td>
                  </tr>
                </table>
              </td>
            </tr>
          </table>
        </body>
        </html>
      `,
    })

    // Confirmation email to user
    const userEmail = await resend.emails.send({
      from: 'FOC Iroise <inscription@fociroise.fr>',
      to: email,
      subject: '✅ Confirmation de votre inscription - FOC Iroise',
      html: `
        <!DOCTYPE html>
        <html>
        <head>
          <meta charset="utf-8">
          <meta name="viewport" content="width=device-width, initial-scale=1.0">
        </head>
        <body style="margin: 0; padding: 0; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif; background-color: #f3f4f6;">
          <table width="100%" cellpadding="0" cellspacing="0" style="background-color: #f3f4f6; padding: 40px 0;">
            <tr>
              <td align="center">
                <table width="600" cellpadding="0" cellspacing="0" style="background-color: #ffffff; border-radius: 8px; overflow: hidden; box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);">
                  <!-- Header -->
                  <tr>
                    <td style="background: linear-gradient(135deg, #2563eb 0%, #1e40af 100%); padding: 40px 30px; text-align: center;">
                      <table cellpadding="0" cellspacing="0" style="margin: 0 auto 20px;">
                        <tr>
                          <td style="background-color: rgba(255, 255, 255, 0.2); width: 80px; height: 80px; border-radius: 50%; text-align: center; vertical-align: middle;">
                            <span style="font-size: 40px; color: #ffffff; line-height: 80px;">✓</span>
                          </td>
                        </tr>
                      </table>
                      <h1 style="margin: 0; color: #ffffff; font-size: 28px; font-weight: bold;">Demande bien reçue !</h1>
                      <p style="margin: 10px 0 0 0; color: #dbeafe; font-size: 16px;">Merci pour votre confiance</p>
                    </td>
                  </tr>

                  <!-- Content -->
                  <tr>
                    <td style="padding: 40px 30px;">
                      <p style="margin: 0 0 20px 0; color: #1f2937; font-size: 16px; line-height: 1.6;">
                        Bonjour <strong>${prenom} ${nom}</strong>,
                      </p>

                      <p style="margin: 0 0 25px 0; color: #1f2937; font-size: 16px; line-height: 1.6;">
                        Nous avons bien reçu votre demande d'inscription à la formation <strong>FOC Iroise</strong>.
                        Nous vous remercions de l'intérêt que vous portez à notre formation occlusale continue.
                      </p>

                      <!-- Récapitulatif -->
                      <table width="100%" cellpadding="0" cellspacing="0" style="margin-bottom: 30px;">
                        <tr>
                          <td style="background-color: #eff6ff; border-left: 4px solid #2563eb; padding: 20px; border-radius: 6px;">
                            <h2 style="margin: 0 0 15px 0; color: #1f2937; font-size: 20px; font-weight: 600;">📋 Récapitulatif de votre inscription</h2>

                            ${module1 ? `
                              <div style="background-color: #ffffff; padding: 14px; border-radius: 6px; margin-bottom: 10px; border: 1px solid #e5e7eb;">
                                <strong style="color: #2563eb;">Module 1</strong><br/>
                                <span style="color: #6b7280; font-size: 14px;">${module1}</span>
                              </div>
                            ` : ''}

                            ${module2 ? `
                              <div style="background-color: #ffffff; padding: 14px; border-radius: 6px; margin-bottom: 10px; border: 1px solid #e5e7eb;">
                                <strong style="color: #2563eb;">Module 2</strong><br/>
                                <span style="color: #6b7280; font-size: 14px;">${module2}</span>
                              </div>
                            ` : ''}

                            ${module3 ? `
                              <div style="background-color: #ffffff; padding: 14px; border-radius: 6px; margin-bottom: 10px; border: 1px solid #e5e7eb;">
                                <strong style="color: #2563eb;">Module 3</strong><br/>
                                <span style="color: #6b7280; font-size: 14px;">${module3}</span>
                              </div>
                            ` : ''}

                            ${moduleProthesiste ? `
                              <div style="background-color: #fef3c7; padding: 14px; border-radius: 6px; margin-bottom: 10px; border: 1px solid #fbbf24;">
                                <strong style="color: #d97706;">Module Prothésiste (optionnel)</strong><br/>
                                <span style="color: #6b7280; font-size: 14px;">${moduleProthesiste}</span>
                              </div>
                            ` : ''}
                          </td>
                        </tr>
                      </table>

                      <!-- Prochaines étapes -->
                      <table width="100%" cellpadding="0" cellspacing="0" style="margin-bottom: 30px;">
                        <tr>
                          <td style="background-color: #f0fdf4; border-left: 4px solid #059669; padding: 20px; border-radius: 6px;">
                            <h2 style="margin: 0 0 15px 0; color: #1f2937; font-size: 18px; font-weight: 600;">🎯 Prochaines étapes</h2>
                            <p style="margin: 0 0 15px 0; color: #1f2937; font-size: 14px; line-height: 1.6;">
                              <strong style="color: #059669;">→</strong> Nous allons étudier votre demande et vous contacterons prochainement pour confirmer votre inscription.
                            </p>
                            <p style="margin: 0; color: #1f2937; font-size: 14px; line-height: 1.6;">
                              <strong style="color: #059669;">→</strong> Vous recevrez alors toutes les informations complémentaires concernant le petit matériel personnel à prévoir.
                            </p>
                          </td>
                        </tr>
                      </table>

                      <!-- Informations importantes -->
                      <table width="100%" cellpadding="0" cellspacing="0" style="margin-bottom: 30px;">
                        <tr>
                          <td style="background-color: #fef3c7; border-left: 4px solid #f59e0b; padding: 20px; border-radius: 6px;">
                            <h2 style="margin: 0 0 15px 0; color: #1f2937; font-size: 18px; font-weight: 600;">💡 Informations importantes</h2>
                            <p style="margin: 0 0 12px 0; color: #1f2937; font-size: 14px; line-height: 1.6;">
                              <strong>Tarif :</strong> 1 100€ par module de 2 journées
                            </p>
                            <p style="margin: 0 0 12px 0; color: #6b7280; font-size: 13px; line-height: 1.6;">
                              Ce prix comprend : l'inscription, le repas du midi, l'articulateur et le gros matériel
                            </p>
                            <p style="margin: 0 0 12px 0; color: #1f2937; font-size: 14px; line-height: 1.6;">
                              <strong>Places limitées :</strong> 14 praticiens par session (travail en binômes)
                            </p>
                            <p style="margin: 0; color: #1f2937; font-size: 14px; line-height: 1.6;">
                              <strong>Validation de l'inscription :</strong> L'inscription ne sera définitive qu'à réception du règlement du Module 1. Le chèque sera déposé en banque quinze jours avant la date du module.
                            </p>
                          </td>
                        </tr>
                      </table>

                      <!-- CTA Contact -->
                      <table width="100%" cellpadding="0" cellspacing="0">
                        <tr>
                          <td align="center" style="padding: 20px 0;">
                            <p style="margin: 0 0 15px 0; color: #6b7280; font-size: 14px;">
                              Une question ? N'hésitez pas à nous contacter
                            </p>
                            <a href="mailto:contact@fociroise.fr" style="display: inline-block; background-color: #2563eb; color: #ffffff; text-decoration: none; padding: 12px 30px; border-radius: 6px; font-weight: 600; font-size: 14px;">
                              Nous contacter
                            </a>
                          </td>
                        </tr>
                      </table>

                      <p style="margin: 30px 0 0 0; color: #1f2937; font-size: 14px; line-height: 1.6;">
                        Cordialement,<br/>
                        <strong>L'équipe FOC Iroise</strong>
                      </p>
                    </td>
                  </tr>

                  <!-- Footer -->
                  <tr>
                    <td style="background-color: #f9fafb; padding: 30px; border-top: 1px solid #e5e7eb;">
                      <table width="100%" cellpadding="0" cellspacing="0">
                        <tr>
                          <td align="center">
                            <p style="margin: 0 0 15px 0; color: #1f2937; font-size: 16px; font-weight: 600;">FOC Iroise Brest</p>
                            <p style="margin: 0 0 5px 0; color: #6b7280; font-size: 13px;">22 rue Algésiras, 29200 Brest</p>
                            <p style="margin: 0 0 15px 0; color: #6b7280; font-size: 13px;">
                              <a href="mailto:contact@fociroise.fr" style="color: #2563eb; text-decoration: none;">contact@fociroise.fr</a> •
                              <a href="tel:0298072304" style="color: #2563eb; text-decoration: none;">02 98 07 23 04</a>
                            </p>
                            <p style="margin: 0; color: #9ca3af; font-size: 12px;">
                              Formation occlusale continue basée sur la méthodologie du Professeur José Abjean
                            </p>
                          </td>
                        </tr>
                      </table>
                    </td>
                  </tr>
                </table>
              </td>
            </tr>
          </table>
        </body>
        </html>
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
