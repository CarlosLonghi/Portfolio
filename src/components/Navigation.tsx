'use client'

import { usePathname } from 'next/navigation'
import NextLink from 'next/link'
import * as NavigationMenu from '@radix-ui/react-navigation-menu'

// eslint-disable-next-line
const Link = ({ href, ...props }: any) => {
  const pathname = usePathname()
  const isActive = pathname === href

  return (
    <NextLink href={href} passHref legacyBehavior>
      <NavigationMenu.Link
        className="rounded px-3 py-2 text-cyan-100 shadow-lg transition duration-300 ease-in hover:text-cyan-400 hover:shadow-cyan-950 data-[active]:bg-gray-950  data-[active]:text-cyan-400 hover:dark:bg-gray-950"
        active={isActive}
        {...props}
      />
    </NextLink>
  )
}

export function Navigation() {
  return (
    <header className="flex justify-center bg-gray-100 bg-gradient-to-br px-4 py-6 text-gray-900 dark:from-gray-900 dark:to-gray-950 dark:text-gray-100">
      <NavigationMenu.Root>
        <NavigationMenu.List className="flex max-w-app items-center justify-between gap-4 md:gap-6">
          <NavigationMenu.Item>
            <Link href="/">Inicio</Link>
          </NavigationMenu.Item>
          <NavigationMenu.Item>
            <Link href="/projects">Projetos</Link>
          </NavigationMenu.Item>
        </NavigationMenu.List>
      </NavigationMenu.Root>
    </header>
  )
}
