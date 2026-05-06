'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { AnimatePresence, motion } from 'framer-motion';
import { MessageCircle } from 'lucide-react';

export default function CompactHeader() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    function onScroll() {
      setVisible(window.scrollY > 72);
    }
    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          initial={{ opacity: 0, y: -16 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -16 }}
          transition={{ duration: 0.22, ease: [0.22, 1, 0.36, 1] }}
          className="fixed top-4 left-1/2 -translate-x-1/2 z-50 pointer-events-none"
        >
          {/* Pill shell */}
          <div
            className="pointer-events-auto flex items-center gap-2 px-1.5 py-1.5 rounded-full border border-white/10"
            style={{
              background: '#1E1B4B',
              boxShadow: '0 8px 32px rgba(0,0,0,0.28), 0 2px 8px rgba(0,0,0,0.18)',
            }}
          >
            {/* Wordmark */}
            <button
              onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
              className="px-4 py-1.5 text-sm font-bold text-white whitespace-nowrap hover:opacity-80 transition-opacity"
            >
              KAMZINO <span className="text-white/35">LAB</span>
            </button>

            {/* CTA */}
            <a
              href="#contact"
              className="flex items-center gap-1.5 px-4 py-1.5 bg-[#6366F1] hover:bg-[#4F46E5] text-white text-xs font-semibold rounded-full transition-colors"
            >
              <MessageCircle size={12} />
              Связаться
            </a>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
