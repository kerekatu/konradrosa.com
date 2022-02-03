import { siteMeta } from '@/lib/constants'
import React from 'react'

const Contact = () => {
  return (
    <section>
      <h2 className="text-3xl font-bold">Kontakt</h2>
      <div className="flex flex-col gap-4">
        <span className="text-md font-light uppercase text-amber-400 tracking-widest">
          Podoba Ci się to co widzisz?
        </span>
        <p>
          Aktualnie pracuję nad swoimi pobocznymi projektami i poszukuję pracy
          na stały etat. Jeśli zechcesz, możemy porozmawiać o możliwości
          zawarcia współpracy.
        </p>
        <a href={`mailto:${siteMeta.MAIL}`}>
          <h1 className="text-5xl font-bold underline underline-offset-[16px] decoration-wavy decoration-neutral-800 decoration-3 transition-colors hover:decoration-amber-400">
            Nawiążmy współpracę.
          </h1>
        </a>
      </div>
    </section>
  )
}

export default Contact
