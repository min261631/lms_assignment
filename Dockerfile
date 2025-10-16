# ---- Base (for building) ----
    FROM node:20-alpine AS builder
    WORKDIR /app
    
    # Speeds up installs in CI/containers
    ENV CI=true
    
    # Install dependencies first (better layer caching)
    COPY package.json package-lock.json* pnpm-lock.yaml* yarn.lock* ./
    # Choose your installer (uncomment one)
    RUN if [ -f package-lock.json ]; then npm ci; \
        elif [ -f pnpm-lock.yaml ]; then npm i -g pnpm && pnpm i --frozen-lockfile; \
        elif [ -f yarn.lock ]; then yarn --frozen-lockfile; \
        else npm i; fi
    
    # Copy the app
    COPY . .
    
    # Build Next.js for standalone output
    # If you don’t already have it, add: nextConfig.output = "standalone"
    # (see step 2)
    RUN npm run build || (echo "If you use pnpm/yarn, swap the build command" && false)
    
    # ---- Runner (minimal runtime) ----
    FROM node:20-alpine AS runner
    WORKDIR /app
    ENV NODE_ENV=production
    # Next.js listens on 3000 by default
    ENV PORT=3000
    EXPOSE 3000
    
    # Copy only the standalone production build
    # .next/standalone contains server + node_modules needed to run
    COPY --from=builder /app/.next/standalone ./
    # Public assets
    COPY --from=builder /app/public ./public
    # Next.js static chunks
    COPY --from=builder /app/.next/static ./.next/static
    
    # Healthcheck (optional)
    HEALTHCHECK --interval=30s --timeout=5s --start-period=30s \
      CMD wget -qO- http://127.0.0.1:3000/ || exit 1
    
    # Start the server
    CMD ["node", "server.js"]
    