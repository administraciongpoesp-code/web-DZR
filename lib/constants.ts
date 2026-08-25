/**
 * Fuente única de verdad de datos de negocio para el sitio Dezara.
 * Todo el contenido aquí proviene del brochure oficial "DEZARA 2024" y de
 * dzr.com.mx. No modificar con datos no verificados — ver CLAUDE.md.
 */

export const SITE = {
  name: "Dezara",
  slogan: "Vestimos tu pasión.",
  url: "https://www.dzr.com.mx",
  description:
    "Dezara es una empresa duranguense encargada del diseño, fabricación y elaboración de prendas personalizadas, con alianzas comerciales de prestigio nacional e internacional.",
} as const;

export const CONTACT = {
  whatsappDisplay: "618 140 26 35",
  whatsappNumber: "526181402635", // E.164: 52 (México) + 6181402635, sin "1" (regla retirada en 2021)
  email: "dezara.admon@outlook.com",
  addressPrimary: {
    line1: "Calle Olmos #126, Fracc. Industrial Nuevo Durango",
    line2: "C.P. 34127, Durango, Dgo.",
  },
  // Dirección secundaria del brochure — vigencia sin confirmar por el cliente.
  addressSecondary: {
    line1: "Av. Peñuelas No. 15 Int. 101A, Santiago de Querétaro, Qro.",
    line2: "C.P. 76140",
    verified: false,
  },
} as const;

export const SOCIAL = {
  facebook: {
    label: "Dezara",
    url: "https://www.facebook.com/DZRSPORT",
  },
  instagram: {
    label: "@dezara_sport",
    url: "https://www.instagram.com/dezara_sport",
  },
} as const;

export function buildWhatsAppLink(message: string) {
  const params = new URLSearchParams({ text: message });
  return `https://wa.me/${CONTACT.whatsappNumber}?${params.toString()}`;
}

export const WHATSAPP_MESSAGES = {
  general: "Hola, quiero cotizar un uniforme.",
  jersey: "Hola, quiero más información sobre el jersey de Alacranes de Durango.",
  uniformes: "Hola, quiero cotizar uniformes para mi equipo o empresa.",
} as const;

export const NAV_LINKS = [
  { label: "Inicio", href: "/" },
  { label: "Uniformes", href: "/uniformes" },
  { label: "Servicios", href: "/servicios" },
  { label: "Contacto", href: "/contacto" },
] as const;

// Cifras del sitio web anterior de Dezara — no confirmadas en el brochure 2024.
// Mostrar siempre junto a su etiqueta de verificación (ver StatsBar).
export const UNVERIFIED_STATS = [
  { value: "+10", label: "años de experiencia", verified: false },
  { value: "+1,000", label: "equipos vestidos", verified: false },
  { value: "+12,000", label: "uniformes realizados", verified: false },
] as const;

export const SPONSORED_TEAMS = {
  primary: {
    name: "Alacranes de Durango",
    league: "Liga de Expansión MX (fútbol profesional)",
    crest: "/images/teams/alacranes-durango.webp",
    crestAlt: "Escudo oficial de Alacranes de Durango",
  },
  secondary: [
    {
      name: "Generales de Durango",
      league: "Liga Mexicana de Béisbol (LMB)",
    },
    {
      name: "Leñadores de Durango",
      league: "Liga Nacional de Baloncesto Profesional (LNBP)",
      crest: "/images/teams/lenadores-durango.webp",
      crestAlt: "Escudo oficial de Leñadores de Durango",
    },
  ],
} as const;

export const FABRIC = {
  name: "AERO-DRY",
  composition: "100% Poliéster",
  description:
    "Tejido transpirable y ligero, pensado para rendimiento deportivo — la base real documentada en el material fotográfico de Dezara para las playeras deportivas.",
} as const;

export const PROCESS_STEPS = [
  {
    title: "Nos ajustamos a tus necesidades",
    description: "Escuchamos el proyecto y definimos los requerimientos específicos de cada cliente.",
  },
  {
    title: "Diseñamos la prenda",
    description: "Diseñamos a la medida de lo que se necesita, ajustado al uso y la identidad del equipo o empresa.",
  },
  {
    title: "Preparamos muestras",
    description: "Se preparan muestras para que el cliente pueda escoger la prenda final.",
  },
  {
    title: "Producción con control de calidad",
    description: "Producimos bajo control de calidad en cada etapa de confección.",
  },
  {
    title: "Servicio postventa",
    description: "Damos seguimiento postventa para garantizar un mejor servicio.",
  },
] as const;

export const PRODUCT_LINES = [
  {
    slug: "deportivos",
    title: "Deportivos",
    description:
      "Fútbol, básquetbol, voleibol y béisbol. Confección y diseño textil, sublimación de alta calidad, DTF, playeras para rutas y carreras, morrales y buffs.",
    items: ["Fútbol", "Básquetbol", "Voleibol", "Béisbol", "Playeras para carreras", "Morrales y buffs"],
    image: "/images/uniformes/futbol-conjunto.webp",
    imageAlt: "Conjunto de fútbol personalizado fabricado por Dezara",
  },
  {
    slug: "industriales",
    title: "Industriales y seguridad",
    description:
      "Uniformes de trabajo y seguridad industrial: camisas, playeras polo, pantalones, chalecos, brigadista, sudaderas, chamarras y calzado de trabajo.",
    items: [
      "Camisas y blusas",
      "Playeras tipo polo",
      "Gorros y cachucha",
      "Pantalones",
      "Chalecos",
      "Uniforme de brigadista",
      "Sudaderas y chamarras",
      "Zapatos y botas de trabajo",
      "Tennis",
      "Uniformes de bombero",
    ],
  },
  {
    slug: "medicos",
    title: "Médicos y hospitalarios",
    description:
      "Línea completa para el sector salud: batas clínicas, ropa de cama hospitalaria, uniformes quirúrgicos y textiles especializados con telas antifluidos.",
    items: [
      "Bata clínica",
      "Bata de paciente",
      "Bata pediátrica",
      "Bata asilada",
      "Cofias",
      "Sábanas (cajón, campo, celáfica, envolvente, clínica)",
      "Toallas quirúrgicas y de baño",
      "Uniformes quirúrgicos",
      "Almohadas",
    ],
  },
  {
    slug: "corporativos",
    title: "Corporativos, ejecutivos y escolares",
    description:
      "Asesoría de diseño y confección para uniformes corporativos, ejecutivos, de seguridad, protección civil y escolares.",
    items: ["Uniformes corporativos", "Uniformes ejecutivos", "Seguridad y protección civil", "Uniformes escolares"],
    image: "/images/uniformes/polo-corporativo.webp",
    imageAlt: "Playera tipo polo corporativa fabricada por Dezara",
  },
] as const;

// Telas documentadas en el brochure — exclusivas de la línea médica/hospitalaria.
export const MEDICAL_FABRICS = [
  { name: "Indolino", composition: "100% algodón" },
  { name: "Bramante", composition: "100% algodón" },
  { name: "Bramante", composition: "50% poliéster / 50% algodón" },
  { name: "Atenas antifluidos", composition: "60% poliéster / 40% algodón" },
  { name: "Península antifluidos", composition: "60% poliéster / 40% algodón" },
  { name: "Percal", composition: "50% poliéster / 50% algodón" },
] as const;

export const BRANDS = [
  "Dickies",
  "Uniformes Clinik",
  "BiBo",
  "Prezenza",
  "SK7 (707 Tactical Gear)",
  "Comando Safety",
  "Big Bang Corporate Apparel",
  "Yazbek",
  "Flexi",
  "Optima",
  "Rogeri",
  "Gildan",
  "5.11",
  "Addiction to Comfort",
] as const;

export const CLIENTS = [
  "Gobierno del Estado de Durango",
  "Municipio de Durango",
  "Municipio de Canatlán",
  "Municipio de Gómez Palacio",
  "Municipio de Guadalupe Victoria",
  "Primero Empresa Minera",
  "Grupo Peñoles",
] as const;

// Fotografía real de producto Dezara (material de marketing propio,
// recuperado del sitio anterior dzr.com.mx). No incluye el jersey de
// Alacranes de Durango — ver PlaceholderMedia en Jersey Showcase.
export const GALLERY_ITEMS = [
  {
    slug: "futbol",
    title: "Fútbol",
    caption: "Conjunto personalizado de fútbol",
    image: "/images/uniformes/futbol-conjunto.webp",
    alt: "Conjunto de fútbol personalizado fabricado por Dezara, playera y short en tonos vino y celeste",
  },
  {
    slug: "basquetbol",
    title: "Básquetbol",
    caption: 'Conjunto "Cienega Grande"',
    image: "/images/uniformes/basquet-cienega-grande.webp",
    alt: "Jersey de básquetbol negro y rojo fabricado por Dezara para el equipo Cienega Grande",
  },
  {
    slug: "beisbol",
    title: "Béisbol",
    caption: 'Jersey "Aguilera"',
    image: "/images/uniformes/beisbol-aguilera.webp",
    alt: "Jersey de béisbol blanco y verde fabricado por Dezara para el equipo Aguilera",
  },
  {
    slug: "voleibol",
    title: "Voleibol",
    caption: "Conjunto personalizado de voleibol",
    image: "/images/uniformes/voleibol-conjunto.webp",
    alt: "Conjunto de voleibol rojo, blanco y negro fabricado por Dezara",
  },
  {
    slug: "equipo-basquetbol",
    title: "Los Borbotones",
    caption: "Equipo real vestido por Dezara",
    image: "/images/uniformes/equipo-basquet-borbotones.webp",
    alt: "Equipo de básquetbol amateur Los Borbotones posando con su uniforme fabricado por Dezara",
  },
  {
    slug: "equipo-voleibol",
    title: "Las Lobas · Chelitas",
    caption: "Equipo real vestido por Dezara",
    image: "/images/uniformes/equipo-voleibol-chelitas.webp",
    alt: "Equipo de voleibol amateur Las Lobas Chelitas posando con su uniforme fabricado por Dezara",
  },
] as const;

export const UNIFORM_TYPE_OPTIONS = [
  { value: "deportivo", label: "Deportivo" },
  { value: "industrial", label: "Industrial / seguridad" },
  { value: "medico", label: "Médico / hospitalario" },
  { value: "corporativo", label: "Corporativo / ejecutivo / escolar" },
] as const;
