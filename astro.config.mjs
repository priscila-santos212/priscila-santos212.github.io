// @ts-check
import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";
import sitemap from "@astrojs/sitemap";

// Origem pública onde o site é servido.
// DEMO no GitHub Pages: https://emersonleo.github.io  (base "/priscila").
// ⚠️ [PREENCHER] Ao migrar para o domínio próprio, troque `site` pela URL real
// e REMOVA a linha `base` abaixo. Mantenha em sincronia com `seo.siteUrl`
// em src/data/site.ts e com o Sitemap em public/robots.txt.
const SITE_URL = "https://emersonleo.github.io";
const BASE_PATH = "/priscila"; // subcaminho da demo; remova ao usar domínio próprio

// https://astro.build/config
export default defineConfig({
  site: SITE_URL,
  base: BASE_PATH,
  // Saída estática (SSG) — melhor para SEO/performance e hospedagem simples.
  output: "static",
  integrations: [
    tailwind({
      // Injetamos o CSS base do Tailwind manualmente via src/styles/global.css
      applyBaseStyles: false,
    }),
    sitemap(),
  ],
  image: {
    // Habilita AVIF/WebP responsivos via o serviço de imagem embutido (sharp).
    service: { entrypoint: "astro/assets/services/sharp" },
  },
  build: {
    // CSS inline pequeno para reduzir requisições e melhorar LCP.
    inlineStylesheets: "auto",
  },
});
