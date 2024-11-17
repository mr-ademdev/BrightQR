// pages/api/posts/getPostById.ts

import type { NextApiRequest, NextApiResponse } from 'next';
import prisma from '../../lib/prisma';

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method === 'GET') {
    let { id } = req.query;
    if (Array.isArray(id)) {
        id = id[0];
    }
    if (!id) {
      return res.status(400).json({ message: 'QR code ID is required' });
    }

    try {
      const qrCode = await prisma.qRCode.findUnique({
        where: {
          id: id,
        },
      });

      if (qrCode === null) {
        // Post not found
        return res.status(404).json({ message: 'QR Code not found' });
      }


      return res.status(200).json(qrCode);
    } catch (error) {
      console.error('Failed to get or update post');
      return res.status(500).json({ message: 'Failed to get or update post' });
    }
  } else {
    // Handle any non-GET requests
    res.setHeader('Allow', ['GET']);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}