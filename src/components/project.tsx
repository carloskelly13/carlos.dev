import { PropsWithChildren, ReactNode } from "react"
import clsx from "clsx"
import { subHeaderTypeface } from "@/components/typefaces"

type Props = PropsWithChildren<{ title: ReactNode; className?: string }>

export const Project = ({ children, title, className }: Props) => (
  <div className="my-8 md:my-10 first:my-6">
    <div
      className={clsx(
        "pl-1 z-10 relative text-carlos-60 dark:text-carlos--60 text-xl md:text-2xl italic font-black",
        subHeaderTypeface.className,
        className
      )}
    >
      {title}
    </div>
    <div
      className={clsx(
        "mx-1 mt-1 leading-relaxed text-carlos-80 dark:text-carlos--80"
      )}
    >
      {children}
    </div>
  </div>
)
