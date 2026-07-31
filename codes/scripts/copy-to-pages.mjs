/**
 * Publica a demo no GitHub Pages (subcaminho /priscila).
 *
 * O Astro está com base "/priscila", mas gera os arquivos em dist/ (na raiz do
 * build). Como este repositório é servido pelo Pages a partir da raiz da branch,
 * copiamos o conteúdo de dist/ para a pasta ./priscila (que é versionada e
 * publicada). Assim o site fica em https://emersonleo.github.io/priscila/.
 *
 * Uso:  npm run deploy:pages   (roda o build e depois este script)
 */
import { rm, cp, writeFile, readdir } from "node:fs/promises";
import { existsSync } from "node:fs";
import { fileURLToPath } from "node:url";
import { dirname, resolve } from "node:path";

const __dirname = dirname(fileURLToPath(import.meta.url));
const root = resolve(__dirname, "..");
const dist = resolve(root, "dist");
const target = resolve(root, "priscila");

if (!existsSync(dist)) {
  console.error("✗ dist/ não encontrado. Rode `npm run build` antes.");
  process.exit(1);
}

// Limpa a pasta de destino e copia o build novo.
await rm(target, { recursive: true, force: true });
await cp(dist, target, { recursive: true });

// Garante o .nojekyll também dentro de /priscila (defensivo).
await writeFile(resolve(target, ".nojekyll"), "");

const files = await readdir(target);
console.log(`✓ Copiado dist/ → priscila/ (${files.length} itens)`);
console.log("  Agora: git add -A && git commit -m \"deploy demo\" && git push");
