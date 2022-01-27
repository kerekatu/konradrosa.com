import { CONTACTS } from '@/lib/constants'
import { ArrowSmLeftIcon, ArrowSmRightIcon } from '@heroicons/react/solid'
import { AnimatePresence, motion } from 'framer-motion'
import { Key, useEffect, useState } from 'react'
import useSWR from 'swr'

const PER_PAGE = 6

const Projects = () => {
  const [currentPage, setCurrentPage] = useState(1)
  const [pageCount, setPageCount] = useState(1)
  const [delayHandler, setDelayHandler] = useState<NodeJS.Timeout | null>(null)
  const [selectedRepo, setSelectedRepo] = useState<string | null>(null)
  const [showAllProjects, setShowAllProjects] = useState(false)
  const { data: githubUser } = useSWR<{ [key: string]: any }>(
    showAllProjects && 'https://api.github.com/users/kerekatu'
  )
  const { data: repos } = useSWR<[{ [key: string]: any }]>(
    showAllProjects &&
      `https://api.github.com/users/kerekatu/repos?sort=newest&per_page=${PER_PAGE}&page=${currentPage}&type=public`
  )

  useEffect(() => {
    const pages = Math.ceil(githubUser?.public_repos / PER_PAGE)
    setPageCount(pages)
  }, [githubUser])

  function handlePageChange(action: 'next' | 'previous') {
    if (action === 'next' && pageCount > currentPage) {
      setCurrentPage(currentPage + 1)
    } else if (action === 'previous' && currentPage !== 1) {
      setCurrentPage(currentPage - 1)
    }
  }

  return (
    <section id="projects" className="grid grid-cols-4 gap-4 h-screen pt-12">
      <div>
        <h2 className="text-3xl font-bold mb-8">Projekty</h2>
        {showAllProjects && (
          <p className="text-lg">
            Wszystkie projekty są pobierane bezpośrednio z mojego profilu na{' '}
            <a
              href={
                CONTACTS.find((contact) => contact.label === 'Github')?.link
              }
              target="_blank"
              rel="noreferrer"
              className="text-amber-400 transition-colors hover:text-amber-400/70"
            >
              Githubie
            </a>
            .
          </p>
        )}
        <AnimatePresence>
          {selectedRepo && (
            <motion.img
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              key={selectedRepo}
              src={`https://raw.githubusercontent.com/kerekatu/${selectedRepo}/main/project.png`}
              alt="Zdjęcie przedstawiające projekt"
              className="block"
            />
          )}
        </AnimatePresence>
      </div>

      <div className="col-span-3">
        <div className="flex justify-between items-center mb-8">
          <div className="flex gap-6">
            <button
              className={`text-xl py-1 px-6 rounded-full ${
                showAllProjects
                  ? 'transition-colors hover:text-amber-400'
                  : 'text-amber-400 border-2 border-amber-400 cursor-default'
              }`}
              onClick={() => setShowAllProjects(false)}
            >
              Wybrane
            </button>
            <button
              className={`text-xl py-1 px-6 rounded-full ${
                showAllProjects
                  ? 'text-amber-400 border-2 border-amber-400 cursor-default'
                  : 'transition-colors hover:text-amber-400'
              }`}
              onClick={() => setShowAllProjects(true)}
            >
              Wszystkie
            </button>
          </div>
          <div className="flex gap-4">
            <button
              className={`border-2 rounded-full p-1 transition-all ${
                currentPage !== 1
                  ? 'hover:border-neutral-300/70 hover:text-neutral-300/70 border-neutral-300 text-neutral-300'
                  : 'border-neutral-800 text-neutral-800 cursor-default'
              }`}
              onClick={() => handlePageChange('previous')}
            >
              <ArrowSmLeftIcon className="h-8" />
            </button>
            <button
              className={`border-2 rounded-full p-1 transition-all ${
                pageCount > currentPage
                  ? 'hover:border-neutral-300/70 hover:text-neutral-300/70 border-neutral-300 text-neutral-300'
                  : 'border-neutral-800 text-neutral-800 cursor-default'
              }`}
              onClick={() => handlePageChange('next')}
            >
              <ArrowSmRightIcon className="h-8" />
            </button>
          </div>
        </div>
        <AnimatePresence>
          <motion.ul
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.15, duration: 0.2 }}
            key={currentPage}
            className="grid grid-cols-2 gap-8"
          >
            {showAllProjects ? (
              githubUser && repos && repos.length > 0 ? (
                repos.map((repo) => (
                  <li
                    className="flex flex-col gap-4 border-2 border-neutral-800 rounded-lg p-6"
                    onMouseEnter={() => {
                      setDelayHandler(
                        setTimeout(async () => {
                          setSelectedRepo(repo.name)
                        }, 300)
                      )
                    }}
                    onMouseLeave={() => {
                      if (delayHandler) {
                        clearTimeout(delayHandler)
                        setDelayHandler(null)
                        setSelectedRepo(null)
                      }
                    }}
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
                  {Array(PER_PAGE).fill(
                    <div className="flex flex-col gap-4 border-2 border-neutral-800 rounded-lg p-6 h-32 animate-pulse">
                      <div className="bg-neutral-800 p-2 rounded-full"></div>
                      <div className="bg-neutral-800 p-2 rounded-full w-1/2"></div>
                    </div>
                  )}
                </>
              )
            ) : (
              <div></div>
            )}
          </motion.ul>
        </AnimatePresence>
      </div>
    </section>
  )
}

export default Projects
