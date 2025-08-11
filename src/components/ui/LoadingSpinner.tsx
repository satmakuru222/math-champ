import { HTMLAttributes } from 'react'

/**
 * Educational Design: Loading states provide clear feedback during content loading
 * and maintain student engagement while preserving learning context.
 */

/**
 * Props interface for the LoadingSpinner component
 *
 * @interface LoadingSpinnerProps
 * @extends {HTMLAttributes<HTMLDivElement>}
 */
interface LoadingSpinnerProps extends HTMLAttributes<HTMLDivElement> {
  /** Size variant for different contexts */
  size?: 'sm' | 'md' | 'lg' | 'xl'
  /** Loading text to display */
  text?: string
  /** Whether to center the spinner */
  centered?: boolean
  /** Color variant */
  variant?: 'primary' | 'secondary' | 'white'
}

/**
 * LoadingSpinner component for indicating loading states
 *
 * Features:
 * - Accessible with proper ARIA attributes for screen readers
 * - Multiple size variants for different UI contexts
 * - Optional loading text with educational messaging
 * - Smooth animations that don't cause distraction
 * - Color variants for different backgrounds and themes
 *
 * Educational Applications:
 * - Loading math problems and interactive content
 * - Processing student responses and calculations
 * - Generating personalized learning recommendations
 * - Loading progress reports and analytics
 * - Preparing adaptive difficulty adjustments
 *
 * @component
 * @example
 * ```tsx
 * // Basic loading spinner
 * <LoadingSpinner />
 *
 * // Large spinner with educational text
 * <LoadingSpinner
 *   size="lg"
 *   text="Preparing your personalized math problems..."
 *   centered
 * />
 *
 * // Small spinner for inline loading
 * <LoadingSpinner size="sm" variant="secondary" />
 * ```
 */
const LoadingSpinner = ({
  size = 'md',
  text,
  centered = false,
  variant = 'primary',
  className = '',
  ...props
}: LoadingSpinnerProps) => {
  // Educational Design: Size variants for different UI contexts
  const sizeClasses = {
    sm: 'w-4 h-4',
    md: 'w-6 h-6',
    lg: 'w-8 h-8',
    xl: 'w-12 h-12',
  }

  // Educational Design: Color variants for different backgrounds
  const variantClasses = {
    primary: 'text-blue-600',
    secondary: 'text-gray-600',
    white: 'text-white',
  }

  // Educational Design: Text size should match spinner size
  const textSizeClasses = {
    sm: 'text-xs',
    md: 'text-sm',
    lg: 'text-base',
    xl: 'text-lg',
  }

  const spinnerClasses = `${sizeClasses[size]} ${variantClasses[variant]} animate-spin`
  const containerClasses = `${centered ? 'flex flex-col items-center justify-center' : 'inline-flex items-center'} ${className}`

  return (
    <div className={containerClasses} {...props}>
      {/* Educational Design: Accessible loading indicator with proper ARIA attributes */}
      <div className={spinnerClasses} role="status" aria-label={text || 'Loading'}>
        {/* Educational Design: SVG spinner with smooth animation */}
        <svg
          className="animate-spin"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
        >
          <circle
            className="opacity-25"
            cx="12"
            cy="12"
            r="10"
            stroke="currentColor"
            strokeWidth="4"
          />
          <path
            className="opacity-75"
            fill="currentColor"
            d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
          />
        </svg>
        <span className="sr-only">{text || 'Loading'}</span>
      </div>

      {/* Educational Design: Optional loading text for context */}
      {text && (
        <span
          className={`mt-2 text-gray-600 ${textSizeClasses[size]} ${centered ? 'text-center' : 'ml-2'}`}
        >
          {text}
        </span>
      )}
    </div>
  )
}

LoadingSpinner.displayName = 'LoadingSpinner'

export { LoadingSpinner }
export type { LoadingSpinnerProps }
