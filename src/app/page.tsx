import { Syne } from "@next/font/google"
import styles from "./page.module.css"
import clsx from "clsx"
import Image from "next/image"

const syne = Syne({ subsets: ["latin"] })

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
        <a href="https://www.github.com/carlos-kelly">GitHub</a>
        <a href="https://www.instagram.com/carloskelly.13">Instagram</a>
        <a href="https://www.linkedin.com/in/carlos-kelly-a10270b8/">
          LinkedIn
        </a>
        <a href="https://twitter.com/carlos_paelinck">Twitter</a>
      </div>
    </main>
  )
}
