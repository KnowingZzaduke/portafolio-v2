"use client"

import { motion, type Variants } from "framer-motion"
import { ExternalLink, Info } from "lucide-react"
import { Badge } from "@/components/ui/badge"
import { PROJECTS } from "@/lib/constants"

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
    transition: { staggerChildren: 0.2 },
  },
}

export function ProjectsSection() {
  return (
    <section id="proyectos" className="bg-warm-beige dark:bg-navy-dark py-20 sm:py-28">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-14"
        >
          <span className="inline-block text-sm font-semibold uppercase tracking-widest mb-4 px-3 py-1 rounded-full bg-gold/10 text-gold-dark dark:text-gold">
            Proyectos
          </span>
          <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-bold text-navy dark:text-white leading-tight">
            Trabajo reciente
          </h2>
          <p className="mt-4 text-base sm:text-lg text-foreground/60 max-w-xl mx-auto">
            Demos funcionales de sitios web para negocios del sector turístico
            en Cartagena.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid grid-cols-1 lg:grid-cols-2 gap-8"
        >
          {PROJECTS.map((project) => (
            <motion.div
              key={project.id}
              variants={cardVariants}
              className="group bg-white dark:bg-navy rounded-3xl overflow-hidden border border-border dark:border-white/10 hover:shadow-2xl hover:shadow-navy/10 dark:hover:shadow-gold/5 transition-all duration-300"
            >
              {/* Project image / mockup */}
              <div
                className="relative h-56 sm:h-64 overflow-hidden"
                style={{
                  background: `linear-gradient(135deg, ${project.gradientFrom} 0%, ${project.gradientTo} 100%)`,
                }}
              >
                {/* Decorative browser mockup */}
                <div className="absolute inset-4 rounded-xl bg-black/20 backdrop-blur-sm border border-white/10 flex flex-col">
                  {/* Browser bar */}
                  <div className="flex items-center gap-1.5 px-3 py-2 border-b border-white/10">
                    <div className="w-2.5 h-2.5 rounded-full bg-red-400/60" />
                    <div className="w-2.5 h-2.5 rounded-full bg-yellow-400/60" />
                    <div className="w-2.5 h-2.5 rounded-full bg-green-400/60" />
                    <div className="flex-1 mx-3 h-4 rounded bg-white/10" />
                  </div>
                  {/* Content placeholder */}
                  <div className="flex-1 p-3 flex flex-col gap-2">
                    <div className="h-6 rounded bg-white/10 w-3/4" />
                    <div className="h-3 rounded bg-white/5 w-full" />
                    <div className="h-3 rounded bg-white/5 w-5/6" />
                    <div className="flex gap-2 mt-2">
                      <div className="h-7 rounded-lg bg-white/20 w-24" />
                      <div className="h-7 rounded-lg bg-white/10 w-20" />
                    </div>
                  </div>
                </div>

                {/* Demo label */}
                <div className="absolute top-3 right-3 px-2 py-0.5 rounded-md bg-black/30 backdrop-blur-sm border border-white/20">
                  <span className="text-xs text-white font-medium">{project.subtitle}</span>
                </div>
              </div>

              {/* Card content */}
              <div className="p-6">
                <h3 className="font-heading font-bold text-xl text-navy dark:text-white mb-2">
                  {project.title}
                </h3>
                <p className="text-sm text-foreground/60 mb-4 leading-relaxed">
                  {project.description}
                </p>

                {/* Tags */}
                <div className="flex flex-wrap gap-2 mb-5">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-2.5 py-1 rounded-lg text-xs font-medium bg-navy/5 dark:bg-white/10 text-navy dark:text-white/80"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Actions */}
                <div className="flex gap-3">
                  <a
                    href={project.demoUrl}
                    target="_blank"
                    className="inline-flex items-center gap-2 h-9 px-4 rounded-lg text-sm font-semibold bg-navy text-white dark:bg-gold dark:text-navy hover:opacity-90 transition-opacity"
                  >
                    <ExternalLink size={14} />
                    Ver demo
                  </a>
                  <a
                    href={project.detailsUrl}
                    className="inline-flex items-center gap-2 h-9 px-4 rounded-lg text-sm font-semibold border border-border dark:border-white/20 text-foreground/70 hover:text-foreground hover:bg-muted dark:hover:bg-white/10 transition-colors"
                  >
                    <Info size={14} />
                    Detalles
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4, duration: 0.5 }}
          className="text-center text-sm text-foreground/40 mt-10"
        >
          Más proyectos disponibles próximamente
        </motion.p>
      </div>
    </section>
  )
}
