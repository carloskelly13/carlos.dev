import type { PropsWithChildren } from "react"
import clsx from "clsx"
import Image from "next/image"
import colors from "tailwindcss/colors"
import { Inter_Tight } from "@next/font/google"
import {
  RiGithubFill,
  RiInstagramFill,
  RiLinkedinBoxFill,
  RiTwitterFill,
} from "react-icons/ri"
import styles from "./styles.module.css"

export const metadata = {
  title: "Carlos Kelly",
  description: "Personal webpage for Carlos Kelly",
  themeColor: colors.yellow["300"],
}

const socialMediaIconSize = 32
const containerSelectors = "w-full md:w-3/4 lg:w-3/5"

const typeface = Inter_Tight({
  weight: ["400", "800", "900"],
  style: ["normal", "italic"],
  subsets: ["latin"],
})

const ContentBox = ({
  children,
  title,
}: PropsWithChildren<{ title: string }>) => (
  <section className={clsx(containerSelectors, "self-center")}>
    <div
      className={clsx("font-extrabold italic text-xl relative mx-4 md:mx-1")}
    >
      <div
        className={clsx(
          "bg-yellow-300 absolute w-full h-2 -z-50 bottom-[2px] -skew-x-12 rounded-sm"
        )}
      />
      <span className="pl-1">{title}</span>
    </div>
    <div className={clsx("mx-4 md:mx-1")}>{children}</div>
  </section>
)

export default function Home() {
  return (
    <main
      className={clsx(
        "mb-2 md:my-12 mx-auto h-full flex flex-col text-narwhale-grey max-w-7xl",
        typeface.className
      )}
    >
      <section
        className={clsx(containerSelectors, "flex flex-col self-center")}
      >
        <div
          className={clsx(
            "relative flex flex-col justify-center items-center py-8"
          )}
        >
          <div
            className={clsx(
              "md:-skew-x-[4deg] md:rounded-md",
              "bg-yellow-300 absolute w-full h-full -z-50"
            )}
          />
          <div className="flex flex-row">
            <div className="flex flex-col justify-center">
              <div
                className={clsx(
                  styles.textShadow,
                  "text-3xl md:text-4xl lg:text-5xl font-black text-center uppercase text-opacity-70 text-transparent"
                )}
              >
                Carlos Kelly
              </div>
              <div
                className={clsx(
                  "flex mt-2 md:mt-3 flex-row items-center justify-center text-narwhale-grey text-opacity-60"
                )}
              >
                <a
                  href="https://www.github.com/carloskelly13"
                  target="_blank"
                  rel="noopener noreferrer"
                  title="GitHub"
                >
                  <RiGithubFill size={socialMediaIconSize} className="mx-2" />
                  <span className="sr-only">GitHub</span>
                </a>
                <a
                  href="https://www.instagram.com/carloskelly.13"
                  target="_blank"
                  rel="noopener noreferrer"
                  title="Instagram"
                >
                  <RiInstagramFill
                    size={socialMediaIconSize}
                    className="mx-2"
                  />
                  <span className="sr-only">Instagram</span>
                </a>
                <a
                  href="https://www.linkedin.com/in/carlos-kelly-a10270b8/"
                  target="_blank"
                  rel="noopener noreferrer"
                  title="LinkedIn"
                >
                  <RiLinkedinBoxFill
                    size={socialMediaIconSize}
                    className="mx-2"
                  />
                  <span className="sr-only">LinkedIn</span>
                </a>
                <a
                  href="https://twitter.com/carlos_paelinck"
                  target="_blank"
                  rel="noopener noreferrer"
                  title="Twitter"
                >
                  <RiTwitterFill size={socialMediaIconSize} className="mx-2" />
                  <span className="sr-only">Twitter</span>
                </a>
              </div>
            </div>
            <Image
              className={clsx(
                "w-20 lg:w-28 rounded-full ml-4 md:ml-8 bg-yellow-100"
              )}
              width={400}
              height={400}
              src="https://res.cloudinary.com/dqlrwmfsu/image/upload/v1685371891/carlos.dev/carlos-transparent_xlulal.png"
              alt="Carlos Kelly Profile Image"
            />
          </div>
        </div>
      </section>
      <section
        className={clsx(
          containerSelectors,
          "px-4 md:px-1 self-center mt-6 lg:mt-8 mb-4 text-md md:text-xl",
          "leading-relaxed md:leading-loose text-justify"
        )}
      >
        I’m a{" "}
        <span className="font-extrabold text-yellow-600 italic">
          software engineer
        </span>{" "}
        building web and native apps with React, GraphQL, TypeScript, Swift, and
        Kotlin. I’m the CTO at Formidable, a global design, product, and
        engineering consultancy with a focus on open-source software.
      </section>

      <ContentBox title="Open Source">OSS</ContentBox>
      <ContentBox title="Work History">Work</ContentBox>
    </main>
  )
}
