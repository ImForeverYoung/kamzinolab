'use client';

import { useEffect, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { SectionContainer } from './section-container';
import { ArrowLeft, ArrowRight, Activity, Bell, BarChart3, Cpu, Wifi } from 'lucide-react';

// ── Brand colours ────────────────────────────────────────────────────────────
const RED   = '#ED3128';
const AMBER = '#FCC96F';
const NAVY  = '#02294D';

// ── Data ─────────────────────────────────────────────────────────────────────
const METRICS = [
  { value: '200+',  label: 'Активных датчиков', sub: 'в полевых условиях'  },
  { value: '<50мс', label: 'Задержка данных',    sub: 'от датчика до UI'    },
  { value: '99.9%', label: 'Аптайм системы',     sub: 'гарантированный SLA' },
  { value: '2024',  label: 'Год запуска',         sub: 'в продакшн'          },
];

const FEATURES = [
  {
    Icon: Activity,
    title: 'Real-time сбор данных',
    desc:  'Показания датчиков поступают на сервер непрерывно и сразу отображаются на дашборде без перезагрузки страницы.',
  },
  {
    Icon: BarChart3,
    title: 'Интерактивные графики',
    desc:  'Зум, выбор диапазона, сравнение нескольких скважин на одном экране. Экспорт в CSV и Excel.',
  },
  {
    Icon: Bell,
    title: 'Умные уведомления',
    desc:  'Автоматические алерты при выходе уровня воды за пороговые значения — SMS, email и push в браузере.',
  },
  {
    Icon: Wifi,
    title: 'Работа офлайн',
    desc:  'Edge-агент буферизует данные при потере связи и автоматически синхронизируется при восстановлении.',
  },
  {
    Icon: Cpu,
    title: 'Edge-обработка',
    desc:  'Предварительная фильтрация шумов прямо на устройстве снижает трафик и нагрузку на центральный сервер.',
  },
];

const STACK = [
  { label: 'Go',         color: '#00ACD7' },
  { label: 'TypeScript', color: '#3178C6' },
  { label: 'Next.js',    color: '#000000' },
  { label: 'PostgreSQL', color: '#336791' },
  { label: 'InfluxDB',   color: '#22ADF6' },
  { label: 'MQTT',       color: '#660066' },
  { label: 'Docker',     color: '#2496ED' },
  { label: 'Grafana',    color: '#F46800' },
];

// ── Component ─────────────────────────────────────────────────────────────────
export default function PiezometricsProject() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    setVisible(true);
    function onPageShow(e: PageTransitionEvent) {
      if (e.persisted) {
        setVisible(false);
        requestAnimationFrame(() => requestAnimationFrame(() => setVisible(true)));
      }
    }
    window.addEventListener('pageshow', onPageShow);
    return () => window.removeEventListener('pageshow', onPageShow);
  }, []);

  return (
    <>
      {/* ═══ HERO ═══════════════════════════════════════════════════════════ */}
      <section
        className="relative w-full overflow-hidden"
        style={{ background: `linear-gradient(150deg, ${NAVY} 0%, #051e38 55%, #090d1a 100%)` }}
      >
        {/* Dot grid */}
        <div
          className="absolute inset-0 opacity-[0.035]"
          style={{
            backgroundImage: 'radial-gradient(circle, #fff 1px, transparent 1px)',
            backgroundSize: '28px 28px',
          }}
        />

        {/* Red glow top-right */}
        <div
          className="absolute -top-60 -right-40 w-[700px] h-[700px] rounded-full pointer-events-none"
          style={{
            background: `radial-gradient(circle at center, ${RED}44 0%, transparent 65%)`,
            filter: 'blur(60px)',
          }}
        />

        {/* Amber glow bottom-left */}
        <div
          className="absolute bottom-0 -left-20 w-[400px] h-[280px] rounded-full pointer-events-none"
          style={{
            background: `radial-gradient(circle at center, ${AMBER}1a 0%, transparent 70%)`,
            filter: 'blur(60px)',
          }}
        />

        <SectionContainer border className="border-white/10 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 28 }}
            animate={visible ? { opacity: 1, y: 0 } : { opacity: 0, y: 28 }}
            transition={{ duration: 0.75, ease: [0.22, 1, 0.36, 1] }}
            className="py-24 md:py-36"
          >
            

            {/* Logo */}
            <motion.div
              initial={{ opacity: 0, x: -12 }}
              animate={visible ? { opacity: 1, x: 0 } : { opacity: 0, x: -12 }}
              transition={{ duration: 0.6, delay: 0.15 }}
              className="mb-10"
            >
              <Image
                src="/piezometrics/logo-horizontal-light.svg"
                alt="Piezometrics"
                width={300}
                height={76}
                className="w-48 md:w-72"
                priority
              />
            </motion.div>

            {/* Headline */}
            <motion.h1
              initial={{ opacity: 0, y: 16 }}
              animate={visible ? { opacity: 1, y: 0 } : { opacity: 0, y: 16 }}
              transition={{ duration: 0.65, delay: 0.25 }}
              className="text-3xl md:text-5xl font-bold text-white leading-tight max-w-2xl mb-5"
            >
              Мониторинг пьезометрических данных{' '}
              <span
                className="inline-block bg-clip-text text-transparent"
                style={{ backgroundImage: `linear-gradient(90deg, ${RED}, ${AMBER})` }}
              >
                в реальном времени
              </span>
            </motion.h1>

            {/* Subheading */}
            <motion.p
              initial={{ opacity: 0 }}
              animate={visible ? { opacity: 1 } : { opacity: 0 }}
              transition={{ duration: 0.6, delay: 0.35 }}
              className="text-white/45 text-lg max-w-xl leading-relaxed mb-10"
            >
              Платформа для непрерывного сбора, хранения и визуализации данных грунтовых вод
              на строительных и промышленных объектах Казахстана.
            </motion.p>

            {/* Tags */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={visible ? { opacity: 1 } : { opacity: 0 }}
              transition={{ duration: 0.5, delay: 0.45 }}
              className="flex flex-wrap gap-2"
            >
              {['IoT / Сенсоры', 'Мониторинг', 'Веб-платформа', '2024'].map(tag => (
                <span
                  key={tag}
                  className="px-3 py-1 text-xs font-medium rounded-full border text-white/45"
                  style={{ borderColor: 'rgba(255,255,255,0.12)' }}
                >
                  {tag}
                </span>
              ))}
            </motion.div>
          </motion.div>
        </SectionContainer>
      </section>

      {/* ═══ METRICS STRIP ══════════════════════════════════════════════════ */}
      <section className="w-full bg-white border-b border-gray-200">
        <SectionContainer border>
          <div className="grid grid-cols-2 md:grid-cols-4 divide-x divide-gray-200">
            {METRICS.map((m, i) => (
              <motion.div
                key={m.label}
                initial={{ opacity: 0, y: 14 }}
                animate={visible ? { opacity: 1, y: 0 } : { opacity: 0, y: 14 }}
                transition={{ duration: 0.5, delay: 0.55 + i * 0.07 }}
                className="flex flex-col px-8 py-8"
              >
                <span
                  className="text-3xl md:text-4xl font-bold tracking-tight"
                  style={{ color: NAVY }}
                >
                  {m.value}
                </span>
                <span className="mt-2 text-sm font-semibold" style={{ color: RED }}>
                  {m.label}
                </span>
                <span className="mt-1 text-xs text-gray-400">{m.sub}</span>
              </motion.div>
            ))}
          </div>
        </SectionContainer>
      </section>

      {/* ═══ OVERVIEW ═══════════════════════════════════════════════════════ */}
      <section className="w-full bg-white">
        <SectionContainer border className="py-20 md:py-28">
          <div className="grid md:grid-cols-2 gap-16 items-start">

            {/* Left */}
            <div>
              <span
                className="text-[11px] font-bold tracking-[0.18em] uppercase mb-4 block"
                style={{ color: RED }}
              >
                О проекте
              </span>
              <h2
                className="text-3xl md:text-4xl font-bold leading-tight mb-6"
                style={{ color: NAVY }}
              >
                Цифровой контроль подземных вод для строительства
              </h2>
              <p className="text-gray-500 leading-relaxed mb-4 text-[0.95rem]">
                Piezometrics — система для автоматического сбора данных с пьезометрических датчиков,
                установленных в скважинах строительных площадок и промышленных объектов.
              </p>
              <p className="text-gray-500 leading-relaxed text-[0.95rem]">
                Платформа заменила ручной замер уровня грунтовых вод, обеспечив круглосуточный
                доступ к актуальным данным через веб-интерфейс и мобильный браузер.
              </p>
            </div>

            {/* Right: task / solution / result cards */}
            <div className="flex flex-col gap-3">
              {[
                {
                  label: 'Задача',
                  text: 'Автоматизировать сбор данных с десятков датчиков на разных объектах, обеспечить надёжную передачу при нестабильной сотовой связи в полевых условиях.',
                },
                {
                  label: 'Решение',
                  text: 'Edge-агент на Go с локальным буфером, очередь MQTT для надёжной доставки, InfluxDB для хранения временных рядов и Next.js дашборд с live-обновлением.',
                },
                {
                  label: 'Результат',
                  text: 'Снижение трудозатрат на 80%, обнаружение аномалий в режиме реального времени, автоматическая генерация отчётов для надзорных органов.',
                },
              ].map(item => (
                <div
                  key={item.label}
                  className="p-5 rounded-xl border border-gray-100 bg-gray-50/60"
                >
                  <span className="text-[10px] font-bold uppercase tracking-[0.16em] text-gray-400 mb-2 block">
                    {item.label}
                  </span>
                  <p className="text-sm text-gray-600 leading-relaxed">{item.text}</p>
                </div>
              ))}
            </div>
          </div>
        </SectionContainer>
      </section>

      {/* ═══ FEATURES ═══════════════════════════════════════════════════════ */}
      <section className="w-full border-t border-gray-100" style={{ background: '#f9fafb' }}>
        <SectionContainer border className="py-20 md:py-28">
          <span
            className="text-[11px] font-bold tracking-[0.18em] uppercase mb-4 block"
            style={{ color: RED }}
          >
            Возможности
          </span>
          <h2 className="text-2xl md:text-3xl font-bold mb-14" style={{ color: NAVY }}>
            Что умеет система
          </h2>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {FEATURES.map((f, i) => (
              <motion.div
                key={f.title}
                initial={{ opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.5, delay: i * 0.07 }}
                className="p-6 rounded-2xl bg-white border border-gray-100 shadow-sm hover:shadow-md transition-shadow"
              >
                <div
                  className="w-10 h-10 rounded-xl flex items-center justify-center mb-4"
                  style={{ background: 'linear-gradient(135deg, #fff1f0, #fff8ee)' }}
                >
                  <f.Icon size={18} style={{ color: RED }} />
                </div>
                <h3 className="font-semibold text-sm mb-2" style={{ color: NAVY }}>
                  {f.title}
                </h3>
                <p className="text-xs text-gray-500 leading-relaxed">{f.desc}</p>
              </motion.div>
            ))}
          </div>
        </SectionContainer>
      </section>

      {/* ═══ TECH STACK ══════════════════════════════════════════════════════ */}
      <section className="w-full bg-white border-t border-gray-100">
        <SectionContainer border className="py-16">
          <span className="text-[11px] font-bold tracking-[0.18em] uppercase text-gray-400 mb-6 block">
            Стек технологий
          </span>
          <div className="flex flex-wrap gap-3">
            {STACK.map(({ label, color }) => (
              <span
                key={label}
                className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-gray-50 border border-gray-200 text-sm font-medium text-gray-700 hover:border-gray-300 transition-colors cursor-default"
              >
                <span className="w-2 h-2 rounded-full shrink-0" style={{ background: color }} />
                {label}
              </span>
            ))}
          </div>
        </SectionContainer>
      </section>

      
    </>
  );
}
