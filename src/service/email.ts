import nodemailer from 'nodemailer'

export type EmailData = {
  from: string
  subject: string
  message: string
}

const transporter = nodemailer.createTransport({
  host: 'smtp.gmail.com',
  port: 465,
  secure: true, // true for 465, false for 587
  auth: {
    user: process.env.AUTH_WS,
    pass: process.env.AUTH_PASS_WS,
  }
})

export async function sendEmail({ subject, from, message }: EmailData) {
  const mailData = {
    to: process.env.AUTH_WS,
    subject: `[BLOG] ${subject}`,
    from: from,
    html: `
    <h1>${subject}</h1>
    <div>${message}</div>
    <br/>
    <p>보낸 사람: ${from}</p>
    `
  }
  return transporter.sendMail(mailData)
}