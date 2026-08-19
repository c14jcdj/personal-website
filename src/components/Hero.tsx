import Image from 'next/image'
import { profile } from '../data/content'

export default function Hero() {
  const [roleLine, roleTail] = profile.headline.split(' & ')
  const mottoWords = profile.motto.split(' ')
  const mottoHead = mottoWords.slice(0, -2).join(' ')
  const mottoTail = mottoWords.slice(-2).join(' ')

  return (
    <section id="top" className="relative overflow-hidden md:-mt-[61px]">
      <Image
        src="/hero-blob.png"
        alt=""
        aria-hidden
        width={1681}
        height={936}
        priority
        className="absolute bottom-[57px] left-[calc(50%-35px)] hidden h-[731px] w-[940px] max-w-none object-fill md:block"
      />
      <div className="relative mx-auto max-w-7xl px-6 md:min-h-[751px]">
        <div className="max-w-2xl pt-12 md:max-w-[min(42rem,54.5%)] md:pt-[173px] md:pb-28">
          <h1 className="font-display text-5xl leading-[1.14] md:text-[clamp(2.5rem,3.9vw,3.5rem)] md:leading-[1.16]">
            {roleLine}{' '}
            <br />
            &amp; {roleTail}
          </h1>
          <div aria-hidden className="mt-7 h-[3px] w-20 bg-accent" />
          <p className="mt-8 max-w-md text-lg leading-relaxed text-muted">
            {profile.tagline}
          </p>
          <div className="mt-10 flex flex-wrap items-center gap-x-9 gap-y-5">
            <a
              href="#work"
              className="rounded-[4px] bg-accent px-7 py-3.5 text-sm font-semibold text-cream shadow-sm transition-colors hover:bg-[#571b27] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent"
            >
              View selected work
            </a>
            <a
              href="#contact"
              className="group inline-flex items-center gap-3 border-b border-accent pb-2 text-sm font-semibold text-ink transition-colors hover:text-accent focus-visible:outline-2 focus-visible:outline-accent"
            >
              Let’s talk
              <span
                aria-hidden
                className="text-accent transition-transform group-hover:translate-x-1"
              >
                →
              </span>
            </a>
          </div>
          <div className="mt-12 flex flex-wrap items-center gap-x-4 gap-y-3">
            <span
              aria-hidden
              className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[#f3e0cd]"
            >
              <svg
                width="18"
                height="18"
                viewBox="0 0 24 24"
                fill="none"
                stroke="var(--color-accent)"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <rect x="3" y="4" width="18" height="18" rx="2" />
                <line x1="16" y1="2" x2="16" y2="6" />
                <line x1="8" y1="2" x2="8" y2="6" />
                <line x1="3" y1="10" x2="21" y2="10" />
              </svg>
            </span>
            <span className="text-[15px] font-medium">{profile.yearsNote}</span>
            <span aria-hidden className="hidden h-7 w-px bg-accent/40 sm:block" />
            <p className="font-script text-xl text-accent">
              {mottoHead}{' '}
              <span className="underline decoration-1 underline-offset-4">
                {mottoTail}
              </span>
            </p>
          </div>
        </div>
      </div>
      <div className="relative mt-8 md:absolute md:inset-y-0 md:right-0 md:mt-0 md:w-[48%] md:overflow-hidden">
        <Image
          src="/hero-blob.png"
          alt=""
          aria-hidden
          width={1681}
          height={936}
          className="absolute inset-0 h-full w-full object-fill md:hidden"
        />
        <Image
          src={profile.headshot}
          alt={`Portrait of ${profile.name}`}
          width={1100}
          height={1100}
          priority
          className="relative z-[1] h-[440px] w-full object-cover object-top md:absolute md:bottom-[57px] md:left-1/2 md:h-[670px] md:w-auto md:max-w-none md:-translate-x-1/2"
        />
      </div>
    </section>
  )
}
