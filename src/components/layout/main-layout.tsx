'use client';

import { useEffect } from 'react';
import { Header } from './header';
import { Sidebar } from './sidebar';
import { useAuthStore } from '@/store/authStore';
import { cn } from '@/lib/utils';

interface MainLayoutProps {
  children: React.ReactNode;
  className?: string;
}

export function MainLayout({ children, className }: MainLayoutProps) {
  const { isAuthenticated, fetchMe } = useAuthStore();

  // Fetch user data on mount if authenticated
  useEffect(() => {
    if (isAuthenticated) {
      fetchMe();
    }
  }, [isAuthenticated, fetchMe]);

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <div className="flex">
        <Sidebar />
        <main className={cn(
          "flex-1 md:ml-64 transition-all duration-300",
          className
        )}>
          {children}
        </main>
      </div>
    </div>
  );
}