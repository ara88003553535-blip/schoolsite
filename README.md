# School Portal (frontend + backend)

Minimal full-stack scaffold for a school portal.

Features:
- Frontend: React + TypeScript + Vite + Ant Design + react-i18next (English + Lithuanian)
- Backend: Node + TypeScript + Express + Prisma (SQLite) + JWT auth + Socket.IO chat
- Seed script creates admin, teacher, student, parent (password: password123)

Quick start (Windows PowerShell):

1) Install dependencies
   npm run install-all

2) Set up backend database and seed
   cd backend; copy .env.example .env; npx prisma migrate dev --name init; npm run seed

3) Start dev servers (in two terminals)
   cd backend; npm run dev
   cd frontend; npm run dev

Open http://localhost:5173 (frontend). API server defaults to http://localhost:4000

Switch languages in the UI (top-right) between English and Lithuanian.
