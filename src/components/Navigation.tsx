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
        className="border-b-2 border-solid border-transparent px-4 text-lg font-semibold text-gray-800/60 transition duration-200 ease-in hover:text-gray-800/90 data-[active]:border-gray-700 data-[active]:text-gray-800 md:pb-[26px] dark:text-cyan-100/50 dark:hover:text-cyan-500 dark:data-[active]:border-cyan-500 dark:data-[active]:text-cyan-400"
        active={isActive}
        {...props}
      />
    </NextLink>
  )
}

export function Navigation() {
  return (
    <header className="fro-gray-100 flex justify-center bg-gradient-to-b from-gray-300 to-gray-400 px-4 py-6 dark:bg-gradient-to-br dark:from-gray-900 dark:to-gray-950">
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
