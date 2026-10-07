import type { NextConfig } from "next";

// Repo project site: https://<user>.github.io/portfolio-2026/
// basePath/assetPrefix hanya aktif saat build di GitHub Actions,
// agar `npm run dev` lokal tetap jalan di `/` tanpa prefix.
const repo = "portfolio-2026";
const isGithubPages = process.env.GITHUB_ACTIONS === "true";

const nextConfig: NextConfig = {
  output: "export",
  basePath: isGithubPages ? `/${repo}` : "",
  assetPrefix: isGithubPages ? `/${repo}/` : "",
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
