import type { Metadata } from "next"
import { Plus_Jakarta_Sans, Playfair_Display } from "next/font/google"
import "./globals.css"
import { ThemeProvider } from "@/components/shared/ThemeProvider"
import { Navbar } from "@/components/shared/Navbar"
import { WhatsAppButton } from "@/components/shared/WhatsAppButton"

const plusJakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-plus-jakarta",
  display: "swap",
  weight: ["300", "400", "500", "600", "700"],
})

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
  display: "swap",
  weight: ["400", "600", "700"],
})

export const metadata: Metadata = {
  title: "José Luis Arteta | Páginas Web para Restaurantes y Hoteles en Cartagena",
  description:
    "Desarrollo web profesional para restaurantes y hoteles boutique en Cartagena, Colombia. Motor de reservas directas, bilingüe ES/EN, SEO local. Deja de pagar comisiones a Booking.",
  keywords: [
    "desarrollo web Cartagena",
    "página web restaurante Cartagena",
    "página web hotel boutique Colombia",
    "motor de reservas directo",
    "SEO local Cartagena",
    "diseño web turismo Colombia",
  ],
  authors: [{ name: "José Luis Arteta" }],
  openGraph: {
    title: "José Luis Arteta | Páginas Web para Restaurantes y Hoteles en Cartagena",
    description:
      "Páginas web que generan reservas directas y atraen turistas extranjeros. Especializado en sector turístico de Cartagena.",
    type: "website",
    locale: "es_CO",
  },
  twitter: {
    card: "summary_large_image",
    title: "José Luis Arteta | Desarrollo Web Cartagena",
    description:
      "Páginas web profesionales para restaurantes y hoteles boutique en Cartagena.",
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html
      lang="es"
      className={`${plusJakarta.variable} ${playfair.variable}`}
      suppressHydrationWarning
    >
      <body className="min-h-screen antialiased">
        <ThemeProvider>
          <Navbar />
          <main>{children}</main>
          <WhatsAppButton />
        </ThemeProvider>
      </body>
    </html>
  )
}
