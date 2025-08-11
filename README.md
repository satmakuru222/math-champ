# 🏆 MathChamp - Math Competition Prep Platform

A comprehensive web and mobile application designed to help students from elementary through high school prepare for math competitions like MathCounts, AMC, AIME, USAMO, and other regional competitions.

## ✨ Features

### 🎯 For Students

- **Adaptive Learning**: Personalized difficulty adjustment based on performance
- **Competition Prep**: Targeted practice for MathCounts, AMC 8/10/12, AIME, USAMO, and more
- **Interactive Problem Solving**: Multiple choice, free response, and proof-based problems
- **Gamification**: Points, levels, achievements, and virtual rewards
- **Study Groups**: Collaborative learning with peers
- **Progress Tracking**: Visual skill trees and mastery indicators
- **Mock Competitions**: Timed practice tests simulating real competitions

### 👨‍👩‍👧‍👦 For Parents

- **Comprehensive Dashboard**: Detailed progress analytics and performance insights
- **Goal Setting**: Track learning objectives and milestones
- **Time Management**: Study time and session frequency monitoring
- **Subscription Management**: Easy account and billing control

### 🎓 Educational Features

- **Spaced Repetition**: Automatic review of previously learned concepts
- **Diagnostic Assessment**: Skill evaluation and personalized learning paths
- **Video Explanations**: Step-by-step solution walkthroughs
- **Interactive Tools**: Geometry tools, graphing calculators, equation editors
- **Hint System**: Scaffolded support without giving away solutions

## 🛠 Technology Stack

### Frontend

- **Web**: Next.js 14+ with TypeScript and Tailwind CSS
- **Mobile**: Flutter (iOS & Android)
- **Math Rendering**: MathJax/KaTeX for LaTeX equations
- **UI Components**: Custom design system with consistent branding

### Backend

- **API**: Node.js with Express.js
- **Database**: PostgreSQL (primary), Redis (caching)
- **Authentication**: Auth0 or Supabase Auth
- **Real-time**: Socket.io for collaborative features
- **File Storage**: AWS S3 for images and diagrams
- **Payments**: Stripe for subscription management

### Development Tools

- **Monorepo**: Organized with workspaces for web, mobile, and API
- **Type Safety**: Full TypeScript coverage
- **Code Quality**: ESLint, Prettier, Husky pre-commit hooks
- **Testing**: Jest, React Testing Library, Cypress
- **CI/CD**: GitHub Actions for automated testing and deployment

## 🚀 Quick Start

### Prerequisites

- Node.js 18+
- npm or yarn
- Git

### Installation

1. **Clone the repository**

   ```bash
   git clone https://github.com/your-username/mathchamp.git
   cd mathchamp
   ```

2. **Install dependencies**

   ```bash
   npm install
   ```

3. **Start the development server**

   ```bash
   npm run dev
   ```

4. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000) to see the application.

### Development Commands

```bash
# Start development server
npm run dev

# Run tests
npm test

# Run tests in watch mode
npm run test:watch

# Run tests with coverage
npm run test:coverage

# Type checking
npm run type-check

# Linting
npm run lint

# Linting with auto-fix
npm run lint:fix

# Build for production
npm run build

# Start production server
npm start

# Run all validation checks (type-check, lint, test, build)
npm run validate
```

### Environment Variables

Create a `.env.local` file in the root directory:

```env
# Database
DATABASE_URL=postgresql://username:password@localhost:5432/mathchamp
REDIS_URL=redis://localhost:6379

# Authentication
AUTH0_SECRET=your-auth0-secret
AUTH0_BASE_URL=http://localhost:3000
AUTH0_ISSUER_BASE_URL=https://your-tenant.auth0.com
AUTH0_CLIENT_ID=your-auth0-client-id
AUTH0_CLIENT_SECRET=your-auth0-client-secret

# Payments
STRIPE_SECRET_KEY=sk_test_your-stripe-secret-key
STRIPE_PUBLISHABLE_KEY=pk_test_your-stripe-publishable-key
STRIPE_WEBHOOK_SECRET=whsec_your-webhook-secret

# External Services
AWS_ACCESS_KEY_ID=your-aws-access-key
AWS_SECRET_ACCESS_KEY=your-aws-secret-key
AWS_S3_BUCKET=your-s3-bucket-name
```

## 📁 Project Structure

```
mathchamp/
├── src/
│   ├── app/                   # Next.js App Router
│   │   ├── page.tsx          # Homepage
│   │   ├── layout.tsx        # Root layout
│   │   └── globals.css       # Global styles
│   ├── components/            # Reusable React components
│   │   ├── ui/               # Basic UI components (Button, Card, etc.)
│   │   ├── layout/           # Layout components (Header, Footer)
│   │   └── math/             # Math-specific components (future)
│   └── __tests__/             # Test files
├── public/                    # Static assets
├── jest.config.js            # Jest test configuration
├── jest.setup.js             # Jest test setup
├── tsconfig.json             # TypeScript configuration
├── tailwind.config.ts        # Tailwind CSS configuration
├── next.config.ts            # Next.js configuration
├── package.json              # Dependencies and scripts
└── README.md                 # This file
```

### Component Structure

- **UI Components** (`src/components/ui/`): Reusable basic components like buttons, cards, inputs
- **Layout Components** (`src/components/layout/`): Header, footer, navigation, and page layouts
- **Math Components** (`src/components/math/`): Math-specific components for problem rendering, equation editing, etc.
- **Tests** (`src/__tests__/`): Co-located test files for all components and pages

## 🧪 Testing

We use **Jest** and **React Testing Library** for testing, following best practices for component and integration testing.

### Run Tests

```bash
# Run all tests once
npm test

# Run tests in watch mode (recommended for development)
npm run test:watch

# Run tests with coverage report
npm run test:coverage
```

### Testing Philosophy

- **Unit Tests**: Individual components and functions
- **Integration Tests**: Component interactions and user workflows
- **Accessibility Tests**: Ensure WCAG compliance for educational content
- **Educational Accuracy**: Mathematical content validation

## 🚀 Deployment

### Web Application (Vercel)

```bash
# Deploy to preview
npm run deploy:preview

# Deploy to production
npm run deploy:production
```

### Mobile Application

```bash
# Build for iOS
cd packages/mobile
flutter build ios

# Build for Android
flutter build apk
```

### Backend API

```bash
# Build and deploy API
npm run build:api
npm run deploy:api
```

## 📊 Database Schema

### Key Entities

- **Users**: Student and parent accounts with authentication
- **Problems**: Math competition problems with metadata
- **Progress**: Student learning analytics and mastery tracking
- **StudyGroups**: Collaborative learning groups
- **Achievements**: Gamification rewards and milestones

### Migrations

```bash
# Create new migration
npm run db:migration:create migration_name

# Run migrations
npm run db:migrate

# Rollback migration
npm run db:rollback
```

## 🎮 Gamification System

### Points & Rewards

- **Problem Solving**: Earn points for correct answers
- **Daily Streaks**: Bonus points for consistent practice
- **Achievements**: Unlock badges and virtual rewards
- **Level Progression**: Advance through skill levels
- **Virtual Items**: Collect avatars, themes, and customizations

### Achievement Categories

- **Streak Master**: Daily practice consistency
- **Topic Expert**: Mastery in specific math areas
- **Competition Ready**: Mock test performance
- **Collaborator**: Study group participation

## 🤝 Contributing

We welcome contributions! Please follow these guidelines:

### Development Workflow

1. **Fork the repository** and create a feature branch
2. **Make changes** following our coding standards
3. **Write tests** for new functionality
4. **Ensure all tests pass** and code is properly formatted
5. **Submit a pull request** with a clear description

### Coding Standards

- **TypeScript**: Strict mode enabled
- **Formatting**: Prettier with 2-space indentation
- **Linting**: ESLint with custom rules
- **Commits**: Conventional commit format
- **Documentation**: JSDoc for functions and components

### Pull Request Process

1. Update documentation for any new features
2. Add or update tests as needed
3. Ensure CI checks pass
4. Request review from maintainers
5. Address feedback and iterate

## 📚 API Documentation

### Authentication

All API endpoints require authentication via JWT tokens provided by Auth0.

### Key Endpoints

```
GET    /api/problems              # Get filtered problems
POST   /api/problems/:id/solve    # Submit problem solution
GET    /api/progress/:userId      # Get student progress
POST   /api/study-groups          # Create study group
GET    /api/competitions          # List available competitions
```

### Rate Limiting

- **Anonymous users**: 100 requests/hour
- **Authenticated users**: 1000 requests/hour
- **Premium users**: 5000 requests/hour

## 🔒 Security & Privacy

### Student Data Protection

- **COPPA Compliance**: Appropriate protections for users under 13
- **FERPA Compliance**: Educational record privacy safeguards
- **Data Encryption**: End-to-end encryption for sensitive information
- **Access Controls**: Role-based permissions and audit logging

### Security Measures

- **Authentication**: Secure JWT token management
- **Input Validation**: Comprehensive request sanitization
- **Rate Limiting**: Protection against abuse and attacks
- **Content Moderation**: Automated and manual review systems

## 📖 Educational Philosophy

### Learning Principles

- **Mastery-Based**: Focus on deep understanding over speed
- **Adaptive**: Personalized difficulty and pacing
- **Collaborative**: Peer learning and mathematical discourse
- **Growth Mindset**: Emphasis on effort and improvement
- **Authentic**: Real competition problems and scenarios

### Pedagogical Features

- **Scaffolded Hints**: Guided problem-solving support
- **Spaced Repetition**: Optimized review scheduling
- **Misconception Detection**: Targeted error remediation
- **Metacognitive Prompts**: Reflection on learning process

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🆘 Support

### Getting Help

- **Documentation**: Check the [docs](./docs) folder
- **Issues**: Report bugs on [GitHub Issues](https://github.com/your-username/mathchamp/issues)
- **Discussions**: Ask questions in [GitHub Discussions](https://github.com/your-username/mathchamp/discussions)
- **Email**: Contact us at support@mathchamp.app

### Community

- **Discord**: Join our [development community](https://discord.gg/mathchamp)
- **Twitter**: Follow [@MathChampApp](https://twitter.com/mathchampapp)
- **Newsletter**: Subscribe for updates at [mathchamp.app](https://mathchamp.app)

## 🙏 Acknowledgments

- **Competition Organizations**: AMC, MathCounts, USAMO for inspiring this platform
- **Open Source Libraries**: All the amazing tools that make this possible
- **Math Teachers**: Educators who provided pedagogical guidance
- **Beta Users**: Students and parents who helped test and improve the platform

---

**Built with ❤️ for the math competition community**

_Making competitive mathematics accessible, engaging, and effective for all students._
