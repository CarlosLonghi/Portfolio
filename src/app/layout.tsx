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
        <header className="flex justify-center bg-gray-100 px-4 py-6 text-gray-900 dark:bg-gray-900 dark:text-gray-100">
          <nav>
            <ul className="flex max-w-app items-center justify-between gap-4 md:gap-6">
              <li>
                <a
                  className="rounded px-3 py-2 text-cyan-100 transition duration-300 ease-out hover:text-cyan-400 hover:shadow-lg hover:shadow-cyan-950 hover:dark:bg-gray-950"
                  href="/"
                >
                  Inicio
                </a>
              </li>
              <li>
                <a
                  className="rounded px-3 py-2 text-cyan-100 transition duration-300 ease-out hover:text-cyan-400 hover:shadow-lg hover:shadow-cyan-950 hover:dark:bg-gray-950"
                  href="/projects"
                >
                  Projetos
                </a>
              </li>
              <li>
                <a
                  className="rounded px-3 py-2 text-cyan-100 transition duration-300 ease-out hover:text-cyan-400 hover:shadow-lg hover:shadow-cyan-950 hover:dark:bg-gray-950"
                  href="/about"
                >
                  Carreira
                </a>
              </li>
              <li>
                <a
                  className="rounded px-3 py-2 text-cyan-100 transition duration-300 ease-out hover:text-cyan-400 hover:shadow-lg hover:shadow-cyan-950 hover:dark:bg-gray-950"
                  href="/contact"
                >
                  Contato
                </a>
              </li>
            </ul>
          </nav>
        </header>
        <main className="overflow-x-hidden bg-gray-100 text-gray-900 dark:bg-gray-950 dark:text-gray-100">
          {children}
        </main>
      </body>
    </html>
  )
}
