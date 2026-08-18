import { describe, it, expect } from 'vitest'
import { profile, projects, experience, stats } from './content'

describe('content', () => {
  it('has core profile data and no phone number anywhere', () => {
    expect(profile.name).toBe('Chermaine Zimmerman')
    expect(JSON.stringify({ profile, projects, experience })).not.toMatch(/530.?400.?3329|\(\d{3}\)\s?\d{3}/)
  })

  it('has exactly 3 real projects and 3 stats', () => {
    expect(projects).toHaveLength(3)
    expect(projects.map(p => p.title)).toContain('Shop The Theme')
    expect(stats).toHaveLength(3)
  })

  it('covers all four employers in order', () => {
    expect(experience.map(e => e.company)).toEqual([
      'Rakuten Advertising',
      'Collective Voice',
      'POPSUGAR',
      'Viggle Inc.',
    ])
  })
})
