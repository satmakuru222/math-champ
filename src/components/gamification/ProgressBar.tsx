import { HTMLAttributes } from 'react'

/**
 * Educational Design: Progress bars use visual psychology to motivate continued learning
 * and provide clear feedback on achievement towards educational goals.
 */

/**
 * Props interface for the ProgressBar component
 *
 * @interface ProgressBarProps
 * @extends {HTMLAttributes<HTMLDivElement>}
 */
interface ProgressBarProps extends HTMLAttributes<HTMLDivElement> {
  /** Current progress value (0-100) */
  value: number
  /** Maximum possible value (defaults to 100) */
  max?: number
  /** Visual style variant for different contexts */
  variant?: 'primary' | 'success' | 'warning' | 'error'
  /** Size variant affecting height and visual prominence */
  size?: 'sm' | 'md' | 'lg'
  /** Whether to show percentage text inside the bar */
  showLabel?: boolean
  /** Custom label text to override percentage display */
  label?: string
  /** Whether to animate progress changes */
  animated?: boolean
}

/**
 * ProgressBar component for visualizing learning progress and achievements
 *
 * Features:
 * - Visual progress representation following educational psychology principles
 * - Smooth animations to reinforce positive feedback loops
 * - Accessible with proper ARIA attributes for screen readers
 * - Color-coded variants for different types of progress
 * - Motivational design encouraging continued engagement
 *
 * Educational Applications:
 * - Topic mastery progress (e.g., "Algebra: 75% complete")
 * - Daily/weekly learning streaks visualization
 * - Competition preparation progress tracking
 * - Study session completion indicators
 * - Skill level progression within math topics
 *
 * @component
 * @example
 * ```tsx
 * // Topic mastery progress
 * <ProgressBar
 *   value={75}
 *   variant="primary"
 *   showLabel
 *   label="Algebra Progress"
 * />
 *
 * // Achievement progress with animation
 * <ProgressBar
 *   value={90}
 *   variant="success"
 *   size="lg"
 *   animated
 *   showLabel
 * />
 *
 * // Warning state for approaching deadlines
 * <ProgressBar
 *   value={30}
 *   variant="warning"
 *   label="Time Remaining"
 * />
 * ```
 */
const ProgressBar = ({
  value,
  max = 100,
  variant = 'primary',
  size = 'md',
  showLabel = false,
  label,
  animated = true,
  className = '',
  ...props
}: ProgressBarProps) => {
  // Educational Design: Ensure progress value is within valid bounds
  const clampedValue = Math.max(0, Math.min(value, max))
  const percentage = Math.round((clampedValue / max) * 100)

  // Educational Design: Base styles create consistent, accessible progress visualization
  const baseStyles = 'relative overflow-hidden rounded-full bg-gray-200'

  // Educational Design: Color variants align with educational feedback principles
  // Primary: Blue for general progress, Success: Green for achievements
  // Warning: Yellow for attention needed, Error: Red for issues requiring action
  const variants = {
    primary: 'bg-blue-500',
    success: 'bg-green-500',
    warning: 'bg-yellow-500',
    error: 'bg-red-500',
  }

  // Educational Design: Size options support different visual contexts
  // Small: compact displays, Medium: standard progress, Large: prominent achievements
  const sizes = {
    sm: 'h-1.5',
    md: 'h-2.5',
    lg: 'h-4',
  }

  const containerClasses = `${baseStyles} ${sizes[size]} ${className}`
  const fillClasses = `h-full transition-all duration-500 ease-out ${variants[variant]} ${animated ? 'transform-gpu' : ''}`

  // Educational Design: Label text supports motivation and clear communication
  const displayLabel = label || `${percentage}%`

  return (
    <div className="w-full">
      {/* Educational Design: Accessible progress bar with proper ARIA attributes */}
      <div
        role="progressbar"
        aria-valuenow={clampedValue}
        aria-valuemin={0}
        aria-valuemax={max}
        aria-label={label || `Progress: ${percentage}%`}
        className={containerClasses}
        {...props}
      >
        {/* Educational Design: Visual progress fill with smooth animations */}
        <div
          className={fillClasses}
          style={{
            width: `${percentage}%`,
            // Educational Design: Subtle animation enhances motivation without distraction
            transition: animated ? 'width 0.5s ease-out' : 'none',
          }}
        />

        {/* Educational Design: Optional label overlay for clear progress communication */}
        {showLabel && size !== 'sm' && (
          <div className="absolute inset-0 flex items-center justify-center">
            <span className="text-xs font-medium text-white drop-shadow-sm">{displayLabel}</span>
          </div>
        )}
      </div>

      {/* Educational Design: External label for small progress bars */}
      {showLabel && size === 'sm' && (
        <div className="mt-1 text-xs text-gray-600 text-center">{displayLabel}</div>
      )}
    </div>
  )
}

ProgressBar.displayName = 'ProgressBar'

export { ProgressBar }
export type { ProgressBarProps }
