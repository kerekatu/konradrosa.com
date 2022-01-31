import { PROJECTS } from '@/lib/constants'
import interpolateTooltip from '@/lib/interpolateTooltip'
import { CodeIcon, ExternalLinkIcon } from '@heroicons/react/solid'
import Image from 'next/image'

const ProjectsPicks = () => {
  return (
    <ul>
      {PROJECTS.map((project, index) => (
        <li className="flex justify-between gap-12" key={index}>
          <div className="flex flex-col gap-4 w-[580px]">
            <span className="uppercase leading-4 text-sm tracking-widest text-neutral-500">
              {project.type}
            </span>
            <h3 className="text-3xl font-bold">{project.title}</h3>
            <span className="text-lg text-neutral-300/70">
              {interpolateTooltip(project.description)}
            </span>

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
  )
}

export default ProjectsPicks
