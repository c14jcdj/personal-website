import { render, screen } from '@testing-library/react'
import { describe, it, expect } from 'vitest'
import Contact from './Contact'

describe('Contact', () => {
  it('has email, LinkedIn, and GitHub links and no phone number', () => {
    const { container } = render(<Contact />)
    expect(screen.getByRole('link', { name: /email/i })).toHaveAttribute(
      'href',
      'mailto:chermainezimmerman@gmail.com',
    )
    expect(screen.getByRole('link', { name: /linkedin/i })).toHaveAttribute(
      'href',
      expect.stringContaining('linkedin.com/in/chermainez'),
    )
    expect(screen.getByRole('link', { name: /github/i })).toHaveAttribute(
      'href',
      expect.stringContaining('github.com/c14jcdj'),
    )
    expect(container.textContent).not.toMatch(/530/)
  })
})
