import { render } from '@testing-library/react'
import { axe } from 'jest-axe'
import Home from '@/app/page'
import { Button, Card, CardHeader, CardContent, Badge, Input, Textarea } from '@/components/ui'
import { Header, Footer } from '@/components/layout'
import { ProgressBar, Achievement, Points } from '@/components/gamification'

/**
 * Educational Design: Accessibility tests ensure all students can access learning content
 * regardless of their abilities or assistive technology needs.
 */

describe('Accessibility Tests', () => {
  describe('Homepage Accessibility', () => {
    it('should not have any accessibility violations', async () => {
      const { container } = render(<Home />)
      const results = await axe(container)
      expect(results).toHaveNoViolations()
    })

    it('should have proper heading structure', () => {
      render(<Home />)
      // Educational Design: Proper heading hierarchy supports screen readers
      const h1 = document.querySelector('h1')
      expect(h1).toBeInTheDocument()
      expect(h1).toHaveTextContent(/Master Math Competitions/)
    })

    it('should have descriptive button labels', () => {
      render(<Home />)
      const buttons = document.querySelectorAll('button')
      buttons.forEach(button => {
        // Educational Design: Buttons should have accessible names
        expect(button).toHaveAccessibleName()
      })
    })
  })

  describe('UI Components Accessibility', () => {
    describe('Button Component', () => {
      it('should be accessible by keyboard and screen readers', async () => {
        const { container } = render(<Button>Click me</Button>)
        const results = await axe(container)
        expect(results).toHaveNoViolations()
      })

      it('should have proper ARIA attributes when disabled', async () => {
        const { container } = render(<Button disabled>Disabled Button</Button>)
        const button = container.querySelector('button')
        expect(button).toHaveAttribute('disabled')

        const results = await axe(container)
        expect(results).toHaveNoViolations()
      })
    })

    describe('Input Component', () => {
      it('should have proper labeling', async () => {
        const { container } = render(<Input label="Student Name" placeholder="Enter your name" />)

        const input = container.querySelector('input')
        const label = container.querySelector('label')

        expect(input).toBeInTheDocument()
        expect(label).toBeInTheDocument()
        expect(input).toHaveAccessibleName()

        const results = await axe(container)
        expect(results).toHaveNoViolations()
      })

      it('should properly associate error messages', async () => {
        const { container } = render(
          <Input label="Answer" errorMessage="Please enter a valid number" variant="error" />
        )

        const input = container.querySelector('input')
        const errorMessage = container.querySelector('[role="alert"]')

        expect(input).toHaveAttribute('aria-invalid', 'true')
        expect(errorMessage).toBeInTheDocument()
        expect(input).toHaveAccessibleDescription()

        const results = await axe(container)
        expect(results).toHaveNoViolations()
      })
    })

    describe('Card Component', () => {
      it('should have semantic structure', async () => {
        const { container } = render(
          <Card>
            <CardHeader>
              <h3>Problem Title</h3>
            </CardHeader>
            <CardContent>
              <p>Problem content goes here</p>
            </CardContent>
          </Card>
        )

        const results = await axe(container)
        expect(results).toHaveNoViolations()
      })
    })

    describe('Badge Component', () => {
      it('should be accessible for status indicators', async () => {
        const { container } = render(<Badge variant="success">Completed</Badge>)

        const results = await axe(container)
        expect(results).toHaveNoViolations()
      })
    })
  })

  describe('Layout Components Accessibility', () => {
    describe('Header Component', () => {
      it('should have proper navigation structure', async () => {
        const { container } = render(<Header />)

        const nav = container.querySelector('nav')
        const banner = container.querySelector('[role="banner"]')

        expect(nav || banner).toBeInTheDocument()

        const results = await axe(container)
        expect(results).toHaveNoViolations()
      })

      it('should have accessible navigation links', () => {
        render(<Header />)

        const links = document.querySelectorAll('a')
        links.forEach(link => {
          expect(link).toHaveAccessibleName()
        })
      })
    })

    describe('Footer Component', () => {
      it('should have proper contentinfo role', async () => {
        const { container } = render(<Footer />)

        const footer = container.querySelector('[role="contentinfo"]')
        expect(footer).toBeInTheDocument()

        const results = await axe(container)
        expect(results).toHaveNoViolations()
      })
    })
  })

  describe('Gamification Components Accessibility', () => {
    describe('ProgressBar Component', () => {
      it('should have proper progress semantics', async () => {
        const { container } = render(<ProgressBar value={75} showLabel label="Algebra Progress" />)

        const progressBar = container.querySelector('[role="progressbar"]')
        expect(progressBar).toBeInTheDocument()
        expect(progressBar).toHaveAttribute('aria-valuenow', '75')
        expect(progressBar).toHaveAttribute('aria-valuemin', '0')
        expect(progressBar).toHaveAttribute('aria-valuemax', '100')

        const results = await axe(container)
        expect(results).toHaveNoViolations()
      })
    })

    describe('Achievement Component', () => {
      it('should be accessible for achievement display', async () => {
        const { container } = render(
          <Achievement
            title="Math Master"
            description="Completed 100 problems"
            unlocked={true}
            points={500}
          />
        )

        const results = await axe(container)
        expect(results).toHaveNoViolations()
      })
    })

    describe('Points Component', () => {
      it('should display points accessibly', async () => {
        const { container } = render(<Points value={1250} label="Total Points" />)

        const results = await axe(container)
        expect(results).toHaveNoViolations()
      })
    })
  })

  describe('Form Accessibility', () => {
    it('should handle complex forms accessibly', async () => {
      const { container } = render(
        <div>
          <Input label="Student Name" required />
          <Input label="Grade Level" type="number" />
          <Textarea label="Learning Goals" rows={3} />
          <Button type="submit">Save Profile</Button>
        </div>
      )

      const results = await axe(container)
      expect(results).toHaveNoViolations()
    })
  })
})
