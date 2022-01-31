import { AnimatePresence, motion } from 'framer-motion'
import React, { ReactNode, useState } from 'react'

const Tooltip = ({
  children,
  tip,
  ...props
}: {
  children: ReactNode
  tip: string
}) => {
  const [show, setShow] = useState(false)

  return (
    <div
      onMouseOver={() => setShow(true)}
      onMouseLeave={() => setShow(false)}
      className="inline-block relative font-semibold cursor-pointer"
      {...props}
    >
      {children}
      <AnimatePresence>
        {show && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="absolute left-1/2 -translate-x-1/2 bottom-1/2 mb-6 bg-neutral-800 shadow-lg z-2 text-neutral-300 rounded-md w-max max-w-[300px] px-6 py-3 text-base font-normal z-20"
          >
            <div className="bg-neutral-800 h-3 w-3 absolute rotate-45 -bottom-1 left-1/2 -translate-x-1/2" />
            {tip}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}

export default Tooltip
