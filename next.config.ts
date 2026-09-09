import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
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
