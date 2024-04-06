'use cliet'

import NextLink from 'next/link'
import { usePathname } from 'next/navigation'
import * as NavigationMenu from '@radix-ui/react-navigation-menu'
import { twMerge } from 'tailwind-merge'

// eslint-disable-next-line
const Link = ({ href, onClick, ...props }: any) => {
  const pathname = usePathname()
  const isActive = pathname === href

  const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    // Check window width before toggling the menu state
    if (window.innerWidth <= 768) {
      onClick?.(e)
    }
  }

  return (
    <NextLink href={href} passHref legacyBehavior>
      <NavigationMenu.Link
        className={twMerge(
          'block border-b-2 border-solid border-transparent py-4 text-3xl font-semibold text-gray-800/60 transition duration-200 ease-in',
          'data-[active]:text-cyan-500',
          'md:px-4 md:pb-[26px] md:text-lg md:hover:text-gray-800/90 md:data-[active]:border-gray-700 md:data-[active]:text-gray-800',
          'dark:text-cyan-100/50 dark:data-[active]:text-cyan-400',
          'md:dark:hover:text-cyan-500 md:dark:data-[active]:border-cyan-500',
        )}
        active={isActive}
        onClick={handleLinkClick}
        {...props}
      />
    </NextLink>
  )
}

export function Nav({ toggle }: any) {
  return (
    <NavigationMenu.Root
      className={twMerge(
        'fixed bottom-0 left-0 top-0 z-20 w-screen -translate-x-full bg-gradient-to-b from-gray-200 to-gray-400 will-change-transform',
        'md:sticky md:h-fit md:pt-1',
        'dark:bg-gradient-to-br dark:from-cyan-900 dark:to-gray-950 md:dark:bg-gradient-to-r',
      )}
    >
      <NavigationMenu.List className="flex h-screen flex-col items-center justify-center gap-12 md:h-fit md:flex-row md:gap-8 lg:gap-12">
        <NavigationMenu.Item className="w-10/12 rounded-md bg-gradient-to-r from-sky-100 to-sky-50 text-center md:w-auto md:from-transparent md:to-transparent md:py-0 dark:from-gray-950/90 dark:to-gray-950/5 md:dark:bg-transparent md:dark:from-transparent md:dark:to-transparent">
          <Link onClick={toggle} href="/">
            Inicio
          </Link>
        </NavigationMenu.Item>
        <NavigationMenu.Item className="w-10/12 rounded-md bg-gradient-to-r from-sky-100 to-sky-50 text-center md:w-auto md:from-transparent md:to-transparent md:py-0 dark:from-gray-950/90 dark:to-gray-950/5 md:dark:bg-transparent md:dark:from-transparent md:dark:to-transparent">
          <Link onClick={toggle} href="/projects">
            Projetos
          </Link>
        </NavigationMenu.Item>
        <NavigationMenu.Item className="w-10/12 rounded-md bg-gradient-to-r from-sky-100 to-sky-50 text-center md:w-auto md:from-transparent md:to-transparent md:py-0 dark:from-gray-950/90 dark:to-gray-950/5 md:dark:bg-transparent md:dark:from-transparent md:dark:to-transparent">
          <Link onClick={toggle} href="/career">
            Carreira
          </Link>
        </NavigationMenu.Item>
      </NavigationMenu.List>
    </NavigationMenu.Root>
  )
}
