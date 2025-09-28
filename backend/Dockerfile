FROM node:18-alpine
WORKDIR /app/backend

# Install production dependencies
COPY backend/package*.json ./
RUN npm install --production

# Copy source and generate Prisma client (if present)
COPY backend/ ./
RUN npx prisma generate || true

# Build backend
RUN npm run build

EXPOSE 4000
CMD ["node", "dist/index.js"]
