import '@testing-library/jest-dom'
import 'jest-axe/extend-expect'

declare global {
  namespace jest {
    interface Matchers<R> {
      toBeInTheDocument(): R
      toHaveClass(...classNames: string[]): R
      toBeDisabled(): R
      toHaveAttribute(attr: string, value?: string | RegExp): R
      toHaveLength(length: number): R
      toHaveAccessibleName(name?: string | RegExp): R
      toHaveAccessibleDescription(description?: string | RegExp): R
      toHaveNoViolations(): R
    }
  }
}
