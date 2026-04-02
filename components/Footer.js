import styles from './Footer.module.css'

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.inner}>
        <span className={styles.name}>Guillaume Abramovici</span>
        <span className={styles.role}>2D/3D Motion Designer & Creative Technologist — Paris</span>
        <a href="mailto:guillaume.abramovici@outlook.fr" className={styles.email}>
          guillaume.abramovici@outlook.fr
        </a>
      </div>
    </footer>
  )
}
