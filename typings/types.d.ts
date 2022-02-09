type SiteMeta = {
  title: string
  description: string
  url: string
  type: string
  thumbnail: string
  date: string
}

namespace NodeJS {
  interface ProcessEnv extends NodeJS.ProcessEnv {
    GITHUB_SECRET: string
  }
}
