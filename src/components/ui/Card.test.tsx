import { render, screen } from '@testing-library/react'
import { Card, CardHeader, CardContent, CardFooter } from './Card'

describe('Card Components', () => {
  describe('Card', () => {
    it('renders card with children', () => {
      render(
        <Card data-testid="card">
          <p>Card content</p>
        </Card>
      )
      const card = screen.getByTestId('card')
      expect(card).toBeInTheDocument()
      expect(screen.getByText('Card content')).toBeInTheDocument()
    })

    it('applies default card styles', () => {
      render(<Card data-testid="card">Content</Card>)
      const card = screen.getByTestId('card')
      expect(card).toHaveClass('bg-white', 'rounded-lg', 'border', 'border-gray-200', 'shadow-sm')
    })

    it('accepts custom className', () => {
      render(
        <Card className="custom-class" data-testid="card">
          Content
        </Card>
      )
      const card = screen.getByTestId('card')
      expect(card).toHaveClass('custom-class')
    })
  })

  describe('CardHeader', () => {
    it('renders card header with children', () => {
      render(
        <CardHeader data-testid="card-header">
          <h2>Header Title</h2>
        </CardHeader>
      )
      const header = screen.getByTestId('card-header')
      expect(header).toBeInTheDocument()
      expect(screen.getByText('Header Title')).toBeInTheDocument()
    })

    it('applies header styles', () => {
      render(<CardHeader data-testid="card-header">Header</CardHeader>)
      const header = screen.getByTestId('card-header')
      expect(header).toHaveClass('px-6', 'py-4', 'border-b', 'border-gray-200')
    })
  })

  describe('CardContent', () => {
    it('renders card content with children', () => {
      render(
        <CardContent data-testid="card-content">
          <p>Content text</p>
        </CardContent>
      )
      const content = screen.getByTestId('card-content')
      expect(content).toBeInTheDocument()
      expect(screen.getByText('Content text')).toBeInTheDocument()
    })

    it('applies content styles', () => {
      render(<CardContent data-testid="card-content">Content</CardContent>)
      const content = screen.getByTestId('card-content')
      expect(content).toHaveClass('px-6', 'py-4')
    })
  })

  describe('CardFooter', () => {
    it('renders card footer with children', () => {
      render(
        <CardFooter data-testid="card-footer">
          <button>Footer Button</button>
        </CardFooter>
      )
      const footer = screen.getByTestId('card-footer')
      expect(footer).toBeInTheDocument()
      expect(screen.getByText('Footer Button')).toBeInTheDocument()
    })

    it('applies footer styles', () => {
      render(<CardFooter data-testid="card-footer">Footer</CardFooter>)
      const footer = screen.getByTestId('card-footer')
      expect(footer).toHaveClass('px-6', 'py-4', 'border-t', 'border-gray-200')
    })
  })

  describe('Full Card Composition', () => {
    it('renders complete card structure', () => {
      render(
        <Card data-testid="full-card">
          <CardHeader>
            <h3>Card Title</h3>
          </CardHeader>
          <CardContent>
            <p>Card body content</p>
          </CardContent>
          <CardFooter>
            <button>Action Button</button>
          </CardFooter>
        </Card>
      )

      expect(screen.getByTestId('full-card')).toBeInTheDocument()
      expect(screen.getByText('Card Title')).toBeInTheDocument()
      expect(screen.getByText('Card body content')).toBeInTheDocument()
      expect(screen.getByText('Action Button')).toBeInTheDocument()
    })
  })
})
