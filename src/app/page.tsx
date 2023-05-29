import clsx from "clsx"
import Image from "next/image"
import colors from "tailwindcss/colors"
import styles from "./styles.module.css"

export const metadata = {
  title: "Carlos Kelly",
  description: "Personal webpage for Carlos Kelly",
  themeColor: colors.yellow["300"],
}

export default function Home() {
  return (
    <main className="my-4 md:my-12 mx-auto h-full flex flex-col text-narwhale-grey max-w-7xl">
      <section className="grid grid-cols-2 gap-2 md:gap-8">
        <div
          className={clsx(
            "md:rounded-sm w-11/12 lg:w-1/2 aspect-box-ratio place-self-end",
            "bg-yellow-300 flex flex-col justify-center items-center"
          )}
        >
          <div className="font-black text-lg md:text-3xl lg:text-4xl">
            Carlos Kelly
          </div>
          <div
            className={clsx(
              "px-2 font-black leading-4 md:leading-normal text-sm md:text-xl lg:text-2xl",
              "text-center text-narwhale-grey text-opacity-70"
            )}
          >
            Software Engineer
          </div>
        </div>
        <div
          className={clsx(
            "md:rounded-sm bg-yellow-50 border-2 border-yellow-300 text-white w-11/12 lg:w-1/2",
            "aspect-box-ratio place-self-start flex flex-col justify-center items-center",
            styles.forwardDiagonalLines
          )}
        >
          <Image
            className="w-2/3 md:w-7/12 rounded-full border-2 border-yellow-300 bg-yellow-100"
            width={400}
            height={400}
            src="https://res.cloudinary.com/dqlrwmfsu/image/upload/v1685371891/carlos.dev/carlos-transparent_xlulal.png"
            alt="Carlos Kelly Profile Image"
          />
        </div>
      </section>
      <section
        className={clsx(
          "px-1 w-11/12 lg:w-content self-center mt-6 lg:mt-8 mb-4 text-md md:text-xl",
          "leading-relaxed md:leading-loose text-justify"
        )}
      >
        I’m a software engineer building web and native apps with React,
        GraphQL, TypeScript, Swift, and Kotlin. I’m the CTO at Formidable, a
        global design, product, and engineering consultancy with a focus on
        open-source software.
      </section>
      <section className="w-11/12 lg:w-content bg-yellow-50 self-center border-yellow-300 border-2 rounded-sm my-4">
        <div
          className={clsx(
            "bg-yellow-300",
            "border-yellow-300 border-b-2 px-4 py-2 md:py-3 text-lg md:text-xl font-black italic"
          )}
        >
          Work History
        </div>
        <div className="p-4">hi</div>
      </section>
      <section className="w-11/12 lg:w-content bg-yellow-50 self-center border-yellow-300 border-2 rounded-sm my-4">
        <div
          className={clsx(
            styles.backwardDiagonalLines,
            "border-yellow-300 border-b-2 px-4 py-2 md:py-3 text-lg md:text-xl font-black italic"
          )}
        >
          Open Source
        </div>
        <div className="p-4">hi</div>
      </section>
    </main>
  )
}
