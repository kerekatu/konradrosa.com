import { GetStaticPaths, GetStaticProps, NextPage } from 'next'
import { serialize } from 'next-mdx-remote/serialize'
import { MDXRemote, MDXRemoteSerializeResult } from 'next-mdx-remote'
import { mdxPaths } from '@/lib/mdxPaths'
import { getPost } from '@/lib/mdxPosts'
import { FrontMatter } from '@/typings/blog'

export const getStaticProps: GetStaticProps<{
  mdxSource: MDXRemoteSerializeResult
}> = async ({ params }) => {
  if (!params || !params.slug) return { notFound: true }

  const { content, frontMatter } = getPost(params.slug as string)
  const mdxSource = await serialize(content)

  return { props: { mdxSource, frontMatter } }
}

export const getStaticPaths: GetStaticPaths = async () => {
  return {
    paths: mdxPaths.map((path) => ({
      params: {
        slug: path.replace(/\.mdx/, ''),
      },
    })),
    fallback: false,
  }
}

const BlogPost: NextPage<{
  mdxSource: MDXRemoteSerializeResult
  frontMatter: FrontMatter
}> = ({ mdxSource, frontMatter }) => {
  return <MDXRemote {...mdxSource} />
}

export default BlogPost
