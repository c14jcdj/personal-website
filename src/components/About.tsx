import { about, experience, profile } from '../data/content'

export default function About() {
  return (
    <section id="about" className="border-t border-sand bg-white/60">
      <div className="mx-auto max-w-6xl px-6 py-20">
        <h2 className="font-display text-4xl">{about.heading}</h2>
        <p className="mt-6 max-w-2xl leading-relaxed text-muted">{about.bio}</p>
        <div className="mt-12 space-y-10 border-l-2 border-sand pl-6">
          {experience.map((entry) => (
            <div key={entry.company} className="relative">
              <span
                aria-hidden
                className="absolute -left-[31px] top-1.5 h-3 w-3 rounded-full bg-burgundy"
              />
              <h3 className="text-lg font-semibold">{entry.company}</h3>
              <ul className="mt-1 space-y-0.5">
                {entry.roles.map((role) => (
                  <li key={role.title + role.period} className="text-sm text-muted">
                    {role.title} — {role.period}
                  </li>
                ))}
              </ul>
              <ul className="mt-3 list-disc space-y-1.5 pl-5 text-sm leading-relaxed text-muted">
                {entry.highlights.map((h) => (
                  <li key={h}>{h}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <a
          href={profile.resumeHref}
          download
          className="mt-12 inline-block rounded-lg bg-burgundy px-5 py-2.5 text-sm font-medium text-white transition-opacity hover:opacity-90 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-burgundy"
        >
          Download resume
        </a>
      </div>
    </section>
  )
}
