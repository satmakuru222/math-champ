import { render, screen } from '@testing-library/react'
import { Header } from './Header'

// Mock Next.js Link component
jest.mock('next/link', () => {
  const MockedLink = ({
    children,
    href,
    ...props
  }: {
    children: React.ReactNode
    href: string
    [key: string]: unknown
  }) => (
    <a href={href} {...props}>
      {children}
    </a>
  )
  MockedLink.displayName = 'MockedLink'
  return MockedLink
})

describe('Header Component', () => {
  it('renders the header with logo and navigation', () => {
    render(<Header />)

    expect(screen.getByRole('banner')).toBeInTheDocument()
    expect(screen.getByText('MathChamp')).toBeInTheDocument()
  })

  it('displays navigation links', () => {
    render(<Header />)

    expect(screen.getByText('Practice')).toBeInTheDocument()
    expect(screen.getByText('Competitions')).toBeInTheDocument()
    expect(screen.getByText('Study Groups')).toBeInTheDocument()
    expect(screen.getByText('Dashboard')).toBeInTheDocument()
  })

  it('displays authentication buttons', () => {
    render(<Header />)

    expect(screen.getByText('Sign In')).toBeInTheDocument()
    expect(screen.getByText('Get Started')).toBeInTheDocument()
  })

  it('has correct logo link', () => {
    render(<Header />)

    const logoLink = screen.getByText('MathChamp').closest('a')
    expect(logoLink).toHaveAttribute('href', '/')
  })

  it('navigation links have correct hrefs', () => {
    render(<Header />)

    const practiceLink = screen.getByText('Practice').closest('a')
    expect(practiceLink).toHaveAttribute('href', '/practice')

    const competitionsLink = screen.getByText('Competitions').closest('a')
    expect(competitionsLink).toHaveAttribute('href', '/competitions')

    const studyGroupsLink = screen.getByText('Study Groups').closest('a')
    expect(studyGroupsLink).toHaveAttribute('href', '/study-groups')

    const dashboardLink = screen.getByText('Dashboard').closest('a')
    expect(dashboardLink).toHaveAttribute('href', '/dashboard')
  })
})
