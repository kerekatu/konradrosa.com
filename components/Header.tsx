import { CONTACTS } from '@/lib/constants'
import { ChevronDownIcon, ChevronUpIcon } from '@heroicons/react/solid'
import Link from 'next/link'
import React, { useState } from 'react'

const Header = () => {
  const [showContact, setShowContact] = useState(false)

  return (
    <header>
      <div className="max-w-6xl mx-auto px-6 h-full">
        <nav className="flex justify-between items-center h-full">
          <Link href="/">
            <a className="text-lg">Konrad Rosa</a>
          </Link>
          <ul className="flex items-center gap-6 text-lg">
            <li>
              <Link href="/blog">
                <a>Blog</a>
              </Link>
            </li>
            <li>
              <a href="#projekty">Projekty</a>
            </li>
            <li className="relative">
              <button
                className={`flex gap-1 text-amber-400 items-center border-2 border-amber-400/70 px-6 py-2 rounded-full transition-all hover:bg-amber-400 hover:border-amber-400 hover:text-black`}
                onClick={() => setShowContact(!showContact)}
              >
                Skontaktuj się
                {!showContact ? (
                  <ChevronDownIcon className={'h-5'} />
                ) : (
                  <ChevronUpIcon className="h-5" />
                )}
              </button>
              {showContact && (
                <ul className="flex flex-col absolute top-16 left-0 z-30 bg-neutral-800 w-full rounded-md">
                  {CONTACTS.map((contact, index) => (
                    <li key={index} className="flex">
                      <a
                        href={contact.link}
                        target="_blank"
                        rel="noreferrer"
                        className="flex items-center gap-4 py-4 px-6 w-full hover:bg-neutral-900/50"
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
                </ul>
              )}
            </li>
          </ul>
        </nav>
      </div>
    </header>
  )
}

export default Header
