import useOnClickOutside from '@/hooks/useOnClickOutside'
import { CONTACTS, NAV_ITEMS } from '@/lib/constants'
import { ChevronDownIcon } from '@heroicons/react/solid'
import { AnimatePresence, motion } from 'framer-motion'
import Link from 'next/link'
import React, { useRef, useState } from 'react'
import MobileNav from './MobileNav'

const Header = () => {
  const [showContact, setShowContact] = useState(false)
  const contactRef = useRef(null)

  useOnClickOutside(contactRef, () => setShowContact(false))

  return (
    <header>
      <motion.div
        className="max-w-6xl mx-auto px-8 h-full text-lg"
        initial={{ y: -100 }}
        transition={{ duration: 1 }}
        animate={{ y: 0 }}
      >
        <nav className="flex justify-between items-center h-full">
          <Link href="/">
            <a className="transition-opacity hover:opacity-70">Konrad Rosa</a>
          </Link>
          <ul className="hidden items-center gap-6 md:flex">
            {NAV_ITEMS.map((item, index) => (
              <li key={index}>
                <Link href={item.link}>
                  <a
                    className="transition-opacity hover:opacity-70"
                    target={item?.external ? '_blank' : '_self'}
                  >
                    {item.label}
                  </a>
                </Link>
              </li>
            ))}
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
          <MobileNav />
        </nav>
      </motion.div>
    </header>
  )
}

export default Header
