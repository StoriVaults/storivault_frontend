"use client";

import { useEffect } from "react";
import { Header } from "./header";
import { Footer } from "./footer";
import { useAuthStore } from "@/store/authStore";
import { cn } from "@/lib/utils";

interface MainLayoutProps {
  children: React.ReactNode;
  className?: string;
  showFooter?: boolean;
  scale?: number;
}

export function MainLayout({
  children,
  className,
  showFooter = true,
  scale = 1,
}: MainLayoutProps) {
  const { isAuthenticated, fetchMe } = useAuthStore();

  // Fetch user data on mount if authenticated
  useEffect(() => {
    if (isAuthenticated) {
      fetchMe();
    }
  }, [isAuthenticated, fetchMe]);

  const layoutStyle =
    scale !== 1 ? { zoom: scale } : undefined;

  return (
    <div className="min-h-screen bg-background flex flex-col" style={layoutStyle}>
      <Header />
      <main className={cn("flex-1 flex flex-col", className)}>
        <div className="flex-1">{children}</div>
        {showFooter && !isAuthenticated && <Footer />}
      </main>
    </div>
  );
}
