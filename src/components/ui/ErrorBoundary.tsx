'use client'

import { Component, ReactNode, ErrorInfo } from 'react'
import { Button } from './Button'

/**
 * Educational Design: Error boundaries provide graceful failure handling
 * that maintains student confidence and provides clear recovery paths.
 */

/**
 * Props interface for the ErrorBoundary component
 */
interface ErrorBoundaryProps {
  /** Child components to render */
  children: ReactNode
  /** Custom fallback UI component */
  fallback?: ReactNode
  /** Custom error handler */
  onError?: (error: Error, errorInfo: ErrorInfo) => void
  /** Whether to show technical error details (for development) */
  showErrorDetails?: boolean
}

/**
 * State interface for error boundary
 */
interface ErrorBoundaryState {
  /** Whether an error has occurred */
  hasError: boolean
  /** Error object if one occurred */
  error?: Error
  /** Error information from React */
  errorInfo?: ErrorInfo
}

/**
 * Error Boundary component for graceful error handling in educational contexts
 *
 * Features:
 * - Student-friendly error messages that don't discourage learning
 * - Clear recovery actions to get back to learning quickly
 * - Error reporting for platform improvement
 * - Maintains learning context and progress when possible
 * - Accessible design with proper ARIA attributes
 *
 * Educational Applications:
 * - Wrapping problem-solving interfaces to handle math rendering errors
 * - Protecting student progress from being lost due to technical issues
 * - Providing helpful guidance when interactive tools fail
 * - Maintaining confidence during technical difficulties
 *
 * @component
 * @example
 * ```tsx
 * // Wrap potentially failing components
 * <ErrorBoundary>
 *   <MathProblemRenderer problem={complexProblem} />
 * </ErrorBoundary>
 *
 * // Custom fallback with educational context
 * <ErrorBoundary
 *   fallback={<ProblemLoadingError onRetry={handleRetry} />}
 *   onError={logEducationalError}
 * >
 *   <PracticeProblem />
 * </ErrorBoundary>
 * ```
 */
class ErrorBoundary extends Component<ErrorBoundaryProps, ErrorBoundaryState> {
  constructor(props: ErrorBoundaryProps) {
    super(props)
    this.state = { hasError: false }
  }

  /**
   * Educational Design: Catch errors and update state to show fallback UI
   * while preserving the learning context as much as possible
   */
  static getDerivedStateFromError(error: Error): ErrorBoundaryState {
    return {
      hasError: true,
      error,
    }
  }

  /**
   * Educational Design: Log errors for platform improvement while
   * maintaining student privacy and providing helpful feedback
   */
  componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    this.setState({
      error,
      errorInfo,
    })

    // Educational Design: Call custom error handler if provided
    if (this.props.onError) {
      this.props.onError(error, errorInfo)
    }

    // Educational Design: Log error for platform improvement
    // In production, this would send to error reporting service
    console.group('🚨 MathChamp Error Boundary')
    console.error('Error caught by boundary:', error)
    console.error('Error info:', errorInfo)
    console.groupEnd()
  }

  /**
   * Educational Design: Reset error state to allow students to retry
   * and continue their learning journey
   */
  handleReset = () => {
    this.setState({ hasError: false, error: undefined, errorInfo: undefined })
  }

  /**
   * Educational Design: Reload page as last resort while preserving
   * as much learning context as possible
   */
  handleReload = () => {
    window.location.reload()
  }

  render() {
    if (this.state.hasError) {
      // Educational Design: Use custom fallback if provided
      if (this.props.fallback) {
        return this.props.fallback
      }

      // Educational Design: Default fallback with student-friendly messaging
      return (
        <div className="min-h-[400px] flex items-center justify-center p-8" role="alert">
          <div className="text-center max-w-md mx-auto">
            {/* Educational Design: Friendly, non-technical error indication */}
            <div className="w-16 h-16 mx-auto mb-6 bg-yellow-100 rounded-full flex items-center justify-center">
              <span className="text-2xl">⚠️</span>
            </div>

            <h2 className="text-xl font-semibold text-gray-900 mb-3">Oops! Something went wrong</h2>

            <p className="text-gray-600 mb-6 leading-relaxed">
              Don&rsquo;t worry! This happens sometimes with technology. Your progress is safe, and
              we can get you back to learning math in no time.
            </p>

            {/* Educational Design: Clear recovery actions */}
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <Button onClick={this.handleReset} variant="primary">
                Try Again
              </Button>
              <Button onClick={this.handleReload} variant="outline">
                Refresh Page
              </Button>
            </div>

            {/* Educational Design: Development error details (hidden in production) */}
            {this.props.showErrorDetails && this.state.error && (
              <details className="mt-8 text-left">
                <summary className="text-sm text-gray-500 cursor-pointer hover:text-gray-700">
                  Technical Details (for developers)
                </summary>
                <div className="mt-2 p-4 bg-gray-50 rounded-lg text-xs font-mono text-gray-700 overflow-auto">
                  <div className="mb-2">
                    <strong>Error:</strong> {this.state.error.message}
                  </div>
                  <div className="mb-2">
                    <strong>Stack:</strong>
                    <pre className="whitespace-pre-wrap mt-1">{this.state.error.stack}</pre>
                  </div>
                  {this.state.errorInfo && (
                    <div>
                      <strong>Component Stack:</strong>
                      <pre className="whitespace-pre-wrap mt-1">
                        {this.state.errorInfo.componentStack}
                      </pre>
                    </div>
                  )}
                </div>
              </details>
            )}
          </div>
        </div>
      )
    }

    return this.props.children
  }
}

export { ErrorBoundary }
export type { ErrorBoundaryProps }
