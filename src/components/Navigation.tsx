'use client'

import React from 'react'
import { usePathname } from 'next/navigation'
import NextLink from 'next/link'
import * as NavigationMenu from '@radix-ui/react-navigation-menu'
import * as Collapsible from '@radix-ui/react-collapsible'
import { X, List } from '@phosphor-icons/react'

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
  const [open, setOpen] = React.useState(false)

  function handleClose() {
    setTimeout(() => {
      setOpen(false)
    }, 200)
  }

  return (
    <Collapsible.Root
      open={open}
      onOpenChange={setOpen}
      className="fro-gray-100 sticky left-0 right-0 top-0 z-20 flex flex-col gap-6 bg-gradient-to-b from-gray-300 to-gray-400 px-4 py-2 data-[state=open]:h-screen md:py-6 dark:bg-gradient-to-br dark:from-gray-900 dark:to-gray-950"
    >
      <Collapsible.CollapsibleTrigger asChild className="md:hidden">
        <button className="ml-auto rounded-md bg-gray-900 p-2" type="button">
          {open ? (
            <X className="h-10 w-10 text-cyan-400" />
          ) : (
            <List className="h-10 w-10 text-cyan-400" />
          )}
        </button>
      </Collapsible.CollapsibleTrigger>

      <Collapsible.Content
        forceMount
        className="flex flex-1 flex-col justify-center data-[state=closed]:hidden md:flex-row md:data-[state=closed]:flex"
      >
        <NavigationMenu.Root>
          <NavigationMenu.List className="flex max-w-app flex-col items-center gap-20 md:flex-row md:gap-6">
            <NavigationMenu.Item>
              <Link onClick={handleClose} href="/">
                Inicio
              </Link>
            </NavigationMenu.Item>
            <NavigationMenu.Item>
              <Link onClick={handleClose} href="/projects">
                Projetos
              </Link>
            </NavigationMenu.Item>
            <NavigationMenu.Item>
              <Link onClick={handleClose} href="/career">
                Carreira
              </Link>
            </NavigationMenu.Item>
          </NavigationMenu.List>
        </NavigationMenu.Root>
      </Collapsible.Content>
    </Collapsible.Root>
  )
}
