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
        className={clsx(
          "fixed bg-transparent h-0 transition-all duration-150",
          "delay-75 motion-reduce:transition-none z-40",
          "bg-carlos-20 dark:bg-carlos-55 shadow-2xl left-0 top-0",
          "bg-opacity-50 dark:bg-opacity-50 backdrop-blur-lg w-screen",
          isElementHidden && "h-[50px] md:h-[65px]"
        )}
      />
      <div
        role={isElementHidden ? "button" : "heading"}
        onClick={isElementHidden ? handleScrollToTop : undefined}
        className={clsx(
          "transition-all duration-150 delay-75 motion-reduce:transition-none",
          "text-2xl md:text-4xl text-center pt-3 sticky top-0",
          "uppercase text-opacity-70 text-transparent z-50 px-4",
          isElementHidden && [
            "cursor-pointer hover:scale-110 !fixed -top-1 md:top-0",
            "-translate-x-[6.67rem] md:-translate-x-[8.5rem] lg:-translate-x-[7.33rem]",
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
