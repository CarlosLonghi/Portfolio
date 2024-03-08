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
          'rounded-md border-b-2 border-solid border-transparent bg-sky-100 px-20 py-4 text-4xl font-semibold text-gray-800/60 transition duration-200 ease-in',
          'data-[active]:bg-cyan-600 data-[active]:text-gray-200',
          'md:px-4 md:pb-[26px] md:text-lg md:hover:text-gray-800/90 md:data-[active]:rounded-none md:data-[active]:border-gray-700 md:data-[active]:text-gray-800',
          'dark:bg-gray-900/80 dark:text-cyan-100/50  dark:data-[active]:bg-gray-900 dark:data-[active]:text-cyan-400',
          'md:dark:bg-transparent md:dark:hover:text-cyan-500 md:dark:data-[active]:border-cyan-500 md:dark:data-[active]:bg-transparent',
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
        'fixed bottom-0 left-0 top-0 z-20 w-screen -translate-x-full bg-gray-800 bg-gradient-to-b from-gray-200 to-gray-400 will-change-transform',
        'md:sticky md:h-fit md:py-6',
        'dark:bg-gradient-to-br dark:from-cyan-900 dark:to-gray-950 md:dark:bg-gradient-to-r',
      )}
    >
      <NavigationMenu.List className="flex h-screen flex-col items-center justify-center gap-20 md:h-fit md:flex-row md:gap-8 lg:gap-12">
        <NavigationMenu.Item>
          <Link onClick={toggle} href="/">
            Inicio
          </Link>
        </NavigationMenu.Item>
        <NavigationMenu.Item>
          <Link onClick={toggle} href="/projects">
            Projetos
          </Link>
        </NavigationMenu.Item>
        <NavigationMenu.Item>
          <Link onClick={toggle} href="/career">
            Carreira
          </Link>
        </NavigationMenu.Item>
      </NavigationMenu.List>
    </NavigationMenu.Root>
  )
}
