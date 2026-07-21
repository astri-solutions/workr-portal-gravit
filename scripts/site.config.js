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
    primary:   "#ff0000",
    secondary: "#ff00c6",
    tertiary:  "#61f492",
  },

  fonts: {
    display: "Plus Jakarta Sans",
    body:    "Inter",
  },

  ticker: {
    type:      "static",
    iframeUrl: "",
    items: [
      { symbol: 'WRLT3', price: 'R$ 00,00', change: '0,00%', direction: 'up' }
    ],
  },

  nav: [
    { id: "central-resultados", label: "Resultados", href: "/central-resultados.html", children: [] },
    { id: "docs-cvm", label: "Documentos CVM", href: "/documentos-cvm.html", children: [] },
    { id: "atas-assembleias", label: "Atas e Assembleias", href: "/atas-assembleias.html", children: [] },
    { id: "fale-ri", label: "Fale com RI", href: "/fale-com-ri.html", children: [] },
  ],

  empresas: [
    { id: "principal-1784328469005", label: "Gravit", short: "G" }
  ],

  header: { variant: 'tabmenu' },

  languages: ["pt-BR"],

  topbar: {
    ri: { label: "Relações com Investidores", url: "/" },
    institucional: { label: "Institucional", url: "#" },
    showTicker: true,
  },

  restrictedNav: [],

  footer: {
    variant: 'simple',
    address:   "",
    email:     "",
    phone:     "",
    hours:     "",
    copyright: "©Copyright Gravit 2026",
    social: { linkedin: "#", instagram: "#", facebook: "#" },
    legalLinks: [
      { label: "Termos e Condições", href: "/termos-e-condicoes.html" },
      { label: "Política de Privacidade", href: "/politica-de-privacidade.html" },
      { label: "Definições de Cookies", href: "/definicao-de-cookies.html" }
    ],
    legalText: "As informações contidas neste site são de caráter meramente informativo e não constituem oferta de valores mobiliários.",
  },

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

  errorPages: [],

  banner: [],

  supabase: {
    url:      "https://mmhuwlpsgnvoxyuofliq.supabase.co",
    anonKey:  "sb_publishable_BBSPbQc2kZngiK45ecfXaA_X4NANiGj",
    portalId: "9493dc14-ef12-4f8a-a35f-8229c103252a",
  },

};
