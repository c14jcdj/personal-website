import { render, screen } from '@testing-library/react'
import { describe, it, expect } from 'vitest'
import Hero from './Hero'

describe('Hero', () => {
  it('renders headline, tagline, CTAs, and headshot', () => {
    render(<Hero />)
    expect(
      screen.getByRole('heading', { level: 1, name: /senior frontend engineer & tech lead/i }),
    ).toBeInTheDocument()
    expect(
      screen.getByText(/I build thoughtful, scalable web experiences/i),
    ).toBeInTheDocument()
    expect(screen.getByRole('link', { name: /view selected work/i })).toHaveAttribute(
      'href',
      '#work',
    )
    expect(screen.getByRole('link', { name: /let’s talk/i })).toHaveAttribute('href', '#contact')
    expect(screen.getByText(/11 years building for the web/i)).toBeInTheDocument()
    expect(
      screen.getByText(/building with clarity, leading/i),
    ).toBeInTheDocument()
    expect(screen.getByRole('img', { name: /chermaine zimmerman/i })).toBeInTheDocument()
  })
})
