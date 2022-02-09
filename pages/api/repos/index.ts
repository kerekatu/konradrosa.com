import { GithubUserRepo } from '@/typings/github'
import type { NextApiRequest, NextApiResponse } from 'next'

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<GithubUserRepo[] | { error: unknown } | undefined>
) {
  const { per_page, page } = req.query

  if (!per_page || !page)
    return res.status(400).json({ error: 'Missing query parameters' })

  if (req.method === 'GET') {
    try {
      const reposResponse = await fetch(
        `https://api.github.com/users/kerekatu/repos?sort=newest&per_page=${per_page}&page=${page}&type=public`,
        {
          headers: {
            AUTHORIZATION: `token ${process.env.GITHUB_SECRET}`,
          },
        }
      )

      const repos: GithubUserRepo[] = await reposResponse.json()

      res.setHeader(
        'Cache-Control',
        'public, s-maxage=1200, stale-while-revalidate=600'
      )

      return res.status(200).json(repos)
    } catch (error) {
      return res.status(400).json({ error })
    }
  }
}
