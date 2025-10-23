# LMS Assignment - Escape Room Builder

A comprehensive Learning Management System (LMS) application with an interactive Escape Room Builder feature for creating coding challenges and puzzles for students.

## Features

### 🏗️ Escape Room Builder
- **Interactive Builder Interface**: Create custom escape room challenges with a user-friendly drag-and-drop interface
- **Multiple Challenge Types**:
  - Format Code: Validate exact code style and formatting
  - Debug Code: Students fix syntax or logic errors
  - Generate Numbers: Create functions to generate numeric arrays (0-1000)
  - Port Data: Convert JSON to CSV format
  - Click to Debug: Interactive image-based clues with console logging
  - Custom Answer/Key: Simple text matching for non-coding challenges

### 🎯 Key Capabilities
- **Real-time Preview**: Test escape rooms before deployment
- **Save & Load**: Persist escape room configurations to database
- **HTML Generation**: Export escape rooms as standalone HTML for LMS integration
- **Timer Support**: Configurable time limits for challenges
- **Background Customization**: Custom background images for immersive experiences
- **Hint System**: Progressive hints to guide students through challenges

### 🛠️ Technical Features
- **OpenTelemetry Integration**: Comprehensive observability and tracing
- **Database Support**: PostgreSQL with Prisma ORM
- **Modern UI**: Built with Next.js, TypeScript, and Tailwind CSS
- **Testing**: Playwright end-to-end testing suite
- **Docker Support**: Containerized development and deployment

## Getting Started

### Prerequisites
- Node.js 18+ 
- Docker and Docker Compose
- PostgreSQL (via Docker)

### Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd lms_assignment
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Set up the database**
   ```bash
   sudo docker-compose up postgres
   npx prisma migrate dev --name init
   sudo docker-compose down postgres
   ```

4. **Build and start the application**
   ```bash
   sudo docker-compose build
   sudo docker-compose up
   ```

### Development

Start the development server:
```bash
npm run dev
```

The application will be available at `http://localhost:3000`.

### Testing

Run the test suite:
```bash
docker compose run --rm tests
```

View test artifacts:
```bash
npx http-server ./playwright-artifacts -p 9000
```

## Usage

### Creating an Escape Room

1. Navigate to the Escape Room Builder
2. Configure room settings:
   - Title and description
   - Time limit
   - Background image
3. Add puzzle stages:
   - Select challenge type
   - Define questions and expected answers
   - Add hints and starter code
4. Preview and test your escape room
5. Save to database or generate HTML for LMS deployment

### Challenge Types

#### Format Code
Students must format code according to specific style guidelines (indentation, spacing, etc.).

#### Debug Code  
Students identify and fix syntax or logic errors in provided code snippets.

#### Generate Numbers
Students write functions to generate specific numeric sequences or arrays.

#### Port Data
Students convert data between formats (e.g., JSON to CSV).

#### Click to Debug
Interactive challenges where students click on images to reveal console hints.

#### Custom
Flexible text-based challenges for non-coding scenarios.

## Architecture

### Frontend
- **Next.js 14**: React framework with App Router
- **TypeScript**: Type-safe development
- **Tailwind CSS**: Utility-first styling
- **Lucide React**: Icon library

### Backend
- **Next.js API Routes**: Server-side functionality
- **Prisma ORM**: Database management
- **PostgreSQL**: Primary database

### Observability
- **OpenTelemetry**: Application tracing and monitoring
- **Instrumentation**: Automatic request/response tracking

## API Endpoints

- `GET /api/escape-rooms` - List all escape rooms
- `POST /api/escape-rooms` - Create new escape room
- `GET /api/escape-rooms/[id]` - Get specific escape room
- `PUT /api/escape-rooms/[id]` - Update escape room
- `DELETE /api/escape-rooms/[id]` - Delete escape room

## Database Schema

The application uses Prisma with the following main entities:
- **EscapeRoom**: Room configurations and metadata
- **Stage**: Individual puzzle challenges within rooms

## Deployment

### Vercel (Recommended)
The application is optimized for Vercel deployment with automatic OpenTelemetry collection.

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=<your-repo-url>&project-name=lms-assignment&repository-name=lms-assignment)

### Self-hosted
For self-hosted deployment, ensure you have:
- PostgreSQL database
- OpenTelemetry collector (optional)
- Node.js runtime environment

## Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Add tests if applicable
5. Submit a pull request

## License

This project is part of an educational LMS assignment and is intended for learning purposes.

## Support

For issues or questions related to this assignment, please refer to your course materials or contact your instructor.
