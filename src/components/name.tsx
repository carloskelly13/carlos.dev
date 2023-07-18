"use client"

import { clsx } from "clsx"
import { PropsWithChildren, useRef } from "react"
import styles from "./styles.module.css"
import { useElementScroll } from "@/components/use-element-scroll"

type Props = PropsWithChildren<{
  className?: string
}>

export const Name = ({ className, children }: Props) => {
  const triggerRef = useRef<HTMLDivElement>(null)
  const targetRef = useRef<HTMLDivElement>(null)
  const { isElementHidden } = useElementScroll({ triggerRef, targetRef })

  return (
    <>
      <div
        ref={targetRef}
        className={clsx(
          "transition-all duration-400 motion-reduce:transition-none ease-linear",
          "text-4xl md:text-5xl text-center tracking-tight",
          "text-opacity-70 text-transparent z-50 py-1 font-black",
          isElementHidden && [
            "cursor-pointer !fixed",
            "scale-75 md:scale-[67%] top-1 -ml-7 md:-ml-12",
          ],
          styles.textShadow,
          className
        )}
      >
        {children}
      </div>
      <div className={clsx(isElementHidden && "w-1 h-[60px]")} />
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
