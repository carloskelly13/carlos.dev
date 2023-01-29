import { Inter } from "@next/font/google"
import styles from "./page.module.css"
import clsx from "clsx"
import { SiGithub, SiInstagram, SiLinkedin, SiTwitter } from "react-icons/si"
const inter = Inter({ subsets: ["latin"] })

export default function Home() {
  return (
    <main className={clsx(styles.main, styles.title, inter.className)}>
      <h1>Carlos Kelly</h1>
      <h2>
        Software Engineer &amp; CTO at{" "}
        <a href="https://www.formidable.com">Formidable</a>{" "}
      </h2>
      <p className={styles.bio}>
        I am a full-stack software engineer building apps using web and native
        platform technologies. My toolkit includes React, GraphQL, Node,
        Headless CMSs, TypeScript, Swift, and Kotlin. I am also the CTO at
        Formidable, a digital product consultancy specializing in engineering,
        design, and product development.
      </p>
      <div className={styles.socials}>
        <a href="https://www.github.com/carlos-kelly">
          <SiGithub size={32} title="Visit GitHub profile" />
        </a>
        <a href="https://www.instagram.com/carloskelly.13">
          <SiInstagram size={32} title="Visit Instagram profile" />
        </a>
        <a href="https://www.linkedin.com/in/carlos-kelly-a10270b8/">
          <SiLinkedin size={32} title="Visit LinkedIn profile" />
        </a>
        <a href="https://twitter.com/carlos_paelinck">
          <SiTwitter size={32} title="Visit Twitter profile" />
        </a>
      </div>
    </main>
  )
}
