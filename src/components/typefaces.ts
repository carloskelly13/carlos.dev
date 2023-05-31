import { Archivo_Black, Archivo_Narrow, Literata } from "@next/font/google"

export const headerTypeface = Archivo_Black({
  weight: ["400"],
  style: ["normal"],
  subsets: ["latin"],
})

export const subHeaderTypeface = Archivo_Narrow({
  weight: ["700"],
  style: ["italic"],
  subsets: ["latin"],
})

export const serifTypeface = Literata({
  weight: ["400"],
  style: ["italic"],
  subsets: ["latin"],
})
