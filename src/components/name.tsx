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
  console.log(isElementHidden)
  return (
    <>
      <div className="absolute top-0 h-[40px]" ref={ref} />
      <div
        className={clsx(
          "transition-all duration-300 delay-75 motion-reduce:transition-none",
          "text-2xl md:text-4xl text-center pt-3 sticky top-0",
          "uppercase text-opacity-70 text-transparent z-50",
          isElementHidden && [
            "!fixed bg-indigo-400 dark:bg-indigo-900 px-5 shadow-2xl pb-3",
            "rounded-b-lg bg-opacity-50 dark:bg-opacity-50 backdrop-blur-lg hover:scale-110",
            "translate-x-[-8rem] md:translate-x-[-9.55rem] lg:translate-x-[-8.55rem]",
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
