import clsx from "clsx"
import Image from "next/image"
import { Link } from "@/components/link"
import colors from "tailwindcss/colors"
import {
  RiGithubFill,
  RiInstagramFill,
  RiLinkedinBoxFill,
  RiTwitterFill,
} from "react-icons/ri"
import { Name } from "@/components/name"
import { ossProjectData } from "@/components/oss-project-data"
import { OssProject } from "@/components/oss-project"

export const metadata = {
  title: "Carlos Kelly",
  description: "Personal webpage for Carlos Kelly",
  themeColor: colors.yellow["300"],
}

const socialMediaIconSize = 28
const containerSelectors = "w-11/12 md:w-3/4 lg:w-3/5"

export default function Home() {
  return (
    <main className={clsx("flex flex-col items-center w-full")}>
      <div className={clsx("flex flex-col items-center mt-12")}>
        <Image
          className={clsx(
            "rounded-full h-32 w-32 bg-gradient-to-t from-slate-100 to-slate-300 mb-4"
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
          "font-emphasis text-2xl md:text-3xl mt-4 mb-2 text-center"
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
          "text-lg md:text-xl text-center my-4 !leading-loose"
        )}
      >
        I’m a software engineer building web and native apps with React,
        GraphQL, TypeScript, Swift, and Kotlin. I’m the CTO at Formidable, a
        global design, product, and engineering consultancy with a focus on
        open-source software.
      </p>
      <div
        className={clsx("flex flex-col md:flex-row containerSelectors text-lg")}
      >
        <Link
          className="mx-4"
          icon={
            <RiGithubFill
              size={socialMediaIconSize}
              className="mr-0.5 group-hover:text-green-600 transition-colors"
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
              className="mr-0.5 group-hover:text-pink-600 transition-colors"
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
              className="mr-0.5 group-hover:text-blue-600 transition-colors"
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
              className="mr-0.5 group-hover:text-indigo-500 transition-colors"
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
        <h2>OSS Projects</h2>
        {ossProjectData.map(ossProject => (
          <OssProject project={ossProject} key={ossProject.title} />
        ))}
      </div>
    </main>
  )
}
