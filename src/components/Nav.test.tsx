import { render, screen } from '@testing-library/react'
import { describe, it, expect } from 'vitest'
import Nav from './Nav'

describe('Nav', () => {
  it('renders wordmark and section links', () => {
    render(<Nav />)
    expect(screen.getByText(/chermaine zimmerman/i)).toBeInTheDocument()
    for (const [label, href] of [
      ['Work', '#work'],
      ['About', '#about'],
      ['Leadership', '#leadership'],
      ['Contact', '#contact'],
    ] as const) {
      expect(screen.getByRole('link', { name: label })).toHaveAttribute('href', href)
    }
  })
})
