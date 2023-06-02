import { PropsWithChildren } from "react"
import clsx from "clsx"
import { headerTypeface } from "@/components/typefaces"
import styles from "@/components/styles.module.css"

export const ContentBox = ({
  children,
  title,
  className,
}: PropsWithChildren<{ title: React.ReactNode; className?: string }>) => (
  <section
    className={clsx("self-center", className, styles.perspectiveContainer)}
  >
    <div className={clsx("text-xl relative mx-4 md:mx-1")}>
      <span
        className={clsx(
          headerTypeface.className,
          styles.perspective,
          "pl-1 z-10 relative text-4xl uppercase tracking-tighter"
        )}
      >
        {title}
      </span>
    </div>
    <div className={clsx("mx-4 md:mx-1")}>{children}</div>
  </section>
)
