'use client'

import { useEffect, useState } from 'react'
import { profile } from '../data/content'

const links = [
  { label: 'Work', href: '#work' },
  { label: 'About', href: '#about' },
  { label: 'Leadership', href: '#leadership' },
  { label: 'Contact', href: '#contact' },
]

export default function Nav() {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header
      className={`sticky top-0 z-20 border-b transition-colors duration-300 ${
        scrolled
          ? 'border-sand bg-cream/90 backdrop-blur'
          : 'border-transparent bg-transparent'
      }`}
    >
      <nav className="relative mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        <div
          aria-hidden
          className={`absolute inset-x-6 bottom-0 h-px bg-ink/15 transition-opacity duration-300 md:right-[46%] ${
            scrolled ? 'opacity-0' : 'opacity-100'
          }`}
        />
        <a
          href="#top"
          className="font-display text-lg uppercase tracking-[0.18em]"
        >
          {profile.name}
        </a>
        <ul className="hidden gap-6 text-sm sm:flex">
          {links.map((l) => (
            <li key={l.href}>
              <a
                href={l.href}
                className="border-b-2 border-transparent pb-1 text-ink transition-colors hover:border-accent hover:text-accent focus-visible:outline-2 focus-visible:outline-accent"
              >
                {l.label}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  )
}
