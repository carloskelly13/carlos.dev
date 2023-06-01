import { Archivo_Black, Archivo_Narrow, Archivo } from "@next/font/google"

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

export const copyTypeface = Archivo({
  weight: ["400"],
  style: ["normal"],
  subsets: ["latin"],
})
