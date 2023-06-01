import { PropsWithChildren } from "react"
import clsx from "clsx"
import { subHeaderTypeface } from "@/components/typefaces"

export const Link = ({
  to,
  children,
  className,
}: PropsWithChildren<{ to: string; className?: string }>) => (
  <a
    href={to}
    target="_blank"
    rel="noopener noreferrer"
    className={clsx(
      subHeaderTypeface.className,
      "transition-all flex flex-row items-center hover:scale-110",
      className
    )}
  >
    {children}
  </a>
)
