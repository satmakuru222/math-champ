/**
 * Core TypeScript interfaces for the MathChamp educational platform
 *
 * Educational Design: These interfaces are structured around educational psychology principles
 * and support adaptive learning, progress tracking, and student-centered design.
 */

/**
 * Base interface for entities with timestamps
 */
interface BaseEntity {
  /** Unique identifier */
  id: string
  /** Creation timestamp */
  createdAt: Date
  /** Last update timestamp */
  updatedAt: Date
}

/**
 * User roles in the educational system
 */
type UserRole = 'student' | 'parent' | 'teacher' | 'admin'

/**
 * Mathematical competition types supported by the platform
 */
type CompetitionType =
  | 'mathcounts'
  | 'amc8'
  | 'amc10'
  | 'amc12'
  | 'aime'
  | 'usamo'
  | 'usajmo'
  | 'moems'
  | 'regional'

/**
 * Mathematical topic categories
 *
 * Educational Design: Topics are organized by mathematical domains
 * to support structured learning progressions and skill building
 */
type MathTopic =
  | 'algebra'
  | 'geometry'
  | 'number_theory'
  | 'combinatorics'
  | 'probability'
  | 'trigonometry'
  | 'calculus'
  | 'logic'
  | 'discrete_math'

/**
 * Problem difficulty levels (1-10 scale)
 *
 * Educational Design: Difficulty calibrated to student grade levels
 * and competition standards for appropriate challenge progression
 */
type DifficultyLevel = 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10

/**
 * Problem types supported by the platform
 */
type ProblemType = 'multiple_choice' | 'free_response' | 'proof' | 'fill_in_blank'

/**
 * Achievement rarity levels for gamification
 */
type AchievementRarity = 'common' | 'rare' | 'epic' | 'legendary'

/**
 * Student profile and learning data
 *
 * Educational Design: Focuses on growth mindset, progress tracking,
 * and personalized learning experiences
 */
interface Student extends BaseEntity {
  /** Student's display name */
  name: string
  /** Email address for account access */
  email: string
  /** Current grade level (K-12) */
  grade: number
  /** Birth date for age-appropriate content */
  birthDate: Date
  /** Parent/guardian account IDs */
  parentIds: string[]
  /** Current gamification level */
  currentLevel: number
  /** Total points earned across all activities */
  totalPoints: number
  /** Current learning streak in days */
  streakDays: number
  /** Last activity timestamp for streak tracking */
  lastActiveDate: Date
  /** Personalized learning preferences */
  preferences: LearningPreferences
  /** Unlocked achievements */
  achievements: Achievement[]
  /** Current subscription tier */
  subscriptionTier: 'free' | 'basic' | 'premium' | 'family'
}

/**
 * Learning preferences for personalized education
 *
 * Educational Design: Supports different learning styles and preferences
 * to optimize individual student success
 */
interface LearningPreferences {
  /** Preferred difficulty progression speed */
  pacePreference: 'slow' | 'normal' | 'fast'
  /** Visual theme preference */
  themePreference: 'light' | 'dark' | 'auto'
  /** Preferred time for study reminders */
  reminderTime?: string
  /** Topics the student wants to focus on */
  focusTopics: MathTopic[]
  /** Target competitions for preparation */
  targetCompetitions: CompetitionType[]
  /** Whether to show hints by default */
  showHintsDefault: boolean
  /** Preferred explanation detail level */
  explanationDetail: 'brief' | 'detailed' | 'step_by_step'
}

/**
 * Parent profile for monitoring student progress
 *
 * Educational Design: Enables parent engagement and support
 * while maintaining student autonomy in learning
 */
interface Parent extends BaseEntity {
  /** Parent's name */
  name: string
  /** Email address */
  email: string
  /** Associated student account IDs */
  studentIds: string[]
  /** Notification preferences */
  notificationSettings: NotificationSettings
}

/**
 * Notification settings for parents
 */
interface NotificationSettings {
  /** Weekly progress reports */
  weeklyReports: boolean
  /** Achievement notifications */
  achievements: boolean
  /** Study reminder notifications */
  studyReminders: boolean
  /** Competition deadlines */
  competitionDeadlines: boolean
  /** Email notifications enabled */
  emailEnabled: boolean
  /** Push notifications enabled */
  pushEnabled: boolean
}

/**
 * Mathematical problem structure
 *
 * Educational Design: Supports various problem types and includes
 * pedagogical elements like hints, explanations, and learning objectives
 */
interface Problem extends BaseEntity {
  /** Problem title */
  title: string
  /** Problem statement (supports LaTeX) */
  statement: string
  /** Competition source */
  competition: CompetitionType
  /** Mathematical topic */
  topic: MathTopic
  /** Specific subtopic */
  subtopic: string
  /** Difficulty level (1-10) */
  difficulty: DifficultyLevel
  /** Problem type */
  type: ProblemType
  /** Multiple choice options (if applicable) */
  choices?: string[]
  /** Correct answer */
  correctAnswer: string
  /** Alternative acceptable answers */
  alternativeAnswers?: string[]
  /** Detailed solution explanation */
  solution: string
  /** Step-by-step solution breakdown */
  solutionSteps?: string[]
  /** Pedagogical hints for guidance */
  hints: string[]
  /** Estimated time to solve (minutes) */
  estimatedTime: number
  /** Points awarded for correct solution */
  points: number
  /** Associated images or diagrams */
  images?: string[]
  /** Tags for categorization and search */
  tags: string[]
  /** Prerequisites (other problem IDs) */
  prerequisites?: string[]
  /** Learning objectives addressed */
  learningObjectives: string[]
}

/**
 * Competition information and structure
 *
 * Educational Design: Maintains authentic competition formats
 * while supporting practice and preparation features
 */
interface Competition extends BaseEntity {
  /** Competition name */
  name: string
  /** Detailed description */
  description: string
  /** Competition type */
  type: CompetitionType
  /** Eligible grade levels */
  eligibleGrades: number[]
  /** Topics covered */
  topics: MathTopic[]
  /** Difficulty range */
  difficultyRange: [DifficultyLevel, DifficultyLevel]
  /** Time limit (minutes) */
  timeLimit: number
  /** Number of problems */
  problemCount: number
  /** Maximum possible score */
  maxScore: number
  /** Registration deadline */
  registrationDeadline?: Date
  /** Competition date */
  competitionDate?: Date
  /** Whether currently active for practice */
  isActive: boolean
  /** Official website URL */
  officialWebsite?: string
}

/**
 * Student's progress tracking for topics
 *
 * Educational Design: Focuses on mastery-based learning progression
 * rather than simple completion tracking
 */
interface TopicProgress extends BaseEntity {
  /** Student ID */
  studentId: string
  /** Mathematical topic */
  topic: MathTopic
  /** Mastery level percentage (0-100) */
  masteryLevel: number
  /** Total problems attempted in this topic */
  problemsAttempted: number
  /** Total problems solved correctly */
  problemsSolved: number
  /** Overall accuracy percentage */
  accuracy: number
  /** Average time per problem (seconds) */
  averageTime: number
  /** Last practice session date */
  lastPracticed: Date
  /** Current difficulty level being practiced */
  currentDifficulty: DifficultyLevel
  /** Strengths within this topic */
  strengths: string[]
  /** Areas needing improvement */
  weaknesses: string[]
  /** Next recommended problems */
  nextProblems: string[]
}

/**
 * Problem attempt by student
 *
 * Educational Design: Captures learning analytics data
 * to support adaptive learning and progress tracking
 */
interface ProblemAttempt extends BaseEntity {
  /** Student ID */
  studentId: string
  /** Problem ID */
  problemId: string
  /** Student's submitted answer */
  submittedAnswer: string
  /** Whether the answer was correct */
  isCorrect: boolean
  /** Points earned (may be partial) */
  pointsEarned: number
  /** Time spent solving (seconds) */
  timeSpent: number
  /** Hints used during solving */
  hintsUsed: number
  /** Attempt number for this problem */
  attemptNumber: number
  /** Whether the student gave up */
  gaveUp: boolean
  /** Student's confidence level (1-5) */
  confidenceLevel?: number
  /** Learning session ID */
  sessionId?: string
}

/**
 * Achievement earned by student
 *
 * Educational Design: Supports motivation through recognition
 * of learning milestones and mathematical accomplishments
 */
interface Achievement extends BaseEntity {
  /** Achievement name */
  name: string
  /** Detailed description */
  description: string
  /** Category of achievement */
  category: 'mastery' | 'streak' | 'participation' | 'collaboration' | 'milestone'
  /** Rarity level */
  rarity: AchievementRarity
  /** Points awarded */
  points: number
  /** Icon or badge image */
  iconUrl?: string
  /** Requirements to unlock */
  requirements: AchievementRequirement[]
  /** Whether currently available to earn */
  isActive: boolean
}

/**
 * Requirements to unlock an achievement
 */
interface AchievementRequirement {
  /** Type of requirement */
  type:
    | 'problems_solved'
    | 'topic_mastery'
    | 'streak_days'
    | 'competition_participation'
    | 'accuracy_rate'
  /** Target value to reach */
  targetValue: number
  /** Specific topic (if applicable) */
  topic?: MathTopic
  /** Specific competition (if applicable) */
  competition?: CompetitionType
}

/**
 * Study group for collaborative learning
 *
 * Educational Design: Supports peer learning and mathematical discourse
 * which are crucial for deep mathematical understanding
 */
interface StudyGroup extends BaseEntity {
  /** Group name */
  name: string
  /** Group description */
  description: string
  /** Group creator ID */
  creatorId: string
  /** Member student IDs */
  memberIds: string[]
  /** Focus topics */
  topics: MathTopic[]
  /** Target competitions */
  competitions: CompetitionType[]
  /** Maximum number of members */
  maxMembers: number
  /** Whether the group is private */
  isPrivate: boolean
  /** Invite code for joining */
  inviteCode?: string
  /** Group activity level */
  activityLevel: 'low' | 'medium' | 'high'
  /** Last activity timestamp */
  lastActivity: Date
}

/**
 * Learning session tracking
 *
 * Educational Design: Captures learning analytics for
 * session-based progress tracking and motivation
 */
interface LearningSession extends BaseEntity {
  /** Student ID */
  studentId: string
  /** Session start time */
  startTime: Date
  /** Session end time */
  endTime?: Date
  /** Total problems attempted */
  problemsAttempted: number
  /** Problems solved correctly */
  problemsSolved: number
  /** Points earned in session */
  pointsEarned: number
  /** Topics practiced */
  topicsPracticed: MathTopic[]
  /** Session goals */
  goals: string[]
  /** Whether goals were achieved */
  goalsAchieved: boolean[]
  /** Student reflection notes */
  reflectionNotes?: string
}

export type {
  // Base types
  BaseEntity,
  UserRole,
  CompetitionType,
  MathTopic,
  DifficultyLevel,
  ProblemType,
  AchievementRarity,

  // User interfaces
  Student,
  Parent,
  LearningPreferences,
  NotificationSettings,

  // Content interfaces
  Problem,
  Competition,
  Achievement,
  AchievementRequirement,

  // Progress and activity
  TopicProgress,
  ProblemAttempt,
  LearningSession,

  // Social features
  StudyGroup,
}
