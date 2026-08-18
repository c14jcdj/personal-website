import { render, screen } from '@testing-library/react'
import { describe, it, expect } from 'vitest'
import SelectedWork from './SelectedWork'
import { projects } from '../data/content'

describe('SelectedWork', () => {
  it('renders a card per project', () => {
    render(<SelectedWork />)
    for (const p of projects) expect(screen.getByText(p.title)).toBeInTheDocument()
  })

  it('shows a screenshot per project', () => {
    render(<SelectedWork />)
    expect(screen.getAllByRole('img')).toHaveLength(projects.length)
  })

  it('links out only for projects with an href', () => {
    render(<SelectedWork />)
    const links = screen.getAllByRole('link', { name: /view project/i })
    expect(links).toHaveLength(projects.filter((p) => p.href).length)
  })
})
