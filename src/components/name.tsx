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
  const triggerRef = useRef<HTMLDivElement>(null)
  const targetRef = useRef<HTMLDivElement>(null)

  const { isElementHidden } = useElementScroll({ triggerRef, targetRef })
  const handleScrollToTop = () =>
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" })

  return (
    <>
      <div className="absolute top-0 h-[40px]" ref={triggerRef} />
      <div
        className={clsx(
          "transition-all duration-200 motion-reduce:transition-none ease-linear",
          "fixed h-14 md:h-16 duration-150 bg-transparent",
          "delay-75 motion-reduce:transition-none z-40",
          "left-0 top-0 backdrop-blur-xl opacity-0 shadow-2xl",
          " w-screen",
          isElementHidden && "opacity-100"
        )}
      >
        &nbsp;
      </div>
      <div
        ref={targetRef}
        role={isElementHidden ? "button" : "heading"}
        onClick={isElementHidden ? handleScrollToTop : undefined}
        className={clsx(
          "transition-all duration-400 motion-reduce:transition-none ease-linear",
          "text-2xl md:text-6xl text-center sticky top-0 tracking-tighter",
          "uppercase text-opacity-70 text-transparent z-50 pl-4 py-2.5 md:py-1",
          isElementHidden && [
            "cursor-pointer !fixed",
            "-translate-x-[1rem] md:-translate-x-[5rem] lg:-translate-x-[6.67rem] md:scale-[60%]",
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
