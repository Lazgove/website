'use client'
import { useEffect, useRef } from 'react'
import styles from './ParticleScene.module.css'

export default function ParticleScene() {
  const mountRef  = useRef(null)
  const cleanupRef = useRef(null)

  useEffect(() => {
    if (!mountRef.current) return
    let mounted = true

    const init = async () => {
      const THREE = await import('three')
      if (!mounted || !mountRef.current) return

      const container = mountRef.current
      let W = container.clientWidth
      let H = container.clientHeight

      // ── Renderer ────────────────────────────────────────────────
      const renderer = new THREE.WebGLRenderer({ antialias: true })
      renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))
      renderer.setSize(W, H)
      renderer.setClearColor(0x06060e, 1)
      container.appendChild(renderer.domElement)

      // ── Scene / Camera ───────────────────────────────────────────
      const scene  = new THREE.Scene()
      const camera = new THREE.PerspectiveCamera(60, W / H, 0.1, 1000)
      camera.position.z = 50

      // ── Particles ────────────────────────────────────────────────
      const N = 130
      const positions  = new Float32Array(N * 3)
      const velocities = []

      for (let i = 0; i < N; i++) {
        positions[i * 3]     = (Math.random() - 0.5) * 80
        positions[i * 3 + 1] = (Math.random() - 0.5) * 55
        positions[i * 3 + 2] = 0
        velocities.push({
          x: (Math.random() - 0.5) * 0.06,
          y: (Math.random() - 0.5) * 0.06,
        })
      }

      const pGeo = new THREE.BufferGeometry()
      pGeo.setAttribute('position', new THREE.BufferAttribute(positions, 3))
      const pMat    = new THREE.PointsMaterial({ color: 0xffffff, size: 0.28, transparent: true, opacity: 0.85 })
      const points  = new THREE.Points(pGeo, pMat)
      scene.add(points)

      // ── Lines ────────────────────────────────────────────────────
      const MAX_LINES  = 350
      const lineBuf    = new Float32Array(MAX_LINES * 2 * 3)
      const lGeo       = new THREE.BufferGeometry()
      lGeo.setAttribute('position', new THREE.BufferAttribute(lineBuf, 3))
      lGeo.setDrawRange(0, 0)
      const lMat  = new THREE.LineBasicMaterial({ color: 0x7766bb, transparent: true, opacity: 0.28 })
      const lines = new THREE.LineSegments(lGeo, lMat)
      scene.add(lines)

      // ── Mouse ────────────────────────────────────────────────────
      let mx = 0, my = 0
      const onMouseMove = (e) => {
        const rect = container.getBoundingClientRect()
        mx = ((e.clientX - rect.left) / W * 2 - 1) * 42
        my = (-((e.clientY - rect.top) / H) * 2 + 1) * 30
      }
      container.addEventListener('mousemove', onMouseMove)

      // ── Resize ───────────────────────────────────────────────────
      const onResize = () => {
        W = container.clientWidth
        H = container.clientHeight
        renderer.setSize(W, H)
        camera.aspect = W / H
        camera.updateProjectionMatrix()
      }
      window.addEventListener('resize', onResize)

      // ── Animation loop ───────────────────────────────────────────
      const CONN_DIST = 13
      let animId

      const animate = () => {
        animId = requestAnimationFrame(animate)
        let lineCount = 0

        for (let i = 0; i < N; i++) {
          const ix = i * 3, iy = i * 3 + 1

          // mouse repulsion
          const dx   = positions[ix] - mx
          const dy   = positions[iy] - my
          const dist = Math.sqrt(dx * dx + dy * dy)
          if (dist < 10 && dist > 0) {
            const f = (10 - dist) / 10 * 0.14
            velocities[i].x += (dx / dist) * f
            velocities[i].y += (dy / dist) * f
          }

          // move
          positions[ix]     += velocities[i].x
          positions[iy]     += velocities[i].y

          // wrap around
          if (positions[ix] >  43) positions[ix] = -43
          if (positions[ix] < -43) positions[ix] =  43
          if (positions[iy] >  30) positions[iy] = -30
          if (positions[iy] < -30) positions[iy] =  30

          // damping + min speed
          velocities[i].x *= 0.99
          velocities[i].y *= 0.99
          const spd = Math.hypot(velocities[i].x, velocities[i].y)
          if (spd < 0.01) {
            velocities[i].x += (Math.random() - 0.5) * 0.01
            velocities[i].y += (Math.random() - 0.5) * 0.01
          }

          // connections
          for (let j = i + 1; j < N && lineCount < MAX_LINES; j++) {
            const jx = j * 3, jy = j * 3 + 1
            const d  = Math.hypot(positions[ix] - positions[jx], positions[iy] - positions[jy])
            if (d < CONN_DIST) {
              const b = lineCount * 6
              lineBuf[b]     = positions[ix]; lineBuf[b + 1] = positions[iy]; lineBuf[b + 2] = 0
              lineBuf[b + 3] = positions[jx]; lineBuf[b + 4] = positions[jy]; lineBuf[b + 5] = 0
              lineCount++
            }
          }
        }

        pGeo.attributes.position.needsUpdate = true
        lGeo.attributes.position.needsUpdate = true
        lGeo.setDrawRange(0, lineCount * 2)
        renderer.render(scene, camera)
      }

      animate()

      // ── Cleanup ref ──────────────────────────────────────────────
      cleanupRef.current = () => {
        cancelAnimationFrame(animId)
        container.removeEventListener('mousemove', onMouseMove)
        window.removeEventListener('resize', onResize)
        renderer.dispose()
        if (container.contains(renderer.domElement)) container.removeChild(renderer.domElement)
      }
    }

    init()
    return () => {
      mounted = false
      cleanupRef.current?.()
    }
  }, [])

  return (
    <div ref={mountRef} className={styles.container}>
      <div className={styles.label}>
        <span className={styles.dot} />
        Particle Field — Three.js · move your cursor
      </div>
    </div>
  )
}
