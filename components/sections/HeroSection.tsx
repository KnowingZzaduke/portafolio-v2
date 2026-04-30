"use client"

import { motion } from "framer-motion"
import { MessageCircle, ArrowDown, MapPin, ChevronRight } from "lucide-react"
import { WHATSAPP_URL } from "@/lib/constants"
import Image from "next/image"

export function HeroSection() {
  return (
    <section
      id="inicio"
      className="relative min-h-screen flex items-center overflow-hidden"
      style={{
        background: "linear-gradient(135deg, #0D1F33 0%, #1E3A5F 50%, #2A4D7A 100%)",
      }}
    >
      {/* Decorative elements */}
      <div
        className="absolute inset-0 opacity-10"
        style={{
          backgroundImage:
            "radial-gradient(circle at 20% 80%, #D4A24C 0%, transparent 50%), radial-gradient(circle at 80% 20%, #7CB9E8 0%, transparent 50%)",
        }}
      />
      <div
        className="absolute bottom-0 left-0 right-0 h-32 opacity-5"
        style={{
          backgroundImage:
            "repeating-linear-gradient(90deg, #D4A24C 0px, #D4A24C 1px, transparent 1px, transparent 40px), repeating-linear-gradient(0deg, #D4A24C 0px, #D4A24C 1px, transparent 1px, transparent 40px)",
        }}
      />

      <div className="relative z-10 w-full max-w-6xl mx-auto px-4 sm:px-6 py-32 pt-36">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left: Text */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
          >
            {/* Available badge */}
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.5 }}
              className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/10 border border-white/20 mb-6"
            >
              <span className="relative flex h-2.5 w-2.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-400" />
              </span>
              <span className="text-emerald-300 text-sm font-medium">
                Disponible para nuevos proyectos
              </span>
            </motion.div>

            <h1 className="font-heading font-bold text-white leading-tight mb-4">
              <span className="block text-5xl sm:text-6xl lg:text-7xl">
                José Luis
              </span>
              <span
                className="block text-5xl sm:text-6xl lg:text-7xl"
                style={{ color: "#D4A24C" }}
              >
                Arteta
              </span>
            </h1>

            <p className="text-xl sm:text-2xl font-semibold text-white/90 mb-4 leading-snug">
              Sitios web que convierten visitantes en reservas
            </p>

            <p className="text-base sm:text-lg text-white/70 mb-6 leading-relaxed max-w-lg">
              En Cartagena, sus clientes lo buscan en Google y desde el celular. Le construyo sitios web profesionales, bilingües y con reservas directas para restaurantes y hoteles boutique que quieren competir en grande.
            </p>

            <div className="flex items-center gap-2 text-white/50 text-sm mb-8">
              <MapPin size={14} style={{ color: "#D4A24C" }} />
              <span>Cartagena de Indias, Colombia</span>
            </div>

            <div className="flex flex-col sm:flex-row gap-3">
              <a
                href="#proyectos"
                className="inline-flex items-center justify-center gap-2 h-12 px-6 rounded-xl font-semibold text-base transition-all hover:scale-105 active:scale-95"
                style={{
                  backgroundColor: "#D4A24C",
                  color: "#0D1F33",
                }}
              >
                Ver mi trabajo
                <ChevronRight size={18} />
              </a>
              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 h-12 px-6 rounded-xl font-semibold text-base border border-white/30 text-white hover:bg-white/10 transition-colors"
              >
                <MessageCircle size={18} />
                Hablemos por WhatsApp
              </a>
            </div>
          </motion.div>

          {/* Right: Photo placeholder */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.2, ease: "easeOut" }}
            className="hidden lg:flex justify-center items-center"
          >
            <div
              className="relative w-80 h-96 rounded-3xl overflow-hidden border border-white/20"
              style={{
                background: "linear-gradient(135deg, rgba(212,162,76,0.15) 0%, rgba(255,255,255,0.05) 100%)",
                backdropFilter: "blur(10px)",
              }}
            >
              <Image
                src="/images/photo.jpeg"
                alt="José Luis Arteta"
                fill
                className="object-cover object-top"
                priority
              />

              {/* Decorative card overlay */}
              <div
                className="absolute bottom-4 left-4 right-4 rounded-xl p-3 border border-white/20"
                style={{ background: "rgba(13,31,51,0.8)", backdropFilter: "blur(8px)" }}
              >
                <p className="text-white text-sm font-semibold">José Luis Arteta</p>
                <p className="text-xs mt-0.5" style={{ color: "#D4A24C" }}>
                  Desarrollador Web
                </p>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Stats row */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.5 }}
          className="mt-16 grid grid-cols-3 gap-4 sm:gap-8 max-w-lg"
        >
          {[
            { value: "~1 año", label: "de experiencia" },
            { value: "100%", label: "dedicación al proyecto" },
            { value: "30 días", label: "soporte gratuito" },
          ].map((stat) => (
            <div key={stat.label} className="text-center sm:text-left">
              <p className="font-heading font-bold text-xl sm:text-2xl" style={{ color: "#D4A24C" }}>
                {stat.value}
              </p>
              <p className="text-xs sm:text-sm text-white/50 mt-0.5">{stat.label}</p>
            </div>
          ))}
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-white/30 hidden sm:block"
        animate={{ y: [0, 6, 0] }}
        transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
      >
        <ArrowDown size={22} />
      </motion.div>
    </section>
  )
}
