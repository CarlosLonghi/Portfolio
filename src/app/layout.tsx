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
      <body className="bg-gradient-to-t from-gray-300 to-gray-500 text-gray-900 antialiased dark:from-gray-950 dark:to-gray-950 dark:text-gray-100">
        <Navigation />

        <main className="overflow-x-hidden">{children}</main>

        <footer className="flex justify-center bg-gradient-to-t from-gray-400 to-gray-300 px-4 py-8 text-gray-900 dark:from-cyan-950 dark:to-gray-950 dark:text-gray-100">
          <ul className="flex items-center gap-10 md:gap-8 lg:gap-16">
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
