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
          <div aria-hidden className="mt-6 h-[3px] w-16 bg-accent" />
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
      <div className="relative mt-8 md:absolute md:inset-y-0 md:right-0 md:mt-0 md:w-[48%] md:overflow-hidden">
        <svg
          aria-hidden
          viewBox="0 0 640 900"
          preserveAspectRatio="none"
          className="absolute inset-0 h-full w-full"
        >
          <path
            fill="#ecd8c6"
            d="M 330 -40
               C 180 -45, 62 90, 56 240
               C 51 370, 122 440, 96 560
               C 78 655, 142 748, 265 764
               C 405 782, 532 706, 546 574
               C 558 462, 498 402, 518 288
               C 537 150, 468 -35, 330 -40 Z"
          />
          <path
            fill="#cdc5a3"
            d="M 640 170
               C 556 195, 516 280, 543 372
               C 567 455, 508 525, 539 615
               C 564 690, 640 725, 640 725
               L 640 170 Z"
          />
        </svg>
        <Image
          src={profile.headshot}
          alt={`Portrait of ${profile.name}`}
          width={1100}
          height={1100}
          priority
          className="relative z-[1] h-[440px] w-full object-cover object-top md:absolute md:bottom-[-24%] md:left-1/2 md:h-auto md:w-[94%] md:-translate-x-1/2"
        />
      </div>
    </section>
  )
}
