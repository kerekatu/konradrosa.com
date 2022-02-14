import { CONTACTS } from '@/lib/constants'
import { LinkIcon } from '@heroicons/react/solid'
import { AnimatePresence, motion } from 'framer-motion'
import { Key } from 'react'
import { PER_PAGE } from '@/components/Projects'
import Tooltip from '@/components/Tooltip'
import { GithubUserRepo } from '@/typings/github'
import useSWR from 'swr'

const ProjectsGithub = ({
  show,
  currentPage,
}: {
  show: boolean
  currentPage: number
}) => {
  const { data: repos } = useSWR<GithubUserRepo[]>(
    `api/repos?per_page=${PER_PAGE}&page=${currentPage}`
  )

  return (
    <div className="grid grid-cols-4 gap-6">
      <p className="text-lg col-span-4 lg:col-span-1">
        Wszystkie projekty są pobierane bezpośrednio z mojego profilu na{' '}
        <a
          href={CONTACTS.find((contact) => contact.label === 'Github')?.link}
          target="_blank"
          rel="noreferrer"
          className="text-amber-400 transition-colors hover:text-amber-400/70"
        >
          Githubie
        </a>
        .
      </p>
      <AnimatePresence>
        <motion.ul
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.15, duration: 0.2 }}
          key={currentPage}
          className="grid grid-cols-1 gap-8 col-span-4 md:grid-cols-2 lg:col-span-3"
        >
          {show &&
            (repos && repos.length > 0 ? (
              repos.map((repo) => (
                <li className="flex" key={repo.id}>
                  <a
                    href={repo.html_url}
                    className="flex flex-col gap-4 border-2 border-neutral-800 rounded-lg p-6 w-full transition-colors hover:border-neutral-700 group"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <h3 className="flex items-center gap-2 text-lg font-bold">
                      <Tooltip tip="Przejdź do repozytorium">
                        <LinkIcon className="h-6 text-neutral-700/70 transition-colors group-hover:text-neutral-700" />
                      </Tooltip>{' '}
                      {repo.name}
                    </h3>

                    {repo?.description && (
                      <p className="line-clamp-2 text-neutral-300/70 transition-colors group-hover:text-neutral-300">
                        {repo.description}
                      </p>
                    )}
                    {repo?.topics && (
                      <div className="flex gap-2 flex-wrap mt-auto">
                        {repo.topics.map((topic: string, index: Key) => (
                          <span
                            key={index}
                            className="bg-neutral-800 px-4 p-1 rounded-md text-xs text-neutral-400 opacity-70 transition-opacity hover:opacity-100"
                          >
                            {topic}
                          </span>
                        ))}
                      </div>
                    )}
                  </a>
                </li>
              ))
            ) : (
              <>
                {Array.from(Array(PER_PAGE), (_, index) => (
                  <div
                    className="flex flex-col gap-4 border-2 border-neutral-800 rounded-lg p-6 h-32 animate-pulse"
                    key={index}
                  >
                    <div className="bg-neutral-800 p-2 rounded-full"></div>
                    <div className="bg-neutral-800 p-2 rounded-full w-1/2"></div>
                  </div>
                ))}
              </>
            ))}
        </motion.ul>
      </AnimatePresence>
    </div>
  )
}

export default ProjectsGithub
