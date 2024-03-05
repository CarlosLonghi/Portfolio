import { motion } from 'framer-motion'
import { GithubLogo, Globe } from '@phosphor-icons/react'
import { twMerge } from 'tailwind-merge'

interface RepositoryCardProps {
  title: string
  description: string
  linkSite?: string
  linkGithub?: string
}

const card = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
  },
}

export default function RepositoryCard({
  title,
  description,
  linkSite,
  linkGithub,
}: RepositoryCardProps) {
  return (
    <motion.article
      variants={card}
      className={twMerge(
        'group flex min-h-48 w-60 flex-col rounded border border-gray-500 bg-gray-400 px-4 py-5 shadow-inner shadow-gray-500',
        'dark:border-cyan-500 dark:bg-transparent dark:shadow-cyan-800',
      )}
    >
      <h4 className="mb-2 text-xl font-bold dark:text-cyan-50">{title}</h4>
      <p className="line-clamp-4 text-sm text-gray-800 dark:text-cyan-100">
        {description}
      </p>
      <div className="ml-auto mt-auto flex gap-3">
        <a
          className={twMerge(
            'rounded-full bg-gray-500 p-2 font-semibold text-gray-100 shadow-inner shadow-gray-600 transition duration-300 ease-in',
            'hover:shadow-gray-800 group-hover:text-cyan-500',
            'dark:bg-gray-900 dark:text-gray-500 dark:shadow-md dark:shadow-gray-950',
            'dark:hover:shadow-cyan-800 dark:group-hover:text-cyan-500',
          )}
          href={linkGithub}
          target="_blank"
          rel="noopener noreferrer"
        >
          <GithubLogo className="h-6 w-6" />
        </a>
        {linkSite && (
          <a
            className={twMerge(
              'rounded-full bg-gray-500 p-2 font-semibold text-gray-100 shadow-inner shadow-gray-600 transition duration-300 ease-in',
              'hover:shadow-gray-800 group-hover:text-cyan-500',
              'dark:bg-gray-900 dark:text-gray-500 dark:shadow-md dark:shadow-gray-950',
              'dark:hover:shadow-cyan-800 dark:group-hover:text-cyan-500',
            )}
            href={linkSite}
            target="_blank"
            rel="noopener noreferrer"
          >
            <Globe className="h-6 w-6" />
          </a>
        )}
      </div>
    </motion.article>
  )
}
