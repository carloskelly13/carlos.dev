import { Inter } from "@next/font/google"
import styles from "./page.module.css"

const inter = Inter({ subsets: ["latin"] })

export default function Home() {
  return (
    <main className={styles.main}>
      <h1 className={inter.className}>Carlos Kelly</h1>
      <h2 className={inter.className}>Software Engineer</h2>
    </main>
  )
}
