import { PROJECTS } from '@/lib/constants'
import {
  ArrowSmLeftIcon,
  ArrowSmRightIcon,
  CodeIcon,
  ExternalLinkIcon,
} from '@heroicons/react/solid'
import { useEffect, useState } from 'react'
import useSWR from 'swr'
import GithubProjects from '@/components/GithubProjects'
import Image from 'next/image'
import interpolateTooltip from '@/lib/interpolateTooltip'

const PER_PAGE = 4

const Projects = () => {
  const [currentPage, setCurrentPage] = useState(1)
  const [pageCount, setPageCount] = useState(1)
  const [showAllProjects, setShowAllProjects] = useState(false)
  const { data: githubUser } = useSWR<{ [key: string]: any }>(
    showAllProjects && 'https://api.github.com/users/kerekatu'
  )

  useEffect(() => {
    const pages = Math.ceil(githubUser?.public_repos / PER_PAGE)
    setPageCount(pages)
  }, [githubUser])

  function handlePageChange(action: 'next' | 'previous') {
    if (action === 'next' && pageCount > currentPage) {
      setCurrentPage(currentPage + 1)
    } else if (action === 'previous' && currentPage > 1) {
      setCurrentPage(currentPage - 1)
    }
  }

  return (
    <section id="projects" className="flex flex-col gap-12 h-screen pt-12">
      <div className="grid grid-cols-4">
        <h2 className="text-3xl font-bold">Projekty</h2>
        <div className="flex col-span-3 justify-between items-center">
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
      </div>

      <div className="col-span-3">
        {!showAllProjects ? (
          <ul>
            {PROJECTS.map((project, index) => (
              <li className="flex justify-between gap-12" key={index}>
                <div className="flex flex-col gap-4 w-[580px]">
                  <span className="uppercase leading-4 text-sm tracking-widest text-neutral-500">
                    {project.type}
                  </span>
                  <h3 className="text-3xl font-bold">{project.title}</h3>
                  <p className="text-lg text-neutral-500">
                    {interpolateTooltip(project.description)}
                  </p>

                  <div className="flex flex-col gap-2 mt-auto">
                    {project?.previewLink && (
                      <a
                        className="flex items-center gap-2 text-xl font-bold transition-opacity hover:opacity-70"
                        href={project.previewLink}
                      >
                        <ExternalLinkIcon className="h-6" />
                        Zobacz na żywo
                      </a>
                    )}
                    {project?.codeLink && (
                      <a
                        className="flex items-center gap-2 text-xl font-bold transition-opacity hover:opacity-70"
                        href={project.codeLink}
                      >
                        <CodeIcon className="h-6" />
                        Kod źródłowy
                      </a>
                    )}
                  </div>
                </div>
                <div className="relative h-96 w-full shadow-md">
                  <Image
                    src={`/static/projects/project-${index + 1}.png`}
                    layout="fill"
                    objectFit="cover"
                    className="pointer-events-none rounded-2xl"
                    quality={100}
                    alt={`Zdjęcie przedstawia projekt ${project.title}`}
                  />
                </div>
              </li>
            ))}
          </ul>
        ) : (
          <GithubProjects
            show={showAllProjects}
            user={githubUser!}
            currentPage={currentPage}
            reposPerPage={PER_PAGE}
          />
        )}
      </div>
    </section>
  )
}

export default Projects
