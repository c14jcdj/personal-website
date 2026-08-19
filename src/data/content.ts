export type Profile = {
  name: string
  headline: string
  tagline: string
  yearsNote: string
  motto: string
  location: string
  email: string
  linkedin: string
  github: string
  resumeHref: string
  headshot: string
}

export type Project = {
  title: string
  tags: string[]
  description: string
  image: string
  href?: string
  cta?: string
  badge?: string
}

export type ExperienceEntry = {
  company: string
  roles: { title: string; period: string }[]
  highlights: string[]
}

export type Stat = {
  value: string
  label: string
  icon: 'code' | 'people' | 'shield'
}

export const profile: Profile = {
  name: 'Chermaine Zimmerman',
  headline: 'Senior Software Engineer & Tech Lead',
  tagline:
    'I build thoughtful, scalable web experiences and help teams do their best work.',
  yearsNote: '11 years building for the web',
  motto: 'Currently building at Rakuten Advertising.',
  location: 'San Francisco Bay Area',
  email: 'chermainezimmerman@gmail.com',
  linkedin: 'https://linkedin.com/in/chermainez',
  github: 'https://github.com/c14jcdj',
  resumeHref: '/resume.pdf',
  headshot: '/headshot-cutout.png',
}

export const projects: Project[] = [
  {
    title: 'Migration Health Command Center',
    tags: ['React', 'Recharts', 'Data Visualization'],
    description:
      'An early-warning dashboard that protects revenue during a platform migration. It compares same-weekday baselines, diagnoses root causes across seven signals, and ranks at-risk accounts in dollars.',
    image: '/projects/migration-health.jpeg',
    href: 'https://migration-health-command-center.vercel.app',
    cta: 'View case study',
  },
  {
    title: 'Shop The Theme',
    tags: ['Next.js', 'React', 'Tailwind CSS'],
    description:
      'A party-kit builder that turns a theme and budget into a curated, one-click Amazon shopping list for busy parents.',
    image: '/projects/shopthetheme.jpeg',
    href: 'https://shopthetheme.com',
  },
  {
    title: 'Porch Light',
    tags: ['Next.js', 'Postgres', 'MapLibre'],
    description:
      'A community sponsorship marketplace connecting local organizations and businesses so kids, teams, and hometown programs can thrive.',
    image: '/projects/porch-light.jpeg',
    badge: 'In development',
  },
]

export const workIntro =
  'A selection of projects that show my range, from data-heavy dashboards to consumer experiences to community platforms.'

export const experience: ExperienceEntry[] = [
  {
    company: 'Rakuten Advertising',
    roles: [{ title: 'Senior Software Engineer', period: '2026 — Present' }],
    highlights: [
      'Own and deliver scalable web features end-to-end for a global affiliate and performance marketing platform.',
      'Drive frontend architecture while collaborating across product, design, and backend teams.',
      'Built and maintain a Chrome extension used within the affiliate ecosystem, and contribute to Java services.',
    ],
  },
  {
    company: 'Collective Voice',
    roles: [
      { title: 'Lead Front End Developer', period: '2023 — 2026' },
      { title: 'Senior Frontend Developer', period: '2019 — 2023' },
      { title: 'Frontend Developer', period: '2017 — 2019' },
    ],
    highlights: [
      'Led development of creator-facing applications powering onboarding, monetization, and growth.',
      'Led the AngularJS-to-Angular migration, cutting load times by ~20-30% and improving maintainability.',
      'Built and scaled the design system and Storybook component library adopted across the organization.',
      'Owned architecture for affiliate linking, campaigns, and analytics while mentoring engineers.',
    ],
  },
  {
    company: 'POPSUGAR',
    roles: [{ title: 'Software Engineer', period: '2015 — 2017' }],
    highlights: [
      'Developed features for a large-scale content and commerce platform.',
      'Improved performance and engagement across key user surfaces.',
    ],
  },
  {
    company: 'Viggle Inc.',
    roles: [{ title: 'Lead Front End Developer', period: '2014 — 2015' }],
    highlights: ['Led frontend development for consumer-facing web applications.'],
  },
]

export type EducationEntry = {
  school: string
  credential: string
  period: string
}

export const education: EducationEntry[] = [
  {
    school: 'Dev Bootcamp',
    credential: 'Web Development Program',
    period: '2014',
  },
  {
    school: 'UC Davis',
    credential: 'M.S. Forensic Science: Computer Accident Reconstruction',
    period: '2003 — 2006',
  },
  {
    school: 'UC Davis',
    credential: 'B.S. Neurobiology and Behavior',
    period: '1999 — 2003',
  },
]

export const leadership = {
  heading: 'Leadership',
  body: 'Engineering leadership has run through every chapter of my career, from leading migrations and design-system adoption to growing the engineers around me.',
  points: [
    'Mentored engineers and raised the bar on code quality, performance, and development standards.',
    'Led the AngularJS-to-Angular migration that modernized a high-traffic platform.',
    'Partnered with design to scale a design system and Storybook library org-wide.',
    'Owned cross-functional delivery with product, design, and backend teams.',
  ],
}

export const stats: Stat[] = [
  { value: '11+', label: 'Years building for the web', icon: 'code' },
  { value: '7+', label: 'Years leading frontend teams', icon: 'people' },
  { value: '100%', label: 'Commitment to quality & accessibility', icon: 'shield' },
]

export const about = {
  heading: 'About',
  bio: 'I’m a senior software engineer with 11 years of experience building scalable web applications in the creator economy, affiliate marketing, and social commerce. I’ve owned web experiences end to end, from creator onboarding to growth and monetization. I work mainly in Angular and React, care deeply about performance and architecture, and partner closely with design on everything I ship.',
}
