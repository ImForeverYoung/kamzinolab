import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./lib/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      // фиолетовая палитра
      colors: {
        brand: {
          light: '#EEF2FF',    // Фон блоков
          purple: '#6366F1',   // Основной акцент (Indigo)
          dark: '#4F46E5',     // Кнопки при наведении
          navy: '#1E1B4B',     // Цвет для основного текста
        },
      },
      // 2. Мягкие тени как у Stripe
      boxShadow: {
        'stripe': '0 7px 14px 0 rgba(60, 66, 87, 0.08), 0 3px 6px 0 rgba(0, 0, 0, 0.12)',
        'stripe-hover': '0 13px 27px -5px rgba(50, 50, 93, 0.25), 0 8px 16px -8px rgba(0, 0, 0, 0.3)',
      },
      // 3. Плавные анимации для элементов
      animation: {
        'fade-in': 'fadeIn 0.5s ease-out forwards',
        'float': 'float 3s ease-in-out infinite',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0', transform: 'translateY(10px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' },
        }
      },
      // 4. Шрифты (если будешь подключать через Google Fonts или локально)
      fontFamily: {
        sans: ['Inter', 'ui-sans-serif', 'system-ui'],
        mono: ['JetBrains Mono', 'ui-monospace', 'SFMono-Regular'],
      },
    },
    container: {
      center: true, // Это автоматически добавит mx-auto ко всем контейнерам
      padding: {
        DEFAULT: '1rem',
        md: '2rem', // Это добавит базовые отступы по бокам
      },
      screens: {
        '2xl': '1280px', // Ограничиваем максимальную ширину как у Stripe
      },
    },
  },
  plugins: [],
};
export default config;