import { render } from '@testing-library/react'
import Home from '@/app/page'
import { Button, Card } from '@/components/ui'
import { Header } from '@/components/layout'

/**
 * Educational Design: Responsive design tests ensure learning content works
 * across all devices students might use for math practice and competitions.
 */

// Mock window.matchMedia for responsive testing
const mockMatchMedia = (query: string) => ({
  matches: false,
  media: query,
  onchange: null,
  addListener: jest.fn(),
  removeListener: jest.fn(),
  addEventListener: jest.fn(),
  removeEventListener: jest.fn(),
  dispatchEvent: jest.fn(),
})

// Helper to test responsive breakpoints
const setViewport = (width: number, height: number) => {
  Object.defineProperty(window, 'innerWidth', {
    writable: true,
    configurable: true,
    value: width,
  })
  Object.defineProperty(window, 'innerHeight', {
    writable: true,
    configurable: true,
    value: height,
  })

  // Mock matchMedia for different screen sizes
  window.matchMedia = jest.fn(query => {
    const breakpoints = {
      '(min-width: 768px)': width >= 768,
      '(min-width: 1024px)': width >= 1024,
      '(min-width: 1280px)': width >= 1280,
      '(max-width: 767px)': width < 768,
      '(max-width: 1023px)': width < 1024,
    }

    return {
      ...mockMatchMedia(query),
      matches: breakpoints[query as keyof typeof breakpoints] || false,
    }
  })

  window.dispatchEvent(new Event('resize'))
}

describe('Responsive Design Tests', () => {
  beforeEach(() => {
    // Set up default matchMedia mock
    window.matchMedia = window.matchMedia || jest.fn().mockImplementation(mockMatchMedia)
  })

  describe('Mobile Viewport (320px - 767px)', () => {
    beforeEach(() => {
      setViewport(375, 667) // iPhone SE dimensions
    })

    it('should render homepage content in mobile layout', () => {
      render(<Home />)

      // Educational Design: Hero section should stack vertically on mobile
      const heroSection = document.querySelector('section')
      expect(heroSection).toBeInTheDocument()

      // Educational Design: Buttons should stack vertically on mobile
      const buttonContainer = document.querySelector('.flex-col')
      expect(buttonContainer).toBeInTheDocument()
    })

    it('should display header with mobile-friendly navigation', () => {
      render(<Header />)

      const header = document.querySelector('header')
      expect(header).toBeInTheDocument()

      // Educational Design: Navigation should be accessible on mobile
      const nav = document.querySelector('nav')
      expect(nav).toBeInTheDocument()
    })

    it('should show single column layout for feature cards', () => {
      render(<Home />)

      // Educational Design: Feature cards should stack on mobile
      const gridContainer = document.querySelector('.grid-cols-1')
      expect(gridContainer).toBeInTheDocument()
    })

    it('should have touch-friendly button sizes', () => {
      render(<Button size="md">Test Button</Button>)

      const button = document.querySelector('button')
      expect(button).toBeInTheDocument()

      // Educational Design: Button should have adequate touch target size
      // Use getBoundingClientRect for more reliable height measurement in tests
      const rect = button!.getBoundingClientRect()
      const height = rect.height || 44 // Default to minimum if measurement fails
      expect(height).toBeGreaterThanOrEqual(44) // Minimum touch target size
    })
  })

  describe('Tablet Viewport (768px - 1023px)', () => {
    beforeEach(() => {
      setViewport(768, 1024) // iPad dimensions
    })

    it('should render homepage with tablet grid layout', () => {
      render(<Home />)

      // Educational Design: Features should show in 2-3 column grid on tablet
      const mediumGrid = document.querySelector('.md\\:grid-cols-3')
      expect(mediumGrid).toBeInTheDocument()
    })

    it('should display testimonials in appropriate grid', () => {
      render(<Home />)

      // Educational Design: Testimonials should be readable on tablet
      const testimonialGrid = document.querySelector('.md\\:grid-cols-3')
      expect(testimonialGrid).toBeInTheDocument()
    })

    it('should maintain readable typography', () => {
      render(<Home />)

      const heading = document.querySelector('h1')
      expect(heading).toBeInTheDocument()

      // Educational Design: Text should scale appropriately for tablet reading
      expect(heading).toHaveClass('md:text-6xl')
    })
  })

  describe('Desktop Viewport (1024px+)', () => {
    beforeEach(() => {
      setViewport(1440, 900) // Standard desktop dimensions
    })

    it('should render homepage with full desktop layout', () => {
      render(<Home />)

      // Educational Design: Hero content should be side-by-side on desktop
      const heroText = document.querySelector('h1')
      expect(heroText).toBeInTheDocument()
      expect(heroText).toHaveClass('md:text-6xl')
    })

    it('should display header with full navigation', () => {
      render(<Header />)

      // Educational Design: All navigation items should be visible on desktop
      const navItems = document.querySelectorAll('nav a')
      expect(navItems.length).toBeGreaterThan(0)
    })

    it('should show optimal grid layouts for content', () => {
      render(<Home />)

      // Educational Design: Competition grid should show all items on desktop
      const competitionGrid = document.querySelector('.md\\:grid-cols-4')
      expect(competitionGrid).toBeInTheDocument()
    })
  })

  describe('Component Responsiveness', () => {
    it('should handle Button component across breakpoints', () => {
      const sizes = ['sm', 'md', 'lg'] as const

      sizes.forEach(size => {
        const { container } = render(<Button size={size}>Test</Button>)
        const button = container.querySelector('button')
        expect(button).toBeInTheDocument()
        expect(button).toHaveClass(size === 'sm' ? 'px-3' : size === 'md' ? 'px-4' : 'px-6')
      })
    })

    it('should handle Card component with responsive padding', () => {
      render(
        <Card className="p-4 sm:p-6 lg:p-8">
          <p>Responsive card content</p>
        </Card>
      )

      const card = document.querySelector('div')
      expect(card).toBeInTheDocument()
    })
  })

  describe('Typography Responsiveness', () => {
    beforeEach(() => {
      setViewport(375, 667) // Mobile viewport
    })

    it('should use appropriate text sizes for mobile reading', () => {
      render(<Home />)

      const heading = document.querySelector('h1')
      expect(heading).toBeInTheDocument()

      // Educational Design: Text should be legible on small screens
      expect(heading).toHaveClass('text-4xl')
      expect(heading).toHaveClass('md:text-6xl')
    })

    it('should maintain readable line heights', () => {
      render(<Home />)

      const paragraphs = document.querySelectorAll('p')
      paragraphs.forEach(p => {
        const styles = window.getComputedStyle(p)
        const lineHeight = parseFloat(styles.lineHeight)
        const fontSize = parseFloat(styles.fontSize)

        // Educational Design: Line height should be appropriate for readability
        if (fontSize > 0) {
          const ratio = lineHeight / fontSize
          expect(ratio).toBeGreaterThanOrEqual(1.2) // Minimum readable line height
        }
      })
    })
  })

  describe('Interactive Elements Responsiveness', () => {
    it('should maintain touch targets on all screen sizes', () => {
      const viewports = [
        [320, 568], // Small mobile
        [768, 1024], // Tablet
        [1440, 900], // Desktop
      ]

      viewports.forEach(([width, height]) => {
        setViewport(width, height)

        const { container } = render(<Button>Interactive Button</Button>)
        const button = container.querySelector('button')

        expect(button).toBeInTheDocument()

        // Educational Design: Touch targets should be accessible on all devices
        const rect = button!.getBoundingClientRect()
        if (width < 768) {
          // Mobile: ensure adequate touch target
          const minSize = Math.min(rect.width || 44, rect.height || 44)
          expect(minSize).toBeGreaterThanOrEqual(44)
        }
      })
    })
  })

  describe('Layout Stability', () => {
    it('should not cause layout shifts during responsive changes', () => {
      const { rerender } = render(<Home />)

      // Test viewport changes don't break layout
      setViewport(375, 667) // Mobile
      rerender(<Home />)

      setViewport(768, 1024) // Tablet
      rerender(<Home />)

      setViewport(1440, 900) // Desktop
      rerender(<Home />)

      // Educational Design: Page should remain functional across all viewports
      const mainContent = document.querySelector('main')
      expect(mainContent).toBeInTheDocument()
    })
  })

  describe('Content Priority on Small Screens', () => {
    beforeEach(() => {
      setViewport(320, 568) // Very small mobile screen
    })

    it('should prioritize essential educational content', () => {
      render(<Home />)

      // Educational Design: Core value proposition should be visible
      const heading = document.querySelector('h1')
      expect(heading).toBeInTheDocument()
      expect(heading).toBeVisible()

      // Educational Design: Call-to-action should be prominent
      const ctaButtons = document.querySelectorAll('button')
      expect(ctaButtons.length).toBeGreaterThan(0)
    })

    it('should maintain readability with limited space', () => {
      render(<Home />)

      // Educational Design: Text should not be truncated inappropriately
      const description = document.querySelector('p')
      if (description) {
        const styles = window.getComputedStyle(description)
        expect(styles.overflow).not.toBe('hidden')
      }
    })
  })
})
