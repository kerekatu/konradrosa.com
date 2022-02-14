import { ArrowSmLeftIcon, ArrowSmRightIcon } from '@heroicons/react/solid'
import { useEffect, useState } from 'react'
import useSWR from 'swr'
import ProjectsGithub from '@/components/ProjectsGithub'
import ProjectsPicks from '@/components/ProjectsPicks'
import { PROJECTS } from '@/lib/constants'

export const PER_PAGE = 4

const Projects = () => {
  const [currentPage, setCurrentPage] = useState(1)
  const [pageCount, setPageCount] = useState(1)
  const [showAllProjects, setShowAllProjects] = useState(false)
  const { data: reposCount } = useSWR<{ reposCount: number }>(
    showAllProjects ? 'api/repos/count' : null
  )

  useEffect(() => {
    if (reposCount) {
      const reposPages = Math.ceil(reposCount.reposCount / PER_PAGE)
      setPageCount(reposPages)
    } else {
      const selectedProjectsPages = Math.ceil(PROJECTS.length / 2)
      setPageCount(selectedProjectsPages)
    }
  }, [reposCount])

  function handleChangeCategory(allProjects: boolean = false) {
    setCurrentPage(1)
    setShowAllProjects(allProjects)
  }

  function handlePageChange(action: 'next' | 'previous') {
    if (action === 'next' && pageCount > currentPage) {
      setCurrentPage(currentPage + 1)
    } else if (action === 'previous' && currentPage > 1) {
      setCurrentPage(currentPage - 1)
    }
  }

  return (
    <section id="projects" className="flex flex-col gap-12 min-h-screen pt-12">
      <div className="grid grid-cols-4">
        <h2 className="text-3xl font-bold mb-6 lg:mb-0">Projekty</h2>
        <div className="flex flex-col col-span-4 col-start-1 gap-6 sm:flex-row lg:col-span-3 lg:items-center sm:justify-between">
          <div className="flex flex-col gap-6 sm:flex-row">
            <button
              className={`text-xl py-1 px-6 border-2 rounded-full ${
                showAllProjects
                  ? 'border-neutral-300 transition-colors hover:text-amber-400 hover:border-amber-400'
                  : 'text-amber-400 border-2 border-amber-400'
              }`}
              onClick={() => handleChangeCategory(false)}
              disabled={!showAllProjects}
            >
              Wybrane
            </button>
            <button
              className={`text-xl py-1 px-6 border-2 rounded-full ${
                showAllProjects
                  ? 'text-amber-400 border-amber-400'
                  : 'border-neutral-300 transition-colors hover:text-amber-400 hover:border-amber-400'
              }`}
              onClick={() => handleChangeCategory(true)}
              disabled={showAllProjects}
            >
              Wszystkie
            </button>
          </div>
          <div
            className={`gap-4 ${pageCount <= 1 ? 'hidden' : 'flex'} sm:flex`}
          >
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

      <div>
        {!showAllProjects ? (
          <ProjectsPicks />
        ) : (
          <ProjectsGithub show={showAllProjects} currentPage={currentPage} />
        )}
      </div>
    </section>
  )
}

export default Projects
