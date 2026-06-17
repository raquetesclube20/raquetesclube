import { copyFileSync, existsSync, mkdirSync } from "node:fs";
import { join } from "node:path";

const distDir = join(process.cwd(), "dist");
const indexPath = join(distDir, "index.html");
const routes = ["americana", "nova-odessa"];

if (!existsSync(indexPath)) {
  throw new Error("dist/index.html nao encontrado. Rode o Vite build antes de criar rotas estaticas.");
}

for (const route of routes) {
  const routeDir = join(distDir, route);
  mkdirSync(routeDir, { recursive: true });
  copyFileSync(indexPath, join(routeDir, "index.html"));
}
