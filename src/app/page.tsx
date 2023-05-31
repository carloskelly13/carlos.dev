import type { PropsWithChildren } from "react"
import clsx from "clsx"
import Image from "next/image"
import colors from "tailwindcss/colors"
import {
  RiGithubFill,
  RiInstagramFill,
  RiLinkedinBoxFill,
  RiTwitterFill,
} from "react-icons/ri"
import { CgArrowTopRight, CgArrowRight } from "react-icons/cg"
import { Name } from "@/components/name"
import { Project } from "@/components/project"
import { serifTypeface, subHeaderTypeface } from "@/components/typefaces"
import { ContentBox } from "@/components/contentBox"
import { Link } from "@/components/link"

export const metadata = {
  title: "Carlos Kelly",
  description: "Personal webpage for Carlos Kelly",
  themeColor: colors.yellow["300"],
}

const socialMediaIconSize = 32
const containerSelectors = "w-full md:w-3/4 lg:w-3/5"
const iconSelectors = clsx(
  "mx-2 transition hover:text-yellow-300 hover:scale-125 first:ml-0 last:mr-0"
)

export default function Home() {
  return (
    <main
      className={clsx(
        "mb-2 md:my-12 mx-auto h-full flex flex-col text-narwhale-grey max-w-7xl",
        serifTypeface.className
      )}
    >
      <section
        className={clsx(containerSelectors, "flex flex-col self-center")}
      >
        <div
          className={clsx(
            "relative flex flex-col justify-center items-start pt-8 lg:py-8 mx-4 lg:mx-0"
          )}
        >
          <div className="flex flex-row">
            <Image
              className={clsx(
                "w-[5.5rem] h-[5.5rem] md:w-[6.25rem] md:h-[6.25rem]",
                "ml-1 rounded-full mr-4 bg-black/30"
              )}
              width={400}
              height={400}
              src="https://res.cloudinary.com/dqlrwmfsu/image/upload/v1685371891/carlos.dev/carlos-transparent_xlulal.png"
              alt="Carlos Kelly Profile Image"
            />
            <div className="flex flex-col justify-start relative">
              <Name />
              <div
                className={clsx(
                  "absolute top-12 z-0",
                  "flex mt-1.5 md:mt-2.5 flex-row items-center",
                  "justify-left text-white text-opacity-80"
                )}
              >
                <a
                  href="https://www.github.com/carloskelly13"
                  target="_blank"
                  rel="noopener noreferrer"
                  title="GitHub"
                  className={iconSelectors}
                >
                  <RiGithubFill size={socialMediaIconSize} />
                  <span className="sr-only">GitHub</span>
                </a>
                <a
                  href="https://www.instagram.com/carloskelly.13"
                  target="_blank"
                  rel="noopener noreferrer"
                  title="Instagram"
                  className={iconSelectors}
                >
                  <RiInstagramFill size={socialMediaIconSize} />
                  <span className="sr-only">Instagram</span>
                </a>
                <a
                  href="https://www.linkedin.com/in/carlos-kelly-a10270b8/"
                  target="_blank"
                  rel="noopener noreferrer"
                  title="LinkedIn"
                  className={iconSelectors}
                >
                  <RiLinkedinBoxFill size={socialMediaIconSize} />
                  <span className="sr-only">LinkedIn</span>
                </a>
                <a
                  href="https://twitter.com/carlos_paelinck"
                  target="_blank"
                  rel="noopener noreferrer"
                  title="Twitter"
                  className={iconSelectors}
                >
                  <RiTwitterFill size={socialMediaIconSize} />
                  <span className="sr-only">Twitter</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section
        className={clsx(
          containerSelectors,
          "px-4 md:px-1 self-center my-6 lg:mt-2 text-md md:text-xl",
          "leading-relaxed md:leading-loose text-left italic font-medium text-white"
        )}
      >
        I’m a software engineer building web and native apps with React,
        GraphQL, TypeScript, Swift, and Kotlin. I’m the CTO at Formidable, a
        global design, product, and engineering consultancy with a focus on
        open-source software.
      </section>

      <ContentBox className={clsx(containerSelectors)} title="Open Source">
        <Project title="Spectacle">
          A React-based library for creating sleek presentations using JSX
          syntax that gives you the ability to live demo your code. &nbsp;
          <div className="flex flex-row pt-1">
            <Link to="https://github.com/FormidableLabs/spectacle">
              GitHub <CgArrowTopRight />
            </Link>
            <Link
              className="ml-2"
              to="https://formidable.com/open-source/spectacle/docs/"
            >
              Docs <CgArrowTopRight />
            </Link>
          </div>
        </Project>
        <Project title="Nuka Carousel">
          Small, fast, and accessibility-first React carousel library with an
          easily customizable UI and behavior to fit your brand and site.&nbsp;
          <div className="flex flex-row pt-1">
            <Link to="https://github.com/FormidableLabs/nuka-carousel">
              GitHub <CgArrowTopRight />
            </Link>
            <Link
              className="ml-2"
              to="https://formidable.com/open-source/nuka-carousel/"
            >
              Docs <CgArrowTopRight />
            </Link>
          </div>
        </Project>
        <Project title="React Live">
          A flexible playground for live editing React components with editable
          source code and live preview.&nbsp;
          <div className="flex flex-row pt-1">
            <Link to="https://github.com/FormidableLabs/react-live">
              GitHub <CgArrowTopRight />
            </Link>
            <Link
              className="ml-2"
              to="https://formidable.com/open-source/react-live/"
            >
              Docs <CgArrowTopRight />
            </Link>
          </div>
        </Project>
        <Project title="Prism React Renderer">
          A way to render syntax highlighted code using React components and
          PrismJS.&nbsp;
          <div className="flex flex-row pt-1">
            <Link to="https://github.com/FormidableLabs/prism-react-renderer">
              GitHub <CgArrowTopRight />
            </Link>
          </div>
        </Project>
      </ContentBox>
      <ContentBox
        className={clsx(containerSelectors, "mt-4")}
        title="Work History"
      >
        <Project title="Formidable">
          <div className={clsx(subHeaderTypeface.className, "mt-1.5")}>
            CTO: 2022 <CgArrowRight className="mb-0.5 inline" /> present
          </div>
          <div className={clsx(subHeaderTypeface.className)}>
            Director of Engineering: 2020{" "}
            <CgArrowRight className="mb-0.5 inline" /> 2022
          </div>
          <div className={clsx(subHeaderTypeface.className, "mb-1.5")}>
            Principal Software Engineer & Engineering Manager: 2016{" "}
            <CgArrowRight className="mb-0.5 inline" /> 2020
          </div>
          As CTO, I head up the engineering organization and manage the
          engineering leadership team. I work with our technical partners to
          advance our engineering offerings and empower our teams to build
          software solutions that provide exceptional customer experiences for
          our clients.
          <div className="h-1.5" />
          As an IC, I worked on several native mobile and web React and
          GraphQL-based projects for clients including Starbucks, Google,
          Walmart, The Atlantic, and TechStyle.
        </Project>
        <Project title="Modus Create">
          <div className={clsx(subHeaderTypeface.className, "my-1.5")}>
            Senior Software Engineer: 2015{" "}
            <CgArrowRight className="mb-0.5 inline" /> 2016
          </div>
          Led the front-end development efforts of several lab projects for
          Marriott. Projects ranged from web applications to native iOS
          applications. Worked on a rewrite of a regional product site using
          React with server side rendering for Uniqlo.
        </Project>
        <Project title="Object Systems Group">
          <div className={clsx(subHeaderTypeface.className, "my-1.5")}>
            Software Engineer: 2010 <CgArrowRight className="mb-0.5 inline" />{" "}
            2015
          </div>
          Consulted for the Barclaycard Bespoke Offers iOS native app using
          UIKit and Objective-C. My daily responsibilities included sprint
          planning, working with product owners on design and experience,
          architecture, and feature development. I also worked on developing
          backend services for health organizations using Java and Spring.
        </Project>
        <Project title="Las Vegas Gaming">
          <div className={clsx(subHeaderTypeface.className, "my-1.5")}>
            Software Engineer: 2008 <CgArrowRight className="mb-0.5 inline" />{" "}
            2010
          </div>
          Assisted software development by co-designing the interface and unit
          testing for a slot machine entertainment portal macOS application
          written in Cocoa and Objective-C.
        </Project>
      </ContentBox>
    </main>
  )
}
