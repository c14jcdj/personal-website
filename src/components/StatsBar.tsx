import { stats, type Stat } from '../data/content'

function StatIcon({ icon }: { icon: Stat['icon'] }) {
  const paths: Record<Stat['icon'], React.ReactNode> = {
    code: (
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M6.75 7.5 3 11.25l3.75 3.75m10.5-7.5L21 11.25l-3.75 3.75M14.25 4.5l-4.5 15"
      />
    ),
    people: (
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M15 19.128a9.38 9.38 0 0 0 2.625.372 9.337 9.337 0 0 0 4.121-.952 4.125 4.125 0 0 0-7.533-2.493M15 19.128v-.003c0-1.113-.285-2.16-.786-3.07M15 19.128v.106A12.318 12.318 0 0 1 8.624 21c-2.331 0-4.512-.645-6.374-1.766l-.001-.109a6.375 6.375 0 0 1 11.964-3.07M12 6.375a3.375 3.375 0 1 1-6.75 0 3.375 3.375 0 0 1 6.75 0Zm8.25 2.25a2.625 2.625 0 1 1-5.25 0 2.625 2.625 0 0 1 5.25 0Z"
      />
    ),
    shield: (
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M9 12.75 11.25 15 15 9.75m-3-7.036A11.959 11.959 0 0 1 3.598 6 11.99 11.99 0 0 0 3 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285Z"
      />
    ),
  }
  return (
    <svg
      aria-hidden
      viewBox="0 0 24 24"
      fill="none"
      strokeWidth={1.5}
      className="h-8 w-8 stroke-accent"
    >
      {paths[icon]}
    </svg>
  )
}

export default function StatsBar() {
  return (
    <section className="border-t border-sand">
      <div className="mx-auto grid max-w-6xl grid-cols-1 divide-y divide-sand px-6 py-10 sm:grid-cols-3 sm:divide-x sm:divide-y-0">
        {stats.map((stat) => (
          <div key={stat.label} className="flex items-center gap-4 px-6 py-4">
            <StatIcon icon={stat.icon} />
            <div>
              <p className="font-display text-2xl">{stat.value}</p>
              <p className="text-sm text-muted">{stat.label}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
