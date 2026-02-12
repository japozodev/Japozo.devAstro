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

El código ha sido refactorizado siguiendo principios **DRY (Don't Repeat Yourself)**.

| Tecnología | Implementación |
|------------|----------------|
| **[Astro](https://astro.build/)** | Core Framework. SSG (Static Site Generation). |
| **Astro Layouts** | **Nuevo:** Gestión centralizada del SEO, `<head>` y scripts globales mediante `BaseLayout.astro`. |
| **Data-Driven UI** | Separación lógica/vista. Los proyectos y skills se inyectan mediante Arrays de objetos, manteniendo el HTML limpio. |
| **Smart Components** | Iconos SVG (`.astro`) que adaptan su color y relleno automáticamente según el contexto (Terminal vs Visual). |

---

## 📂 Estructura del Proyecto

Organización actual tras la refactorización v1.1:

```text
/
├── public/              # Assets estáticos (imágenes, CSS global)
├── src/
│   ├── components/      # Piezas reutilizables (Lego blocks)
│   │   ├── AsciiArt.astro   # Arte ASCII encapsulado
│   │   └── icons/           # Colección de SVGs dinámicos
│   │
│   ├── layouts/         # ✨ PLANTILLAS MAESTRAS
│   │   └── BaseLayout.astro # Controla SEO, Metas y Estructura base
│   │
│   └── pages/           # Vistas (Clean Code)
│       ├── index.astro      # Terminal Mode (Inyecta datos oscuros)
│       └── safeMode.astro   # Visual Mode (Inyecta datos claros)
└── astro.config.mjs     # Configuración del compilador
