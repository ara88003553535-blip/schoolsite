import express from 'express';
import { prisma } from '../prismaClient';

const router = express.Router();

router.get('/', async (req, res) => {
  const all = await prisma.news.findMany({ include: { author: true }, orderBy: { createdAt: 'desc' } });
  res.json(all);
});

router.post('/', async (req, res) => {
  const { title, content } = req.body;
  const user = (req as any).user;
  const created = await prisma.news.create({ data: { title, content, authorId: user.id } });
  res.json(created);
});

export default router;
