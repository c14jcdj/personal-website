import { render, screen } from '@testing-library/react'
import { describe, it, expect } from 'vitest'
import Page from './page'

describe('page', () => {
  it('assembles all sections in order', () => {
    render(<Page />)
    for (const id of ['top', 'work', 'about', 'leadership', 'contact']) {
      expect(document.getElementById(id)).toBeInTheDocument()
    }
    expect(screen.getByRole('heading', { level: 1 })).toBeInTheDocument()
  })
})
