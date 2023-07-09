import { clsx } from "clsx"
import { cloneElement, PropsWithChildren, ReactElement } from "react"
import { CgArrowTopRight } from "react-icons/cg"

type Props = PropsWithChildren<{
  to: string
  className?: string
  icon?: ReactElement
}>

export const Link = ({ to, children, className, icon }: Props) => (
  <a
    href={to}
    target="_blank"
    rel="noopener noreferrer"
    className={clsx(
      "transition-all group text-center font-semibold",
      className
    )}
  >
    {icon &&
      cloneElement(icon, {
        ...icon.props,
        className: clsx(icon.props.className, "inline -mt-1"),
      })}
    <span className="group-hover:underline">{children}</span>
    <CgArrowTopRight
      className={clsx(
        "inline transition-all",
        "group-hover:-translate-y-0.5 group-hover:translate-x-0.5 -mt-0.5"
      )}
    />
  </a>
)
