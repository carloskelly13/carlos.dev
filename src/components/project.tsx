import { PropsWithChildren, ReactNode } from "react"
import clsx from "clsx"
import { headerTypeface } from "@/components/typefaces"

type Props = PropsWithChildren<{ title: ReactNode; className?: string }>

export const Project = ({ children, title, className }: Props) => (
  <div className="my-8 md:my-10 first:my-6 last:mb-0">
    <div
      className={clsx(
        "pl-1 z-10 relative text-carlos-60 dark:text-carlos--60",
        "text-md md:text-lg",
        headerTypeface.className,
        className
      )}
    >
      {title}
    </div>
    <div
      className={clsx(
        "mx-1 mt-1 leading-relaxed text-carlos-80 dark:text-carlos--80",
        "border-l-4 border-dotted pl-4 border-carlos-20 dark:border-carlos-55"
      )}
    >
      {children}
    </div>
  </div>
)
