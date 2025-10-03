import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { ToastProvider } from "@/components/ui/toast-provider";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { useAuthStore } from "@/store/authStore";
import { useEffect } from "react";

// Pages
import { HomePage } from "./pages/HomePage";
import { LoginPage } from "./pages/auth/LoginPage";
import { SignupPage } from "./pages/auth/SignupPage";
import { StoriesPage } from "./pages/StoriesPage";
import { FeedPage } from "./pages/FeedPage";
import { ProfilePage } from "./pages/ProfilePage";
import { CreateStoryPage } from "./pages/CreateStoryPage";
import { StoryDetailPage } from "./pages/StoryDetailPage";
import { StoryReaderPage } from "./pages/StoryReaderPage";
import { EditStoryPage } from "./pages/EditStoryPage";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      retry: 1,
      refetchOnWindowFocus: false,
      staleTime: 5 * 60 * 1000, // 5 minutes
    },
    mutations: {
      retry: 1,
    },
  },
});

// Protected Route Component
function ProtectedRoute({ children }: { children: React.ReactNode }) {
  const { isAuthenticated } = useAuthStore();

  if (!isAuthenticated) {
    return <Navigate to="/auth/login" replace />;
  }

  return <>{children}</>;
}

// Public-only Route (redirects to home if authenticated)
function PublicOnlyRoute({ children }: { children: React.ReactNode }) {
  const { isAuthenticated } = useAuthStore();

  if (isAuthenticated) {
    return <Navigate to="/feed" replace />;
  }

  return <>{children}</>;
}

const App = () => {
  const { isAuthenticated, fetchMe } = useAuthStore();

  // Check authentication status on app load
  useEffect(() => {
    if (isAuthenticated) {
      fetchMe();
    }
  }, []);

  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <ToastProvider />
        <BrowserRouter>
          <Routes>
            {/* Home - Conditional based on auth */}
            <Route
              path="/"
              element={
                isAuthenticated ? <Navigate to="/feed" replace /> : <HomePage />
              }
            />

            {/* Auth Routes - Only accessible when not authenticated */}
            <Route
              path="/auth/login"
              element={
                <PublicOnlyRoute>
                  <LoginPage />
                </PublicOnlyRoute>
              }
            />
            <Route
              path="/auth/signup"
              element={
                <PublicOnlyRoute>
                  <SignupPage />
                </PublicOnlyRoute>
              }
            />

            {/* Public Routes - Accessible by everyone */}
            <Route path="/stories" element={<StoriesPage />} />
            <Route path="/stories/search" element={<StoriesPage />} />
            <Route path="/stories/:id" element={<StoryDetailPage />} />
            <Route path="/stories/:id/read" element={<StoryReaderPage />} />

            {/* Protected Routes - Require authentication */}
            <Route
              path="/feed"
              element={
                <ProtectedRoute>
                  <FeedPage />
                </ProtectedRoute>
              }
            />
            <Route
              path="/stories/create"
              element={
                <ProtectedRoute>
                  <CreateStoryPage />
                </ProtectedRoute>
              }
            />
            <Route
              path="/stories/:id/edit"
              element={
                <ProtectedRoute>
                  <EditStoryPage />
                </ProtectedRoute>
              }
            />
            <Route
              path="/my-stories"
              element={
                <ProtectedRoute>
                  <div>My Stories Page (To be implemented)</div>
                </ProtectedRoute>
              }
            />
            <Route
              path="/library"
              element={
                <ProtectedRoute>
                  <div>Library Page (To be implemented)</div>
                </ProtectedRoute>
              }
            />
            <Route
              path="/settings"
              element={
                <ProtectedRoute>
                  <div>Settings Page (To be implemented)</div>
                </ProtectedRoute>
              }
            />
            <Route
              path="/settings/profile"
              element={
                <ProtectedRoute>
                  <div>Profile Settings Page (To be implemented)</div>
                </ProtectedRoute>
              }
            />

            {/* Profile Routes - Can be viewed by anyone but edit requires auth */}
            <Route path="/profile/:username" element={<ProfilePage />} />
            <Route path="/users/:username" element={<ProfilePage />} />

            {/* Static Pages */}
            <Route
              path="/about"
              element={<div>About Page (To be implemented)</div>}
            />
            <Route
              path="/privacy"
              element={<div>Privacy Policy (To be implemented)</div>}
            />
            <Route
              path="/terms"
              element={<div>Terms of Service (To be implemented)</div>}
            />
            <Route
              path="/contact"
              element={<div>Contact Page (To be implemented)</div>}
            />

            {/* 404 Catch-all - MUST BE LAST */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </TooltipProvider>
    </QueryClientProvider>
  );
};

export default App;
