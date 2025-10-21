# --- deps ---
FROM node:20-alpine AS deps
WORKDIR /app
COPY package.json package-lock.json* ./
COPY prisma ./prisma
RUN npm ci

# --- dev ---
FROM node:20-alpine AS dev
WORKDIR /app
COPY package.json package-lock.json* ./
COPY prisma ./prisma
RUN npm ci

EXPOSE 3000
CMD ["npm", "run", "dev", "--", "--port", "3000"]

# --- build ---
FROM node:20-alpine AS build
WORKDIR /app
COPY --from=deps /app/node_modules ./node_modules
COPY . .

# Generate Prisma client before build
RUN npx prisma generate

RUN npm run build

# --- runtime ---
FROM node:20-alpine AS runtime
WORKDIR /app
ENV NODE_ENV=production
COPY package.json package-lock.json* ./
COPY prisma ./prisma
RUN npm ci --omit=dev

COPY --from=build /app/.next ./.next
COPY --from=build /app/next.config.* ./
COPY --from=build /app/public ./public
EXPOSE 3000
CMD ["npm","run","start","--","-p","3000"]
  