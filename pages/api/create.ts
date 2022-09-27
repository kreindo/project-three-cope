import { prisma } from '../../lib/prisma';
import { NextApiRequest, NextApiResponse } from 'next';

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const { name, motto, emoji } = req.body;

  try {
    await prisma.santri.create({
      data: {
        name,
        motto,
        emoji,
      },
    });
    res.status(200).json({ message: 'santri added' });
  } catch (err) {
    console.log(`failed, error thrown: ${err}`);
  }
}
