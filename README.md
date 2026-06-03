# DevScope

A professional, production-grade developer dashboard built with Next.js, React, and Tailwind CSS. DevScope provides a unified platform for managing developer tools, weather tracking, and GitHub profile analytics.

## Features

**Developer Tools Explorer** - Browse and discover development tools with categorized listings and direct links to resources.

**Weather Tracker** - Real-time weather data for any location worldwide with current metrics and conditions.

**GitHub Stats Viewer** - View detailed GitHub user profiles with repository, follower, and account metrics.

**User Authentication** - Secure token-based authentication system with role-based user management.

**Form Validation** - Middleware-powered Zod validation schemas with client-side protection and real-time feedback.

## Tech Stack

- **Framework**: Next.js 16.2.6 with App Router
- **UI**: React 19.2.4
- **Styling**: Tailwind CSS v4 with PostCSS
- **Icons**: Lucide React 1.17.0
- **Language**: TypeScript 5+
- **Validation**: Zod 4.4.3 for runtime schema validation
- **API Integration**: Weather API & GitHub API

## Getting Started

### Prerequisites

- Node.js 18+
- npm or yarn

### Installation

1. Clone the repository
```bash
git clone <repository-url>
cd auth-nextjs
```

2. Install dependencies
```bash
npm install
```

3. Create environment variables
```bash
cp .env.example .env.local
```

Add your API keys:
```
NEXT_PUBLIC_WEATHER_KEY=your_weather_api_key
```

4. Run the development server
```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the landing page.

## Project Structure

```
app/
├── page.tsx                 # Landing page
├── layout.tsx              # Root layout
├── globals.css             # Global styles
├── login/
│   └── page.tsx           # Login page
├── register/
│   └── page.tsx           # Registration page
└── dashboard/
    ├── page.tsx           # Dashboard welcome
    ├── layout.tsx         # Dashboard layout
    ├── components/
    │   ├── header.tsx     # Navigation header
    │   └── footer.tsx     # Footer
    ├── tools/
    │   ├── page.tsx       # Developer tools explorer
    │   └── devtools.json  # Tools database
    ├── weather/
    │   └── page.tsx       # Weather tracker
    └── github/
        └── page.tsx       # GitHub stats viewer

lib/
├── validators.ts           # Zod validation schemas & utilities
```

## Validation System

DevScope uses **Zod** for runtime schema validation with a middleware-like pattern:

### Available Validators

- **`loginSchema`** - Validates username (3-50 chars, alphanumeric) and password (min 6 chars)
- **`registerSchema`** - Validates username, email, password (requires uppercase, lowercase, number)

### Usage

**Bulk validation before API call:**
```typescript
import { validateInput, loginSchema, LoginInput } from '@/lib/validators';

const validation = await validateInput<LoginInput>(loginSchema, { username, password });
if (!validation.valid) {
  setError(validation.error);
  return;
}
```

**Real-time field validation:**
```typescript
import { validateField, loginSchema } from '@/lib/validators';

const error = validateField('username', username, loginSchema.shape.username);
if (error) setFieldError(error);
```

## Design System

Built with a dark, minimal aesthetic using Tailwind CSS v4. Features a consistent color palette (Deep black backgrounds, amber accents) with smooth transitions and responsive layouts.

## API Routes

The application proxies external APIs through `/api/v1/`:
- User authentication endpoints
- Weather API (OpenWeatherMap)
- GitHub API (GitHub REST API)

## Build & Deployment

```bash
# Development
npm run dev

# Production build
npm run build

# Start production server
npm start

# Linting
npm run lint
```

## Contributing

Pull requests are welcome. For major changes, please open an issue first to discuss proposed changes.

## License

MIT License - see LICENSE file for details.

## Support

For issues and questions, please open an issue on the GitHub repository.
