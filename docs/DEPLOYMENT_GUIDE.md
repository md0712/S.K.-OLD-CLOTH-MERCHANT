# S.K. OLD CLOTH MERCHANT — Deployment Guide

## 1. Quick Local Start

### Prerequisites
- Node.js v18+ (tested on Node v24)
- npm v9+

### Step-by-Step Execution

1. **Start Backend API Server (Port 5000):**
   ```bash
   cd backend
   npm install
   node src/server.js
   ```

2. **Start Frontend Client (Port 5173):**
   ```bash
   cd frontend
   npm install
   npm run dev
   ```
   Open `http://localhost:5173` in your browser.

3. **Start Admin Management Dashboard (Port 5174):**
   ```bash
   cd admin
   npm install
   npm run dev
   ```
   Open `http://localhost:5174` in your browser.
   - **Login Email:** `admin@skoldclothmerchant.com`
   - **Login Password:** `admin123`

---

## 2. Production Deployment

### Option A: Vercel / Netlify (Frontend & Admin)
1. Set the root directory to `frontend/` (or `admin/`).
2. Build command: `npm run build`
3. Output directory: `dist`

### Option B: VPS / Docker / Ubuntu (Full Stack)
1. Use PM2 for backend process supervision:
   ```bash
   pm2 start backend/src/server.js --name "sk-cloth-backend"
   ```
2. Serve frontend and admin builds through NGINX with SSL (Let's Encrypt Certbot).
