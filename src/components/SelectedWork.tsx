import Image from 'next/image'
import { profile, projects, workIntro } from '../data/content'

export default function SelectedWork() {
  return (
    <section id="work" className="mx-auto max-w-7xl px-6 pb-20 md:-mt-[78px]">
      <div className="flex items-center gap-6">
        <h2 className="shrink-0 font-display text-4xl">Selected Work</h2>
        <div aria-hidden className="flex items-center">
          <div className="h-px w-40 bg-[#d9a184]" />
          <div className="h-1.5 w-1.5 rounded-full bg-[#d9a184]" />
        </div>
      </div>
      <p className="mt-5 max-w-lg leading-relaxed text-muted">{workIntro}</p>

      <div className="mt-4 divide-y divide-ink/10 border-b border-ink/10">
        {projects.map((project, i) => {
          const imageFirst = i % 2 === 0
          return (
            <article
              key={project.title}
              className="grid items-center gap-10 py-12 md:grid-cols-2 md:gap-16 md:py-16"
            >
              <div className={imageFirst ? '' : 'md:order-2'}>
                <Image
                  src={project.image}
                  alt={`Screenshot of ${project.title}`}
                  width={720}
                  height={432}
                  className="h-auto w-full rounded-2xl border border-sand shadow-md"
                />
              </div>
              <div className={imageFirst ? '' : 'md:order-1'}>
                <div className="flex items-center gap-5">
                  <span className="font-display text-4xl text-accent">
                    {String(i + 1).padStart(2, '0')}
                  </span>
                  {project.badge ? (
                    <span className="rounded-full bg-[#8f8963] px-3.5 py-1 text-xs font-semibold uppercase tracking-wide text-cream">
                      {project.badge}
                    </span>
                  ) : (
                    <div aria-hidden className="h-px w-14 bg-accent/40" />
                  )}
                </div>
                <h3 className="mt-4 font-display text-3xl md:text-4xl">
                  {project.title}
                </h3>
                <p className="mt-4 max-w-md leading-relaxed text-muted">
                  {project.description}
                </p>
                <ul className="mt-6 flex flex-wrap gap-3">
                  {project.tags.map((tag) => (
                    <li
                      key={tag}
                      className="rounded-lg bg-sand/70 px-3.5 py-1.5 text-sm font-medium"
                    >
                      {tag}
                    </li>
                  ))}
                </ul>
                {project.href && (
                  <a
                    href={project.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group mt-7 inline-flex items-center gap-2 font-semibold text-accent hover:underline focus-visible:outline-2 focus-visible:outline-accent"
                  >
                    {project.cta ?? 'View project'}
                    <span
                      aria-hidden
                      className="transition-transform group-hover:translate-x-1"
                    >
                      →
                    </span>
                  </a>
                )}
              </div>
            </article>
          )
        })}
      </div>

      <p className="pt-10 text-center text-muted">
        Want to see more?{' '}
        <a
          href={profile.github}
          target="_blank"
          rel="noopener noreferrer"
          className="group inline-flex items-center gap-2 font-semibold text-accent hover:underline focus-visible:outline-2 focus-visible:outline-accent"
        >
          View all projects on GitHub
          <span aria-hidden className="transition-transform group-hover:translate-x-1">
            →
          </span>
        </a>
      </p>
    </section>
  )
}
