export type Language = 'RU' | 'EN' | 'KZ';

export const dictionaries = {
  RU: {
    nav: {
      contact: 'Связаться',
    },
    hero: {
      title1: 'Мониторинг ваших данных',
      title2: 'в реальном времени',
      subtitle: 'Высокопроизводительная разработка и системы мониторинга в реальном времени для современной инфраструктуры. Создано на базе Go, TypeScript и передовых сенсорных технологий.',
      contactBtn: 'Связаться с нами',
    },
    featured: {
      eyebrow: 'Featured Project',
      flagship: 'Flagship',
      title1: 'Мониторинг пьезометрических данных',
      title2: 'в реальном времени',
      desc: 'Платформа для непрерывного сбора, хранения и визуализации данных грунтовых вод на строительных и промышленных объектах Казахстана.',
      tags: ['IoT / Сенсоры', 'Мониторинг', 'Веб-платформа'],
      more: 'Подробнее о проекте',
      metrics: [
        { value: '200+',  label: 'Активных датчиков', sub: 'в полевых условиях' },
        { value: '<50мс', label: 'Задержка данных',    sub: 'от датчика до UI' },
        { value: '99.9%', label: 'Аптайм системы',     sub: 'гарантированный SLA' },
        { value: '2024',  label: 'Год запуска',         sub: 'в продакшн' },
      ],
    },
    stats: {
      title1: 'Надёжная основа',
      title2: 'для ваших данных',
      items: [
        { value: '5+',    label: 'лет опыта',       sub: 'в enterprise-разработке'  },
        { value: 'Zero',  label: 'Downtime Deploy',  sub: 'без остановки сервиса'    },
        { value: '24/7',  label: 'сбор данных',     sub: 'в реальном времени'       },
        { value: 'Go',    label: '& TypeScript',    sub: 'стек для highload-систем' },
      ]
    },
    team: {
      eyebrow: 'Команда',
      title1: 'Восемь инженеров.',
      title2: 'Один продукт.',
      fullstack: 'FULL-STACK · 7',
      roles: {
        'Руководитель': 'Руководитель',
        'Тимлид': 'Тимлид',
        'Full-stack': 'Full-stack разработчик',
      }
    },
    footer: {
      contactEyebrow: 'Контакт',
      contactTitle: 'Есть сложная задача?',
      contactDesc: 'Расскажите о проекте - разберёмся в деталях и предложим решение.',
      cols: [
        {
          title: 'Услуги',
          links: [
            { label: 'Веб-разработка', href: '#' },
            { label: 'Системы мониторинга', href: '#' },
            { label: 'Консультация', href: '#' },
          ],
        },
        {
          title: 'Контакты',
          links: [
            { label: 'ТОО «KAMZINO LAB»', href: '' },
            { label: 'Z05P9A0, Казахстан, Астана,\nПр. Улы Дала 61', href: '' },
            { label: '+7 (777) 275 88 50', href: '' },
            { label: 'alzhanovbb@gmail.com', href: '' },
          ],
        },
      ],
      copyright: '© 2024 KAMZINO LAB — г. Астана, Казахстан',
      privacy: 'Конфиденциальность',
      terms: 'Условия работы',
    },
    form: {
      labels: { name: 'Имя', phone: 'Телефон', email: 'Электронная почта' },
      placeholders: { name: 'Как вас зовут?', phone: '+7 (___) ___-__-__', email: 'you@company.com' },
      submit: 'Отправить заявку',
      sending: 'Отправка…',
      successTitle: 'Заявка отправлена',
      successDesc: 'Свяжемся с вами в течение одного рабочего дня.',
      error: 'Не удалось отправить. Попробуйте позже.',
    },
    whatsapp: {
      scan: 'Отсканируй QR-код камерой телефона, чтобы открыть чат',
      openDesktop: 'Открыть в браузере'
    }
  },
  EN: {
    nav: {
      contact: 'Contact Us',
    },
    hero: {
      title1: 'Monitor your data',
      title2: 'in real-time',
      subtitle: 'High-performance development and real-time monitoring systems for modern infrastructure. Built with Go, TypeScript, and cutting-edge sensor technologies.',
      contactBtn: 'Contact us',
    },
    featured: {
      eyebrow: 'Featured Project',
      flagship: 'Flagship',
      title1: 'Piezometric data monitoring',
      title2: 'in real-time',
      desc: 'A platform for continuous collection, storage, and visualization of groundwater data at construction and industrial sites in Kazakhstan.',
      tags: ['IoT / Sensors', 'Monitoring', 'Web Platform', '2024'],
      more: 'Project Details',
      metrics: [
        { value: '200+',  label: 'Active sensors', sub: 'in the field' },
        { value: '<50ms', label: 'Data latency',    sub: 'from sensor to UI' },
        { value: '99.9%', label: 'System uptime',     sub: 'guaranteed SLA' },
        { value: '2024',  label: 'Launch year',         sub: 'in production' },
      ],
    },
    stats: {
      title1: 'A reliable foundation',
      title2: 'for your data',
      items: [
        { value: '5+',    label: 'years of experience', sub: 'in enterprise dev'  },
        { value: 'Zero',  label: 'Downtime Deploy',  sub: 'no service interruption'      },
        { value: '24/7',  label: 'data collection',     sub: 'in real-time'       },
        { value: 'Go',    label: '& TypeScript',    sub: 'stack for highload systems' },
      ]
    },
    team: {
      eyebrow: 'Team',
      title1: 'Eight engineers.',
      title2: 'One product.',
      fullstack: 'FULL-STACK · 7',
      roles: {
        'Руководитель': 'Head',
        'Тимлид': 'Team Lead',
        'Full-stack': 'Full-stack Developer',
      }
    },
    footer: {
      contactEyebrow: 'Contact',
      contactTitle: 'Have a complex task?',
      contactDesc: 'Tell us about your project - we will figure out the details and propose a solution.',
      cols: [
        {
          title: 'Services',
          links: [
            { label: 'Web Development', href: '#' },
            { label: 'Monitoring Systems', href: '#' },
            { label: 'Consultation', href: '#' },
          ],
        },
        {
          title: 'Contacts',
          links: [
            { label: 'KAMZINO LAB LLP', href: '' },
            { label: 'Z05P9A0, Kazakhstan, Astana,\nUly Dala Ave 61', href: '' },
            { label: '+7 (777) 275 88 50', href: '' },
            { label: 'alzhanovbb@gmail.com', href: '' },
          ],
        },
      ],
      copyright: '© 2024 KAMZINO LAB — Astana, Kazakhstan',
      privacy: 'Privacy Policy',
      terms: 'Terms of Service',
    },
    form: {
      labels: { name: 'Name', phone: 'Phone', email: 'Email' },
      placeholders: { name: 'What is your name?', phone: '+7 (___) ___-__-__', email: 'you@company.com' },
      submit: 'Submit Request',
      sending: 'Sending…',
      successTitle: 'Request sent',
      successDesc: 'We will contact you within one business day.',
      error: 'Failed to send. Please try again later.',
    },
    whatsapp: {
      scan: 'Scan the QR code with your phone camera to open chat',
      openDesktop: 'Open in Browser'
    }
  },
  KZ: {
    nav: {
      contact: 'Байланысу',
    },
    hero: {
      title1: 'Деректеріңізді бақылаңыз',
      title2: 'нақты уақытта',
      subtitle: 'Заманауи инфрақұрылымға арналған жоғары өнімділікті әзірлеу және нақты уақыттағы бақылау жүйелері. Go, TypeScript және озық сенсорлық технологиялармен жасалған.',
      contactBtn: 'Бізбен байланысу',
    },
    featured: {
      eyebrow: 'Таңдаулы Жоба',
      flagship: 'Флагман',
      title1: 'Пьезометриялық деректерді бақылау',
      title2: 'нақты уақытта',
      desc: 'Қазақстандағы құрылыс және өнеркәсіп нысандарындағы жерасты суларының деректерін үздіксіз жинау, сақтау және визуалдау платформасы.',
      tags: ['IoT / Сенсорлар', 'Бақылау', 'Веб-платформа', '2024'],
      more: 'Жоба туралы толығырақ',
      metrics: [
        { value: '200+',  label: 'Белсенді сенсорлар', sub: 'далалық жағдайда' },
        { value: '<50мс', label: 'Деректердің кідірісі',    sub: 'сенсордан UI-ға дейін' },
        { value: '99.9%', label: 'Жүйе жұмыс уақыты',     sub: 'кепілдендірілген SLA' },
        { value: '2024',  label: 'Іске қосылған жыл',         sub: 'өндірісте' },
      ],
    },
    stats: {
      title1: 'Деректеріңіз үшін',
      title2: 'сенімді негіз',
      items: [
        { value: '5+',    label: 'жыл тәжірибе',       sub: 'корпоративтік әзірлеуде'  },
        { value: 'Zero',  label: 'Downtime Deploy',         sub: 'қызметті тоқтатпай'        },
        { value: '24/7',  label: 'деректер жинау',     sub: 'нақты уақыт режимінде'       },
        { value: 'Go',    label: '& TypeScript',    sub: 'жоғары жүктемелі жүйелер стегі' },
      ]
    },
    team: {
      eyebrow: 'Команда',
      title1: 'Сегіз инженер.',
      title2: 'Бір өнім.',
      fullstack: 'FULL-STACK · 7',
      roles: {
        'Руководитель': 'Жетекші',
        'Тимлид': 'Тимлид',
        'Full-stack': 'Full-stack әзірлеуші',
      }
    },
    footer: {
      contactEyebrow: 'Байланыс',
      contactTitle: 'Күрделі тапсырма бар ма?',
      contactDesc: 'Жоба туралы айтып беріңіз - біз егжей-тегжейлі талдап, шешім ұсынамыз.',
      cols: [
        {
          title: 'Қызметтер',
          links: [
            { label: 'Веб-әзірлеу', href: '#' },
            { label: 'Бақылау жүйелері', href: '#' },
            { label: 'Кеңес беру', href: '#' },
          ],
        },
        {
          title: 'Байланыс',
          links: [
            { label: 'ЖШС «KAMZINO LAB»', href: '' },
            { label: 'Z05P9A0, Қазақстан, Астана,\nҰлы Дала д-лы 61', href: '' },
            { label: '+7 (777) 275 88 50', href: '' },
            { label: 'alzhanovbb@gmail.com', href: '' },
          ],
        },
      ],
      copyright: '© 2024 KAMZINO LAB — Астана қ., Қазақстан',
      privacy: 'Құпиялық саясаты',
      terms: 'Жұмыс шарттары',
    },
    form: {
      labels: { name: 'Аты', phone: 'Телефон', email: 'Электрондық пошта' },
      placeholders: { name: 'Сіздің атыңыз кім?', phone: '+7 (___) ___-__-__', email: 'you@company.com' },
      submit: 'Өтініш жіберу',
      sending: 'Жіберілуде…',
      successTitle: 'Өтініш жіберілді',
      successDesc: 'Бір жұмыс күні ішінде сізбен байланысамыз.',
      error: 'Жіберу мүмкін болмады. Кейінірек қайталап көріңіз.',
    },
    whatsapp: {
      scan: 'Чатты ашу үшін телефон камерасымен QR кодты сканерлеңіз',
      openDesktop: 'Браузерде ашу'
    }
  }
};
