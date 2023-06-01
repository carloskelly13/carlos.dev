"use client"

import { useRef } from "react"
import { useElementScroll } from "@/components/useElementScroll"
import clsx from "clsx"
import styles from "./styles.module.css"
import { headerTypeface } from "@/components/typefaces"

type Props = {
  className?: string
}

export const Name = ({ className }: Props) => {
  const ref = useRef<HTMLDivElement>(null)
  const { isElementHidden } = useElementScroll(ref)
  const handleScrollToTop = () =>
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" })

  return (
    <>
      <div className="absolute top-0 h-[40px]" ref={ref} />
      <div
        role={isElementHidden ? "button" : "heading"}
        onClick={isElementHidden ? handleScrollToTop : undefined}
        className={clsx(
          "transition-all duration-150 delay-75 motion-reduce:transition-none",
          "text-2xl md:text-4xl text-center pt-3 sticky top-0 rounded-lg",
          "uppercase text-opacity-70 text-transparent z-50 px-4",
          isElementHidden && [
            "!fixed bg-carlos-15 dark:bg-carlos-55 shadow-2xl pb-3 cursor-pointer",
            "rounded-t-none bg-opacity-50 dark:bg-opacity-50 backdrop-blur-lg hover:scale-110",
          ],
          styles.textShadow,
          headerTypeface.className,
          className
        )}
      >
        Carlos Kelly
      </div>
    </>
  )
}
