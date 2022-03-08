export type SiteMeta = {
  title: string
  description: string
  url: string
  type: string
  thumbnail: string
  date: string
}

export interface NavItem {
  label: string
  iconPath?: string | null
  link: string
}

namespace NodeJS {
  interface ProcessEnv extends NodeJS.ProcessEnv {
    GITHUB_SECRET: string
  }
}
