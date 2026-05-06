'use client';

import { useState } from 'react';
import { ArrowRight, Check } from 'lucide-react';
import { useLanguage } from '@/lib/i18n';

type Field = 'name' | 'phone' | 'email';

const FIELDS: { id: Field; type: string }[] = [
  { id: 'name',  type: 'text'  },
  { id: 'phone', type: 'tel'   },
  { id: 'email', type: 'email' },
];

export default function FooterContactForm() {
  const { t } = useLanguage();
  const [values, setValues]   = useState({ name: '', phone: '', email: '' });
  const [focused, setFocused] = useState<Field | null>(null);
  const [sent, setSent]       = useState(false);
  const [sending, setSending] = useState(false);
  const [error, setError]     = useState<string | null>(null);

  function handleChange(id: Field, value: string) {
    setValues(v => ({ ...v, [id]: value }));
    if (error) setError(null);
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!values.name || !values.phone || !values.email) return;

    setSending(true);
    setError(null);

    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(values),
      });

      if (!res.ok) {
        const data = await res.json().catch(() => ({}));
        throw new Error(data.error ?? 'Ошибка сервера');
      }

      setSent(true);
    } catch (err) {
      setError(err instanceof Error ? err.message : t.form.error);
    } finally {
      setSending(false);
    }
  }

  return (
    // Относительный контейнер — размер всегда определяется формой,
    // сообщение об успехе накладывается поверх через absolute.
    <div className="relative w-full">

      {/* ── Форма — всегда в DOM, управляем видимостью через opacity ── */}
      <form
        onSubmit={handleSubmit}
        aria-hidden={sent}
        className="flex flex-col gap-3 w-full transition-opacity duration-300"
        style={{ opacity: sent ? 0 : 1, pointerEvents: sent ? 'none' : 'auto' }}
      >
        {FIELDS.map(({ id, type }) => (
          <div key={id} className="flex flex-col gap-1.5">
            <label
              htmlFor={`footer-${id}`}
              className="text-xs font-semibold uppercase tracking-[0.14em] text-gray-500"
            >
              {t.form.labels[id as keyof typeof t.form.labels]}
            </label>
            <input
              id={`footer-${id}`}
              type={type}
              value={values[id]}
              placeholder={t.form.placeholders[id as keyof typeof t.form.placeholders]}
              required
              autoComplete={id === 'name' ? 'name' : id === 'phone' ? 'tel' : 'email'}
              onChange={e => handleChange(id, e.target.value)}
              onFocus={() => setFocused(id)}
              onBlur={() => setFocused(null)}
              className="w-full px-4 py-3 text-base text-[#1E1B4B] bg-white rounded-lg outline-none placeholder:text-gray-400 transition-all duration-150"
              style={{
                border:     focused === id ? '1px solid #6366F1' : '1px solid #E5E7EB',
                boxShadow:  focused === id ? '0 0 0 3px rgba(99,102,241,0.10)' : 'none',
              }}
            />
          </div>
        ))}

        <button
          type="submit"
          disabled={sending}
          className="mt-1 w-full flex items-center justify-center gap-2 px-5 py-3.5 bg-[#6366F1] hover:bg-[#4F46E5] disabled:opacity-60 text-white text-base font-semibold rounded-lg transition-colors duration-150"
        >
          {sending ? (
            <>
              <span className="w-4 h-4 rounded-full border-2 border-white/30 border-t-white animate-spin" />
              {t.form.sending}
            </>
          ) : (
            <>
              {t.form.submit}
              <ArrowRight size={14} />
            </>
          )}
        </button>

        {error && (
          <p className="text-xs text-red-500 text-center">{error}</p>
        )}
      </form>

      {/* ── Успех — накладывается поверх, появляется плавно ── */}
      <div
        aria-hidden={!sent}
        className="absolute inset-0 flex flex-col justify-center gap-3 transition-opacity duration-300"
        style={{ opacity: sent ? 1 : 0, pointerEvents: sent ? 'auto' : 'none' }}
      >
        <div className="w-10 h-10 rounded-full bg-[#EEF2FF] flex items-center justify-center">
          <Check size={18} className="text-[#6366F1]" />
        </div>
        <p className="text-[#1E1B4B] font-semibold text-sm">{t.form.successTitle}</p>
        <p className="text-gray-500 text-sm leading-relaxed">
          {t.form.successDesc}
        </p>
      </div>

    </div>
  );
}
