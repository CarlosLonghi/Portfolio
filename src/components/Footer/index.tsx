import { Github, Instagram, Linkedin } from './MediaLinks'

export default function Footer() {
  return (
    <footer className="flex justify-center bg-gradient-to-t from-gray-400 to-gray-300 px-4 py-8 text-gray-900 dark:from-cyan-950 dark:to-gray-950 dark:text-gray-100">
      <ul className="flex items-center gap-10 md:gap-8 lg:gap-16">
        <li>
          <Github />
        </li>
        <li>
          <Linkedin />
        </li>
        <li>
          <Instagram />
        </li>
      </ul>
    </footer>
  )
}
