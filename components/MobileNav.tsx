import useOnClickOutside from '@/hooks/useOnClickOutside'
import { CONTACTS, NAV_ITEMS } from '@/lib/constants'
import { MenuAlt4Icon, XIcon } from '@heroicons/react/outline'
import { AnimatePresence, motion } from 'framer-motion'
import { useEffect, useRef, useState } from 'react'

const variantsShowMenu = {
  visible: { opacity: 1, scale: 1 },
  hidden: { opacity: 0, scale: 0 },
}

const variantsMenuContainer = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.1 } },
  exit: { opacity: 0 },
}

const variantsMenuItems = {
  hidden: { opacity: 0, x: -100 },
  visible: { opacity: 1, x: 0 },
  exit: { opacity: 0 },
}

const MobileNav = () => {
  const [showMenu, setShowMenu] = useState(false)
  const menuRef = useRef(null)
  const navItems: NavItem[] = [...NAV_ITEMS, ...CONTACTS]

  useOnClickOutside(menuRef, toggleNav)

  function toggleNav() {
    if (showMenu) {
      setShowMenu(false)
      document.body.style.overflow = ''
    } else {
      setShowMenu(true)
      document.body.style.overflow = 'hidden'
    }
  }

  useEffect(() => {
    return function cleanup() {
      document.body.style.overflow = ''
    }
  }, [])

  return (
    <div className="flex items-center md:hidden">
      <AnimatePresence initial={false} exitBeforeEnter>
        <button
          className="h-8 w-8 transition-opacity hover:opacity-70"
          onClick={toggleNav}
        >
          {showMenu ? (
            <motion.div
              key="menu-icon-1"
              variants={variantsShowMenu}
              initial="hidden"
              animate="visible"
              exit="hidden"
              transition={{ duration: 0.3 }}
            >
              <XIcon className="h-8" />
            </motion.div>
          ) : (
            <motion.div
              key="menu-icon-2"
              variants={variantsShowMenu}
              initial="hidden"
              animate="visible"
              exit="hidden"
              transition={{ duration: 0.3 }}
            >
              <MenuAlt4Icon className="h-8" />
            </motion.div>
          )}
        </button>
      </AnimatePresence>

      <AnimatePresence>
        {showMenu && (
          <motion.ul
            className="fixed flex flex-col top-[100px] left-0 w-full h-[calc(100vh_-_100px)] overflow-hidden bg-neutral-900 px-8 text-xl z-40 divide-y divide-neutral-800"
            key="menu-list"
            variants={variantsMenuContainer}
            initial="hidden"
            animate="visible"
            exit="exit"
            transition={{ duration: 0.3 }}
            ref={menuRef}
          >
            {navItems.map((item, index) => (
              <motion.li
                variants={variantsMenuItems}
                className="flex"
                key={index}
              >
                <a
                  className="flex gap-5 items-center py-4 w-full transition-opacity hover:opacity-70"
                  onClick={toggleNav}
                  href={item.link}
                >
                  {item?.iconPath && (
                    <img
                      src={item.iconPath}
                      alt={`Ikona ${item.label}`}
                      className="h-6 w-6"
                    />
                  )}
                  {item.label}
                </a>
              </motion.li>
            ))}
          </motion.ul>
        )}
      </AnimatePresence>
    </div>
  )
}

export default MobileNav
