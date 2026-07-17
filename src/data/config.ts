export const siteConfig = {
  name: "Ateliê Biblioteca Aromática",
  shortName: "Biblioteca Aromática",
  tagline: "Cada aroma, um capítulo seu.",
  description:
    "Conheça sabonetes artesanais, velas aromáticas, aromatizadores e presentes produzidos com cuidado pelo Ateliê Biblioteca Aromática.",

  url: "https://www.ateliebibliotecaaromatica.com.br/",

  owner: {
    name: "Érika Miranda",
    firstName: "Érika",
  },

  contact: {
    whatsapp: "5531999953373",
    whatsappDisplay: "+55 31 99995-3373",
    instagram: "atelie.bibliotecaaromatica",
    instagramUrl: "https://instagram.com/atelie.bibliotecaaromatica",
  },

  developer: {
    name: "Daniel Meireles",
    firstName: "Daniel",
    url: "https://danielmeireles.dev",
    whatsapp: "5531997111572",
    pitch: "Quer uma página como esta para a sua loja?",
    portfolioCta: "Ver portfólio",
    whatsappCta: "Chamar no WhatsApp",
  },

  serviceInfo: {
    hours: "Segunda a sábado, das 9h às 18h",
    region: "Região de Mário Campos, Minas Gerais",
    ordersNote:
      "Encomendas maiores: sinal de 50% e prazo mínimo de 20 dias.",
  },
} as const;

export const whatsappMessages = {
  general: `Olá, ${siteConfig.owner.firstName}! Conheci o Ateliê Biblioteca Aromática pelo catálogo e gostaria de mais informações.`,
  customOrder: `Olá, ${siteConfig.owner.firstName}! Gostaria de conversar sobre uma encomenda personalizada para o Ateliê Biblioteca Aromática.`,
  about: `Olá, ${siteConfig.owner.firstName}! Vi o site do Ateliê Biblioteca Aromática e gostaria de falar com você.`,
  developer: `Olá, ${siteConfig.developer.firstName}! Vi o site do Ateliê Biblioteca Aromática e gostaria de conversar sobre um site para o meu negócio.`,
} as const;
