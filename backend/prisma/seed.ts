import { PrismaClient } from '@prisma/client';
import bcrypt from 'bcrypt';

const prisma = new PrismaClient();

async function main() {
  const pwd = await bcrypt.hash('password123', 10);
  const admin = await prisma.user.upsert({ where: { email: 'admin@school.local' }, update: {}, create: { email: 'admin@school.local', password: pwd, name: 'Admin', role: 'ADMIN' } });
  const teacher = await prisma.user.upsert({ where: { email: 'teacher@school.local' }, update: {}, create: { email: 'teacher@school.local', password: pwd, name: 'Teacher', role: 'TEACHER' } });
  const student = await prisma.user.upsert({ where: { email: 'student@school.local' }, update: {}, create: { email: 'student@school.local', password: pwd, name: 'Student', role: 'STUDENT' } });
  const parent = await prisma.user.upsert({ where: { email: 'parent@school.local' }, update: {}, create: { email: 'parent@school.local', password: pwd, name: 'Parent', role: 'PARENT' } });

  await prisma.news.createMany({ data: [
    { title: 'Welcome back!', content: 'New semester starts next week', authorId: admin.id },
    { title: 'Science fair', content: 'Register for science fair', authorId: teacher.id }
  ]});

  const tt = await prisma.timetable.create({ data: { day: 'Monday', lessons: { create: [ { startTime: '09:00', endTime: '09:45', subject: 'Math' }, { startTime: '10:00', endTime: '10:45', subject: 'English' } ] } }, include: { lessons: true } });

  console.log({ admin: admin.email, teacher: teacher.email, student: student.email, parent: parent.email });
}

main().catch(e => { console.error(e); process.exit(1); }).finally(() => prisma.$disconnect());
