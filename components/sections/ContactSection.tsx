"use client"

import { motion } from "framer-motion"
import { MessageCircle, Mail, Clock, ArrowRight } from "lucide-react"
import { WHATSAPP_URL, CONTACT } from "@/lib/constants"

export function ContactSection() {
  return (
    <section
      id="contacto"
      className="py-20 sm:py-28"
      style={{
        background: "linear-gradient(135deg, #0D1F33 0%, #1E3A5F 60%, #2A4D7A 100%)",
      }}
    >
      <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <span className="inline-block text-sm font-semibold uppercase tracking-widest mb-4 px-3 py-1 rounded-full bg-gold/15 text-gold">
            Hablemos
          </span>

          <h2 className="font-heading text-3xl sm:text-4xl lg:text-6xl font-bold text-white leading-tight mb-4">
            Hablemos sobre
            <br />
            <span style={{ color: "#D4A24C" }}>tu proyecto</span>
          </h2>

          <p className="text-lg sm:text-xl text-white/70 mb-3 max-w-xl mx-auto">
            Reunión inicial gratuita, sin compromiso.
          </p>

          <div className="inline-flex items-center gap-2 text-sm text-emerald-400 mb-10">
            <div className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-400" />
            </div>
            <Clock size={13} />
            Respondo en menos de 24 horas
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-14">
            <motion.a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.97 }}
              className="inline-flex items-center justify-center gap-3 h-14 px-8 rounded-2xl font-bold text-lg transition-colors"
              style={{ backgroundColor: "#25D366", color: "white" }}
            >
              <MessageCircle size={22} fill="white" />
              WhatsApp directo
              <ArrowRight size={18} />
            </motion.a>

            <motion.a
              href={`mailto:${CONTACT.email}`}
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.97 }}
              className="inline-flex items-center justify-center gap-3 h-14 px-8 rounded-2xl font-bold text-lg border border-white/30 text-white hover:bg-white/10 transition-colors"
            >
              <Mail size={20} />
              Enviar email
            </motion.a>
          </div>

          {/* Details */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 max-w-2xl mx-auto">
            {[
              {
                label: "Primera reunión",
                value: "Gratis",
                icon: "✓",
              },
              {
                label: "Propuesta de diseño",
                value: "Antes de programar",
                icon: "✓",
              },
              {
                label: "Soporte post-entrega",
                value: "30 días incluidos",
                icon: "✓",
              },
            ].map((item) => (
              <div
                key={item.label}
                className="bg-white/5 border border-white/10 rounded-xl p-4"
              >
                <span className="text-emerald-400 text-lg font-bold">{item.icon}</span>
                <p className="text-white font-semibold text-sm mt-1">{item.value}</p>
                <p className="text-white/40 text-xs mt-0.5">{item.label}</p>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
