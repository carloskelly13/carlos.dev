import { PropsWithChildren } from "react"
import clsx from "clsx"
import { headerTypeface } from "@/components/typefaces"

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
          "bg-black/20 absolute w-full h-2 z-0 bottom-[4px] -skew-x-12 rounded-sm"
        )}
      />
      <span
        className={clsx(
          headerTypeface.className,
          "pl-1 z-10 relative text-yellow-300 text-xl md:text-2xl uppercase"
        )}
      >
        {title}
      </span>
    </div>
    <div className={clsx("mx-4 md:mx-1")}>{children}</div>
  </section>
)