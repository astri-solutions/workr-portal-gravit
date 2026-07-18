// scripts/site.config.js
// Gerado pelo Workr Lite CMS — não editar manualmente.
export const siteConfig = {

  company: {
    name:        "Gravit",
    nameShort:   "Gravit",
    description: 'Relações com Investidores — Gravit.',
    logoOriginal: '/assets/logotipo/logotipo-original.svg',
    logoNegative: '/assets/logotipo/logotipo-negative.svg',
    logoContrast: '/assets/logotipo/logotipo-negative.svg',
    favicon:      '/favicon.svg',
  },

  colors: {
    primary:   "#ff00b5",
    secondary: "#ff0000",
    tertiary:  "#f46161",
  },

  fonts: {
    display: "Plus Jakarta Sans",
    body:    "Inter",
  },

  ticker: {
    type: 'static',
    iframeUrl: '',
    items: [{ symbol: 'WRLT3', price: 'R$ 00,00', change: '0,00%', direction: 'up' }],
  },

  nav: [
    { id: "shqkdps", label: "A Companhia", href: "/", pageType: "show", children: [] },
  ],

  empresas: [
    { id: 'principal', label: "Gravit", short: "G" },
  ],

  supabase: {
    url:      "https://mmhuwlpsgnvoxyuofliq.supabase.co",
    anonKey:  "sb_publishable_BBSPbQc2kZngiK45ecfXaA_X4NANiGj",
    portalId: "9493dc14-ef12-4f8a-a35f-8229c103252a",
  },

  header: { variant: 'sidebar' },

  seo: {
    title:             "Gravit — Relações com Investidores",
    description:       "",
    googleAnalyticsId: "",
    clarityId:         "",
  },

  contact: {
    email: "",
  },

  languages: ["pt-BR"],

  restrictedNav: [],

  splash: {
    enabled: false,
    size: 'md',
    titulo: '',
    texto: '',
    conteudo: '',
    legenda: '',
    buttons: [],
  },

  cookies: {
    enabled: true,
    layout: 'full',
    theme: 'light',
    title: 'Utilizamos cookies',
    description: 'Usamos cookies para melhorar sua experiência.',
    acceptLabel: 'Aceitar todos',
    rejectLabel: 'Rejeitar',
    showReject: true,
    showCustomize: false,
  },

  banner: [],

  footer: {
    variant:   'simple',
    address:   "",
    email:     "",
    phone:     "",
    hours:     "",
    copyright: "©Copyright Gravit 2026",
    social: { linkedin: "#", instagram: "#", facebook: "#" },
    legalLinks: [
      { label: "Termos e Condições", href: '/termos-e-condicoes.html' },
      { label: "Política de Privacidade", href: '/politica-de-privacidade.html' },
      { label: "Definições de Cookies", href: '/definicao-de-cookies.html' }
    ],
    legalText: "As informações contidas neste site são de caráter meramente informativo e não constituem oferta de valores mobiliários.",
  },

};
