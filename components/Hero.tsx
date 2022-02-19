import { siteMeta } from '@/lib/constants'
import { ViewGridIcon } from '@heroicons/react/solid'
import Image from 'next/image'
import TiltButton from '@/components/TiltButton'
import Tooltip from '@/components/Tooltip'

const Hero = () => {
  return (
    <section className="flex mt-20 lg:items-center lg:mt-0 lg:min-h-[calc(100vh_-_100px)]">
      <div className="flex flex-col gap-8 lg:flex-row lg:items-center lg:mt-0">
        <div className="flex flex-col gap-6">
          <div className="flex items-center gap-2 self-start rounded-md">
            <h1 className="flex flex-col font-bold text-3xl leading-tight text-neutral-200 z-10 md:text-4xl">
              <span className="text-xl font-light text-neutral-500 mb-2 md:text-2xl">
                Cześć, tu Konrad! 👋
              </span>{' '}
              Jestem Front-end Deweloperem.
            </h1>
          </div>
          <div className="flex flex-col text-lg gap-6 sm:flex-row sm:items-center">
            <span className="flex border-2 border-neutral-800 py-1 px-6 rounded-full text-center justify-center w-[200px]">
              🇵🇱 Lublin, Polska
            </span>
            <div className="flex gap-3">
              {siteMeta.TOPICS.map((topic, index) => (
                <Tooltip tip={topic.label} key={index}>
                  <img
                    src={topic.iconPath}
                    alt={`Ikona ${topic.label}`}
                    className={`h-8 w-8 text-[${topic.color}]`}
                  />
                </Tooltip>
              ))}
            </div>
          </div>
          <p className="text-lg max-w-[56ch] mb-6 lg:w-[56ch]">
            {siteMeta.DESCRIPTION}
          </p>
          <div className="flex flex-col gap-6 sm:flex-row">
            <TiltButton
              onClick={() => (location.href = `mailto:${siteMeta.MAIL}`)}
            >
              Zatrudnij mnie
            </TiltButton>
            <a
              href="#projects"
              className="flex items-center mr-auto gap-2 py-3 text-neutral-200 text-xl transition-opacity hover:opacity-70 mb:px-6"
            >
              <ViewGridIcon className="h-5" />
              Zobacz Projekty
            </a>
          </div>
        </div>
        <div className="hidden lg:block">
          <Image
            src="/static/profil.jpg"
            height={900}
            width={700}
            alt="Zdjęcie przedstawia moją osobę"
            className="rounded-md pointer-events-none"
          />
        </div>
      </div>
    </section>
  )
}

export default Hero
