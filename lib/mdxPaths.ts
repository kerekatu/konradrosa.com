import fs from 'fs'
import path from 'path'

export const PATH = path.join(process.cwd(), 'data/blog')

export const mdxPaths = fs
  .readdirSync(PATH)
  .filter((path) => /\.mdx?$/.test(path))
