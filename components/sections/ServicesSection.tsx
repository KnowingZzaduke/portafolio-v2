"use client"

import { motion, type Variants } from "framer-motion"
import { UtensilsCrossed, BedDouble, Wrench, Check, Clock } from "lucide-react"
import { SERVICES } from "@/lib/constants"

const iconMap: Record<string, React.ComponentType<{ size?: number; className?: string }>> = {
  UtensilsCrossed,
  BedDouble,
  Wrench,
}

const cardVariants: Variants = {
  hidden: { opacity: 0, y: 30 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: "easeOut" as const },
  },
}

const containerVariants: Variants = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.15 },
  },
}

export function ServicesSection() {
  return (
    <section id="servicios" className="bg-white dark:bg-navy py-20 sm:py-28">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-14"
        >
          <span className="inline-block text-sm font-semibold uppercase tracking-widest mb-4 px-3 py-1 rounded-full bg-navy/5 dark:bg-white/10 text-navy dark:text-gold">
            Servicios
          </span>
          <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-bold text-navy dark:text-white leading-tight">
            Lo que puedo hacer por tu negocio
          </h2>
          <p className="mt-4 text-base sm:text-lg text-foreground/60 max-w-xl mx-auto">
            Sitios web diseñados específicamente para el sector turístico de
            Cartagena. Sin complicaciones, sin intermediarios.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-3 gap-6"
        >
          {SERVICES.map((service) => {
            const Icon = iconMap[service.icon]
            return (
              <motion.div
                key={service.id}
                variants={cardVariants}
                className={`relative flex flex-col rounded-2xl border p-6 sm:p-8 transition-shadow hover:shadow-xl ${
                  service.highlight
                    ? "bg-navy dark:bg-navy-light border-gold/40 shadow-lg shadow-navy/10"
                    : "bg-white dark:bg-navy-dark border-border dark:border-white/10"
                }`}
              >
                {/* Badge */}
                {service.badge && (
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                    <span className="inline-block px-4 py-1 rounded-full text-xs font-bold bg-gold text-navy">
                      {service.badge}
                    </span>
                  </div>
                )}

                {/* Icon */}
                <div
                  className={`w-12 h-12 rounded-xl flex items-center justify-center mb-5 ${
                    service.highlight
                      ? "bg-gold/20"
                      : "bg-navy/5 dark:bg-white/10"
                  }`}
                >
                  {Icon && (
                    <Icon
                      size={22}
                      className={
                        service.highlight
                          ? "text-gold"
                          : "text-navy dark:text-gold"
                      }
                    />
                  )}
                </div>

                <h3
                  className={`font-heading font-bold text-xl mb-1 ${
                    service.highlight ? "text-white" : "text-navy dark:text-white"
                  }`}
                >
                  {service.title}
                </h3>

                <p
                  className={`font-semibold text-lg mb-1 ${
                    service.highlight ? "text-gold" : "text-gold-dark dark:text-gold"
                  }`}
                >
                  {service.price}
                </p>

                <div className="flex items-center gap-1.5 mb-5">
                  <Clock
                    size={13}
                    className={service.highlight ? "text-white/50" : "text-foreground/40"}
                  />
                  <span
                    className={`text-xs ${
                      service.highlight ? "text-white/50" : "text-foreground/40"
                    }`}
                  >
                    Entrega: {service.deliveryTime}
                  </span>
                </div>

                <ul className="flex flex-col gap-2.5 flex-1">
                  {service.features.map((feature) => (
                    <li key={feature} className="flex items-start gap-2.5">
                      <div
                        className={`mt-0.5 w-4 h-4 rounded-full flex items-center justify-center shrink-0 ${
                          service.highlight ? "bg-gold/20" : "bg-navy/5 dark:bg-white/10"
                        }`}
                      >
                        <Check
                          size={10}
                          className={service.highlight ? "text-gold" : "text-navy dark:text-gold"}
                        />
                      </div>
                      <span
                        className={`text-sm leading-snug ${
                          service.highlight
                            ? "text-white/80"
                            : "text-foreground/70"
                        }`}
                      >
                        {feature}
                      </span>
                    </li>
                  ))}
                </ul>

                <a
                  href="#contacto"
                  className={`mt-6 inline-flex items-center justify-center h-10 px-4 rounded-xl text-sm font-semibold transition-colors ${
                    service.highlight
                      ? "bg-gold text-navy hover:bg-gold-dark"
                      : "bg-navy/5 dark:bg-white/10 text-navy dark:text-white hover:bg-navy/10 dark:hover:bg-white/20"
                  }`}
                >
                  Quiero este servicio
                </a>
              </motion.div>
            )
          })}
        </motion.div>
      </div>
    </section>
  )
}
