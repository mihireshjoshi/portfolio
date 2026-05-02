import nodemailer from 'nodemailer'

const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: process.env.GMAIL_USER,
    pass: process.env.GMAIL_APP_PASSWORD,
  },
})

export async function POST(request: Request) {
  try {
    const { name, email, subject, message } = await request.json()

    // Validate required fields
    if (!name || !email || !message) {
      return Response.json(
        { error: 'Missing required fields' },
        { status: 400 }
      )
    }

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailRegex.test(email)) {
      return Response.json(
        { error: 'Invalid email address' },
        { status: 400 }
      )
    }

    // Log the submission
    console.log('Contact form submission:', {
      name,
      email,
      subject,
      message,
      timestamp: new Date().toISOString(),
    })

    // Send email to yourself
    await transporter.sendMail({
      from: process.env.GMAIL_USER,
      to: process.env.GMAIL_USER,
      replyTo: email,
      subject: `New Contact Form: ${subject || 'No subject'}`,
      html: `
        <div style="font-family: 'Space Mono', monospace; background-color: #f5f0e8; color: #0a0a0a; max-width: 700px; margin: 0 auto; padding: 2rem;">
          <!-- Header -->
          <div style="border-top: 3px solid #0a0a0a; padding-top: 1.5rem; margin-bottom: 1.5rem;">
            <span style="font-size: 10px; font-weight: 700; letter-spacing: 0.15em; text-transform: uppercase; color: #c8102e;">Incoming Dispatch</span>
            <h1 style="font-family: 'Playfair Display', Georgia, serif; font-size: 2.5rem; font-weight: 900; line-height: 1; margin: 0.75rem 0 0 0; color: #0a0a0a;">
              New Message
            </h1>
          </div>

          <!-- Divider -->
          <div style="border-top: 3px double #0a0a0a; margin: 1.5rem 0 2rem 0;"></div>

          <!-- From Info -->
          <div style="margin-bottom: 1.5rem;">
            <p style="margin: 0 0 0.5rem 0; font-size: 10px; font-weight: 700; letter-spacing: 0.08em; text-transform: uppercase; color: #6b6560;">From</p>
            <h2 style="font-family: 'Playfair Display', Georgia, serif; font-size: 1.8rem; font-weight: 700; margin: 0 0 0.25rem 0; color: #0a0a0a;">${name}</h2>
            <p style="margin: 0; font-size: 12px; color: #0a0a0a;"><a href="mailto:${email}" style="color: #c8102e; text-decoration: none;">${email}</a></p>
          </div>

          <!-- Subject -->
          <div style="border-top: 1px solid #0a0a0a; padding-top: 1rem; margin-bottom: 1.5rem;">
            <p style="margin: 0 0 0.5rem 0; font-size: 10px; font-weight: 700; letter-spacing: 0.08em; text-transform: uppercase; color: #6b6560;">Subject</p>
            <p style="margin: 0; font-size: 12px; font-weight: 700; color: #0a0a0a;">${subject || 'General Enquiry'}</p>
          </div>

          <!-- Message -->
          <div style="border-top: 1px solid #0a0a0a; padding-top: 1rem; margin-bottom: 1.5rem;">
            <p style="margin: 0 0 1rem 0; font-size: 10px; font-weight: 700; letter-spacing: 0.08em; text-transform: uppercase; color: #6b6560;">Message</p>
            <p style="margin: 0; font-size: 12px; line-height: 1.7; white-space: pre-wrap; color: #0a0a0a; background-color: #ede8dc; padding: 1rem; border-left: 4px solid #c8102e;">${message}</p>
          </div>

          <!-- Footer -->
          <div style="border-top: 3px solid #0a0a0a; padding-top: 1.5rem; margin-top: 2rem; text-align: center;">
            <p style="margin: 0; font-size: 10px; letter-spacing: 0.08em; text-transform: uppercase; color: #6b6560;">Reply directly to this email</p>
          </div>
        </div>
      `,
    })

    // Optionally send confirmation email to user
    await transporter.sendMail({
      from: process.env.GMAIL_USER,
      to: email,
      subject: 'We received your message',
      html: `
        <div style="font-family: 'Space Mono', monospace; background-color: #f5f0e8; color: #0a0a0a; max-width: 700px; margin: 0 auto; padding: 2rem;">
          <!-- Header -->
          <div style="border-top: 3px solid #0a0a0a; padding-top: 1.5rem; margin-bottom: 1.5rem;">
            <span style="font-size: 10px; font-weight: 700; letter-spacing: 0.15em; text-transform: uppercase; color: #c8102e;">Editorial Desk</span>
            <h1 style="font-family: 'Playfair Display', Georgia, serif; font-size: 2.5rem; font-weight: 900; line-height: 1; margin: 0.75rem 0 0 0; color: #0a0a0a;">
              Thank You
            </h1>
            <p style="font-family: 'IM Fell English', Georgia, serif; font-style: italic; font-size: 1.1rem; line-height: 1.5; margin: 0.75rem 0 0 0; color: #0a0a0a;">
              We've received your message
            </p>
          </div>

          <!-- Divider -->
          <div style="border-top: 3px double #0a0a0a; margin: 1.5rem 0 2rem 0;"></div>

          <!-- Main Content -->
          <div style="margin-bottom: 2rem;">
            <p style="margin: 0 0 1rem 0; font-size: 12px; line-height: 1.7; color: #0a0a0a;">
              Thank you for reaching out, <strong>${name}</strong>. We've received your message and will review it carefully.
            </p>
            <p style="margin: 0 0 1rem 0; font-size: 12px; line-height: 1.7; color: #0a0a0a;">
              We're looking forward to connecting with you. In the meantime, feel free to explore my portfolio and projects at <a href="https://portfolio-mihiresh.vercel.app/" style="color: #c8102e; text-decoration: none;">mihireshjoshi.com</a>.
            </p>
          </div>

          <!-- Message Summary -->
          <div style="border-top: 1px solid #0a0a0a; padding-top: 1.5rem; margin-bottom: 2rem;">
            <p style="margin: 0 0 1rem 0; font-size: 10px; font-weight: 700; letter-spacing: 0.08em; text-transform: uppercase; color: #6b6560;">Your Message</p>
            <div style="background-color: #ede8dc; padding: 1rem; border-left: 4px solid #c8102e; margin-bottom: 1rem;">
              <p style="margin: 0 0 0.5rem 0; font-size: 10px; font-weight: 700; letter-spacing: 0.08em; text-transform: uppercase; color: #6b6560;">Subject</p>
              <p style="margin: 0 0 1rem 0; font-size: 12px; font-weight: 700; color: #0a0a0a;">${subject || 'General Enquiry'}</p>
              <p style="margin: 0; font-size: 12px; line-height: 1.7; white-space: pre-wrap; color: #0a0a0a;">${message}</p>
            </div>
          </div>

          <!-- Quick Links -->
          <div style="border-top: 1px solid #0a0a0a; padding-top: 1.5rem; margin-bottom: 2rem;">
            <p style="margin: 0 0 1rem 0; font-size: 10px; font-weight: 700; letter-spacing: 0.08em; text-transform: uppercase; color: #6b6560;">Direct Lines</p>
            <div style="display: flex; flex-direction: column; gap: 0.5rem;">
              <a href="mailto:mihireshsjoshi@gmail.com" style="color: #c8102e; text-decoration: none; font-size: 12px;"><strong>→ Email</strong> mihireshsjoshi@gmail.com</a>
              <a href="https://github.com/mihireshjoshi" style="color: #c8102e; text-decoration: none; font-size: 12px;"><strong>→ GitHub</strong> github.com/mihireshjoshi</a>
              <a href="https://www.linkedin.com/in/mihiresh-joshi-651423207/" style="color: #c8102e; text-decoration: none; font-size: 12px;"><strong>→ LinkedIn</strong> /in/mihiresh-joshi</a>
            </div>
          </div>

          <!-- Footer -->
          <div style="border-top: 3px solid #0a0a0a; padding-top: 1.5rem; text-align: center;">
            <p style="margin: 0 0 0.5rem 0; font-size: 12px; font-weight: 700; color: #0a0a0a;">— Mihiresh Joshi</p>
            <p style="margin: 0; font-size: 10px; letter-spacing: 0.08em; text-transform: uppercase; color: #6b6560;">Software Engineer · Mumbai, India</p>
          </div>
        </div>
      `,
    })

    return Response.json(
      { success: true, message: 'Message received successfully' },
      { status: 200 }
    )
  } catch (error) {
    console.error('Contact API error:', error)
    return Response.json(
      { error: 'Failed to send message. Please try again later.' },
      { status: 500 }
    )
  }
}
