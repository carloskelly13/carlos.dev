import { clsx } from "clsx"
import Image from "next/image"
import { CgArrowRight } from "react-icons/cg"
import {
  RiGithubFill,
  RiInstagramFill,
  RiLinkedinBoxFill,
  RiTwitterFill,
} from "react-icons/ri"
import colors from "tailwindcss/colors"
import { Link } from "@/components/link"
import { Name } from "@/components/name"
import { ossProjectData } from "@/components/oss-project-data"
import { workHistoryData } from "@/components/work-history-data"

export const metadata = {
  title: "Carlos Kelly",
  description: "Personal webpage for Carlos Kelly",
  themeColor: colors.yellow["300"],
}

const socialMediaIconSize = 28
const containerSelectors = "w-11/12 md:w-3/4 lg:w-3/5"
const contentSectionHeaderSelectors = clsx(
  "w-full text-left mt-12 font-copy pb-2 font-bold",
  "text-2xl text-slate-800 dark:text-slate-400",
  "border-b border-dashed dark:border-slate-600 border-slate-700"
)

export default function Home() {
  return (
    <main className={clsx("flex flex-col items-center w-full min-h-screen")}>
      <div
        className={clsx(
          containerSelectors,
          "flex flex-col items-start justify-center mt-12 relative"
        )}
      >
        <Image
          className={clsx(
            "rounded-full h-32 w-32 bg-gradient-to-t from-slate-100 to-slate-300 mb-4",
            "dark:from-slate-600 dark:to-slate-700"
          )}
          width={400}
          height={400}
          src="/carlos.jpg"
          alt="Carlos Kelly Profile Image"
        />
        <Name>Carlos Kelly</Name>
      </div>
      <h3
        className={clsx(
          containerSelectors,
          "text-xl md:text-2xl mt-4 mb-2 text-left font-medium"
        )}
      >
        Software Engineer &amp; CTO at&nbsp;
        <Link className="inline" to="https://www.formidable.com">
          Formidable
        </Link>
      </h3>
      <p
        className={clsx(
          containerSelectors,
          "text-lg md:text-xl text-left my-4 !leading-loose"
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
          "items-center justify-start text-lg"
        )}
      >
        <Link
          className="md:mr-4 !text-left md:text-center"
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
          className="md:mx-4 !text-left md:text-center"
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
          className="md:mx-4 !text-left md:text-center"
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
          className="md:mx-4 !text-left md:text-center"
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
        <h2 className={contentSectionHeaderSelectors}>Open Source</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-12 my-8">
          {ossProjectData.map(ossProject => (
            <div className="w-full" key={ossProject.title}>
              <div className="text-xl font-semibold">{ossProject.title}</div>
              <div>
                <div className="mt-1 mb-2">{ossProject.description}</div>
                <Link className="mr-1.5" to={ossProject.gitHubUrl}>
                  GitHub
                </Link>
                {ossProject.docsUrl ? (
                  <Link to={ossProject.docsUrl}>Docs</Link>
                ) : null}
              </div>
            </div>
          ))}
        </div>
        <h2 className={contentSectionHeaderSelectors}>Work History</h2>
        {workHistoryData.map(workHistory => (
          <div
            className="w-full my-6 first:mt-4 last:mb-12"
            key={workHistory.company}
          >
            <div className="text-xl font-semibold">{workHistory.company}</div>
            <div className="mt-1 mb-2 text-md">
              {workHistory.titles.map(({ name, startDate, endDate }) => (
                <div key={`${name}-${startDate}`}>
                  <span className="mr-2 font-medium">{name}:</span>
                  {startDate}
                  <CgArrowRight className="mx-0.5 inline" />
                  {endDate}
                </div>
              ))}
            </div>
            <div className={clsx()}>
              <div className="mt-1 mb-2">{workHistory.description}</div>
            </div>
          </div>
        ))}
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
