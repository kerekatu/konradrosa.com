import { CONTACTS } from '@/lib/constants'
import { AnimatePresence, motion } from 'framer-motion'
import { Key, useState } from 'react'
import useSWR from 'swr'

const GithubProjects = ({
  show,
  user,
  currentPage,
  reposPerPage,
}: {
  show: boolean
  user: { [key: string]: any }
  currentPage: number
  reposPerPage: number
}) => {
  const { data: repos } = useSWR<[{ [key: string]: any }]>(
    show &&
      `https://api.github.com/users/kerekatu/repos?sort=newest&per_page=${reposPerPage}&page=${currentPage}&type=public`
  )

  return (
    <div className="grid grid-cols-4 gap-6">
      <p className="text-lg">
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
          className="grid grid-cols-2 gap-8 col-span-3"
        >
          {show &&
            (user && repos && repos.length > 0 ? (
              repos.map((repo) => (
                <li
                  className="flex flex-col gap-4 border-2 border-neutral-800 rounded-lg p-6"
                  key={repo.id}
                >
                  {/* <span>
                    {format(Date.parse(repo.created_at), 'dd. MMM yyyy ', {
                      locale: pl,
                    })}
                  </span> */}
                  <h3 className="text-lg font-bold">{repo.name}</h3>
                  {repo?.description && <p>{repo.description}</p>}
                  {repo?.topics && (
                    <div className="flex gap-x-2 gap-y-3 flex-wrap mt-auto">
                      {repo.topics.map((topic: string, index: Key) => (
                        <span
                          key={index}
                          className="bg-neutral-800 px-4 p-1 rounded-full text-xs"
                        >
                          {topic}
                        </span>
                      ))}
                    </div>
                  )}
                </li>
              ))
            ) : (
              <>
                {Array(reposPerPage).fill(
                  <div className="flex flex-col gap-4 border-2 border-neutral-800 rounded-lg p-6 h-32 animate-pulse">
                    <div className="bg-neutral-800 p-2 rounded-full"></div>
                    <div className="bg-neutral-800 p-2 rounded-full w-1/2"></div>
                  </div>
                )}
              </>
            ))}
        </motion.ul>
      </AnimatePresence>
    </div>
  )
}

export default GithubProjects
