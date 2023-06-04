import { clsx } from "clsx"
import Image from "next/image"
import {
  RiGithubFill,
  RiInstagramFill,
  RiLinkedinBoxFill,
  RiTwitterFill,
} from "react-icons/ri"
import colors from "tailwindcss/colors"
import { ContentTabs } from "@/components/content-tabs"
import { Link } from "@/components/link"
import { Name } from "@/components/name"

export const metadata = {
  title: "Carlos Kelly",
  description: "Personal webpage for Carlos Kelly",
  themeColor: colors.yellow["300"],
}

const socialMediaIconSize = 28
const containerSelectors = "w-11/12 md:w-3/4 lg:w-3/5"

export default function Home() {
  return (
    <main className={clsx("flex flex-col items-center w-full min-h-screen")}>
      <div className={clsx("flex flex-col items-center mt-12 relative")}>
        <Image
          className={clsx(
            "rounded-full h-32 w-32 bg-gradient-to-t from-slate-100 to-slate-300 mb-4",
            "dark:from-slate-600 dark:to-slate-700"
          )}
          width={400}
          height={400}
          src="https://res.cloudinary.com/dqlrwmfsu/image/upload/v1685371891/carlos.dev/carlos-transparent_xlulal.png"
          alt="Carlos Kelly Profile Image"
        />
        <Name>Carlos Kelly</Name>
      </div>
      <h3
        className={clsx(
          containerSelectors,
          "font-header text-xl md:text-2xl mt-4 mb-2 text-center"
        )}
      >
        Software Engineer &amp; CTO at&nbsp;
        <Link className="inline !font-header" to="https://www.formidable.com">
          Formidable
        </Link>
      </h3>
      <p
        className={clsx(
          containerSelectors,
          "text-lg md:text-xl text-center my-4 !leading-loose"
        )}
      >
        I’m a software engineer building web and native apps with React,
        GraphQL, TypeScript, Swift, and Kotlin. I’m the CTO at Formidable, a
        global design, product, and engineering consultancy with a focus on
        open-source software.
      </p>
      <div
        className={clsx(
          containerSelectors,
          "grid grid-cols-2 md:flex flex-row gap-y-4",
          "items-center justify-center text-lg"
        )}
      >
        <Link
          className="mx-4"
          icon={
            <RiGithubFill
              size={socialMediaIconSize}
              className="mr-0.5 group-hover:text-purple-500 dark:group-hover:text-purple-400 transition-colors"
            />
          }
          to="https://www.github.com/carloskelly13"
        >
          GitHub
        </Link>
        <Link
          className="mx-4"
          icon={
            <RiInstagramFill
              size={socialMediaIconSize}
              className="mr-0.5 group-hover:text-pink-600 dark:group-hover:text-pink-500 transition-colors"
            />
          }
          to="https://www.instagram.com/carloskelly.13"
        >
          Instagram
        </Link>
        <Link
          className="mx-4"
          icon={
            <RiLinkedinBoxFill
              size={socialMediaIconSize}
              className="mr-0.5 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors"
            />
          }
          to="https://www.linkedin.com/in/carlos-kelly-a10270b8/"
        >
          LinkedIn
        </Link>
        <Link
          className="mx-4"
          icon={
            <RiTwitterFill
              size={socialMediaIconSize}
              className="mr-0.5 group-hover:text-indigo-500 dark:group-hover:text-indigo-400 transition-colors"
            />
          }
          to="https://twitter.com/carlos_paelinck"
        >
          Twitter
        </Link>
      </div>
      <div
        className={clsx(containerSelectors, "mx-2 flex flex-col items-center")}
      >
        <ContentTabs />
      </div>
      <div
        className={clsx(
          "hidden md:block",
          "fixed bottom-0 left-0 right-0 z-10",
          "bg-slate-300 dark:bg-slate-700 h-2 mt-4"
        )}
      />
    </main>
  )
}
