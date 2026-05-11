'use client';

import { motion } from 'framer-motion';
import { SectionContainer } from './section-container';
import { useLanguage } from '@/lib/i18n';

// ── Roster ────────────────────────────────────────────────────────────────────
// 9 people: 1 руководитель, 1 тимлид, 7 full-stack.
// Replace `initials` with <img> tags when real photos arrive.
const ROSTER = [
  {
    name: 'Бауржан Альжанов',
    role: 'Руководитель',
    tag: 'HEAD',
    rank: 0,
    initials: 'БА',
    image: '/team/baur.jpg',
    yAxis: 70,
  },
  { name: 'Рахат', role: 'Тимлид', tag: 'LEAD', rank: 1, initials: 'Р', image: undefined },
  {
    name: 'Айбар Кенбай',
    role: 'Full-stack',
    tag: 'FS-01',
    rank: 2,
    initials: 'АК',
    image: '/team/aibar.jpg',
    yAxis: 40,
  },
  {
    name: 'Дархан Шалбаев',
    role: 'Full-stack',
    tag: 'FS-02',
    rank: 2,
    initials: 'ДШ',
    image: '/team/darkhan.jpg',
    yAxis: 50,
  },
  {
    name: 'Бахтияр Калкенов',
    role: 'Full-stack',
    tag: 'FS-03',
    rank: 2,
    initials: 'БК',
    image: '/team/bakhtiyar.jpg',
    yAxis: 50,
  },
  {
    name: 'Нурали Есберген',
    role: 'Full-stack',
    tag: 'FS-04',
    rank: 2,
    initials: 'НЕ',
    image: '/team/nurali.jpg',
    yAxis: 50,
  },
  {
    name: 'Алиби Тахтанов',
    role: 'Full-stack',
    tag: 'FS-05',
    rank: 2,
    initials: 'АТ',
    image: '/team/alibi.jpg',
    yAxis: 30,
  },
  {
    name: 'Ансар Антаев',
    role: 'Full-stack',
    tag: 'FS-06',
    rank: 2,
    initials: 'АА',
    image: '/team/ansar.jpg',
    yAxis: 50,
  },
  {
    name: 'Амре Мади Джумадиев',
    role: 'Full-stack',
    tag: 'FS-07',
    rank: 2,
    initials: 'АД',
    image: '/team/amre.jpg',
    yAxis: 30,
  },
];

// Indigo-tinted portrait gradients — vary by index
const PORTRAIT_GRADIENTS = [
  'linear-gradient(160deg, #EEF2FF 0%, #C7D2FE 60%, #818CF8 100%)',
  'linear-gradient(140deg, #E0E7FF 0%, #A5B4FC 55%, #6366F1 100%)',
  'linear-gradient(175deg, #F1F5F9 0%, #CBD5E1 55%, #94A3B8 100%)',
  'linear-gradient(155deg, #EEF2FF 0%, #A5B4FC 50%, #4F46E5 100%)',
  'linear-gradient(165deg, #F8FAFC 0%, #C7D2FE 60%, #6366F1 100%)',
];

// ── Portrait (placeholder — swap with <img> when photos arrive) ──────────────
function Portrait({
  image,
  initials,
  yAxis,
  idx,
  size = 'md',
}: {
  image?: string;
  initials: string;
  yAxis?: number;
  idx: number;
  size?: 'sm' | 'md' | 'lg' | 'hero';
}) {
  const fontSize = size === 'hero' ? 48 : size === 'lg' ? 56 : size === 'sm' ? 22 : 36;

  if (image) {
    return (
      <div
        style={{
          width: '100%',
          height: '100%',
          borderRadius: 'inherit',
          backgroundImage: `url(${image})`,
          backgroundSize: '110%',
          backgroundPosition: `50% ${yAxis}%`,
          backgroundColor: '#fff',
          position: 'relative',
        }}
      >
        {/* <span
          style={{
            position: 'absolute',
            top: 6,
            left: 8,
            fontSize: 8,
            fontFamily: 'var(--font-geist-mono, monospace)',
            fontWeight: 600,
            color: 'rgba(255,255,255,0.5)',
            textShadow: '0 1px 4px rgba(0,0,0,0.2)',
            letterSpacing: '0.05em',
          }}>
          0x{(idx + 1).toString(16).padStart(2, '0').toUpperCase()}
        </span> */}
      </div>
    );
  }

  return (
    <div
      style={{
        width: '100%',
        height: '100%',
        background: PORTRAIT_GRADIENTS[idx % PORTRAIT_GRADIENTS.length],
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        color: 'rgba(30,27,75,0.55)',
        fontWeight: 700,
        fontSize,
        letterSpacing: '-0.04em',
        borderRadius: 'inherit',
        position: 'relative',
      }}
    >
      {initials}
      {/* Hex label */}
      <span
        style={{
          position: 'absolute',
          top: 6,
          left: 8,
          fontSize: 8,
          fontFamily: 'var(--font-geist-mono, monospace)',
          fontWeight: 600,
          color: image ? 'rgba(255,255,255,0.4)' : 'rgba(30,27,75,0.25)',
          letterSpacing: '0.05em',
        }}>
        0x{(idx + 1).toString(16).padStart(2, '0').toUpperCase()}
      </span>
    </div>
  );
}

// ── Leadership card ───────────────────────────────────────────────────────────
function LeaderCard({ person, idx, t }: { person: (typeof ROSTER)[0]; idx: number; t: any }) {
  return (
    <div
      className="relative overflow-hidden transition-shadow duration-200 hover:shadow-[0_13px_27px_-5px_rgba(50,50,93,0.25),0_8px_16px_-8px_rgba(0,0,0,0.30)]"
      style={{
        borderRadius: 20,
        background: 'linear-gradient(135deg, #0F0C29 0%, #1A1654 60%, #1E1B4B 100%)',
        border: '1px solid rgba(255,255,255,0.08)',
        padding: 28,
        display: 'grid',
        gridTemplateColumns: '140px 1fr',
        gap: 24,
        alignItems: 'center',
      }}>
      {/* Indigo glow blob */}
      <div
        aria-hidden
        className="absolute -top-10 -right-10 w-[200px] h-[200px] rounded-full pointer-events-none"
        style={{
          background: '#6366F1',
          filter: 'blur(80px)',
          opacity: 0.2,
        }}
      />

      {/* Portrait */}
      <div
        style={{
          width: 140,
          height: 140,
          borderRadius: 16,
          overflow: 'hidden',
          border: '1px solid rgba(255,255,255,0.12)',
          flexShrink: 0,
        }}>
        <Portrait image={person.image} yAxis={person.yAxis} initials={person.initials} idx={idx} size="hero" />
      </div>

      {/* Info */}
      <div className="relative z-10 min-w-0">
        <span
          className="inline-block text-[10px] font-semibold tracking-[0.18em] px-[9px] py-[3px] rounded-full"
          style={{
            fontFamily: 'var(--font-geist-mono, monospace)',
            background: 'rgba(165,180,252,0.12)',
            border: '1px solid rgba(165,180,252,0.25)',
            color: '#A5B4FC',
          }}>
          {person.tag}
        </span>
        <h3 className="mt-3 mb-1 text-2xl font-bold text-white tracking-tight leading-tight">
          {person.name}
        </h3>
        <p className="text-base" style={{ color: 'rgba(255,255,255,0.7)' }}>
          {t.team.roles[person.role] || person.role}
        </p>
      </div>
    </div>
  );
}

// ── Engineer card ─────────────────────────────────────────────────────────────
function EngineerCard({
  person,
  animIdx,
  t,
}: {
  person: (typeof ROSTER)[0];
  animIdx: number;
  t: any;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.45, delay: animIdx * 0.06 }}
      className="p-5 bg-white border border-gray-200 rounded-[16px] transition-all duration-200 hover:shadow-[0_4px_12px_-2px_rgba(30,27,75,0.08)] hover:border-gray-300 flex items-center gap-5">
      {/* Medium portrait */}
      <div
        style={{
          width: 80,
          height: 80,
          borderRadius: 14,
          overflow: 'hidden',
          border: '1px solid #F3F4F6',
          flexShrink: 0,
        }}>
        <Portrait image={person.image} yAxis={person.yAxis} initials={person.initials} idx={animIdx + 2} size="md" />
      </div>

      <div className="flex flex-col min-w-0">
        <p className="text-lg font-semibold text-[#1E1B4B] leading-snug truncate">{person.name}</p>
        <p className="text-sm text-gray-500 mt-1 truncate">
          {t.team.roles[person.role] || person.role}
        </p>
      </div>
    </motion.div>
  );
}

// ── Main component ────────────────────────────────────────────────────────────
export default function Team() {
  const { t } = useLanguage();
  const head = ROSTER[0];
  const engineers = ROSTER.slice(2); // 7 full-stack

  return (
    <section className="w-full bg-white">
      <SectionContainer border className="py-24">
        {/* ── Section header ── */}
        <div className="flex items-end justify-between gap-10 flex-wrap">
          <div className="flex-1 min-w-0" style={{ flexBasis: 480 }}>
            <motion.span
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="block text-base font-bold uppercase tracking-[0.18em] text-[#6366F1] mb-4">
              {t.team.eyebrow}
            </motion.span>
            <motion.h2
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
              className="text-[44px] font-bold text-[#1E1B4B] leading-[1.1] tracking-tight max-w-[640px]">
              {t.team.title1}
              <br />
              {t.team.title2}
            </motion.h2>
          </div>
        </div>

        {/* ── Leadership pair ── */}
        <div className="flex items-center justify-center md:auto mt-14">
          {[head].map((p, i) => (
            <motion.div
              key={p.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.55, delay: i * 0.08 }}>
              <LeaderCard person={p} idx={i} t={t} />
            </motion.div>
          ))}
        </div>

        {/* ── Divider ── */}
        <div className="mt-8 mb-6 w-full border-t border-gray-200 flex items-center justify-center relative">
          <span
            className="absolute bg-white px-4 text-[10px] font-semibold tracking-[0.18em] text-gray-400"
            style={{ fontFamily: 'var(--font-geist-mono, monospace)' }}>
            {t.team.fullstack}
          </span>
        </div>

        {/* ── Engineers Grid (3 columns on desktop) ── */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 pt-4">
          {engineers.map((p, i) => (
            <EngineerCard key={p.name} person={p} animIdx={i} t={t} />
          ))}
        </div>
      </SectionContainer>
    </section>
  );
}
