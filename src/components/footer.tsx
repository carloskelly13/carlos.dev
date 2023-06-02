import styles from "@/components/styles.module.css"
import clsx from "clsx"
import { CgArrowTopRight } from "react-icons/cg"

const Content = () => (
  <div className={clsx("max-w-7xl flex flex-col mx-auto")}>
    <div
      className={clsx(
        "w-full md:w-3/4 lg:w-3/5 py-4 px-4 md:px-2 self-center text-sm"
      )}
    >
      <span className="text-lg">
        Carlos Kelly 2023. Made with NextJS + Tailwind. See the source for this
        website on{" "}
      </span>
      <a
        href="https://github.com/carloskelly13/carlos.dev"
        target="_blank"
        rel="noopener noreferrer"
        className={clsx("inline text-lg group")}
      >
        <span className="font-copy-emphasis group-hover:underline">GitHub</span>
        &nbsp;
        <CgArrowTopRight
          className={clsx(
            "inline mb-0.5 -ml-1",
            "transition-all !no-underline",
            "group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
          )}
        />
      </a>
    </div>
  </div>
)

export const Footer = () => {
  return (
    <footer
      className={clsx(
        "w-full bg-carlos-15 dark:bg-carlos-55 border-t text-carlos-80 dark:text-carlos--80 text-copy h-4"
      )}
    ></footer>
  )
}
