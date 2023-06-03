import { ossProjectData } from "@/components/oss-project-data"
import { Link } from "@/components/link"
import clsx from "clsx"

type Props = {
  project: (typeof ossProjectData)[number]
  className?: string
}

export const OssProject = ({ project, className }: Props) => {
  return (
    <div className={clsx(className, "w-full my-4")}>
      <div className="font-emphasis text-2xl">{project.title}</div>
      <div
        className={clsx(
          "pl-3 ml-0.5 border-l-2 border-dotted border-slate-400"
        )}
      >
        <div className="mt-1 mb-2">{project.description}</div>
        <Link to={project.gitHubUrl}>GitHub</Link>
        {project.docsUrl ? <Link to={project.docsUrl}>Docs</Link> : null}
      </div>
    </div>
  )
}
