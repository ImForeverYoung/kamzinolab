import { ArrowRight } from 'lucide-react';
import { SectionContainer } from './section-container';

const LINK_COLS = [
  {
    title: 'Услуги',
    links: [
      { label: 'Веб-разработка',      href: '#' },
      { label: 'Системы мониторинга', href: '#' },
      { label: 'Консультация',        href: '#' },
    ],
  },
  {
    title: 'Проекты',
    links: [
      { label: 'Piezometrics', href: '#' },
    ],
  },
  {
    title: 'Компания',
    links: [
      { label: 'О нас',   href: '#' },
      { label: 'Команда', href: '#' },
      { label: 'Карьера', href: '#' },
    ],
  },
  {
    title: 'Контакты',
    links: [
      { label: 'hello@kamzino.kz', href: 'mailto:hello@kamzino.kz' },
      { label: 'WhatsApp',         href: 'https://wa.me/77071740428' },
      { label: 'Астана, Казахстан', href: '#' },
    ],
  },
];

export default function Footer() {
  return (
    <footer className="w-full bg-[#f8fafd] border-t border-gray-200">

      {/* ── 1. CTA ── */}
      <SectionContainer border className="border-gray-200">
        <div className="py-16 flex flex-col md:flex-row md:items-center md:justify-between gap-8">
          <div className="space-y-3 max-w-md">
            <h2 className="text-3xl font-bold text-[#1E1B4B]">
              Есть сложная задача?
            </h2>
            <p className="text-gray-500 leading-relaxed">
              Расскажите о проекте — разберёмся в деталях и предложим решение.
            </p>
          </div>
          <div className="flex items-center gap-3 shrink-0">
            <a
              href="mailto:hello@kamzino.kz"
              className="inline-flex items-center gap-2 px-5 py-2.5 bg-[#6366F1] hover:bg-[#4F46E5] text-white text-sm font-semibold rounded-lg transition-colors"
            >
              Обсудить проект <ArrowRight size={15} />
            </a>
          </div>
        </div>
      </SectionContainer>

      {/* ── 2. Колонки ── */}
      <SectionContainer border>
        <div className="py-12 grid grid-cols-2 md:grid-cols-4 gap-8">
          {LINK_COLS.map(col => (
            <div key={col.title} className="space-y-4">
              <h3 className="text-xs font-semibold text-[#1E1B4B] uppercase tracking-widest">
                {col.title}
              </h3>
              <ul className="space-y-3">
                {col.links.map(link => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      className="text-sm text-gray-500 hover:text-[#1E1B4B] transition-colors"
                    >
                      {link.label}
                    </a>
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
            © {new Date().getFullYear()} KAMZINO LAB — г. Астана, Казахстан
          </p>
          <div className="flex items-center gap-4">
            <a href="#" className="text-xs text-gray-400 hover:text-[#1E1B4B] transition-colors">Конфиденциальность</a>
            <a href="#" className="text-xs text-gray-400 hover:text-[#1E1B4B] transition-colors">Условия работы</a>
          </div>
        </div>
      </SectionContainer>

    </footer>
  );
}
