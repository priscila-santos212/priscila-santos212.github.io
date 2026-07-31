/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,ts,tsx}"],
  darkMode: "class",
  theme: {
    extend: {
      // ── Design tokens (paleta verde sálvia) ──────────────────────────────
      // Edite aqui para reajustar a identidade visual em um só lugar.
      colors: {
        sage: {
          DEFAULT: "#8FA58C", // primária — verde sálvia
          deep: "#5F7259", // hover / contraste
        },
        forest: "#3E4A3A", // verde profundo — títulos de destaque, footer
        graphite: "#2E332F", // texto principal
        cream: "#FAF9F6", // fundo claro / branco quente
        mist: "#E9EBE6", // fundos alternados
        stone: "#DDE1DA", // bordas / divisórias
        terracotta: {
          DEFAULT: "#C9A18B", // acento quente — usar com parcimônia
          deep: "#B4876F",
        },
        // WhatsApp (CTA) — marca oficial
        whatsapp: {
          DEFAULT: "#25D366",
          deep: "#128C7E",
        },
      },
      fontFamily: {
        // Self-hosted via @fontsource-variable (importadas no global.css)
        serif: ['"Fraunces Variable"', "Georgia", "Cambria", "serif"],
        sans: ['"Inter Variable"', "system-ui", "Segoe UI", "sans-serif"],
      },
      fontSize: {
        // Escala tipográfica confortável para leitura longa
        "display": ["clamp(2.25rem, 5vw, 3.75rem)", { lineHeight: "1.08", letterSpacing: "-0.02em" }],
        "h2": ["clamp(1.75rem, 3.2vw, 2.5rem)", { lineHeight: "1.15", letterSpacing: "-0.01em" }],
        "h3": ["clamp(1.25rem, 2vw, 1.6rem)", { lineHeight: "1.25" }],
        "lead": ["clamp(1.1rem, 1.6vw, 1.3rem)", { lineHeight: "1.6" }],
      },
      borderRadius: {
        xl: "1rem",
        "2xl": "1.5rem",
        "3xl": "2rem",
      },
      boxShadow: {
        soft: "0 4px 24px -8px rgba(46, 51, 47, 0.12)",
        "soft-lg": "0 12px 40px -12px rgba(46, 51, 47, 0.18)",
        card: "0 2px 12px -4px rgba(46, 51, 47, 0.10)",
      },
      maxWidth: {
        reading: "68ch", // largura de leitura confortável
        content: "1200px",
      },
      spacing: {
        section: "clamp(4rem, 9vw, 8rem)", // respiro vertical entre seções
      },
      transitionTimingFunction: {
        gentle: "cubic-bezier(0.22, 1, 0.36, 1)",
      },
    },
  },
  plugins: [],
};
