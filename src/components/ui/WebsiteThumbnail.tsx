"use client";

import { useState } from "react";
import Image from "next/image";
import { Globe } from "lucide-react";

export function getScreenshotUrl(url: string, width = 1280): string {
  // WordPress mShots – free, no API key, reliable for gov domains
  // docs: https://developer.wordpress.com/docs/photon/mshots/
  return `https://s.wordpress.com/mshots/v1/${encodeURIComponent(url)}?w=${width}`;
}

export function getScreenshotFallbackUrl(url: string): string {
  // thum.io as fallback provider
  return `https://image.thum.io/get/width/800/crop/600/noanimate/${url}`;
}

type WebsiteThumbnailProps = {
  url?: string;
  title: string;
  fallbackSrc?: string;
  className?: string;
  priority?: boolean;
};

/**
 * Renders a 16:9 thumbnail using live screenshot from the website URL.
 * Falls back gracefully: mShots -> thum.io -> local image -> placeholder.
 */
export function WebsiteThumbnail({
  url,
  title,
  fallbackSrc,
  className = "",
  priority = false,
}: WebsiteThumbnailProps) {
  const [stage, setStage] = useState<0 | 1 | 2 | 3>(0);
  // 0 = mShots, 1 = thum.io, 2 = local fallback, 3 = placeholder

  const mshots = url ? getScreenshotUrl(url) : null;
  const thum = url ? getScreenshotFallbackUrl(url) : null;

  let src: string | null = null;
  if (stage === 0 && mshots) src = mshots;
  else if (stage === 1 && thum) src = thum;
  else if (stage === 2 && fallbackSrc) src = fallbackSrc;
  else src = null;

  const handleError = () => {
    if (stage === 0 && thum) setStage(1);
    else if (stage === 1 && fallbackSrc) setStage(2);
    else setStage(3);
  };

  return (
    <div className={`relative overflow-hidden bg-accent/30 ${className}`}>
      {/* Browser chrome bar */}
      <div className="absolute top-0 left-0 right-0 z-10 flex items-center gap-1.5 px-3 py-2 bg-muted/80 backdrop-blur border-b border-border/50">
        <span className="h-2.5 w-2.5 rounded-full bg-red-400" />
        <span className="h-2.5 w-2.5 rounded-full bg-yellow-400" />
        <span className="h-2.5 w-2.5 rounded-full bg-green-400" />
        <span className="ml-2 flex-1 flex items-center gap-1.5 text-[11px] text-muted-foreground truncate bg-background/60 rounded-full px-2.5 py-1 border border-border/50">
          <Globe size={12} className="shrink-0" />
          <span className="truncate">{url ? new URL(url).hostname : title}</span>
        </span>
      </div>

      <div className="absolute inset-0 pt-8">
        {src ? (
          <Image
            src={src}
            alt={`Screenshot ${title}`}
            fill
            className="object-cover object-top group-hover:scale-105 transition-transform duration-700"
            onError={handleError}
            priority={priority}
            unoptimized={stage < 2} // external screenshot domains are not optimized
          />
        ) : (
          <div className="absolute inset-0 flex flex-col items-center justify-center gap-2 text-muted-foreground p-4 text-center">
            <div className="h-12 w-12 rounded-xl bg-primary/10 flex items-center justify-center">
              <Globe size={20} className="text-primary" />
            </div>
            <p className="text-sm font-medium line-clamp-1">{title}</p>
            <p className="text-xs opacity-70">Preview tidak tersedia</p>
          </div>
        )}
        {/* gradient on hover */}
        <div className="absolute inset-0 bg-gradient-to-t from-background/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      </div>
    </div>
  );
}
