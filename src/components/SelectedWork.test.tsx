import { render, screen } from '@testing-library/react'
import { describe, it, expect } from 'vitest'
import SelectedWork from './SelectedWork'
import { profile, projects } from '../data/content'

describe('SelectedWork', () => {
  it('renders a numbered row per project with intro', () => {
    render(<SelectedWork />)
    for (const p of projects) expect(screen.getByText(p.title)).toBeInTheDocument()
    expect(screen.getByText('01')).toBeInTheDocument()
    expect(screen.getByText('03')).toBeInTheDocument()
    expect(screen.getByText(/selection of projects/i)).toBeInTheDocument()
  })

  it('shows a screenshot per project', () => {
    render(<SelectedWork />)
    expect(screen.getAllByRole('img')).toHaveLength(projects.length)
  })

  it('marks in-development work with a badge', () => {
    render(<SelectedWork />)
    expect(screen.getByText(/in development/i)).toBeInTheDocument()
  })

  it('links out only for projects with an href', () => {
    render(<SelectedWork />)
    const ctaLinks = screen.getAllByRole('link', {
      name: /view (case study|project)/i,
    })
    expect(ctaLinks).toHaveLength(projects.filter((p) => p.href).length)
  })

  it('links to all projects on GitHub', () => {
    render(<SelectedWork />)
    expect(
      screen.getByRole('link', { name: /view all projects on github/i }),
    ).toHaveAttribute('href', profile.github)
  })
})
