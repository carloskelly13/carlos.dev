import { RefObject, useEffect, useState } from "react"

export const useElementScroll = (ref: RefObject<HTMLDivElement | null>) => {
  const [isElementHidden, setIsElementHidden] = useState(false)
  const handleScroll = () => {
    if (ref.current == null) return
    const offset = ref.current?.getBoundingClientRect().top
    const height = ref.current?.getBoundingClientRect().height
    console.log(offset)
    const hidden = offset <= 0
    setIsElementHidden(hidden)
  }
  useEffect(() => {
    window.addEventListener("scroll", handleScroll)
    return () => {
      window.removeEventListener("scroll", handleScroll)
    }
  }, [])
  return { isElementHidden }
}
