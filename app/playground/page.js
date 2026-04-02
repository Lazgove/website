'use client'
import dynamic from 'next/dynamic'
import styles from './page.module.css'

const ParticleScene = dynamic(() => import('@/components/ParticleScene'), {
  ssr: false,
  loading: () => <div className={styles.sceneLoading} />,
})

const experiments = [
  {
    id: 'kinetic-type',
    title: 'Kinetic Typography',
    category: 'Three.js / CSS',
    description: 'Letter physics and flow fields — typographic forms driven by noise-based forces.',
    status: 'soon',
  },
  {
    id: 'glsl-shader',
    title: 'GLSL Shader Studies',
    category: 'WebGL / GLSL',
    description: 'Procedural noise shaders and generative visual experiments exploring signed distance fields.',
    status: 'soon',
  },
  {
    id: 'procedural-geo',
    title: 'Procedural Geometry',
    category: 'Three.js',
    description: 'Parametric 3D forms generated through code — mathematical surfaces, Lissajous curves, attractors.',
    status: 'soon',
  },
  {
    id: 'audio-reactive',
    title: 'Audio Reactive Visuals',
    category: 'Web Audio API / Three.js',
    description: 'Real-time visuals driven by audio frequency analysis and transient detection.',
    status: 'soon',
  },
]

export default function Playground() {
  return (
    <div className={styles.page}>
      <div className={styles.header}>
        <h1 className={styles.title}>Playground</h1>
        <p className={styles.desc}>
          Interactive experiments in Three.js, WebGL, and creative coding — where motion meets code.
        </p>
      </div>

      <ParticleScene />

      <section className={styles.grid}>
        {experiments.map((exp) => (
          <div key={exp.id} className={styles.slot}>
            <div className={styles.slotInner}>
              <div className={styles.slotTop}>
                <span className={styles.category}>{exp.category}</span>
                <span className={styles.badge}>In development</span>
              </div>
              <h3 className={styles.slotTitle}>{exp.title}</h3>
              <p className={styles.slotDesc}>{exp.description}</p>
            </div>
          </div>
        ))}
      </section>
    </div>
  )
}
