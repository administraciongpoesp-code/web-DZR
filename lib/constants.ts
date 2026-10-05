/**
 * Fuente única de verdad de datos de negocio para el sitio DZR.
 * Todo el contenido aquí proviene del brochure oficial "DEZARA 2024" y de
 * dzr.com.mx. No modificar con datos no verificados —
 */

export const SITE = {
  name: "DZR",
  slogan: "Vestimos tu pasión.",
  url: "https://www.dzr.com.mx",
  description:
    "DZR es una empresa duranguense dedicada al diseño, fabricación y elaboración de prendas deportivas, con alianzas comerciales de prestigio nacional e internacional.",
} as const;

export const CONTACT = {
  whatsappDisplay: "618 140 26 35",
  whatsappNumber: "526181402635", // E.164: 52 (México) + 6181402635, sin "1" (regla retirada en 2021)
  email: "dzr.admon@outlook.com",
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
    label: "DZR",
    url: "https://www.facebook.com/DZRSPORT",
  },
  instagram: {
    label: "@dzr_sport",
    url: "https://www.instagram.com/dzr_sport",
  },
} as const;

export function buildWhatsAppLink(message: string, phoneNumber: string = CONTACT.whatsappNumber) {
  const params = new URLSearchParams({ text: message });
  return `https://wa.me/${phoneNumber}?${params.toString()}`;
}

export const WHATSAPP_MESSAGES = {
  general: "Hola, quiero cotizar un uniforme.",
  jersey: "Hola, quiero más información sobre el jersey de Alacranes de Durango.",
  uniformes: "Hola, quiero cotizar uniformes para mi equipo o empresa.",
  showroom: "Hola, quiero coordinar un punto de entrega o recolección de mi pedido.",
} as const;

export const NAV_LINKS = [
  { label: "Inicio", href: "/" },
  { label: "Uniformes", href: "/uniformes" },
  { label: "Servicios", href: "/servicios" },
  { label: "Showrooms", href: "/showrooms" },
  { label: "Contacto", href: "/contacto" },
  { label: "Nuestro trabajo", href: "/nuestro-trabajo" },
] as const;

export const SHOWROOMS = [
  {
    slug: "planta-nuevo-durango",
    name: "Planta y showroom Nuevo Durango",
    address: CONTACT.addressPrimary,
    services: ["Entrega", "Recolección", "Levantamiento de pedido"],
    phone: null as string | null,
  },
  {
    slug: "deportes-espana-cienega",
    name: "Deportes España — Col. Ciénega",
    // Dirección verificada en directorios públicos (Waze, Ubico.me,
    // LatinoPlaces, PlanetaMexico): C. Isauro Venzor #908 Ote, Col. Ciénega,
    // C.P. 34090, Durango, Dgo.
    address: {
      line1: "C. Isauro Venzor #908 Ote, Col. Ciénega",
      line2: "C.P. 34090, Durango, Dgo.",
    },
    services: ["Entrega", "Recolección", "Levantamiento de pedido"],
    phone: "618 812 9511" as string | null,
  },
] as const;

export const UNVERIFIED_STATS = [
  { value: "+10", label: "años de experiencia", verified: true },
  { value: "+5,000", label: "equipos vestidos", verified: true },
  { value: "+25,000", label: "uniformes realizados", verified: true },
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
    "Tejido transpirable y ligero, pensado para rendimiento deportivo — la base real documentada en el material fotográfico de DZR para las playeras deportivas.",
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
    slug: "futbol",
    title: "Fútbol",
    description:
      "Confección y diseño textil para equipos de fútbol: sublimación de alta calidad, DTF y uniforme completo para competencia.",
    items: ["Playera", "Short", "Medias", "Sublimación", "DTF"],
    image: "/images/futbol/futbol1.jpg",
    imageAlt: "Uniforme de fútbol fabricado por DZR",
  },
  {
    slug: "basquetbol",
    title: "Básquetbol",
    description:
      "Uniformes de básquetbol con diseño personalizado, confección textil y acabados pensados para el rendimiento en cancha.",
    items: ["Jersey", "Short", "Sublimación", "DTF"],
    image: "/images/basquetbol/basquetbol1.jpg",
    imageAlt: "Uniforme de basquetbol fabricado por DZR",
  },
  {
    slug: "rutas",
    title: "Rutas",
    description:
      "Playeras para rutas con diseño y confección personalizada, sublimación de alta calidad y DTF según la identidad de tu grupo o evento.",
    items: ["Playeras para rutas", "Sublimación", "DTF", "Buffs", "Morrales"],
    image: "/images/rutas/rutas1.jpg",
    imageAlt: "Uniforme de rutas fabricado por DZR",
  },
  {
    slug: "carreras",
    title: "Carreras",
    description:
      "Playeras para carreras: diseño textil, personalización y acabados listos para eventos deportivos y equipos de running.",
    items: ["Playeras para carreras", "Sublimación", "DTF"],
    image: "/images/carreras/carreras6.jpg",
    imageAlt: "Uniforme de carreras fabricado por DZR",
  },
  {
    slug: "conjunto-deportivo",
    title: "Conjuntos deportivos",
    description:
      "Conjuntos deportivos de pants y sudaderas personalizados, ideal para grupos de competencia escolar o equipos deportivos amateur.",
    items: ["Pantalonera", "Sudadera", "Sublimación"],
    // image: "/images/uniformes/categorias/conjuntoDeportivo.jpg",
    // imageAlt: "Conjunto deportivo fabricado por DZR",
  },
] as const;

export const OUR_PRODUCTS = [
  {
    slug: "futbol",
    title: "Fútbol",
    images: [
      { src: "/images/alacranes/alacranes13.jpg", alt: "Uniforme de fútbol fabricado por DZR en cancha" },
      { src: "/images/alacranes/alacranes9.jpg", alt: "Detalle de la tela del uniforme de fútbol fabricado por DZR" },
    ],
  },

  { 
    slug: "basquetbol", 
    title: "Básquetbol", 
    images: [
      { src: "/images/basquetbol/basquetbol2.jpg", alt: "Uniforme de basquetbol fabricado por DZR, conjunto completo" },
      { src: "/images/basquetbol/basquetbol1.jpg", alt: "Uniforme de basquetbol fabricado por DZR, conjunto completo" },
    ] 
  },

  { 
    slug: "rutas", 
    title: "Rutas", 
    images: [
      { src: "/images/rutas/rutas1.jpg", alt: "Uniforme de rutas fabricado por DZR, conjunto completo" },
      { src: "/images/rutas/rutas2.jpg", alt: "Uniforme de rutas fabricado por DZR, conjunto completo" },
    ]
  },

  { 
    slug: "carreras", 
    title: "Carreras", 
    images: [
      { src: "/images/carreras/carreras3.jpg", alt: "Uniforme de carreras fabricado por DZR, conjunto completo" },
      { src: "/images/carreras/carreras4.jpg", alt: "Uniforme de carreras fabricado por DZR, conjunto completo" },
    ] 
  },
  { slug: "conjunto-deportivo", title: "Conjunto deportivo", images: [] },
] as const;

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

export const TRUSTED_LOGOS: { name: string; logo: string | null }[] = [
  { name: "Alacranes de Durango", logo: "/images/teams/alacranes-durango.webp" },
  { name: "Leñadores de Durango", logo: "/images/teams/lenadores-durango.webp" },
  { name: "Deportes España", logo: "/images/logotipos/deportes.png" },
  { name: "Campestre", logo: "/images/logotipos/campestre.png" },
  { name: "Canaco", logo: "/images/logotipos/canaco.png" },
  { name: "ITD", logo: "/images/logotipos/itd.png" },
  { name: "ITQ", logo: "/images/logotipos/itq.png" },
  { name: "Gobierno del Estado de Durango", logo: "/images/logotipos/gobiernodgo.png" },
  { name: "Municipio de Durango", logo: "/images/logotipos/municipDgo.png" },
];

export const UNIFORM_TYPE_OPTIONS = [
  { value: "futbol", label: "Fútbol" },
  { value: "basquetbol", label: "Básquetbol" },
  { value: "rutas", label: "Rutas" },
  { value: "carreras", label: "Carreras" },
  { value: "conjunto-deportivo", label: "Conjunto deportivo" },
  { value: "otro", label: "Otro" },
] as const;