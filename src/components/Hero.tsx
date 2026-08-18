import Image from 'next/image'
import { profile } from '../data/content'

export default function Hero() {
  return (
    <section id="top" className="relative overflow-hidden">
      <div className="mx-auto max-w-6xl px-6 md:min-h-[560px]">
        <div className="max-w-xl pt-10 md:py-24">
          <p className="text-xs font-semibold uppercase tracking-[0.22em] text-muted">
            {profile.eyebrow.split('|')[0].trim()}
            <span className="mx-2 text-accent">|</span>
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
            className="mt-10 inline-flex items-center gap-2 text-sm font-semibold text-ink transition-colors hover:text-accent focus-visible:outline-2 focus-visible:outline-accent"
          >
            <span aria-hidden>↓</span> Explore my work
          </a>
        </div>
      </div>
      <div className="relative mt-8 md:absolute md:inset-y-0 md:right-0 md:mt-0 md:w-[44%]">
        <div
          aria-hidden
          className="absolute left-[6%] right-[2%] top-[4%] bottom-[6%] rotate-[-6deg] bg-[#d7e0eb] [border-radius:58%_42%_55%_45%/52%_58%_42%_48%]"
        />
        <div
          aria-hidden
          className="absolute -right-[14%] bottom-[8%] top-[38%] w-[45%] rotate-[14deg] bg-[#dcd4c2] [border-radius:52%_48%_44%_56%/60%_46%_54%_40%]"
        />
        <Image
          src={profile.headshot}
          alt={`Portrait of ${profile.name}`}
          width={1100}
          height={1100}
          priority
          className="relative h-[440px] w-full object-cover object-top md:h-full [mask-image:linear-gradient(to_top,transparent_0%,black_12%)]"
        />
      </div>
    </section>
  )
}
