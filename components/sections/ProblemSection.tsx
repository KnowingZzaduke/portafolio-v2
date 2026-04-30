"use client"

import { motion, type Variants } from "framer-motion"
import { Percent, Smartphone, Globe } from "lucide-react"
import { PAIN_POINTS } from "@/lib/constants"

const iconMap: Record<string, React.ComponentType<{ size?: number; className?: string }>> = {
  Percent,
  Smartphone,
  Globe,
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

export function ProblemSection() {
  return (
    <section id="problemas" className="bg-cream dark:bg-navy-dark py-20 sm:py-28">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-14"
        >
          <span className="inline-block text-sm font-semibold uppercase tracking-widest mb-4 px-3 py-1 rounded-full bg-gold/10 text-gold-dark dark:text-gold">
            El problema
          </span>
          <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-bold text-navy dark:text-white leading-tight">
            ¿Te suena familiar?
          </h2>
          <p className="mt-4 text-base sm:text-lg text-foreground/60 max-w-xl mx-auto">
            Estos son los problemas más comunes que tienen los restaurantes y
            hoteles boutique en Cartagena con su presencia digital.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-3 gap-6"
        >
          {PAIN_POINTS.map((point) => {
            const Icon = iconMap[point.icon]
            return (
              <motion.div
                key={point.icon}
                variants={cardVariants}
                className="group relative bg-white dark:bg-navy rounded-2xl p-6 sm:p-8 border border-border dark:border-white/10 hover:shadow-xl hover:shadow-navy/5 dark:hover:shadow-gold/5 transition-shadow"
              >
                {/* Icon */}
                <div className="w-12 h-12 rounded-xl bg-gold/10 dark:bg-gold/20 flex items-center justify-center mb-5">
                  {Icon && (
                    <Icon size={22} className="text-gold-dark dark:text-gold" />
                  )}
                </div>

                {/* Stat */}
                <div className="mb-3">
                  <span className="font-heading font-bold text-3xl text-navy dark:text-white">
                    {point.stat}
                  </span>
                  <p className="text-xs text-foreground/50 mt-0.5">{point.statLabel}</p>
                </div>

                <h3 className="font-semibold text-lg text-navy dark:text-white mb-2">
                  {point.title}
                </h3>
                <p className="text-sm text-foreground/60 leading-relaxed">
                  {point.description}
                </p>

                {/* Accent line on hover */}
                <div className="absolute bottom-0 left-6 right-6 h-0.5 bg-gold rounded-full scale-x-0 group-hover:scale-x-100 transition-transform origin-left" />
              </motion.div>
            )
          })}
        </motion.div>
      </div>
    </section>
  )
}
