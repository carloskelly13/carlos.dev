import { PropsWithChildren } from "react"
import clsx from "clsx"
import { headerTypeface } from "@/components/typefaces"
import styles from "@/components/styles.module.css"

export const ContentBox = ({
  children,
  title,
  className,
}: PropsWithChildren<{ title: string; className?: string }>) => (
  <section className={clsx("self-center", className)}>
    <div
      className={clsx("font-extrabold italic text-xl relative mx-4 md:mx-1")}
    >
      <div
        className={clsx(
          "bg-gradient-to-r from-carlos-20/70 dark:from-carlos-20/40 to-carlos-0/0 absolute rounded-sm",
          "w-[33rem] h-[2.125rem] z-0 bottom-0.5 -skew-x-12 -left-1"
        )}
      />
      <span
        className={clsx(
          headerTypeface.className,
          styles.textShadowSmall,
          "pl-1 z-10 relative text-transparent text-2xl md:text-3xl uppercase"
        )}
      >
        {title}
      </span>
    </div>
    <div className={clsx("mx-4 md:mx-1")}>{children}</div>
  </section>
)
