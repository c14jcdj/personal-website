import { render, screen } from '@testing-library/react'
import { describe, it, expect } from 'vitest'
import About from './About'
import { experience } from '../data/content'

describe('About', () => {
  it('renders every employer and a resume download', () => {
    render(<About />)
    for (const e of experience) expect(screen.getByText(e.company)).toBeInTheDocument()
    expect(screen.getByRole('link', { name: /download resume/i })).toHaveAttribute(
      'href',
      '/resume.pdf',
    )
  })

  it('shows role progression at Collective Voice', () => {
    render(<About />)
    expect(screen.getAllByText(/lead front end developer/i).length).toBeGreaterThanOrEqual(1)
    expect(screen.getByText(/senior frontend developer/i)).toBeInTheDocument()
  })
})
