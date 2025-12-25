# Documento de Arquitectura Técnica - TicoGPS

## 1. Stack Tecnológico

* **Frontend Framework:** React 18 (via Vite).

* **Lenguaje:** TypeScript.

* **Estilos:** Tailwind CSS.

* **Componentes:** Shadcn/ui (basado en Radix UI) + Lucide React (iconos).

* **Routing:** React Router DOM v6.

* **Estado:** Zustand (si es necesario manejo de estado global complejo, por ahora local es suficiente).

* **SEO:** `react-helmet-async` para gestión de `<head>`, generación de Sitemap manual.

* **Animaciones:** Framer Motion (para toques modernos y elegantes).

* **Formularios:** React Hook Form + Zod (validación).

## 2. Estructura de Directorios

```
src/
├── components/
│   ├── layout/       # Header, Footer, Layout
│   ├── ui/           # Botones, Cards, Inputs (Shadcn)
│   ├── sections/     # Secciones de páginas (Hero, ServicesSection)
│   └── seo/          # Componente SEO reutilizable
├── pages/            # Home, Services, Contact, etc.
├── utils/            # Helpers, constantes
├── assets/           # Imágenes, iconos
└── App.tsx           # Configuración de rutas
```

## 3. Estrategia SEO (Crucial)

Dado que es una SPA (Single Page Application), utilizaremos `react-helmet-async` para inyectar meta tags dinámicamente.

* **Schema Markup:** Se implementará JSON-LD para `LocalBusiness` con la dirección de Cartago, horario y servicios.

* **Meta Tags:** Title, Description, OG Images, Canonical URLs en cada ruta.

* **Performance:** Code splitting con `React.lazy` para rutas no críticas si el bundle crece.

## 4. Datos

* **Contenido:** Hardcoded en archivos JSON o constantes TS para fácil edición (ej. `services-data.ts`).

* **Contacto:** El formulario, al no tener backend dedicado en esta fase inicial, podría integrarse con un servicio como EmailJS o simplemente loguear a consola/mostrar éxito visualmente.

## 5. Despliegue

* Preparado para despliegue en Vercel, Netlify o cualquier host estático.

