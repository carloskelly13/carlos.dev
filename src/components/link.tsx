import { PropsWithChildren } from "react"
import clsx from "clsx"
import { subHeaderTypeface } from "@/components/typefaces"
import { CgArrowTopRight } from "react-icons/cg"

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
      "transition-all flex flex-row items-center group hover:underline",
      className
    )}
  >
    {children}
    <CgArrowTopRight
      className={clsx(
        "inline transition-all !no-underline",
        "group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
      )}
    />
  </a>
)
