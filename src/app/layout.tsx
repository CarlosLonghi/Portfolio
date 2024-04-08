import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

import dynamic from 'next/dynamic'
const DynamicFooter = dynamic(() => import('@/components/Footer'))
const DynamicNavigation = dynamic(() => import('@/components/Navigation'))

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
      <body className="overflow-x-hidden bg-gradient-to-t from-gray-300 to-gray-500 text-gray-900 antialiased dark:from-gray-950 dark:to-gray-950 dark:text-gray-100">
        <DynamicNavigation />

        <main className="overflow-x-hidden">{children}</main>

        <DynamicFooter />
      </body>
    </html>
  )
}
