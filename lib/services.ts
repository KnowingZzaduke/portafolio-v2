import { CONTACT } from "./constants"

const wa = (msg: string) =>
  `https://wa.me/${CONTACT.whatsappNumber}?text=${encodeURIComponent(msg)}`

export interface Service {
  id: string
  icon: string
  title: string
  tagline: string
  pricing: string
  deliveryTime: string
  benefits: string[]
  ctaText: string
  ctaUrl: string
  featured?: boolean
  featuredLabel?: string
  subtext?: string
}

export const SERVICES: Service[] = [
  {
    id: "restaurante",
    icon: "UtensilsCrossed",
    title: "Web Profesional para Restaurante",
    tagline: "Para restaurantes que quieren llenarse sin pagar comisiones",
    pricing: "Inversión desde $1.500.000 COP",
    deliveryTime: "2 a 3 semanas",
    benefits: [
      "Menú interactivo con fotos profesionales",
      "Sistema de reservas online sin comisiones",
      "WhatsApp Business integrado",
      "Galería del ambiente y platos estrella",
      "Mapa, horarios e información de contacto",
      "Diseño optimizado para móvil",
      "Versión bilingüe español/inglés (opcional)",
    ],
    ctaText: "Solicitar cotización",
    ctaUrl: wa("Hola José Luis, me interesa el servicio de web profesional para restaurante"),
  },
  {
    id: "hotel",
    icon: "BedDouble",
    title: "Web Profesional para Hotel Boutique",
    tagline: "Para hoteles que quieren reservas directas y dejar de depender de Booking",
    pricing: "Inversión desde $2.800.000 COP",
    deliveryTime: "3 a 4 semanas",
    benefits: [
      "Catálogo de habitaciones con galería profesional",
      "Motor de reservas directas sin intermediarios",
      "Sitio bilingüe español/inglés",
      "SEO local para aparecer en Google",
      "Integración con WhatsApp Business",
      "Captura de datos de huéspedes para fidelización",
      "Diseño premium adaptado a tu marca",
    ],
    ctaText: "Solicitar cotización",
    ctaUrl: wa("Hola José Luis, me interesa el servicio de web profesional para hotel boutique"),
    featured: true,
    featuredLabel: "Especialidad principal",
  },
  {
    id: "rescate",
    icon: "ShieldCheck",
    title: "Rescate de Sitio Web",
    tagline: "¿Tu sitio está caído, lento o desactualizado? Lo arreglamos.",
    pricing: "Diagnóstico gratuito",
    deliveryTime: "Diagnóstico en 24–48 horas",
    benefits: [
      "Revisión completa del estado actual del sitio",
      "Diagnóstico técnico y de usabilidad",
      "Plan de acción: reparar o rediseñar",
      "Cotización personalizada según el caso",
      "Migración a hosting moderno si es necesario",
      "Backup completo antes de cualquier cambio",
    ],
    ctaText: "Solicitar diagnóstico gratis",
    ctaUrl: wa("Hola José Luis, mi sitio web tiene problemas y me gustaría solicitar el diagnóstico gratuito"),
    subtext: "Sin compromiso · Respuesta en menos de 24 horas",
  },
  {
    id: "mantenimiento",
    icon: "Settings",
    title: "Mantenimiento y Soporte Mensual",
    tagline: "Tu sitio siempre rápido, seguro y actualizado",
    pricing: "Planes desde $250.000 COP/mes",
    deliveryTime: "Servicio continuo",
    benefits: [
      "Actualizaciones de contenido sin costo adicional",
      "Soporte técnico dedicado",
      "Reportes mensuales de tráfico y conversiones",
      "Optimización continua de velocidad y SEO",
      "Copias de seguridad automáticas",
      "Cambios de menú, precios o promociones",
      "Prioridad en atención (respuesta en menos de 24h)",
    ],
    ctaText: "Solicitar cotización",
    ctaUrl: wa("Hola José Luis, me interesa el servicio de mantenimiento mensual"),
  },
]

export const CUSTOM_NEEDS_WA = wa(
  "Hola José Luis, vi tus servicios y me gustaría conversar sobre un proyecto"
)
