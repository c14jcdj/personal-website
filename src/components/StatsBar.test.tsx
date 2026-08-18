import { render, screen } from '@testing-library/react'
import { describe, it, expect } from 'vitest'
import StatsBar from './StatsBar'
import { stats } from '../data/content'

describe('StatsBar', () => {
  it('renders all three stats', () => {
    render(<StatsBar />)
    for (const s of stats) {
      expect(screen.getByText(s.value)).toBeInTheDocument()
      expect(screen.getByText(s.label)).toBeInTheDocument()
    }
  })
})
