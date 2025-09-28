import express from 'express';
import http from 'http';
import cors from 'cors';
import { Server as IOServer } from 'socket.io';
import authRoutes from './routes/auth';
import newsRoutes from './routes/news';
import userRoutes from './routes/users';
import timetableRoutes from './routes/timetable';
import { verifyTokenMiddleware } from './utils/auth';
import { prisma } from './prismaClient';


const app = express();
const server = http.createServer(app);
const io = new IOServer(server, { cors: { origin: '*' } });

app.use(cors());
app.use(express.json());

app.use('/api/auth', authRoutes);
app.use('/api/users', verifyTokenMiddleware, userRoutes);
app.use('/api/news', verifyTokenMiddleware, newsRoutes);
app.use('/api/timetable', verifyTokenMiddleware, timetableRoutes);

io.on('connection', (socket) => {
  console.log('socket connected', socket.id);
  socket.on('message', async (data) => {
    // save message
    try {
      const msg = await prisma.message.create({ data: { fromId: data.fromId, content: data.content } });
      io.emit('message', { id: msg.id, fromId: msg.fromId, content: msg.content, createdAt: msg.createdAt });
    } catch (e) {
      console.error('msg save error', e);
    }
  });
});

const port = Number(process.env.PORT || 4000);
server.listen(port, () => console.log(`Server running on ${port}`));
