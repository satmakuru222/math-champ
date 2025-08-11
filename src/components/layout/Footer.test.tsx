import { render, screen } from '@testing-library/react'
import { Footer } from './Footer'

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

describe('Footer Component', () => {
  it('renders the footer with brand and description', () => {
    render(<Footer />)

    expect(screen.getByRole('contentinfo')).toBeInTheDocument()
    expect(screen.getByText('MathChamp')).toBeInTheDocument()
    expect(screen.getByText(/Preparing students for math competitions/i)).toBeInTheDocument()
  })

  it('displays platform links section', () => {
    render(<Footer />)

    expect(screen.getByText('Platform')).toBeInTheDocument()
    expect(screen.getByText('Practice')).toBeInTheDocument()
    expect(screen.getByText('Competitions')).toBeInTheDocument()
    expect(screen.getByText('Study Groups')).toBeInTheDocument()
    expect(screen.getByText('Dashboard')).toBeInTheDocument()
  })

  it('displays resources links section', () => {
    render(<Footer />)

    expect(screen.getByText('Resources')).toBeInTheDocument()
    expect(screen.getByText('Help Center')).toBeInTheDocument()
    expect(screen.getByText('Blog')).toBeInTheDocument()
    expect(screen.getByText('Tutorials')).toBeInTheDocument()
    expect(screen.getByText('API Docs')).toBeInTheDocument()
  })

  it('displays company links section', () => {
    render(<Footer />)

    expect(screen.getByText('Company')).toBeInTheDocument()
    expect(screen.getByText('About')).toBeInTheDocument()
    expect(screen.getByText('Privacy')).toBeInTheDocument()
    expect(screen.getByText('Terms')).toBeInTheDocument()
    expect(screen.getByText('Contact')).toBeInTheDocument()
  })

  it('displays copyright with current year', () => {
    render(<Footer />)

    const currentYear = new Date().getFullYear()
    expect(
      screen.getByText(new RegExp(`© ${currentYear} MathChamp. All rights reserved.`))
    ).toBeInTheDocument()
  })

  it('has correct link hrefs', () => {
    render(<Footer />)

    const practiceLink = screen.getByText('Practice').closest('a')
    expect(practiceLink).toHaveAttribute('href', '/practice')

    const helpLink = screen.getByText('Help Center').closest('a')
    expect(helpLink).toHaveAttribute('href', '/help')

    const aboutLink = screen.getByText('About').closest('a')
    expect(aboutLink).toHaveAttribute('href', '/about')
  })
})
