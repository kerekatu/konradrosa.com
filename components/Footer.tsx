import { CONTACTS, siteMeta } from '@/lib/constants'

const Footer = ({ isVisible }: { isVisible: boolean }) => {
  return (
    <>
      {isVisible && (
        <footer className="bg-neutral-800 text-neutral-200">
          <div className="flex flex-col max-w-6xl mx-auto px-8 h-full">
            <div className="pt-24">
              <div className="flex flex-col gap-4">
                <h2 className="text-4xl sm:text-5xl font-bold">
                  Nawiążmy współpracę.
                </h2>
                <p className="text-xl mt-8">
                  <span className="font-semibold">
                    Aktualnie szukam pracy na stały etat lub projektów na
                    zlecenie.
                  </span>{' '}
                  Jeśli zechcesz, możemy porozmawiać o możliwości zawarcia
                  współpracy. Staram się odpowiadać na wszystkie wiadomości 😀!
                </p>
                <a className="w-max mt-8" href={`mailto:${siteMeta.MAIL}`}>
                  <h2 className="block text-2xl underline decoration-amber-400 underline-offset-[18px] duration-200  transition-all hover:text-amber-400 hover:underline-offset-[12px] sm:text-3xl">
                    {siteMeta.MAIL}
                  </h2>
                </a>
              </div>
            </div>

            <nav className="flex flex-col items-center justify-center gap-3 py-4 mt-16 min-h-[100px]  sm:justify-between sm:flex-row">
              <ul className="flex gap-x-12 items-center">
                {CONTACTS.map((contact, index) => (
                  <li key={index}>
                    <a
                      href={contact.link}
                      target="_blank"
                      rel="noreferrer"
                      className="flex items-center gap-5 py-2 hover:bg-neutral-800 rounded-md transition-opacity hover:opacity-70"
                    >
                      <img
                        src={contact.iconPath}
                        alt={`Ikona ${contact.label}`}
                        className="h-6 w-6"
                      />
                      <span className="hidden sm:block">{contact.label}</span>
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
