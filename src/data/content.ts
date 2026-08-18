export type Profile = {
  name: string
  eyebrow: string
  headline: string
  tagline: string
  chips: string[]
  location: string
  email: string
  linkedin: string
  github: string
  resumeHref: string
  headshot: string
}

export type Project = {
  title: string
  context: string
  tags: string[]
  description: string
  href?: string
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
  eyebrow: 'Senior Frontend Engineer | Tech Lead',
  headline: 'Building thoughtful, scalable web experiences',
  tagline:
    'I design and build modern web applications that solve complex problems and help teams move faster.',
  chips: ['React', 'Angular', 'AWS', 'Team Leadership'],
  location: 'San Francisco Bay Area',
  email: 'chermainezimmerman@gmail.com',
  linkedin: 'https://linkedin.com/in/chermainez',
  github: 'https://github.com/c14jcdj',
  resumeHref: '/resume.pdf',
  headshot: '/headshot.png',
}

export const projects: Project[] = [
  {
    title: 'Creator Gifting Platform',
    context: 'Collective Voice',
    tags: ['Angular', 'TypeScript'],
    description:
      'A gifting platform for retailers that opened up new creator-brand partnership workflows, from outreach to fulfillment.',
  },
  {
    title: 'Design System & Storybook Library',
    context: 'Collective Voice',
    tags: ['Storybook', 'Angular'],
    description:
      'An interactive component library and documentation site that scaled the design system org-wide and sped up developer adoption.',
  },
  {
    title: 'Shop The Theme',
    context: 'Personal project',
    tags: ['Next.js', 'React', 'Tailwind'],
    description:
      'A party-kit builder that turns a theme and budget into a curated, one-click Amazon shopping list for busy parents.',
    href: 'https://shopthetheme.com',
  },
]

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

export const leadership = {
  heading: 'Leadership',
  body: 'Engineering leadership has run through every chapter of my career — from leading migrations and design-system adoption to growing the engineers around me.',
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
  bio: 'I’m a senior software engineer with 11 years of experience building scalable web applications in the creator economy, affiliate marketing, and social commerce space. I’ve owned end-to-end web experiences that support creator onboarding, growth, and monetization — with deep expertise in Angular and React, a strong focus on performance and architecture, and a design partnership habit that shows up in every product I ship.',
}
