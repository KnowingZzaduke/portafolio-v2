# Portafolio Profesional — José Luis Arteta

Portafolio freelance para vender servicios de desarrollo web a PYMEs del sector turístico (restaurantes, hoteles boutique) en Cartagena, Colombia. Los clientes objetivo son dueños de negocio **no técnicos** — el copy habla de resultados (reservas, dinero, clientes), no de tecnología.

## Stack

- **Next.js 16.2.4** con App Router y Turbopack
- **TypeScript** estricto
- **Tailwind CSS v4** — sin `tailwind.config.ts`; la paleta se extiende vía `@theme inline` en `globals.css`
- **shadcn/ui** basado en `@base-ui/react` (⚠️ NO es Radix UI — el `Button` no tiene prop `asChild`)
- **Framer Motion 12.x** — los tipos de `ease` requieren `as const`; importar `Variants` explícitamente
- **next-themes** — `attribute="class"`, `defaultTheme="light"`, `enableSystem={false}`
- **lucide-react v1.x** — ⚠️ NO tiene `Github` ni `Linkedin`; usar SVG inline para iconos de redes sociales

## Paleta de colores (brand)

Definida en `app/globals.css` dentro de `@theme inline`:

| Token Tailwind | Hex | Uso |
|---|---|---|
| `bg-navy` | `#1E3A5F` | Color principal, texto sobre fondo claro |
| `bg-navy-dark` | `#0D1F33` | Fondo secciones oscuras (Hero, Proceso, Contacto) |
| `bg-navy-light` | `#2A4D7A` | Variante clara del navy |
| `bg-gold` / `text-gold` | `#D4A24C` | Acento, CTAs, highlights |
| `bg-gold-dark` | `#B8882E` | Hover de botones gold |
| `bg-cream` | `#FAF8F5` | Fondo claro principal |
| `bg-warm-beige` | `#F5F0E8` | Fondo secciones alternas |

Las secciones alternan: cream → blanco → warm-beige → navy (oscuro) → blanco → cream → navy (oscuro).

## Tipografía

- **Plus Jakarta Sans** (`--font-plus-jakarta`) — cuerpo, UI, precios
- **Playfair Display** (`--font-playfair`) — títulos (`font-heading`)

Ambas importadas desde Google Fonts en `app/layout.tsx`.

## Estructura de archivos

```
portafolio-zadu/
├── app/
│   ├── globals.css          # Paleta brand + shadcn theme override
│   ├── layout.tsx           # Fuentes, metadata SEO, ThemeProvider, Navbar, WhatsAppButton
│   └── page.tsx             # Ensambla todas las secciones + Footer
├── components/
│   ├── sections/
│   │   ├── HeroSection.tsx           # Navy gradient, nombre, CTAs, stats, indicador verde
│   │   ├── ProblemSection.tsx        # 3 pain points con stats (cream bg)
│   │   ├── ServicesSection.tsx       # 3 cards de servicio con precios (white bg)
│   │   ├── ProjectsSection.tsx       # 2 demo cards con mockup browser (warm-beige bg)
│   │   ├── ProcessSection.tsx        # 4 pasos numerados (navy dark bg)
│   │   ├── DifferentiatorsSection.tsx # 4 diferenciadores, layout dividido (white bg)
│   │   ├── FaqSection.tsx            # Acordeón 6 preguntas (cream bg)
│   │   └── ContactSection.tsx        # CTA final WhatsApp + email (navy dark bg)
│   ├── shared/
│   │   ├── Navbar.tsx         # Sticky, transparente→sólido al scroll, menú mobile con AnimatePresence
│   │   ├── Footer.tsx         # Links sociales con SVG inline, año dinámico
│   │   ├── ThemeProvider.tsx  # Wrapper 'use client' de next-themes
│   │   ├── ThemeToggle.tsx    # Botón Moon/Sun con estado mounted
│   │   └── WhatsAppButton.tsx # Botón flotante verde, animación spring al cargar
│   └── ui/                   # Generados por shadcn: button, accordion, card, badge, separator
├── lib/
│   ├── constants.ts   # TODA la data: CONTACT, SERVICES, PROJECTS, PAIN_POINTS, PROCESS_STEPS, DIFFERENTIATORS, FAQ_ITEMS, NAV_LINKS
│   └── utils.ts       # cn() helper de shadcn
└── public/
    └── images/        # Vacío — pendiente agregar fotos reales
```

## Datos y contenido (lib/constants.ts)

### CONTACT
```ts
whatsappNumber: "573XXXXXXXXXX"  // ⚠️ PENDIENTE: reemplazar con número real
email: "jaitsk92@gmail.com"
linkedin: "..."  // ⚠️ PENDIENTE: actualizar
github: "..."    // ⚠️ PENDIENTE: actualizar
```

### SERVICES (3 servicios)
1. **Restaurante** — Desde $1.800.000 COP, 2–3 semanas
2. **Hotel Boutique** — Desde $3.000.000 COP, 3–4 semanas (card destacada en navy)
3. **Mantenimiento** — Desde $300.000 COP/mes

### PROJECTS (2 demos placeholder)
- "Restaurante La Cevichería" — gradiente ámbar/café
- "Casa Boutique San Diego" — gradiente azul navy
- ⚠️ PENDIENTE: reemplazar `demoUrl: "#"` con URLs reales

## Patrones importantes

### Botones como links (sin `asChild`)
El Button de @base-ui no tiene `asChild`. Usar clases directamente sobre `<a>`:
```tsx
// ✅ Correcto
<a href="..." className="inline-flex items-center justify-center h-12 px-6 rounded-xl bg-gold text-navy font-semibold ...">
  Texto
</a>

// ❌ Incorrecto — no funciona
<Button asChild><a href="...">Texto</a></Button>
```

### Framer Motion variants tipados
```ts
import { motion, type Variants } from "framer-motion"

const myVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  show: {
    opacity: 1,
    y: 0,
    transition: { ease: "easeOut" as const, duration: 0.4 },
  },
}
```

### Dark mode
Usa clase `.dark` en `<html>` (next-themes). Las secciones sobre fondo navy usan colores hardcodeados con `style={{}}` ya que el contraste es idéntico en dark/light mode cuando el fondo es navy.

### Tailwind v4 — colores custom
Sin `tailwind.config.ts`. Los colores brand se definen en `globals.css`:
```css
@theme inline {
  --color-navy: #1E3A5F;
  --color-gold: #D4A24C;
  /* ... */
}
```
Esto genera utilidades `bg-navy`, `text-gold`, etc.

## TODOs pendientes

- [ ] Reemplazar número WhatsApp placeholder en `lib/constants.ts`
- [ ] Agregar foto real en `HeroSection.tsx` con `next/image`
- [ ] Actualizar URLs LinkedIn y GitHub
- [ ] Agregar demos reales en `PROJECTS[].demoUrl` y `detailsUrl`
- [ ] Crear página de detalle de proyectos en `app/proyectos/[slug]/page.tsx`
- [ ] Agregar fotos reales de Cartagena/restaurantes en `/public/images/`
- [ ] Configurar dominio y deploy en Vercel
- [ ] Agregar Google Analytics o Plausible para tracking
- [ ] Potencial: sección de testimonios cuando haya clientes reales

## Comandos

```bash
# Desarrollo (desde portafolio-zadu/)
npm run dev       # http://localhost:3000

# Build de producción
npm run build

# Lint
npm run lint
```
