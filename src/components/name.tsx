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
      {isElementHidden && (
        <div
          className={clsx(
            "fixed h-14 duration-150",
            "delay-75 motion-reduce:transition-none z-40",
            "shadow-2xl left-0 top-0",
            "backdrop-blur-xl w-screen"
          )}
        >
          &nbsp;
        </div>
      )}
      <div
        role={isElementHidden ? "button" : "heading"}
        onClick={isElementHidden ? handleScrollToTop : undefined}
        className={clsx(
          "transition-all duration-200 delay-75 motion-reduce:transition-none",
          "text-2xl md:text-4xl text-center pt-3 sticky top-0",
          "uppercase text-opacity-70 text-transparent z-50 px-4",
          isElementHidden && [
            "cursor-pointer !fixed -top-1 md:-top-0.5",
            "-translate-x-[6.67rem] md:-translate-x-[10rem] lg:-translate-x-[9.25rem] md:scale-[80%]",
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
