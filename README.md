# La Trobe University LMS (Learning Management System)

A modern, responsive Learning Management System built for the CSE3CWA Web Applications course at La Trobe University. This application demonstrates contemporary web development practices with a focus on user experience, accessibility, and maintainable code.

## 🚀 Features

### Core Functionality
- **Interactive Tab Generator**: Create enterprise-grade HTML5 components with inline CSS and JavaScript
- **Escape Room Module**: Interactive puzzle-based learning experiences (Coming Soon)
- **Coding Races**: Competitive programming challenges with real-time leaderboards (Coming Soon)
- **About Section**: Project information and student details

### Technical Features
- **Dark/Light Mode**: Comprehensive theme system with system preference detection
- **Responsive Design**: Mobile-first approach with hamburger navigation
- **Accessibility**: ARIA labels, keyboard navigation, high contrast support
- **Performance**: Optimized with Next.js 14 and Tailwind CSS
- **Type Safety**: Full TypeScript implementation

## 🛠️ Tech Stack

- **Framework**: Next.js 15 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Database**: PostgreSQL with Prisma ORM
- **State Management**: React Context API
- **Container**: Docker & Docker Compose
- **Development Tools**: ESLint, PostCSS

## 📁 Project Structure

```
lms_assignment/
├── frontend/
│   ├── app/
│   │   ├── api/               # API routes (Next.js API)
│   │   │   ├── escape-rooms/  # Escape room endpoints
│   │   │   ├── health/        # Health check
│   │   │   └── progress/      # Progress tracking
│   │   ├── components/        # Reusable UI components
│   │   │   ├── Header.tsx     # Navigation with mobile menu
│   │   │   ├── Footer.tsx     # Site footer
│   │   │   └── ui/            # UI components (Button, Card, etc.)
│   │   ├── contexts/          # React context providers
│   │   │   └── ThemeContext.tsx # Theme management
│   │   ├── lib/               # Utilities
│   │   │   ├── api.ts         # API helper functions
│   │   │   └── prisma.ts      # Prisma client
│   │   ├── main_pages/        # Feature pages
│   │   │   ├── tabs/          # Tab generator
│   │   │   ├── escape-room/   # Escape room builder & player
│   │   │   ├── coding-races/  # Coding challenges
│   │   │   └── about/         # About page
│   │   ├── globals.css        # Global styles
│   │   ├── layout.tsx         # Root layout
│   │   └── page.tsx           # Homepage
│   ├── prisma/
│   │   ├── schema.prisma      # Database schema
│   │   └── migrations/        # Database migrations
│   ├── Dockerfile             # Frontend container config
│   └── package.json           # Dependencies
├── docker-compose.yml         # Multi-container orchestration
└── README.md                  # Documentation
```

## 🎨 Theme System

The application features a sophisticated theme management system:

- **Three Theme Options**: Light, Dark, and System preference
- **Persistent Storage**: User preferences saved in localStorage
- **System Integration**: Automatically detects OS theme changes
- **Smooth Transitions**: CSS transitions for theme switching
- **Accessibility**: High contrast mode and reduced motion support

### Implementation Details
```typescript
// Theme context manages state across the entire application
const { theme, resolvedTheme, setTheme, toggleTheme } = useTheme();
```

## 📱 Responsive Design

Built with a mobile-first approach:

- **Mobile Navigation**: Hamburger menu with slide-down animation
- **Responsive Grid**: Cards adapt from 1 column (mobile) to 4 columns (desktop)
- **Touch-Friendly**: Proper button sizes and touch targets
- **Flexible Layout**: Container queries and responsive typography

## ♿ Accessibility Features

- **ARIA Labels**: Proper labeling for screen readers
- **Keyboard Navigation**: Full keyboard accessibility
- **Focus Management**: Visible focus indicators
- **High Contrast**: Support for high contrast mode
- **Reduced Motion**: Respects user motion preferences
- **Semantic HTML**: Proper heading hierarchy and landmarks

## 🚀 Getting Started

### Prerequisites
- Docker & Docker Compose
- Node.js 18+ (for local development without Docker)

### Installation with Docker (Recommended)

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd lms_assignment
   ```

2. **Start all services with Docker Compose**
   ```bash
   docker-compose up
   ```

3. **Access the application**
   - Frontend & API: [http://localhost:3000](http://localhost:3000)
   - PostgreSQL: `localhost:5432`

4. **Run database migrations** (first time only)
   ```bash
   docker-compose exec frontend npx prisma migrate deploy
   ```

### Local Development (without Docker)

1. **Install dependencies**
   ```bash
   cd frontend
   npm install
   ```

2. **Set up environment variables**
   ```bash
   cp .env.example .env
   # Edit .env with your database connection
   ```

3. **Run Prisma migrations**
   ```bash
   npx prisma migrate deploy
   npx prisma generate
   ```

4. **Run the development server**
   ```bash
   npm run dev
   ```

5. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000)

## 🎯 Key Components

### Header Component
- Responsive navigation with mobile hamburger menu
- Theme selector integration
- Student ID display
- Smooth animations and transitions

### Homepage
- Hero section with gradient backgrounds
- Feature cards with hover effects
- Call-to-action section
- Responsive grid layout

### Theme Context
- Manages theme state across the application
- Handles localStorage persistence
- System theme detection
- SSR-safe implementation

## 🔧 Development

### Code Quality
- **TypeScript**: Full type safety throughout the application
- **ESLint**: Code linting and formatting
- **Component Structure**: Modular, reusable components
- **Best Practices**: Modern React patterns and conventions

### File Organization
- **Components**: Reusable UI elements
- **Contexts**: State management and providers
- **Pages**: Feature-specific pages
- **Styles**: Global CSS and theme overrides

## 🤖 AI-Assisted Development

This project was developed with assistance from various AI tools:

### GitHub Copilot
- React context patterns and TypeScript interfaces
- Responsive design and Tailwind CSS classes
- Animation and transition implementations
- Code structure and organization

### ChatGPT
- Debugging and problem-solving
- Accessibility features and ARIA labels
- Text visibility fixes for dark mode
- Component structure and best practices

### AI Code Review
- Accessibility compliance verification
- Performance optimization suggestions
- Code quality and maintainability improvements

## 🏗️ Architecture

This application uses a **monolithic Next.js architecture** combining:
- **Frontend**: React components and pages
- **Backend**: Next.js API routes for RESTful endpoints
- **Database**: PostgreSQL with Prisma ORM

**Benefits:**
- Simplified deployment (single service)
- Easier instrumentation and monitoring
- Faster development iteration
- Shared TypeScript types between frontend and backend
- Single codebase maintenance

## 📋 Future Enhancements

### Planned Features
- **User Authentication**: Student login and progress tracking
- **Real-time Features**: WebSocket integration for live updates
- **Advanced Analytics**: Student progress tracking and insights
- **Mobile App**: React Native application using same API

## 👨‍🎓 Student Information

- **Student ID**: 21930306
- **Course**: CSE3CWA Web Applications
- **University**: La Trobe University
- **Project**: Learning Management System

## 📄 License

This project is developed for educational purposes as part of the CSE3CWA Web Applications course at La Trobe University.

## 🙏 Acknowledgments

- **GitHub Copilot**: For AI-assisted code generation
- **ChatGPT**: For debugging assistance and best practices guidance


