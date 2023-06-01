import clsx from "clsx"
import {
  RiGithubFill,
  RiInstagramFill,
  RiLinkedinBoxFill,
  RiTwitterFill,
} from "react-icons/ri"

const socialMediaIconSize = 32
const iconSelectors = clsx(
  "mx-2 transition hover:text-yellow-300 hover:scale-125 first:ml-0 last:mr-0"
)

export const SocialLinks = () => {
  return (
    <div
      className={clsx(
        "absolute top-12 z-0 px-4",
        "flex mt-1.5 md:mt-2.5 flex-row items-center",
        "justify-left text-carlos-55 dark:text-carlos--55/75"
      )}
    >
      <a
        href="https://www.github.com/carloskelly13"
        target="_blank"
        rel="noopener noreferrer"
        title="GitHub"
        className={iconSelectors}
      >
        <RiGithubFill size={socialMediaIconSize} />
        <span className="sr-only">GitHub</span>
      </a>
      <a
        href="https://www.instagram.com/carloskelly.13"
        target="_blank"
        rel="noopener noreferrer"
        title="Instagram"
        className={iconSelectors}
      >
        <RiInstagramFill size={socialMediaIconSize} />
        <span className="sr-only">Instagram</span>
      </a>
      <a
        href="https://www.linkedin.com/in/carlos-kelly-a10270b8/"
        target="_blank"
        rel="noopener noreferrer"
        title="LinkedIn"
        className={iconSelectors}
      >
        <RiLinkedinBoxFill size={socialMediaIconSize} />
        <span className="sr-only">LinkedIn</span>
      </a>
      <a
        href="https://twitter.com/carlos_paelinck"
        target="_blank"
        rel="noopener noreferrer"
        title="Twitter"
        className={iconSelectors}
      >
        <RiTwitterFill size={socialMediaIconSize} />
        <span className="sr-only">Twitter</span>
      </a>
    </div>
  )
}
