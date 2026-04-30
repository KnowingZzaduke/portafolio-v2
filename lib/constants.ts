export const CONTACT = {
  whatsappNumber: "573135775378", // TODO: Reemplaza con tu número real (ej: 573001234567)
  whatsappMessage:
    "Hola José Luis, vi tu portafolio y me interesa hablar sobre un proyecto",
  email: "josex.developer@gmail.com",
  linkedin: "https://www.linkedin.com/in/josex-developer/", // TODO: Actualiza tu LinkedIn
  github: "https://github.com/KnowingZzaduke", // TODO: Actualiza tu GitHub
  location: "Cartagena de Indias, Colombia",
}

export const WHATSAPP_URL = `https://wa.me/${CONTACT.whatsappNumber}?text=${encodeURIComponent(CONTACT.whatsappMessage)}`

export const NAV_LINKS = [
  { label: "Servicios", href: "#servicios" },
  { label: "Proyectos", href: "#proyectos" },
  { label: "Proceso", href: "#proceso" },
  { label: "FAQ", href: "#faq" },
  { label: "Contacto", href: "#contacto" },
]

export interface PainPoint {
  icon: string
  stat: string
  statLabel: string
  title: string
  description: string
}

export const PAIN_POINTS: PainPoint[] = [
  {
    icon: "Percent",
    stat: "15–20%",
    statLabel: "de comisión por reserva",
    title: "Pagas comisión en cada reserva",
    description:
      "Booking, TheFork y Apparta se quedan con una tajada de cada cliente tuyo. Con tu propia web y motor de reservas, ese dinero es tuyo.",
  },
  {
    icon: "Smartphone",
    stat: "78%",
    statLabel: "de búsquedas desde celular",
    title: "Tu web se ve mal en celular",
    description:
      "La mayoría de turistas busca restaurantes y hoteles desde el teléfono. Si tu sitio no se adapta, los estás perdiendo antes de que lleguen.",
  },
  {
    icon: "Globe",
    stat: "+3M",
    statLabel: "turistas al año en Cartagena",
    title: "Los turistas extranjeros no te encuentran",
    description:
      "Sin web en inglés y sin SEO, miles de turistas que visitan Cartagena cada año nunca van a saber que existes.",
  },
]

export interface ServiceFeature {
  text: string
}

export interface Service {
  id: string
  icon: string
  title: string
  price: string
  deliveryTime: string
  features: string[]
  highlight: boolean
  badge?: string
}

export const SERVICES: Service[] = [
  {
    id: "restaurante",
    icon: "UtensilsCrossed",
    title: "Sitio Web para Restaurante",
    price: "Desde $1.800.000 COP",
    deliveryTime: "2–3 semanas",
    features: [
      "Menú interactivo con fotos",
      "Sistema de reservas online",
      "WhatsApp Business integrado",
      "Galería de ambiente y platos",
      "Mapa y contacto",
      "Diseño mobile-first",
    ],
    highlight: false,
  },
  {
    id: "hotel",
    icon: "BedDouble",
    title: "Sitio Web para Hotel Boutique",
    price: "Desde $3.000.000 COP",
    deliveryTime: "3–4 semanas",
    features: [
      "Catálogo de habitaciones con fotos",
      "Motor de reservas directas",
      "Sitio bilingüe Español / English",
      "SEO local para Google",
      "Galería profesional",
      "Sin comisiones de terceros",
    ],
    highlight: true,
    badge: "Más popular",
  },
  {
    id: "mantenimiento",
    icon: "Wrench",
    title: "Mantenimiento Mensual",
    price: "Desde $300.000 COP/mes",
    deliveryTime: "Continuo",
    features: [
      "Actualizaciones de contenido",
      "Soporte técnico dedicado",
      "Reportes de tráfico mensuales",
      "Optimización continua",
      "Copias de seguridad automáticas",
    ],
    highlight: false,
  },
]

export interface Project {
  id: string
  title: string
  subtitle: string
  description: string
  tags: string[]
  demoUrl: string
  detailsUrl: string
  gradientFrom: string
  gradientTo: string
  accentColor: string
}

export const PROJECTS: Project[] = [
  {
    id: "cevicheria",
    title: "Restaurante La Cevichería",
    subtitle: "Demo",
    description:
      "Sitio web completo con menú interactivo, galería de platos y sistema de reservas en línea. Bilingüe español/inglés.",
    tags: ["Next.js", "Sistema de reservas", "Bilingüe", "Mobile-first"],
    demoUrl: "#",
    detailsUrl: "#",
    gradientFrom: "#7C3A1E",
    gradientTo: "#D4A24C",
    accentColor: "#D4A24C",
  },
  {
    id: "boutique",
    title: "Casa Boutique San Diego",
    subtitle: "Demo",
    description:
      "Hotel boutique con motor de reservas directas, galería inmersiva y SEO optimizado para capturar turistas internacionales.",
    tags: ["Next.js", "Motor de reservas", "SEO", "Español/English"],
    demoUrl: "#",
    detailsUrl: "#",
    gradientFrom: "#1E3A5F",
    gradientTo: "#2A4D7A",
    accentColor: "#7CB9E8",
  },
]

export interface ProcessStep {
  number: string
  title: string
  description: string
  icon: string
}

export const PROCESS_STEPS: ProcessStep[] = [
  {
    number: "01",
    title: "Reunión inicial gratuita",
    description:
      "Conversamos sobre tu negocio, tus objetivos y lo que necesitas. Sin compromiso, 100% gratis.",
    icon: "MessageSquare",
  },
  {
    number: "02",
    title: "Propuesta y diseño",
    description:
      "Te presento mockups visuales de tu sitio antes de escribir una línea de código. Ves exactamente lo que vas a recibir.",
    icon: "Layout",
  },
  {
    number: "03",
    title: "Desarrollo",
    description:
      "Construyo tu sitio con actualizaciones semanales. Estás al tanto de cada avance y puedes pedir ajustes.",
    icon: "Code2",
  },
  {
    number: "04",
    title: "Entrega y soporte",
    description:
      "Te capacito para administrar tu sitio y recibes 30 días de soporte gratuito después de la entrega.",
    icon: "Rocket",
  },
]

export interface Differentiator {
  icon: string
  title: string
  description: string
}

export const DIFFERENTIATORS: Differentiator[] = [
  {
    icon: "MapPin",
    title: "Especializado en turismo en Cartagena",
    description:
      "Conozco el sector y los clientes locales. Sé lo que necesita un restaurante o hotel boutique en la Ciudad Amurallada.",
  },
  {
    icon: "MessageCircle",
    title: "Comunicación directa, sin intermediarios",
    description:
      "Hablas conmigo por WhatsApp. Sin agencias, sin cuentas de correo genéricas, sin pasar por tres personas.",
  },
  {
    icon: "Zap",
    title: "Sitios rápidos y modernos",
    description:
      "Código limpio y optimizado. Tus páginas cargan en menos de 3 segundos y alcanzan 90+ en Google Lighthouse.",
  },
  {
    icon: "ShieldCheck",
    title: "Soporte post-entrega real",
    description:
      "30 días de soporte incluido. No desaparezco después de entregar. Estoy disponible cuando me necesitas.",
  },
]

export interface FaqItem {
  question: string
  answer: string
}

export const FAQ_ITEMS: FaqItem[] = [
  {
    question: "¿Cuánto tiempo toma hacer mi sitio web?",
    answer:
      "Depende del proyecto. Un sitio para restaurante toma 2–3 semanas, y un hotel boutique con motor de reservas toma 3–4 semanas. El plazo empieza cuando confirmamos el proyecto y apruebas el diseño.",
  },
  {
    question: "¿Necesito comprar el dominio y el hosting?",
    answer:
      "Te guío en todo el proceso. Un dominio .com cuesta aproximadamente $50.000–$80.000 COP por año. El hosting en Vercel puede ser gratuito para la mayoría de proyectos. Te ayudo a configurar todo desde cero.",
  },
  {
    question: "¿Pueden migrar mi web actual?",
    answer:
      "Sí. Si ya tienes un sitio y quieres renovarlo, reviso tu contenido actual y traslado lo que necesitas (textos, fotos, menús) al nuevo diseño.",
  },
  {
    question: "¿Qué pasa si quiero cambios después de entregar?",
    answer:
      "Tienes 30 días de soporte gratuito para ajustes menores. Para cambios frecuentes o actualizaciones de contenido, el plan de mantenimiento mensual es la opción más conveniente.",
  },
  {
    question: "¿Manejas el contenido y las fotos?",
    answer:
      "Te oriento sobre qué fotos necesitas y cómo tomarlas para que se vean profesionales. ",
  },
  {
    question: "¿Cómo son los pagos?",
    answer:
      "50% al inicio del proyecto para reservar mi agenda y comenzar el diseño, y el 50% restante al momento de la entrega. Acepto transferencia bancaria, Nequi y Daviplata.",
  },
]
