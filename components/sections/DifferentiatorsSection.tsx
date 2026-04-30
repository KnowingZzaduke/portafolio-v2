"use client"

import { motion, type Variants } from "framer-motion"
import { MapPin, MessageCircle, Zap, ShieldCheck } from "lucide-react"
import { DIFFERENTIATORS } from "@/lib/constants"

const iconMap: Record<string, React.ComponentType<{ size?: number; className?: string }>> = {
  MapPin,
  MessageCircle,
  Zap,
  ShieldCheck,
}

const cardVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.4, ease: "easeOut" as const },
  },
}

const containerVariants: Variants = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.1 },
  },
}

export function DifferentiatorsSection() {
  return (
    <section id="porque" className="bg-white dark:bg-navy py-20 sm:py-28">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left: Title */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <span className="inline-block text-sm font-semibold uppercase tracking-widest mb-4 px-3 py-1 rounded-full bg-navy/5 dark:bg-white/10 text-navy dark:text-gold">
              Por qué elegirme
            </span>
            <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-bold text-navy dark:text-white leading-tight mb-6">
              No soy una agencia.
              <br />
              <span style={{ color: "#D4A24C" }}>Soy tu desarrollador.</span>
            </h2>
            <p className="text-base sm:text-lg text-foreground/60 leading-relaxed">
              Trabajo directamente contigo. Sin intermediarios, sin sorpresas,
              sin proyectos genéricos. Cada sitio que construyo está pensado
              para el cliente específico que lo va a usar.
            </p>

            <div className="mt-8 p-4 rounded-xl bg-gold/8 dark:bg-gold/10 border border-gold/20">
              <p className="text-sm text-foreground/70 italic">
                "Mi objetivo no es entregarte una página web. Es ayudarte a conseguir más clientes y ahorrar en comisiones."
              </p>
              <p className="text-sm font-semibold text-navy dark:text-white mt-2">
                — José Luis Arteta
              </p>
            </div>
          </motion.div>

          {/* Right: Differentiators */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="grid grid-cols-1 sm:grid-cols-2 gap-4"
          >
            {DIFFERENTIATORS.map((item) => {
              const Icon = iconMap[item.icon]
              return (
                <motion.div
                  key={item.icon}
                  variants={cardVariants}
                  className="group p-5 rounded-2xl border border-border dark:border-white/10 bg-cream dark:bg-navy-dark hover:border-gold/30 dark:hover:border-gold/30 hover:shadow-md transition-all"
                >
                  <div className="w-10 h-10 rounded-xl bg-navy/5 dark:bg-gold/10 flex items-center justify-center mb-3 group-hover:bg-gold/10 dark:group-hover:bg-gold/20 transition-colors">
                    {Icon && (
                      <Icon size={18} className="text-navy dark:text-gold group-hover:text-gold dark:group-hover:text-gold-light transition-colors" />
                    )}
                  </div>
                  <h3 className="font-semibold text-sm text-navy dark:text-white mb-1.5">
                    {item.title}
                  </h3>
                  <p className="text-xs text-foreground/55 leading-relaxed">
                    {item.description}
                  </p>
                </motion.div>
              )
            })}
          </motion.div>
        </div>
      </div>
    </section>
  )
}
