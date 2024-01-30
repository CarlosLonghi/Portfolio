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
    <div className="flex min-h-44 w-64 flex-col rounded bg-gray-300 px-4 py-4 dark:bg-gray-400">
      <h4 className="mb-2 text-xl font-bold dark:text-gray-900">{title}</h4>
      <p className="line-clamp-4 text-sm text-gray-700 dark:text-gray-900">
        {description}
      </p>
      <div className="mt-auto flex flex-col gap-1">
        <div className="font-semibold text-gray-600">
          <span className="text-gray-900">GitHub: </span>
          <a
            className="decoration-gray-600 underline-offset-4 transition hover:underline"
            href={linkGithub}
            target="_blank"
            rel="noopener noreferrer"
          >
            {title}
          </a>
        </div>
        {linkSite && (
          <div className="font-semibold text-gray-600">
            <span className="text-gray-900">Site: </span>
            <a
              className="decoration-gray-600 underline-offset-4 transition hover:underline"
              href={linkSite}
              target="_blank"
              rel="noopener noreferrer"
            >
              {title}
            </a>
          </div>
        )}
      </div>
    </div>
  )
}
