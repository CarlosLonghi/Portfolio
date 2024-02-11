import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import { Navigation } from '../components/Navigation'

import { Github, Instagram, Linkedin } from '@/components/SocialMedias'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Cadu Dev',
  description: 'My Profile',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={inter.className}>
      <head />
      <body className="bg-gray-100 text-gray-900 antialiased dark:bg-gray-950 dark:text-gray-100">
        <Navigation />

        <main className="overflow-x-hidden">{children}</main>

        <footer className="flex justify-center bg-gray-100 bg-gradient-to-tl px-4 py-4 text-gray-900 dark:from-gray-900 dark:to-gray-950 dark:text-gray-100">
          <ul className="flex items-center gap-6">
            <li>
              <Github />
            </li>
            <li>
              <Linkedin />
            </li>
            <li>
              <Instagram />
            </li>
          </ul>
        </footer>
      </body>
    </html>
  )
}
