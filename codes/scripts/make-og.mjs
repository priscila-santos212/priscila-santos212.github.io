/**
 * Gera public/og-image.jpg (1200x630) a partir da foto de capa.
 * Rode com: npm run make:og
 *
 * Por que 1200x630: é a proporção recomendada para Open Graph / Twitter Cards,
 * usada em previews de WhatsApp, LinkedIn, Facebook etc.
 *
 * [PREENCHER opcional] Para uma OG image "de marca" (com nome + CRP sobrepostos),
 * substitua public/og-image.jpg por uma arte finalizada no mesmo tamanho.
 */
import sharp from "sharp";
import { fileURLToPath } from "node:url";
import { dirname, resolve } from "node:path";

const __dirname = dirname(fileURLToPath(import.meta.url));
const SRC = resolve(__dirname, "../src/assets/priscila-capa-hero.jpg");
const OUT = resolve(__dirname, "../public/og-image.jpg");

await sharp(SRC)
  .resize(1200, 630, {
    fit: "cover",
    position: "top", // mantém o rosto visível no recorte paisagem
  })
  .jpeg({ quality: 82, mozjpeg: true })
  .toFile(OUT);

console.log("✓ OG image gerada em public/og-image.jpg (1200x630)");
