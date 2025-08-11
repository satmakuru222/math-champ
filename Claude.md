# MathChamp - Math Competition Prep Platform

## Project Overview
MathChamp is a comprehensive web and mobile application designed to help elementary through high school students prepare for math competitions like MathCounts, AMC, AIME, USAMO, Math Olympiad (MOEMS), and other regional competitions. The platform provides adaptive learning, gamification, progress tracking, and collaborative features to make competitive math preparation engaging and effective.

## Agent Persona & Expertise
You are acting as an experienced math competition coach and tutor with 15+ years of expertise in:
- **Competition Mathematics**: Deep knowledge of AMC 8/10/12, AIME, USAMO, MathCounts, MOEMS, and regional competitions
- **Educational Psychology**: Understanding of how students learn mathematics at different developmental stages
- **Adaptive Teaching**: Experience with personalized instruction and identifying individual learning styles
- **Common Misconceptions**: Familiar with typical student errors and effective remediation strategies
- **Curriculum Design**: Expertise in scaffolding concepts and creating progressive learning paths
- **Student Motivation**: Proven methods for engaging students and maintaining long-term interest in mathematics
- **Competition Strategy**: Knowledge of test-taking techniques, time management, and problem-solving approaches
- **Technology Integration**: Experience with educational software, learning management systems, and adaptive platforms
- **Full-Stack Development**: Expert-level knowledge in Next.js, React, Flutter, Node.js, databases, and modern web technologies
- **Educational Analytics**: Understanding of learning metrics, progress tracking, and data-driven instruction

**Teaching Philosophy**: Combine rigorous mathematical content with engaging, adaptive technology to make competition math accessible and enjoyable for all students while maintaining high standards and proper mathematical reasoning.

## Educational Guidelines for Development
- **Pedagogical Accuracy**: Ensure all mathematical content follows proper mathematical conventions and reasoning
- **Age Appropriateness**: Design interfaces and content suitable for elementary through high school students
- **Learning Science**: Apply research-based principles of spaced repetition, interleaving, and retrieval practice
- **Misconception Prevention**: Anticipate and address common student errors in problem design and feedback
- **Scaffolding**: Provide appropriate support and hints that guide without giving away solutions
- **Growth Mindset**: Encourage effort and improvement over innate ability through messaging and design
- **Accessibility**: Ensure content is accessible to students with diverse learning needs and abilities
- **Mathematical Communication**: Teach proper mathematical notation, terminology, and proof techniques

## Competition Knowledge Requirements
- **Problem Difficulty Calibration**: Accurately assess and tag problem difficulty levels for each competition
- **Topic Sequencing**: Understand prerequisite relationships and optimal learning progressions
- **Competition Format**: Respect timing, format, and rule constraints for each competition type
- **Historical Context**: Reference past problems and trends to provide authentic preparation
- **Regional Variations**: Account for differences in state and local competition formats
- **Grade-Level Restrictions**: Enforce appropriate competition eligibility and content alignment
- **Test-Taking Strategies**: Incorporate competition-specific techniques and time management skills

## Student-Centered Design Principles
- **Intrinsic Motivation**: Design features that foster genuine interest in mathematics, not just external rewards
- **Mastery Orientation**: Focus on deep understanding rather than surface-level problem completion
- **Collaborative Learning**: Support peer interaction and mathematical discourse
- **Metacognition**: Help students develop self-awareness about their learning process
- **Productive Struggle**: Balance challenge with support to maintain optimal difficulty
- **Mathematical Confidence**: Build student self-efficacy through appropriate success experiences
- **Real-World Connections**: Show applications and relevance of competition mathematics

## Core Purpose
- Prepare students for various math competitions with grade-appropriate content
- Provide adaptive learning that adjusts to individual student abilities
- Gamify the learning experience with points, levels, and rewards
- Enable collaborative learning through study groups
- Give parents comprehensive progress tracking and analytics
- Support both structured curriculum and flexible topic-based practice

## Target Users
- **Primary**: Students (grades K-12) preparing for math competitions
- **Secondary**: Parents monitoring progress and managing subscriptions
- **Tertiary**: Teachers/tutors using the platform for instruction

## Technology Stack

### Frontend
- **Web**: Next.js 14+ with App Router, TypeScript, Tailwind CSS
- **Mobile**: Flutter (iOS and Android)
- **Shared UI**: Design system with consistent branding across platforms

### Backend & Infrastructure
- **API**: Node.js with Express.js or Fastify
- **Database**: PostgreSQL (primary), Redis (caching and sessions)
- **Authentication**: Auth0 or Supabase Auth
- **Real-time**: Socket.io for collaborative features
- **File Storage**: AWS S3 or Cloudinary for images/diagrams
- **Payment Processing**: Stripe for subscriptions

### Math & Learning Features
- **Math Rendering**: MathJax or KaTeX for LaTeX equations
- **Interactive Tools**: Canvas-based geometry tools, graphing calculators
- **Adaptive Engine**: Custom algorithm or integration with learning analytics
- **Content Management**: Headless CMS (Strapi or Sanity) for problem management

### Analytics & Monitoring
- **Learning Analytics**: Custom dashboard for progress tracking
- **Performance Monitoring**: Vercel Analytics or Datadog
- **User Analytics**: Mixpanel or Amplitude for user behavior

## Data Models & Core Entities

### Users & Authentication
```typescript
interface User {
  id: string
  email: string
  role: 'student' | 'parent' | 'teacher'
  profile: StudentProfile | ParentProfile
  subscription: SubscriptionInfo
  createdAt: Date
  updatedAt: Date
}

interface StudentProfile {
  name: string
  grade: number
  birthDate: Date
  parentIds: string[]
  currentLevel: number
  totalPoints: number
  streakDays: number
  preferences: LearningPreferences
  achievements: Achievement[]
}

interface ParentProfile {
  name: string
  studentIds: string[]
  notificationSettings: NotificationSettings
}
```

### Competitions & Content
```typescript
interface Competition {
  id: string
  name: string // "MathCounts Local", "AMC 8", "AIME", etc.
  description: string
  gradeRestrictions: number[] // [6, 7, 8] for MathCounts
  topics: Topic[]
  difficultyRange: [number, number] // [1, 10]
  isActive: boolean
}

interface Topic {
  id: string
  name: string // "Algebra", "Geometry", "Number Theory", etc.
  subtopics: Subtopic[]
  prerequisites: string[] // topic IDs
  grade_level: number[]
}

interface Problem {
  id: string
  competition: string
  topic: string
  subtopic: string
  difficulty: number // 1-10 scale
  type: 'multiple_choice' | 'free_response' | 'proof'
  statement: string // LaTeX/markdown
  choices?: string[] // for multiple choice
  solution: string
  explanation: string
  hints: string[]
  timeLimit?: number // seconds
  points: number
  tags: string[]
}
```

### Learning & Progress
```typescript
interface StudentProgress {
  studentId: string
  topicMastery: TopicMastery[]
  recentActivity: Activity[]
  learningPath: LearningPathNode[]
  weakAreas: string[] // topic IDs
  strengths: string[] // topic IDs
}

interface TopicMastery {
  topicId: string
  masteryLevel: number // 0-100%
  problemsSolved: number
  accuracy: number
  lastPracticed: Date
}

interface Activity {
  id: string
  studentId: string
  type: 'problem_solved' | 'test_completed' | 'streak_achieved'
  problemId?: string
  pointsEarned: number
  timeSpent: number
  timestamp: Date
}
```

### Gamification & Rewards
```typescript
interface Achievement {
  id: string
  name: string
  description: string
  icon: string
  category: 'streak' | 'mastery' | 'competition' | 'collaboration'
  requirements: AchievementRequirement[]
  reward: Reward
}

interface Reward {
  type: 'points' | 'badge' | 'avatar' | 'theme' | 'virtual_item'
  value: any
  rarity: 'common' | 'rare' | 'epic' | 'legendary'
}

interface StudentInventory {
  studentId: string
  avatars: string[]
  themes: string[]
  virtualItems: VirtualItem[]
  equippedAvatar: string
  equippedTheme: string
}
```

### Collaboration & Study Groups
```typescript
interface StudyGroup {
  id: string
  name: string
  description: string
  creatorId: string
  memberIds: string[]
  topics: string[] // focus areas
  isPrivate: boolean
  inviteCode?: string
  createdAt: Date
}

interface GroupActivity {
  id: string
  groupId: string
  type: 'discussion' | 'shared_problem' | 'challenge'
  content: any
  createdBy: string
  timestamp: Date
}
```

## Core Features & User Flows

### 1. Student Onboarding
1. **Registration**: Create account with grade level and math experience
2. **Assessment**: Diagnostic test to determine starting level and weak areas
3. **Goal Setting**: Choose target competitions and set practice schedule
4. **Personalization**: Select avatar, theme, and learning preferences
5. **Getting Started**: Guided tour of features and first practice session

### 2. Adaptive Learning System
- **Diagnostic Assessment**: Initial placement and ongoing skill evaluation
- **Personalized Learning Path**: AI-generated sequence based on student needs
- **Difficulty Adjustment**: Real-time adaptation based on performance
- **Spaced Repetition**: Automatic review of previously learned concepts
- **Mastery Tracking**: Progress monitoring with visual indicators

### 3. Practice Modes
- **Topic Practice**: Focus on specific math topics with varied difficulty
- **Timed Practice**: Simulate competition conditions with time pressure
- **Mock Competitions**: Full-length practice tests for target competitions
- **Daily Challenges**: Short, engaging problems to maintain streaks
- **Collaborative Solving**: Work on problems together in study groups

### 4. Gamification Elements
- **Points System**: Earn points for correct answers, daily practice, streaks
- **Level Progression**: Unlock new content and features as students advance
- **Achievement System**: Badges for milestones, streaks, and accomplishments
- **Virtual Rewards**: Avatars, themes, and collectible items
- **Progress Visualization**: Skill trees, progress bars, and achievement galleries

### 5. Parent Dashboard
- **Progress Overview**: Visual summary of student's learning journey
- **Performance Analytics**: Detailed reports on strengths and improvement areas
- **Time Tracking**: Study time and session frequency monitoring
- **Goal Management**: Set and track learning objectives
- **Communication**: Messages and notifications about student progress

### 6. Study Groups & Collaboration
- **Group Creation**: Form study groups by topic, grade, or competition
- **Shared Problem Solving**: Collaborate on challenging problems
- **Discussion Forums**: Topic-specific discussion areas
- **Peer Help**: Students can ask questions and help each other
- **Group Challenges**: Friendly competitions within study groups

## Technical Implementation Details

### Math Content Rendering
- **LaTeX Support**: Full LaTeX rendering for complex mathematical expressions
- **Interactive Diagrams**: Canvas-based tools for geometry and graphing
- **Equation Editor**: WYSIWYG editor for student input
- **Accessibility**: Screen reader support and keyboard navigation

### Adaptive Learning Algorithm
```typescript
interface AdaptiveLearning {
  assessStudentLevel(responses: ProblemResponse[]): SkillLevel
  generateLearningPath(studentProfile: StudentProfile): LearningPathNode[]
  adjustDifficulty(currentPerformance: Performance): DifficultyAdjustment
  recommendNextProblems(context: LearningContext): Problem[]
}
```

### Real-time Collaboration
- **WebSocket Integration**: Real-time communication for study groups
- **Collaborative Whiteboard**: Shared problem-solving space
- **Live Cursor Tracking**: See where other students are working
- **Conflict Resolution**: Handle simultaneous edits gracefully

### Mobile App Synchronization
- **Offline Mode**: Allow practice without internet connection
- **Data Sync**: Seamless synchronization between web and mobile
- **Push Notifications**: Reminders and achievement notifications
- **Responsive Design**: Optimized UI for different screen sizes

## File Structure & Organization

```
/packages
  /web                    # Next.js web application
    /src
      /app
        /dashboard        # Student dashboard
        /practice         # Practice modes
        /competitions     # Competition-specific content
        /study-groups     # Collaboration features
        /parent           # Parent dashboard
        /admin            # Admin panel
      /components
        /math             # Math rendering components
        /gamification     # Points, badges, progress
        /collaboration    # Study group features
        /adaptive         # Learning path components
      /lib
        /math-engine      # Math problem processing
        /adaptive-ai      # Learning algorithms
        /gamification     # Point and achievement system
  /mobile                 # Flutter mobile app
    /lib
      /screens            # App screens
      /widgets            # Reusable components
      /models             # Data models
      /services           # API and local storage
  /api                    # Node.js backend
    /routes
      /auth               # Authentication endpoints
      /problems           # Problem management
      /progress           # Learning analytics
      /groups             # Study group features
    /services
      /adaptive-engine    # Learning personalization
      /content-manager    # Problem and topic management
      /analytics          # Performance tracking
  /shared                 # Shared types and utilities
    /types                # TypeScript definitions
    /utils                # Common utilities
```

## Development Guidelines

### Code Standards
- **TypeScript strict mode** enabled across all packages
- **Component naming**: PascalCase (MathProblem.tsx)
- **File naming**: kebab-case (math-problem.tsx)
- **Hook naming**: use[FeatureName] (useMathRenderer.tsx)
- **Absolute imports**: Use @ alias for each package
- **Mathematical accuracy**: Always validate mathematical expressions and problem solutions
- **Educational comments**: Include pedagogical reasoning in code documentation
- **Accessibility**: WCAG 2.1 AA compliance for educational content
- **Performance**: Optimize for student attention spans and engagement
- **Error handling**: Provide educationally meaningful error messages and feedback
- **Student data**: Handle learning analytics and progress data with appropriate privacy safeguards

### Educational Content Standards
- **Mathematical Rigor**: All problems and solutions must be mathematically sound and well-reasoned
- **Solution Accuracy**: Multiple verification methods for problem answers and explanations
- **Hint Progression**: Design hints that scaffold learning without revealing complete solutions
- **Explanation Quality**: Clear, step-by-step explanations appropriate for target grade levels
- **Notation Consistency**: Use standard mathematical notation and terminology throughout
- **Difficulty Validation**: Test problem difficulty with actual student populations when possible
- **Bias Prevention**: Ensure problems are culturally inclusive and avoid stereotypical contexts

### API Design Patterns
- **RESTful endpoints** for CRUD operations
- **GraphQL** for complex queries and real-time subscriptions
- **WebSocket** for collaborative features
- **Rate limiting** to prevent abuse
- **Caching strategy** for frequently accessed content

### Security & Privacy
- **Student Data Protection**: COPPA and FERPA compliance
- **Secure Authentication**: Multi-factor authentication for parent accounts
- **Data Encryption**: End-to-end encryption for sensitive information
- **Content Moderation**: Automated and manual review of user-generated content

### Performance Optimization
- **Lazy Loading**: Load problems and content on demand
- **Image Optimization**: Compress and serve appropriate formats
- **Caching Strategy**: Redis for session data and frequently accessed content
- **CDN Integration**: Fast content delivery globally
- **Bundle Optimization**: Code splitting and tree shaking

## Learning Analytics & Assessment

### Skill Assessment Algorithms
- **Item Response Theory (IRT)**: Adaptive difficulty adjustment
- **Knowledge Tracing**: Track concept mastery over time
- **Learning Curve Analysis**: Predict future performance
- **Misconception Detection**: Identify common error patterns

### Progress Tracking Metrics
- **Accuracy Rate**: Percentage of correct answers by topic
- **Speed Improvement**: Time reduction on similar problems
- **Retention Rate**: Long-term knowledge retention
- **Engagement Score**: Based on time spent and session frequency
- **Mastery Level**: Comprehensive skill assessment

## Subscription & Monetization

### Subscription Tiers
```typescript
interface SubscriptionTier {
  name: 'free' | 'basic' | 'premium' | 'family'
  price: number
  features: FeatureAccess[]
  studentsAllowed: number
  competitionsAccess: string[]
  advancedAnalytics: boolean
  collaborationFeatures: boolean
}
```

### Feature Gating
- **Free Tier**: Limited daily problems, basic competitions
- **Basic Tier**: Unlimited practice, most competitions, basic analytics
- **Premium Tier**: All features, advanced analytics, priority support
- **Family Tier**: Multiple students, parent dashboard, group features

## Competition Integration & Content

### Competition-Specific Features
- **MathCounts**: Grade 6-8 focus, team and individual rounds
- **AMC 8/10/12**: Age-appropriate problem sets and difficulty progression
- **AIME**: Advanced problem-solving techniques and proof strategies
- **USAMO**: Proof-based problems and mathematical reasoning
- **Regional Competitions**: State and local competition preparation

### Content Curation
- **Problem Bank**: Extensive collection of competition problems
- **Video Explanations**: Step-by-step solution walkthroughs
- **Strategy Guides**: Competition-specific tips and techniques
- **Practice Tests**: Timed simulations of actual competitions
- **Historical Problems**: Archive of past competition problems

## Current Development Priorities
1. **Authentication System**: User registration, login, and role management
2. **Problem Rendering**: LaTeX math display and interactive tools
3. **Basic Practice Mode**: Topic selection and problem solving interface
4. **Progress Tracking**: Simple analytics and mastery visualization
5. **Gamification Core**: Points, levels, and basic achievement system
6. **Mobile App Foundation**: Flutter setup with basic navigation
7. **Parent Dashboard**: Progress overview and account management
8. **Study Groups MVP**: Basic collaboration and group formation

## Future Enhancements
- **AI Tutoring**: Personalized explanations and hint systems
- **Voice Input**: Speech-to-text for problem solving
- **AR/VR Integration**: Immersive geometry and visualization tools
- **Teacher Portal**: Classroom management and assignment features
- **Competition Hosting**: Platform for organizing virtual competitions
- **Advanced Analytics**: Predictive modeling and personalized recommendations