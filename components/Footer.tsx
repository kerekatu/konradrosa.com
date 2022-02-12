import { CONTACTS, siteMeta } from '@/lib/constants'

const Footer = ({ isVisible }: { isVisible: boolean }) => {
  return (
    <>
      {isVisible && (
        <footer className="bg-neutral-800 text-neutral-200">
          <div className="flex flex-col max-w-6xl mx-auto px-8 h-full">
            <div className="pt-24">
              <div className="flex flex-col gap-4">
                <a className="w-max" href={`mailto:${siteMeta.MAIL}`}>
                  <h2 className="inline-block text-5xl font-bold underline decoration-amber-400 underline-offset-[24px] transition-all hover:text-amber-400 hover:underline-offset-[16px]">
                    Nawiążmy współpracę.
                  </h2>
                </a>
                <p className="text-xl mt-12">
                  Aktualnie pracuję nad swoimi projektami i poszukuję pracy na
                  stały etat. Jeśli zechcesz, możemy porozmawiać o możliwości
                  zawarcia współpracy. Staram się odpowiadać na wszystkie
                  wiadomości 😀!
                </p>
              </div>
            </div>

            <nav className="flex items-center justify-between mt-12 h-[100px]">
              <ul className="flex gap-10">
                {CONTACTS.map((contact, index) => (
                  <li key={index}>
                    <a
                      href={contact.link}
                      target="_blank"
                      rel="noreferrer"
                      className="font-semibold transition-opacity hover:opacity-70"
                    >
                      {contact.label.toLowerCase().includes('mail')
                        ? siteMeta.MAIL
                        : contact.label}
                    </a>
                  </li>
                ))}
              </ul>
              <div>Konrad Rosa &copy; {new Date().getFullYear()}</div>
            </nav>
          </div>
        </footer>
      )}
    </>
  )
}

export default Footer
