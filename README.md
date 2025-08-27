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

- **Framework**: Next.js 14 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **State Management**: React Context API
- **Deployment**: Vercel-ready
- **Development Tools**: ESLint, PostCSS

## 📁 Project Structure

```
lms_assignment/
├── app/
│   ├── components/          # Reusable UI components
│   │   ├── Header.tsx      # Navigation with mobile menu
│   │   ├── Footer.tsx      # Site footer
│   │   ├── ThemeSelector.tsx # Theme toggle component
│   │   └── CookieConsent.tsx # Cookie consent banner
│   ├── contexts/           # React context providers
│   │   └── ThemeContext.tsx # Theme management
│   ├── main_pages/         # Feature pages
│   │   ├── tabs/          # Tab generator functionality
│   │   ├── escape-room/   # Escape room feature (Coming Soon)
│   │   ├── coding-races/  # Coding races feature (Coming Soon)
│   │   └── about/         # About page
│   ├── globals.css        # Global styles and theme overrides
│   ├── layout.tsx         # Root layout with providers
│   └── page.tsx           # Homepage
├── public/                # Static assets
├── package.json           # Dependencies and scripts
└── README.md             # Project documentation
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
- Node.js 18+ 
- npm or yarn

### Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd lms_assignment
   ```

2. **Install dependencies**
   ```bash
   npm install
   # or
   yarn install
   ```

3. **Run the development server**
   ```bash
   npm run dev
   # or
   yarn dev
   ```

4. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000)

### Build for Production

```bash
npm run build
npm start
```

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

## 📋 Future Enhancements

### Planned Features
- **Escape Room Module**: Interactive puzzle-based learning experiences
- **Coding Races**: Competitive programming challenges with real-time leaderboards
- **User Authentication**: Student login and progress tracking
- **Database Integration**: Persistent data storage
- **Real-time Features**: WebSocket integration for live updates

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


