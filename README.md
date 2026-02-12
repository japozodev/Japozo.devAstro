# 👨‍💻 JAPOZO.DEV | Portfolio System

> "Rooted in Hardware. Compiled for Frontend."

Bienvenido al código fuente de mi portfolio personal. Este proyecto ha evolucionado desde una web estática hacia una **arquitectura de componentes moderna con Astro**.

El objetivo sigue siendo fusionar dos mundos: la nostalgia de los terminales de fósforo verde y la limpieza de una UI moderna, pero ahora bajo un código **limpio, escalable y modular**.

---

## 🖥️ Concepto: Dual Mode

El sistema cuenta con una arquitectura de **Doble Interfaz** servida bajo el mismo núcleo:

### 1. 📟 Terminal Mode (Root)
La experiencia por defecto. Una inmersión en la estética hacker de los 90s.
- Efectos **CRT / Scanlines** CSS puro.
- Animación de escritura en tiempo real.
- Navegación por comandos.

### 2. 🛡️ Safe Mode (Visual UI)
Interfaz gráfica moderna para facilitar la legibilidad.
- Diseño limpio y responsive.
- Grid de tecnologías visual.
- Modo claro (Light Mode) con paleta corporativa.

---

## 🛠️ Stack y Arquitectura

El código ha sido refactorizado siguiendo principios **DRY (Don't Repeat Yourself)** y **Clean Code**.

| Tecnología | Implementación |
|------------|----------------|
| **[Astro](https://astro.build/)** | Core Framework. SSG (Static Site Generation). |
| **SEO Automation** | Generación automática de `sitemap.xml` y configuración de `robots.txt` para indexación óptima. |
| **Astro Layouts** | Gestión centralizada del SEO, `<head>` y scripts globales mediante `BaseLayout.astro`. |
| **Global Config** | Archivo `src/config.js` como **Single Source of Truth** para datos del sitio, email y redes sociales. |
| **UI Abstraction** | Uso de componentes específicos (`TerminalCard`, `VisualCard`) para encapsular la lógica visual de los proyectos. |
| **Smart Components** | Iconos SVG (`.astro`) que adaptan su color y relleno automáticamente según el contexto. |

---

## 📂 Estructura del Proyecto

Organización actual tras la refactorización:

```text
/
├── public/              # Assets estáticos
│   ├── Assets/          # CSS, JS, Imágenes
│   └── robots.txt       # Reglas de indexación para buscadores
├── src/
│   ├── config.js        # Configuración Global (Datos, RRSS)
│   ├── components/      # Piezas reutilizables
│   │   ├── AsciiArt.astro     # Arte ASCII encapsulado
│   │   ├── TerminalCard.astro # Tarjeta de proyecto (Estilo Matrix)
│   │   ├── VisualCard.astro   # Tarjeta de proyecto (Estilo Clean)
│   │   └── icons/             # Colección de SVGs dinámicos
│   │
│   ├── layouts/         # PLANTILLAS MAESTRAS
│   │   └── BaseLayout.astro   # Controla SEO, Metas y Estructura base
│   │
│   └── pages/           # Vistas (Clean Code)
│       ├── index.astro        # Terminal Mode (Lógica pura + Componentes)
│       └── safeMode.astro     # Visual Mode (Lógica pura + Componentes)
└── astro.config.mjs     # Configuración del compilador (Sitemap integrations)

