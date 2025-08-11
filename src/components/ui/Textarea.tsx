import { TextareaHTMLAttributes, forwardRef } from 'react'

/**
 * Educational Design: Textarea components are optimized for longer form responses
 * and mathematical explanations, supporting student expression and reasoning.
 */

/**
 * Props interface for the Textarea component
 *
 * @interface TextareaProps
 * @extends {TextareaHTMLAttributes<HTMLTextAreaElement>}
 */
interface TextareaProps extends TextareaHTMLAttributes<HTMLTextAreaElement> {
  /** Label text for accessibility and clear field identification */
  label?: string
  /** Help text providing additional context or instructions */
  helperText?: string
  /** Error message to display when validation fails */
  errorMessage?: string
  /** Visual state of the textarea */
  variant?: 'default' | 'error' | 'success'
  /** Size variant affecting height and padding */
  size?: 'sm' | 'md' | 'lg'
  /** Whether to allow automatic height adjustment */
  autoResize?: boolean
}

/**
 * Textarea component for longer text input in educational contexts
 *
 * Features:
 * - Optimized for mathematical explanations and problem solutions
 * - Auto-resize capability for dynamic content
 * - Clear visual feedback for validation states
 * - Accessible design with proper labeling
 * - Consistent styling with other form components
 *
 * Educational Applications:
 * - Solution explanations for math problems
 * - Student reflection and reasoning entries
 * - Collaborative discussion responses
 * - Study notes and problem-solving strategies
 *
 * @component
 * @example
 * ```tsx
 * // Problem explanation textarea
 * <Textarea
 *   label="Explain your solution"
 *   placeholder="Describe your problem-solving steps..."
 *   rows={4}
 * />
 *
 * // Auto-resizing feedback form
 * <Textarea
 *   label="Study Group Feedback"
 *   autoResize
 *   helperText="Share your experience with your study group"
 * />
 * ```
 */
const Textarea = forwardRef<HTMLTextAreaElement, TextareaProps>(
  (
    {
      label,
      helperText,
      errorMessage,
      variant = 'default',
      size = 'md',
      autoResize = false,
      className = '',
      id,
      ...props
    },
    ref
  ) => {
    // Generate unique ID for accessibility if not provided
    const textareaId = id || `textarea-${Math.random().toString(36).substr(2, 9)}`
    const helperTextId = helperText ? `${textareaId}-helper` : undefined
    const errorId = errorMessage ? `${textareaId}-error` : undefined

    // Educational Design: Base styles ensure consistent appearance and focus behavior
    const baseStyles =
      'block w-full rounded-lg border transition-colors focus:outline-none focus:ring-2 focus:ring-offset-1 resize-vertical'

    // Educational Design: Visual states provide clear feedback on input validation
    const variants = {
      default: 'border-gray-300 focus:border-blue-500 focus:ring-blue-500',
      error: 'border-red-300 focus:border-red-500 focus:ring-red-500 bg-red-50',
      success: 'border-green-300 focus:border-green-500 focus:ring-green-500 bg-green-50',
    }

    // Educational Design: Size options for different content types and contexts
    const sizes = {
      sm: 'px-3 py-1.5 text-sm min-h-[80px]',
      md: 'px-4 py-2 text-base min-h-[100px]',
      lg: 'px-4 py-3 text-lg min-h-[120px]',
    }

    const textareaClasses = `${baseStyles} ${variants[variant]} ${sizes[size]} ${autoResize ? 'resize-none overflow-hidden' : ''} ${className}`

    return (
      <div className="w-full">
        {/* Educational Design: Labels provide clear context and support screen readers */}
        {label && (
          <label htmlFor={textareaId} className="block text-sm font-medium text-gray-700 mb-1">
            {label}
          </label>
        )}

        <textarea
          ref={ref}
          id={textareaId}
          className={textareaClasses}
          aria-describedby={helperTextId || errorId}
          aria-invalid={variant === 'error'}
          {...props}
        />

        {/* Educational Design: Helper text provides guidance for student responses */}
        {helperText && !errorMessage && (
          <p id={helperTextId} className="mt-1 text-sm text-gray-600">
            {helperText}
          </p>
        )}

        {/* Educational Design: Error messages use constructive language */}
        {errorMessage && (
          <p id={errorId} className="mt-1 text-sm text-red-600" role="alert">
            {errorMessage}
          </p>
        )}
      </div>
    )
  }
)

Textarea.displayName = 'Textarea'

export { Textarea }
export type { TextareaProps }
