// src/components/ui/logo.tsx
"use client";

import { Link } from "react-router-dom";
import { cn } from "@/lib/utils";

interface LogoProps {
  className?: string;
  showText?: boolean;
  size?: "sm" | "md" | "lg";
  asLink?: boolean;
  variant?: "default" | "light" | "dark";
  vaultClassName?: string;
  iconClassName?: string;
}

export function Logo({
  className,
  showText = true,
  size = "md",
  asLink = true,
  variant = "default",
  vaultClassName,
  iconClassName,
}: LogoProps) {
  const sizes = {
    sm: {
      container: "h-8",
      icon: "h-11 w-11",
      text: "text-xl",
      tagline: "text-[10px]",
      spacing: "gap-2",
      textGap: "gap-0.5",
    },
    md: {
      container: "h-10",
      icon: "h-13 w-13",
      text: "text-2xl",
      tagline: "text-xs",
      spacing: "gap-2.5",
      textGap: "gap-0.5",
    },
    lg: {
      container: "h-14",
      icon: "h-20 w-20",
      text: "text-4xl",
      tagline: "text-sm",
      spacing: "gap-3",
      textGap: "gap-1",
    },
  };

  const logoIcon = (
    <img
      src="/logo.png"
      alt="StoriVault logo"
      className={cn("object-contain", sizes[size].icon, iconClassName)}
      loading="eager"
      decoding="async"
    />
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
              style={{ fontFamily: "'Cinzel', serif" }}
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
                ,
                vaultClassName
              )}
              style={{ fontFamily: "'Cinzel', serif" }}
            >
              Vault
            </span>
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
