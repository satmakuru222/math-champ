import { InputHTMLAttributes, forwardRef, ReactNode } from 'react'

/**
 * Educational Design: Input components are designed to minimize cognitive load
 * during problem entry and provide clear visual feedback for student interactions.
 */

/**
 * Props interface for the Input component
 *
 * @interface InputProps
 * @extends {InputHTMLAttributes<HTMLInputElement>}
 */
interface InputProps extends Omit<InputHTMLAttributes<HTMLInputElement>, 'size'> {
  /** Label text for accessibility and clear field identification */
  label?: string
  /** Help text providing additional context or instructions */
  helperText?: string
  /** Error message to display when validation fails */
  errorMessage?: string
  /** Visual state of the input field */
  variant?: 'default' | 'error' | 'success'
  /** Size variant for different contexts */
  size?: 'sm' | 'md' | 'lg'
  /** Icon element to display before the input text */
  leftIcon?: ReactNode
  /** Icon element to display after the input text */
  rightIcon?: ReactNode
}

/**
 * Input component optimized for educational interfaces and math input
 *
 * Features:
 * - Clear visual hierarchy with labels and helper text
 * - Error states that provide constructive feedback
 * - Icon support for mathematical symbols and visual cues
 * - Accessible design following WCAG 2.1 AA guidelines
 * - Consistent styling across all learning interactions
 *
 * Educational Applications:
 * - Answer input fields for math problems
 * - Search inputs for problem banks and topics
 * - User profile and settings forms
 * - Mathematical expression entry with LaTeX support
 *
 * @component
 * @example
 * ```tsx
 * // Basic input with label
 * <Input label="Student Name" placeholder="Enter your name" />
 *
 * // Math answer input with error state
 * <Input
 *   label="Answer"
 *   variant="error"
 *   errorMessage="Please enter a numeric value"
 * />
 *
 * // Search input with icon
 * <Input
 *   placeholder="Search problems..."
 *   leftIcon={<SearchIcon />}
 * />
 * ```
 */
const Input = forwardRef<HTMLInputElement, InputProps>(
  (
    {
      label,
      helperText,
      errorMessage,
      variant = 'default',
      size = 'md',
      leftIcon,
      rightIcon,
      className = '',
      id,
      ...props
    },
    ref
  ) => {
    // Generate unique ID for accessibility if not provided
    const inputId = id || `input-${Math.random().toString(36).substr(2, 9)}`
    const helperTextId = helperText ? `${inputId}-helper` : undefined
    const errorId = errorMessage ? `${inputId}-error` : undefined

    // Educational Design: Base styles ensure consistent appearance and focus behavior
    const baseStyles =
      'block w-full rounded-lg border transition-colors focus:outline-none focus:ring-2 focus:ring-offset-1'

    // Educational Design: Visual states provide clear feedback on input validation
    // Default: neutral, Error: red for mistakes, Success: green for correct entries
    const variants = {
      default: 'border-gray-300 focus:border-blue-500 focus:ring-blue-500',
      error: 'border-red-300 focus:border-red-500 focus:ring-red-500 bg-red-50',
      success: 'border-green-300 focus:border-green-500 focus:ring-green-500 bg-green-50',
    }

    // Educational Design: Size options accommodate different input types and contexts
    // Small: compact forms, Medium: standard inputs, Large: primary answer fields
    const sizes = {
      sm: 'px-3 py-1.5 text-sm',
      md: 'px-4 py-2 text-base',
      lg: 'px-4 py-3 text-lg',
    }

    const inputClasses = `${baseStyles} ${variants[variant]} ${sizes[size]} ${className}`

    return (
      <div className="w-full">
        {/* Educational Design: Labels provide clear context and support screen readers */}
        {label && (
          <label htmlFor={inputId} className="block text-sm font-medium text-gray-700 mb-1">
            {label}
          </label>
        )}

        {/* Educational Design: Icon container supports mathematical symbols and visual cues */}
        <div className="relative">
          {leftIcon && (
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <div className="text-gray-400">{leftIcon}</div>
            </div>
          )}

          <input
            ref={ref}
            id={inputId}
            className={`${inputClasses} ${leftIcon ? 'pl-10' : ''} ${rightIcon ? 'pr-10' : ''}`}
            aria-describedby={helperTextId || errorId}
            aria-invalid={variant === 'error'}
            {...props}
          />

          {rightIcon && (
            <div className="absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none">
              <div className="text-gray-400">{rightIcon}</div>
            </div>
          )}
        </div>

        {/* Educational Design: Helper text provides guidance without overwhelming */}
        {helperText && !errorMessage && (
          <p id={helperTextId} className="mt-1 text-sm text-gray-600">
            {helperText}
          </p>
        )}

        {/* Educational Design: Error messages use constructive language for learning */}
        {errorMessage && (
          <p id={errorId} className="mt-1 text-sm text-red-600" role="alert">
            {errorMessage}
          </p>
        )}
      </div>
    )
  }
)

Input.displayName = 'Input'

export { Input }
export type { InputProps }
