import matter from 'gray-matter'
import path from 'path'
import fs from 'fs'
import { mdxPaths, PATH } from '@/lib/mdxPaths'

export const getPost = (slug: string) => {
  const post = mdxPaths
    .filter((path) => slug === path.replace(/\.mdx/, ''))
    .join('')

  const source = fs.readFileSync(path.join(PATH, post), 'utf8')

  const { content, data } = matter(source)

  return {
    content,
    frontMatter: data,
  }
}

export const getPosts = () => {
  return mdxPaths.map((post: string) => {
    const content = fs.readFileSync(path.join(PATH, post), 'utf8')

    return {
      slug: post.replace(/\.mdx/, ''),
      content,
      frontMatter: matter(content).data,
    }
  })
}
