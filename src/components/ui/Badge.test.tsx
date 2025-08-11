import { render, screen } from '@testing-library/react'
import { Badge } from './Badge'

describe('Badge Component', () => {
  it('renders badge with children', () => {
    render(<Badge>Success</Badge>)
    expect(screen.getByText('Success')).toBeInTheDocument()
  })

  it('applies neutral variant styles by default', () => {
    render(<Badge>Default Badge</Badge>)
    const badge = screen.getByText('Default Badge')
    expect(badge).toHaveClass('bg-gray-100', 'text-gray-800')
  })

  it('applies success variant styles', () => {
    render(<Badge variant="success">Success Badge</Badge>)
    const badge = screen.getByText('Success Badge')
    expect(badge).toHaveClass('bg-green-100', 'text-green-800')
  })

  it('applies warning variant styles', () => {
    render(<Badge variant="warning">Warning Badge</Badge>)
    const badge = screen.getByText('Warning Badge')
    expect(badge).toHaveClass('bg-yellow-100', 'text-yellow-800')
  })

  it('applies error variant styles', () => {
    render(<Badge variant="error">Error Badge</Badge>)
    const badge = screen.getByText('Error Badge')
    expect(badge).toHaveClass('bg-red-100', 'text-red-800')
  })

  it('applies info variant styles', () => {
    render(<Badge variant="info">Info Badge</Badge>)
    const badge = screen.getByText('Info Badge')
    expect(badge).toHaveClass('bg-blue-100', 'text-blue-800')
  })

  it('applies different sizes correctly', () => {
    const { rerender } = render(<Badge size="sm">Small Badge</Badge>)
    let badge = screen.getByText('Small Badge')
    expect(badge).toHaveClass('px-2', 'py-0.5', 'text-xs')

    rerender(<Badge size="md">Medium Badge</Badge>)
    badge = screen.getByText('Medium Badge')
    expect(badge).toHaveClass('px-2.5', 'py-1', 'text-sm')

    rerender(<Badge size="lg">Large Badge</Badge>)
    badge = screen.getByText('Large Badge')
    expect(badge).toHaveClass('px-3', 'py-1.5', 'text-base')
  })

  it('accepts custom className', () => {
    render(<Badge className="custom-class">Custom Badge</Badge>)
    const badge = screen.getByText('Custom Badge')
    expect(badge).toHaveClass('custom-class')
  })

  it('spreads additional props', () => {
    render(<Badge data-testid="test-badge">Test Badge</Badge>)
    expect(screen.getByTestId('test-badge')).toBeInTheDocument()
  })
})
