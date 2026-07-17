// scripts/site.config.js
// Gerado pelo Workr Lite CMS — não editar manualmente.
export const siteConfig = {

  company: {
    name:        "Gravit",
    nameShort:   "Gravit",
    description: 'Relações com Investidores — Gravit.',
    logoOriginal: '/assets/logotipo/logotipo-original.webp',
    logoNegative: '/assets/logotipo/logotipo-negative.webp',
    logoContrast: '/assets/logotipo/logotipo-negative.webp',
    favicon:      '/favicon.png',
  },

  colors: {
    primary:   "#05cbeb",
    secondary: "#235239",
    tertiary:  "#b81d5d",
  },

  fonts: {
    display: "poppins",
    body:    "inter",
  },

  ticker: {
    type:      "iframe",
    iframeUrl: "",
    items: [],
  },

  nav: [
    { label: "Resultados", href: "/central-resultados.html", children: [] },
    { label: "Documentos CVM", href: "/documentos-cvm.html", children: [] },
    { label: "Fale com RI", href: "/fale-com-ri.html", children: [] },
    { label: "Mailing", href: "/mailing.html", children: [] },
    { label: "Canal Teste", href: "/", children: [] },
  ],

  empresas: [
    { id: 'principal', label: "Gravit", short: 'G' },
  ],

  supabase: {
    url:      "https://mmhuwlpsgnvoxyuofliq.supabase.co",
    anonKey:  "sb_publishable_BBSPbQc2kZngiK45ecfXaA_X4NANiGj",
    portalId: null,
  },

  header: { variant: 'sidebar' },

  seo: {
    title:             "Gravit - Teste Portal",
    description:       "",
    googleAnalyticsId: "",
    clarityId:         "",
  },

  contact: {
    email: "",
  },

  languages: ["pt-BR","en","es"],

  restrictedNav: [],

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
