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
    primary:   "#462C7D",
    secondary: "#831C91",
    tertiary:  "#ff76c3",
  },

  fonts: {
    display: "Montserrat",
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
    { id: "central-resultados", label: "Resultados", href: "/central-resultados.html", pageType: "tabela-resultados", children: [] },
    { id: "docs-cvm", label: "Documentos CVM", href: "/documentos-cvm.html", pageType: "lista", children: [] },
    { id: "atas-assembleias", label: "Atas e Assembleias", href: "/atas-assembleias.html", pageType: "lista-agrupada", children: [] },
    { id: "fale-ri", label: "Fale com RI", href: "/fale-com-ri.html", children: [] },
    { id: "4wg1qnu", label: "Teste", href: "/4wg1qnu.html", pageType: "tabela", children: [] },
  ],

  empresas: [
    { id: "principal-1784328469005", label: "Gravit", short: "G" }
  ],

  header: { variant: 'sidebar' },

  languages: ["pt-BR","en","es"],

  topbar: {
    ri: { label: "Relações com Investidores", url: "/" },
    institucional: { label: "Institucional", url: "#" },
    showTicker: false,
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

  banner: [
    {
      "id": "b1",
      "imagem": null,
      "content": {
        "en": {
          "cta": "Know more",
          "titulo": "Investor Relations",
          "subtitulo": "Transparência e geração de valor para nossos acionistas."
        },
        "es": {
          "cta": "Saiba mais",
          "titulo": "Relación con inversores",
          "subtitulo": "Transparência e geração de valor para nossos acionistas."
        },
        "pt-BR": {
          "cta": "Saiba mais",
          "titulo": "Relações com Investidores",
          "subtitulo": "Transparência e geração de valor para nossos acionistas."
        }
      }
    }
  ],

  supabase: {
    url:      "https://mmhuwlpsgnvoxyuofliq.supabase.co",
    anonKey:  "sb_publishable_BBSPbQc2kZngiK45ecfXaA_X4NANiGj",
    portalId: "9493dc14-ef12-4f8a-a35f-8229c103252a",
  },

};
