import type { NextConfig } from "next";
import { existsSync } from "node:fs";
import { join } from "node:path";

// Repo project site: https://<user>.github.io/portfolio-2026/
// Jika repo memakai custom domain (public/CNAME ada, mis. purmanto.my.id),
// situs diserve dari root domain sehingga basePath HARUS kosong.
// basePath/assetPrefix hanya dipakai saat project-pages tanpa custom domain,
// dan hanya aktif saat build di GitHub Actions agar `npm run dev` lokal
// tetap jalan di `/` tanpa prefix.
const repo = "portfolio-2026";
const isGithubPages = process.env.GITHUB_ACTIONS === "true";
const hasCustomDomain = existsSync(join(process.cwd(), "public", "CNAME"));
const useBasePath = isGithubPages && !hasCustomDomain;

const nextConfig: NextConfig = {
  output: "export",
  basePath: useBasePath ? `/${repo}` : "",
  assetPrefix: useBasePath ? `/${repo}/` : "",
  trailingSlash: true,
  images: {
    unoptimized: true,
    remotePatterns: [
      { protocol: "https", hostname: "s.wordpress.com" },
      { protocol: "https", hostname: "image.thum.io" },
      { protocol: "https", hostname: "api.microlink.io" },
      { protocol: "https", hostname: "shot.screenshotapi.net" },
    ],
    // also allow unoptimized fallback – handled in component
  },
};

export default nextConfig;
