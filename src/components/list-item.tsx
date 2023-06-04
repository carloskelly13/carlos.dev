import { clsx } from "clsx"
import { motion } from "framer-motion"
import { PropsWithChildren } from "react"

type Props = PropsWithChildren<{
  className?: string
  index: number
}>

export const ListItem = ({ children, className, index }: Props) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: -10 }}
      animate={{ opacity: 1, y: 0, transition: { delay: 0.075 * index } }}
      exit={{ opacity: 0, y: 10 }}
      transition={{ duration: 0.25, ease: "easeInOut" }}
      className={clsx(className, "w-full my-8 first:mt-4")}
    >
      {children}
    </motion.div>
  )
}
