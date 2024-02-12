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
        className="border-b-2 border-solid border-transparent px-4 text-lg font-semibold shadow-lg transition duration-300 ease-in hover:text-cyan-500 data-[active]:border-cyan-500 data-[active]:text-cyan-400 md:pb-[25px] dark:text-cyan-100/50"
        active={isActive}
        {...props}
      />
    </NextLink>
  )
}

export function Navigation() {
  return (
    <header className="flex justify-center bg-gray-100 bg-gradient-to-br px-4 py-6 dark:from-gray-900 dark:to-gray-950">
      <NavigationMenu.Root>
        <NavigationMenu.List className="flex max-w-app items-center justify-between gap-4 md:gap-6">
          <NavigationMenu.Item>
            <Link href="/">Inicio</Link>
          </NavigationMenu.Item>
          <NavigationMenu.Item>
            <Link href="/projects">Projetos</Link>
          </NavigationMenu.Item>
          <NavigationMenu.Item>
            <Link href="/career">Carreira</Link>
          </NavigationMenu.Item>
        </NavigationMenu.List>
      </NavigationMenu.Root>
    </header>
  )
}
