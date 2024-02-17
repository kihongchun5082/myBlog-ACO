import Header from '@/components/Header'
import './globals.css'
import type { Metadata } from 'next'
import { Inter, Open_Sans } from 'next/font/google'
import Footer from '@/components/Footer'

const inter = Inter({ subsets: ['latin'] })
const sans = Open_Sans({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: {
    default: '전기홍 ACO 책임의료조직 블로그',
    template: '전기홍 블로그 | %s',
  },
  description: '한국형 책임의료조직 도입을 위한 전기홍의 블로그',
  icons: {
    icon: '/favicon.ico',
  }
}

export default function RootLayout({children}: {children: React.ReactNode}) {
  return (
    <html lang="en" className={sans.className}>
      {/* <body className='${inter.className} flex flex-col w-full max-w-2xl md:max-w-5xl mx-auto bg-slate-300'> */}
      <body className='flex flex-col w-full max-w-screen-2xl mx-auto'>
        <Header />
        {/* <main className='grow bg-blue-300'>{children}</main> */}
        <main className='grow'>{children}</main>
        <Footer />
      </body>
    </html>
  )
}