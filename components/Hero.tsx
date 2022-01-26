import { siteMeta } from '@/lib/constants'
import { ViewGridIcon } from '@heroicons/react/solid'
import Image from 'next/image'
import TiltButton from './TiltButton'

const Hero = () => {
  return (
    <section className="h-full flex gap-8 items-center">
      <div className="flex flex-col gap-6">
        <div className="flex items-center gap-2 self-start rounded-md">
          <h1 className="flex flex-col font-bold text-4xl leading-tight text-neutral-200 z-10">
            <span className="text-2xl font-light text-neutral-500">
              Cześć, tu Konrad! 👋
            </span>{' '}
            Jestem Front-end Deweloperem.
          </h1>
        </div>
        <div className="flex text-lg gap-6 items-center">
          <span className="border-2 border-neutral-800 py-1 px-6 rounded-full">
            🇵🇱 Lublin, Polska
          </span>
          <div className="flex gap-2">
            {siteMeta.TOPICS.map((topic, index) => (
              <img
                src={topic.iconPath}
                alt={`Ikona ${topic.label}`}
                key={index}
                className="h-8 w-8 filter-white"
              />
            ))}
          </div>
        </div>
        <p className="text-lg w-[56ch] mb-6">{siteMeta.DESCRIPTION}</p>
        <div className="flex gap-4">
          <TiltButton>Zatrudnij mnie</TiltButton>
          <button className="flex items-center gap-2 py-3 px-6 text-neutral-200 text-xl transition-opacity hover:opacity-70">
            <ViewGridIcon className="h-5" />
            Zobacz Projekty
          </button>
        </div>
      </div>
      <div>
        <Image
          src="/static/profil.jpg"
          height={800}
          width={650}
          alt="Zdjęcie przedstawia moją osobę"
          className="transform scale-x-[-1] rounded-md"
        />
      </div>
    </section>
  )
}

export default Hero
