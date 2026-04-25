import type { Metadata } from 'next'
import { Fraunces, Inter, JetBrains_Mono, Caveat } from 'next/font/google'
import Nav from '@/components/Nav'
import Footer from '@/components/Footer'
import './globals.css'

const fraunces = Fraunces({
  subsets: ['latin'],
  variable: '--font-fraunces',
  display: 'swap',
})

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
})

const jetbrainsMono = JetBrains_Mono({
  subsets: ['latin'],
  variable: '--font-jetbrains-mono',
  display: 'swap',
})

const caveat = Caveat({
  subsets: ['latin'],
  variable: '--font-caveat',
  display: 'swap',
})

export const metadata: Metadata = {
  title: {
    default: 'Kuldeep Garg — Data & AI Consultant',
    template: '%s · Kuldeep Garg',
  },
  description:
    'Data & AI Consultant at Taos Digital. Building intelligent systems with RAG, agentic workflows, and enterprise data platforms.',
  metadataBase: new URL('https://kuldeepgarg.dev'),
  openGraph: {
    type: 'website',
    locale: 'en_US',
    siteName: 'Kuldeep Garg',
    title: 'Kuldeep Garg — Data & AI Consultant',
    description:
      'Data & AI Consultant at Taos Digital. Building intelligent systems with RAG, agentic workflows, and enterprise data platforms.',
  },
  twitter: {
    card: 'summary',
    title: 'Kuldeep Garg — Data & AI Consultant',
    description:
      'Data & AI Consultant at Taos Digital. Building intelligent systems with RAG, agentic workflows, and enterprise data platforms.',
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html
      lang="en"
      className={`${fraunces.variable} ${inter.variable} ${jetbrainsMono.variable} ${caveat.variable}`}
    >
      <body style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
        <Nav />
        <main style={{ flex: 1 }}>{children}</main>
        <Footer />
      </body>
    </html>
  )
}
