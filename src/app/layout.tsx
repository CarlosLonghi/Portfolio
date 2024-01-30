import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

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
    <html lang="en">
      <body className={inter.className}>
        <header></header>
        <main className="bg-gray-100 text-gray-900 dark:bg-gray-950 dark:text-gray-100">
          {children}
        </main>
      </body>
    </html>
  )
}
