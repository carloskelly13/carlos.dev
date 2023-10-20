type WorkHistoryItem = {
  startTime: string
  endTime: string
  company: string
  title: string
  description: string
}

export const workHistory: WorkHistoryItem[] = [
  {
    startTime: "2022",
    endTime: "present",
    company: "Formidable, a NearForm company",
    title: "CTO",
    description:
      "I head up the engineering delivery organization and manage the engineering leadership team. Formidable is a global design, product, and engineering agency with a team of over 80 employees servicing clients such as Puma, Starbucks, Walmart, The Atlantic, and TechStyle. I helped lead the company through a successful acquisition by NearForm in 2023.",
  },
  {
    startTime: "2020",
    endTime: "2022",
    company: "Formidable",
    title: "Director of Engineering",
    description:
      "I managed client projects and a team of engineering managers with a focus on mobile and web applications. Worked with our Business Development team on sales, staffing, and client success.",
  },
  {
    startTime: "2016",
    endTime: "2020",
    company: "Formidable",
    title: "Principal Software Engineer & Manager",
    description:
      "I led a team of developers, hired and on–boarded new team members, and worked on several mobile and web React, Node, and GraphQL-based projects.",
  },
  {
    startTime: "2015",
    endTime: "2016",
    company: "Modus Create",
    title: "Senior Software Engineer",
    description:
      "Led the front-end development efforts of several lab projects for Marriott. Worked on a rewrite of a regional product site using React with server side rendering for Uniqlo.",
  },
  {
    startTime: "2010",
    endTime: "2015",
    company: "Object Systems Group",
    title: "Software Engineer",
    description:
      "Consulted for the Barclaycard Bespoke Offers iOS native app using UIKit and Objective-C. My daily responsibilities included sprint planning, working with product owners on design and experience, architecture, and feature development.",
  },
  {
    startTime: "2008",
    endTime: "2010",
    company: "Las Vegas Gaming, Inc.",
    title: "Software Engineer",
    description:
      "Assisted software development by co-designing the interface and unit testing for a slot machine entertainment portal macOS application written in Cocoa and Objective-C.",
  },
]
