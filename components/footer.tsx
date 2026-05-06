'use client';

import { SectionContainer } from './section-container';
import FooterContactForm from './footer-contact-form';
import { useLanguage } from '@/lib/i18n';

export default function Footer() {
  const { t } = useLanguage();
  return (
    <footer id="contact" className="w-full bg-[#f8fafd] border-t border-gray-200">

      {/* ── 1. CTA + Contact form ── */}
      <SectionContainer border className="border-gray-200">
        <div className="py-16 grid md:grid-cols-2 gap-12 md:gap-20 items-start">

          {/* Left — heading + description */}
          <div className="space-y-4">
            <span className="block text-base font-bold uppercase tracking-[0.18em] text-[#6366F1]">
              {t.footer.contactEyebrow}
            </span>
            <h2 className="text-4xl md:text-5xl font-bold text-[#1E1B4B] leading-tight">
              {t.footer.contactTitle}
            </h2>
            <p className="text-gray-500 leading-relaxed text-sm max-w-sm">
              {t.footer.contactDesc}
            </p>

          </div>

          {/* Right — form */}
          <FooterContactForm />

        </div>
      </SectionContainer>

      {/* ── 2. Колонки ── */}
      <SectionContainer border>
        <div className="py-12 flex justify-between gap-8">
          {t.footer.cols.map(col => (
            <div key={col.title} className="space-y-4">
              <h3 className="text-xs font-semibold text-[#1E1B4B] uppercase tracking-widest">
                {col.title}
              </h3>
              <ul className="space-y-3">
                {col.links.map(link => (
                  <li key={link.label}>
                    {link.href ? (
                      <a
                        href={link.href}
                        target={link.href.startsWith('http') ? '_blank' : undefined}
                        rel={link.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                        className="text-sm text-gray-500 hover:text-[#1E1B4B] transition-colors"
                      >
                        {link.label}
                      </a>
                    ) : (
                      <span className="text-sm text-gray-500 whitespace-pre-line">
                        {link.label}
                      </span>
                    )}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </SectionContainer>

      {/* ── 3. Нижняя полоса ── */}
      <SectionContainer border className="border-t border-gray-200">
        <div className="py-5 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-xs text-gray-400">
            {t.footer.copyright.replace('2024', new Date().getFullYear().toString())}
          </p>
          <div className="flex items-center gap-4">
            <a href="#" className="text-xs text-gray-400 hover:text-[#1E1B4B] transition-colors">{t.footer.privacy}</a>
            <a href="#" className="text-xs text-gray-400 hover:text-[#1E1B4B] transition-colors">{t.footer.terms}</a>
          </div>
        </div>
      </SectionContainer>

    </footer>
  );
}
