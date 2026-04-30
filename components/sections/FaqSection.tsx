"use client"

import { motion } from "framer-motion"
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
import { FAQ_ITEMS } from "@/lib/constants"

export function FaqSection() {
  return (
    <section id="faq" className="bg-cream dark:bg-navy-dark py-20 sm:py-28">
      <div className="max-w-3xl mx-auto px-4 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <span className="inline-block text-sm font-semibold uppercase tracking-widest mb-4 px-3 py-1 rounded-full bg-gold/10 text-gold-dark dark:text-gold">
            FAQ
          </span>
          <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-bold text-navy dark:text-white leading-tight">
            Preguntas frecuentes
          </h2>
          <p className="mt-4 text-base sm:text-lg text-foreground/60">
            Las preguntas que más me hacen antes de empezar un proyecto.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.15, duration: 0.5 }}
          className="bg-white dark:bg-navy rounded-2xl border border-border dark:border-white/10 overflow-hidden divide-y divide-border dark:divide-white/10"
        >
          <Accordion>
            {FAQ_ITEMS.map((item, index) => (
              <AccordionItem key={index} value={`item-${index}`}>
                <AccordionTrigger className="px-6 py-4 text-sm sm:text-base font-medium text-navy dark:text-white hover:no-underline hover:text-gold dark:hover:text-gold transition-colors">
                  {item.question}
                </AccordionTrigger>
                <AccordionContent className="px-6 pb-4 text-sm text-foreground/65 leading-relaxed">
                  {item.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </motion.div>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3, duration: 0.5 }}
          className="text-center text-sm text-foreground/45 mt-8"
        >
          ¿Tienes otra pregunta?{" "}
          <a
            href="#contacto"
            className="text-gold-dark dark:text-gold hover:underline font-medium"
          >
            Escríbeme directamente.
          </a>
        </motion.p>
      </div>
    </section>
  )
}
