# 👨‍💻 JAPOZO.DEV | Portfolio System

> "Rooted in Hardware. Compiled for Frontend."

Bienvenido al código fuente de mi portfolio personal. Este proyecto representa la evolución de mi sitio web: una migración completa desde Vanilla HTML/JS hacia una arquitectura moderna basada en componentes con **Astro**.

El objetivo es fusionar dos mundos: la nostalgia de los terminales de fósforo verde y la limpieza de una UI moderna.

---

## 🖥️ Concepto: Dual Mode

El sitio cuenta con una arquitectura de **Doble Interfaz** para satisfacer a dos tipos de usuarios:

### 1. 📟 Terminal Mode (Root)
La experiencia por defecto. Una inmersión en la estética hacker de los 90s.
- Efectos **CRT / Scanlines** realizados con CSS puro.
- Animación de escritura de comandos en tiempo real.
- Navegación inmersiva.

### 2. 🛡️ Safe Mode (Visual UI)
Una interfaz gráfica moderna y accesible para reclutadores y lectura rápida.
- Diseño limpio y responsive.
- Grid de tecnologías visual.
- Modo claro para facilitar la legibilidad.

---

## 🛠️ Stack Tecnológico

He refactorizado el código "espagueti" original para usar una arquitectura de componentes reutilizables.

| Tecnología | Uso en el proyecto |
|------------|-------------------|
| **[Astro](https://astro.build/)** | Framework principal. Renderizado estático (SSG) para máximo rendimiento. |
| **HTML5 / CSS3** | Estructura semántica y animaciones complejas (Keyframes, CRT effects, Grid Layout). |
| **JavaScript (ES6+)** | Lógica del cliente: "Typewriter effect", manejo del DOM y selectores de modo. |
| **SVG Components** | Sistema de iconos modular (`.astro`). Los mismos iconos se adaptan visualmente (color/relleno) según el modo (Terminal o Safe). |

---

## 📂 Estructura del Proyecto

El código está organizado para ser escalable y limpio:

```text
/
├── public/              # Assets estáticos (imágenes, CSS global, fuentes)
├── src/
│   ├── components/      # Componentes reutilizables
│   │   ├── AsciiArt.astro   # Bloque de arte ASCII encapsulado
│   │   └── icons/           # Colección de iconos SVG dinámicos
│   └── pages/           # Rutas del sitio
│       ├── index.astro      # Terminal Mode (Home)
│       └── safeMode.astro   # Visual Mode
└── astro.config.mjs     # Configuración del compilador