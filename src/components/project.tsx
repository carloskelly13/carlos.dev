import { PropsWithChildren, ReactNode } from "react"
import clsx from "clsx"
import { subHeaderTypeface } from "@/components/typefaces"

type Props = PropsWithChildren<{ title: ReactNode; className?: string }>

export const Project = ({ children, title, className }: Props) => (
  <div className="my-6">
    <div
      className={clsx(
        "pl-1 z-10 relative text-yellow-300 text-xl md:text-2xl italic font-black",
        subHeaderTypeface.className,
        className
      )}
    >
      {title}
    </div>
    <div className={clsx("mx-1 text-white")}>{children}</div>
  </div>
)
