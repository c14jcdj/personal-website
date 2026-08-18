import { render, screen } from '@testing-library/react'
import { describe, it, expect } from 'vitest'
import Hero from './Hero'

describe('Hero', () => {
  it('renders eyebrow, headline, chips, and headshot', () => {
    render(<Hero />)
    expect(screen.getByText(/senior frontend engineer/i)).toBeInTheDocument()
    expect(
      screen.getByRole('heading', { level: 1, name: /thoughtful, scalable web experiences/i }),
    ).toBeInTheDocument()
    expect(screen.getByText('Angular')).toBeInTheDocument()
    expect(screen.getByRole('img', { name: /chermaine zimmerman/i })).toBeInTheDocument()
    expect(screen.getByRole('link', { name: /explore my work/i })).toHaveAttribute('href', '#work')
  })
})
