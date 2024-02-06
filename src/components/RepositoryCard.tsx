import { GithubLogo, Globe } from '@phosphor-icons/react'

interface RepositoryCardProps {
  title: string
  description: string
  linkSite?: string
  linkGithub?: string
}

export default function RepositoryCard({
  title,
  description,
  linkSite,
  linkGithub,
}: RepositoryCardProps) {
  return (
    <div className="flex min-h-44 w-60 flex-col rounded border border-cyan-400 px-4 py-6 shadow-inner shadow-cyan-600">
      <h4 className="mb-2 text-xl font-bold dark:text-cyan-50">{title}</h4>
      <p className="line-clamp-4 text-sm text-gray-700 dark:text-cyan-100">
        {description}
      </p>
      <div className="ml-auto mt-auto flex gap-4">
        <a
          className="font-semibold text-gray-500 transition duration-300 hover:text-cyan-500"
          href={linkGithub}
          target="_blank"
          rel="noopener noreferrer"
        >
          <GithubLogo className="h-6 w-6" />
        </a>
        {linkSite && (
          <a
            className="font-semibold text-gray-500 transition duration-300 hover:text-cyan-500"
            href={linkSite}
            target="_blank"
            rel="noopener noreferrer"
          >
            <Globe className="h-6 w-6" />
          </a>
        )}
      </div>
    </div>
  )
}
