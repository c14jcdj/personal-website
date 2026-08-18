import Image from 'next/image'
import { profile } from '../data/content'

export default function Hero() {
  return (
    <section id="top" className="relative overflow-hidden">
      <div className="mx-auto max-w-6xl px-6 md:min-h-[660px]">
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
      <div className="relative mt-8 md:absolute md:inset-y-0 md:right-0 md:mt-0 md:w-[48%]">
        <svg
          aria-hidden
          viewBox="0 0 640 900"
          preserveAspectRatio="none"
          className="absolute inset-0 h-full w-full"
        >
          <path
            fill="#d7e0eb"
            d="M 380 -60
               C 220 -70, 90 30, 70 170
               C 52 300, 130 370, 100 480
               C 72 580, 20 640, 60 740
               C 105 850, 260 905, 420 900
               L 640 895
               L 640 60
               C 640 -30, 520 -50, 380 -60 Z"
          />
          <path
            fill="#dcd4c2"
            d="M 640 240
               C 555 260, 500 350, 535 450
               C 568 545, 505 640, 550 745
               C 585 830, 640 900, 640 900
               L 640 240 Z"
          />
        </svg>
        <Image
          src={profile.headshot}
          alt={`Portrait of ${profile.name}`}
          width={1100}
          height={1100}
          priority
          className="relative h-[440px] w-full object-cover object-top md:h-full [mask-image:linear-gradient(to_top,transparent_0%,black_4%)]"
        />
      </div>
    </section>
  )
}
