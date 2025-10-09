import { NextResponse } from 'next/server'
import { adminDb, adminAuth } from './firebase-admin'

export function checkFirebaseAdmin() {
  if (!adminDb || !adminAuth) {
    return { error: NextResponse.json({ error: 'Firebase Admin not configured' }, { status: 503 }) }
  }
  return { db: adminDb, auth: adminAuth }
}
