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
    <div className="group flex min-h-48 w-60 flex-col rounded border border-cyan-500 px-4 py-5 shadow-inner shadow-cyan-800">
      <h4 className="mb-2 text-xl font-bold dark:text-cyan-50">{title}</h4>
      <p className="line-clamp-4 text-sm text-gray-700 dark:text-cyan-100">
        {description}
      </p>
      <div className="ml-auto mt-auto flex gap-3">
        <a
          className="rounded-full bg-gray-900 p-2 font-semibold text-gray-500 shadow-md shadow-gray-950 transition duration-300 ease-in hover:scale-110 group-hover:text-cyan-500 group-hover:shadow-cyan-800"
          href={linkGithub}
          target="_blank"
          rel="noopener noreferrer"
        >
          <GithubLogo className="h-6 w-6" />
        </a>
        {linkSite && (
          <a
            className="rounded-full bg-gray-900 p-2 font-semibold text-gray-500 shadow-md shadow-gray-950 transition duration-300 ease-in hover:scale-110 group-hover:text-cyan-500 group-hover:shadow-cyan-800"
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
