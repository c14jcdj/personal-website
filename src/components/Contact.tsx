import { profile } from '../data/content'

export default function Contact() {
  return (
    <footer id="contact" className="border-t border-sand">
      <div className="mx-auto max-w-6xl px-6 py-16 text-center">
        <h2 className="font-display text-4xl">Let’s talk</h2>
        <p className="mx-auto mt-4 max-w-md text-muted">
          Open to senior frontend roles — remote. The fastest way to reach me is
          email.
        </p>
        <div className="mt-8 flex justify-center gap-6 text-sm font-semibold">
          <a
            href={`mailto:${profile.email}`}
            aria-label="Email"
            className="text-burgundy hover:underline focus-visible:outline-2 focus-visible:outline-burgundy"
          >
            Email
          </a>
          <a
            href={profile.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
            className="text-burgundy hover:underline focus-visible:outline-2 focus-visible:outline-burgundy"
          >
            LinkedIn
          </a>
          <a
            href={profile.github}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
            className="text-burgundy hover:underline focus-visible:outline-2 focus-visible:outline-burgundy"
          >
            GitHub
          </a>
        </div>
        <p className="mt-10 text-xs text-muted">
          © {new Date().getFullYear()} {profile.name}
        </p>
      </div>
    </footer>
  )
}
