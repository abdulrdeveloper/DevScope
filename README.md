<div align="center">

# 🔭 DevScope

A clean, minimal developer dashboard built with **Next.js 15** and **TypeScript**.<br/>
Brings your GitHub stats, live weather, and dev tools together — behind a secure auth system.

[![Next.js](https://img.shields.io/badge/Next.js-15-black?style=flat-square&logo=next.js)](https://nextjs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5+-3178C6?style=flat-square&logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-v4-06B6D4?style=flat-square&logo=tailwindcss&logoColor=white)](https://tailwindcss.com/)
[![Zod](https://img.shields.io/badge/Zod-4.4-3068B7?style=flat-square)](https://zod.dev/)
[![MIT License](https://img.shields.io/badge/License-MIT-green?style=flat-square)](./LICENSE)

**[🌐 Live Demo](https://devscope.abdulrdeveloper.me)**

</div>

---

## Features

**🔐 Authentication** — Token-based login and registration with protected dashboard routes via Next.js middleware.

**🐙 GitHub Stats** — Look up any GitHub user and see their repositories, followers, and account details using the public GitHub REST API.

**🌤️ Weather Tracker** — Get real-time weather conditions for any city worldwide, powered by the OpenWeatherMap API.

**🛠️ Dev Tools Explorer** — A categorized collection of developer tools and resources with direct links.

---

## Tech Stack

| | |
|---|---|
| **Framework** | Next.js 15 (App Router) |
| **Language** | TypeScript 5+ |
| **Styling** | Tailwind CSS v4 |
| **Validation** | Zod 4.4 |
| **Icons** | Lucide React |
| **APIs** | OpenWeatherMap · GitHub REST API |

---

## Getting Started

**1. Clone and install**
```bash
git clone https://github.com/abdulrdeveloper/DevScope.git
cd DevScope
npm install
```

**2. Set up environment variables**
```bash
cp .env.example .env.local
```

```env
NEXT_PUBLIC_WEATHER_API_KEY=your_openweathermap_key
```

Get a free key at [openweathermap.org](https://openweathermap.org/api). The GitHub Stats feature uses the public API — no key required.

**3. Run the dev server**
```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) and you're good to go.

---

## Project Structure

```
app/
├── login/          # Login page
├── register/       # Registration page
└── dashboard/
    ├── github/     # GitHub stats viewer
    ├── weather/    # Weather tracker
    └── tools/      # Dev tools explorer
lib/
└── validators.ts   # Zod schemas
middleware.ts       # Route protection
```

---

## License

MIT — see [LICENSE](./LICENSE)

---

<div align="center">
Built by <a href="https://abdulrdeveloper.me">Abdul Rahman</a> &nbsp;·&nbsp;
<a href="https://github.com/abdulrdeveloper">GitHub</a> &nbsp;·&nbsp;
<a href="https://hashnode.com/@abdulrdeveloper">Hashnode</a>
</div>