import type { NextApiRequest, NextApiResponse } from 'next'

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<{ reposCount: number } | { error: unknown } | undefined>
) {
  if (req.method === 'GET') {
    try {
      const userResponse = await fetch(
        'https://api.github.com/users/kerekatu',
        {
          headers: {
            AUTHORIZATION: `token ${process.env.GITHUB_SECRET}`,
          },
        }
      )

      const user: { [key: string]: any } = await userResponse.json()

      res.setHeader(
        'Cache-Control',
        'public, s-maxage=1200, stale-while-revalidate=600'
      )

      return res.status(200).json({ reposCount: user.public_repos })
    } catch (error) {
      return res.status(400).json({ error })
    }
  }
}
