'use client';

import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { SectionContainer } from './section-container';
import { ArrowRight } from 'lucide-react';
import { useLanguage } from '@/lib/i18n';

// ── Piezometrics sub-brand colours ───────────────────────────────────────────
const RED   = '#ED3128';
const AMBER = '#FCC96F';
const NAVY  = '#02294D';

// ─────────────────────────────────────────────────────────────────────────────
// The Piezometrics card is a *floating* surface presented inside the lab's
// white landing surface:
//   • Outer section: white — matches Hero / surrounding landing
//   • Behind the card: blue/purple/pink blobs, a visual continuation of Hero
//   • Glow border: a thin gradient ring around the navy card (featured feel)
//   • "Featured Project" eyebrow in brand indigo before the card takes over
// ─────────────────────────────────────────────────────────────────────────────
export default function FeaturedProject() {
  const { t } = useLanguage();

  return (
    <section className="relative w-full">

      {/* ── Background glow blobs — continuation of Hero's wash ── */}
      <div aria-hidden className="absolute inset-0 pointer-events-none">
        {/* blue-purple-pink top-right */}
        <div
          className="absolute -top-30 -right-30 w-[520px] h-[520px] rounded-full opacity-[0.18]"
          style={{
            background: 'linear-gradient(135deg, #60a5fa, #c084fc, #f472b6)',
            filter: 'blur(80px)',
          }}
        />
        {/* indigo-lavender-rose bottom-left */}
        <div
          className="absolute -bottom-40 -left-24 w-[480px] h-[480px] rounded-full opacity-[0.16]"
          style={{
            background: 'linear-gradient(45deg, #a5b4fc, #c4b5fd, #f9a8d4)',
            filter: 'blur(80px)',
          }}
        />
        {/* central indigo radial */}
        <div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[720px] h-[360px]"
          style={{
            background: 'radial-gradient(ellipse at center, rgba(99,102,241,0.18) 0%, transparent 70%)',
            filter: 'blur(40px)',
          }}
        />
      </div>

      {/* ── Outer 1280px frame — hairline-bordered family ── */}
      <SectionContainer border className="relative z-10 pt-10 pb-24">

        {/* "Featured Project" eyebrow — lab voice before the dark card */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <span className="text-sm md:text-base font-bold uppercase tracking-[0.45em] text-[#6366F1] inline-block ml-[0.45em]">
            {t.featured.eyebrow}
          </span>
        </motion.div>

        {/* ── Glow Border wrapper ─────────────────────────────────────────
            A thin gradient ring sitting outside the navy surface.
            The ring is the wrapper's background; the card sits 1.5px inside. */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.1 }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="relative max-w-[1100px] mx-auto"
          style={{
            borderRadius: 28,
            background: 'linear-gradient(135deg, rgba(237,49,40,0.55), rgba(252,201,111,0.45) 35%, rgba(99,102,241,0.55) 70%, rgba(237,49,40,0.55))',
            padding: 1.5,
            boxShadow: '0 30px 80px -20px rgba(2,41,77,0.45), 0 12px 32px -12px rgba(237,49,40,0.25), 0 0 60px 0 rgba(99,102,241,0.15)',
          }}
        >
          {/* Outer halo glow behind the ring */}
          <div
            aria-hidden
            className="absolute pointer-events-none -z-10"
            style={{
              inset: -28,
              borderRadius: 40,
              background: 'radial-gradient(ellipse at center, rgba(237,49,40,0.18) 0%, rgba(252,201,111,0.10) 35%, transparent 70%)',
              filter: 'blur(40px)',
            }}
          />

          {/* ── Inner card — Piezometrics surface ── */}
          <div
            className="relative overflow-hidden"
            style={{
              borderRadius: 26.5,
              background: `linear-gradient(150deg, ${NAVY} 0%, #051e38 55%, #090d1a 100%)`,
            }}
          >
            {/* Dot grid overlay */}
            <div
              aria-hidden
              className="absolute inset-0"
              style={{
                opacity: 0.035,
                backgroundImage: 'radial-gradient(circle, #fff 1px, transparent 1px)',
                backgroundSize: '28px 28px',
              }}
            />
            {/* Red glow — top-right */}
            <div
              aria-hidden
              className="absolute pointer-events-none"
              style={{
                top: -240, right: -160, width: 700, height: 700,
                borderRadius: '999px',
                background: `radial-gradient(circle at center, ${RED}44 0%, transparent 65%)`,
                filter: 'blur(60px)',
              }}
            />
            {/* Amber glow — bottom-left */}
            <div
              aria-hidden
              className="absolute pointer-events-none"
              style={{
                bottom: 0, left: -80, width: 400, height: 280,
                borderRadius: '999px',
                background: `radial-gradient(circle at center, ${AMBER}1a 0%, transparent 70%)`,
                filter: 'blur(60px)',
              }}
            />

            {/* Content */}
            <div className="relative z-10" style={{ padding: '72px 56px 0' }}>

              {/* Flagship eyebrow */}
              <span
                className="text-[11px] font-bold uppercase tracking-[0.18em] block mb-4"
                style={{ color: RED }}
              >
                {t.featured.flagship}
              </span>

              {/* Logo */}
              <Image
                src="/piezometrics/logo-horizontal.svg"
                alt="Piezometrics"
                width={260}
                height={66}
                className="w-48 md:w-[260px] mb-6"
              />

              {/* Headline */}
              <h2
                className="text-3xl md:text-[40px] font-bold text-white leading-[1.1] tracking-tight max-w-[680px] mb-[18px]"
              >
                {t.featured.title1}{' '}
                <span
                  className="inline-block bg-clip-text text-transparent"
                  style={{ backgroundImage: `linear-gradient(90deg, ${RED}, ${AMBER})` }}
                >
                  {t.featured.title2}
                </span>
              </h2>

              {/* Sub */}
              <p
                className="text-base leading-relaxed max-w-[540px] mb-6"
                style={{ color: 'rgba(255,255,255,0.55)' }}
              >
                {t.featured.desc}
              </p>

              {/* Tags */}
              <div className="flex flex-wrap gap-2 mb-12">
                {t.featured.tags.map(tag => (
                  <span
                    key={tag}
                    className="px-3 py-1 text-xs font-medium rounded-full"
                    style={{
                      border: '1px solid rgba(255,255,255,0.12)',
                      color: 'rgba(255,255,255,0.55)',
                    }}
                  >
                    {tag}
                  </span>
                ))}
              </div>

              {/* CTA link */}
              {/* <div className="mb-10">
                <Link
                  href="/projects"
                  className="inline-flex items-center gap-2 text-sm font-semibold transition-opacity hover:opacity-75"
                  style={{ color: AMBER }}
                >
                  {t.featured.more}
                  <ArrowRight size={14} />
                </Link>
              </div> */}

              {/* Metrics strip — flush to bottom of card */}
              <div
                className="grid grid-cols-2 md:grid-cols-4"
                style={{
                  borderTop: '1px solid rgba(255,255,255,0.20)',
                  borderBottom: '1px solid rgba(255,255,255,0.20)',
                  margin: '0 -56px',
                  padding: '0 56px',
                }}
              >
                {t.featured.metrics.map((m, i) => (
                  <div
                    key={m.label}
                    className="flex flex-col py-[22px]"
                    style={{
                      paddingLeft: i === 0 ? 0 : 20,
                      paddingRight: 20,
                      borderLeft: i === 0 ? 'none' : '1px solid rgba(255,255,255,0.20)',
                    }}
                  >
                    <span
                      className="text-[28px] font-bold text-white tracking-tight leading-none"
                    >
                      {m.value}
                    </span>
                    <span className="mt-2 text-xs font-semibold" style={{ color: RED }}>
                      {m.label}
                    </span>
                    <span
                      className="mt-1 text-[11px]"
                      style={{ color: 'rgba(255,255,255,0.40)' }}
                    >
                      {m.sub}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </motion.div>
      </SectionContainer>
    </section>
  );
}
