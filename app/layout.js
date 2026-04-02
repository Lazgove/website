import { Noto_Sans, IBM_Plex_Mono } from 'next/font/google'
import './globals.css'
import Header from '@/components/Header'
import Footer from '@/components/Footer'

const notoSans = Noto_Sans({
  subsets: ['latin'],
  variable: '--font-display',
  weight: ['300', '400', '500', '600', '700'],
  display: 'swap',
})

const mono = IBM_Plex_Mono({
  subsets: ['latin'],
  variable: '--font-mono',
  weight: ['400', '500'],
  display: 'swap',
})

export const metadata = {
  title: 'Guillaume Abramovici — Motion Designer',
  description: '2D/3D Motion Designer & Creative Technologist based in Paris. Explainer videos, brand animations, 3D motion, and interactive experiences.',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${notoSans.variable} ${mono.variable}`}>
      <body>
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  )
}
