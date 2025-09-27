'use client';

import { Link, useLocation } from 'react-router-dom';
import { 
  Home, 
  TrendingUp, 
  Compass, 
  Library, 
  Users, 
  MessageCircle, 
  Settings,
  BookOpen
} from 'lucide-react';
import { cn } from '@/lib/utils';
import { useAuthStore } from '@/store/authStore';
import { useUiStore } from '@/store/uiStore';
import { Button } from '@/components/ui/button';
import { ScrollArea } from '@/components/ui/scroll-area';
import { Separator } from '@/components/ui/separator';

const navigation = [
  {
    name: 'Home',
    href: '/',
    icon: Home,
  },
  {
    name: 'Trending',
    href: '/stories?sort=trending',
    icon: TrendingUp,
  },
  {
    name: 'Discover',
    href: '/stories',
    icon: Compass,
  },
];

const authenticatedNavigation = [
  {
    name: 'My Library',
    href: '/library',
    icon: Library,
  },
  {
    name: 'Following',
    href: '/following',
    icon: Users,
  },
  {
    name: 'Messages',
    href: '/messages',
    icon: MessageCircle,
    badge: 3, // Example badge
  },
];

const genres = [
  'Romance',
  'Fantasy',
  'Mystery',
  'Sci-Fi',
  'Horror',
  'Adventure',
  'Drama',
  'Comedy',
  'Thriller',
  'Historical',
];

export function Sidebar() {
  const location = useLocation();
  const pathname = location.pathname;
  const { isAuthenticated } = useAuthStore();
  const { sidebarOpen, setSidebarOpen } = useUiStore();

  return (
    <>
      {/* Mobile overlay */}
      {sidebarOpen && (
        <div 
          className="fixed inset-0 z-40 bg-black/50 md:hidden"
          onClick={() => setSidebarOpen(false)}
        />
      )}
      
      {/* Sidebar */}
      <aside className={cn(
        "fixed top-16 left-0 z-50 h-[calc(100vh-4rem)] w-64 transform bg-background border-r transition-transform duration-300 ease-in-out md:translate-x-0",
        sidebarOpen ? "translate-x-0" : "-translate-x-full"
      )}>
        <ScrollArea className="h-full px-3 py-4">
          <div className="space-y-6">
            {/* Main Navigation */}
            <div>
              <h2 className="mb-2 px-3 text-sm font-semibold text-muted-foreground uppercase tracking-wider">
                Navigate
              </h2>
              <nav className="space-y-1">
                {navigation.map((item) => {
                  const isActive = pathname === item.href;
                  return (
                    <Link
                      key={item.name}
                      to={item.href}
                      onClick={() => setSidebarOpen(false)}
                    >
                      <Button
                        variant={isActive ? "secondary" : "ghost"}
                        className={cn(
                          "w-full justify-start",
                          isActive && "bg-primary/10 text-primary hover:bg-primary/20"
                        )}
                      >
                        <item.icon className="mr-3 h-5 w-5" />
                        {item.name}
                      </Button>
                    </Link>
                  );
                })}
              </nav>
            </div>

            {/* Authenticated Navigation */}
            {isAuthenticated && (
              <>
                <Separator />
                <div>
                  <h2 className="mb-2 px-3 text-sm font-semibold text-muted-foreground uppercase tracking-wider">
                    Personal
                  </h2>
                  <nav className="space-y-1">
                    {authenticatedNavigation.map((item) => {
                      const isActive = pathname === item.href;
                      return (
                        <Link
                          key={item.name}
                          to={item.href}
                          onClick={() => setSidebarOpen(false)}
                        >
                          <Button
                            variant={isActive ? "secondary" : "ghost"}
                            className={cn(
                              "w-full justify-start",
                              isActive && "bg-primary/10 text-primary hover:bg-primary/20"
                            )}
                          >
                            <item.icon className="mr-3 h-5 w-5" />
                            {item.name}
                            {item.badge && (
                              <span className="ml-auto bg-primary text-primary-foreground text-xs rounded-full px-2 py-1">
                                {item.badge}
                              </span>
                            )}
                          </Button>
                        </Link>
                      );
                    })}
                  </nav>
                </div>
              </>
            )}

            {/* Genres */}
            <Separator />
            <div>
              <h2 className="mb-2 px-3 text-sm font-semibold text-muted-foreground uppercase tracking-wider">
                Genres
              </h2>
              <nav className="space-y-1">
                {genres.map((genre) => {
                  const href = `/stories?genre=${encodeURIComponent(genre)}`;
                  const isActive = pathname === href;
                  return (
                    <Link
                      key={genre}
                      to={href}
                      onClick={() => setSidebarOpen(false)}
                    >
                      <Button
                        variant={isActive ? "secondary" : "ghost"}
                        size="sm"
                        className={cn(
                          "w-full justify-start text-sm",
                          isActive && "bg-primary/10 text-primary hover:bg-primary/20"
                        )}
                      >
                        <BookOpen className="mr-3 h-4 w-4" />
                        {genre}
                      </Button>
                    </Link>
                  );
                })}
              </nav>
            </div>

            {/* Settings */}
            {isAuthenticated && (
              <>
                <Separator />
                <div>
                  <Link to="/settings" onClick={() => setSidebarOpen(false)}>
                    <Button
                      variant={pathname === '/settings' ? "secondary" : "ghost"}
                      className={cn(
                        "w-full justify-start",
                        pathname === '/settings' && "bg-primary/10 text-primary hover:bg-primary/20"
                      )}
                    >
                      <Settings className="mr-3 h-5 w-5" />
                      Settings
                    </Button>
                  </Link>
                </div>
              </>
            )}
          </div>
        </ScrollArea>
      </aside>
    </>
  );
}