import styles from './page.module.css'

const experience = [
  {
    role: 'Motion Designer',
    company: 'Freelance',
    location: 'Paris',
    period: '2020 — Present',
    bullets: [
      'Designed and animated 2D and 3D motion design content for various clients: explainer videos, marketing animations, and social media assets.',
      'Created animated graphic designs, vector illustrations, 3D models, and product visuals.',
      'Delivered promotional videos, event teasers, and brand video content.',
      'Managed production workflows: storyboard, art direction, compositing, animation, post-production.',
    ],
  },
  {
    role: 'Motion Designer',
    company: 'Storyfox',
    location: 'Paris',
    period: '2022 — 2023',
    bullets: [
      'Developed and produced customisable animation templates for a video-creation SaaS platform.',
      'Automated video content creation via dynamic After Effects compositions linked to variable data.',
      'Collaborated with marketing and product teams to create educational and commercial videos for multiple formats.',
      'Integrated brand content standards, UX motion, and kinetic typography.',
    ],
  },
  {
    role: 'Research Engineer',
    company: 'Alten — Softbank Robotics & Thalès',
    location: 'Boulogne-Billancourt',
    period: '2018 — 2020',
    bullets: [
      'Designed and developed interactive user interfaces in Python for industrial and robotics data analysis.',
      'Performed signal and image processing for embedded systems, including analysis of visual and LIDAR sensors.',
      'Delivered interdisciplinary work across software technology, data visualisation, and user experience.',
    ],
  },
]

const skills = {
  'Motion Design & Video': [
    '2D/3D animation',
    'Storyboard / Art direction',
    'Compositing / Editing / Post-production',
    'Logo animation / Kinetic typography',
    'Explainer, advertising, and event video',
    'Motion integration in UI/UX',
  ],
  'Tools & Software': [
    'After Effects, Premiere Pro, Photoshop, Illustrator, Audition',
    'Cinema 4D, Blender, Houdini, Substance Painter, Octane Render',
    'Unreal Engine, Unity',
    'FL Studio',
  ],
  'Development': [
    'Python, C/C++, HTML, CSS, Javascript',
    'Three.js, OpenFrameworks, OpenCV',
    'Interactive prototyping, HMI, Git',
  ],
}

export default function About() {
  return (
    <div className={styles.page}>

      {/* ── Hero ─────────────────────────────────────────────────── */}
      <section className={styles.hero}>
        <div>
          <h1 className={styles.role}>2D/3D Motion Designer & Creative Technologist</h1>
        </div>
        <p className={styles.location}>Paris, France</p>
      </section>

      {/* ── Bio + Contact ────────────────────────────────────────── */}
      <section className={styles.bioRow}>
        <div className={styles.bio}>
          <p>
            2D/3D Motion Designer with over 5 years of experience creating animated content for
            brands, products, and digital platforms. Passionate about combining design and technology
            to produce engaging visual storytelling.
          </p>
          <p>
            Experienced in producing explainer animations, marketing videos, event teasers, social
            media content, and motion design for UX interfaces. Strong technical background in both
            motion design and software development, enabling efficient production workflows and
            technically advanced visual experiences.
          </p>
        </div>
        <div className={styles.contact}>
          <h2 className={styles.sectionLabel}>Contact</h2>
          <ul className={styles.contactList}>
            <li>
              <a href="mailto:guillaume.abramovici@outlook.fr">
                guillaume.abramovici@outlook.fr
              </a>
            </li>
            <li>
              <a href="tel:+33637300318">+33 6 37 30 03 18</a>
            </li>
            <li>
              <a href="https://www.linkedin.com/in/guillaumeabramovici/" target="_blank" rel="noopener noreferrer">
                LinkedIn
              </a>
            </li>
            <li>
              <a href="https://www.instagram.com/lazlanove/" target="_blank" rel="noopener noreferrer">
                Instagram
              </a>
            </li>
          </ul>
        </div>
      </section>

      {/* ── Experience ───────────────────────────────────────────── */}
      <section className={styles.section}>
        <h2 className={styles.sectionLabel}>Experience</h2>
        <div className={styles.timeline}>
          {experience.map((job) => (
            <div key={job.company} className={styles.job}>
              <div className={styles.jobHeader}>
                <div>
                  <span className={styles.jobRole}>{job.role}</span>
                  <span className={styles.jobCompany}>{job.company} — {job.location}</span>
                </div>
                <span className={styles.jobPeriod}>{job.period}</span>
              </div>
              <ul className={styles.jobBullets}>
                {job.bullets.map((b, i) => (
                  <li key={i}>{b}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      {/* ── Skills ───────────────────────────────────────────────── */}
      <section className={styles.section}>
        <h2 className={styles.sectionLabel}>Skills</h2>
        <div className={styles.skillsGrid}>
          {Object.entries(skills).map(([category, items]) => (
            <div key={category} className={styles.skillGroup}>
              <h3 className={styles.skillCategory}>{category}</h3>
              <ul className={styles.skillList}>
                {items.map((item, i) => (
                  <li key={i}>{item}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      {/* ── Education ────────────────────────────────────────────── */}
      <section className={styles.section}>
        <h2 className={styles.sectionLabel}>Education</h2>
        <div className={styles.job}>
          <div className={styles.jobHeader}>
            <div>
              <span className={styles.jobRole}>Engineer in Image Processing</span>
              <span className={styles.jobCompany}>Télécom SudParis — Évry</span>
            </div>
            <span className={styles.jobPeriod}>2013 — 2017</span>
          </div>
          <p className={styles.jobNote}>
            Signal processing, image processing, morphological image analysis, multimedia indexing,
            virtual and augmented reality, machine learning.
          </p>
        </div>
      </section>

    </div>
  )
}
