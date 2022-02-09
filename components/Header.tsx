import useOnClickOutside from '@/hooks/useOnClickOutside'
import { CONTACTS } from '@/lib/constants'
import { ChevronDownIcon } from '@heroicons/react/solid'
import { AnimatePresence, motion } from 'framer-motion'
import Link from 'next/link'
import React, { useRef, useState } from 'react'

const Header = () => {
  const [showContact, setShowContact] = useState(false)
  const contactRef = useRef(null)

  useOnClickOutside(contactRef, () => setShowContact(false))

  return (
    <header>
      <div className="max-w-6xl mx-auto px-6 h-full">
        <nav className="flex justify-between items-center h-full">
          <Link href="/">
            <a className="text-lg transition-opacity hover:opacity-70">
              Konrad Rosa
            </a>
          </Link>
          <ul className="flex items-center gap-6 text-lg">
            <li>
              <Link href="/blog">
                <a className="transition-opacity hover:opacity-70">Blog</a>
              </Link>
            </li>
            <li>
              <a
                href="#projekty"
                className="transition-opacity hover:opacity-70"
              >
                Projekty
              </a>
            </li>
            <li className="relative" ref={contactRef}>
              <button
                className={`flex gap-1 text-amber-400 items-center border-2 border-amber-400/70 px-6 py-2 rounded-full ${
                  showContact
                    ? 'bg-amber-400 border-amber-400 text-black'
                    : 'transition-all hover:bg-amber-400 hover:border-amber-400 hover:text-black'
                }`}
                onClick={() => setShowContact(!showContact)}
              >
                Skontaktuj się
                <ChevronDownIcon
                  className={`h-5 transition-transform ${
                    showContact ? 'transform rotate-180' : ''
                  }`}
                />
              </button>
              <AnimatePresence>
                {showContact && (
                  <motion.ul
                    className="flex flex-col absolute top-14 left-0 z-30 bg-neutral-800/80 w-full rounded-md shadow-lg"
                    initial={{ opacity: 0, y: 0 }}
                    animate={{
                      opacity: 1,
                      y: 20,
                    }}
                    exit={{ opacity: 0, y: 0 }}
                    transition={{ duration: 0.2 }}
                    role="list"
                    key="dropdown"
                  >
                    {CONTACTS.map((contact, index) => (
                      <li key={index} className="flex">
                        <a
                          href={contact.link}
                          target="_blank"
                          rel="noreferrer"
                          className="flex items-center gap-5 py-4 px-7 w-full transition-colors hover:bg-neutral-800 rounded-md"
                        >
                          <img
                            src={contact.iconPath}
                            alt={`Ikona ${contact.label}`}
                            className="h-6 w-6"
                          />
                          {contact.label}
                        </a>
                      </li>
                    ))}
                  </motion.ul>
                )}
              </AnimatePresence>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  )
}

export default Header
