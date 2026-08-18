import Image from 'next/image'
import { projects } from '../data/content'

export default function SelectedWork() {
  return (
    <section id="work" className="mx-auto max-w-6xl px-6 py-20">
      <h2 className="font-display text-4xl">Selected Work</h2>
      <div className="mt-8 grid gap-6 md:grid-cols-3">
        {projects.map((project) => (
          <article
            key={project.title}
            className="flex flex-col overflow-hidden rounded-2xl border border-sand bg-white shadow-sm"
          >
            <Image
              src={project.image}
              alt={`Screenshot of ${project.title}`}
              width={720}
              height={432}
              className="h-40 w-full border-b border-sand object-cover object-top"
            />
            <div className="flex flex-1 flex-col gap-3 p-6">
              <p className="text-xs font-semibold uppercase tracking-wide text-muted">
                {project.context}
              </p>
              <h3 className="text-lg font-semibold">{project.title}</h3>
              <ul className="flex flex-wrap gap-2">
                {project.tags.map((tag) => (
                  <li
                    key={tag}
                    className="rounded-full border border-sand bg-cream px-2.5 py-0.5 text-xs font-medium"
                  >
                    {tag}
                  </li>
                ))}
              </ul>
              <p className="text-sm leading-relaxed text-muted">{project.description}</p>
              {project.href && (
                <a
                  href={project.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-auto pt-2 text-sm font-semibold text-accent hover:underline focus-visible:outline-2 focus-visible:outline-accent"
                >
                  View project →
                </a>
              )}
            </div>
          </article>
        ))}
      </div>
    </section>
  )
}
