import { motion, useMotionValue, useTransform } from 'framer-motion'
import {
  ComponentPropsWithoutRef,
  ElementType,
  PointerEvent,
  ReactNode,
  useCallback,
} from 'react'

type TiltButtonProps<T extends ElementType> = {
  children: ReactNode
} & ComponentPropsWithoutRef<T>

const TiltButton = <T extends ElementType = 'button'>({
  children,
  className,
  ...props
}: TiltButtonProps<T>): JSX.Element => {
  const y = useMotionValue(0.5)
  const x = useMotionValue(0.5)
  const rotateY = useTransform(y, [0, 1], [-8, 8])
  const rotateX = useTransform(x, [0, 1], [10, -10])

  const handleMouseMove = useCallback(
    (e: PointerEvent<HTMLButtonElement>) => {
      const rect = e.currentTarget.getBoundingClientRect()
      const yValue = Math.min(
        Math.max((e.clientX - rect.x) / e.currentTarget.clientWidth, 0),
        1
      )
      const xValue = Math.min(
        Math.max((e.clientY - rect.y) / e.currentTarget.clientHeight, 0),
        1
      )
      y.set(yValue)
      x.set(xValue)
    },
    [x, y]
  )

  return (
    <div className="perspective">
      <motion.button
        onPointerMove={handleMouseMove}
        onPointerLeave={() => {
          x.set(0.5)
          y.set(0.5)
          rotateY.set(0)
          rotateX.set(0)
        }}
        whileHover={{ scale: 1.1 }}
        style={{
          rotateY,
          rotateX,
        }}
        className={`py-3 px-6 bg-amber-400 shadow-xl shadow-amber-500/10 text-neutral-900 font-bold text-xl rounded-md transition-shadow hover:shadow-lg hover:shadow-amber-400/10 ${
          className ?? ''
        }`}
        {...props}
      >
        {children}
      </motion.button>
    </div>
  )
}

export default TiltButton
