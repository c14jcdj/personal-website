import Image from 'next/image'
import { profile } from '../data/content'

export default function Hero() {
  return (
    <section id="top" className="mx-auto grid max-w-6xl items-center gap-10 px-6 pt-12 md:grid-cols-[1.1fr_1fr] md:gap-6 md:pt-0">
      <div className="order-2 md:order-1 md:py-20">
        <p className="text-xs font-semibold uppercase tracking-[0.22em] text-muted">
          {profile.eyebrow.split('|')[0].trim()}
          <span className="mx-2 text-burgundy">|</span>
          {profile.eyebrow.split('|')[1].trim()}
        </p>
        <h1 className="mt-5 font-display text-5xl leading-[1.08] md:text-6xl">
          {profile.headline}
        </h1>
        <p className="mt-6 max-w-md text-lg leading-relaxed text-muted">
          {profile.tagline}
        </p>
        <ul className="mt-8 flex flex-wrap gap-3">
          {profile.chips.map((chip) => (
            <li
              key={chip}
              className="rounded-full border border-sand bg-white px-4 py-1.5 text-sm font-medium shadow-sm"
            >
              {chip}
            </li>
          ))}
        </ul>
        <a
          href="#work"
          className="mt-10 inline-flex items-center gap-2 text-sm font-semibold text-ink transition-colors hover:text-burgundy focus-visible:outline-2 focus-visible:outline-burgundy"
        >
          <span aria-hidden>↓</span> Explore my work
        </a>
      </div>
      <div className="order-1 md:order-2">
        <Image
          src={profile.headshot}
          alt={`Portrait of ${profile.name}`}
          width={880}
          height={880}
          priority
          className="h-auto w-full object-cover [mask-image:linear-gradient(to_bottom,black_84%,transparent)]"
        />
      </div>
    </section>
  )
}
