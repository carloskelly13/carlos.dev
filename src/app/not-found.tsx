import Image from "next/image"
import { Link } from "@/components/link"
export default function NotFound() {
  return (
    <div className="flex p-8 justify-center items-center flex-col">
      <h1 className="text-5xl font-bold my-4">404</h1>
      <Image
        className="rounded-2xl"
        alt="Psyduck"
        width="250"
        height="165"
        src="/psyduck.jpg"
      />
      <h2 className="text-xl font-bold my-4">
        Psyduck can’t find the page you’re looking for.
      </h2>
      <Link to="/" target="">
        Return Home
      </Link>
    </div>
  )
}
