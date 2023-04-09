import { Syne } from "@next/font/google"
import styles from "./page.module.css"
import clsx from "clsx"
import Image from "next/image"
import { ProjectBadge, FeaturedBadge } from "formidable-oss-badges"
import "formidable-oss-badges/dist/style.css"

const syne = Syne({ subsets: ["latin"] })

export const metadata = {
  title: "Carlos Kelly",
  description: "Personal webpage for Carlos Kelly",
}

export default function Home() {
  return (
    <main className={clsx(styles.main, styles.title, syne.className)}>
      <Image
        className={styles.pfp}
        src="/carlos.jpg"
        width={175}
        height={175}
        alt="PFP for Carlos Kelly"
      />
      <div className={styles.banner} />
      <h1 className={styles.firstName}>CARLOS</h1>
      <h2 className={styles.lastName}>KELLY</h2>
      <h3 className={styles.biLine}>
        Software Engineer &amp; CTO at{" "}
        <a href="https://www.formidable.com">Formidable</a>{" "}
      </h3>
      <p className={styles.bio}>
        I build apps using web and native platform technologies. My toolkit
        includes React, GraphQL, Node, Headless CMS, TypeScript, Swift, and
        Kotlin. I’m the CTO at Formidable, a global design, product, and
        engineering consultancy with a focus on open-source software.
      </p>
      <div className={styles.socials}>
        <a
          href="https://www.github.com/carloskelly13"
          target="_blank"
          rel="noopener noreferrer"
        >
          GitHub
        </a>
        <a
          href="https://www.instagram.com/carloskelly.13"
          target="_blank"
          rel="noopener noreferrer"
        >
          Instagram
        </a>
        <a
          href="https://www.linkedin.com/in/carlos-kelly-a10270b8/"
          target="_blank"
          rel="noopener noreferrer"
        >
          LinkedIn
        </a>
        <a
          href="https://twitter.com/carlos_paelinck"
          target="_blank"
          rel="noopener noreferrer"
        >
          Twitter
        </a>
      </div>
      <div className={styles.ossSection}>
        <h2>OSS Projects</h2>
        <p>I’m a maintainer and contributor to the following OSS projects:</p>
        <div className={styles.ossProjects}>
          <a
            href="https://formidable.com/open-source/spectacle"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FeaturedBadge name="spectacle" />
            Spectacle
          </a>
          <a
            href="https://formidable.com/open-source/nuka-carousel"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FeaturedBadge name="nuka" />
            Nuka Carousel
          </a>
          <a
            href="https://formidable.com/open-source/react-live"
            target="_blank"
            rel="noopener noreferrer"
          >
            <ProjectBadge
              abbreviation="Rl"
              description="React Live"
              color="#f159da"
            />
            React Live
          </a>
        </div>
      </div>
    </main>
  )
}
