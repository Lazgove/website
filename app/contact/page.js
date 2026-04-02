import styles from './page.module.css'

export const metadata = {
  title: 'Contact — Guillaume Abramovici',
}

function IconInstagram() {
  return (
    <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/>
      <circle cx="12" cy="12" r="4"/>
      <circle cx="17.5" cy="6.5" r="0.5" fill="currentColor" stroke="none"/>
    </svg>
  )
}

function IconLinkedIn() {
  return (
    <svg width="28" height="28" viewBox="0 0 24 24" fill="currentColor">
      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/>
      <rect x="2" y="9" width="4" height="12"/>
      <circle cx="4" cy="4" r="2"/>
    </svg>
  )
}

function IconMalt() {
  return (
    <svg width="28" height="28" viewBox="0 0 24 24" fill="currentColor">
      <path d="M21.007 2.993a3.394 3.394 0 0 0-4.8 0l-2.059 2.06-1.555-1.557a1.131 1.131 0 0 0-1.6 1.6l.275.275-8.275 8.276a3.394 3.394 0 0 0 4.8 4.8l2.058-2.059 1.556 1.556a1.131 1.131 0 0 0 1.6-1.6l-.275-.274 8.275-8.276a3.394 3.394 0 0 0 0-4.8zm-13.62 13.62a1.131 1.131 0 0 1-1.6-1.6l3.547-3.547 1.6 1.6zm9.42-9.42-3.548 3.548-1.6-1.6 3.548-3.548a1.131 1.131 0 0 1 1.6 1.6z"/>
    </svg>
  )
}

function IconEmail() {
  return (
    <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <rect x="2" y="4" width="20" height="16" rx="2"/>
      <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/>
    </svg>
  )
}

function IconPhone() {
  return (
    <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12a19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 3.6 1.2h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.91 8.78a16 16 0 0 0 6.29 6.29l.96-.96a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z"/>
    </svg>
  )
}

export default function Contact() {
  return (
    <div className={styles.page}>

      <section className={styles.hero}>
        <h1 className={styles.heading}>Let's work<br />together</h1>
        <p className={styles.sub}>
          For work inquiries, questions or quotes, reach out by email.
          I'm open to freelance projects, collaborations, and long-term partnerships.
        </p>
      </section>

      <hr className={styles.divider} />

      <section className={styles.enquiries}>
        <p className={styles.enquiryLine}>
          General Enquiries —{' '}
          <a href="mailto:guillaume.abramovici@outlook.fr" className={styles.enquiryEmail}>
            guillaume.abramovici@outlook.fr
          </a>
        </p>
        <p className={styles.phone}>
          <a href="tel:+33637300318">+33 6 37 30 03 18</a>
        </p>
      </section>

      <section className={styles.socials}>
        <a href="mailto:guillaume.abramovici@outlook.fr" className={styles.socialLink} aria-label="Email">
          <IconEmail />
          <span>Email</span>
        </a>
        <a href="https://www.instagram.com/lazlanove/" target="_blank" rel="noopener noreferrer" className={styles.socialLink} aria-label="Instagram">
          <IconInstagram />
          <span>Instagram</span>
        </a>
        <a href="https://www.linkedin.com/in/guillaumeabramovici/" target="_blank" rel="noopener noreferrer" className={styles.socialLink} aria-label="LinkedIn">
          <IconLinkedIn />
          <span>LinkedIn</span>
        </a>
        <a href="https://www.malt.fr/profile/guillaumeabramovici" target="_blank" rel="noopener noreferrer" className={styles.socialLink} aria-label="Malt">
          <IconMalt />
          <span>Malt</span>
        </a>
      </section>

    </div>
  )
}
