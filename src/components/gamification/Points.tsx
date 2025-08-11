import { HTMLAttributes, ReactNode } from 'react'

/**
 * Educational Design: Points components use positive reinforcement principles
 * to motivate learning behaviors and celebrate mathematical achievements.
 */

/**
 * Props interface for the Points component
 *
 * @interface PointsProps
 * @extends {HTMLAttributes<HTMLDivElement>}
 */
interface PointsProps extends HTMLAttributes<HTMLDivElement> {
  /** Current points value to display */
  value: number
  /** Previous points value for change calculation */
  previousValue?: number
  /** Whether to show the change indicator */
  showChange?: boolean
  /** Custom label text (defaults to "Points") */
  label?: string
  /** Icon element to display alongside points */
  icon?: ReactNode
  /** Visual variant for different contexts */
  variant?: 'default' | 'success' | 'warning' | 'large'
  /** Whether to animate point changes */
  animated?: boolean
  /** Custom formatting function for point values */
  formatValue?: (value: number) => string
}

/**
 * Points component for displaying and celebrating student achievements
 *
 * Features:
 * - Visual design based on positive reinforcement psychology
 * - Animated counters for satisfying feedback loops
 * - Change indicators to highlight progress and rewards
 * - Flexible formatting for different point scales
 * - Accessible design with proper semantic structure
 *
 * Educational Applications:
 * - Total points earned across all activities
 * - Points gained from completing problems or topics
 * - Daily/weekly point summaries and goals
 * - Competition and leaderboard displays
 * - Reward redemption and spending interfaces
 *
 * @component
 * @example
 * ```tsx
 * // Basic points display
 * <Points value={1250} label="Total Points" />
 *
 * // Points with change indicator
 * <Points
 *   value={1350}
 *   previousValue={1250}
 *   showChange
 *   animated
 *   variant="success"
 * />
 *
 * // Large display for achievements
 * <Points
 *   value={500}
 *   variant="large"
 *   label="Bonus Points!"
 *   icon={<StarIcon />}
 * />
 *
 * // Custom formatting
 * <Points
 *   value={1234567}
 *   formatValue={(val) => val.toLocaleString()}
 * />
 * ```
 */
const Points = ({
  value,
  previousValue,
  showChange = false,
  label = 'Points',
  icon,
  variant = 'default',
  animated = true,
  formatValue,
  className = '',
  ...props
}: PointsProps) => {
  // Educational Design: Calculate point change for motivational feedback
  const changeValue = previousValue !== undefined ? value - previousValue : 0
  const hasChange = showChange && changeValue !== 0
  const isIncrease = changeValue > 0

  // Educational Design: Format points value with custom formatter or default
  const formatPoints = (points: number) => {
    if (formatValue) return formatValue(points)
    // Educational Design: Use locale-appropriate number formatting
    return points.toLocaleString()
  }

  // Educational Design: Base styles for consistent visual presentation
  const baseStyles = 'inline-flex items-center space-x-2'

  // Educational Design: Variant styles for different contexts and emphasis levels
  const variants = {
    default: 'text-gray-700',
    success: 'text-green-600',
    warning: 'text-yellow-600',
    large: 'text-2xl font-bold text-blue-600',
  }

  const containerClasses = `${baseStyles} ${variants[variant]} ${className}`

  return (
    <div className={containerClasses} {...props}>
      {/* Educational Design: Optional icon for visual enhancement */}
      {icon && <div className="flex-shrink-0">{icon}</div>}

      <div className="flex flex-col items-start">
        {/* Educational Design: Clear labeling for context */}
        {label && variant !== 'large' && (
          <span className="text-xs font-medium text-gray-500 uppercase tracking-wide">{label}</span>
        )}

        <div className="flex items-center space-x-2">
          {/* Educational Design: Main points value with animation support */}
          <span
            className={`font-semibold ${variant === 'large' ? 'text-3xl' : 'text-lg'} ${
              animated ? 'transition-all duration-300' : ''
            }`}
          >
            {formatPoints(value)}
          </span>

          {/* Educational Design: Change indicator for immediate feedback */}
          {hasChange && (
            <span
              className={`text-sm font-medium inline-flex items-center px-2 py-0.5 rounded-full ${
                isIncrease ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'
              } ${animated ? 'animate-pulse' : ''}`}
            >
              <span className="mr-1" aria-hidden="true">
                {isIncrease ? '↗' : '↘'}
              </span>
              {isIncrease ? '+' : ''}
              {formatPoints(Math.abs(changeValue))}
            </span>
          )}
        </div>

        {/* Educational Design: Large variant label positioning */}
        {label && variant === 'large' && (
          <span className="text-sm font-medium text-gray-600 mt-1">{label}</span>
        )}
      </div>
    </div>
  )
}

/**
 * Animated counter hook for smooth point transitions
 *
 * Educational Design: Smooth animations reinforce positive feedback
 * and make point earning feel more rewarding and engaging.
 */
Points.displayName = 'Points'

export { Points }
export type { PointsProps }
