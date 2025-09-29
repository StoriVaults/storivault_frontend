"use client";

import { Link } from "react-router-dom";
import { cn } from "@/lib/utils";

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
      spacing: "gap-2",
    },
    md: {
      container: "h-10",
      icon: "h-10 w-10",
      text: "text-2xl",
      spacing: "gap-2.5",
    },
    lg: {
      container: "h-14",
      icon: "h-14 w-14",
      text: "text-4xl",
      spacing: "gap-3",
    },
  };

  const logoIcon = (
    <svg
      viewBox="0 0 48 48"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={sizes[size].icon}
    >
      {/* Gradient definitions */}
      <defs>
        <linearGradient id="bookGradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#FF6B35" />
          <stop offset="50%" stopColor="#F77737" />
          <stop offset="100%" stopColor="#FFA500" />
        </linearGradient>
        <linearGradient id="starGradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#FFD700" />
          <stop offset="100%" stopColor="#FFA500" />
        </linearGradient>
        <filter id="glow">
          <feGaussianBlur stdDeviation="3" result="coloredBlur" />
          <feMerge>
            <feMergeNode in="coloredBlur" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>
      </defs>

      {/* Book pages background */}
      <path
        d="M6 8C6 6.89543 6.89543 6 8 6H22V38H8C6.89543 38 6 37.1046 6 36V8Z"
        fill="url(#bookGradient)"
        opacity="0.9"
      />
      <path
        d="M26 6H40C41.1046 6 42 6.89543 42 8V36C42 37.1046 41.1046 38 40 38H26V6Z"
        fill="url(#bookGradient)"
        opacity="0.8"
      />

      {/* Book spine */}
      <rect x="22" y="6" width="4" height="32" fill="#E85D04" opacity="0.9" />

      {/* Pages effect */}
      <path d="M9 10H20V34H9V10Z" fill="white" opacity="0.3" />
      <path d="M28 10H39V34H28V10Z" fill="white" opacity="0.25" />

      {/* Page lines */}
      <line
        x1="11"
        y1="14"
        x2="18"
        y2="14"
        stroke="white"
        strokeWidth="1"
        opacity="0.5"
      />
      <line
        x1="11"
        y1="18"
        x2="18"
        y2="18"
        stroke="white"
        strokeWidth="1"
        opacity="0.5"
      />
      <line
        x1="11"
        y1="22"
        x2="18"
        y2="22"
        stroke="white"
        strokeWidth="1"
        opacity="0.5"
      />
      <line
        x1="30"
        y1="14"
        x2="37"
        y2="14"
        stroke="white"
        strokeWidth="1"
        opacity="0.5"
      />
      <line
        x1="30"
        y1="18"
        x2="37"
        y2="18"
        stroke="white"
        strokeWidth="1"
        opacity="0.5"
      />
      <line
        x1="30"
        y1="22"
        x2="37"
        y2="22"
        stroke="white"
        strokeWidth="1"
        opacity="0.5"
      />

      {/* Central star/sparkle */}
      <path
        d="M24 16 L25.5 20 L29.5 20 L26.5 22.5 L27.5 26.5 L24 24 L20.5 26.5 L21.5 22.5 L18.5 20 L22.5 20 Z"
        fill="url(#starGradient)"
        filter="url(#glow)"
      />

      {/* Small sparkles */}
      <circle cx="12" cy="28" r="1" fill="#FFD700" opacity="0.8" />
      <circle cx="36" cy="28" r="1" fill="#FFD700" opacity="0.8" />
    </svg>
  );

  const logoContent = (
    <>
      {logoIcon}
      {showText && (
        <div className={cn("flex flex-col justify-center", sizes[size].text)}>
          <span
            className="font-display leading-none tracking-tight"
            style={{ fontFamily: "'Crimson Text', serif" }}
          >
            <span
              className={cn(
                "font-bold",
                variant === "light"
                  ? "text-white"
                  : variant === "dark"
                  ? "text-gray-900"
                  : "bg-gradient-to-r from-orange-600 via-orange-500 to-amber-500 bg-clip-text text-transparent"
              )}
            >
              Stori
            </span>
            <span
              className={cn(
                "font-light",
                variant === "light"
                  ? "text-gray-200"
                  : variant === "dark"
                  ? "text-gray-700"
                  : "text-gray-700 dark:text-gray-300"
              )}
            >
              Vault
            </span>
          </span>
          <span
            className={cn(
              "text-[0.4em] tracking-[0.3em] uppercase font-medium mt-0.5",
              variant === "light"
                ? "text-gray-300"
                : variant === "dark"
                ? "text-gray-500"
                : "text-gray-500 dark:text-gray-400"
            )}
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
        "flex items-center transition-all hover:scale-105 hover:drop-shadow-lg",
        sizes[size].spacing,
        className
      )}
      aria-label="StoriVault Home"
    >
      {logoContent}
    </Link>
  );
}
