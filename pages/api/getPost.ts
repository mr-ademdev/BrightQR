import type { NextApiRequest, NextApiResponse } from 'next'
import prisma from '../../lib/prisma'

export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse
  ) {
  if (req.method === 'GET') {
    try {
      const users = await prisma.user.findMany()
      console.log(users)
      res.status(200).json(users)

    } catch (error) {
      res.status(500).json({ error: 'Failed to fetch users' })
    }
  } else {
    // Handle any other HTTP methods
    res.setHeader('Allow', ['GET'])
    res.status(405).end(`Method ${req.method} Not Allowed`)
  }
}