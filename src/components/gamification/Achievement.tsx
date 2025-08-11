import { HTMLAttributes, ReactNode } from 'react'
import { Badge } from '@/components/ui'

/**
 * Educational Design: Achievement components leverage gamification psychology
 * to celebrate learning milestones and encourage continued mathematical exploration.
 */

/**
 * Props interface for the Achievement component
 *
 * @interface AchievementProps
 * @extends {HTMLAttributes<HTMLDivElement>}
 */
interface AchievementProps extends HTMLAttributes<HTMLDivElement> {
  /** Achievement title/name */
  title: string
  /** Detailed description of what was accomplished */
  description: string
  /** Icon or visual element representing the achievement */
  icon?: ReactNode
  /** Whether the achievement has been unlocked */
  unlocked?: boolean
  /** Progress towards unlocking (0-100) if not yet unlocked */
  progress?: number
  /** When the achievement was earned (for unlocked achievements) */
  earnedDate?: Date
  /** Achievement rarity level affecting visual presentation */
  rarity?: 'common' | 'rare' | 'epic' | 'legendary'
  /** Size variant for different display contexts */
  size?: 'sm' | 'md' | 'lg'
  /** Points or reward value associated with this achievement */
  points?: number
}

/**
 * Achievement component for displaying learning milestones and gamification rewards
 *
 * Features:
 * - Visual design based on achievement psychology and motivation theory
 * - Rarity system to create aspirational goals and celebrate major milestones
 * - Progress tracking for partially completed achievements
 * - Accessible design with proper semantic structure
 * - Celebratory animations for newly unlocked achievements
 *
 * Educational Applications:
 * - Topic mastery badges (e.g., "Algebra Expert", "Geometry Master")
 * - Learning streak achievements (e.g., "7-Day Streak", "Month of Math")
 * - Competition participation rewards (e.g., "First AMC Attempt", "AIME Qualifier")
 * - Collaboration achievements (e.g., "Study Group Leader", "Peer Helper")
 * - Problem-solving milestones (e.g., "100 Problems Solved", "Proof Pioneer")
 *
 * @component
 * @example
 * ```tsx
 * // Unlocked achievement
 * <Achievement
 *   title="Algebra Master"
 *   description="Completed all algebra topics with 90%+ accuracy"
 *   unlocked={true}
 *   rarity="epic"
 *   points={500}
 *   earnedDate={new Date()}
 *   icon={<TrophyIcon />}
 * />
 *
 * // In-progress achievement
 * <Achievement
 *   title="Problem Solver"
 *   description="Solve 100 practice problems"
 *   unlocked={false}
 *   progress={65}
 *   icon={<PuzzleIcon />}
 * />
 * ```
 */
const Achievement = ({
  title,
  description,
  icon,
  unlocked = false,
  progress = 0,
  earnedDate,
  rarity = 'common',
  size = 'md',
  points,
  className = '',
  ...props
}: AchievementProps) => {
  // Educational Design: Base styles create consistent achievement presentation
  const baseStyles = 'relative rounded-lg border transition-all duration-200 hover:shadow-md'

  // Educational Design: Rarity affects visual prominence to create achievement hierarchy
  // Common: Simple styling, Rare: Enhanced colors, Epic: Gradients, Legendary: Special effects
  const rarityStyles = {
    common: unlocked ? 'bg-white border-gray-200' : 'bg-gray-50 border-gray-200',
    rare: unlocked ? 'bg-blue-50 border-blue-200' : 'bg-gray-50 border-gray-200',
    epic: unlocked
      ? 'bg-gradient-to-br from-purple-50 to-pink-50 border-purple-200'
      : 'bg-gray-50 border-gray-200',
    legendary: unlocked
      ? 'bg-gradient-to-br from-yellow-50 via-orange-50 to-red-50 border-yellow-300 shadow-lg'
      : 'bg-gray-50 border-gray-200',
  }

  // Educational Design: Size variants for different display contexts
  const sizeStyles = {
    sm: 'p-3',
    md: 'p-4',
    lg: 'p-6',
  }

  const iconSizes = {
    sm: 'w-8 h-8',
    md: 'w-12 h-12',
    lg: 'w-16 h-16',
  }

  const containerClasses = `${baseStyles} ${rarityStyles[rarity]} ${sizeStyles[size]} ${className}`

  // Educational Design: Format earned date for celebratory display
  const formatDate = (date: Date) => {
    return date.toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'short',
      day: 'numeric',
    })
  }

  return (
    <div className={containerClasses} {...props}>
      {/* Educational Design: Points badge for motivational value display */}
      {points && unlocked && (
        <div className="absolute -top-2 -right-2">
          <Badge variant="success" size="sm">
            +{points}
          </Badge>
        </div>
      )}

      <div className="flex items-start space-x-3">
        {/* Educational Design: Achievement icon with state-based styling */}
        <div className={`flex-shrink-0 ${unlocked ? 'opacity-100' : 'opacity-40'}`}>
          {icon ? (
            <div className={`${iconSizes[size]} flex items-center justify-center`}>{icon}</div>
          ) : (
            <div
              className={`${iconSizes[size]} bg-gray-200 rounded-full flex items-center justify-center`}
            >
              <span className="text-gray-500 text-xl">🏆</span>
            </div>
          )}
        </div>

        <div className="flex-1 min-w-0">
          {/* Educational Design: Achievement title with visual hierarchy */}
          <h3
            className={`font-semibold ${unlocked ? 'text-gray-900' : 'text-gray-500'} ${
              size === 'sm' ? 'text-sm' : size === 'lg' ? 'text-lg' : 'text-base'
            }`}
          >
            {title}
            {/* Educational Design: Rarity indicator for special achievements */}
            {rarity !== 'common' && unlocked && (
              <Badge
                variant={rarity === 'legendary' ? 'warning' : 'info'}
                size="sm"
                className="ml-2"
              >
                {rarity.charAt(0).toUpperCase() + rarity.slice(1)}
              </Badge>
            )}
          </h3>

          {/* Educational Design: Clear achievement description */}
          <p
            className={`${unlocked ? 'text-gray-600' : 'text-gray-400'} ${
              size === 'sm' ? 'text-xs' : 'text-sm'
            } mt-1`}
          >
            {description}
          </p>

          {/* Educational Design: Progress indicator for locked achievements */}
          {!unlocked && progress > 0 && (
            <div className="mt-2">
              <div className="flex justify-between items-center text-xs text-gray-500 mb-1">
                <span>Progress</span>
                <span>{progress}%</span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-1.5">
                <div
                  className="bg-blue-500 h-1.5 rounded-full transition-all duration-300"
                  style={{ width: `${progress}%` }}
                />
              </div>
            </div>
          )}

          {/* Educational Design: Celebration date for unlocked achievements */}
          {unlocked && earnedDate && (
            <p className="text-xs text-gray-500 mt-2">Earned on {formatDate(earnedDate)}</p>
          )}
        </div>
      </div>
    </div>
  )
}

Achievement.displayName = 'Achievement'

export { Achievement }
export type { AchievementProps }
