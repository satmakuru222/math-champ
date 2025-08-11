import { render, screen, fireEvent } from '@testing-library/react'
import { Input } from './Input'

describe('Input Component', () => {
  it('renders input with label', () => {
    render(<Input label="Student Name" />)
    expect(screen.getByLabelText('Student Name')).toBeInTheDocument()
    expect(screen.getByText('Student Name')).toBeInTheDocument()
  })

  it('renders input without label', () => {
    render(<Input placeholder="Enter text" />)
    const input = screen.getByPlaceholderText('Enter text')
    expect(input).toBeInTheDocument()
    expect(screen.queryByText('label')).not.toBeInTheDocument()
  })

  it('displays helper text', () => {
    render(<Input label="Email" helperText="Enter your email address" />)
    expect(screen.getByText('Enter your email address')).toBeInTheDocument()
  })

  it('displays error message and applies error styles', () => {
    render(<Input label="Email" variant="error" errorMessage="Invalid email" />)

    const input = screen.getByLabelText('Email')
    const errorMessage = screen.getByText('Invalid email')

    expect(input).toHaveClass('border-red-300', 'bg-red-50')
    expect(input).toHaveAttribute('aria-invalid', 'true')
    expect(errorMessage).toBeInTheDocument()
    expect(errorMessage).toHaveAttribute('role', 'alert')
  })

  it('applies success variant styles', () => {
    render(<Input label="Name" variant="success" />)
    const input = screen.getByLabelText('Name')
    expect(input).toHaveClass('border-green-300', 'bg-green-50')
  })

  it('applies different sizes correctly', () => {
    const { rerender } = render(<Input label="Test" size="sm" />)
    let input = screen.getByLabelText('Test')
    expect(input).toHaveClass('px-3', 'py-1.5', 'text-sm')

    rerender(<Input label="Test" size="md" />)
    input = screen.getByLabelText('Test')
    expect(input).toHaveClass('px-4', 'py-2', 'text-base')

    rerender(<Input label="Test" size="lg" />)
    input = screen.getByLabelText('Test')
    expect(input).toHaveClass('px-4', 'py-3', 'text-lg')
  })

  it('handles left and right icons', () => {
    const LeftIcon = () => <span data-testid="left-icon">L</span>
    const RightIcon = () => <span data-testid="right-icon">R</span>

    render(<Input label="Search" leftIcon={<LeftIcon />} rightIcon={<RightIcon />} />)

    const input = screen.getByLabelText('Search')
    expect(screen.getByTestId('left-icon')).toBeInTheDocument()
    expect(screen.getByTestId('right-icon')).toBeInTheDocument()
    expect(input).toHaveClass('pl-10', 'pr-10')
  })

  it('handles user input', () => {
    const handleChange = jest.fn()
    render(<Input label="Name" onChange={handleChange} />)

    const input = screen.getByLabelText('Name')
    fireEvent.change(input, { target: { value: 'John Doe' } })

    expect(handleChange).toHaveBeenCalledTimes(1)
    expect(input).toHaveValue('John Doe')
  })

  it('can be disabled', () => {
    render(<Input label="Disabled" disabled />)
    const input = screen.getByLabelText('Disabled')
    expect(input).toBeDisabled()
  })

  it('associates helper text with input via aria-describedby', () => {
    render(<Input label="Email" helperText="Enter valid email" />)

    const input = screen.getByLabelText('Email')
    const helperText = screen.getByText('Enter valid email')

    expect(input).toHaveAccessibleDescription()
    expect(helperText).toHaveAttribute('id')
  })

  it('prioritizes error message over helper text', () => {
    render(
      <Input
        label="Email"
        helperText="Enter valid email"
        errorMessage="Email is required"
        variant="error"
      />
    )

    expect(screen.getByText('Email is required')).toBeInTheDocument()
    expect(screen.queryByText('Enter valid email')).not.toBeInTheDocument()
  })
})
