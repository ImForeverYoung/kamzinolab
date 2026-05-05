'use client';

import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { SectionContainer } from './section-container';

export default function Hero() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    // Срабатывает при каждом маунте (в т.ч. при возврате назад через Next.js router)
    setVisible(true);

    // Обработчик bfcache — браузер восстанавливает страницу без ремаунта React
    function onPageShow(e: PageTransitionEvent) {
      if (e.persisted) {
        setVisible(false);
        // Два RAF нужны чтобы React успел применить false перед true
        requestAnimationFrame(() => requestAnimationFrame(() => setVisible(true)));
      }
    }
    window.addEventListener('pageshow', onPageShow);
    return () => window.removeEventListener('pageshow', onPageShow);
  }, []);

  return (
    <section className="relative w-full bg-white overflow-hidden">
      {/* Gradient background */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute -top-40 -right-40 w-96 h-96 bg-gradient-to-br from-blue-400 via-purple-400 to-pink-400 rounded-full blur-3xl opacity-15" />
        <div className="absolute -bottom-40 -left-20 w-80 h-80 bg-gradient-to-tr from-indigo-300 via-purple-300 to-pink-300 rounded-full blur-3xl opacity-10" />
      </div>

      <SectionContainer border>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={visible ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
          className="py-24 max-w-3xl mx-auto text-left space-y-6"
        >
          {/* Heading */}
          <h1 className="text-5xl md:text-6xl font-bold leading-tight tracking-tight text-brand-navy">
            Monitor your data
            <br />
            <span className="bg-gradient-to-r from-[#6366F1] via-[#818CF8] to-[#4F46E5] bg-clip-text text-transparent inline-block">
              in real-time
            </span>
          </h1>

          {/* Subheading */}
          <p className="text-lg text-gray-600 max-w-2xl leading-relaxed">
            High-performance development and real-time monitoring systems for modern infrastructure.
            Built with Go, TypeScript, and cutting-edge sensor technologies.
          </p>

          {/* CTA */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={visible ? { opacity: 1, y: 0 } : { opacity: 0, y: 10 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex flex-row gap-3 items-center pt-2"
          >
            <button className="bg-[#6366F1] text-white px-6 py-3 font-medium rounded-lg hover:bg-[#7375e6] transition-colors">
              Contact us →
            </button>
          </motion.div>
        </motion.div>
      </SectionContainer>
    </section>
  );
}
