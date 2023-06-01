import styles from "@/components/styles.module.css"
import clsx from "clsx"
import { copyTypeface, subHeaderTypeface } from "@/components/typefaces"
import { CgArrowTopRight } from "react-icons/cg"

export const Footer = () => {
  return (
    <footer
      className={clsx(
        styles.diagonalLines,
        "w-full border-carlos-15 dark:border-carlos-55 border-t-2 text-carlos-80 dark:text-carlos--80 text-copy"
      )}
    >
      <div className={clsx("max-w-7xl flex flex-col mx-auto")}>
        <div
          className={clsx(
            "w-full md:w-3/4 lg:w-3/5 py-4 px-4 md:px-2 self-center text-sm"
          )}
        >
          <span className="text-lg">
            Made with NextJS + Tailwind. See the source for this website on{" "}
          </span>
          <a
            href="https://github.com/carloskelly13/carlos.dev"
            target="_blank"
            rel="noopener noreferrer"
            className={clsx("inline text-lg")}
          >
            <span className="underline font-copy-emphasis">GitHub</span>&nbsp;
            <CgArrowTopRight className="inline mb-0.5 -ml-0.5" />
          </a>
        </div>
      </div>
    </footer>
  )
}
