import { render, screen } from '@testing-library/react'
import Home from '@/app/page'

describe('Home Page', () => {
  it('renders the homepage without crashing', () => {
    render(<Home />)
    expect(screen.getByRole('main')).toBeInTheDocument()
  })

  it('displays the main heading', () => {
    render(<Home />)
    expect(screen.getByText(/Master Math Competitions with/i)).toBeInTheDocument()
    expect(screen.getByText('MathChamp')).toBeInTheDocument()
  })

  it('shows the hero section with call-to-action buttons', () => {
    render(<Home />)
    expect(screen.getByText('Start Learning Free')).toBeInTheDocument()
    expect(screen.getByText('View Demo')).toBeInTheDocument()
  })

  it('displays the main features section', () => {
    render(<Home />)
    expect(screen.getByText('Everything You Need to Excel')).toBeInTheDocument()
    expect(screen.getByText('Adaptive Learning')).toBeInTheDocument()
    expect(screen.getByText('Gamification')).toBeInTheDocument()
    expect(screen.getByText('Progress Tracking')).toBeInTheDocument()
  })

  it('shows competition support section', () => {
    render(<Home />)
    expect(screen.getByText('Comprehensive Competition Prep')).toBeInTheDocument()
    expect(screen.getByText('AMC 8/10/12')).toBeInTheDocument()
    expect(screen.getByText('AIME')).toBeInTheDocument()
    expect(screen.getByText('MathCounts')).toBeInTheDocument()
    expect(screen.getByText('USAMO')).toBeInTheDocument()
  })

  it('displays the final call-to-action section', () => {
    render(<Home />)
    expect(screen.getByText('Ready to Start Your Math Journey?')).toBeInTheDocument()
    expect(screen.getByText('Get Started Free')).toBeInTheDocument()
    expect(screen.getByText('Learn More')).toBeInTheDocument()
  })
})
