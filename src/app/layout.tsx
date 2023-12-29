import Header from '@/components/Header'
import './globals.css'
import type { Metadata } from 'next'
import { Inter, Open_Sans } from 'next/font/google'
import Footer from '@/components/Footer'

const inter = Inter({ subsets: ['latin'] })
const sans = Open_Sans({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: {
    default: '전기홍 블로그',
    template: '전기홍 블로그 | %s',
  },
  description: '건강수명을 위해 개인은 무얼해야 하나?',
  icons: {
    icon: '/favicon.ico',
  }
}

export default function RootLayout({children}: {children: React.ReactNode}) {
  return (
    <html lang="en">
      <body className='${inter.className} flex flex-col w-full max-w-2xl md:max-w-5xl mx-auto bg-slate-300'>
        <Header />
        <main className='grow bg-blue-300'>{children}</main>
        <Footer />
      </body>
    </html>
  )
}