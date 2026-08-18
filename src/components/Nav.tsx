import { profile } from '../data/content'

const links = [
  { label: 'Work', href: '#work' },
  { label: 'About', href: '#about' },
  { label: 'Leadership', href: '#leadership' },
  { label: 'Contact', href: '#contact' },
]

export default function Nav() {
  return (
    <header className="sticky top-0 z-20 border-b border-sand bg-cream/90 backdrop-blur">
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
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
                className="border-b-2 border-transparent pb-1 text-ink transition-colors hover:border-burgundy hover:text-burgundy focus-visible:outline-2 focus-visible:outline-burgundy"
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
