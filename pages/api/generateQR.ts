import type { NextApiRequest, NextApiResponse } from 'next';
import { PrismaClient } from '@prisma/client';
import QRCode from 'qrcode';

const prisma = new PrismaClient();
  
export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'POST') {
    const { content } = req.body;

    if (!content) {
      return res.status(400).json({ error: 'Content is required' });
    }

    try {
      // Generate QR code data URL
      const qrDataUrl = await QRCode.toDataURL(content);
      console.log(qrDataUrl)

      // Store in database
      const qrCode = await prisma.qRCode.create({
        data: {
          content,
          qrDataUrl,
        },
      });

      console.log(qrCode)
      res.status(200).json(qrCode);
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Failed to generate QR code' });
    }
  } else {
    // Method not allowed
    res.setHeader('Allow', ['POST']);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}
