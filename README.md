# Fragaria – Festival Website 🎶

A modern web application for **Fragaria**, a music festival.  
This site provides information about artists, ticket sales, shuttle services, maps, FAQs, and contact options for attendees.

---

## 🌐 Tech Stack

- **Framework:** Next.js 15 (App Router) with React 19
- **Styling:** Tailwind CSS, Headless UI, Heroicons
- **UI Enhancements:** Framer Motion (animation)
- **Email:** Resend API with React Email
- **Server:** Custom Express server (for SSR/API support)
- **Build tooling:** TurboRepack (for fast builds)

---

## 🚀 Getting Started

### 📦 Prerequisites

- Node.js 18+
- npm or yarn

### 📥 Installation

```bash
git clone https://github.com/Marko-Mario-Strassl/fragaria_frontend.git
cd fragaria_frontend
npm install
# or
yarn install
```

---

## 🔐 Environment Setup

Create a `.env` file from the example:
```bash
cp .env.example .env
```

Then add your Resend API key:
```env
RESEND_API_KEY=your-api-key-here
```

---

## 👨‍💻 Development

Start the dev server:

```bash
npm run dev
# or
yarn dev
```

Runs at: [http://localhost:3000](http://localhost:3000)

---

## 📦 Production

### 🏗️ Build

```bash
npm run build
# or
yarn build
```

### 🚀 Start

```bash
npm start
# or
yarn start
```

Starts the Express server (SSR enabled) at: [http://localhost:3000](http://localhost:3000)

---

## 🔧 Environment Variables

| Variable         | Description                       | Required |
|------------------|-----------------------------------|----------|
| `RESEND_API_KEY` | API key for Resend email service  | ✅ Yes   |

---

## 📁 Project Structure

```
/app         → App Router pages & API routes  
/components → Shared React components  
/assets      → Static images, icons  
/contexts    → React context providers  
/public      → Public static files  
/types       → TypeScript definitions  
```

---

## ☁️ Deployment

The app uses SSR via a custom Express server.

### Options:

1. **Traditional hosting (e.g. VPS)**  
   Run `npm run build && npm start`

2. **Static export** (if simplified version is needed):  
   `next export` → deploy `out/` folder

3. **Vercel or Netlify** (experimental)  
   May require adjustments for server routes (`/api/contact`)

---

## 📬 Contact

If questions arise or info is outdated:

- 📧 info@fragaria.ch  
- 📱 +41 79 269 78 47

---

## 📄 License

All rights reserved.  
This source code is not open for public distribution or reuse.

---

> 🛠️ _Note for maintainers: this README was generated to summarize the current codebase. Feel free to adjust or trim for production readability._