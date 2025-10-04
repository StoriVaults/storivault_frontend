// src/components/ui/logo.tsx
"use client";

import { Link } from "react-router-dom";
import { cn } from "@/lib/utils";
import { useEffect } from "react";

interface LogoProps {
  className?: string;
  showText?: boolean;
  size?: "sm" | "md" | "lg";
  asLink?: boolean;
  variant?: "default" | "light" | "dark";
}

export function Logo({
  className,
  showText = true,
  size = "md",
  asLink = true,
  variant = "default",
}: LogoProps) {
  const sizes = {
    sm: {
      container: "h-8",
      icon: "h-8 w-8",
      text: "text-xl",
      tagline: "text-[10px]",
      spacing: "gap-2",
      textGap: "gap-0.5",
    },
    md: {
      container: "h-10",
      icon: "h-10 w-10",
      text: "text-2xl",
      tagline: "text-xs",
      spacing: "gap-2.5",
      textGap: "gap-0.5",
    },
    lg: {
      container: "h-14",
      icon: "h-14 w-14",
      text: "text-4xl",
      tagline: "text-sm",
      spacing: "gap-3",
      textGap: "gap-1",
    },
  };

  // Set favicon dynamically (only run once on mount)
  useEffect(() => {
    // Only update favicon if we're showing the logo (main app load)
    if (
      typeof window !== "undefined" &&
      !document.querySelector('link[rel="icon"][data-dynamic="true"]')
    ) {
      const link = document.createElement("link");
      link.rel = "icon";
      link.type = "image/svg+xml";
      link.setAttribute("data-dynamic", "true");

      // Create inline SVG favicon
      const svgFavicon = `
        <svg width="32" height="32" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg">
          <rect width="32" height="32" rx="6" fill="%23FF6B35"/>
          <path d="M5 6h9v20H5z" fill="white" opacity="0.9"/>
          <path d="M18 6h9v20h-9z" fill="white" opacity="0.85"/>
          <rect x="14" y="6" width="4" height="20" fill="%23E85D04"/>
          <path d="M16 3v10l-2-2-2 2V3h4z" fill="%23FFD700"/>
        </svg>
      `;

      link.href = `data:image/svg+xml,${encodeURIComponent(svgFavicon)}`;

      // Remove any existing dynamic favicon
      const existingDynamic = document.querySelector(
        'link[rel="icon"][data-dynamic="true"]'
      );
      if (existingDynamic) {
        existingDynamic.remove();
      }

      document.head.appendChild(link);
    }
  }, []);

  const logoIcon = (
    <svg
      viewBox="0 0 48 48"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={sizes[size].icon}
    >
      <defs>
        <linearGradient id="vaultGradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#FF6B35" />
          <stop offset="50%" stopColor="#FF8C42" />
          <stop offset="100%" stopColor="#FFA500" />
        </linearGradient>
        <linearGradient id="spineGradient" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="#E85D04" />
          <stop offset="100%" stopColor="#D84315" />
        </linearGradient>
        <linearGradient
          id="bookmarkGradient"
          x1="0%"
          y1="0%"
          x2="100%"
          y2="100%"
        >
          <stop offset="0%" stopColor="#FFD700" />
          <stop offset="100%" stopColor="#FFC107" />
        </linearGradient>
      </defs>

      {/* Book container */}
      <rect
        x="4"
        y="6"
        width="40"
        height="36"
        rx="4"
        ry="4"
        fill="url(#vaultGradient)"
        opacity="0.1"
      />

      {/* Left book cover */}
      <path
        d="M8 8C8 6.89543 8.89543 6 10 6H22V42H10C8.89543 42 8 41.1046 8 40V8Z"
        fill="url(#vaultGradient)"
      />

      {/* Right book cover */}
      <path
        d="M26 6H38C39.1046 6 40 6.89543 40 8V40C40 41.1046 39.1046 42 38 42H26V6Z"
        fill="url(#vaultGradient)"
        opacity="0.85"
      />

      {/* Book spine */}
      <rect x="22" y="6" width="4" height="36" fill="url(#spineGradient)" />

      {/* Pages on left */}
      <rect x="10" y="10" width="10" height="28" fill="white" opacity="0.9" />

      {/* Pages on right */}
      <rect x="28" y="10" width="10" height="28" fill="white" opacity="0.85" />

      {/* Bookmark ribbon */}
      <path
        d="M24 4 L28 4 L28 20 L26 18 L24 20 Z"
        fill="url(#bookmarkGradient)"
      />
    </svg>
  );

  const logoContent = (
    <>
      {logoIcon}
      {showText && (
        <div
          className={cn("flex flex-col justify-center", sizes[size].textGap)}
        >
          <span className={cn("leading-none tracking-tight", sizes[size].text)}>
            <span
              className={cn(
                "font-bold",
                variant === "light"
                  ? "text-white"
                  : variant === "dark"
                  ? "text-gray-900"
                  : "text-orange-500"
              )}
              style={{ fontFamily: "'Inter', sans-serif" }}
            >
              Stori
            </span>
            <span
              className={cn(
                "font-medium",
                variant === "light"
                  ? "text-gray-200"
                  : variant === "dark"
                  ? "text-gray-700"
                  : "text-gray-700 dark:text-gray-300"
              )}
              style={{ fontFamily: "'Inter', sans-serif" }}
            >
              Vault
            </span>
          </span>
          <span
            className={cn(
              "uppercase tracking-[0.25em] font-medium",
              sizes[size].tagline,
              variant === "light"
                ? "text-gray-300"
                : variant === "dark"
                ? "text-gray-500"
                : "text-gray-500 dark:text-gray-400"
            )}
            style={{ fontFamily: "'Inter', sans-serif" }}
          >
            Your Story Awaits
          </span>
        </div>
      )}
    </>
  );

  if (!asLink) {
    return (
      <div className={cn("flex items-center", sizes[size].spacing, className)}>
        {logoContent}
      </div>
    );
  }

  return (
    <Link
      to="/"
      className={cn(
        "flex items-center transition-all hover:scale-105",
        sizes[size].spacing,
        className
      )}
      aria-label="StoriVault Home"
    >
      {logoContent}
    </Link>
  );
}
