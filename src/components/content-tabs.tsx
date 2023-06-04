"use client"

import { clsx } from "clsx"
import { AnimatePresence } from "framer-motion"
import { useState } from "react"
import { CgArrowRight } from "react-icons/cg"
import styles from "./styles.module.css"
import { Link } from "@/components/link"
import { ListItem } from "@/components/list-item"
import { ossProjectData } from "@/components/oss-project-data"
import { workHistoryData } from "@/components/work-history-data"

type Tab = "open-source" | "work-history"

const tabClassName = [
  styles.tab,
  "font-header transition-all text-slate-800 dark:text-slate-400",
  "px-6 py-1 scale-105",
]
const activeTabClassName = [
  styles.selected,
  "!text-slate-800 dark:!text-slate-200",
]

export const ContentTabs = () => {
  const [activeTab, setActiveTab] = useState<Tab>("open-source")
  const handleTabClick = (tab: Tab) => setActiveTab(tab)

  return (
    <div className="w-full">
      <div
        className={clsx(
          "w-full text-xl flex flex-row",
          "items-center justify-center mt-12 pb-2 mb-6"
        )}
      >
        <button
          className={clsx(
            tabClassName,
            activeTab === "open-source" && activeTabClassName
          )}
          onClick={() => handleTabClick("open-source")}
        >
          Open Source
        </button>
        <button
          className={clsx(
            tabClassName,
            activeTab === "work-history" && activeTabClassName
          )}
          onClick={() => handleTabClick("work-history")}
        >
          Work History
        </button>
      </div>
      <div className="tab-content">
        <AnimatePresence mode="wait">
          {activeTab === "open-source" &&
            ossProjectData.map((ossProject, index) => (
              <ListItem index={index} key={ossProject.title}>
                <div className="font-header text-xl">{ossProject.title}</div>
                <div>
                  <div className="mt-1 mb-2">{ossProject.description}</div>
                  <Link className="mr-1.5" to={ossProject.gitHubUrl}>
                    GitHub
                  </Link>
                  {ossProject.docsUrl ? (
                    <Link to={ossProject.docsUrl}>Docs</Link>
                  ) : null}
                </div>
              </ListItem>
            ))}
          {activeTab === "work-history" &&
            workHistoryData.map((workHistory, index) => (
              <ListItem index={index} key={workHistory.company}>
                <div className="font-header text-xl">{workHistory.company}</div>
                <div className="mt-1 mb-2 text-md">
                  {workHistory.titles.map(({ name, startDate, endDate }) => (
                    <div key={`${name}-${startDate}`}>
                      <span className="font-header mr-2">{name}</span>
                      {startDate}
                      <CgArrowRight className="mx-0.5 inline" />
                      {endDate}
                    </div>
                  ))}
                </div>
                <div className={clsx()}>
                  <div className="mt-1 mb-2">{workHistory.description}</div>
                </div>
              </ListItem>
            ))}
        </AnimatePresence>
      </div>
    </div>
  )
}
