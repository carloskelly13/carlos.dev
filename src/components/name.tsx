"use client"

import { PropsWithChildren, useRef } from "react"
import { useElementScroll } from "@/components/useElementScroll"
import clsx from "clsx"
import styles from "./styles.module.css"

type Props = PropsWithChildren<{
  className?: string
}>

export const Name = ({ className, children }: Props) => {
  const triggerRef = useRef<HTMLDivElement>(null)
  const targetRef = useRef<HTMLDivElement>(null)

  const { isElementHidden } = useElementScroll({ triggerRef, targetRef })
  const handleScrollToTop = () =>
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" })

  return (
    <>
      <div
        ref={targetRef}
        role={isElementHidden ? "button" : "heading"}
        onClick={isElementHidden ? handleScrollToTop : undefined}
        className={clsx(
          "transition-all duration-400 motion-reduce:transition-none ease-linear",
          "text-4xl md:text-5xl text-center tracking-tight font-header",
          "text-opacity-70 text-transparent z-50 py-1",
          isElementHidden && [
            "cursor-pointer !fixed",
            "scale-75 md:scale-[60%] top-1 md:top-0.5",
          ],
          styles.textShadow,
          className
        )}
      >
        {children}
      </div>
      <div className="absolute top-0 h-[40px]" ref={triggerRef} />
      <div
        className={clsx(
          "transition-all duration-300 motion-reduce:transition-none ease-in-out",
          "fixed h-14 md:h-16 duration-150 bg-transparent",
          "delay-75 motion-reduce:transition-none z-40",
          "left-0 top-0 backdrop-blur-xl opacity-0 shadow-2xl",
          "w-screen",
          isElementHidden && "opacity-100"
        )}
      >
        &nbsp;
      </div>
    </>
  )
}
