const siteMeta = {
  TITLE: 'Konrad Rosa, Web Deweloper',
  DESCRIPTION:
    'Frontendowiec z twórczą wizją wdrążania projektów stron internetowych w oparciu o nowoczesne i optymalne rozwiązania webowe.',
  TOPICS: [
    {
      label: 'Typescript',
      color: '#2f72bc',
      iconPath: '/static/icons/typescript.svg',
    },
    { label: 'React', color: '#60dbfa', iconPath: '/static/icons/react.svg' },
    {
      label: 'Next.js',
      color: '#ffffff',
      iconPath: '/static/icons/next-js.svg',
    },
    {
      label: 'Node.js',
      color: '#83cd29',
      iconPath: '/static/icons/node-js.svg',
    },
  ],
  URL: 'https://konradrosa.com',
  MAIL: 'kontakt@konradrosa.com',
  THUMBNAIL: '',
}

const NAV_ITEMS = [
  {
    label: 'Projekty',
    link: '#projects',
  },
]

const CONTACTS = [
  {
    label: 'Mail',
    link: 'mailto:kontakt@konradrosa.com',
    iconPath: '/static/icons/mail.svg',
  },
  {
    label: 'Github',
    link: 'https://github.com/kerekatu',
    iconPath: '/static/icons/github.svg',
  },
  {
    label: 'Linkedin',
    link: 'https://linkedin.com/profile/konradtrosa',
    iconPath: '/static/icons/linkedin.svg',
  },
]

const PROJECTS = [
  {
    type: 'Aplikacja Web',
    title: 'Uncut Diamonds',
    description: `Strona poświęcona społeczności na discordzie. Oferuje rozbudowany system zakupów bazujący na ścisłej integracji z API discorda. Użytkownicy serwera mogą dodawać swoje własne "usługi" w zamian za [wirtualną walutę](Nie jest ona w żaden sposób monetyzowana.).`,
    tags: ['typescript', 'next.js', 'tailwind', 'faunaDB', 'next-auth'],
    previewLink: 'https://uncutdiamonds.top',
    codeLink: 'https://github.com/kerekatu/discord-shop-auth-next',
  },
]

export { siteMeta, NAV_ITEMS, CONTACTS, PROJECTS }
