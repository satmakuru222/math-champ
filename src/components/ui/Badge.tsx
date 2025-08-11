import { HTMLAttributes } from 'react'

/**
 * Educational Design: Badges use color psychology to reinforce positive learning behaviors
 * and provide immediate visual feedback on student progress and achievements.
 */

/**
 * Props interface for the Badge component
 *
 * @interface BadgeProps
 * @extends {HTMLAttributes<HTMLSpanElement>}
 */
interface BadgeProps extends HTMLAttributes<HTMLSpanElement> {
  /** Visual variant indicating different types of information or achievement levels */
  variant?: 'success' | 'warning' | 'error' | 'info' | 'neutral'
  /** Size variant for different contexts and visual hierarchy */
  size?: 'sm' | 'md' | 'lg'
  /** Badge content - typically short text or numbers */
  children: React.ReactNode
}

/**
 * Badge component for displaying status, achievements, and quick information
 *
 * Features:
 * - Color-coded variants align with educational feedback principles
 * - High contrast for accessibility and clear communication
 * - Compact design to minimize distraction during learning
 * - Consistent with gamification psychology for motivation
 *
 * Educational Applications:
 * - Achievement badges for completed topics or milestones
 * - Status indicators for problem difficulty levels
 * - Progress markers for learning streaks or scores
 * - Category labels for math competition types
 *
 * @component
 * @example
 * ```tsx
 * // Achievement badge
 * <Badge variant="success">Completed</Badge>
 *
 * // Difficulty indicator
 * <Badge variant="warning" size="sm">Hard</Badge>
 *
 * // Progress indicator
 * <Badge variant="info">5 Day Streak</Badge>
 * ```
 */
const Badge = ({
  variant = 'neutral',
  size = 'md',
  className = '',
  children,
  ...props
}: BadgeProps) => {
  // Educational Design: Base styles ensure readability and consistent spacing
  // Rounded corners create friendly, approachable visual elements
  const baseStyles = 'inline-flex items-center font-medium rounded-full'

  // Educational Design: Color variants follow educational feedback principles
  // Success: Green for achievements, Info: Blue for neutral information
  // Warning: Orange for caution, Error: Red for mistakes, Neutral: Gray for general use
  const variants = {
    success: 'bg-green-100 text-green-800 border border-green-200',
    warning: 'bg-yellow-100 text-yellow-800 border border-yellow-200',
    error: 'bg-red-100 text-red-800 border border-red-200',
    info: 'bg-blue-100 text-blue-800 border border-blue-200',
    neutral: 'bg-gray-100 text-gray-800 border border-gray-200',
  }

  // Educational Design: Size options support different information hierarchy levels
  // Small: subtle indicators, Medium: standard badges, Large: prominent achievements
  const sizes = {
    sm: 'px-2 py-0.5 text-xs',
    md: 'px-2.5 py-1 text-sm',
    lg: 'px-3 py-1.5 text-base',
  }

  const badgeClasses = `${baseStyles} ${variants[variant]} ${sizes[size]} ${className}`

  return (
    <span className={badgeClasses} {...props}>
      {children}
    </span>
  )
}

Badge.displayName = 'Badge'

export { Badge }
export type { BadgeProps }
