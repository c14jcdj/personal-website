import Image from 'next/image'
import { profile } from '../data/content'

export default function Hero() {
  return (
    <section id="top" className="relative overflow-hidden">
      <div className="mx-auto max-w-6xl px-6 md:min-h-[560px]">
        <div className="max-w-xl pt-10 md:py-24">
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
      </div>
      <div className="mt-8 md:absolute md:inset-y-0 md:right-0 md:mt-0 md:w-[44%]">
        <Image
          src={profile.headshot}
          alt={`Portrait of ${profile.name}`}
          width={1100}
          height={1100}
          priority
          className="h-[440px] w-full object-cover object-top md:h-full [mask-image:linear-gradient(to_left,black_78%,transparent),linear-gradient(to_top,black_88%,transparent)] [mask-composite:intersect] [-webkit-mask-composite:source-in]"
        />
      </div>
    </section>
  )
}
