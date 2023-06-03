import { ossProjectData } from "@/components/oss-project-data"
import { Link } from "@/components/link"
import clsx from "clsx"
import { motion } from "framer-motion"

type Props = {
  project: (typeof ossProjectData)[number]
  className?: string
  activeClassName?: string
  index: number
}

export const OssProject = ({ project, className, index }: Props) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: -50 }}
      animate={{ opacity: 1, y: 0, transition: { delay: 0.1 * index } }}
      exit={{ opacity: 0, y: 50 }}
      transition={{ duration: 0.25 }}
      className={clsx(className, "w-full my-8 first:mt-4")}
    >
      <div className="font-emphasis text-2xl">{project.title}</div>
      <div
        className={clsx(
          "pl-3 ml-0.5 border-l-2 border-dotted border-slate-400"
        )}
      >
        <div className="mt-1 mb-2">{project.description}</div>
        <Link className="mr-1.5" to={project.gitHubUrl}>
          GitHub
        </Link>
        {project.docsUrl ? <Link to={project.docsUrl}>Docs</Link> : null}
      </div>
    </motion.div>
  )
}
