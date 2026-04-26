import { NextRequest, NextResponse } from 'next/server'
import { Resend } from 'resend'

interface ContactBody {
  name: string
  email: string
  message: string
}

export async function POST(req: NextRequest) {
  try {
    const body: ContactBody = await req.json()

    if (!process.env.RESEND_API_KEY) {
      // Fallback: log to console when env var not set (local dev)
      console.log('[contact form]', { name: body.name, email: body.email, message: body.message })
      return NextResponse.json({ ok: true })
    }

    const resend = new Resend(process.env.RESEND_API_KEY)

    await resend.emails.send({
      from: 'Portfolio Contact <onboarding@resend.dev>',
      to: 'kuldeepgarg065@gmail.com',
      replyTo: body.email,
      subject: `Portfolio message from ${body.name}`,
      text: `Name: ${body.name}\nEmail: ${body.email}\n\nMessage:\n${body.message}`,
      html: `
        <p><strong>Name:</strong> ${body.name}</p>
        <p><strong>Email:</strong> <a href="mailto:${body.email}">${body.email}</a></p>
        <hr />
        <p>${body.message.replace(/\n/g, '<br />')}</p>
      `,
    })

    return NextResponse.json({ ok: true })
  } catch (err) {
    console.error('[contact form error]', err)
    return NextResponse.json({ ok: false, error: 'Failed to send' }, { status: 500 })
  }
}
