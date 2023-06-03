"use client"

import { useState } from "react"
import { ossProjectData } from "@/components/oss-project-data"
import { OssProject } from "@/components/oss-project"
import clsx from "clsx"
import { AnimatePresence } from "framer-motion"

type Tab = "open-source" | "work-history"
const tabClassName =
  "font-header transition-all mx-4 text-slate-800 dark:text-slate-400"
const activeTabClassName = "scale-125 !text-slate-600 dark:!text-slate-200"

export const Tabs = () => {
  const [activeTab, setActiveTab] = useState<Tab>("open-source")
  const handleTabClick = (tab: Tab) => setActiveTab(tab)

  return (
    <div className="w-full">
      <div
        className={clsx(
          "w-full text-xl flex flex-row",
          "items-center justify-center mt-12 pb-2 mb-6",
          "border-slate-400 dark:border-slate-500 border-b"
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
        <AnimatePresence>
          {activeTab === "open-source" &&
            ossProjectData.map((ossProject, index) => (
              <OssProject
                index={index}
                project={ossProject}
                key={ossProject.title}
              />
            ))}
          {activeTab === "work-history" && (
            <p>Content for Work History tab goes here</p>
          )}
        </AnimatePresence>
      </div>
    </div>
  )
}
