"use client"

import { motion, type Variants } from "framer-motion"
import { MessageSquare, Layout, Code2, Rocket } from "lucide-react"
import { PROCESS_STEPS } from "@/lib/constants"

const iconMap: Record<string, React.ComponentType<{ size?: number; className?: string }>> = {
  MessageSquare,
  Layout,
  Code2,
  Rocket,
}

const itemVariants: Variants = {
  hidden: { opacity: 0, x: -20 },
  show: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.5, ease: "easeOut" as const },
  },
}

const containerVariants: Variants = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.15 },
  },
}

export function ProcessSection() {
  return (
    <section
      id="proceso"
      className="py-20 sm:py-28"
      style={{
        background: "linear-gradient(180deg, #0D1F33 0%, #1E3A5F 100%)",
      }}
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <span className="inline-block text-sm font-semibold uppercase tracking-widest mb-4 px-3 py-1 rounded-full bg-gold/15 text-gold">
            Cómo trabajo
          </span>
          <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-bold text-white leading-tight">
            Un proceso simple y transparente
          </h2>
          <p className="mt-4 text-base sm:text-lg text-white/60 max-w-xl mx-auto">
            Sin sorpresas. Sabes exactamente qué pasa en cada etapa del
            proyecto.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {PROCESS_STEPS.map((step, index) => {
            const Icon = iconMap[step.icon]
            return (
              <motion.div
                key={step.number}
                variants={itemVariants}
                className="relative"
              >
                {/* Connector line */}
                {index < PROCESS_STEPS.length - 1 && (
                  <div className="hidden lg:block absolute top-8 left-[calc(100%_-_12px)] w-full h-px bg-gradient-to-r from-gold/40 to-transparent z-10" />
                )}

                <div className="relative bg-white/5 hover:bg-white/8 border border-white/10 rounded-2xl p-6 transition-colors group">
                  {/* Step number */}
                  <div className="flex items-center justify-between mb-4">
                    <span
                      className="font-heading font-bold text-4xl leading-none"
                      style={{ color: "rgba(212,162,76,0.3)" }}
                    >
                      {step.number}
                    </span>
                    <div className="w-10 h-10 rounded-xl bg-gold/10 flex items-center justify-center group-hover:bg-gold/20 transition-colors">
                      {Icon && <Icon size={18} className="text-gold" />}
                    </div>
                  </div>

                  <h3 className="font-semibold text-white text-base mb-2">
                    {step.title}
                  </h3>
                  <p className="text-sm text-white/50 leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </motion.div>
            )
          })}
        </motion.div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5, duration: 0.5 }}
          className="text-center mt-14"
        >
          <a
            href="#contacto"
            className="inline-flex items-center gap-2 h-12 px-8 rounded-xl font-semibold text-base transition-all hover:scale-105 active:scale-95"
            style={{ backgroundColor: "#D4A24C", color: "#0D1F33" }}
          >
            Empezar con la reunión gratuita
          </a>
        </motion.div>
      </div>
    </section>
  )
}
