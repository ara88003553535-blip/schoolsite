import express from 'express';
import { prisma } from '../prismaClient';

const router = express.Router();

router.get('/', async (req, res) => {
  const users = await prisma.user.findMany({ select: { id: true, email: true, name: true, role: true } });
  res.json(users);
});

export default router;
