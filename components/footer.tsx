import { SectionContainer } from './section-container';
import FooterContactForm from './footer-contact-form';

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
      { label: 'Piezometrics', href: '/projects' },
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

      {/* ── 1. CTA + Contact form ── */}
      <SectionContainer border className="border-gray-200">
        <div className="py-16 grid md:grid-cols-2 gap-12 md:gap-20 items-start">

          {/* Left — heading + description */}
          <div className="space-y-4">
            <span className="block text-[11px] font-bold uppercase tracking-[0.18em] text-[#6366F1]">
              Контакт
            </span>
            <h2 className="text-3xl font-bold text-[#1E1B4B] leading-tight">
              Есть сложная задача?
            </h2>
            <p className="text-gray-500 leading-relaxed text-sm max-w-sm">
              Расскажите о проекте - разберёмся в деталях
              и предложим решение.
            </p>

            {/* Contact details */}
            {/* <div className="pt-2 flex flex-col gap-2">
              <a
                href="mailto:hello@kamzino.kz"
                className="text-sm text-gray-500 hover:text-[#1E1B4B] transition-colors"
              >
                hello@kamzino.kz
              </a>
              <a
                href="https://wa.me/77071740428"
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm text-gray-500 hover:text-[#1E1B4B] transition-colors"
              >
                +7 707 174 04 28
              </a>
              <span className="text-sm text-gray-400">Астана, Казахстан</span>
            </div> */}
          </div>

          {/* Right — form */}
          <FooterContactForm />

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
