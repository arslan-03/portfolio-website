import './globals.css'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Arslan Nawaz Portfolio',
  description: 'I am a Full Stack Bubble.io developer with 3+ years of experience in the field. I create highly complex backend and recursive workflows, relational database tables, API integrations with your favourite third-party apps, custom email templates, and much more.',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  )
}
