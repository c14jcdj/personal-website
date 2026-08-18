import { render, screen } from '@testing-library/react'
import { describe, it, expect } from 'vitest'
import Leadership from './Leadership'
import { leadership } from '../data/content'

describe('Leadership', () => {
  it('renders heading and all points', () => {
    render(<Leadership />)
    expect(screen.getByRole('heading', { name: leadership.heading })).toBeInTheDocument()
    for (const p of leadership.points) expect(screen.getByText(p)).toBeInTheDocument()
  })
})
