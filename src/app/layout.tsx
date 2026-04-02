import type { Metadata } from 'next'
import { Header } from '@/components/layout/header'
import { Footer } from '@/components/layout/footer'
import './globals.css'

export const metadata: Metadata = {
  title: {
    default: 'CYS Solutions — Engineering Digital Excellence',
    template: '%s | CYS Solutions',
  },
  description:
    'CYS Solutions est un studio d\'ingénierie logicielle spécialisé dans la conception de plateformes digitales haute performance.',
  keywords: ['développement logiciel', 'ingénierie', 'SaaS', 'cloud', 'DevOps', 'consulting IT'],
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="fr" className="scroll-smooth">
      <head>
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="bg-white text-primary min-h-screen flex flex-col">
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  )
}
