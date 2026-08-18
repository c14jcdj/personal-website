import { leadership } from '../data/content'

export default function Leadership() {
  return (
    <section id="leadership" className="mx-auto max-w-6xl px-6 py-20">
      <h2 className="font-display text-4xl">{leadership.heading}</h2>
      <p className="mt-6 max-w-2xl leading-relaxed text-muted">{leadership.body}</p>
      <ul className="mt-8 grid max-w-4xl gap-4 sm:grid-cols-2">
        {leadership.points.map((point) => (
          <li
            key={point}
            className="flex items-start gap-3 rounded-2xl border border-sand bg-white p-5 text-sm leading-relaxed text-muted shadow-sm"
          >
            <span aria-hidden className="mt-0.5 font-semibold text-burgundy">
              ✓
            </span>
            {point}
          </li>
        ))}
      </ul>
    </section>
  )
}
