import { CONTACTS, siteMeta } from '@/lib/constants'

const Footer = ({ isVisible }: { isVisible: boolean }) => {
  return (
    <>
      {isVisible && (
        <footer>
          <nav className="flex items-center justify-between max-w-6xl mx-auto px-6 h-full border-t-2 border-neutral-800">
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
        </footer>
      )}
    </>
  )
}

export default Footer
