import { NextRequest, NextResponse } from 'next/server'

interface ContactBody {
  name: string
  email: string
  message: string
}

export async function POST(req: NextRequest) {
  try {
    const body: ContactBody = await req.json()

    // TODO: Replace console.log with Resend email delivery
    // import { Resend } from 'resend'
    // const resend = new Resend(process.env.RESEND_API_KEY)
    // await resend.emails.send({ from: ..., to: ..., subject: ..., text: body.message })

    console.log('[contact form]', {
      name: body.name,
      email: body.email,
      message: body.message,
      receivedAt: new Date().toISOString(),
    })

    return NextResponse.json({ ok: true })
  } catch {
    return NextResponse.json({ ok: false, error: 'Invalid request' }, { status: 400 })
  }
}
