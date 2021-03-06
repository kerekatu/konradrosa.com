import { PROJECTS } from '@/lib/constants'
import interpolateTooltip from '@/lib/interpolateTooltip'
import { CodeIcon, ExternalLinkIcon, LinkIcon } from '@heroicons/react/solid'
import { AnimatePresence, motion, Variants } from 'framer-motion'
import Image from 'next/image'

const cardVariants: Variants = {
  offScreen: {
    opacity: 0,
  },
  onScreen: {
    opacity: 1,
    transition: {
      duration: 0.5,
    },
  },
}

const ProjectsPicks = () => {
  return (
    <AnimatePresence>
      <motion.ul
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.15, duration: 0.2 }}
        className="flex flex-col gap-12 divide-y divide-neutral-800 md:divide-y-0 md:gap-24"
      >
        {PROJECTS.map((project, index) => (
          <motion.li
            className="flex flex-col justify-between gap-12 pt-12 lg:flex-row md:pt-0 first:pt-0"
            variants={cardVariants}
            initial="offScreen"
            whileInView="onScreen"
            viewport={{ once: true, amount: 0.4 }}
            key={index}
          >
            <div className="flex flex-col gap-4 w-full md:w-[580px]">
              <span className="uppercase leading-4 text-sm tracking-widest text-neutral-500">
                {project.type}
              </span>
              <h3 className="text-3xl font-bold">{project.title}</h3>
              <span className="text-lg text-neutral-300/70">
                {interpolateTooltip(project.description)}
              </span>

              <div className="flex flex-col items-start gap-2 mt-auto">
                {project?.previewLink && (
                  <a
                    className="flex items-center gap-2 text-xl font-bold transition-opacity hover:opacity-70"
                    href={project.previewLink}
                  >
                    <ExternalLinkIcon className="h-6" />
                    Podgląd na żywo
                  </a>
                )}
                {project?.codeLink && (
                  <a
                    className="flex items-center gap-2 text-xl font-bold transition-opacity hover:opacity-70"
                    href={project.codeLink}
                  >
                    <CodeIcon className="h-6" />
                    Zobacz kod
                  </a>
                )}
              </div>
            </div>
            <a
              href={project.previewLink}
              target="_blank"
              rel="noreferrer"
              className={`group relative h-56 w-full shadow-md transition-shadow ${
                project.previewLink ? 'hover:shadow-xl' : ''
              } lg:h-96`}
            >
              {project.previewLink && (
                <LinkIcon className="opacity-0 absolute top-6 right-6 z-10 h-8 text-neutral-300/90 border-2 border-neutral-700/40 bg-neutral-800/60 p-2 rounded-xl box-content transition-opacity group-hover:opacity-100" />
              )}
              <ul className="absolute bottom-6 left-6 z-10 flex gap-x-2 gap-y-3 flex-wrap">
                {project.tags.map((tag, index) => (
                  <li
                    key={index}
                    className="border-2 border-neutral-700/40 bg-neutral-800/60 py-1 px-4 text-xs font-semibold rounded-md uppercase"
                  >
                    {tag}
                  </li>
                ))}
              </ul>
              <Image
                src={`/static/projects/project-${index + 1}.png`}
                layout="fill"
                objectFit="cover"
                className="pointer-events-none rounded-2xl"
                quality={100}
                alt={`Zdjęcie przedstawia projekt ${project.title}`}
              />
            </a>
          </motion.li>
        ))}
      </motion.ul>
    </AnimatePresence>
  )
}

export default ProjectsPicks
