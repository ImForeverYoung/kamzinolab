'use client';

import { useEffect, useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { SectionContainer } from './section-container';
import { useLanguage } from '@/lib/i18n';

// ── Particle canvas ──────────────────────────────────────────────────────────
interface Particle {
  x: number; y: number;
  vx: number; vy: number;
  r: number;
}

function ParticleCanvas() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animId: number;
    const particles: Particle[] = [];
    const COUNT = 60;
    const MAX_DIST = 140;

    function resize() {
      if (!canvas) return;
      canvas.width  = canvas.offsetWidth;
      canvas.height = canvas.offsetHeight;
    }

    function init() {
      if (!canvas) return;
      particles.length = 0;
      for (let i = 0; i < COUNT; i++) {
        particles.push({
          x:  Math.random() * canvas.width,
          y:  Math.random() * canvas.height,
          vx: (Math.random() - 0.5) * 0.4,
          vy: (Math.random() - 0.5) * 0.4,
          r:  Math.random() * 1.5 + 0.5,
        });
      }
    }

    function draw() {
      if (!canvas || !ctx) return;
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      for (const p of particles) {
        p.x += p.vx;
        p.y += p.vy;
        if (p.x < 0 || p.x > canvas.width)  p.vx *= -1;
        if (p.y < 0 || p.y > canvas.height) p.vy *= -1;
      }

      // Линии между близкими частицами
      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const dx   = particles[i].x - particles[j].x;
          const dy   = particles[i].y - particles[j].y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          if (dist < MAX_DIST) {
            const alpha = (1 - dist / MAX_DIST) * 0.25;
            ctx.beginPath();
            ctx.strokeStyle = `rgba(165,180,252,${alpha})`;
            ctx.lineWidth   = 0.8;
            ctx.moveTo(particles[i].x, particles[i].y);
            ctx.lineTo(particles[j].x, particles[j].y);
            ctx.stroke();
          }
        }
      }

      // Точки
      for (const p of particles) {
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
        ctx.fillStyle = 'rgba(199,210,254,0.7)';
        ctx.fill();
      }

      animId = requestAnimationFrame(draw);
    }

    resize();
    init();
    draw();

    const ro = new ResizeObserver(() => { resize(); init(); });
    ro.observe(canvas);

    return () => {
      cancelAnimationFrame(animId);
      ro.disconnect();
    };
  }, []);

  return <canvas ref={canvasRef} className="absolute inset-0 w-full h-full" />;
}

// ── Главный компонент ────────────────────────────────────────────────────────
export default function Stats() {
  const { t } = useLanguage();
  const ref    = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section
      ref={ref}
      className="relative w-full overflow-hidden"
      style={{ background: 'linear-gradient(135deg, #0f0c29 0%, #1a1654 50%, #0f0c29 100%)' }}
    >
      <ParticleCanvas />

      {/* border-white/20 переопределяет border-gray-200 из SectionContainer */}
      <SectionContainer border className="relative z-10 border-white/20 py-20 md:py-28">

        {/* Заголовок */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-bold text-white leading-tight">
            {t.stats.title1}<br />{t.stats.title2}
          </h2>
        </motion.div>

        <div className="border-t border-white/20 mb-0" />

        {/* Статы */}
        <div className="grid grid-cols-2 md:grid-cols-4">
          {t.stats.items.map((s, i) => (
            <motion.div
              key={s.label}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 + i * 0.1 }}
              className="flex flex-col items-start px-8 py-8 border-l border-white/20 first:border-l-0"
            >
              <span className="text-4xl md:text-5xl font-bold text-white tracking-tight">
                {s.value}
              </span>
              <span className="mt-2 text-base font-semibold text-indigo-300">
                {s.label}
              </span>
              <span className="mt-1 text-sm text-white/40 leading-relaxed">
                {s.sub}
              </span>
            </motion.div>
          ))}
        </div>

        <div className="border-t border-white/20 mt-0" />
      </SectionContainer>
    </section>
  );
}
