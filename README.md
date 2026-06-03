# DevScope

A professional, production-grade developer dashboard built with Next.js, React, and Tailwind CSS. DevScope provides a unified platform for managing developer tools, weather tracking, and GitHub profile analytics.

## Features

🔧 **Developer Tools Explorer**
- Browse and discover the best development tools and resources
- Categorized tool listings with descriptions
- Links to official tool websites
- Beautiful card-based interface

🌤️ **Weather Tracker**
- Real-time weather data for any city worldwide
- Current temperature, humidity, wind speed, and conditions
- Beautiful weather visualizations
- Responsive search interface

📊 **GitHub Stats Viewer**
- View detailed GitHub user profiles
- Track followers, following, and repositories
- See profile creation dates and bio information
- Direct links to GitHub profiles

🔐 **User Authentication**
- Secure authentication system
- Email verification support
- Role-based user management
- Token-based sessions

## Tech Stack

- **Framework**: Next.js 16.2.6 with App Router
- **UI**: React 19.2.4
- **Styling**: Tailwind CSS v4 with PostCSS
- **Icons**: Lucide React 1.17.0
- **Language**: TypeScript 5+
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
```

## Design System

### Colors
- **Background**: `#0a0a0a` (Deep black)
- **Cards**: `#111` (Dark gray)
- **Accent**: `#f59e0b` (Amber-500)
- **Borders**: `#222` (Medium gray)

### Typography
- **Headings**: `font-black` (Extra bold)
- **Body**: `font-light` (Thin)
- **Metadata**: `font-light` text-gray-500

### Components
- Rounded borders with subtle hover effects
- Amber glow on interactive elements
- Smooth transitions (300-500ms)
- Responsive grid layouts
- Professional gradients

## API Routes

The application proxies external APIs through `/api/v1/`:

- `/api/v1/users/current-user` - Get current user info
- External Weather API (OpenWeatherMap)
- External GitHub API (GitHub REST API)

## Performance

### Optimizations

- ✅ Removed webpack polling for faster dev server startup
- ✅ Efficient code splitting with Next.js App Router
- ✅ Optimized images with next/image
- ✅ Minimal bundle size with tree-shaking
- ✅ Client-side hydration optimization

### Build Commands

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

## Features & Capabilities

### Landing Page
- Hero section with call-to-action buttons
- Feature showcase with mock UI boards
- Responsive design
- Smooth scroll animations
- Professional navigation

### Dashboard
- User profile card with verification status
- Quick access to all features
- Professional layout with gradients
- Role-based information display

### Tools Page
- Random tool showcase
- Detailed tool information
- Browse all tools grid
- External links to tool websites

### Weather Page
- City search functionality
- Real-time weather data
- Multiple weather metrics
- Visual representations

### GitHub Page
- Username search
- Detailed user profiles
- Statistics cards
- Profile links

## Contributing

Pull requests are welcome. For major changes, please open an issue first to discuss proposed changes.

## License

This project is licensed under the MIT License - see LICENSE file for details.

## Support

For issues and questions, please visit the GitHub repository issues section.

---

**Built with ❤️ for developers by developers**

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
