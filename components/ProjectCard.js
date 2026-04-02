import styles from './ProjectCard.module.css'

function AbstractShape({ shapeColor }) {
  return (
    <svg
      className={styles.shape}
      viewBox="0 0 600 380"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <circle cx="300" cy="190" r="150" fill="none" stroke={shapeColor} strokeWidth="0.6" opacity="0.5" />
      <circle cx="300" cy="190" r="90"  fill="none" stroke={shapeColor} strokeWidth="0.6" opacity="0.35" />
      <circle cx="300" cy="190" r="40"  fill="none" stroke={shapeColor} strokeWidth="0.6" opacity="0.25" />
      <line x1="0" y1="190" x2="600" y2="190" stroke={shapeColor} strokeWidth="0.4" opacity="0.3" />
      <line x1="300" y1="0" x2="300" y2="380"  stroke={shapeColor} strokeWidth="0.4" opacity="0.3" />
      <rect x="220" y="150" width="160" height="80" fill="none" stroke={shapeColor} strokeWidth="0.4" opacity="0.25" />
      <line x1="0" y1="0" x2="600" y2="380" stroke={shapeColor} strokeWidth="0.3" opacity="0.15" />
      <line x1="600" y1="0" x2="0" y2="380" stroke={shapeColor} strokeWidth="0.3" opacity="0.15" />
    </svg>
  )
}

export default function ProjectCard({ project }) {
  return (
    <article className={`${styles.card} ${project.featured ? styles.featured : ''}`}>
      <div className={styles.thumbnail} style={{ background: project.gradient }}>
        <AbstractShape shapeColor={project.shapeColor} />
        <div className={styles.hoverLayer} />
        <span className={styles.addMedia}>Add video / image</span>
      </div>
      <div className={styles.meta}>
        <h3 className={styles.title}>{project.title}</h3>
        <span className={styles.sub}>
          {project.client ? `${project.client} · ` : ''}{project.category}, {project.year}
        </span>
      </div>
    </article>
  )
}
