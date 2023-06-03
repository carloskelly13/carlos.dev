import { RefObject, useCallback, useEffect, useState } from "react"

type Options = {
  triggerRef: RefObject<HTMLDivElement | null>
  targetRef: RefObject<HTMLDivElement | null>
}
export const useElementScroll = (options: Options) => {
  const [isElementHidden, setIsElementHidden] = useState(false)
  const handleScroll = useCallback(() => {
    if (options.triggerRef.current == null || options.targetRef.current == null)
      return
    const offset = options.triggerRef.current.getBoundingClientRect().top
    const parentHeight =
      options.targetRef.current?.parentElement?.getBoundingClientRect()
        .height || 100
    const hidden = offset <= -(parentHeight / 2) - 80
    setIsElementHidden(hidden)
  }, [])
  useEffect(() => {
    window.addEventListener("scroll", handleScroll)
    return () => {
      window.removeEventListener("scroll", handleScroll)
    }
  }, [])
  return { isElementHidden }
}
