import { LoadingSpinner } from './LoadingSpinner'

/**
 * Educational Design: Full-page loading states provide context during
 * significant loading operations while maintaining educational branding.
 */

/**
 * Props interface for the LoadingPage component
 */
interface LoadingPageProps {
  /** Loading message to display */
  message?: string
  /** Detailed description of what's loading */
  description?: string
  /** Whether to show the MathChamp branding */
  showBranding?: boolean
}

/**
 * LoadingPage component for full-page loading states
 *
 * Features:
 * - Full viewport coverage with educational branding
 * - Contextual messaging about loading operations
 * - Consistent visual design with platform theme
 * - Accessible loading indicators and messaging
 * - Maintains student engagement during longer operations
 *
 * Educational Applications:
 * - Initial app loading and authentication
 * - Loading personalized learning dashboards
 * - Generating adaptive problem sets
 * - Processing complex mathematical computations
 * - Loading competition data and analytics
 *
 * @component
 * @example
 * ```tsx
 * // Basic full-page loading
 * <LoadingPage />
 *
 * // Custom loading message
 * <LoadingPage
 *   message="Setting up your learning journey"
 *   description="We're personalizing your math experience based on your goals and current level"
 * />
 *
 * // Without branding
 * <LoadingPage
 *   message="Processing your answer..."
 *   showBranding={false}
 * />
 * ```
 */
const LoadingPage = ({
  message = 'Loading your math adventure...',
  description,
  showBranding = true,
}: LoadingPageProps) => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 flex flex-col items-center justify-center p-4">
      <div className="text-center max-w-md mx-auto">
        {/* Educational Design: MathChamp branding for consistency */}
        {showBranding && (
          <div className="mb-8">
            <div className="w-16 h-16 bg-blue-600 rounded-lg flex items-center justify-center mx-auto mb-4">
              <span className="text-white font-bold text-2xl">M</span>
            </div>
            <h1 className="text-2xl font-bold text-gray-900 mb-2">MathChamp</h1>
            <p className="text-gray-600 text-sm">Empowering Mathematical Excellence</p>
          </div>
        )}

        {/* Educational Design: Large, visible loading spinner */}
        <div className="mb-6">
          <LoadingSpinner size="xl" variant="primary" centered />
        </div>

        {/* Educational Design: Clear, encouraging loading message */}
        <h2 className="text-lg font-semibold text-gray-900 mb-3">{message}</h2>

        {/* Educational Design: Optional detailed description */}
        {description && <p className="text-gray-600 text-sm leading-relaxed">{description}</p>}

        {/* Educational Design: Subtle progress indication */}
        <div className="mt-8">
          <div className="flex justify-center space-x-1">
            <div
              className="w-2 h-2 bg-blue-600 rounded-full animate-pulse"
              style={{ animationDelay: '0ms' }}
            />
            <div
              className="w-2 h-2 bg-blue-600 rounded-full animate-pulse"
              style={{ animationDelay: '150ms' }}
            />
            <div
              className="w-2 h-2 bg-blue-600 rounded-full animate-pulse"
              style={{ animationDelay: '300ms' }}
            />
          </div>
        </div>
      </div>
    </div>
  )
}

LoadingPage.displayName = 'LoadingPage'

export { LoadingPage }
export type { LoadingPageProps }
