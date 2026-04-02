'use client'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useState } from 'react'
import styles from './Header.module.css'

export default function Header() {
  const pathname = usePathname()
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <header className={styles.header}>
      <div className={styles.inner}>
        <Link href="/" className={styles.logo} onClick={() => setMenuOpen(false)}>
          Guillaume Abramovici
        </Link>

        <nav className={`${styles.nav} ${menuOpen ? styles.open : ''}`}>
          <Link
            href="/"
            className={`${styles.link} ${pathname === '/' ? styles.active : ''}`}
            onClick={() => setMenuOpen(false)}
          >
            Work
          </Link>
          <Link
            href="/playground"
            className={`${styles.link} ${pathname === '/playground' ? styles.active : ''}`}
            onClick={() => setMenuOpen(false)}
          >
            Playground
          </Link>
          <Link
            href="/about"
            className={`${styles.link} ${pathname === '/about' ? styles.active : ''}`}
            onClick={() => setMenuOpen(false)}
          >
            About
          </Link>
        </nav>

        <button
          className={`${styles.burger} ${menuOpen ? styles.burgerOpen : ''}`}
          onClick={() => setMenuOpen((v) => !v)}
          aria-label="Toggle menu"
        >
          <span />
          <span />
        </button>
      </div>
    </header>
  )
}
