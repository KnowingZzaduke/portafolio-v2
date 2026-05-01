"use client"

import { useState } from "react"
import { motion, type Variants } from "framer-motion"
import {
  UtensilsCrossed,
  BedDouble,
  ShieldCheck,
  Settings,
  CheckCircle2,
  Clock,
  ChevronDown,
  MessageCircle,
  Mail,
} from "lucide-react"
import { cn } from "@/lib/utils"
import { SERVICES, CUSTOM_NEEDS_WA, type Service } from "@/lib/services"
import { CONTACT } from "@/lib/constants"

/* ── Icon map ──────────────────────────────────────── */
const iconMap: Record<string, React.ComponentType<{ size?: number; className?: string }>> = {
  UtensilsCrossed,
  BedDouble,
  ShieldCheck,
  Settings,
}

/* ── Animation variants ────────────────────────────── */
const cardVariants: Variants = {
  hidden: { opacity: 0, y: 32 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: "easeOut" as const },
  },
}

const containerVariants: Variants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.1 } },
}

/* ── Service card ──────────────────────────────────── */
const COLLAPSED_COUNT = 4

function ServiceCard({ service }: { service: Service }) {
  const [expanded, setExpanded] = useState(false)
  const Icon = iconMap[service.icon]
  const isFeatured = !!service.featured
  const hasMore = service.benefits.length > COLLAPSED_COUNT
  const visibleBenefits =
    expanded || !hasMore ? service.benefits : service.benefits.slice(0, COLLAPSED_COUNT)

  return (
    <motion.div
      variants={cardVariants}
      className={cn(
        "relative flex flex-col rounded-2xl border p-6 sm:p-7 transition-all duration-300",
        isFeatured
          ? "bg-navy dark:bg-navy-light border-gold/30 shadow-xl shadow-navy/15"
          : "bg-white dark:bg-navy-dark border-border dark:border-white/10 hover:shadow-lg hover:shadow-navy/8 hover:-translate-y-0.5"
      )}
    >
      {/* Featured badge */}
      {service.featuredLabel && (
        <div className="absolute -top-3 right-5">
          <span className="inline-flex items-center gap-1 px-3 py-1 rounded-full text-xs font-semibold bg-gold text-navy-dark shadow-sm">
            ✦ {service.featuredLabel}
          </span>
        </div>
      )}

      {/* Icon */}
      <div
        className={cn(
          "w-11 h-11 rounded-xl flex items-center justify-center mb-4 shrink-0",
          isFeatured ? "bg-gold/20" : "bg-navy/6 dark:bg-white/10"
        )}
      >
        {Icon && (
          <Icon
            size={20}
            className={isFeatured ? "text-gold" : "text-navy dark:text-gold"}
          />
        )}
      </div>

      {/* Title + tagline */}
      <h3
        className={cn(
          "font-heading font-bold text-xl leading-snug mb-1",
          isFeatured ? "text-white" : "text-navy dark:text-white"
        )}
      >
        {service.title}
      </h3>
      <p
        className={cn(
          "text-sm italic leading-snug mb-4",
          isFeatured ? "text-white/60" : "text-foreground/50"
        )}
      >
        {service.tagline}
      </p>

      {/* Pricing */}
      <p
        className={cn(
          "font-bold text-base mb-1",
          isFeatured ? "text-gold" : "text-gold-dark dark:text-gold"
        )}
      >
        {service.pricing}
      </p>

      {/* Delivery */}
      <div className="flex items-center gap-1.5 mb-5">
        <Clock
          size={12}
          className={isFeatured ? "text-white/40" : "text-foreground/35"}
        />
        <span
          className={cn(
            "text-xs",
            isFeatured ? "text-white/40" : "text-foreground/40"
          )}
        >
          {service.deliveryTime}
        </span>
      </div>

      {/* Benefits */}
      <ul className="flex flex-col gap-2 flex-1 mb-2">
        {visibleBenefits.map((benefit) => (
          <li key={benefit} className="flex items-start gap-2.5">
            <CheckCircle2
              size={15}
              className={cn(
                "shrink-0 mt-0.5",
                isFeatured ? "text-gold" : "text-navy dark:text-gold"
              )}
            />
            <span
              className={cn(
                "text-sm leading-snug",
                isFeatured ? "text-white/80" : "text-foreground/65"
              )}
            >
              {benefit}
            </span>
          </li>
        ))}
      </ul>

      {/* Ver más toggle */}
      {hasMore && (
        <button
          onClick={() => setExpanded((v) => !v)}
          className={cn(
            "inline-flex items-center gap-1 text-xs font-medium mt-1 mb-4 transition-colors",
            isFeatured
              ? "text-gold/70 hover:text-gold"
              : "text-navy/50 dark:text-gold/50 hover:text-navy dark:hover:text-gold"
          )}
        >
          <ChevronDown
            size={14}
            className={cn("transition-transform", expanded && "rotate-180")}
          />
          {expanded ? "Ver menos" : `Ver ${service.benefits.length - COLLAPSED_COUNT} más`}
        </button>
      )}

      {/* CTA */}
      <a
        href={service.ctaUrl}
        target="_blank"
        rel="noopener noreferrer"
        className={cn(
          "mt-auto inline-flex items-center justify-center h-10 px-5 rounded-xl text-sm font-semibold transition-all active:scale-[0.97]",
          isFeatured
            ? "bg-gold hover:bg-gold-dark text-navy-dark"
            : "border border-navy/25 dark:border-white/20 text-navy dark:text-white hover:bg-navy/5 dark:hover:bg-white/10"
        )}
      >
        {service.ctaText}
      </a>

      {/* Subtext (Rescate card) */}
      {service.subtext && (
        <p
          className={cn(
            "text-xs text-center mt-2",
            isFeatured ? "text-white/35" : "text-foreground/35"
          )}
        >
          {service.subtext}
        </p>
      )}
    </motion.div>
  )
}

/* ── Custom needs band ─────────────────────────────── */
function CustomNeedsBand() {
  const emailUrl = `mailto:${CONTACT.email}?subject=Consulta%20sobre%20proyecto%20web`

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: 0.2 }}
      className="mt-10 rounded-2xl border border-border dark:border-white/10 bg-cream dark:bg-navy-dark px-6 sm:px-10 py-8 sm:py-10"
    >
      <div className="max-w-2xl mx-auto text-center">
        <h3 className="font-heading font-bold text-xl sm:text-2xl text-navy dark:text-white mb-3">
          ¿Tu negocio no encaja en estas opciones?
        </h3>
        <p className="text-sm sm:text-base text-foreground/60 leading-relaxed mb-7">
          También trabajo con tour operadores, agencias de turismo, spas,
          clínicas y otros negocios del sector turístico. Cada proyecto se
          adapta a las necesidades específicas de cada cliente. Cuéntame qué
          necesitas y armamos juntos la mejor solución.
        </p>
        <div className="flex flex-col sm:flex-row gap-3 justify-center">
          <a
            href={CUSTOM_NEEDS_WA}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 h-11 px-6 rounded-xl bg-navy dark:bg-gold text-white dark:text-navy-dark font-semibold text-sm hover:bg-navy-light dark:hover:bg-gold-dark transition-colors"
          >
            <MessageCircle size={16} />
            Hablemos por WhatsApp
          </a>
          <a
            href={emailUrl}
            className="inline-flex items-center justify-center gap-2 h-11 px-6 rounded-xl border border-border dark:border-white/20 text-foreground/70 hover:text-foreground hover:bg-muted dark:hover:bg-white/10 font-semibold text-sm transition-colors"
          >
            <Mail size={16} />
            Enviar email
          </a>
        </div>
      </div>
    </motion.div>
  )
}

/* ── Section ───────────────────────────────────────── */
export function ServicesSection() {
  return (
    <section id="servicios" className="bg-white dark:bg-navy py-20 sm:py-28">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <span className="inline-block text-sm font-semibold uppercase tracking-widest mb-4 px-3 py-1 rounded-full bg-navy/5 dark:bg-white/10 text-navy dark:text-gold">
            Servicios
          </span>
          <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-bold text-navy dark:text-white leading-tight">
            Lo que puedo hacer por tu negocio
          </h2>
          <p className="mt-4 text-base sm:text-lg text-foreground/60 max-w-2xl mx-auto">
            Soluciones web especializadas en el sector turístico de Cartagena.
            Cada proyecto se adapta a las necesidades específicas de tu negocio.
          </p>
        </motion.div>

        {/* Cards — 2×2 grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid grid-cols-1 sm:grid-cols-2 gap-6"
        >
          {SERVICES.map((service) => (
            <ServiceCard key={service.id} service={service} />
          ))}
        </motion.div>

        {/* ¿Necesitas algo distinto? */}
        <CustomNeedsBand />
      </div>
    </section>
  )
}
