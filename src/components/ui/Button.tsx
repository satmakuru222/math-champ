import { ButtonHTMLAttributes, forwardRef } from 'react'

/**
 * Educational Design: Button variants are designed with high contrast ratios
 * to meet WCAG 2.1 AA standards, ensuring accessibility for all students.
 * Color choices support focus and attention management during learning sessions.
 */

/**
 * Props interface for the Button component
 *
 * @interface ButtonProps
 * @extends {ButtonHTMLAttributes<HTMLButtonElement>}
 */
interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  /** Visual style variant for different contexts and importance levels */
  variant?: 'primary' | 'secondary' | 'outline'
  /** Size variant to accommodate different UI contexts and touch targets */
  size?: 'sm' | 'md' | 'lg'
  /** Button content - supports text, icons, or complex JSX */
  children: React.ReactNode
}

/**
 * Reusable Button component optimized for educational interfaces
 *
 * Features:
 * - WCAG 2.1 AA compliant color contrast ratios for accessibility
 * - Touch-friendly sizing for mobile learning devices
 * - Clear visual hierarchy to support student focus and decision-making
 * - Consistent interaction patterns across the learning platform
 *
 * @component
 * @example
 * ```tsx
 * // Primary action button (call-to-action)
 * <Button variant="primary" size="lg">Start Learning</Button>
 *
 * // Secondary action button
 * <Button variant="secondary">View Progress</Button>
 *
 * // Subtle action button
 * <Button variant="outline" size="sm">Skip</Button>
 * ```
 */
const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className = '', variant = 'primary', size = 'md', children, ...props }, ref) => {
    // Educational Design: Base styles ensure consistent focus management
    // and accessibility across all learning interactions
    const baseStyles =
      'font-medium rounded-lg transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2'

    // Educational Design: High contrast colors support visual processing
    // and reduce cognitive load during problem-solving sessions
    const variants = {
      primary: 'bg-blue-600 text-white hover:bg-blue-700 focus:ring-blue-500',
      secondary: 'bg-gray-600 text-white hover:bg-gray-700 focus:ring-gray-500',
      outline: 'border border-gray-300 text-gray-700 hover:bg-gray-50 focus:ring-blue-500',
    }

    // Educational Design: Touch-friendly sizes support both desktop and mobile learning
    // Small: utility actions, Medium: standard interactions, Large: primary CTAs
    const sizes = {
      sm: 'px-3 py-1.5 text-sm',
      md: 'px-4 py-2 text-base',
      lg: 'px-6 py-3 text-lg',
    }

    const buttonClasses = `${baseStyles} ${variants[variant]} ${sizes[size]} ${className}`

    return (
      <button ref={ref} className={buttonClasses} {...props}>
        {children}
      </button>
    )
  }
)

Button.displayName = 'Button'

export { Button }
export type { ButtonProps }
