'use client'

import { usePathname } from 'next/navigation'
import NextLink from 'next/link'
import * as NavigationMenu from '@radix-ui/react-navigation-menu'
import * as Collapsible from '@radix-ui/react-collapsible'
import { List } from '@phosphor-icons/react'

// eslint-disable-next-line
const Link = ({ href, ...props }: any) => {
  const pathname = usePathname()
  const isActive = pathname === href

  return (
    <NextLink href={href} passHref legacyBehavior>
      <NavigationMenu.Link
        className="border-b-2 border-solid border-transparent px-4 pb-4 text-4xl font-semibold text-gray-800/60 transition duration-200 ease-in hover:text-gray-800/90 data-[active]:border-gray-700 data-[active]:text-gray-800 md:pb-[26px] md:text-lg dark:text-cyan-100/50 dark:hover:text-cyan-500 dark:data-[active]:border-cyan-500 dark:data-[active]:text-cyan-400"
        active={isActive}
        {...props}
      />
    </NextLink>
  )
}

export function Navigation() {
  return (
    <Collapsible.Root className="fro-gray-100 fixed left-0 right-0 top-0 z-20 flex flex-col justify-center gap-6 bg-gradient-to-b from-gray-300 to-gray-400 px-4 py-6 data-[state=open]:h-screen dark:bg-gradient-to-br dark:from-gray-900 dark:to-gray-950">
      <Collapsible.CollapsibleTrigger asChild className="md:hidden">
        <button className="ml-auto rounded-md bg-gray-900 p-2" type="button">
          <List className="h-8 w-8 text-cyan-400" />
        </button>
      </Collapsible.CollapsibleTrigger>

      <Collapsible.Content className="flex flex-1 flex-col justify-center gap-5 data-[state=closed]:hidden md:justify-start md:data-[state=closed]:flex">
        <NavigationMenu.Root>
          <NavigationMenu.List className="flex max-w-app flex-col items-center justify-between gap-12 md:flex-row md:gap-6">
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
      </Collapsible.Content>
    </Collapsible.Root>
  )
}
