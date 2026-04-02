import Link from 'next/link'
import ProjectCard from '@/components/ProjectCard'
import { projects } from '@/data/projects'
import styles from './page.module.css'

export default function Home() {
  return (
    <div className={styles.page}>
      <div className={styles.intro}>
        <p className={styles.tagline}>
          2D/3D Motion Designer & Creative Technologist — Paris
        </p>
      </div>

      <section className={styles.grid}>
        {projects.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </section>

      <section className={styles.cta}>
        <h2 className={styles.ctaHeading}>Let's work together</h2>
        <Link href="/contact" className={styles.ctaButton}>Get in touch</Link>
      </section>
    </div>
  )
}
