'use client';

import { useState, useRef } from 'react';
import { ArrowRight, Check } from 'lucide-react';

type Field = 'name' | 'phone' | 'email';

const FIELDS: { id: Field; label: string; type: string; placeholder: string }[] = [
  { id: 'name',  label: 'Имя',            type: 'text',  placeholder: 'Как вас зовут?'         },
  { id: 'phone', label: 'Телефон',         type: 'tel',   placeholder: '+7 (___) ___-__-__'     },
  { id: 'email', label: 'Электронная почта', type: 'email', placeholder: 'you@company.com'       },
];

export default function FooterContactForm() {
  const [values, setValues]   = useState({ name: '', phone: '', email: '' });
  const [focused, setFocused] = useState<Field | null>(null);
  const [sent, setSent]       = useState(false);
  const [sending, setSending] = useState(false);

  function handleChange(id: Field, value: string) {
    setValues(v => ({ ...v, [id]: value }));
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!values.name || !values.phone || !values.email) return;
    setSending(true);
    // Simulate send — replace with real API call
    await new Promise(r => setTimeout(r, 900));
    setSending(false);
    setSent(true);
  }

  if (sent) {
    return (
      <div className="flex flex-col items-start gap-3 py-2">
        <div className="w-10 h-10 rounded-full bg-[#EEF2FF] flex items-center justify-center">
          <Check size={18} className="text-[#6366F1]" />
        </div>
        <p className="text-[#1E1B4B] font-semibold text-sm">Заявка отправлена</p>
        <p className="text-gray-500 text-sm leading-relaxed">
          Свяжемся с вами в течение одного рабочего дня.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-3 w-full">
      {FIELDS.map(({ id, label, type, placeholder }) => (
        <div key={id} className="flex flex-col gap-1.5">
          <label
            htmlFor={`footer-${id}`}
            className="text-[11px] font-semibold uppercase tracking-[0.14em] text-gray-400"
          >
            {label}
          </label>
          <input
            id={`footer-${id}`}
            type={type}
            value={values[id]}
            placeholder={placeholder}
            required
            autoComplete={id === 'name' ? 'name' : id === 'phone' ? 'tel' : 'email'}
            onChange={e => handleChange(id, e.target.value)}
            onFocus={() => setFocused(id)}
            onBlur={() => setFocused(null)}
            className="w-full px-4 py-3 text-sm text-[#1E1B4B] bg-white rounded-lg outline-none placeholder:text-gray-300 transition-all duration-150"
            style={{
              border: focused === id
                ? '1px solid #6366F1'
                : '1px solid #E5E7EB',
              boxShadow: focused === id
                ? '0 0 0 3px rgba(99,102,241,0.10)'
                : 'none',
            }}
          />
        </div>
      ))}

      <button
        type="submit"
        disabled={sending}
        className="mt-1 w-full flex items-center justify-center gap-2 px-5 py-3 bg-[#6366F1] hover:bg-[#4F46E5] disabled:opacity-60 text-white text-sm font-semibold rounded-lg transition-colors duration-150"
      >
        {sending ? (
          <>
            <span className="w-4 h-4 rounded-full border-2 border-white/30 border-t-white animate-spin" />
            Отправка…
          </>
        ) : (
          <>
            Отправить заявку
            <ArrowRight size={14} />
          </>
        )}
      </button>
    </form>
  );
}
