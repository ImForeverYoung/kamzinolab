'use client';

import { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import { Globe, MessageCircle, X, ArrowRight } from 'lucide-react';
import { cn } from '@/lib/utils';
import { SectionContainer } from './section-container';

const NAV_LINKS = [
  { label: 'Связаться',    href: '#contact'    },
];

const LANGUAGES = ['RU', 'EN', 'KZ'];

const WA_NUMBER  = '77071740428';
const WA_DESKTOP = `https://web.whatsapp.com/send?phone=${WA_NUMBER}`;
const WA_MOBILE  = `https://wa.me/${WA_NUMBER}`;
const QR_URL     = `https://api.qrserver.com/v1/create-qr-code/?size=160x160&data=${encodeURIComponent(WA_MOBILE)}`;

export default function Header() {
  const [musicOn,  setMusicOn]  = useState(false);
  const [lang,     setLang]     = useState('RU');
  const [langOpen, setLangOpen] = useState(false);
  const [waOpen,   setWaOpen]   = useState(false);

  const langRef = useRef<HTMLDivElement>(null);
  const waRef   = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function handler(e: MouseEvent) {
      if (langRef.current && !langRef.current.contains(e.target as Node)) setLangOpen(false);
      if (waRef.current  && !waRef.current.contains(e.target as Node))   setWaOpen(false);
    }
    document.addEventListener('mousedown', handler);
    return () => document.removeEventListener('mousedown', handler);
  }, []);

  return (
    // h-16/h-20 живёт здесь — SectionContainer и левый блок растянутся до этой высоты
    <header className="w-full bg-white border-b border-gray-200 sticky top-0 z-50 h-15 md:h-15">

      {/* px-0 md:px-0 — переопределяем дефолтные отступы SectionContainer:
          левый блок сам управляет своим отступом через pl-6 md:pl-10            */}
      <SectionContainer border className="h-full flex justify-between items-stretch px-0 md:px-0">

        {/* ── LEFT: ячейки на полную высоту хедера ── */}
        <div className="flex items-stretch border-r border-gray-200">

          {/* Логотип */}
          <div className="flex items-center px-6 md:px-10 border-r border-gray-200 select-none">
            <span className="font-bold text-base text-[#1E1B4B] whitespace-nowrap">
              KAMZINO <span className="text-gray-400 font-bold">LAB</span>
            </span>
          </div>

          {/* Музыка */}
          <button
            onClick={() => setMusicOn(v => !v)}
            title={musicOn ? 'Выключить музыку' : 'Включить музыку'}
            className={cn(
              'flex items-center justify-center w-15 md:w-15 border-r border-gray-200 transition-colors',
              musicOn ? 'text-[#6366F1] bg-indigo-50' : 'text-gray-400 hover:text-gray-600 hover:bg-gray-50'
            )}
          >
            <svg width="15" height="15" viewBox="0 0 16 16" fill="currentColor">
              <rect x="1"  y={musicOn ? 3 : 5}  width="2.5" height={musicOn ? 10 : 9}  rx="1.25" />
              <rect x="6"  y={musicOn ? 1 : 2}  width="2.5" height={musicOn ? 14 : 12} rx="1.25" />
              <rect x="11" y={musicOn ? 4 : 6}  width="2.5" height={musicOn ? 9  : 8}  rx="1.25" />
            </svg>
          </button>

          {/* Язык */}
          <div className="relative border-r border-gray-200" ref={langRef}>
            <button
              onClick={() => setLangOpen(v => !v)}
              title="Сменить язык"
              className="flex items-center justify-center gap-1.5 w-15 md:w-15 h-full text-gray-500 hover:text-gray-700 hover:bg-gray-50 transition-colors text-[0.9rem] font-semibold"
            >
             
              {lang}
            </button>
            {langOpen && (
              <div className="absolute left-0 top-[calc(100%+1px)] bg-white border border-gray-200 rounded-xl shadow-lg py-1 min-w-[72px] z-50">
                {LANGUAGES.map(l => (
                  <button
                    key={l}
                    onClick={() => { setLang(l); setLangOpen(false); }}
                    className={cn(
                      'w-full text-left px-3 py-2 text-xs font-medium transition-colors',
                      l === lang ? 'text-[#6366F1] bg-indigo-50' : 'text-gray-600 hover:bg-gray-50'
                    )}
                  >
                    {l}
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* WhatsApp */}
          <div className="relative" ref={waRef}>
            <button
              onClick={() => setWaOpen(v => !v)}
              title="WhatsApp"
              className={cn(
                'flex items-center justify-center w-15 md:w-15 h-full transition-colors',
                waOpen ? 'text-green-600 bg-green-50' : 'text-gray-400 hover:text-green-500 hover:bg-green-50'
              )}
            >
              <MessageCircle size={16} />
            </button>

            {waOpen && (
              <>
                {/* Оверлей */}
                <div
                  className="fixed inset-0 bg-black/30 backdrop-blur-sm z-50"
                  onClick={() => setWaOpen(false)}
                />
                {/* Модал по центру экрана */}
                <div className="fixed left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-80 bg-white border border-gray-200 rounded-2xl shadow-2xl overflow-hidden z-50">
                  <div className="flex items-center justify-between px-5 py-4 border-b border-gray-100">
                    <span className="text-sm font-semibold text-gray-800">WhatsApp</span>
                    <button onClick={() => setWaOpen(false)} className="text-gray-400 hover:text-gray-600 transition-colors">
                      <X size={16} />
                    </button>
                  </div>
                  <div className="flex flex-col items-center gap-3 px-5 py-6">
                    <div className="p-2 border border-gray-200 rounded-xl">
                      {/* eslint-disable-next-line @next/next/no-img-element */}
                      <img src={QR_URL} alt="WhatsApp QR" width={160} height={160} className="rounded-lg" />
                    </div>
                    <p className="text-xs text-gray-500 text-center leading-relaxed">
                      Отсканируй QR-код камерой телефона,<br />чтобы открыть чат
                    </p>
                  </div>
                  <div className="px-5 pb-5">
                    <a
                      href={WA_DESKTOP}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-between w-full px-4 py-3 bg-[#25D366] hover:bg-[#1ebe5d] text-white text-sm font-semibold rounded-xl transition-colors"
                    >
                      Открыть в браузере
                      <ArrowRight size={16} />
                    </a>
                  </div>
                </div>
              </>
            )}
          </div>
        </div>

        {/* ── RIGHT: Навигация ── */}
        <nav className="hidden md:flex flex-1 items-center justify-end gap-1 pr-6 md:pr-10">
          {NAV_LINKS.map(({ label, href }) => (
            href.startsWith('#') ? (
              <a
                key={href}
                href={href}
                className="px-4 py-2 text-sm font-medium text-gray-600 rounded-lg hover:text-[#1E1B4B] hover:bg-gray-100 transition-colors"
              >
                {label}
              </a>
            ) : (
              <Link
                key={href}
                href={href}
                className="px-4 py-2 text-sm font-medium text-gray-600 rounded-lg hover:text-[#1E1B4B] hover:bg-gray-100 transition-colors"
              >
                {label}
              </Link>
            )
          ))}
        </nav>

        {/* ── RIGHT: пусто, симметрично левому ── */}
        {/* <div className="hidden md:block pr-6 md:pr-10 w-[120px]" /> */}

      </SectionContainer>
    </header>
  );
}
