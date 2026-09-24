// The one bitmap the site ships: the Room's aurora backdrop, from the app's
// own backdrops, as WebP at the size the Room preview draws it. Everything
// else on the page is drawn by the components. Run: pnpm --filter @kikoe/site images
import { mkdir } from "node:fs/promises";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";
import sharp from "sharp";

const here = dirname(fileURLToPath(import.meta.url));
// The app lives in its own repo; KIKOE_REPO points at a checkout (default: ../kikoe).
const kikoe = process.env.KIKOE_REPO ?? join(here, "../../kikoe");
const src = join(kikoe, "packages/app/renderer/backdrops/aurora-dark.jpg");
const out = join(here, "../public/img");
await mkdir(out, { recursive: true });

const info = await sharp(src)
  .resize({ width: 1280, height: 800, fit: "cover" })
  .webp({ quality: 72, effort: 6 })
  .toFile(join(out, "backdrop.webp"));
console.log(`backdrop.webp ${info.width}×${info.height} ${(info.size / 1024).toFixed(0)} KB`);
