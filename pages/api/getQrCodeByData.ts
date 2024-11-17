import type { NextApiRequest, NextApiResponse } from 'next'
import prisma from '../../lib/prisma'

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method === 'GET') {
    let { content } = req.query

    if (!content) {
      return res.status(400).json({ message: 'QR code content is required' })
    }

    const contentString = Array.isArray(content) ? content[0] : content;
    
    try {
      const qrCode = await prisma.qRCode.findFirst({
        where: {
          content: contentString,
        },
      });

      if (qrCode === null) {
        // QR Code not found
        return res.status(404).json({ message: 'QR Code not found' })
      }

      return res.status(200).json(qrCode.id)
    } catch (error) {
      return res.status(500).json({ message: 'Failed to retrieve QR code' })
    }
  } else {
    // Handle any non-GET requests
    res.setHeader('Allow', ['GET'])
    res.status(405).end(`Method ${req.method} Not Allowed`)
  }
}