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

Deploying from GitHub
---------------------

I added GitHub Actions workflows to help you deploy from GitHub and a Dockerfile for the backend.

Files added:

- `.github/workflows/pages.yml` — builds the `frontend` folder and publishes `frontend/dist` to GitHub Pages when you push to `main`.
- `.github/workflows/backend-ghcr.yml` — builds a Docker image from `backend/Dockerfile` and pushes it to GitHub Container Registry as `ghcr.io/<owner>/<repo>:latest` when you push to `main`.
- `backend/Dockerfile` — Dockerfile used by the GHCR workflow to build the backend image.

Recommended flow (frontend to GitHub Pages, backend to Render/GHCR):

1) Create a GitHub repo and push this project to the `main` branch.

2) Frontend: Pages
- The Pages workflow will build `frontend` and publish `frontend/dist` when you push to `main`.

3) Backend: GHCR + host
- The backend workflow will push a Docker image to GHCR (`ghcr.io/<owner>/<repo>:latest`).
- Pull and run this image on any server (or deploy it to Render, DigitalOcean App Platform, etc.):

```bash
# pull image
docker pull ghcr.io/<owner>/<repo>:latest

# run
docker run -p 4000:4000 --env-file ./backend/.env ghcr.io/<owner>/<repo>:latest
```

4) Update `VITE_API_URL` in the frontend to point to your backend public URL and re-deploy the frontend.

If you want, I can:
- Create the GitHub repo and push the code and workflows for you (I'll provide the git commands you can run locally), or
- Add a workflow to automatically deploy the Docker image to Render (requires a Render API key), or
- Convert the backend to use Postgres for better production readiness and wire deployment to a single provider.


---

If you'd like, I can now create the git commands you should run to push this repo to GitHub and trigger the workflows. Which would you like me to do?

Developer note:
- Make sure `frontend/package.json` and `backend/package.json` (and their lockfiles) are committed to the repo. I added `frontend/package.json` and `backend/package.json` for the Actions runner, but you should verify versions and add `package-lock.json` files by running `npm install` locally in each folder and committing the generated lockfiles for deterministic CI builds.
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
