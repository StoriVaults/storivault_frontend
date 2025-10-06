# 📖 Frontend Project Documentation

Generated from: `.`

---

## 📚 Table of Contents

### 📁 Root Files
- [eslint.config.js](#eslintconfigjs)
- [package.json](#packagejson)
- [postcss.config.js](#postcssconfigjs)
- [tailwind.config.ts](#tailwindconfigts)
- [tsconfig.app.json](#tsconfigappjson)
- [tsconfig.json](#tsconfigjson)
- [tsconfig.node.json](#tsconfignodejson)
- [vercel.json](#verceljson)
- [vite.config.ts](#viteconfigts)

### 📁 src
- [App.css](#src-Appcss)
- [App.tsx](#src-Apptsx)
- [index.css](#src-indexcss)
- [main.tsx](#src-maintsx)
- [vite-env.d.ts](#src-vite-envdts)

### 📁 src\apis
- [auth.ts](#src-apis-authts)
- [chapters.ts](#src-apis-chaptersts)
- [client.ts](#src-apis-clientts)
- [index.ts](#src-apis-indexts)
- [stories.ts](#src-apis-storiests)
- [uploads.ts](#src-apis-uploadsts)
- [users.ts](#src-apis-usersts)
- [votes.ts](#src-apis-votests)

### 📁 src\components\layout
- [footer.tsx](#src-components-layout-footertsx)
- [header.tsx](#src-components-layout-headertsx)
- [main-layout.tsx](#src-components-layout-main-layouttsx)

### 📁 src\components\ui
- [auth-skeleton.tsx](#src-components-ui-auth-skeletontsx)
- [create-story-skeleton.tsx](#src-components-ui-create-story-skeletontsx)
- [edit-story-skeleton.tsx](#src-components-ui-edit-story-skeletontsx)
- [feed-skeleton.tsx](#src-components-ui-feed-skeletontsx)
- [file-dropzone.tsx](#src-components-ui-file-dropzonetsx)
- [image-with-fallback.tsx](#src-components-ui-image-with-fallbacktsx)
- [loading-spinner.tsx](#src-components-ui-loading-spinnertsx)
- [logo.tsx](#src-components-ui-logotsx)
- [profile-skeleton.tsx](#src-components-ui-profile-skeletontsx)
- [reader-skeleton.tsx](#src-components-ui-reader-skeletontsx)
- [story-card-skeleton.tsx](#src-components-ui-story-card-skeletontsx)
- [story-card.tsx](#src-components-ui-story-cardtsx)
- [story-detail-skeleton.tsx](#src-components-ui-story-detail-skeletontsx)
- [toast-provider.tsx](#src-components-ui-toast-providertsx)
- [toast.tsx](#src-components-ui-toasttsx)

### 📁 src\controllers
- [authController.ts](#src-controllers-authControllerts)
- [index.ts](#src-controllers-indexts)
- [storyController.ts](#src-controllers-storyControllerts)
- [userController.ts](#src-controllers-userControllerts)

### 📁 src\helper
- [constants.ts](#src-helper-constantsts)
- [formatting.ts](#src-helper-formattingts)
- [index.ts](#src-helper-indexts)
- [validation.ts](#src-helper-validationts)

### 📁 src\hooks
- [use-mobile.tsx](#src-hooks-use-mobiletsx)

### 📁 src\lib
- [utils.ts](#src-lib-utilsts)

### 📁 src\pages
- [CreateStoryPage.tsx](#src-pages-CreateStoryPagetsx)
- [EditStoryPage.tsx](#src-pages-EditStoryPagetsx)
- [FeedPage.tsx](#src-pages-FeedPagetsx)
- [HomePage.tsx](#src-pages-HomePagetsx)
- [Index.tsx](#src-pages-Indextsx)
- [NotFound.tsx](#src-pages-NotFoundtsx)
- [ProfilePage.tsx](#src-pages-ProfilePagetsx)
- [StoriesPage.tsx](#src-pages-StoriesPagetsx)
- [StoryDetailPage.tsx](#src-pages-StoryDetailPagetsx)
- [StoryReaderPage.tsx](#src-pages-StoryReaderPagetsx)

### 📁 src\pages\auth
- [LoginPage.tsx](#src-pages-auth-LoginPagetsx)
- [SignupPage.tsx](#src-pages-auth-SignupPagetsx)

### 📁 src\store
- [authStore.ts](#src-store-authStorets)
- [uiStore.ts](#src-store-uiStorets)

### 📁 src\types
- [api.ts](#src-types-apits)
- [index.ts](#src-types-indexts)

### 📁 src\utils
- [favicon-generator.ts](#src-utils-favicon-generatorts)

---

## 📝 Source Code

### 📁 Root Files

#### 📄 eslint.config.js
<a name='eslintconfigjs'></a>

**Path:** `eslint.config.js`

```javascript
import js from "@eslint/js";
import globals from "globals";
import reactHooks from "eslint-plugin-react-hooks";
import reactRefresh from "eslint-plugin-react-refresh";
import tseslint from "typescript-eslint";

export default tseslint.config(
  { ignores: ["dist"] },
  {
    extends: [js.configs.recommended, ...tseslint.configs.recommended],
    files: ["**/*.{ts,tsx}"],
    languageOptions: {
      ecmaVersion: 2020,
      globals: globals.browser,
    },
    plugins: {
      "react-hooks": reactHooks,
      "react-refresh": reactRefresh,
    },
    rules: {
      ...reactHooks.configs.recommended.rules,
      "react-refresh/only-export-components": ["warn", { allowConstantExport: true }],
      "@typescript-eslint/no-unused-vars": "off",
    },
  },
);
```

---

#### 📄 package.json
<a name='packagejson'></a>

**Path:** `package.json`

```json
{
  "name": "storivault-frontend",
  "private": true,
  "version": "1.0.0",
  "type": "module",
  "scripts": {
    "dev": "vite",
    "build": "tsc && vite build",
    "build:dev": "vite build --mode development",
    "lint": "eslint .",
    "preview": "vite preview",
    "typecheck": "tsc --noEmit"
  },
  "dependencies": {
    "@hookform/resolvers": "^3.10.0",
    "@radix-ui/react-accordion": "^1.2.11",
    "@radix-ui/react-alert-dialog": "^1.1.14",
    "@radix-ui/react-aspect-ratio": "^1.1.7",
    "@radix-ui/react-avatar": "^1.1.10",
    "@radix-ui/react-checkbox": "^1.3.2",
    "@radix-ui/react-collapsible": "^1.1.11",
    "@radix-ui/react-context-menu": "^2.2.15",
    "@radix-ui/react-dialog": "^1.1.14",
    "@radix-ui/react-dropdown-menu": "^2.1.15",
    "@radix-ui/react-hover-card": "^1.1.14",
    "@radix-ui/react-label": "^2.1.7",
    "@radix-ui/react-menubar": "^1.1.15",
    "@radix-ui/react-navigation-menu": "^1.2.13",
    "@radix-ui/react-popover": "^1.1.14",
    "@radix-ui/react-progress": "^1.1.7",
    "@radix-ui/react-radio-group": "^1.3.7",
    "@radix-ui/react-scroll-area": "^1.2.9",
    "@radix-ui/react-select": "^2.2.5",
    "@radix-ui/react-separator": "^1.1.7",
    "@radix-ui/react-slider": "^1.3.5",
    "@radix-ui/react-slot": "^1.2.3",
    "@radix-ui/react-switch": "^1.2.5",
    "@radix-ui/react-tabs": "^1.1.12",
    "@radix-ui/react-toast": "^1.2.14",
    "@radix-ui/react-toggle": "^1.1.9",
    "@radix-ui/react-toggle-group": "^1.1.10",
    "@radix-ui/react-tooltip": "^1.2.7",
    "@tanstack/react-query": "^5.90.2",
    "axios": "^1.7.9",
    "class-variance-authority": "^0.7.1",
    "clsx": "^2.1.1",
    "cmdk": "^1.1.1",
    "date-fns": "^3.6.0",
    "embla-carousel-react": "^8.6.0",
    "input-otp": "^1.4.2",
    "lucide-react": "^0.462.0",
    "next-themes": "^0.4.6",
    "react": "^18.3.1",
    "react-day-picker": "^8.10.1",
    "react-dom": "^18.3.1",
    "react-easy-crop": "^5.5.3",
    "react-hook-form": "^7.61.1",
    "react-resizable-panels": "^2.1.9",
    "react-router-dom": "^6.30.1",
    "recharts": "^2.15.4",
    "sonner": "^1.7.4",
    "tailwind-merge": "^2.6.0",
    "tailwindcss-animate": "^1.0.7",
    "vaul": "^0.9.9",
    "zod": "^3.25.76",
    "zustand": "^5.0.8"
  },
  "devDependencies": {
    "@eslint/js": "^9.32.0",
    "@tailwindcss/typography": "^0.5.16",
    "@types/node": "^22.16.5",
    "@types/react": "^18.3.23",
    "@types/react-dom": "^18.3.7",
    "@vitejs/plugin-react-swc": "^3.11.0",
    "autoprefixer": "^10.4.21",
    "eslint": "^9.32.0",
    "eslint-plugin-react-hooks": "^5.2.0",
    "eslint-plugin-react-refresh": "^0.4.20",
    "globals": "^15.15.0",
    "lovable-tagger": "^1.1.10",
    "postcss": "^8.5.6",
    "tailwindcss": "^3.4.17",
    "typescript": "^5.8.3",
    "typescript-eslint": "^8.38.0",
    "vite": "^5.4.19"
  },
  "engines": {
    "node": ">=18.0.0",
    "npm": ">=9.0.0"
  }
}
```

---

#### 📄 postcss.config.js
<a name='postcssconfigjs'></a>

**Path:** `postcss.config.js`

```javascript
export default {
  plugins: {
    tailwindcss: {},
    autoprefixer: {},
  },
};
```

---

#### 📄 tailwind.config.ts
<a name='tailwindconfigts'></a>

**Path:** `tailwind.config.ts`

```typescript
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      animation: {
        shimmer: "shimmer 2s cubic-bezier(0.4, 0, 0.6, 1) infinite",
        // ... existing animations
      },
      keyframes: {
        shimmer: {
          "0%, 100%": {
            opacity: "1",
          },
          "50%": {
            opacity: "0.5",
          },
        },
        // ... existing keyframes
      },
    },
  },
}
```

---

#### 📄 tsconfig.app.json
<a name='tsconfigappjson'></a>

**Path:** `tsconfig.app.json`

```json
{
  "compilerOptions": {
    "target": "ES2020",
    "useDefineForClassFields": true,
    "lib": ["ES2020", "DOM", "DOM.Iterable"],
    "module": "ESNext",
    "skipLibCheck": true,

    /* Bundler mode */
    "moduleResolution": "bundler",
    "allowImportingTsExtensions": true,
    "isolatedModules": true,
    "moduleDetection": "force",
    "noEmit": true,
    "jsx": "react-jsx",

    /* Linting */
    "strict": false,
    "noUnusedLocals": false,
    "noUnusedParameters": false,
    "noImplicitAny": false,
    "noFallthroughCasesInSwitch": false,

    "baseUrl": ".",
    "paths": {
      "@/*": ["./src/*"]
    }
  },
  "include": ["src"]
}
```

---

#### 📄 tsconfig.json
<a name='tsconfigjson'></a>

**Path:** `tsconfig.json`

```json
{
  "files": [],
  "references": [{ "path": "./tsconfig.app.json" }, { "path": "./tsconfig.node.json" }],
  "compilerOptions": {
    "baseUrl": ".",
    "paths": {
      "@/*": ["./src/*"]
    },
    "noImplicitAny": false,
    "noUnusedParameters": false,
    "skipLibCheck": true,
    "allowJs": true,
    "noUnusedLocals": false,
    "strictNullChecks": false
  }
}
```

---

#### 📄 tsconfig.node.json
<a name='tsconfignodejson'></a>

**Path:** `tsconfig.node.json`

```json
{
  "compilerOptions": {
    "target": "ES2022",
    "lib": ["ES2023"],
    "module": "ESNext",
    "skipLibCheck": true,

    /* Bundler mode */
    "moduleResolution": "bundler",
    "allowImportingTsExtensions": true,
    "isolatedModules": true,
    "moduleDetection": "force",
    "noEmit": true,

    /* Linting */
    "strict": true,
    "noUnusedLocals": false,
    "noUnusedParameters": false,
    "noFallthroughCasesInSwitch": true
  },
  "include": ["vite.config.ts"]
}
```

---

#### 📄 vercel.json
<a name='verceljson'></a>

**Path:** `vercel.json`

```json
{
  "rewrites": [
    {
      "source": "/(.*)",
      "destination": "/index.html"
    }
  ],
  "headers": [
    {
      "source": "/assets/(.*)",
      "headers": [
        {
          "key": "Cache-Control",
          "value": "public, max-age=31536000, immutable"
        }
      ]
    },
    {
      "source": "/(.*)",
      "headers": [
        {
          "key": "X-Content-Type-Options",
          "value": "nosniff"
        },
        {
          "key": "X-Frame-Options",
          "value": "DENY"
        },
        {
          "key": "X-XSS-Protection",
          "value": "1; mode=block"
        }
      ]
    }
  ],
  "buildCommand": "npm run build",
  "outputDirectory": "dist",
  "framework": null
}
```

---

#### 📄 vite.config.ts
<a name='viteconfigts'></a>

**Path:** `vite.config.ts`

```typescript
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";
import { componentTagger } from "lovable-tagger";

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => ({
  server: {
    host: "::",
    port: 8080,
  },
  plugins: [react(), mode === "development" && componentTagger()].filter(Boolean),
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  build: {
    outDir: "dist",
    sourcemap: false,
    rollupOptions: {
      output: {
        manualChunks: {
          vendor: ["react", "react-dom", "react-router-dom"],
          ui: ["@radix-ui/react-dialog", "@radix-ui/react-dropdown-menu"],
        },
      },
    },
  },
  // Add base URL if your app is not served from root
  base: "/",
}));
```

---

### 📁 src

#### 📄 src\App.css
<a name='src-Appcss'></a>

**Path:** `src\App.css`

```css
#root {
  max-width: 1280px;
  margin: 0 auto;
  padding: 2rem;
  text-align: center;
}

.logo {
  height: 6em;
  padding: 1.5em;
  will-change: filter;
  transition: filter 300ms;
}
.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}
.logo.react:hover {
  filter: drop-shadow(0 0 2em #61dafbaa);
}

@keyframes logo-spin {
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
}

@media (prefers-reduced-motion: no-preference) {
  a:nth-of-type(2) .logo {
    animation: logo-spin infinite 20s linear;
  }
}

.card {
  padding: 2em;
}

.read-the-docs {
  color: #888;
}
```

---

#### 📄 src\App.tsx
<a name='src-Apptsx'></a>

**Path:** `src\App.tsx`

```tsx
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
```

---

#### 📄 src\index.css
<a name='src-indexcss'></a>

**Path:** `src\index.css`

```css
@tailwind base;
@tailwind components;
@tailwind utilities;

/* StoriVault Design System - Wattpad-inspired color palette and design tokens */

@layer base {
  :root {
    /* Core Wattpad-inspired Orange Palette */
    --background: 0 0% 100%;
    --foreground: 220 13% 18%;

    --card: 0 0% 100%;
    --card-foreground: 220 13% 18%;

    --popover: 0 0% 100%;
    --popover-foreground: 220 13% 18%;

    /* Primary - Wattpad Orange */
    --primary: 16 100% 50%;
    --primary-foreground: 0 0% 100%;
    --primary-hover: 16 100% 45%;
    --primary-light: 16 100% 95%;

    /* Secondary - Warm Grays */
    --secondary: 210 16% 96%;
    --secondary-foreground: 220 13% 18%;
    --secondary-hover: 210 16% 92%;

    /* Muted tones */
    --muted: 210 14% 95%;
    --muted-foreground: 220 9% 46%;

    /* Accent - Complementary Blue */
    --accent: 210 100% 50%;
    --accent-foreground: 0 0% 100%;
    --accent-hover: 210 100% 45%;

    /* Success - Green */
    --success: 142 76% 36%;
    --success-foreground: 0 0% 100%;
    --success-light: 142 76% 95%;

    /* Warning - Amber */
    --warning: 43 96% 56%;
    --warning-foreground: 0 0% 100%;
    --warning-light: 43 96% 95%;

    /* Destructive - Red */
    --destructive: 0 84% 60%;
    --destructive-foreground: 0 0% 100%;
    --destructive-light: 0 84% 95%;

    /* Borders and inputs */
    --border: 220 13% 91%;
    --input: 220 13% 91%;
    --ring: 16 100% 50%;

    /* Reading-specific colors */
    --reading-bg: 43 46% 97%;
    --reading-text: 220 13% 18%;
    
    /* Gradients */
    --gradient-primary: linear-gradient(135deg, hsl(16 100% 50%), hsl(16 100% 45%));
    --gradient-hero: linear-gradient(135deg, hsl(16 100% 50%), hsl(210 100% 50%));
    --gradient-card: linear-gradient(135deg, hsl(0 0% 100%), hsl(210 16% 98%));

    /* Shadows */
    --shadow-soft: 0 2px 8px -2px hsl(220 13% 18% / 0.06);
    --shadow-medium: 0 4px 16px -4px hsl(220 13% 18% / 0.1);
    --shadow-strong: 0 8px 32px -8px hsl(220 13% 18% / 0.15);
    --shadow-primary: 0 4px 16px -4px hsl(16 100% 50% / 0.3);

    --radius: 0.75rem;
  }

  .dark {
    --background: 220 13% 6%;
    --foreground: 210 20% 90%;

    --card: 220 13% 8%;
    --card-foreground: 210 20% 90%;

    --popover: 220 13% 8%;
    --popover-foreground: 210 20% 90%;

    --primary: 16 100% 55%;
    --primary-foreground: 0 0% 100%;
    --primary-hover: 16 100% 60%;
    --primary-light: 16 100% 15%;

    --secondary: 220 13% 12%;
    --secondary-foreground: 210 20% 90%;
    --secondary-hover: 220 13% 16%;

    --muted: 220 13% 12%;
    --muted-foreground: 220 9% 60%;

    --accent: 210 100% 60%;
    --accent-foreground: 0 0% 100%;
    --accent-hover: 210 100% 65%;

    --success: 142 76% 46%;
    --success-foreground: 0 0% 100%;
    --success-light: 142 76% 15%;

    --warning: 43 96% 66%;
    --warning-foreground: 0 0% 100%;
    --warning-light: 43 96% 15%;

    --destructive: 0 84% 70%;
    --destructive-foreground: 0 0% 100%;
    --destructive-light: 0 84% 15%;

    --border: 220 13% 16%;
    --input: 220 13% 16%;
    --ring: 16 100% 55%;

    --reading-bg: 220 13% 8%;
    --reading-text: 210 20% 90%;

    --gradient-primary: linear-gradient(135deg, hsl(16 100% 55%), hsl(16 100% 50%));
    --gradient-hero: linear-gradient(135deg, hsl(16 100% 55%), hsl(210 100% 60%));
    --gradient-card: linear-gradient(135deg, hsl(220 13% 8%), hsl(220 13% 10%));

    --shadow-soft: 0 2px 8px -2px hsl(0 0% 0% / 0.3);
    --shadow-medium: 0 4px 16px -4px hsl(0 0% 0% / 0.4);
    --shadow-strong: 0 8px 32px -8px hsl(0 0% 0% / 0.5);
    --shadow-primary: 0 4px 16px -4px hsl(16 100% 55% / 0.4);
  }

  * {
    border-color: hsl(var(--border));
  }

  body {
    background-color: hsl(var(--background));
    color: hsl(var(--foreground));
  }
}

/* React Easy Crop styles */
.reactEasyCrop_Container {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
}

.reactEasyCrop_Image,
.reactEasyCrop_Video {
  will-change: transform;
}

.reactEasyCrop_CropArea {
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  border: 1px solid rgba(255, 255, 255, 0.5);
  box-sizing: border-box;
  box-shadow: 0 0 0 9999em rgba(0, 0, 0, 0.5);
  overflow: hidden;
}
```

---

#### 📄 src\main.tsx
<a name='src-maintsx'></a>

**Path:** `src\main.tsx`

```tsx
import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import "./index.css";

// Set document title
document.title = "StoriVault - Your Gateway to Infinite Stories";

createRoot(document.getElementById("root")!).render(<App />);
```

---

#### 📄 src\vite-env.d.ts
<a name='src-vite-envdts'></a>

**Path:** `src\vite-env.d.ts`

```typescript
/// <reference types="vite/client" />
```

---

### 📁 src\apis

#### 📄 src\apis\auth.ts
<a name='src-apis-authts'></a>

**Path:** `src\apis\auth.ts`

```typescript
import { apiClient, createFormData } from './client';
import { TokenResponse, User, SignupRequest } from '@/types';

export const authApi = {
  // Login with email/password
  login: async (email: string, password: string): Promise<TokenResponse> => {
    const formData = createFormData({
      username: email, // Backend expects 'username' field for email
      password: password
    });

    const response = await apiClient.post<TokenResponse>('/auth/token', formData, {
      headers: {
        'Content-Type': 'multipart/form-data',
      },
    });

    return response.data;
  },

  // Sign up new user
  signup: async (username: string, email: string, password: string): Promise<User> => {
    const request: SignupRequest = {
      username,
      email,
      password
    };

    const response = await apiClient.post<User>('/auth/signup', request);
    return response.data;
  },

  // Get current user profile
  getMe: async (token?: string): Promise<User> => {
    const headers = token ? { Authorization: `Bearer ${token}` } : {};
    
    const response = await apiClient.get<User>('/users/me', { headers });
    return response.data;
  }
};
```

---

#### 📄 src\apis\chapters.ts
<a name='src-apis-chaptersts'></a>

**Path:** `src\apis\chapters.ts`

```typescript
import { apiClient } from './client';
import { Chapter, CreateChapterRequest, UpdateChapterRequest } from '@/types/api';

export const chaptersApi = {
  // Get chapters by story ID
  getChaptersByStory: async (storyId: string, publishedOnly: boolean = true): Promise<Chapter[]> => {
    const response = await apiClient.get(`/chapters/by-story/${storyId}`, {
      params: { published_only: publishedOnly }
    });
    return response.data;
  },

  // Get a single chapter
  getChapter: async (chapterId: string): Promise<Chapter> => {
    const response = await apiClient.get(`/chapters/${chapterId}`);
    return response.data;
  },

  // Create a new chapter (requires auth)
  createChapter: async (data: CreateChapterRequest): Promise<Chapter> => {
    const response = await apiClient.post('/chapters', data);
    return response.data;
  },

  // Update a chapter (requires auth)
  updateChapter: async (chapterId: string, data: UpdateChapterRequest): Promise<Chapter> => {
    const response = await apiClient.patch(`/chapters/${chapterId}`, data);
    return response.data;
  },

  // Delete a chapter (requires auth)
  deleteChapter: async (chapterId: string): Promise<void> => {
    await apiClient.delete(`/chapters/${chapterId}`);
  },

  // Set read progress for a chapter
  setReadProgress: async (chapterId: string, storyId: string): Promise<void> => {
    await apiClient.post(`/chapters/${chapterId}/progress`, null, {
      params: { story_id: storyId }
    });
  }
};
```

---

#### 📄 src\apis\client.ts
<a name='src-apis-clientts'></a>

**Path:** `src\apis\client.ts`

```typescript
import axios, { AxiosInstance, AxiosError, AxiosResponse } from 'axios';
import { ApiEnvelope, ApiError } from '@/types';

// Create axios instance
export const apiClient: AxiosInstance = axios.create({
  baseURL: 'https://usman678zafar-storivault-backend.hf.space',
  timeout: 30000,
  headers: {
    'Content-Type': 'application/json',
  },
});

// Request interceptor to add auth token
apiClient.interceptors.request.use(
  (config) => {
    // Get token from auth store
    const authStorage = localStorage.getItem('auth-storage');
    if (authStorage) {
      try {
        const { state } = JSON.parse(authStorage);
        if (state?.accessToken) {
          config.headers.Authorization = `Bearer ${state.accessToken}`;
        }
      } catch (error) {
        console.warn('Failed to parse auth storage:', error);
      }
    }
    
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

// Response interceptor to handle envelope unwrapping and errors
apiClient.interceptors.response.use(
  (response: AxiosResponse) => {
    // Handle /auth/token endpoint (doesn't use envelope)
    if (response.config.url?.includes('/auth/token')) {
      return response;
    }
    
    // Unwrap envelope for other endpoints
    const envelope = response.data as ApiEnvelope;
    
    if (envelope.success) {
      return { ...response, data: envelope.data };
    } else {
      // Convert envelope error to ApiError
      const apiError: ApiError = new Error(envelope.message || 'API Error') as ApiError;
      apiError.status = response.status;
      apiError.details = envelope.error?.details;
      throw apiError;
    }
  },
  (error: AxiosError) => {
    // Handle network errors and HTTP error responses
    const apiError: ApiError = new Error() as ApiError;

    if (error.response) {
      // Server responded with error status
      const data = error.response.data as any;

      // Log full error response for debugging
      console.error('API Error Response:', {
        status: error.response.status,
        data: error.response.data,
        url: error.config?.url,
        method: error.config?.method,
      });

      if (data && typeof data === 'object') {
        if (data.success === false) {
          // Envelope error
          apiError.message = data.message || 'API Error';
          apiError.details = data.error?.details;
        } else if (data.detail) {
          // FastAPI validation error
          apiError.message = Array.isArray(data.detail)
            ? data.detail.map((d: any) => d.msg).join(', ')
            : data.detail;
        } else {
          apiError.message = error.message || `HTTP ${error.response.status} Error`;
        }
      } else {
        apiError.message = error.message || `HTTP ${error.response.status} Error`;
      }

      apiError.status = error.response.status;
      
      // Handle 401 errors - logout user
      if (error.response.status === 401) {
        // Clear auth storage
        localStorage.removeItem('auth-storage');
        
        // Redirect to login if not already there
        if (typeof window !== 'undefined' && !window.location.pathname.includes('/auth')) {
          window.location.href = '/auth/login';
        }
      }
    } else if (error.request) {
      // Network error
      apiError.message = 'Network error. Please check your connection.';
    } else {
      // Other error
      apiError.message = error.message || 'Unknown error occurred';
    }
    
    return Promise.reject(apiError);
  }
);

// Helper function to create multipart form data
export const createFormData = (data: Record<string, any>): FormData => {
  const formData = new FormData();
  
  for (const [key, value] of Object.entries(data)) {
    if (value !== undefined && value !== null) {
      if (value instanceof File) {
        formData.append(key, value);
      } else if (Array.isArray(value)) {
        // Handle arrays (e.g., tags)
        formData.append(key, value.join(','));
      } else {
        formData.append(key, String(value));
      }
    }
  }
  
  return formData;
};

export default apiClient;
```

---

#### 📄 src\apis\index.ts
<a name='src-apis-indexts'></a>

**Path:** `src\apis\index.ts`

```typescript
export * from './client';
export * from './auth';
export * from './users';
export * from './stories';
export * from './chapters';
export * from './uploads';
export * from './votes';
```

---

#### 📄 src\apis\stories.ts
<a name='src-apis-storiests'></a>

**Path:** `src\apis\stories.ts`

```typescript
import { apiClient, createFormData } from './client';
import { Story, CreateStoryRequest, UpdateStoryRequest, StoriesQuery, SearchQuery, PaginatedResponse } from '@/types';

export const storiesApi = {
  // Create story with multipart form (including cover upload)
  createStoryMultipart: async (data: {
    title: string;
    description?: string;
    genre: string;
    tags?: string;
    visibility?: 'public' | 'private';
    cover?: File;
  }): Promise<Story> => {
    const formData = createFormData(data);
    
    const response = await apiClient.post<Story>('/stories', formData, {
      headers: {
        'Content-Type': 'multipart/form-data',
      },
    });
    
    return response.data;
  },

  // Create story with JSON
  createStory: async (data: CreateStoryRequest): Promise<Story> => {
    const response = await apiClient.post<Story>('/stories/json', data);
    return response.data;
  },

  // Update story cover
  updateStoryCover: async (storyId: string, cover: File): Promise<Story> => {
    const formData = createFormData({ cover });
    
    const response = await apiClient.patch<Story>(`/stories/${storyId}/cover`, formData, {
      headers: {
        'Content-Type': 'multipart/form-data',
      },
    });
    
    return response.data;
  },

  // Get stories with filters and pagination
  getStories: async (query: StoriesQuery = {}): Promise<PaginatedResponse<Story>> => {
    const response = await apiClient.get<PaginatedResponse<Story>>('/stories', {
      params: query
    });
    return response.data;
  },

  // Search stories
  searchStories: async (query: SearchQuery): Promise<PaginatedResponse<Story>> => {
    const response = await apiClient.get<PaginatedResponse<Story>>('/stories/search', {
      params: query
    });
    return response.data;
  },

  // Get story by ID
  getStory: async (storyId: string): Promise<Story> => {
    const response = await apiClient.get<Story>(`/stories/${storyId}`);
    return response.data;
  },

  // Update story
  updateStory: async (storyId: string, data: UpdateStoryRequest): Promise<Story> => {
    const response = await apiClient.patch<Story>(`/stories/${storyId}`, data);
    return response.data;
  },

  // Delete story
  deleteStory: async (storyId: string): Promise<void> => {
    await apiClient.delete(`/stories/${storyId}`);
  }
};
```

---

#### 📄 src\apis\uploads.ts
<a name='src-apis-uploadsts'></a>

**Path:** `src\apis\uploads.ts`

```typescript
import { apiClient, createFormData } from './client';
import { UploadResponse, PresignRequest, PresignResponse, GetUrlQuery, GetUrlResponse } from '@/types';

export const uploadsApi = {
  // Check upload status
  getStatus: async (): Promise<{ configured: boolean }> => {
    const response = await apiClient.get<{ configured: boolean }>('/uploads/status');
    return response.data;
  },

  // Direct file upload
  uploadFile: async (
    file: File, 
    folder?: 'images' | 'covers' | 'media' | 'avatars'
  ): Promise<UploadResponse> => {
    const formData = createFormData({ uploadedFile: file });
    
    const params = folder ? { folder } : {};
    
    const response = await apiClient.post<UploadResponse>('/uploads/file', formData, {
      params,
      headers: {
        'Content-Type': 'multipart/form-data',
      },
    });
    
    return response.data;
  },

  // Get presigned URL for upload
  getPresignedUrl: async (data: PresignRequest): Promise<PresignResponse> => {
    const response = await apiClient.post<PresignResponse>('/uploads/presign', data);
    return response.data;
  },

  // Get signed URL for private file access
  getSignedUrl: async (query: GetUrlQuery): Promise<GetUrlResponse> => {
    const response = await apiClient.get<GetUrlResponse>('/uploads/get-url', {
      params: query
    });
    return response.data;
  },

  // Delete file
  deleteFile: async (key: string): Promise<{ key: string }> => {
    const response = await apiClient.delete<{ key: string }>(`/uploads/${key}`);
    return response.data;
  }
};
```

---

#### 📄 src\apis\users.ts
<a name='src-apis-usersts'></a>

**Path:** `src\apis\users.ts`

```typescript
import { apiClient, createFormData } from './client';
import { User, UpdateProfileRequest, ChangePasswordRequest, PaginatedResponse } from '@/types';

export const usersApi = {
  // Update current user profile
  updateProfile: async (data: UpdateProfileRequest): Promise<User> => {
    const response = await apiClient.patch<User>('/users/me', data);
    return response.data;
  },

  // Upload profile picture
  uploadProfilePicture: async (file: File): Promise<User> => {
    const formData = createFormData({ file });
    
    const response = await apiClient.post<User>('/users/me/profile-pic', formData, {
      headers: {
        'Content-Type': 'multipart/form-data',
      },
    });
    
    return response.data;
  },

  // Get user by username
  getUserByUsername: async (username: string): Promise<User> => {
    const response = await apiClient.get<User>(`/users/${username}`);
    return response.data;
  },

  // Follow user
  followUser: async (username: string): Promise<void> => {
    await apiClient.post(`/users/${username}/follow`);
  },

  // Unfollow user
  unfollowUser: async (username: string): Promise<void> => {
    await apiClient.post(`/users/${username}/unfollow`);
  },

  // Get user followers
  getFollowers: async (username: string, page = 1, limit = 20): Promise<PaginatedResponse<User>> => {
    const response = await apiClient.get<PaginatedResponse<User>>(`/users/${username}/followers`, {
      params: { page, limit }
    });
    return response.data;
  },

  // Get user following
  getFollowing: async (username: string, page = 1, limit = 20): Promise<PaginatedResponse<User>> => {
    const response = await apiClient.get<PaginatedResponse<User>>(`/users/${username}/following`, {
      params: { page, limit }
    });
    return response.data;
  },

  // Change password
  changePassword: async (data: ChangePasswordRequest): Promise<void> => {
    await apiClient.post('/users/me/password', data);
  },

  // Delete account
  deleteAccount: async (): Promise<void> => {
    await apiClient.delete('/users/me');
  }
};
```

---

#### 📄 src\apis\votes.ts
<a name='src-apis-votests'></a>

**Path:** `src\apis\votes.ts`

```typescript
import { apiClient } from './client';
import { VoteRequest } from '@/types';

export const votesApi = {
  // Vote on a chapter
  vote: async (chapterId: string): Promise<void> => {
    const request: VoteRequest = {
      chapter_id: chapterId
    };
    
    await apiClient.post('/votes', request);
  }
};
```

---

### 📁 src\controllers

#### 📄 src\controllers\authController.ts
<a name='src-controllers-authControllerts'></a>

**Path:** `src\controllers\authController.ts`

```typescript
import { authApi } from '@/apis';
import { useAuthStore } from '@/store/authStore';
import { useUiStore } from '@/store/uiStore';

export class AuthController {
  static async loginWithToast(email: string, password: string): Promise<boolean> {
    const { login } = useAuthStore.getState();
    const { addToast } = useUiStore.getState();
    
    try {
      await login(email, password);
      addToast({
        title: 'Welcome back!',
        description: 'You have successfully signed in.',
        type: 'success'
      });
      return true;
    } catch (error: any) {
      addToast({
        title: 'Login failed',
        description: error.message || 'Please check your credentials and try again.',
        type: 'error'
      });
      return false;
    }
  }

  static async signupWithToast(username: string, email: string, password: string): Promise<boolean> {
    const { signup } = useAuthStore.getState();
    const { addToast } = useUiStore.getState();
    
    try {
      await signup(username, email, password);
      addToast({
        title: 'Welcome to StoriVault!',
        description: 'Your account has been created successfully.',
        type: 'success'
      });
      return true;
    } catch (error: any) {
      addToast({
        title: 'Signup failed',
        description: error.message || 'Please check your information and try again.',
        type: 'error'
      });
      return false;
    }
  }

  static logoutWithToast(): void {
    const { logout } = useAuthStore.getState();
    const { addToast } = useUiStore.getState();
    
    logout();
    addToast({
      title: 'Signed out',
      description: 'You have been successfully signed out.',
      type: 'success'
    });
  }
}
```

---

#### 📄 src\controllers\index.ts
<a name='src-controllers-indexts'></a>

**Path:** `src\controllers\index.ts`

```typescript
// Controllers orchestrate complex business logic flows
export * from './storyController';
export * from './userController';
export * from './authController';
```

---

#### 📄 src\controllers\storyController.ts
<a name='src-controllers-storyControllerts'></a>

**Path:** `src\controllers\storyController.ts`

```typescript
import { storiesApi, uploadsApi } from '@/apis';
import { useUiStore } from '@/store/uiStore';
import { Story, CreateStoryRequest } from '@/types';

export class StoryController {
  static async createStoryWithCover(
    data: Omit<CreateStoryRequest, 'cover_image'> & { cover?: File }
  ): Promise<Story | null> {
    const { addToast } = useUiStore.getState();
    
    try {
      let story: Story;
      
      if (data.cover) {
        // Upload cover and create story with multipart
        story = await storiesApi.createStoryMultipart({
          title: data.title,
          description: data.description,
          genre: data.genre,
          tags: data.tags?.join(','),
          visibility: data.visibility,
          cover: data.cover
        });
      } else {
        // Create story without cover
        story = await storiesApi.createStory({
          title: data.title,
          description: data.description,
          genre: data.genre,
          tags: data.tags,
          visibility: data.visibility
        });
      }
      
      addToast({
        title: 'Story created!',
        description: 'Your story has been published successfully.',
        type: 'success'
      });
      
      return story;
    } catch (error: any) {
      addToast({
        title: 'Failed to create story',
        description: error.message || 'Please try again later.',
        type: 'error'
      });
      return null;
    }
  }

  static async updateStoryCover(storyId: string, cover: File): Promise<Story | null> {
    const { addToast } = useUiStore.getState();
    
    try {
      const story = await storiesApi.updateStoryCover(storyId, cover);
      
      addToast({
        title: 'Cover updated!',
        description: 'Your story cover has been updated successfully.',
        type: 'success'
      });
      
      return story;
    } catch (error: any) {
      addToast({
        title: 'Failed to update cover',
        description: error.message || 'Please try again later.',
        type: 'error'
      });
      return null;
    }
  }

  static async deleteStoryWithConfirmation(storyId: string): Promise<boolean> {
    const { addToast } = useUiStore.getState();
    
    const confirmed = window.confirm(
      'Are you sure you want to delete this story? This action cannot be undone.'
    );
    
    if (!confirmed) return false;
    
    try {
      await storiesApi.deleteStory(storyId);
      
      addToast({
        title: 'Story deleted',
        description: 'Your story has been deleted successfully.',
        type: 'success'
      });
      
      return true;
    } catch (error: any) {
      addToast({
        title: 'Failed to delete story',
        description: error.message || 'Please try again later.',
        type: 'error'
      });
      return false;
    }
  }
}
```

---

#### 📄 src\controllers\userController.ts
<a name='src-controllers-userControllerts'></a>

**Path:** `src\controllers\userController.ts`

```typescript
import { usersApi } from '@/apis';
import { useAuthStore } from '@/store/authStore';
import { useUiStore } from '@/store/uiStore';
import { User, UpdateProfileRequest } from '@/types';

export class UserController {
  static async updateProfileWithToast(data: UpdateProfileRequest): Promise<User | null> {
    const { updateUser } = useAuthStore.getState();
    const { addToast } = useUiStore.getState();
    
    try {
      const user = await usersApi.updateProfile(data);
      updateUser(user);
      
      addToast({
        title: 'Profile updated!',
        description: 'Your profile has been updated successfully.',
        type: 'success'
      });
      
      return user;
    } catch (error: any) {
      addToast({
        title: 'Failed to update profile',
        description: error.message || 'Please try again later.',
        type: 'error'
      });
      return null;
    }
  }

  static async uploadProfilePictureWithToast(file: File): Promise<User | null> {
    const { updateUser } = useAuthStore.getState();
    const { addToast } = useUiStore.getState();
    
    try {
      const user = await usersApi.uploadProfilePicture(file);
      updateUser(user);
      
      addToast({
        title: 'Profile picture updated!',
        description: 'Your profile picture has been updated successfully.',
        type: 'success'
      });
      
      return user;
    } catch (error: any) {
      addToast({
        title: 'Failed to update profile picture',
        description: error.message || 'Please try again later.',
        type: 'error'
      });
      return null;
    }
  }

  static async followUserWithToast(username: string): Promise<boolean> {
    const { addToast } = useUiStore.getState();
    
    try {
      await usersApi.followUser(username);
      
      addToast({
        title: 'Following!',
        description: `You are now following @${username}.`,
        type: 'success'
      });
      
      return true;
    } catch (error: any) {
      addToast({
        title: 'Failed to follow user',
        description: error.message || 'Please try again later.',
        type: 'error'
      });
      return false;
    }
  }

  static async unfollowUserWithToast(username: string): Promise<boolean> {
    const { addToast } = useUiStore.getState();
    
    try {
      await usersApi.unfollowUser(username);
      
      addToast({
        title: 'Unfollowed',
        description: `You have unfollowed @${username}.`,
        type: 'success'
      });
      
      return true;
    } catch (error: any) {
      addToast({
        title: 'Failed to unfollow user',
        description: error.message || 'Please try again later.',
        type: 'error'
      });
      return false;
    }
  }

  static async changePasswordWithToast(oldPassword: string, newPassword: string): Promise<boolean> {
    const { addToast } = useUiStore.getState();
    
    try {
      await usersApi.changePassword({ old_password: oldPassword, new_password: newPassword });
      
      addToast({
        title: 'Password changed!',
        description: 'Your password has been updated successfully.',
        type: 'success'
      });
      
      return true;
    } catch (error: any) {
      addToast({
        title: 'Failed to change password',
        description: error.message || 'Please check your current password and try again.',
        type: 'error'
      });
      return false;
    }
  }
}
```

---

### 📁 src\helper

#### 📄 src\helper\constants.ts
<a name='src-helper-constantsts'></a>

**Path:** `src\helper\constants.ts`

```typescript
// Application constants

export const API_BASE_URL = 'https://usman678zafar-storivault-backend.hf.space';

export const GENRES = [
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
  'Young Adult',
  'Literary Fiction',
  'Poetry',
  'Non-Fiction'
] as const;

export const STORY_VISIBILITY = {
  PUBLIC: 'public',
  PRIVATE: 'private'
} as const;

export const SORT_OPTIONS = {
  LATEST: 'latest',
  POPULAR: 'popular',
  TRENDING: 'trending'
} as const;

export const FILE_LIMITS = {
  IMAGE_MAX_SIZE: 5 * 1024 * 1024, // 5MB
  COVER_MAX_SIZE: 5 * 1024 * 1024, // 5MB
  ALLOWED_IMAGE_TYPES: ['image/jpeg', 'image/jpg', 'image/png', 'image/webp']
} as const;

export const PAGINATION = {
  DEFAULT_LIMIT: 12,
  MAX_LIMIT: 50
} as const;

export const QUERY_KEYS = {
  STORIES: 'stories',
  STORY: 'story',
  USER: 'user',
  USERS: 'users',
  SEARCH: 'search',
  FOLLOWERS: 'followers',
  FOLLOWING: 'following'
} as const;

export const ROUTES = {
  HOME: '/',
  LOGIN: '/auth/login',
  SIGNUP: '/auth/signup',
  STORIES: '/stories',
  STORY_DETAIL: '/stories/:id',
  STORY_CREATE: '/stories/create',
  STORY_EDIT: '/stories/:id/edit',
  USER_PROFILE: '/users/:username',
  SETTINGS: '/settings',
  LIBRARY: '/library'
} as const;
```

---

#### 📄 src\helper\formatting.ts
<a name='src-helper-formattingts'></a>

**Path:** `src\helper\formatting.ts`

```typescript
// Formatting and utility helpers

export const formatNumber = (num: number): string => {
  if (num >= 1000000) {
    return `${(num / 1000000).toFixed(1)}M`;
  }
  if (num >= 1000) {
    return `${(num / 1000).toFixed(1)}K`;
  }
  return num.toString();
};

export const formatDate = (dateString: string): string => {
  const date = new Date(dateString);
  const now = new Date();
  const diffInMs = now.getTime() - date.getTime();
  const diffInHours = diffInMs / (1000 * 60 * 60);
  const diffInDays = diffInHours / 24;

  if (diffInHours < 1) {
    const diffInMinutes = diffInMs / (1000 * 60);
    return `${Math.floor(diffInMinutes)}m ago`;
  }
  
  if (diffInHours < 24) {
    return `${Math.floor(diffInHours)}h ago`;
  }
  
  if (diffInDays < 7) {
    return `${Math.floor(diffInDays)}d ago`;
  }
  
  if (diffInDays < 30) {
    const diffInWeeks = diffInDays / 7;
    return `${Math.floor(diffInWeeks)}w ago`;
  }
  
  return date.toLocaleDateString();
};

export const formatRelativeTime = (dateString: string): string => {
  const date = new Date(dateString);
  const formatter = new Intl.RelativeTimeFormat('en', { numeric: 'auto' });
  
  const diffInMs = date.getTime() - Date.now();
  const diffInDays = Math.ceil(diffInMs / (1000 * 60 * 60 * 24));
  
  return formatter.format(diffInDays, 'day');
};

export const truncateText = (text: string, maxLength: number): string => {
  if (text.length <= maxLength) return text;
  return text.slice(0, maxLength) + '...';
};

export const capitalizeFirst = (str: string): string => {
  return str.charAt(0).toUpperCase() + str.slice(1).toLowerCase();
};

export const slugify = (text: string): string => {
  return text
    .toLowerCase()
    .replace(/[^\w\s-]/g, '') // Remove special characters
    .replace(/[\s_-]+/g, '-') // Replace spaces and underscores with hyphens
    .replace(/^-+|-+$/g, ''); // Remove leading/trailing hyphens
};

export const parseTagString = (tagString: string): string[] => {
  return tagString
    .split(',')
    .map(tag => tag.trim())
    .filter(tag => tag.length > 0);
};

export const formatTagsForDisplay = (tags: string[]): string => {
  if (tags.length === 0) return '';
  if (tags.length === 1) return tags[0];
  if (tags.length === 2) return tags.join(' and ');
  return `${tags.slice(0, -1).join(', ')}, and ${tags[tags.length - 1]}`;
};
```

---

#### 📄 src\helper\index.ts
<a name='src-helper-indexts'></a>

**Path:** `src\helper\index.ts`

```typescript
export * from './validation';
export * from './formatting';
export * from './constants';
```

---

#### 📄 src\helper\validation.ts
<a name='src-helper-validationts'></a>

**Path:** `src\helper\validation.ts`

```typescript
// Form validation helpers

export const validateEmail = (email: string): boolean => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
};

export const validateUsername = (username: string): string | null => {
  if (!username.trim()) {
    return 'Username is required';
  }
  if (username.length < 3) {
    return 'Username must be at least 3 characters';
  }
  if (username.length > 30) {
    return 'Username must be less than 30 characters';  
  }
  if (!/^[a-zA-Z0-9_-]+$/.test(username)) {
    return 'Username can only contain letters, numbers, hyphens, and underscores';
  }
  return null;
};

export const validatePassword = (password: string): string | null => {
  if (!password) {
    return 'Password is required';
  }
  if (password.length < 6) {
    return 'Password must be at least 6 characters';
  }
  if (password.length > 128) {
    return 'Password must be less than 128 characters';
  }
  return null;
};

export const validateStoryTitle = (title: string): string | null => {
  if (!title.trim()) {
    return 'Title is required';
  }
  if (title.length > 200) {
    return 'Title must be less than 200 characters';
  }
  return null;
};

export const validateStoryDescription = (description: string): string | null => {
  if (description.length > 2000) {
    return 'Description must be less than 2000 characters';
  }
  return null;
};

export const validateObjectId = (id: string): boolean => {
  return /^[0-9a-fA-F]{24}$/.test(id);
};

export const validateFileSize = (file: File, maxSizeInMB: number): string | null => {
  const maxSizeInBytes = maxSizeInMB * 1024 * 1024;
  if (file.size > maxSizeInBytes) {
    return `File size must be less than ${maxSizeInMB}MB`;
  }
  return null;
};

export const validateImageFile = (file: File): string | null => {
  const allowedTypes = ['image/jpeg', 'image/jpg', 'image/png', 'image/webp'];
  if (!allowedTypes.includes(file.type)) {
    return 'Only JPEG, PNG, and WebP images are allowed';
  }
  
  return validateFileSize(file, 5); // 5MB limit for images
};
```

---

### 📁 src\hooks

#### 📄 src\hooks\use-mobile.tsx
<a name='src-hooks-use-mobiletsx'></a>

**Path:** `src\hooks\use-mobile.tsx`

```tsx
import * as React from "react";

const MOBILE_BREAKPOINT = 768;

export function useIsMobile() {
  const [isMobile, setIsMobile] = React.useState<boolean | undefined>(undefined);

  React.useEffect(() => {
    const mql = window.matchMedia(`(max-width: ${MOBILE_BREAKPOINT - 1}px)`);
    const onChange = () => {
      setIsMobile(window.innerWidth < MOBILE_BREAKPOINT);
    };
    mql.addEventListener("change", onChange);
    setIsMobile(window.innerWidth < MOBILE_BREAKPOINT);
    return () => mql.removeEventListener("change", onChange);
  }, []);

  return !!isMobile;
}
```

---

### 📁 src\lib

#### 📄 src\lib\utils.ts
<a name='src-lib-utilsts'></a>

**Path:** `src\lib\utils.ts`

```typescript
import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}
```

---

### 📁 src\pages

#### 📄 src\pages\CreateStoryPage.tsx
<a name='src-pages-CreateStoryPagetsx'></a>

**Path:** `src\pages\CreateStoryPage.tsx`

```tsx
"use client";

import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import {
  Save,
  Eye,
  Upload,
  Bold,
  Italic,
  Underline,
  List,
  ListOrdered,
  Quote,
  AlignLeft,
  AlignCenter,
  AlignRight,
  Plus,
  X,
  Image as ImageIcon,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";
import { MainLayout } from "@/components/layout/main-layout";
import { FileDropzone } from "@/components/ui/file-dropzone";
import { CreateStorySkeleton } from "@/components/ui/create-story-skeleton";
import { useAuthStore } from "@/store/authStore";
import { useUiStore } from "@/store/uiStore";
import { storiesApi, chaptersApi } from "@/apis";
import { GENRES } from "@/helper/constants";

interface Chapter {
  id: string;
  title: string;
  content: string;
  order: number;
}

export function CreateStoryPage() {
  const navigate = useNavigate();
  const { isAuthenticated } = useAuthStore();
  const { addToast } = useUiStore();

  // Add initialization state for loading skeleton
  const [isInitializing, setIsInitializing] = useState(true);

  const [storyData, setStoryData] = useState({
    title: "",
    description: "",
    genre: "",
    tags: [] as string[],
    visibility: "public" as "public" | "private",
  });

  const [coverImage, setCoverImage] = useState<File | null>(null);
  const [coverPreview, setCoverPreview] = useState<string>("");
  const [chapters, setChapters] = useState<Chapter[]>([
    { id: "1", title: "Chapter 1", content: "", order: 1 },
  ]);
  const [activeChapter, setActiveChapter] = useState("1");
  const [currentTag, setCurrentTag] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [activeTab, setActiveTab] = useState("details");

  // Initialize component and check authentication
  useEffect(() => {
    // Simulate initialization time for components to load
    const timer = setTimeout(() => {
      setIsInitializing(false);
    }, 500);

    // Check authentication
    if (!isAuthenticated) {
      navigate("/auth/login");
    }

    return () => clearTimeout(timer);
  }, [isAuthenticated, navigate]);

  const handleCoverSelect = (file: File) => {
    setCoverImage(file);
    const reader = new FileReader();
    reader.onloadend = () => {
      setCoverPreview(reader.result as string);
    };
    reader.readAsDataURL(file);
  };

  const addTag = () => {
    if (currentTag.trim() && !storyData.tags.includes(currentTag.trim())) {
      setStoryData({
        ...storyData,
        tags: [...storyData.tags, currentTag.trim()],
      });
      setCurrentTag("");
    }
  };

  const removeTag = (tag: string) => {
    setStoryData({
      ...storyData,
      tags: storyData.tags.filter((t) => t !== tag),
    });
  };

  const addChapter = () => {
    const newChapter: Chapter = {
      id: Date.now().toString(),
      title: `Chapter ${chapters.length + 1}`,
      content: "",
      order: chapters.length + 1,
    };
    setChapters([...chapters, newChapter]);
    setActiveChapter(newChapter.id);
  };

  const updateChapter = (id: string, updates: Partial<Chapter>) => {
    setChapters(
      chapters.map((ch) => (ch.id === id ? { ...ch, ...updates } : ch))
    );
  };

  const deleteChapter = (id: string) => {
    if (chapters.length > 1) {
      setChapters(chapters.filter((ch) => ch.id !== id));
      if (activeChapter === id) {
        setActiveChapter(chapters[0].id);
      }
    }
  };

  const handleFormatting = (format: string) => {
    // Simple formatting implementation
    const textarea = document.getElementById(
      `chapter-${activeChapter}`
    ) as HTMLTextAreaElement;
    if (!textarea) return;

    const start = textarea.selectionStart;
    const end = textarea.selectionEnd;
    const selectedText = textarea.value.substring(start, end);

    let formattedText = selectedText;
    switch (format) {
      case "bold":
        formattedText = `**${selectedText}**`;
        break;
      case "italic":
        formattedText = `*${selectedText}*`;
        break;
      case "underline":
        formattedText = `__${selectedText}__`;
        break;
      case "quote":
        formattedText = `> ${selectedText}`;
        break;
    }

    const newText =
      textarea.value.substring(0, start) +
      formattedText +
      textarea.value.substring(end);

    const chapter = chapters.find((ch) => ch.id === activeChapter);
    if (chapter) {
      updateChapter(activeChapter, { content: newText });
    }
  };

  const handleSubmit = async () => {
    // Validation
    if (!storyData.title.trim()) {
      addToast({
        title: "Title Required",
        description: "Please enter a title for your story",
        type: "error",
      });
      return;
    }

    if (!storyData.genre) {
      addToast({
        title: "Genre Required",
        description: "Please select a genre for your story",
        type: "error",
      });
      return;
    }

    // Validate that at least one chapter has content
    const hasContent = chapters.some((ch) => ch.content.trim().length > 0);
    if (!hasContent) {
      addToast({
        title: "Content Required",
        description: "Please write content for at least one chapter",
        type: "error",
      });
      return;
    }

    setIsSubmitting(true);
    try {
      // Step 1: Create story with cover image
      const story = await storiesApi.createStoryMultipart({
        title: storyData.title,
        description: storyData.description,
        genre: storyData.genre,
        tags: storyData.tags.join(","),
        visibility: storyData.visibility,
        cover: coverImage || undefined,
      });

      // Step 2: Create chapters for the story
      const chapterPromises = chapters
        .filter((ch) => ch.content.trim().length > 0) // Only save chapters with content
        .map((chapter) =>
          chaptersApi.createChapter({
            story_id: story.id,
            title: chapter.title,
            content: chapter.content,
            order: chapter.order,
            published: true, // Auto-publish chapters when story is published
          })
        );

      await Promise.all(chapterPromises);

      addToast({
        title: "Story Created!",
        description: `Your story has been published with ${chapterPromises.length} chapter(s)`,
        type: "success",
      });

      navigate(`/stories/${story.id}`);
    } catch (error: any) {
      console.error("Failed to create story:", error);

      // Get detailed error message
      let errorMessage = "Failed to create story. Please try again.";
      if (error.response) {
        console.error("Error response:", error.response.data);
        errorMessage =
          error.response.data?.message ||
          error.response.data?.detail ||
          `Server error: ${error.response.status}`;
      } else if (error.message) {
        errorMessage = error.message;
      }

      addToast({
        title: "Error",
        description: errorMessage,
        type: "error",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  // Show loading skeleton while initializing
  if (isInitializing) {
    return (
      <MainLayout showFooter={false}>
        <CreateStorySkeleton />
      </MainLayout>
    );
  }

  // Redirect if not authenticated (this shouldn't show due to useEffect redirect)
  if (!isAuthenticated) {
    return null;
  }

  return (
    <MainLayout showFooter={false}>
      <div className="max-w-6xl mx-auto px-4 py-6">
        <div className="flex items-center justify-between mb-6">
          <h1 className="text-2xl font-bold">Create New Story</h1>
          <div className="flex items-center gap-2">
            <Button variant="outline" onClick={() => navigate(-1)}>
              Cancel
            </Button>
            <Button variant="outline">
              <Eye className="h-4 w-4 mr-2" />
              Preview
            </Button>
            <Button onClick={handleSubmit} disabled={isSubmitting}>
              <Save className="h-4 w-4 mr-2" />
              {isSubmitting ? "Publishing..." : "Publish Story"}
            </Button>
          </div>
        </div>

        <Tabs value={activeTab} onValueChange={setActiveTab}>
          <TabsList className="grid w-full grid-cols-1 min-[450px]:grid-cols-3">
            <TabsTrigger value="details">Story Details</TabsTrigger>
            <TabsTrigger value="chapters">Chapters</TabsTrigger>
            <TabsTrigger value="settings">Settings</TabsTrigger>
          </TabsList>

          {/* Story Details Tab */}
          <TabsContent value="details" className="space-y-6 mt-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Cover Image */}
              <Card>
                <CardHeader>
                  <CardTitle>Cover Image</CardTitle>
                </CardHeader>
                <CardContent>
                  {coverPreview ? (
                    <div className="relative aspect-[2/3] rounded-lg overflow-hidden bg-gray-100">
                      <img
                        src={coverPreview}
                        alt="Cover preview"
                        className="h-full w-full object-cover"
                      />
                      <Button
                        variant="destructive"
                        size="icon"
                        className="absolute top-2 right-2"
                        onClick={() => {
                          setCoverImage(null);
                          setCoverPreview("");
                        }}
                      >
                        <X className="h-4 w-4" />
                      </Button>
                    </div>
                  ) : (
                    <FileDropzone
                      onFileSelect={handleCoverSelect}
                      accept="image/*"
                      className="aspect-[2/3]"
                    />
                  )}
                </CardContent>
              </Card>

              {/* Story Info */}
              <div className="space-y-4">
                <div>
                  <Label htmlFor="title">Title</Label>
                  <Input
                    id="title"
                    value={storyData.title}
                    onChange={(e) =>
                      setStoryData({ ...storyData, title: e.target.value })
                    }
                    placeholder="Enter your story title"
                  />
                </div>

                <div>
                  <Label htmlFor="description">Description</Label>
                  <Textarea
                    id="description"
                    value={storyData.description}
                    onChange={(e) =>
                      setStoryData({
                        ...storyData,
                        description: e.target.value,
                      })
                    }
                    placeholder="Write a brief description of your story"
                    rows={4}
                  />
                </div>

                <div>
                  <Label htmlFor="genre">Genre</Label>
                  <Select
                    value={storyData.genre}
                    onValueChange={(value) =>
                      setStoryData({ ...storyData, genre: value })
                    }
                  >
                    <SelectTrigger>
                      <SelectValue placeholder="Select a genre" />
                    </SelectTrigger>
                    <SelectContent>
                      {GENRES.map((genre) => (
                        <SelectItem key={genre} value={genre}>
                          {genre}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>

                <div>
                  <Label htmlFor="tags">Tags</Label>
                  <div className="flex gap-2">
                    <Input
                      id="tags"
                      value={currentTag}
                      onChange={(e) => setCurrentTag(e.target.value)}
                      placeholder="Add tags"
                      onKeyPress={(e) => {
                        if (e.key === "Enter") {
                          e.preventDefault();
                          addTag();
                        }
                      }}
                    />
                    <Button type="button" onClick={addTag}>
                      Add
                    </Button>
                  </div>
                  <div className="flex flex-wrap gap-2 mt-2">
                    {storyData.tags.map((tag) => (
                      <Badge key={tag} variant="secondary">
                        {tag}
                        <button className="ml-2" onClick={() => removeTag(tag)}>
                          <X className="h-3 w-3" />
                        </button>
                      </Badge>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </TabsContent>

          {/* Chapters Tab */}
          <TabsContent value="chapters" className="mt-6">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
              {/* Chapter List */}
              <div className="md:col-span-1">
                <div className="space-y-2">
                  {chapters.map((chapter) => (
                    <Card
                      key={chapter.id}
                      className={`cursor-pointer ${
                        activeChapter === chapter.id
                          ? "ring-2 ring-primary"
                          : ""
                      }`}
                      onClick={() => setActiveChapter(chapter.id)}
                    >
                      <CardContent className="p-3">
                        <div className="flex items-center justify-between">
                          <span className="font-medium">{chapter.title}</span>
                          {chapters.length > 1 && (
                            <Button
                              variant="ghost"
                              size="icon"
                              className="h-6 w-6"
                              onClick={(e) => {
                                e.stopPropagation();
                                deleteChapter(chapter.id);
                              }}
                            >
                              <X className="h-4 w-4" />
                            </Button>
                          )}
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                  <Button
                    variant="outline"
                    className="w-full"
                    onClick={addChapter}
                  >
                    <Plus className="h-4 w-4 mr-2" />
                    Add Chapter
                  </Button>
                </div>
              </div>

              {/* Chapter Editor */}
              <div className="md:col-span-3">
                {chapters.map((chapter) => (
                  <div
                    key={chapter.id}
                    className={
                      activeChapter === chapter.id ? "block" : "hidden"
                    }
                  >
                    <Card>
                      <CardHeader>
                        <Input
                          value={chapter.title}
                          onChange={(e) =>
                            updateChapter(chapter.id, { title: e.target.value })
                          }
                          className="text-lg font-semibold"
                        />
                      </CardHeader>
                      <CardContent>
                        {/* Editor Toolbar */}
                        <div className="flex items-center gap-1 p-2 border rounded-t-lg bg-gray-50">
                          <Button
                            variant="ghost"
                            size="icon"
                            className="h-8 w-8"
                            onClick={() => handleFormatting("bold")}
                          >
                            <Bold className="h-4 w-4" />
                          </Button>
                          <Button
                            variant="ghost"
                            size="icon"
                            className="h-8 w-8"
                            onClick={() => handleFormatting("italic")}
                          >
                            <Italic className="h-4 w-4" />
                          </Button>
                          <Button
                            variant="ghost"
                            size="icon"
                            className="h-8 w-8"
                            onClick={() => handleFormatting("underline")}
                          >
                            <Underline className="h-4 w-4" />
                          </Button>
                          <div className="w-px h-6 bg-gray-300 mx-1" />
                          <Button
                            variant="ghost"
                            size="icon"
                            className="h-8 w-8"
                            onClick={() => handleFormatting("quote")}
                          >
                            <Quote className="h-4 w-4" />
                          </Button>
                          <Button
                            variant="ghost"
                            size="icon"
                            className="h-8 w-8"
                          >
                            <List className="h-4 w-4" />
                          </Button>
                          <Button
                            variant="ghost"
                            size="icon"
                            className="h-8 w-8"
                          >
                            <ListOrdered className="h-4 w-4" />
                          </Button>
                          <div className="w-px h-6 bg-gray-300 mx-1" />
                          <Button
                            variant="ghost"
                            size="icon"
                            className="h-8 w-8"
                          >
                            <AlignLeft className="h-4 w-4" />
                          </Button>
                          <Button
                            variant="ghost"
                            size="icon"
                            className="h-8 w-8"
                          >
                            <AlignCenter className="h-4 w-4" />
                          </Button>
                          <Button
                            variant="ghost"
                            size="icon"
                            className="h-8 w-8"
                          >
                            <AlignRight className="h-4 w-4" />
                          </Button>
                        </div>

                        {/* Chapter Content */}
                        <Textarea
                          id={`chapter-${chapter.id}`}
                          value={chapter.content}
                          onChange={(e) =>
                            updateChapter(chapter.id, {
                              content: e.target.value,
                            })
                          }
                          placeholder="Start writing your chapter..."
                          className="min-h-[500px] rounded-t-none border-t-0 resize-none font-serif text-lg leading-relaxed"
                        />

                        {/* Word Count */}
                        <div className="text-sm text-muted-foreground mt-2">
                          Words:{" "}
                          {chapter.content.split(/\s+/).filter(Boolean).length}
                        </div>
                      </CardContent>
                    </Card>
                  </div>
                ))}
              </div>
            </div>
          </TabsContent>

          {/* Settings Tab */}
          <TabsContent value="settings" className="space-y-6 mt-6">
            <Card>
              <CardHeader>
                <CardTitle>Story Settings</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <Label htmlFor="visibility">Visibility</Label>
                  <Select
                    value={storyData.visibility}
                    onValueChange={(value: "public" | "private") =>
                      setStoryData({ ...storyData, visibility: value })
                    }
                  >
                    <SelectTrigger>
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="public">Public</SelectItem>
                      <SelectItem value="private">Private</SelectItem>
                    </SelectContent>
                  </Select>
                  <p className="text-sm text-muted-foreground mt-1">
                    {storyData.visibility === "public"
                      ? "Anyone can read your story"
                      : "Only you can see this story"}
                  </p>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </MainLayout>
  );
}
```

---

#### 📄 src\pages\EditStoryPage.tsx
<a name='src-pages-EditStoryPagetsx'></a>

**Path:** `src\pages\EditStoryPage.tsx`

```tsx
"use client";

import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { EditStorySkeleton } from "@/components/ui/edit-story-skeleton";
import {
  Save,
  Eye,
  Upload,
  Bold,
  Italic,
  Underline,
  List,
  ListOrdered,
  Quote,
  AlignLeft,
  AlignCenter,
  AlignRight,
  Plus,
  X,
  ChevronLeft,
  Settings,
  FileText,
  Lock,
  Globe,
  Trash2,
  Edit2,
  Image as ImageIcon,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Separator } from "@/components/ui/separator";
import { Switch } from "@/components/ui/switch";
import { MainLayout } from "@/components/layout/main-layout";
import { FileDropzone } from "@/components/ui/file-dropzone";
import { LoadingSpinner } from "@/components/ui/loading-spinner";
import { useAuthStore } from "@/store/authStore";
import { useUiStore } from "@/store/uiStore";
import { storiesApi, chaptersApi } from "@/apis";
import { Story, Chapter as ApiChapter } from "@/types";
import { GENRES } from "@/helper/constants";
import { cn } from "@/lib/utils";

interface Chapter {
  id: string;
  title: string;
  content: string;
  order: number;
  isPublished: boolean;
  publishedAt?: string;
  isNew?: boolean; // Track if chapter is newly created locally
  isDeleted?: boolean; // Track if chapter should be deleted on save
}

export function EditStoryPage() {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const { user, isAuthenticated } = useAuthStore();
  const { addToast } = useUiStore();

  const [story, setStory] = useState<Story | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [isSaving, setIsSaving] = useState(false);
  const [hasUnsavedChanges, setHasUnsavedChanges] = useState(false);
  const [deleteDialogOpen, setDeleteDialogOpen] = useState(false);
  const [activeTab, setActiveTab] = useState("details");

  // Story data
  const [storyData, setStoryData] = useState({
    title: "",
    description: "",
    genre: "",
    tags: [] as string[],
    visibility: "public" as "public" | "private",
  });

  const [coverImage, setCoverImage] = useState<File | null>(null);
  const [coverPreview, setCoverPreview] = useState<string>("");

  // Chapters
  const [chapters, setChapters] = useState<Chapter[]>([]);
  const [activeChapter, setActiveChapter] = useState<string | null>(null);
  const [currentTag, setCurrentTag] = useState("");

  // Settings
  const [storySettings, setStorySettings] = useState({
    allowComments: true,
    matureContent: false,
    completionStatus: "ongoing" as "ongoing" | "completed",
    language: "English",
    copyright: "All Rights Reserved",
  });

  useEffect(() => {
    if (!id || !isAuthenticated) {
      navigate("/stories");
      return;
    }
    fetchStoryDetails();
  }, [id, isAuthenticated]);

  // Warn about unsaved changes
  useEffect(() => {
    const handleBeforeUnload = (e: BeforeUnloadEvent) => {
      if (hasUnsavedChanges) {
        e.preventDefault();
        e.returnValue = "";
      }
    };

    window.addEventListener("beforeunload", handleBeforeUnload);
    return () => window.removeEventListener("beforeunload", handleBeforeUnload);
  }, [hasUnsavedChanges]);

  const fetchStoryDetails = async () => {
    if (!id) return;

    try {
      setIsLoading(true);
      const storyResponse = await storiesApi.getStory(id);

      // Check if user is the author
      if (storyResponse.author_id !== user?.id) {
        addToast({
          title: "Unauthorized",
          description: "You can only edit your own stories",
          type: "error",
        });
        navigate(`/stories/${id}`);
        return;
      }

      setStory(storyResponse);
      setStoryData({
        title: storyResponse.title,
        description: storyResponse.description,
        genre: storyResponse.genre,
        tags: storyResponse.tags,
        visibility: storyResponse.visibility,
      });

      if (storyResponse.cover_image) {
        setCoverPreview(storyResponse.cover_image);
      }

      // Fetch existing chapters from backend
      try {
        const existingChapters = await chaptersApi.getChaptersByStory(
          id,
          false
        ); // Get all chapters including unpublished

        if (existingChapters.length > 0) {
          const mappedChapters: Chapter[] = existingChapters
            .sort((a, b) => a.order - b.order)
            .map((ch) => ({
              id: ch.id,
              title: ch.title,
              content: ch.content || "",
              order: ch.order,
              isPublished: ch.published,
              publishedAt: ch.published ? ch.updated_at : undefined,
              isNew: false,
            }));
          setChapters(mappedChapters);
          setActiveChapter(mappedChapters[0].id);
        } else {
          // Initialize with one empty chapter if no chapters exist
          const initialChapter: Chapter = {
            id: `new-chapter-${Date.now()}`,
            title: "Chapter 1",
            content: "",
            order: 1,
            isPublished: false,
            isNew: true,
          };
          setChapters([initialChapter]);
          setActiveChapter(initialChapter.id);
        }
      } catch (error) {
        console.error("Failed to fetch chapters:", error);
        // Initialize with one empty chapter if fetch fails
        const initialChapter: Chapter = {
          id: `new-chapter-${Date.now()}`,
          title: "Chapter 1",
          content: "",
          order: 1,
          isPublished: false,
          isNew: true,
        };
        setChapters([initialChapter]);
        setActiveChapter(initialChapter.id);
      }
    } catch (error) {
      addToast({
        title: "Error",
        description: "Failed to load story details",
        type: "error",
      });
      navigate("/stories");
    } finally {
      setIsLoading(false);
    }
  };

  const handleCoverSelect = (file: File) => {
    setCoverImage(file);
    const reader = new FileReader();
    reader.onloadend = () => {
      setCoverPreview(reader.result as string);
    };
    reader.readAsDataURL(file);
    setHasUnsavedChanges(true);
  };

  const addTag = () => {
    if (currentTag.trim() && !storyData.tags.includes(currentTag.trim())) {
      setStoryData({
        ...storyData,
        tags: [...storyData.tags, currentTag.trim()],
      });
      setCurrentTag("");
      setHasUnsavedChanges(true);
    }
  };

  const removeTag = (tag: string) => {
    setStoryData({
      ...storyData,
      tags: storyData.tags.filter((t) => t !== tag),
    });
    setHasUnsavedChanges(true);
  };

  const addChapter = () => {
    const newChapter: Chapter = {
      id: `new-chapter-${Date.now()}`,
      title: `Chapter ${chapters.length + 1}`,
      content: "",
      order: chapters.length + 1,
      isPublished: false,
      isNew: true, // Mark as new so it will be created on save
    };
    setChapters([...chapters, newChapter]);
    setActiveChapter(newChapter.id);
    setHasUnsavedChanges(true);
  };

  const updateChapter = (id: string, updates: Partial<Chapter>) => {
    setChapters(
      chapters.map((ch) => (ch.id === id ? { ...ch, ...updates } : ch))
    );
    setHasUnsavedChanges(true);
  };

  const deleteChapter = (chapterId: string) => {
    if (chapters.length > 1) {
      const chapter = chapters.find((ch) => ch.id === chapterId);

      // If it's a new chapter (not saved), just remove from state
      if (chapter?.isNew) {
        const updatedChapters = chapters.filter((ch) => ch.id !== chapterId);
        setChapters(updatedChapters);
        if (activeChapter === chapterId) {
          setActiveChapter(updatedChapters[0].id);
        }
      } else {
        // Mark existing chapter as deleted to be removed on save
        updateChapter(chapterId, { isDeleted: true });
        // Switch to another chapter
        const remainingChapters = chapters.filter((ch) => ch.id !== chapterId);
        if (activeChapter === chapterId && remainingChapters.length > 0) {
          setActiveChapter(remainingChapters[0].id);
        }
      }
      setHasUnsavedChanges(true);
    } else {
      addToast({
        title: "Cannot delete",
        description: "You must have at least one chapter",
        type: "error",
      });
    }
  };

  const reorderChapter = (id: string, direction: "up" | "down") => {
    const index = chapters.findIndex((ch) => ch.id === id);
    if (
      (direction === "up" && index > 0) ||
      (direction === "down" && index < chapters.length - 1)
    ) {
      const newChapters = [...chapters];
      const swapIndex = direction === "up" ? index - 1 : index + 1;
      [newChapters[index], newChapters[swapIndex]] = [
        newChapters[swapIndex],
        newChapters[index],
      ];
      // Update order numbers
      newChapters.forEach((ch, i) => {
        ch.order = i + 1;
      });
      setChapters(newChapters);
      setHasUnsavedChanges(true);
    }
  };

  const handleSave = async () => {
    // Validation
    if (!storyData.title.trim()) {
      addToast({
        title: "Title Required",
        description: "Please enter a title for your story",
        type: "error",
      });
      return;
    }

    if (!storyData.genre) {
      addToast({
        title: "Genre Required",
        description: "Please select a genre for your story",
        type: "error",
      });
      return;
    }

    setIsSaving(true);
    try {
      // Step 1: Update story metadata
      await storiesApi.updateStory(id!, {
        title: storyData.title,
        description: storyData.description,
        genre: storyData.genre,
        tags: storyData.tags,
        visibility: storyData.visibility,
      });

      // Step 2: Update cover if changed
      if (coverImage) {
        await storiesApi.updateStoryCover(id!, coverImage);
      }

      // Step 3: Save chapters
      const chapterPromises = [];

      // Filter out deleted chapters from the list for display
      const visibleChapters = chapters.filter((ch) => !ch.isDeleted);

      for (const chapter of chapters) {
        try {
          if (chapter.isDeleted && !chapter.isNew) {
            // Delete existing chapter from backend
            console.log(`Deleting chapter: ${chapter.id}`);
            chapterPromises.push(
              chaptersApi.deleteChapter(chapter.id).catch((err) => {
                console.error(`Failed to delete chapter ${chapter.id}:`, err);
                throw err;
              })
            );
          } else if (chapter.isNew && !chapter.isDeleted) {
            // Create new chapter (even if empty)
            const chapterData = {
              story_id: id!,
              title: chapter.title,
              content: chapter.content,
              order: chapter.order,
              published: chapter.isPublished,
            };
            console.log(`Creating new chapter:`, chapterData);
            chapterPromises.push(
              chaptersApi.createChapter(chapterData).catch((err) => {
                console.error(
                  `Failed to create chapter "${chapter.title}":`,
                  err
                );
                console.error("Chapter data was:", chapterData);
                throw err;
              })
            );
          } else if (!chapter.isNew && !chapter.isDeleted) {
            // Update existing chapter (only if ID is valid - not starting with "new-")
            if (!chapter.id.startsWith("new-")) {
              const updateData = {
                title: chapter.title,
                content: chapter.content,
                order: chapter.order,
                published: chapter.isPublished,
              };
              console.log(`Updating chapter ${chapter.id}:`, updateData);
              chapterPromises.push(
                chaptersApi
                  .updateChapter(chapter.id, updateData)
                  .catch((err) => {
                    console.error(
                      `Failed to update chapter ${chapter.id}:`,
                      err
                    );
                    console.error("Update data was:", updateData);
                    throw err;
                  })
              );
            } else {
              console.warn(
                `Skipping update for chapter with invalid ID: ${chapter.id}`
              );
            }
          }
        } catch (err) {
          console.error("Error processing chapter:", chapter, err);
          throw err;
        }
      }

      console.log(`Total chapter operations queued: ${chapterPromises.length}`);

      await Promise.all(chapterPromises);

      // Update local state to reflect the save
      setChapters(visibleChapters.map((ch) => ({ ...ch, isNew: false })));

      setHasUnsavedChanges(false);
      addToast({
        title: "Story Updated!",
        description: "Your story and chapters have been saved successfully",
        type: "success",
      });

      // Refresh to get updated IDs for new chapters
      await fetchStoryDetails();
    } catch (error: any) {
      console.error("Failed to save story:", error);

      // Get detailed error message
      let errorMessage = "Failed to save changes. Please try again.";
      if (error.response) {
        console.error("Error response:", error.response.data);
        errorMessage =
          error.response.data?.message ||
          error.response.data?.detail ||
          `Server error: ${error.response.status}`;
      } else if (error.message) {
        errorMessage = error.message;
      }

      addToast({
        title: "Error",
        description: errorMessage,
        type: "error",
      });
    } finally {
      setIsSaving(false);
    }
  };

  const handleDelete = async () => {
    try {
      await storiesApi.deleteStory(id!);
      addToast({
        title: "Story Deleted",
        description: "Your story has been permanently deleted",
        type: "success",
      });
      navigate(`/profile/${user?.username}`);
    } catch (error) {
      addToast({
        title: "Error",
        description: "Failed to delete story. Please try again.",
        type: "error",
      });
    }
    setDeleteDialogOpen(false);
  };

  const handlePublishChapter = async (chapterId: string) => {
    const chapter = chapters.find((ch) => ch.id === chapterId);
    if (!chapter) return;

    if (!chapter.content.trim()) {
      addToast({
        title: "No Content",
        description: "Please add content to the chapter before publishing",
        type: "error",
      });
      return;
    }

    updateChapter(chapterId, {
      isPublished: true,
      publishedAt: new Date().toISOString(),
    });

    addToast({
      title: "Chapter Marked for Publishing",
      description: "Click 'Save Changes' to publish this chapter",
      type: "info",
    });
  };

  if (isLoading) {
    return (
      <MainLayout>
        <EditStorySkeleton />
      </MainLayout>
    );
  }

  return (
    <MainLayout showFooter={false}>
      <div className="min-h-screen bg-gray-50">
        {/* Header */}
        <div className="bg-white border-b sticky top-0 z-40">
          <div className="max-w-7xl mx-auto px-4 py-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-4">
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={() => {
                    if (hasUnsavedChanges) {
                      if (
                        confirm(
                          "You have unsaved changes. Are you sure you want to leave?"
                        )
                      ) {
                        navigate(`/stories/${id}`);
                      }
                    } else {
                      navigate(`/stories/${id}`);
                    }
                  }}
                >
                  <ChevronLeft className="h-4 w-4 mr-2" />
                  Back to Story
                </Button>
                <Separator orientation="vertical" className="h-8" />
                <div>
                  <h1 className="text-xl font-bold">Edit Story</h1>
                  {hasUnsavedChanges && (
                    <p className="text-xs text-orange-600">Unsaved changes</p>
                  )}
                </div>
              </div>
              <div className="flex items-center gap-2">
                <Button
                  variant="outline"
                  onClick={() => navigate(`/stories/${id}`)}
                >
                  <Eye className="h-4 w-4 mr-2" />
                  Preview
                </Button>
                <Button
                  onClick={handleSave}
                  disabled={isSaving || !hasUnsavedChanges}
                  className="bg-green-600 hover:bg-green-700"
                >
                  {isSaving ? (
                    <>
                      <LoadingSpinner size="sm" className="mr-2" />
                      Saving...
                    </>
                  ) : (
                    <>
                      <Save className="h-4 w-4 mr-2" />
                      Save Changes
                    </>
                  )}
                </Button>
              </div>
            </div>
          </div>
        </div>

        {/* Main Content */}
        <div className="max-w-7xl mx-auto px-4 py-6">
          <Tabs value={activeTab} onValueChange={setActiveTab}>
            <TabsList className="mb-6 bg-white">
              <TabsTrigger value="details" className="gap-2">
                <FileText className="h-4 w-4" />
                Story Details
              </TabsTrigger>
              <TabsTrigger value="chapters" className="gap-2">
                <Edit2 className="h-4 w-4" />
                Chapters
              </TabsTrigger>
              <TabsTrigger value="settings" className="gap-2">
                <Settings className="h-4 w-4" />
                Settings
              </TabsTrigger>
            </TabsList>

            {/* Story Details Tab */}
            <TabsContent value="details" className="space-y-6">
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                {/* Cover Image */}
                <Card className="lg:col-span-1 bg-white">
                  <CardHeader>
                    <CardTitle>Cover Image</CardTitle>
                    <CardDescription>
                      Upload an eye-catching cover for your story
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    {coverPreview ? (
                      <div className="relative aspect-[2/3] rounded-lg overflow-hidden bg-gray-100">
                        <img
                          src={coverPreview}
                          alt="Cover preview"
                          className="h-full w-full object-cover"
                        />
                        <div className="absolute inset-0 bg-black/40 opacity-0 hover:opacity-100 transition-opacity flex items-center justify-center gap-2">
                          <label>
                            <Button
                              variant="secondary"
                              size="sm"
                              className="cursor-pointer"
                              asChild
                            >
                              <span>
                                <Upload className="h-4 w-4 mr-2" />
                                Replace
                              </span>
                            </Button>
                            <input
                              type="file"
                              accept="image/*"
                              onChange={(e) => {
                                const file = e.target.files?.[0];
                                if (file) handleCoverSelect(file);
                              }}
                              className="hidden"
                            />
                          </label>
                          <Button
                            variant="destructive"
                            size="sm"
                            onClick={() => {
                              setCoverImage(null);
                              setCoverPreview("");
                              setHasUnsavedChanges(true);
                            }}
                          >
                            <X className="h-4 w-4" />
                          </Button>
                        </div>
                      </div>
                    ) : (
                      <FileDropzone
                        onFileSelect={handleCoverSelect}
                        accept="image/*"
                        className="aspect-[2/3]"
                      />
                    )}
                  </CardContent>
                </Card>

                {/* Story Info */}
                <div className="lg:col-span-2 space-y-6">
                  <Card className="bg-white">
                    <CardHeader>
                      <CardTitle>Basic Information</CardTitle>
                      <CardDescription>
                        Update your story's title, description, and genre
                      </CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <div>
                        <Label htmlFor="title">Title</Label>
                        <Input
                          id="title"
                          value={storyData.title}
                          onChange={(e) => {
                            setStoryData({
                              ...storyData,
                              title: e.target.value,
                            });
                            setHasUnsavedChanges(true);
                          }}
                          placeholder="Enter your story title"
                          className="mt-1"
                        />
                      </div>

                      <div>
                        <Label htmlFor="description">Description</Label>
                        <Textarea
                          id="description"
                          value={storyData.description}
                          onChange={(e) => {
                            setStoryData({
                              ...storyData,
                              description: e.target.value,
                            });
                            setHasUnsavedChanges(true);
                          }}
                          placeholder="Write a compelling description of your story"
                          rows={5}
                          className="mt-1"
                        />
                        <p className="text-xs text-gray-500 mt-1">
                          {storyData.description.length}/2000 characters
                        </p>
                      </div>

                      <div>
                        <Label htmlFor="genre">Genre</Label>
                        <Select
                          value={storyData.genre}
                          onValueChange={(value) => {
                            setStoryData({ ...storyData, genre: value });
                            setHasUnsavedChanges(true);
                          }}
                        >
                          <SelectTrigger className="mt-1">
                            <SelectValue placeholder="Select a genre" />
                          </SelectTrigger>
                          <SelectContent className="bg-white">
                            {GENRES.map((genre) => (
                              <SelectItem key={genre} value={genre}>
                                {genre}
                              </SelectItem>
                            ))}
                          </SelectContent>
                        </Select>
                      </div>

                      <div>
                        <Label htmlFor="tags">Tags</Label>
                        <div className="flex gap-2 mt-1">
                          <Input
                            id="tags"
                            value={currentTag}
                            onChange={(e) => setCurrentTag(e.target.value)}
                            placeholder="Add tags to help readers find your story"
                            onKeyPress={(e) => {
                              if (e.key === "Enter") {
                                e.preventDefault();
                                addTag();
                              }
                            }}
                          />
                          <Button
                            type="button"
                            onClick={addTag}
                            variant="secondary"
                          >
                            Add
                          </Button>
                        </div>
                        <div className="flex flex-wrap gap-2 mt-2">
                          {storyData.tags.map((tag) => (
                            <Badge key={tag} variant="secondary">
                              {tag}
                              <button
                                className="ml-2 hover:text-destructive"
                                onClick={() => removeTag(tag)}
                              >
                                <X className="h-3 w-3" />
                              </button>
                            </Badge>
                          ))}
                        </div>
                      </div>
                    </CardContent>
                  </Card>

                  <Card className="bg-white">
                    <CardHeader>
                      <CardTitle>Visibility</CardTitle>
                      <CardDescription>
                        Control who can see your story
                      </CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-4">
                        <div
                          className={cn(
                            "flex items-start gap-4 p-4 rounded-lg border-2 cursor-pointer transition-colors",
                            storyData.visibility === "public"
                              ? "border-orange-500 bg-orange-50"
                              : "border-gray-200 hover:border-gray-300"
                          )}
                          onClick={() => {
                            setStoryData({
                              ...storyData,
                              visibility: "public",
                            });
                            setHasUnsavedChanges(true);
                          }}
                        >
                          <div className="pt-1">
                            <Globe className="h-5 w-5 text-gray-600" />
                          </div>
                          <div className="flex-1">
                            <h4 className="font-semibold">Public</h4>
                            <p className="text-sm text-gray-600 mt-1">
                              Anyone can find and read your story
                            </p>
                          </div>
                          <input
                            type="radio"
                            checked={storyData.visibility === "public"}
                            onChange={() => {}}
                            className="mt-1"
                          />
                        </div>

                        <div
                          className={cn(
                            "flex items-start gap-4 p-4 rounded-lg border-2 cursor-pointer transition-colors",
                            storyData.visibility === "private"
                              ? "border-orange-500 bg-orange-50"
                              : "border-gray-200 hover:border-gray-300"
                          )}
                          onClick={() => {
                            setStoryData({
                              ...storyData,
                              visibility: "private",
                            });
                            setHasUnsavedChanges(true);
                          }}
                        >
                          <div className="pt-1">
                            <Lock className="h-5 w-5 text-gray-600" />
                          </div>
                          <div className="flex-1">
                            <h4 className="font-semibold">Private</h4>
                            <p className="text-sm text-gray-600 mt-1">
                              Only you can see this story
                            </p>
                          </div>
                          <input
                            type="radio"
                            checked={storyData.visibility === "private"}
                            onChange={() => {}}
                            className="mt-1"
                          />
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </div>
            </TabsContent>

            {/* Chapters Tab */}
            <TabsContent value="chapters" className="space-y-6">
              <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
                {/* Chapter List */}
                <div className="lg:col-span-1">
                  <Card className="bg-white">
                    <CardHeader>
                      <CardTitle className="text-lg">Chapters</CardTitle>
                      <CardDescription>
                        Organize your story into chapters
                      </CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-2">
                      {chapters
                        .filter((ch) => !ch.isDeleted)
                        .map((chapter, index) => (
                          <div
                            key={chapter.id}
                            className={cn(
                              "group relative p-3 rounded-lg border cursor-pointer transition-colors",
                              activeChapter === chapter.id
                                ? "border-orange-500 bg-orange-50"
                                : "border-gray-200 hover:border-gray-300"
                            )}
                            onClick={() => setActiveChapter(chapter.id)}
                          >
                            <div className="flex items-center justify-between">
                              <div className="flex-1">
                                <p className="font-medium text-sm">
                                  {chapter.title}
                                </p>
                                {chapter.isPublished && (
                                  <Badge
                                    variant="secondary"
                                    className="mt-1 text-xs"
                                  >
                                    Published
                                  </Badge>
                                )}
                              </div>
                              <div className="flex items-center gap-1 opacity-0 group-hover:opacity-100 transition-opacity">
                                {index > 0 && (
                                  <Button
                                    variant="ghost"
                                    size="icon"
                                    className="h-6 w-6"
                                    onClick={(e) => {
                                      e.stopPropagation();
                                      reorderChapter(chapter.id, "up");
                                    }}
                                  >
                                    <ChevronLeft className="h-3 w-3 rotate-90" />
                                  </Button>
                                )}
                                {index < chapters.length - 1 && (
                                  <Button
                                    variant="ghost"
                                    size="icon"
                                    className="h-6 w-6"
                                    onClick={(e) => {
                                      e.stopPropagation();
                                      reorderChapter(chapter.id, "down");
                                    }}
                                  >
                                    <ChevronLeft className="h-3 w-3 -rotate-90" />
                                  </Button>
                                )}
                                {chapters.length > 1 && (
                                  <Button
                                    variant="ghost"
                                    size="icon"
                                    className="h-6 w-6"
                                    onClick={(e) => {
                                      e.stopPropagation();
                                      deleteChapter(chapter.id);
                                    }}
                                  >
                                    <X className="h-3 w-3" />
                                  </Button>
                                )}
                              </div>
                            </div>
                          </div>
                        ))}
                      <Button
                        variant="outline"
                        className="w-full"
                        onClick={addChapter}
                      >
                        <Plus className="h-4 w-4 mr-2" />
                        Add Chapter
                      </Button>
                    </CardContent>
                  </Card>
                </div>

                {/* Chapter Editor */}
                <div className="lg:col-span-3">
                  {chapters
                    .filter((ch) => !ch.isDeleted)
                    .map((chapter) => (
                      <div
                        key={chapter.id}
                        className={
                          activeChapter === chapter.id ? "block" : "hidden"
                        }
                      >
                        <Card className="bg-white">
                          <CardHeader>
                            <div className="flex items-center justify-between">
                              <div className="flex-1">
                                <Input
                                  value={chapter.title}
                                  onChange={(e) =>
                                    updateChapter(chapter.id, {
                                      title: e.target.value,
                                    })
                                  }
                                  className="text-xl font-semibold"
                                  placeholder="Chapter Title"
                                />
                              </div>
                              {!chapter.isPublished && (
                                <Button
                                  variant="outline"
                                  onClick={() =>
                                    handlePublishChapter(chapter.id)
                                  }
                                >
                                  Publish Chapter
                                </Button>
                              )}
                            </div>
                          </CardHeader>
                          <CardContent>
                            <Textarea
                              value={chapter.content}
                              onChange={(e) =>
                                updateChapter(chapter.id, {
                                  content: e.target.value,
                                })
                              }
                              placeholder="Start writing your chapter..."
                              className="min-h-[500px] font-serif text-lg leading-relaxed"
                            />
                            <div className="flex items-center justify-between mt-4 text-sm text-gray-500">
                              <div>
                                Words:{" "}
                                {
                                  chapter.content.split(/\s+/).filter(Boolean)
                                    .length
                                }
                              </div>
                              {chapter.isPublished && chapter.publishedAt && (
                                <div>
                                  Published:{" "}
                                  {new Date(
                                    chapter.publishedAt
                                  ).toLocaleDateString()}
                                </div>
                              )}
                            </div>
                          </CardContent>
                        </Card>
                      </div>
                    ))}
                </div>
              </div>
            </TabsContent>

            {/* Settings Tab */}
            <TabsContent value="settings" className="space-y-6">
              <Card className="bg-white">
                <CardHeader>
                  <CardTitle>Story Settings</CardTitle>
                  <CardDescription>
                    Configure advanced settings for your story
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="flex items-center justify-between">
                    <div>
                      <Label htmlFor="comments">Allow Comments</Label>
                      <p className="text-sm text-gray-600">
                        Let readers comment on your chapters
                      </p>
                    </div>
                    <Switch
                      id="comments"
                      checked={storySettings.allowComments}
                      onCheckedChange={(checked) => {
                        setStorySettings({
                          ...storySettings,
                          allowComments: checked,
                        });
                        setHasUnsavedChanges(true);
                      }}
                    />
                  </div>

                  <div className="flex items-center justify-between">
                    <div>
                      <Label htmlFor="mature">Mature Content</Label>
                      <p className="text-sm text-gray-600">
                        Mark if your story contains mature themes
                      </p>
                    </div>
                    <Switch
                      id="mature"
                      checked={storySettings.matureContent}
                      onCheckedChange={(checked) => {
                        setStorySettings({
                          ...storySettings,
                          matureContent: checked,
                        });
                        setHasUnsavedChanges(true);
                      }}
                    />
                  </div>

                  <div>
                    <Label htmlFor="status">Completion Status</Label>
                    <Select
                      value={storySettings.completionStatus}
                      onValueChange={(value: "ongoing" | "completed") => {
                        setStorySettings({
                          ...storySettings,
                          completionStatus: value,
                        });
                        setHasUnsavedChanges(true);
                      }}
                    >
                      <SelectTrigger className="mt-1">
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent className="bg-white">
                        <SelectItem value="ongoing">Ongoing</SelectItem>
                        <SelectItem value="completed">Completed</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div>
                    <Label htmlFor="language">Language</Label>
                    <Select
                      value={storySettings.language}
                      onValueChange={(value) => {
                        setStorySettings({ ...storySettings, language: value });
                        setHasUnsavedChanges(true);
                      }}
                    >
                      <SelectTrigger className="mt-1">
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent className="bg-white">
                        <SelectItem value="English">English</SelectItem>
                        <SelectItem value="Spanish">Spanish</SelectItem>
                        <SelectItem value="French">French</SelectItem>
                        <SelectItem value="German">German</SelectItem>
                        <SelectItem value="Italian">Italian</SelectItem>
                        <SelectItem value="Portuguese">Portuguese</SelectItem>
                        <SelectItem value="Other">Other</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div>
                    <Label htmlFor="copyright">Copyright</Label>
                    <Select
                      value={storySettings.copyright}
                      onValueChange={(value) => {
                        setStorySettings({
                          ...storySettings,
                          copyright: value,
                        });
                        setHasUnsavedChanges(true);
                      }}
                    >
                      <SelectTrigger className="mt-1">
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent className="bg-white">
                        <SelectItem value="All Rights Reserved">
                          All Rights Reserved
                        </SelectItem>
                        <SelectItem value="Creative Commons">
                          Creative Commons
                        </SelectItem>
                        <SelectItem value="Public Domain">
                          Public Domain
                        </SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-white border-red-200">
                <CardHeader>
                  <CardTitle className="text-red-600">Danger Zone</CardTitle>
                  <CardDescription>
                    Irreversible actions for your story
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <Button
                    variant="destructive"
                    onClick={() => setDeleteDialogOpen(true)}
                  >
                    <Trash2 className="h-4 w-4 mr-2" />
                    Delete Story
                  </Button>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </div>
      </div>

      {/* Delete Confirmation Dialog */}
      <Dialog open={deleteDialogOpen} onOpenChange={setDeleteDialogOpen}>
        <DialogContent className="bg-white">
          <DialogHeader>
            <DialogTitle>Delete Story</DialogTitle>
            <DialogDescription>
              Are you sure you want to delete "{story?.title}"? This action
              cannot be undone and will permanently delete your story and all
              its chapters.
            </DialogDescription>
          </DialogHeader>
          <DialogFooter>
            <Button
              variant="outline"
              onClick={() => setDeleteDialogOpen(false)}
            >
              Cancel
            </Button>
            <Button variant="destructive" onClick={handleDelete}>
              Delete Story
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </MainLayout>
  );
}
```

---

#### 📄 src\pages\FeedPage.tsx
<a name='src-pages-FeedPagetsx'></a>

**Path:** `src\pages\FeedPage.tsx`

```tsx
"use client";

import { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import {
  Plus,
  Heart,
  MessageCircle,
  Bookmark,
  Share2,
  MoreVertical,
  TrendingUp,
  Users,
  Grid3X3,
  BookOpen,
  Eye,
  Check,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { MainLayout } from "@/components/layout/main-layout";
import { FeedSkeleton } from "@/components/ui/feed-skeleton";
import { useAuthStore } from "@/store/authStore";
import { useUiStore } from "@/store/uiStore";
import { Story, User } from "@/types";
import { storiesApi, usersApi } from "@/apis";
import { cn } from "@/lib/utils";
import { formatNumber } from "@/helper/formatting";

interface StoryPost extends Story {
  author?: User;
  is_liked?: boolean;
  is_saved?: boolean;
}

interface UserStats {
  storiesRead: number;
  readingList: number;
  following: number;
  readTime?: number;
  favoriteGenre?: string;
}

interface ReadingHistoryItem {
  lastRead?: string;
  progress?: number;
  lastChapter?: number;
  readTime?: number;
}

export function FeedPage() {
  const navigate = useNavigate();
  const { user, isAuthenticated } = useAuthStore();
  const { addToast } = useUiStore();

  const [stories, setStories] = useState<StoryPost[]>([]);
  const [followingStories, setFollowingStories] = useState<StoryPost[]>([]);
  const [trendingStories, setTrendingStories] = useState<StoryPost[]>([]);
  const [suggestedAuthors, setSuggestedAuthors] = useState<User[]>([]);
  const [followingStatus, setFollowingStatus] = useState<
    Record<string, boolean>
  >({});
  const [userStats, setUserStats] = useState<UserStats>({
    storiesRead: 0,
    readingList: 0,
    following: 0,
    readTime: 0,
    favoriteGenre: "Romance",
  });
  const [isLoading, setIsLoading] = useState(true);
  const [activeTab, setActiveTab] = useState("for-you");
  const [viewMode, setViewMode] = useState<"grid" | "list">("grid");

  useEffect(() => {
    if (!isAuthenticated) {
      navigate("/auth/login");
      return;
    }
    fetchFeedData();
    fetchSuggestedAuthors();
    fetchUserStats();
  }, [isAuthenticated]);

  const fetchFeedData = async () => {
    try {
      setIsLoading(true);
      const [forYouRes, followingRes, trendingRes] = await Promise.all([
        storiesApi.getStories({ page: 1, limit: 20, sort: "popular" }),
        storiesApi.getStories({ page: 1, limit: 20, sort: "latest" }),
        storiesApi.getStories({ page: 1, limit: 10, sort: "trending" }),
      ]);

      const enrichStory = async (story: Story): Promise<StoryPost> => {
        let author: User;
        try {
          author = await usersApi.getUserByUsername(story.author_id);
        } catch {
          author = {
            id: story.author_id,
            username: `author_${story.author_id.slice(0, 8)}`,
            email: "",
            bio: "Passionate storyteller",
            profile_pic: `https://api.dicebear.com/7.x/avataaars/svg?seed=${story.author_id}`,
            followers_count: Math.floor(Math.random() * 50000),
            following_count: Math.floor(Math.random() * 1000),
            stories_count: Math.floor(Math.random() * 100),
            created_at: new Date().toISOString(),
            updated_at: new Date().toISOString(),
          };
        }

        const savedStories = JSON.parse(
          localStorage.getItem("saved_stories") || "[]"
        );
        const likedStories = JSON.parse(
          localStorage.getItem("liked_stories") || "[]"
        );

        return {
          ...story,
          author,
          is_liked: likedStories.includes(story.id),
          is_saved: savedStories.includes(story.id),
        };
      };

      const enrichedStories = await Promise.all(
        forYouRes.items.map(enrichStory)
      );
      const enrichedFollowing = await Promise.all(
        followingRes.items.map(enrichStory)
      );
      const enrichedTrending = await Promise.all(
        trendingRes.items.map(enrichStory)
      );

      setStories(enrichedStories);
      setFollowingStories(enrichedFollowing);
      setTrendingStories(enrichedTrending);
    } catch (error) {
      console.error("Failed to fetch feed:", error);
    } finally {
      setIsLoading(false);
    }
  };

  const fetchSuggestedAuthors = async () => {
    try {
      const response = await storiesApi.getStories({
        limit: 20,
        sort: "popular",
      });

      const authorIds = [...new Set(response.items.map((s) => s.author_id))];
      const authors: User[] = [];
      const followStatus: Record<string, boolean> = {};

      const followingList = JSON.parse(
        localStorage.getItem("following_users") || "[]"
      );

      for (const authorId of authorIds.slice(0, 5)) {
        if (authorId === user?.id) continue;

        try {
          const author = await usersApi.getUserByUsername(authorId);
          authors.push(author);
          followStatus[author.id] = followingList.includes(author.id);
        } catch {
          const mockAuthor: User = {
            id: authorId,
            username: `author_${authorId.slice(0, 8)}`,
            email: `author_${authorId.slice(0, 8)}@storivault.com`,
            bio: "📚 Passionate storyteller | ✍️ Creating worlds with words",
            profile_pic: `https://api.dicebear.com/7.x/avataaars/svg?seed=${authorId}`,
            followers_count: Math.floor(Math.random() * 50000) + 1000,
            following_count: Math.floor(Math.random() * 1000) + 50,
            stories_count: Math.floor(Math.random() * 50) + 5,
            created_at: new Date(
              Date.now() - Math.random() * 365 * 24 * 60 * 60 * 1000
            ).toISOString(),
            updated_at: new Date().toISOString(),
          };
          authors.push(mockAuthor);
          followStatus[mockAuthor.id] = followingList.includes(mockAuthor.id);
        }
      }

      setSuggestedAuthors(authors);
      setFollowingStatus(followStatus);
    } catch (error) {
      console.error("Failed to fetch suggested authors:", error);
    }
  };

  const fetchUserStats = async () => {
    if (!user) return;

    try {
      const readStories = JSON.parse(
        localStorage.getItem("read_stories") || "[]"
      );
      const savedStories = JSON.parse(
        localStorage.getItem("saved_stories") || "[]"
      );
      const followingUsers = JSON.parse(
        localStorage.getItem("following_users") || "[]"
      );

      // Parse reading history with proper type handling
      const readingHistoryRaw = localStorage.getItem("reading_history");
      let totalMinutes = 0;

      if (readingHistoryRaw) {
        try {
          const readingHistory = JSON.parse(readingHistoryRaw) as Record<
            string,
            ReadingHistoryItem
          >;

          // Calculate total read time safely
          totalMinutes = Object.values(readingHistory).reduce<number>(
            (acc, item) => {
              if (item && typeof item.readTime === "number") {
                return acc + item.readTime;
              }
              return acc;
            },
            0
          );
        } catch (parseError) {
          console.error("Failed to parse reading history:", parseError);
        }
      }

      setUserStats({
        storiesRead: readStories.length,
        readingList: savedStories.length,
        following: followingUsers.length,
        readTime: Math.round(totalMinutes / 60), // Convert minutes to hours
        favoriteGenre: "Romance",
      });
    } catch (error) {
      console.error("Failed to fetch user stats:", error);
    }
  };

  const handleFollowAuthor = async (author: User) => {
    try {
      const followingUsers = JSON.parse(
        localStorage.getItem("following_users") || "[]"
      );
      const isFollowing = followingUsers.includes(author.id);

      if (isFollowing) {
        const updated = followingUsers.filter((id: string) => id !== author.id);
        localStorage.setItem("following_users", JSON.stringify(updated));

        setSuggestedAuthors((prev) =>
          prev.map((a) =>
            a.id === author.id
              ? { ...a, followers_count: Math.max(0, a.followers_count - 1) }
              : a
          )
        );

        setFollowingStatus((prev) => ({ ...prev, [author.id]: false }));
        setUserStats((prev) => ({
          ...prev,
          following: Math.max(0, prev.following - 1),
        }));

        await usersApi.unfollowUser(author.username);

        addToast({
          title: "Unfollowed",
          description: `You unfollowed @${author.username}`,
          type: "info",
        });
      } else {
        followingUsers.push(author.id);
        localStorage.setItem("following_users", JSON.stringify(followingUsers));

        setSuggestedAuthors((prev) =>
          prev.map((a) =>
            a.id === author.id
              ? { ...a, followers_count: a.followers_count + 1 }
              : a
          )
        );

        setFollowingStatus((prev) => ({ ...prev, [author.id]: true }));
        setUserStats((prev) => ({ ...prev, following: prev.following + 1 }));

        await usersApi.followUser(author.username);

        addToast({
          title: "Following!",
          description: `You are now following @${author.username}`,
          type: "success",
        });
      }
    } catch (error) {
      addToast({
        title: "Error",
        description: "Failed to update follow status",
        type: "error",
      });
    }
  };

  const handleLike = (storyId: string) => {
    const likedStories = JSON.parse(
      localStorage.getItem("liked_stories") || "[]"
    );
    const isLiked = likedStories.includes(storyId);

    if (isLiked) {
      const updated = likedStories.filter((id: string) => id !== storyId);
      localStorage.setItem("liked_stories", JSON.stringify(updated));
    } else {
      likedStories.push(storyId);
      localStorage.setItem("liked_stories", JSON.stringify(likedStories));
    }

    const updateStoryList = (list: StoryPost[]) =>
      list.map((story) =>
        story.id === storyId
          ? {
              ...story,
              is_liked: !isLiked,
              votes_count: isLiked
                ? story.votes_count - 1
                : story.votes_count + 1,
            }
          : story
      );

    setStories(updateStoryList(stories));
    setFollowingStories(updateStoryList(followingStories));
    setTrendingStories(updateStoryList(trendingStories));
  };

  const handleSave = (storyId: string) => {
    const savedStories = JSON.parse(
      localStorage.getItem("saved_stories") || "[]"
    );
    const isSaved = savedStories.includes(storyId);

    if (isSaved) {
      const updated = savedStories.filter((id: string) => id !== storyId);
      localStorage.setItem("saved_stories", JSON.stringify(updated));
      setUserStats((prev) => ({
        ...prev,
        readingList: Math.max(0, prev.readingList - 1),
      }));
    } else {
      savedStories.push(storyId);
      localStorage.setItem("saved_stories", JSON.stringify(savedStories));
      setUserStats((prev) => ({
        ...prev,
        readingList: prev.readingList + 1,
      }));
    }

    const updateStoryList = (list: StoryPost[]) =>
      list.map((story) =>
        story.id === storyId ? { ...story, is_saved: !isSaved } : story
      );

    setStories(updateStoryList(stories));
    setFollowingStories(updateStoryList(followingStories));
    setTrendingStories(updateStoryList(trendingStories));

    addToast({
      title: isSaved ? "Removed from library" : "Added to library",
      description: isSaved ? "" : "Story saved to your reading list",
      type: "success",
    });
  };

  const StoryGridItem = ({ story }: { story: StoryPost }) => (
    <div className="group relative aspect-[4/5] overflow-hidden rounded-lg bg-gray-100 cursor-pointer">
      <Link to={`/stories/${story.id}`}>
        <img
          src={
            story.cover_image ||
            `https://source.unsplash.com/400x500/?book,${story.genre}`
          }
          alt={story.title}
          className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black/70" />
        <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity" />

        <div className="absolute inset-0 flex items-center justify-center gap-6 opacity-0 group-hover:opacity-100 transition-opacity">
          <div className="flex items-center gap-2 text-white">
            <Heart className="h-6 w-6 fill-white" />
            <span className="font-bold">{formatNumber(story.votes_count)}</span>
          </div>
          <div className="flex items-center gap-2 text-white">
            <Eye className="h-6 w-6 fill-white" />
            <span className="font-bold">{formatNumber(story.reads_count)}</span>
          </div>
        </div>

        <div className="absolute bottom-0 left-0 right-0 p-4 text-white">
          <Badge className="mb-2 bg-white/20 backdrop-blur-sm border-0">
            {story.genre}
          </Badge>
          <h3 className="font-bold text-sm line-clamp-2">{story.title}</h3>
          <p className="text-xs opacity-90 mt-1">
            by @{story.author?.username}
          </p>
        </div>
      </Link>
    </div>
  );

  const StoryListItem = ({ story }: { story: StoryPost }) => (
    <Card className="overflow-hidden">
      <div className="flex items-center justify-between p-3 border-b">
        <Link
          to={`/profile/${story.author?.username}`}
          className="flex items-center gap-3 hover:opacity-80 transition-opacity"
        >
          <Avatar className="h-8 w-8">
            <AvatarImage src={story.author?.profile_pic || undefined} />
            <AvatarFallback>
              {story.author?.username?.[0].toUpperCase()}
            </AvatarFallback>
          </Avatar>
          <div>
            <p className="font-semibold text-sm">{story.author?.username}</p>
            <p className="text-xs text-muted-foreground">
              {new Date(story.created_at).toLocaleDateString()}
            </p>
          </div>
        </Link>
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="ghost" size="sm" className="h-8 w-8 p-0">
              <MoreVertical className="h-4 w-4" />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end">
            <DropdownMenuItem>Share</DropdownMenuItem>
            <DropdownMenuItem>Copy Link</DropdownMenuItem>
            <DropdownMenuItem>Report</DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>

      <Link to={`/stories/${story.id}`}>
        <div className="relative aspect-[4/5]">
          <img
            src={
              story.cover_image ||
              `https://source.unsplash.com/600x750/?book,${story.genre}`
            }
            alt={story.title}
            className="h-full w-full object-cover"
          />
        </div>
      </Link>

      <div className="p-3 space-y-2">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <Button
              variant="ghost"
              size="sm"
              className="h-8 w-8 p-0"
              onClick={() => handleLike(story.id)}
            >
              <Heart
                className={cn(
                  "h-5 w-5",
                  story.is_liked && "fill-red-500 text-red-500"
                )}
              />
            </Button>
            <Button
              variant="ghost"
              size="sm"
              className="h-8 w-8 p-0"
              onClick={() => navigate(`/stories/${story.id}`)}
            >
              <MessageCircle className="h-5 w-5" />
            </Button>
            <Button variant="ghost" size="sm" className="h-8 w-8 p-0">
              <Share2 className="h-5 w-5" />
            </Button>
          </div>
          <Button
            variant="ghost"
            size="sm"
            className="h-8 w-8 p-0"
            onClick={() => handleSave(story.id)}
          >
            <Bookmark
              className={cn("h-5 w-5", story.is_saved && "fill-current")}
            />
          </Button>
        </div>

        <p className="text-sm font-semibold">
          {formatNumber(story.votes_count)} likes
        </p>

        <div>
          <h3 className="font-semibold">{story.title}</h3>
          <p className="text-sm text-muted-foreground line-clamp-2">
            {story.description}
          </p>
        </div>

        <div className="flex flex-wrap gap-1">
          {story.tags.slice(0, 3).map((tag, index) => (
            <span key={index} className="text-xs text-blue-600">
              #{tag}
            </span>
          ))}
        </div>
      </div>
    </Card>
  );

  const getCurrentStories = () => {
    switch (activeTab) {
      case "for-you":
        return stories;
      case "following":
        return followingStories;
      case "trending":
        return trendingStories;
      default:
        return stories;
    }
  };

  // Loading State
  if (isLoading) {
    return (
      <MainLayout>
        <FeedSkeleton />
      </MainLayout>
    );
  }

  return (
    <MainLayout showFooter={false}>
      <div className="max-w-6xl mx-auto px-4 py-6">
        <div className="flex items-center justify-between mb-6">
          <h1 className="text-2xl font-bold">Your Feed</h1>
          <div className="flex items-center gap-2">
            <div className="flex border rounded-lg">
              <Button
                variant={viewMode === "grid" ? "default" : "ghost"}
                size="sm"
                onClick={() => setViewMode("grid")}
                className="rounded-r-none"
              >
                <Grid3X3 className="h-4 w-4" />
              </Button>
              <Button
                variant={viewMode === "list" ? "default" : "ghost"}
                size="sm"
                onClick={() => setViewMode("list")}
                className="rounded-l-none"
              >
                <BookOpen className="h-4 w-4" />
              </Button>
            </div>

            <Button
              onClick={() => navigate("/stories/create")}
              className="gap-2"
            >
              <Plus className="h-4 w-4" />
              Create Story
            </Button>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
          <div className="lg:col-span-3">
            <Tabs value={activeTab} onValueChange={setActiveTab}>
              <TabsList className="w-full">
                <TabsTrigger value="for-you" className="flex-1">
                  For You
                </TabsTrigger>
                <TabsTrigger value="following" className="flex-1">
                  Following
                </TabsTrigger>
                <TabsTrigger value="trending" className="flex-1">
                  <TrendingUp className="h-4 w-4 mr-1" />
                  Trending
                </TabsTrigger>
              </TabsList>

              <div className="mt-6">
                {viewMode === "grid" ? (
                  <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                    {getCurrentStories().map((story) => (
                      <StoryGridItem key={story.id} story={story} />
                    ))}
                  </div>
                ) : (
                  <div className="space-y-4 max-w-xl mx-auto">
                    {getCurrentStories().map((story) => (
                      <StoryListItem key={story.id} story={story} />
                    ))}
                  </div>
                )}
              </div>
            </Tabs>
          </div>

          <div className="hidden lg:block space-y-4">
            {/* User Card */}
            <Card className="p-4">
              <Link
                to={`/profile/${user?.username}`}
                className="flex items-center gap-3"
              >
                <Avatar className="h-14 w-14">
                  <AvatarImage src={user?.profile_pic || undefined} />
                  <AvatarFallback>
                    {user?.username?.[0].toUpperCase()}
                  </AvatarFallback>
                </Avatar>
                <div className="flex-1">
                  <p className="font-semibold">{user?.username}</p>
                  <p className="text-sm text-muted-foreground">{user?.email}</p>
                </div>
              </Link>
              <Button
                variant="outline"
                className="w-full mt-4"
                onClick={() => navigate(`/profile/${user?.username}`)}
              >
                View Profile
              </Button>
            </Card>

            {/* Suggested Authors */}
            <Card className="p-4">
              <div className="flex items-center justify-between mb-4">
                <h3 className="font-semibold">Suggested Authors</h3>
                <Button
                  variant="link"
                  size="sm"
                  className="h-auto p-0"
                  onClick={() => navigate("/authors")}
                >
                  See All
                </Button>
              </div>
              <div className="space-y-3">
                {suggestedAuthors.map((author) => (
                  <div
                    key={author.id}
                    className="flex items-center justify-between"
                  >
                    <Link
                      to={`/profile/${author.username}`}
                      className="flex items-center gap-3 flex-1 min-w-0"
                    >
                      <Avatar className="h-8 w-8 flex-shrink-0">
                        <AvatarImage src={author.profile_pic || undefined} />
                        <AvatarFallback>
                          {author.username[0].toUpperCase()}
                        </AvatarFallback>
                      </Avatar>
                      <div className="min-w-0 flex-1">
                        <p className="text-sm font-medium truncate">
                          @{author.username}
                        </p>
                        <p className="text-xs text-muted-foreground">
                          {formatNumber(author.followers_count)} followers •{" "}
                          {author.stories_count} stories
                        </p>
                      </div>
                    </Link>
                    <Button
                      variant={
                        followingStatus[author.id] ? "secondary" : "outline"
                      }
                      size="sm"
                      className="ml-2 flex-shrink-0"
                      onClick={() => handleFollowAuthor(author)}
                    >
                      {followingStatus[author.id] ? (
                        <>
                          <Check className="h-3 w-3 mr-1" />
                          Following
                        </>
                      ) : (
                        "Follow"
                      )}
                    </Button>
                  </div>
                ))}
              </div>
            </Card>

            {/* User Stats */}
            <Card className="p-4">
              <h3 className="font-semibold mb-4">Your Stats</h3>
              <div className="space-y-3">
                <div className="flex justify-between">
                  <span className="text-sm text-muted-foreground">
                    Stories Read
                  </span>
                  <span className="font-medium">{userStats.storiesRead}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-sm text-muted-foreground">
                    Reading List
                  </span>
                  <span className="font-medium">{userStats.readingList}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-sm text-muted-foreground">
                    Following
                  </span>
                  <span className="font-medium">{userStats.following}</span>
                </div>
                {userStats.readTime !== undefined && userStats.readTime > 0 && (
                  <div className="pt-3 border-t">
                    <div className="flex justify-between">
                      <span className="text-sm text-muted-foreground">
                        Total Read Time
                      </span>
                      <span className="font-medium">{userStats.readTime}h</span>
                    </div>
                    {userStats.favoriteGenre && (
                      <div className="flex justify-between mt-2">
                        <span className="text-sm text-muted-foreground">
                          Favorite Genre
                        </span>
                        <Badge variant="secondary">
                          {userStats.favoriteGenre}
                        </Badge>
                      </div>
                    )}
                  </div>
                )}
              </div>
            </Card>
          </div>
        </div>
      </div>
    </MainLayout>
  );
}
```

---

#### 📄 src\pages\HomePage.tsx
<a name='src-pages-HomePagetsx'></a>

**Path:** `src\pages\HomePage.tsx`

```tsx
"use client";

import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import {
  Sparkles,
  ArrowRight,
  BookOpen,
  PenTool,
  Heart,
  Eye,
  Star,
  Users,
  TrendingUp,
  Award,
  MessageCircle,
  ChevronRight,
  Feather,
  Coffee,
  Bookmark,
  Library,
  FileText,
  Glasses,
  Lamp,
  Trophy,
  Rocket,
  Scroll,
  Clock,
  Flame,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { StoryCard } from "@/components/ui/story-card";
import { StoryCardSkeleton } from "@/components/ui/story-card-skeleton";
import { Skeleton } from "@/components/ui/skeleton";
import { MainLayout } from "@/components/layout/main-layout";
import { useAuthStore } from "@/store/authStore";
import { Story } from "@/types";
import { storiesApi } from "@/apis";
import { cn } from "@/lib/utils";

// Literary color palette - warm and inviting
const literaryColors = {
  cream: "#FFF8E7",
  parchment: "#F4E8D0",
  coffee: "#6F4E37",
  ink: "#2C3E50",
  gold: "#D4A574",
  sage: "#87A96B",
  dustyRose: "#C08081",
  lavender: "#E6E6FA",
  mint: "#B5EAD7",
  peach: "#FFD3B6",
  skyBlue: "#A8DADC",
};

// Featured Authors with literary avatars
const featuredAuthors = [
  {
    id: 1,
    name: "Eleanor Whitmore",
    avatar:
      "https://api.dicebear.com/7.x/lorelei/svg?seed=Eleanor&backgroundColor=FFD3B6",
    genre: "Romance",
    stories: 47,
    followers: "15.2K",
    quote: "Every story begins with a single word...",
  },
  {
    id: 2,
    name: "Marcus Chen",
    avatar:
      "https://api.dicebear.com/7.x/lorelei/svg?seed=Marcus&backgroundColor=A8DADC",
    genre: "Mystery",
    stories: 32,
    followers: "12.8K",
    quote: "In the shadows of words, truth emerges.",
  },
  {
    id: 3,
    name: "Isabella Rose",
    avatar:
      "https://api.dicebear.com/7.x/lorelei/svg?seed=Isabella&backgroundColor=E6E6FA",
    genre: "Fantasy",
    stories: 68,
    followers: "28.5K",
    quote: "Magic lives between the lines.",
  },
  {
    id: 4,
    name: "Thomas Blackwood",
    avatar:
      "https://api.dicebear.com/7.x/lorelei/svg?seed=Thomas&backgroundColor=B5EAD7",
    genre: "Thriller",
    stories: 29,
    followers: "9.7K",
    quote: "Every chapter holds a secret.",
  },
];

// Reading quotes
const inspiringQuotes = [
  {
    text: "A reader lives a thousand lives before he dies.",
    author: "George R.R. Martin",
  },
  { text: "Books are a uniquely portable magic.", author: "Stephen King" },
  {
    text: "There is no friend as loyal as a book.",
    author: "Ernest Hemingway",
  },
  { text: "Reading is dreaming with open eyes.", author: "Unknown" },
];

// Genre cards with unique shapes and colors
const genreCards = [
  {
    name: "Romance",
    icon: Heart,
    color: literaryColors.dustyRose,
    stories: "5.2K",
    shape: "rounded-[30px]",
  },
  {
    name: "Mystery",
    icon: Glasses,
    color: literaryColors.ink,
    stories: "3.8K",
    shape: "rounded-tl-[40px] rounded-br-[40px]",
  },
  {
    name: "Fantasy",
    icon: Sparkles,
    color: literaryColors.lavender,
    stories: "7.1K",
    shape: "rounded-[20px_50px]",
  },
  {
    name: "Sci-Fi",
    icon: Rocket,
    color: literaryColors.skyBlue,
    stories: "2.9K",
    shape: "rounded-tr-[50px] rounded-bl-[50px]",
  },
  {
    name: "Poetry",
    icon: Feather,
    color: literaryColors.gold,
    stories: "1.5K",
    shape: "rounded-[40px_20px]",
  },
  {
    name: "Non-Fiction",
    icon: Library,
    color: literaryColors.sage,
    stories: "4.3K",
    shape: "rounded-[25px]",
  },
];

export function HomePage() {
  const { isAuthenticated, user } = useAuthStore();
  const [featuredStories, setFeaturedStories] = useState<Story[]>([]);
  const [trendingStories, setTrendingStories] = useState<Story[]>([]);
  const [newStories, setNewStories] = useState<Story[]>([]);
  const [popularStories, setPopularStories] = useState<Story[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [currentQuote, setCurrentQuote] = useState(0);
  const [hoveredGenre, setHoveredGenre] = useState<string | null>(null);

  // Rotate quotes
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentQuote((prev) => (prev + 1) % inspiringQuotes.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const fetchHomeData = async () => {
      try {
        const [
          featuredResponse,
          trendingResponse,
          newResponse,
          popularResponse,
        ] = await Promise.all([
          storiesApi.getStories({ page: 1, limit: 6, sort: "popular" }),
          storiesApi.getStories({ page: 1, limit: 12, sort: "trending" }),
          storiesApi.getStories({ page: 1, limit: 8, sort: "latest" }),
          storiesApi.getStories({ page: 1, limit: 4, sort: "popular" }),
        ]);

        setFeaturedStories(featuredResponse.items);
        setTrendingStories(trendingResponse.items);
        setNewStories(newResponse.items);
        setPopularStories(popularResponse.items);
      } catch (error) {
        console.error("Failed to fetch home data:", error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchHomeData();
  }, []);

  // Loading State
  if (isLoading) {
    return (
      <MainLayout>
        <div
          className="min-h-screen"
          style={{ backgroundColor: literaryColors.cream }}
        >
          {/* Hero Section Skeleton */}
          <section className="relative overflow-hidden py-12 sm:py-16 md:py-20 px-4 sm:px-6 md:px-8">
            <div className="relative z-10 max-w-7xl mx-auto text-center">
              <Skeleton className="h-8 w-48 mx-auto mb-6" variant="rounded" />
              <Skeleton className="h-16 w-3/4 mx-auto mb-4" variant="text" />
              <Skeleton className="h-6 w-1/2 mx-auto mb-8" variant="text" />
              <div className="flex justify-center gap-4 mb-12">
                <Skeleton className="h-12 w-40" variant="rounded" />
                <Skeleton className="h-12 w-32" variant="rounded" />
              </div>
              {/* Stats Skeleton */}
              <div className="grid grid-cols-3 gap-4 sm:gap-6 md:gap-8 max-w-sm sm:max-w-md md:max-w-none mx-auto">
                <div className="text-center">
                  <Skeleton className="h-10 w-24 mx-auto mb-2" variant="text" />
                  <Skeleton className="h-4 w-20 mx-auto" variant="text" />
                </div>
                <div className="text-center">
                  <Skeleton className="h-10 w-24 mx-auto mb-2" variant="text" />
                  <Skeleton className="h-4 w-20 mx-auto" variant="text" />
                </div>
                <div className="text-center">
                  <Skeleton className="h-10 w-24 mx-auto mb-2" variant="text" />
                  <Skeleton className="h-4 w-20 mx-auto" variant="text" />
                </div>
              </div>
            </div>
          </section>

          {/* Featured Stories Skeleton */}
          <section className="py-12 sm:py-16 md:py-20 px-4 sm:px-6 md:px-8">
            <div className="max-w-7xl mx-auto">
              <div className="text-center mb-8 sm:mb-10 md:mb-12">
                <Skeleton className="h-8 w-64 mx-auto mb-4" variant="text" />
                <Skeleton className="h-5 w-96 mx-auto" variant="text" />
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 md:gap-8">
                {Array.from({ length: 6 }).map((_, index) => (
                  <StoryCardSkeleton key={index} variant="default" />
                ))}
              </div>
            </div>
          </section>

          {/* Genre Discovery Skeleton */}
          <section className="py-12 sm:py-16 md:py-20 px-4 sm:px-6 md:px-8">
            <div className="max-w-7xl mx-auto">
              <div className="text-center mb-8 sm:mb-10 md:mb-12">
                <Skeleton className="h-8 w-64 mx-auto mb-4" variant="text" />
                <Skeleton className="h-5 w-80 mx-auto" variant="text" />
              </div>
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-3 lg:grid-cols-6 gap-3 sm:gap-4 md:gap-6">
                {Array.from({ length: 6 }).map((_, index) => (
                  <Skeleton
                    key={index}
                    className="h-32 rounded-lg"
                    variant="rounded"
                  />
                ))}
              </div>
            </div>
          </section>
        </div>
      </MainLayout>
    );
  }

  // Main Content (existing code continues here...)
  return (
    <MainLayout showFooter={true}>
      {/* Custom Literary Styles */}
      <style>{`
        @keyframes page-float {
          0%, 100% { transform: translateY(0) rotate(-2deg); }
          50% { transform: translateY(-20px) rotate(2deg); }
        }
        
        @keyframes quill-write {
          0%, 100% { transform: translateX(0) rotate(0deg); }
          50% { transform: translateX(10px) rotate(10deg); }
        }
        
        @keyframes fade-in-up {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        @keyframes text-glow {
          0%, 100% { text-shadow: 0 0 20px rgba(212, 165, 116, 0.5); }
          50% { text-shadow: 0 0 40px rgba(212, 165, 116, 0.8); }
        }
        
        .page-float { animation: page-float 6s ease-in-out infinite; }
        .quill-write { animation: quill-write 4s ease-in-out infinite; }
        .fade-in-up { animation: fade-in-up 0.8s ease-out; }
        .text-glow { animation: text-glow 3s ease-in-out infinite; }
        
        .paper-texture {
          background-image: 
            repeating-linear-gradient(
              90deg,
              transparent,
              transparent 2px,
              rgba(212, 165, 116, 0.03) 2px,
              rgba(212, 165, 116, 0.03) 4px
            ),
            repeating-linear-gradient(
              0deg,
              transparent,
              transparent 2px,
              rgba(212, 165, 116, 0.03) 2px,
              rgba(212, 165, 116, 0.03) 4px
            );
        }
        
        .book-shadow {
          box-shadow: 
            0 2px 4px rgba(111, 78, 55, 0.1),
            0 8px 16px rgba(111, 78, 55, 0.1),
            0 16px 32px rgba(111, 78, 55, 0.1);
        }
        
        .handwritten {
          font-family: 'Kalam', cursive;
        }
        
        .gold-ring {
          box-shadow: 0 0 0 4px ${literaryColors.gold}, 0 0 0 8px rgba(212, 165, 116, 0.3);
        }
      `}</style>

      {/* Add Google Font for handwritten style */}
      <link
        href="https://fonts.googleapis.com/css2?family=Kalam:wght@300;400;700&display=swap"
        rel="stylesheet"
      />

      <div
        className="min-h-screen"
        style={{ backgroundColor: literaryColors.cream }}
      >
        {/* Hero Section - Cozy Library Theme - MOBILE OPTIMIZED */}
        <section className="relative overflow-hidden py-12 sm:py-16 md:py-20 px-4 sm:px-6 md:px-8">
          {/* Floating background elements - Hidden on mobile for performance */}
          <div className="hidden sm:block absolute inset-0 overflow-hidden pointer-events-none">
            <div className="absolute top-10 left-10 w-32 h-40 bg-white/40 rounded-lg rotate-12 page-float" />
            <div
              className="absolute top-20 right-20 w-28 h-36 bg-white/30 rounded-lg -rotate-6 page-float"
              style={{ animationDelay: "2s" }}
            />
            <div
              className="absolute bottom-10 left-1/4 w-24 h-32 bg-white/35 rounded-lg rotate-3 page-float"
              style={{ animationDelay: "4s" }}
            />
            <Feather className="absolute top-1/3 right-10 h-20 w-20 text-amber-700/20 quill-write" />
            <BookOpen className="absolute bottom-20 right-1/3 h-24 w-24 text-amber-600/15 rotate-12" />
            <Coffee className="absolute top-1/2 left-10 h-16 w-16 text-amber-800/20" />
          </div>

          <div className="relative z-10 max-w-7xl mx-auto text-center">
            <div className="mb-4 sm:mb-6 md:mb-8">
              <Badge
                className="px-3 py-1 sm:px-4 sm:py-2 text-xs sm:text-sm font-medium rounded-full"
                style={{
                  backgroundColor: literaryColors.gold,
                  color: literaryColors.coffee,
                }}
              >
                <Sparkles className="h-3 w-3 sm:h-4 sm:w-4 mr-1.5 sm:mr-2" />
                Welcome to Your Literary Haven
              </Badge>
            </div>

            <h1
              className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-serif mb-4 sm:mb-6 fade-in-up leading-tight"
              style={{ color: literaryColors.coffee }}
            >
              Where Stories
              <span
                className="block text-glow mt-1 sm:mt-2"
                style={{ color: literaryColors.gold }}
              >
                Come to Life
              </span>
            </h1>

            <p
              className="text-base sm:text-lg md:text-xl lg:text-2xl mb-6 sm:mb-8 max-w-3xl mx-auto handwritten fade-in-up px-4"
              style={{ color: literaryColors.ink, animationDelay: "0.2s" }}
            >
              "{inspiringQuotes[currentQuote].text}"
              <span className="block text-xs sm:text-sm mt-2 font-serif">
                — {inspiringQuotes[currentQuote].author}
              </span>
            </p>

            <div
              className="flex flex-col gap-3 sm:flex-row sm:gap-4 justify-center mb-8 sm:mb-12 fade-in-up px-4"
              style={{ animationDelay: "0.4s" }}
            >
              {isAuthenticated ? (
                <>
                  <Button
                    size="default"
                    className="group px-6 py-5 sm:px-8 sm:py-6 text-base sm:text-lg rounded-full shadow-lg transform hover:scale-105 transition-all"
                    style={{
                      backgroundColor: literaryColors.coffee,
                      color: literaryColors.cream,
                    }}
                    asChild
                  >
                    <Link to="/stories">
                      <Library className="mr-2 sm:mr-3 h-4 w-4 sm:h-5 sm:w-5 group-hover:rotate-12 transition-transform" />
                      Explore Library
                    </Link>
                  </Button>
                  <Button
                    size="default"
                    variant="outline"
                    className="px-6 py-5 sm:px-8 sm:py-6 text-base sm:text-lg rounded-full border-2 transform hover:scale-105 transition-all"
                    style={{
                      borderColor: literaryColors.gold,
                      color: literaryColors.coffee,
                    }}
                    asChild
                  >
                    <Link to="/stories/create">
                      <PenTool className="mr-2 sm:mr-3 h-4 w-4 sm:h-5 sm:w-5" />
                      Start Writing
                    </Link>
                  </Button>
                </>
              ) : (
                <>
                  <Button
                    size="default"
                    className="group px-8 py-5 sm:px-10 sm:py-6 text-lg sm:text-xl rounded-full book-shadow transform hover:scale-105 transition-all"
                    style={{
                      backgroundColor: literaryColors.gold,
                      color: literaryColors.coffee,
                    }}
                    asChild
                  >
                    <Link to="/stories">
                      <BookOpen className="mr-2 sm:mr-3 h-5 w-5 sm:h-6 sm:w-6 group-hover:rotate-12 transition-transform" />
                      Start Reading Free
                    </Link>
                  </Button>
                  <Button
                    size="default"
                    variant="outline"
                    className="px-6 py-5 sm:px-8 sm:py-6 text-base sm:text-lg rounded-full border-2"
                    style={{
                      borderColor: literaryColors.coffee,
                      color: literaryColors.coffee,
                    }}
                    asChild
                  >
                    <Link to="/auth/signup">Join as Writer</Link>
                  </Button>
                </>
              )}
            </div>

            {/* Live Reading Stats - Mobile Optimized Grid */}
            <div
              className="grid grid-cols-3 gap-4 sm:gap-6 md:gap-8 max-w-sm sm:max-w-md md:max-w-none mx-auto fade-in-up"
              style={{ animationDelay: "0.6s" }}
            >
              <div className="text-center">
                <div
                  className="text-2xl sm:text-3xl md:text-4xl font-bold"
                  style={{ color: literaryColors.gold }}
                >
                  2.5M+
                </div>
                <div
                  className="text-xs sm:text-sm"
                  style={{ color: literaryColors.ink }}
                >
                  Pages Today
                </div>
              </div>
              <div className="text-center">
                <div
                  className="text-2xl sm:text-3xl md:text-4xl font-bold"
                  style={{ color: literaryColors.dustyRose }}
                >
                  850K+
                </div>
                <div
                  className="text-xs sm:text-sm"
                  style={{ color: literaryColors.ink }}
                >
                  Active Readers
                </div>
              </div>
              <div className="text-center">
                <div
                  className="text-2xl sm:text-3xl md:text-4xl font-bold"
                  style={{ color: literaryColors.sage }}
                >
                  125K+
                </div>
                <div
                  className="text-xs sm:text-sm"
                  style={{ color: literaryColors.ink }}
                >
                  Stories
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Featured Stories Section - Mobile Responsive */}
        {featuredStories.length > 0 && (
          <section
            className="py-12 sm:py-16 md:py-20 px-4 sm:px-6 md:px-8"
            style={{ backgroundColor: literaryColors.parchment }}
          >
            <div className="max-w-7xl mx-auto">
              <div className="text-center mb-8 sm:mb-10 md:mb-12">
                <Badge
                  className="mb-3 sm:mb-4 px-3 py-1 sm:px-4 sm:py-2 text-xs sm:text-sm rounded-full"
                  style={{
                    backgroundColor: literaryColors.gold,
                    color: literaryColors.coffee,
                  }}
                >
                  <Star className="h-3 w-3 sm:h-4 sm:w-4 mr-1.5 sm:mr-2" />
                  Editor's Choice
                </Badge>
                <h2
                  className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-serif mb-3 sm:mb-4"
                  style={{ color: literaryColors.coffee }}
                >
                  Featured Stories This Week
                </h2>
                <p
                  className="text-sm sm:text-base md:text-lg px-4"
                  style={{ color: literaryColors.ink }}
                >
                  Handpicked tales that will captivate your imagination
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 md:gap-8">
                {featuredStories.slice(0, 6).map((story, index) => (
                  <div
                    key={story.id}
                    className="group fade-in-up"
                    style={{ animationDelay: `${index * 0.1}s` }}
                  >
                    <Card className="overflow-hidden border-0 book-shadow hover:scale-105 transition-all duration-300">
                      <div className="aspect-[3/4] relative overflow-hidden">
                        <img
                          src={
                            story.cover_image ||
                            `https://source.unsplash.com/400x600/?book,library,${index}`
                          }
                          alt={story.title}
                          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
                        <div className="absolute top-4 left-4">
                          <Badge
                            className="text-xs"
                            style={{
                              backgroundColor: literaryColors.gold,
                              color: literaryColors.coffee,
                            }}
                          >
                            {story.genre}
                          </Badge>
                        </div>
                        <div className="absolute bottom-4 left-4 right-4 text-white">
                          <h3 className="text-lg sm:text-xl font-serif font-bold mb-2">
                            {story.title}
                          </h3>
                          <div className="flex items-center gap-3 text-xs sm:text-sm">
                            <span className="flex items-center gap-1">
                              <Eye className="h-3 w-3 sm:h-4 sm:w-4" />
                              {(story.reads_count / 1000).toFixed(1)}K
                            </span>
                            <span className="flex items-center gap-1">
                              <Heart className="h-3 w-3 sm:h-4 sm:w-4" />
                              {(story.votes_count / 1000).toFixed(1)}K
                            </span>
                          </div>
                        </div>
                      </div>
                    </Card>
                  </div>
                ))}
              </div>

              <div className="text-center mt-6 sm:mt-8">
                <Button
                  variant="outline"
                  className="rounded-full border-2 text-sm sm:text-base"
                  style={{
                    borderColor: literaryColors.gold,
                    color: literaryColors.coffee,
                  }}
                  asChild
                >
                  <Link to="/stories?sort=popular">
                    View All Featured Stories
                    <ChevronRight className="ml-1.5 sm:ml-2 h-3 w-3 sm:h-4 sm:w-4" />
                  </Link>
                </Button>
              </div>
            </div>
          </section>
        )}

        {/* Genre Discovery Section - Mobile Responsive */}
        <section className="py-12 sm:py-16 md:py-20 px-4 sm:px-6 md:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-8 sm:mb-10 md:mb-12">
              <h2
                className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-serif mb-3 sm:mb-4"
                style={{ color: literaryColors.coffee }}
              >
                Find Your Perfect Genre
              </h2>
              <p
                className="text-sm sm:text-base md:text-lg"
                style={{ color: literaryColors.ink }}
              >
                Every reader has a story waiting to be discovered
              </p>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-3 lg:grid-cols-6 gap-3 sm:gap-4 md:gap-6">
              {genreCards.map((genre) => {
                const Icon = genre.icon;
                return (
                  <Link
                    key={genre.name}
                    to={`/stories?genre=${genre.name}`}
                    className={cn(
                      "group cursor-pointer transform hover:scale-110 transition-all duration-300",
                      genre.shape
                    )}
                    onMouseEnter={() => setHoveredGenre(genre.name)}
                    onMouseLeave={() => setHoveredGenre(null)}
                  >
                    <Card
                      className={cn(
                        "p-3 sm:p-4 md:p-6 h-full border-0 text-center book-shadow",
                        genre.shape
                      )}
                      style={{
                        backgroundColor:
                          hoveredGenre === genre.name ? genre.color : "white",
                        transition: "all 0.3s ease",
                      }}
                    >
                      <Icon
                        className="h-6 w-6 sm:h-8 sm:w-8 md:h-10 md:w-10 mx-auto mb-2 sm:mb-3"
                        style={{
                          color:
                            hoveredGenre === genre.name ? "white" : genre.color,
                        }}
                      />
                      <h3
                        className="font-bold text-xs sm:text-sm mb-0.5 sm:mb-1"
                        style={{
                          color:
                            hoveredGenre === genre.name
                              ? "white"
                              : literaryColors.coffee,
                        }}
                      >
                        {genre.name}
                      </h3>
                      <p
                        className="text-[10px] sm:text-xs"
                        style={{
                          color:
                            hoveredGenre === genre.name
                              ? "rgba(255,255,255,0.8)"
                              : literaryColors.ink,
                        }}
                      >
                        {genre.stories} stories
                      </p>
                    </Card>
                  </Link>
                );
              })}
            </div>
          </div>
        </section>

        {/* Popular Stories Carousel - Mobile Responsive */}
        {popularStories.length > 0 && (
          <section
            className="py-12 sm:py-16 md:py-20 px-4 sm:px-6 md:px-8"
            style={{ backgroundColor: "white" }}
          >
            <div className="max-w-7xl mx-auto">
              <div className="flex items-center justify-between mb-8 sm:mb-10 md:mb-12">
                <div>
                  <h2
                    className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-serif flex items-center gap-2 sm:gap-3"
                    style={{ color: literaryColors.coffee }}
                  >
                    <Flame
                      className="h-6 w-6 sm:h-8 sm:w-8 md:h-10 md:w-10"
                      style={{ color: literaryColors.dustyRose }}
                    />
                    Most Popular Stories
                  </h2>
                  <p
                    className="mt-1 sm:mt-2 text-xs sm:text-sm md:text-base"
                    style={{ color: literaryColors.ink }}
                  >
                    All-time reader favorites
                  </p>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
                {popularStories.map((story, index) => (
                  <StoryCard key={story.id} story={story} variant="default" />
                ))}
              </div>
            </div>
          </section>
        )}

        {/* Trending Stories Section - Mobile Responsive */}
        {trendingStories.length > 0 && (
          <section
            className="py-12 sm:py-16 md:py-20 px-4 sm:px-6 md:px-8"
            style={{ backgroundColor: literaryColors.parchment }}
          >
            <div className="max-w-7xl mx-auto">
              <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between mb-8 sm:mb-10 md:mb-12 gap-4">
                <div>
                  <h2
                    className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-serif flex items-center gap-2 sm:gap-3"
                    style={{ color: literaryColors.coffee }}
                  >
                    <TrendingUp
                      className="h-6 w-6 sm:h-8 sm:w-8 md:h-10 md:w-10"
                      style={{ color: literaryColors.sage }}
                    />
                    Trending This Week
                  </h2>
                  <p
                    className="mt-1 sm:mt-2 text-xs sm:text-sm md:text-base"
                    style={{ color: literaryColors.ink }}
                  >
                    Stories gaining momentum right now
                  </p>
                </div>
                <Button
                  variant="outline"
                  className="rounded-full border-2 text-xs sm:text-sm"
                  style={{
                    borderColor: literaryColors.sage,
                    color: literaryColors.coffee,
                  }}
                  asChild
                >
                  <Link to="/stories?sort=trending">
                    View All Trending
                    <ChevronRight className="ml-1.5 sm:ml-2 h-3 w-3 sm:h-4 sm:w-4" />
                  </Link>
                </Button>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-6">
                {trendingStories.slice(0, 8).map((story, index) => (
                  <Card
                    key={story.id}
                    className="group border-0 overflow-hidden book-shadow hover:scale-105 transition-all"
                  >
                    <Link to={`/stories/${story.id}`}>
                      <div
                        className="p-3 sm:p-4"
                        style={{ backgroundColor: "white" }}
                      >
                        <div className="flex items-start gap-2 sm:gap-3">
                          <span
                            className="text-lg sm:text-xl md:text-2xl font-bold"
                            style={{ color: literaryColors.sage }}
                          >
                            #{index + 1}
                          </span>
                          <div className="flex-1">
                            <h3
                              className="text-sm sm:text-base font-serif font-bold line-clamp-2 group-hover:text-primary transition-colors"
                              style={{ color: literaryColors.coffee }}
                            >
                              {story.title}
                            </h3>
                            <p
                              className="text-xs sm:text-sm mt-1 line-clamp-2"
                              style={{ color: literaryColors.ink }}
                            >
                              {story.description}
                            </p>
                            <div className="flex items-center gap-1.5 sm:gap-2 mt-2">
                              <Badge
                                variant="outline"
                                className="text-[10px] sm:text-xs"
                              >
                                {story.genre}
                              </Badge>
                              <span
                                className="text-[10px] sm:text-xs flex items-center gap-1"
                                style={{ color: literaryColors.ink }}
                              >
                                <Eye className="h-2.5 w-2.5 sm:h-3 sm:w-3" />
                                {(story.reads_count / 1000).toFixed(1)}K
                              </span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </Link>
                  </Card>
                ))}
              </div>
            </div>
          </section>
        )}

        {/* New Stories Section - Mobile Responsive */}
        {newStories.length > 0 && (
          <section className="py-12 sm:py-16 md:py-20 px-4 sm:px-6 md:px-8">
            <div className="max-w-7xl mx-auto">
              <div className="flex items-center justify-between mb-8 sm:mb-10 md:mb-12">
                <div>
                  <h2
                    className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-serif flex items-center gap-2 sm:gap-3"
                    style={{ color: literaryColors.coffee }}
                  >
                    <Sparkles
                      className="h-6 w-6 sm:h-8 sm:w-8 md:h-10 md:w-10"
                      style={{ color: literaryColors.lavender }}
                    />
                    Fresh Off the Press
                  </h2>
                  <p
                    className="mt-1 sm:mt-2 text-xs sm:text-sm md:text-base"
                    style={{ color: literaryColors.ink }}
                  >
                    Discover new stories published this week
                  </p>
                </div>
              </div>

              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-8 gap-3 sm:gap-4">
                {newStories.map((story, index) => (
                  <Link
                    key={story.id}
                    to={`/stories/${story.id}`}
                    className="group cursor-pointer fade-in-up"
                    style={{ animationDelay: `${index * 0.05}s` }}
                  >
                    <div className="aspect-[2/3] relative overflow-hidden rounded-lg book-shadow transform hover:scale-110 transition-all">
                      <img
                        src={
                          story.cover_image ||
                          `https://source.unsplash.com/200x300/?book,cover,${index}`
                        }
                        alt={story.title}
                        className="w-full h-full object-cover"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity">
                        <div className="absolute bottom-1.5 sm:bottom-2 left-1.5 sm:left-2 right-1.5 sm:right-2">
                          <p className="text-[10px] sm:text-xs text-white font-bold line-clamp-2">
                            {story.title}
                          </p>
                          <Badge
                            className="mt-0.5 sm:mt-1 text-[10px] sm:text-xs px-1.5 py-0"
                            style={{ backgroundColor: literaryColors.lavender }}
                          >
                            {story.genre}
                          </Badge>
                        </div>
                      </div>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          </section>
        )}

        {/* Reading Challenge Section - Mobile Responsive */}
        <section className="py-12 sm:py-16 md:py-20 px-4 sm:px-6 md:px-8">
          <div className="max-w-7xl mx-auto">
            <Card
              className="p-6 sm:p-8 md:p-12 border-0 paper-texture relative overflow-hidden"
              style={{ backgroundColor: literaryColors.lavender }}
            >
              <Bookmark className="absolute top-5 right-5 sm:top-10 sm:right-10 h-20 w-20 sm:h-32 sm:w-32 opacity-10 -rotate-12" />
              <div className="relative z-10 text-center">
                <h2
                  className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-serif mb-3 sm:mb-4"
                  style={{ color: literaryColors.coffee }}
                >
                  Join the Monthly Reading Challenge
                </h2>
                <p
                  className="text-sm sm:text-base md:text-lg mb-6 sm:mb-8 max-w-2xl mx-auto px-4"
                  style={{ color: literaryColors.ink }}
                >
                  Read 10 stories this month and earn exclusive badges, unlock
                  special features, and join our community of passionate
                  readers!
                </p>
                <Button
                  size="default"
                  className="rounded-full px-6 py-5 sm:px-8 sm:py-6 text-base sm:text-lg book-shadow"
                  style={{
                    backgroundColor: literaryColors.coffee,
                    color: literaryColors.cream,
                  }}
                >
                  <Trophy className="mr-2 sm:mr-3 h-4 w-4 sm:h-5 sm:w-5" />
                  Start Challenge
                </Button>
              </div>
            </Card>
          </div>
        </section>

        {/* Final CTA - Mobile Responsive */}
        <section className="py-16 sm:py-24 md:py-32 px-4 sm:px-6 md:px-8 relative overflow-hidden">
          <div className="absolute inset-0">
            <div
              className="absolute inset-0"
              style={{
                background: `linear-gradient(135deg, ${literaryColors.gold}20, ${literaryColors.dustyRose}20, ${literaryColors.lavender}20)`,
              }}
            />
          </div>

          <div className="relative z-10 max-w-4xl mx-auto text-center">
            <BookOpen
              className="h-12 w-12 sm:h-16 sm:w-16 md:h-20 md:w-20 mx-auto mb-6 sm:mb-8 text-glow"
              style={{ color: literaryColors.gold }}
            />
            <h2
              className="text-2xl sm:text-3xl md:text-5xl lg:text-6xl font-serif mb-4 sm:mb-6 px-4"
              style={{ color: literaryColors.coffee }}
            >
              Your Next Great Story Awaits
            </h2>
            <p
              className="text-base sm:text-lg md:text-xl mb-6 sm:mb-8 md:mb-10 handwritten px-4"
              style={{ color: literaryColors.ink }}
            >
              "The journey of a thousand pages begins with a single click"
            </p>
            <Button
              size="default"
              className="px-8 py-5 sm:px-10 sm:py-6 md:px-12 md:py-7 text-base sm:text-lg md:text-xl rounded-full book-shadow transform hover:scale-105 transition-all"
              style={{
                backgroundColor: literaryColors.coffee,
                color: literaryColors.cream,
              }}
              asChild
            >
              <Link to="/stories">
                <Sparkles className="mr-2 sm:mr-3 h-4 w-4 sm:h-5 sm:w-5 md:h-6 md:w-6" />
                Begin Your Journey
              </Link>
            </Button>
          </div>
        </section>
      </div>
    </MainLayout>
  );
}
```

---

#### 📄 src\pages\Index.tsx
<a name='src-pages-Indextsx'></a>

**Path:** `src\pages\Index.tsx`

```tsx
// Update this page (the content is just a fallback if you fail to update the page)

const Index = () => {
  return (
    <div className="flex min-h-screen items-center justify-center bg-background">
      <div className="text-center">
        <h1 className="mb-4 text-4xl font-bold">Welcome to Your Blank App</h1>
        <p className="text-xl text-muted-foreground">Start building your amazing project here!</p>
      </div>
    </div>
  );
};

export default Index;
```

---

#### 📄 src\pages\NotFound.tsx
<a name='src-pages-NotFoundtsx'></a>

**Path:** `src\pages\NotFound.tsx`

```tsx
import { useLocation } from "react-router-dom";
import { useEffect } from "react";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error("404 Error: User attempted to access non-existent route:", location.pathname);
  }, [location.pathname]);

  return (
    <div className="flex min-h-screen items-center justify-center bg-gray-100">
      <div className="text-center">
        <h1 className="mb-4 text-4xl font-bold">404</h1>
        <p className="mb-4 text-xl text-gray-600">Oops! Page not found</p>
        <a href="/" className="text-blue-500 underline hover:text-blue-700">
          Return to Home
        </a>
      </div>
    </div>
  );
};

export default NotFound;
```

---

#### 📄 src\pages\ProfilePage.tsx
<a name='src-pages-ProfilePagetsx'></a>

**Path:** `src\pages\ProfilePage.tsx`

```tsx
"use client";

import { useState, useEffect, useCallback } from "react";
import { ProfileSkeleton } from "@/components/ui/profile-skeleton";
import { useParams, Link, useNavigate } from "react-router-dom";
import {
  Grid3X3,
  Bookmark,
  Settings,
  MoreHorizontal,
  Plus,
  Check,
  Camera,
  X,
  Trash2,
  Upload,
  User as UserIcon,
  Edit2,
  MapPin,
  Calendar,
  Link as LinkIcon,
  BookOpen,
  Lock,
  ZoomIn,
  ZoomOut,
  RotateCw,
} from "lucide-react";
import Cropper from "react-easy-crop";
import type { Area, Point } from "react-easy-crop";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { MainLayout } from "@/components/layout/main-layout";
import { LoadingSpinner } from "@/components/ui/loading-spinner";
import { useAuthStore } from "@/store/authStore";
import { Story, User } from "@/types";
import { storiesApi, usersApi } from "@/apis";
import { UserController } from "@/controllers/userController";
import { useUiStore } from "@/store/uiStore";
import { formatDate, formatNumber } from "@/helper/formatting";
import { cn } from "@/lib/utils";

interface ProfileStats {
  totalReads: number;
  totalLikes: number;
  avgReadsPerStory: number;
}

export function ProfilePage() {
  const { username } = useParams<{ username: string }>();
  const navigate = useNavigate();
  const { user, isAuthenticated, updateUser } = useAuthStore();
  const { addToast } = useUiStore();

  const [profileUser, setProfileUser] = useState<User | null>(null);
  const [userStories, setUserStories] = useState<Story[]>([]);
  const [savedStories, setSavedStories] = useState<Story[]>([]);
  const [profileStats, setProfileStats] = useState<ProfileStats>({
    totalReads: 0,
    totalLikes: 0,
    avgReadsPerStory: 0,
  });
  const [isLoading, setIsLoading] = useState(true);
  const [isFollowing, setIsFollowing] = useState(false);
  const [activeTab, setActiveTab] = useState("stories");
  const [editDialogOpen, setEditDialogOpen] = useState(false);
  const [isUpdatingProfile, setIsUpdatingProfile] = useState(false);

  // Edit form state
  const [editForm, setEditForm] = useState({
    username: "",
    email: "",
    bio: "",
    website: "",
    location: "",
  });
  const [newProfilePic, setNewProfilePic] = useState<File | null>(null);
  const [profilePicPreview, setProfilePicPreview] = useState<string>("");

  // Cropper state
  const [showCropper, setShowCropper] = useState(false);
  const [imageToCrop, setImageToCrop] = useState<string>("");
  const [crop, setCrop] = useState<Point>({ x: 0, y: 0 });
  const [zoom, setZoom] = useState(1);
  const [rotation, setRotation] = useState(0);
  const [croppedAreaPixels, setCroppedAreaPixels] = useState<Area | null>(null);

  const isOwnProfile = user?.username === username;

  useEffect(() => {
    if (username) {
      fetchProfileData();
    }
  }, [username]);

  const fetchProfileData = async () => {
    if (!username) return;

    try {
      setIsLoading(true);

      // Get user data
      let userData: User;
      if (isOwnProfile && user) {
        userData = user;
      } else {
        try {
          userData = await usersApi.getUserByUsername(username);
        } catch (error) {
          // Create mock user if API fails
          userData = {
            id: username,
            username: username,
            email: `${username}@storivault.com`,
            bio: "📚 Passionate storyteller | ✍️ Creating worlds with words",
            profile_pic: `https://api.dicebear.com/7.x/avataaars/svg?seed=${username}`,
            followers_count: Math.floor(Math.random() * 10000),
            following_count: Math.floor(Math.random() * 1000),
            stories_count: 0,
            created_at: new Date().toISOString(),
            updated_at: new Date().toISOString(),
          };
        }
      }
      setProfileUser(userData);

      // Initialize edit form
      if (isOwnProfile) {
        setEditForm({
          username: userData.username,
          email: userData.email,
          bio: userData.bio || "",
          website: "",
          location: "",
        });
        if (userData.profile_pic) {
          setProfilePicPreview(userData.profile_pic);
        }
      }

      // Check if following
      if (!isOwnProfile && isAuthenticated) {
        const followingList = JSON.parse(
          localStorage.getItem("following_users") || "[]"
        );
        setIsFollowing(followingList.includes(userData.id));
      }

      // Fetch user's stories
      const storiesResponse = await storiesApi.getStories({
        page: 1,
        limit: 100,
        sort: "latest",
      });

      // Filter stories - FIXED to show private stories to owner
      const filteredStories = storiesResponse.items.filter((story) => {
        // Check if this is the user's story
        if (story.author_id !== userData.id) {
          return false;
        }

        // If it's the owner viewing their own profile, show all stories
        if (isOwnProfile) {
          return true;
        }

        // For other viewers, only show public stories
        return story.visibility === "public";
      });

      setUserStories(filteredStories);

      // Calculate stats (only for public stories if not own profile)
      const statsStories = isOwnProfile
        ? filteredStories
        : filteredStories.filter((s) => s.visibility === "public");

      const totalReads = statsStories.reduce(
        (sum, story) => sum + story.reads_count,
        0
      );
      const totalLikes = statsStories.reduce(
        (sum, story) => sum + story.votes_count,
        0
      );
      const avgReads =
        statsStories.length > 0
          ? Math.round(totalReads / statsStories.length)
          : 0;

      setProfileStats({
        totalReads,
        totalLikes,
        avgReadsPerStory: avgReads,
      });

      setProfileUser((prev) =>
        prev
          ? {
              ...prev,
              stories_count: filteredStories.filter(
                (s) => s.visibility === "public"
              ).length,
            }
          : null
      );

      // Fetch saved stories for own profile
      if (isOwnProfile) {
        await fetchSavedStories();
      }
    } catch (error) {
      console.error("Failed to fetch profile:", error);
      addToast({
        title: "Error",
        description: "Failed to load profile data",
        type: "error",
      });
    } finally {
      setIsLoading(false);
    }
  };

  const fetchSavedStories = async () => {
    try {
      const savedIds = JSON.parse(
        localStorage.getItem("saved_stories") || "[]"
      );

      if (savedIds.length === 0) {
        setSavedStories([]);
        return;
      }

      const stories: Story[] = [];
      const allStoriesRes = await storiesApi.getStories({ limit: 100 });

      for (const story of allStoriesRes.items) {
        if (savedIds.includes(story.id)) {
          stories.push(story);
        }
      }

      setSavedStories(stories);
    } catch (error) {
      console.error("Failed to fetch saved stories:", error);
    }
  };

  const handleFollowToggle = async () => {
    if (!profileUser) return;

    try {
      const followingUsers = JSON.parse(
        localStorage.getItem("following_users") || "[]"
      );

      if (isFollowing) {
        // Unfollow
        const updated = followingUsers.filter(
          (id: string) => id !== profileUser.id
        );
        localStorage.setItem("following_users", JSON.stringify(updated));
        await usersApi.unfollowUser(profileUser.username);
        setIsFollowing(false);
        setProfileUser((prev) =>
          prev
            ? {
                ...prev,
                followers_count: Math.max(0, prev.followers_count - 1),
              }
            : null
        );
      } else {
        // Follow
        followingUsers.push(profileUser.id);
        localStorage.setItem("following_users", JSON.stringify(followingUsers));
        await usersApi.followUser(profileUser.username);
        setIsFollowing(true);
        setProfileUser((prev) =>
          prev
            ? {
                ...prev,
                followers_count: prev.followers_count + 1,
              }
            : null
        );
      }

      addToast({
        title: isFollowing ? "Unfollowed" : "Following",
        description: isFollowing
          ? `You unfollowed @${profileUser.username}`
          : `You are now following @${profileUser.username}`,
        type: "success",
      });
    } catch (error) {
      addToast({
        title: "Error",
        description: "Failed to update follow status",
        type: "error",
      });
    }
  };

  const onCropComplete = useCallback(
    (croppedArea: Area, croppedAreaPixels: Area) => {
      setCroppedAreaPixels(croppedAreaPixels);
    },
    []
  );

  const createImage = (url: string): Promise<HTMLImageElement> =>
    new Promise((resolve, reject) => {
      const image = new Image();
      image.addEventListener("load", () => resolve(image));
      image.addEventListener("error", (error) => reject(error));
      image.src = url;
    });

  const getCroppedImg = async (
    imageSrc: string,
    pixelCrop: Area,
    rotation = 0
  ): Promise<Blob> => {
    const image = await createImage(imageSrc);
    const canvas = document.createElement("canvas");
    const ctx = canvas.getContext("2d");

    if (!ctx) {
      throw new Error("No 2d context");
    }

    const maxSize = Math.max(image.width, image.height);
    const safeArea = 2 * ((maxSize / 2) * Math.sqrt(2));

    canvas.width = safeArea;
    canvas.height = safeArea;

    ctx.translate(safeArea / 2, safeArea / 2);
    ctx.rotate((rotation * Math.PI) / 180);
    ctx.translate(-safeArea / 2, -safeArea / 2);

    ctx.drawImage(
      image,
      safeArea / 2 - image.width * 0.5,
      safeArea / 2 - image.height * 0.5
    );

    const data = ctx.getImageData(0, 0, safeArea, safeArea);

    canvas.width = pixelCrop.width;
    canvas.height = pixelCrop.height;

    ctx.putImageData(
      data,
      Math.round(0 - safeArea / 2 + image.width * 0.5 - pixelCrop.x),
      Math.round(0 - safeArea / 2 + image.height * 0.5 - pixelCrop.y)
    );

    return new Promise((resolve) => {
      canvas.toBlob((blob) => {
        resolve(blob!);
      }, "image/jpeg");
    });
  };

  const handleProfilePicSelect = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      if (file.size > 5 * 1024 * 1024) {
        addToast({
          title: "File too large",
          description: "Profile picture must be less than 5MB",
          type: "error",
        });
        return;
      }

      const reader = new FileReader();
      reader.onloadend = () => {
        setImageToCrop(reader.result as string);
        setShowCropper(true);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleCropSave = async () => {
    if (!croppedAreaPixels || !imageToCrop) return;

    try {
      const croppedBlob = await getCroppedImg(
        imageToCrop,
        croppedAreaPixels,
        rotation
      );
      const croppedFile = new File([croppedBlob], "profile.jpg", {
        type: "image/jpeg",
      });

      setNewProfilePic(croppedFile);
      const reader = new FileReader();
      reader.onloadend = () => {
        setProfilePicPreview(reader.result as string);
      };
      reader.readAsDataURL(croppedFile);

      setShowCropper(false);
      setImageToCrop("");
      setCrop({ x: 0, y: 0 });
      setZoom(1);
      setRotation(0);
    } catch (error) {
      console.error("Error cropping image:", error);
      addToast({
        title: "Error",
        description: "Failed to crop image. Please try again.",
        type: "error",
      });
    }
  };

  const handleCropCancel = () => {
    setShowCropper(false);
    setImageToCrop("");
    setCrop({ x: 0, y: 0 });
    setZoom(1);
    setRotation(0);
  };

  const handleRemoveProfilePic = () => {
    setNewProfilePic(null);
    setProfilePicPreview("");
  };

  const handleUpdateProfile = async () => {
    try {
      setIsUpdatingProfile(true);

      // Upload new profile picture if selected
      if (newProfilePic) {
        const updatedUser = await UserController.uploadProfilePictureWithToast(
          newProfilePic
        );
        if (updatedUser) {
          setProfileUser(updatedUser);
          updateUser(updatedUser);
          setProfilePicPreview(updatedUser.profile_pic || "");
        }
      }

      // Update bio if changed
      const updates: any = {};
      if (editForm.bio !== profileUser?.bio) {
        updates.bio = editForm.bio || null;
      }

      // Remove profile pic if cleared
      if (!profilePicPreview && profileUser?.profile_pic) {
        updates.profile_pic = null;
      }

      if (Object.keys(updates).length > 0) {
        const updatedUser = await UserController.updateProfileWithToast(
          updates
        );
        if (updatedUser) {
          setProfileUser(updatedUser);
          updateUser(updatedUser);
        }
      }

      setEditDialogOpen(false);
      setNewProfilePic(null);

      addToast({
        title: "Profile updated!",
        description: "Your changes have been saved successfully.",
        type: "success",
      });
    } catch (error) {
      console.error("Failed to update profile:", error);
      addToast({
        title: "Update failed",
        description: "Failed to update your profile. Please try again.",
        type: "error",
      });
    } finally {
      setIsUpdatingProfile(false);
    }
  };

  const handleRemoveFromSaved = (storyId: string) => {
    const savedIds = JSON.parse(localStorage.getItem("saved_stories") || "[]");
    const updated = savedIds.filter((id: string) => id !== storyId);
    localStorage.setItem("saved_stories", JSON.stringify(updated));
    setSavedStories((prev) => prev.filter((s) => s.id !== storyId));

    addToast({
      title: "Removed from saved",
      description: "Story has been removed from your saved list",
      type: "success",
    });
  };

  if (isLoading) {
    return (
      <MainLayout>
        <ProfileSkeleton />
      </MainLayout>
    );
  }

  if (!profileUser) {
    return (
      <MainLayout>
        <div className="text-center py-12">
          <h2 className="text-2xl font-bold mb-2">User not found</h2>
          <p className="text-muted-foreground mb-4">This user doesn't exist</p>
          <Button onClick={() => navigate("/stories")}>Browse Stories</Button>
        </div>
      </MainLayout>
    );
  }

  // Count public and private stories
  const publicStories = userStories.filter((s) => s.visibility === "public");
  const privateStories = userStories.filter((s) => s.visibility === "private");

  return (
    <MainLayout showFooter={false}>
      <div className="max-w-5xl mx-auto px-4 py-8">
        {/* Profile Header */}
        <div className="flex flex-col md:flex-row items-start md:items-center gap-6 md:gap-8 mb-8">
          {/* Profile Picture */}
          <div className="flex-shrink-0">
            <Avatar className="h-28 w-28 sm:h-32 sm:w-32 md:h-40 md:w-40 border-4 border-gray-200 shadow-lg">
              <AvatarImage src={profileUser.profile_pic || undefined} />
              <AvatarFallback className="text-2xl md:text-3xl bg-gradient-to-br from-primary/20 to-primary/10">
                {profileUser.username?.[0].toUpperCase()}
              </AvatarFallback>
            </Avatar>
          </div>

          {/* Profile Info */}
          <div className="flex-1 w-full">
            {/* Username and Actions */}
            <div className="flex flex-col md:flex-row md:items-center gap-4 mb-4">
              <h1 className="text-xl sm:text-2xl font-medium">
                {profileUser.username}
              </h1>
              <div className="flex items-center gap-2">
                {isOwnProfile ? (
                  <>
                    <Button
                      variant="outline"
                      size="sm"
                      onClick={() => setEditDialogOpen(true)}
                      className="gap-1"
                    >
                      <Edit2 className="h-3 w-3" />
                      Edit Profile
                    </Button>
                    <Button
                      variant="outline"
                      size="icon"
                      className="h-8 w-8"
                      onClick={() => navigate("/settings")}
                    >
                      <Settings className="h-4 w-4" />
                    </Button>
                  </>
                ) : (
                  <>
                    <Button
                      onClick={handleFollowToggle}
                      variant={isFollowing ? "outline" : "default"}
                      size="sm"
                      className="gap-1"
                    >
                      {isFollowing ? (
                        <>
                          <Check className="h-3 w-3" />
                          Following
                        </>
                      ) : (
                        "Follow"
                      )}
                    </Button>
                    <Button variant="outline" size="sm">
                      Message
                    </Button>
                    <Button variant="outline" size="icon" className="h-8 w-8">
                      <MoreHorizontal className="h-4 w-4" />
                    </Button>
                  </>
                )}
              </div>
            </div>

            {/* Stats */}
            <div className="flex flex-col sm:flex-row items-center gap-2 sm:gap-6 mb-4 text-sm">
              <div className="text-center">
                <span className="font-semibold text-lg">
                  {publicStories.length}
                </span>
                <span className="text-gray-600 ml-1">
                  {publicStories.length === 1 ? "story" : "stories"}
                </span>
                {isOwnProfile && privateStories.length > 0 && (
                  <span className="text-gray-500 ml-2">
                    (+{privateStories.length} private)
                  </span>
                )}
              </div>
              <div className="flex flex-col sm:flex-row gap-2 sm:gap-4 w-full sm:w-auto">
                <button className="text-center hover:underline order-1 sm:order-1">
                  <span className="font-semibold text-base sm:text-lg">
                    {formatNumber(profileUser.followers_count)}
                  </span>
                  <span className="text-gray-600 ml-1 text-sm sm:text-base">
                    followers
                  </span>
                </button>
                <button className="text-center hover:underline order-2 sm:order-2">
                  <span className="font-semibold text-base sm:text-lg">
                    {formatNumber(profileUser.following_count)}
                  </span>
                  <span className="text-gray-600 ml-1 text-sm sm:text-base">
                    following
                  </span>
                </button>
              </div>
            </div>

            {/* Bio */}
            {profileUser.bio && (
              <div className="text-sm whitespace-pre-line text-gray-700">
                {profileUser.bio}
              </div>
            )}

            {/* Additional Stats */}
            <div className="flex items-center gap-4 mt-3 text-xs text-gray-500">
              <div className="flex items-center gap-1">
                <Calendar className="h-3 w-3" />
                Joined {formatDate(profileUser.created_at)}
              </div>
              {profileStats.totalReads > 0 && (
                <div className="flex items-center gap-1">
                  <Badge variant="secondary" className="text-xs">
                    {formatNumber(profileStats.totalReads)} total reads
                  </Badge>
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Tabs */}
        <Tabs value={activeTab} onValueChange={setActiveTab}>
          <TabsList className="w-full justify-start border-b rounded-none h-auto p-0 bg-transparent">
            <TabsTrigger
              value="stories"
              className="flex items-center gap-2 rounded-none border-b-2 border-transparent data-[state=active]:border-black pb-3"
            >
              <Grid3X3 className="h-4 w-4" />
              <span className="hidden sm:inline">STORIES</span>
              {isOwnProfile && privateStories.length > 0 && (
                <Badge variant="secondary" className="ml-1 text-xs">
                  {userStories.length}
                </Badge>
              )}
            </TabsTrigger>
            {isOwnProfile && (
              <TabsTrigger
                value="saved"
                className="flex items-center gap-2 rounded-none border-b-2 border-transparent data-[state=active]:border-black pb-3"
              >
                <Bookmark className="h-4 w-4" />
                <span className="hidden sm:inline">SAVED</span>
                {savedStories.length > 0 && (
                  <Badge variant="secondary" className="ml-1 text-xs">
                    {savedStories.length}
                  </Badge>
                )}
              </TabsTrigger>
            )}
          </TabsList>

          {/* Stories Tab */}
          <TabsContent value="stories" className="mt-6">
            {userStories.length === 0 ? (
              <div className="text-center py-12">
                <BookOpen className="h-12 w-12 mx-auto text-gray-300 mb-4" />
                <h3 className="text-lg font-medium mb-2">
                  {isOwnProfile ? "No stories yet" : "No published stories"}
                </h3>
                {isOwnProfile ? (
                  <>
                    <p className="text-muted-foreground mb-4">
                      Start sharing your stories with the world
                    </p>
                    <Button onClick={() => navigate("/stories/create")}>
                      <Plus className="h-4 w-4 mr-2" />
                      Create Your First Story
                    </Button>
                  </>
                ) : (
                  <p className="text-muted-foreground">
                    This user hasn't published any public stories yet
                  </p>
                )}
              </div>
            ) : (
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-1 md:gap-4">
                {userStories.map((story) => (
                  <Link
                    key={story.id}
                    to={`/stories/${story.id}`}
                    className="relative aspect-[4/5] group overflow-hidden rounded-sm md:rounded-lg bg-gray-100"
                  >
                    <img
                      src={
                        story.cover_image ||
                        `https://source.unsplash.com/400x500/?book,${story.genre}`
                      }
                      alt={story.title}
                      className="h-full w-full object-cover transition-transform group-hover:scale-110"
                    />
                    {/* Private indicator */}
                    {story.visibility === "private" && (
                      <div className="absolute top-2 left-2 bg-black/60 backdrop-blur-sm rounded px-2 py-1">
                        <Lock className="h-3 w-3 text-white inline mr-1" />
                        <span className="text-xs text-white">Private</span>
                      </div>
                    )}
                    <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                      <div className="text-white text-center px-2">
                        <p className="font-semibold text-xs sm:text-sm md:text-base line-clamp-2">
                          {story.title}
                        </p>
                        <p className="text-xs md:text-sm mt-1">
                          {story.visibility === "private"
                            ? "Private Story"
                            : `${formatNumber(story.reads_count)} reads`}
                        </p>
                      </div>
                    </div>
                  </Link>
                ))}
              </div>
            )}
          </TabsContent>

          {/* Saved Stories Tab */}
          {isOwnProfile && (
            <TabsContent value="saved" className="mt-6">
              {savedStories.length === 0 ? (
                <div className="text-center py-12">
                  <Bookmark className="h-12 w-12 mx-auto text-gray-300 mb-4" />
                  <h3 className="text-lg font-medium mb-2">No saved stories</h3>
                  <p className="text-gray-600 mb-4">
                    Stories you save will appear here
                  </p>
                  <Button
                    variant="outline"
                    onClick={() => navigate("/stories")}
                  >
                    Explore Stories
                  </Button>
                </div>
              ) : (
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-1 md:gap-4">
                  {savedStories.map((story) => (
                    <div key={story.id} className="relative group">
                      <Link
                        to={`/stories/${story.id}`}
                        className="relative aspect-[4/5] overflow-hidden rounded-sm md:rounded-lg bg-gray-100 block"
                      >
                        <img
                          src={
                            story.cover_image ||
                            `https://source.unsplash.com/400x500/?book,${story.genre}`
                          }
                          alt={story.title}
                          className="h-full w-full object-cover transition-transform group-hover:scale-110"
                        />
                        <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                          <div className="text-white text-center px-2">
                            <p className="font-semibold text-xs sm:text-sm md:text-base line-clamp-2">
                              {story.title}
                            </p>
                          </div>
                        </div>
                      </Link>
                      <Button
                        variant="ghost"
                        size="icon"
                        className="absolute top-2 right-2 h-6 w-6 bg-white/90 hover:bg-white opacity-0 group-hover:opacity-100 transition-opacity"
                        onClick={(e) => {
                          e.preventDefault();
                          handleRemoveFromSaved(story.id);
                        }}
                      >
                        <X className="h-3 w-3" />
                      </Button>
                    </div>
                  ))}
                </div>
              )}
            </TabsContent>
          )}
        </Tabs>

        {/* Floating Action Button for Creating Stories */}
        {isOwnProfile && (
          <Button
            className="fixed bottom-6 right-6 h-14 w-14 rounded-full shadow-lg bg-gradient-to-r from-orange-500 to-amber-500 hover:from-orange-600 hover:to-amber-600"
            size="icon"
            onClick={() => navigate("/stories/create")}
          >
            <Plus className="h-6 w-6" />
          </Button>
        )}
      </div>

      {/* Edit Profile Modal (unchanged) */}
      {editDialogOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
          {/* Backdrop */}
          <div
            className="absolute inset-0 bg-black/60 backdrop-blur-sm animate-in fade-in"
            onClick={() => setEditDialogOpen(false)}
          />

          {/* Modal */}
          <div className="relative w-full max-w-lg bg-white rounded-xl shadow-2xl overflow-hidden animate-in zoom-in-95 slide-in-from-bottom-2 duration-300">
            {/* Modal Header */}
            <div className="bg-gradient-to-r from-orange-500 to-amber-500 px-6 py-4">
              <div className="flex items-center justify-between">
                <h2 className="text-xl font-bold text-white">Edit Profile</h2>
                <Button
                  variant="ghost"
                  size="icon"
                  onClick={() => setEditDialogOpen(false)}
                  className="text-white hover:bg-white/20 rounded-full"
                >
                  <X className="h-5 w-5" />
                </Button>
              </div>
              <p className="text-white/90 text-sm mt-1">
                Update your profile information
              </p>
            </div>

            {/* Modal Content */}
            <div className="p-6 space-y-6 max-h-[70vh] overflow-y-auto">
              {/* Profile Picture Section */}
              <div className="flex flex-col items-center space-y-4">
                <div className="relative group">
                  <Avatar className="h-32 w-32 border-4 border-orange-200 shadow-lg">
                    <AvatarImage
                      src={
                        profilePicPreview ||
                        profileUser?.profile_pic ||
                        undefined
                      }
                    />
                    <AvatarFallback className="bg-gradient-to-br from-orange-400 to-amber-400 text-white text-3xl">
                      {editForm.username?.[0].toUpperCase() || (
                        <UserIcon className="h-12 w-12" />
                      )}
                    </AvatarFallback>
                  </Avatar>

                  <label className="absolute inset-0 flex items-center justify-center bg-black/60 rounded-full opacity-0 group-hover:opacity-100 transition-opacity cursor-pointer">
                    <Camera className="h-8 w-8 text-white" />
                    <input
                      type="file"
                      accept="image/*"
                      onChange={handleProfilePicSelect}
                      className="hidden"
                    />
                  </label>
                </div>

                {/* Action Buttons */}
                <div className="flex gap-2">
                  <label>
                    <Button
                      type="button"
                      variant="outline"
                      size="sm"
                      className="border-orange-200 hover:bg-orange-50"
                    >
                      <Upload className="h-4 w-4 mr-2" />
                      Upload Photo
                    </Button>
                    <input
                      type="file"
                      accept="image/*"
                      onChange={handleProfilePicSelect}
                      className="hidden"
                    />
                  </label>

                  {(profilePicPreview || profileUser?.profile_pic) && (
                    <Button
                      type="button"
                      variant="outline"
                      size="sm"
                      onClick={handleRemoveProfilePic}
                      className="border-red-200 hover:bg-red-50 text-red-600"
                    >
                      <Trash2 className="h-4 w-4 mr-2" />
                      Remove
                    </Button>
                  )}
                </div>

                {newProfilePic && (
                  <p className="text-xs text-green-600">
                    New photo selected. Click save to apply changes.
                  </p>
                )}
              </div>

              {/* Form Fields */}
              <div className="space-y-4">
                {/* Username Field (Read-only) */}
                <div className="space-y-2">
                  <Label
                    htmlFor="edit-username"
                    className="text-sm font-semibold text-gray-700"
                  >
                    Username
                  </Label>
                  <Input
                    id="edit-username"
                    value={editForm.username}
                    disabled
                    className="bg-gray-50 border-gray-200 text-gray-600 cursor-not-allowed"
                  />
                  <p className="text-xs text-gray-500">
                    Username cannot be changed
                  </p>
                </div>

                {/* Email Field (Read-only) */}
                <div className="space-y-2">
                  <Label
                    htmlFor="edit-email"
                    className="text-sm font-semibold text-gray-700"
                  >
                    Email Address
                  </Label>
                  <Input
                    id="edit-email"
                    type="email"
                    value={editForm.email}
                    disabled
                    className="bg-gray-50 border-gray-200 text-gray-600 cursor-not-allowed"
                  />
                  <p className="text-xs text-gray-500">
                    To change your email, go to account settings
                  </p>
                </div>

                {/* Bio Field */}
                <div className="space-y-2">
                  <Label
                    htmlFor="edit-bio"
                    className="text-sm font-semibold text-gray-700"
                  >
                    Bio
                  </Label>
                  <Textarea
                    id="edit-bio"
                    value={editForm.bio}
                    onChange={(e) =>
                      setEditForm({ ...editForm, bio: e.target.value })
                    }
                    placeholder="Tell the world about yourself..."
                    rows={4}
                    maxLength={160}
                    className="resize-none border-gray-200 focus:border-orange-400 focus:ring-orange-400"
                  />
                  <div className="flex justify-between">
                    <p className="text-xs text-gray-500">
                      Share your story, interests, or writing goals
                    </p>
                    <p
                      className={cn(
                        "text-xs font-medium",
                        editForm.bio.length > 140
                          ? "text-orange-500"
                          : "text-gray-500"
                      )}
                    >
                      {editForm.bio.length}/160
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Modal Footer */}
            <div className="border-t bg-gray-50 px-6 py-4">
              <div className="flex justify-end gap-3">
                <Button
                  variant="outline"
                  onClick={() => {
                    setEditDialogOpen(false);
                    setNewProfilePic(null);
                    setProfilePicPreview(profileUser?.profile_pic || "");
                    setEditForm({
                      username: profileUser?.username || "",
                      email: profileUser?.email || "",
                      bio: profileUser?.bio || "",
                      website: "",
                      location: "",
                    });
                  }}
                  disabled={isUpdatingProfile}
                  className="border-gray-300 hover:bg-gray-100"
                >
                  Cancel
                </Button>
                <Button
                  onClick={handleUpdateProfile}
                  disabled={isUpdatingProfile}
                  className="bg-gradient-to-r from-orange-500 to-amber-500 hover:from-orange-600 hover:to-amber-600 text-white"
                >
                  {isUpdatingProfile ? (
                    <>
                      <LoadingSpinner size="sm" className="mr-2" />
                      Saving...
                    </>
                  ) : (
                    <>
                      <Check className="h-4 w-4 mr-2" />
                      Save Changes
                    </>
                  )}
                </Button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Image Cropper Modal */}
      {showCropper && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
          {/* Backdrop */}
          <div
            className="absolute inset-0 bg-black/80 backdrop-blur-sm"
            onClick={handleCropCancel}
          />

          {/* Cropper Modal */}
          <div className="relative w-full max-w-3xl bg-white rounded-xl shadow-2xl overflow-hidden">
            {/* Header */}
            <div className="bg-gradient-to-r from-orange-500 to-amber-500 px-6 py-4">
              <div className="flex items-center justify-between">
                <h2 className="text-xl font-bold text-white">
                  Crop Profile Picture
                </h2>
                <Button
                  variant="ghost"
                  size="icon"
                  onClick={handleCropCancel}
                  className="text-white hover:bg-white/20 rounded-full"
                >
                  <X className="h-5 w-5" />
                </Button>
              </div>
              <p className="text-white/90 text-sm mt-1">
                Adjust the image to fit perfectly in your round profile picture
              </p>
            </div>

            {/* Cropper Area */}
            <div className="relative h-96 bg-gray-900">
              <Cropper
                image={imageToCrop}
                crop={crop}
                zoom={zoom}
                rotation={rotation}
                aspect={1}
                cropShape="round"
                showGrid={false}
                onCropChange={setCrop}
                onZoomChange={setZoom}
                onRotationChange={setRotation}
                onCropComplete={onCropComplete}
              />
            </div>

            {/* Controls */}
            <div className="bg-gray-50 px-6 py-4 space-y-4">
              {/* Zoom Control */}
              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <Label className="text-sm font-semibold flex items-center gap-2">
                    <ZoomIn className="h-4 w-4" />
                    Zoom
                  </Label>
                  <span className="text-sm text-gray-600">
                    {Math.round(zoom * 100)}%
                  </span>
                </div>
                <input
                  type="range"
                  min={1}
                  max={3}
                  step={0.1}
                  value={zoom}
                  onChange={(e) => setZoom(Number(e.target.value))}
                  className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-orange-500"
                />
              </div>

              {/* Rotation Control */}
              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <Label className="text-sm font-semibold flex items-center gap-2">
                    <RotateCw className="h-4 w-4" />
                    Rotation
                  </Label>
                  <span className="text-sm text-gray-600">{rotation}°</span>
                </div>
                <input
                  type="range"
                  min={0}
                  max={360}
                  step={1}
                  value={rotation}
                  onChange={(e) => setRotation(Number(e.target.value))}
                  className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-orange-500"
                />
              </div>
            </div>

            {/* Footer */}
            <div className="border-t bg-white px-6 py-4">
              <div className="flex justify-end gap-3">
                <Button
                  variant="outline"
                  onClick={handleCropCancel}
                  className="border-gray-300 hover:bg-gray-100"
                >
                  Cancel
                </Button>
                <Button
                  onClick={handleCropSave}
                  className="bg-gradient-to-r from-orange-500 to-amber-500 hover:from-orange-600 hover:to-amber-600 text-white"
                >
                  <Check className="h-4 w-4 mr-2" />
                  Apply Crop
                </Button>
              </div>
            </div>
          </div>
        </div>
      )}
    </MainLayout>
  );
}
```

---

#### 📄 src\pages\StoriesPage.tsx
<a name='src-pages-StoriesPagetsx'></a>

**Path:** `src\pages\StoriesPage.tsx`

```tsx
"use client";

import { useState, useEffect } from "react";
import { useSearchParams, Link } from "react-router-dom";
import {
  Search,
  Filter,
  Grid,
  List,
  BookOpen,
  Sparkles,
  TrendingUp,
  Award,
  Heart,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { StoryCard } from "@/components/ui/story-card";
import { StoryCardSkeleton } from "@/components/ui/story-card-skeleton";
import { Skeleton } from "@/components/ui/skeleton";
import { LoadingSpinner } from "@/components/ui/loading-spinner";
import { MainLayout } from "@/components/layout/main-layout";
import { Story, PaginatedResponse } from "@/types";
import { storiesApi } from "@/apis";
import { useAuthStore } from "@/store/authStore";
import { cn } from "@/lib/utils";

// Recommendation Card Skeleton
function RecommendationCardSkeleton() {
  return (
    <Card className="overflow-hidden">
      <Skeleton className="aspect-[3/4] w-full" />
      <div className="p-3 space-y-2">
        <Skeleton className="h-4 w-full" />
        <div className="flex justify-between">
          <Skeleton className="h-3 w-12" />
          <Skeleton className="h-3 w-12" />
        </div>
      </div>
    </Card>
  );
}

// Editor Pick Skeleton
function EditorPickSkeleton() {
  return (
    <div className="flex items-start gap-3 p-3">
      <Skeleton className="h-8 w-8" variant="circular" />
      <div className="flex-1 space-y-2">
        <Skeleton className="h-4 w-3/4" variant="text" />
        <Skeleton className="h-3 w-1/2" variant="text" />
        <div className="flex gap-2">
          <Skeleton className="h-5 w-16" variant="rounded" />
          <Skeleton className="h-3 w-20" variant="text" />
        </div>
      </div>
    </div>
  );
}

const genres = [
  "All",
  "Romance",
  "Fantasy",
  "Mystery",
  "Sci-Fi",
  "Horror",
  "Adventure",
  "Drama",
  "Comedy",
  "Thriller",
  "Historical",
];

const sortOptions = [
  { value: "latest", label: "Latest" },
  { value: "popular", label: "Popular" },
  { value: "trending", label: "Trending" },
];

export function StoriesPage() {
  const [searchParams, setSearchParams] = useSearchParams();
  const [stories, setStories] = useState<Story[]>([]);
  const [recommendedStories, setRecommendedStories] = useState<Story[]>([]);
  const [editorPicks, setEditorPicks] = useState<Story[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [isLoadingRecommendations, setIsLoadingRecommendations] =
    useState(true);
  const [pagination, setPagination] = useState<
    Pick<PaginatedResponse<any>, "total" | "page" | "limit">
  >({
    total: 0,
    page: 1,
    limit: 12,
  });

  const { isAuthenticated, user } = useAuthStore();

  // Filters from URL
  const searchQuery = searchParams.get("q") || "";
  const selectedGenre = searchParams.get("genre") || "All";
  const sortBy = searchParams.get("sort") || "latest";
  const currentPage = parseInt(searchParams.get("page") || "1");
  const viewMode = searchParams.get("view") || "grid";

  const [localSearch, setLocalSearch] = useState(searchQuery);

  const updateSearchParams = (updates: Record<string, string | null>) => {
    const newParams = new URLSearchParams(searchParams);

    Object.entries(updates).forEach(([key, value]) => {
      if (value === null || value === "") {
        newParams.delete(key);
      } else {
        newParams.set(key, value);
      }
    });

    // Reset page when filters change
    if (Object.keys(updates).some((key) => key !== "page")) {
      newParams.set("page", "1");
    }

    setSearchParams(newParams);
  };

  // Fetch recommendations
  const fetchRecommendations = async () => {
    setIsLoadingRecommendations(true);
    try {
      // Fetch personalized recommendations (based on user preferences if logged in)
      const [recommendedResponse, editorResponse] = await Promise.all([
        storiesApi.getStories({
          page: 1,
          limit: 6,
          sort: isAuthenticated ? "popular" : "trending",
        }),
        storiesApi.getStories({
          page: 1,
          limit: 3,
          sort: "popular",
        }),
      ]);

      setRecommendedStories(recommendedResponse.items);
      setEditorPicks(editorResponse.items);
    } catch (error) {
      console.error("Failed to fetch recommendations:", error);
    } finally {
      setIsLoadingRecommendations(false);
    }
  };

  const fetchStories = async () => {
    setIsLoading(true);
    try {
      let response: PaginatedResponse<Story>;

      if (searchQuery) {
        response = await storiesApi.searchStories({
          q: searchQuery,
          page: currentPage,
          limit: pagination.limit,
        });
      } else {
        response = await storiesApi.getStories({
          page: currentPage,
          limit: pagination.limit,
          genre: selectedGenre === "All" ? undefined : selectedGenre,
          sort: sortBy as any,
        });
      }

      setStories(response.items);
      setPagination({
        total: response.total,
        page: response.page,
        limit: response.limit,
      });
    } catch (error) {
      console.error("Failed to fetch stories:", error);
      setStories([]);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchStories();
  }, [searchQuery, selectedGenre, sortBy, currentPage]);

  useEffect(() => {
    fetchRecommendations();
  }, [isAuthenticated]);

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    updateSearchParams({ q: localSearch.trim() || null });
  };

  const handleGenreChange = (genre: string) => {
    updateSearchParams({ genre: genre === "All" ? null : genre });
  };

  const handleSortChange = (sort: string) => {
    updateSearchParams({ sort });
  };

  const handleViewModeChange = (mode: string) => {
    updateSearchParams({ view: mode });
  };

  const handlePageChange = (page: number) => {
    updateSearchParams({ page: page.toString() });
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const totalPages = Math.ceil(pagination.total / pagination.limit);

  return (
    <MainLayout>
      <div className="space-y-8 p-4">
        {/* Welcome Section for New Users */}
        {!isAuthenticated && !searchQuery && (
          <section className="max-w-7xl mx-auto">
            <Card className="bg-gradient-to-r from-amber-50 to-orange-50 border-0 shadow-lg">
              <CardContent className="p-8">
                <div className="flex flex-col md:flex-row items-center justify-between gap-6">
                  <div className="flex-1">
                    <h2 className="text-2xl font-bold text-gray-900 mb-2">
                      Welcome to StoriVault! 📚
                    </h2>
                    <p className="text-gray-700 mb-4">
                      Dive into thousands of amazing stories from talented
                      writers worldwide. Create your free account to save
                      favorites, follow authors, and share your own stories!
                    </p>
                    <div className="flex flex-wrap gap-3">
                      <Button asChild>
                        <Link to="/auth/signup">Create Free Account</Link>
                      </Button>
                      <Button variant="outline" asChild>
                        <Link to="/auth/login">Sign In</Link>
                      </Button>
                    </div>
                  </div>
                  <BookOpen className="h-24 w-24 text-orange-400 opacity-50" />
                </div>
              </CardContent>
            </Card>
          </section>
        )}

        {/* Recommendations Section - Show before main content */}
        {!searchQuery && (
          <section className="max-w-7xl mx-auto">
            <div className="mb-6">
              <h2 className="text-2xl font-bold flex items-center gap-2 mb-2">
                <Sparkles className="h-6 w-6 text-yellow-500" />
                {isAuthenticated ? "Recommended for You" : "Popular Right Now"}
              </h2>
              <p className="text-muted-foreground">
                {isAuthenticated
                  ? "Stories we think you'll love based on your reading history"
                  : "Trending stories loved by our community"}
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6 gap-4 mb-6">
              {isLoadingRecommendations
                ? // Skeleton loading for recommendations
                  Array.from({ length: 6 }).map((_, index) => (
                    <RecommendationCardSkeleton key={`rec-skeleton-${index}`} />
                  ))
                : recommendedStories.map((story) => (
                    <Card
                      key={story.id}
                      className="group hover:shadow-lg transition-all duration-300"
                    >
                      <Link to={`/stories/${story.id}`}>
                        <div className="aspect-[3/4] relative overflow-hidden rounded-t-lg">
                          <img
                            src={
                              story.cover_image ||
                              `https://source.unsplash.com/200x300/?book,${story.genre}`
                            }
                            alt={story.title}
                            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                          />
                          <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                          <Badge className="absolute top-2 right-2 bg-white/90">
                            {story.genre}
                          </Badge>
                          <div className="absolute bottom-2 left-2 right-2">
                            <h3 className="text-white font-semibold text-sm line-clamp-2">
                              {story.title}
                            </h3>
                          </div>
                        </div>
                        <div className="p-3">
                          <div className="flex items-center justify-between text-xs text-muted-foreground">
                            <span className="flex items-center gap-1">
                              <Heart className="h-3 w-3" />
                              {(story.votes_count / 1000).toFixed(1)}K
                            </span>
                            <span className="flex items-center gap-1">
                              <BookOpen className="h-3 w-3" />
                              {(story.reads_count / 1000).toFixed(1)}K
                            </span>
                          </div>
                        </div>
                      </Link>
                    </Card>
                  ))}
            </div>
          </section>
        )}

        {/* Editor's Picks - Sidebar style for desktop */}
        {!searchQuery && (
          <section className="max-w-7xl mx-auto">
            <Card className="bg-gradient-to-br from-purple-50 to-pink-50 border-0">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Award className="h-5 w-5 text-purple-600" />
                  Editor's Picks This Week
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                  {isLoadingRecommendations
                    ? // Skeleton loading for editor picks
                      Array.from({ length: 3 }).map((_, index) => (
                        <EditorPickSkeleton key={`editor-skeleton-${index}`} />
                      ))
                    : editorPicks.map((story, index) => (
                        <Link key={story.id} to={`/stories/${story.id}`}>
                          <div className="flex items-start gap-3 p-3 rounded-lg hover:bg-white/60 transition-colors">
                            <span className="text-2xl font-bold text-purple-600">
                              #{index + 1}
                            </span>
                            <div className="flex-1">
                              <h4 className="font-semibold text-sm line-clamp-2 hover:text-purple-600 transition-colors">
                                {story.title}
                              </h4>
                              <p className="text-xs text-muted-foreground mt-1">
                                by @{story.author_id.slice(0, 8)}
                              </p>
                              <div className="flex items-center gap-2 mt-2">
                                <Badge variant="outline" className="text-xs">
                                  {story.genre}
                                </Badge>
                                <span className="text-xs text-muted-foreground">
                                  {(story.reads_count / 1000).toFixed(1)}K reads
                                </span>
                              </div>
                            </div>
                          </div>
                        </Link>
                      ))}
                </div>
              </CardContent>
            </Card>
          </section>
        )}

        {/* Main Header and Search */}
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center gap-3 mb-2">
            <BookOpen className="h-8 w-8 text-primary" />
            <h1 className="text-3xl font-bold">
              {searchQuery
                ? `Search Results for "${searchQuery}"`
                : "Discover Stories"}
            </h1>
          </div>
          <p className="text-muted-foreground">
            {isLoading ? (
              <Skeleton className="h-4 w-32 inline-block" />
            ) : (
              <>
                {pagination.total}{" "}
                {pagination.total === 1 ? "story" : "stories"} found
              </>
            )}
          </p>
        </div>

        {/* Filters */}
        <div className="max-w-7xl mx-auto">
          <Card className="p-4">
            <div className="flex flex-col lg:flex-row gap-4">
              {/* Search */}
              <form onSubmit={handleSearch} className="flex-1 max-w-md">
                <div className="relative">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                  <Input
                    placeholder="Search stories, authors..."
                    value={localSearch}
                    onChange={(e) => setLocalSearch(e.target.value)}
                    className="pl-10"
                  />
                </div>
              </form>

              {/* Filters */}
              <div className="flex flex-wrap gap-3">
                {/* Genre Filter */}
                <Select value={selectedGenre} onValueChange={handleGenreChange}>
                  <SelectTrigger className="w-[140px]">
                    <SelectValue placeholder="Genre" />
                  </SelectTrigger>
                  <SelectContent>
                    {genres.map((genre) => (
                      <SelectItem key={genre} value={genre}>
                        {genre}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>

                {/* Sort Filter */}
                <Select value={sortBy} onValueChange={handleSortChange}>
                  <SelectTrigger className="w-[120px]">
                    <SelectValue placeholder="Sort by" />
                  </SelectTrigger>
                  <SelectContent>
                    {sortOptions.map((option) => (
                      <SelectItem key={option.value} value={option.value}>
                        {option.label}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>

                {/* View Mode */}
                <div className="flex border rounded-md">
                  <Button
                    variant={viewMode === "grid" ? "default" : "ghost"}
                    size="sm"
                    onClick={() => handleViewModeChange("grid")}
                    className="rounded-r-none"
                  >
                    <Grid className="h-4 w-4" />
                  </Button>
                  <Button
                    variant={viewMode === "list" ? "default" : "ghost"}
                    size="sm"
                    onClick={() => handleViewModeChange("list")}
                    className="rounded-l-none"
                  >
                    <List className="h-4 w-4" />
                  </Button>
                </div>
              </div>
            </div>

            {/* Active Filters */}
            <div className="flex flex-wrap gap-2 mt-4">
              {searchQuery && (
                <Badge variant="secondary" className="gap-1">
                  Search: {searchQuery}
                  <button
                    onClick={() => {
                      setLocalSearch("");
                      updateSearchParams({ q: null });
                    }}
                    className="ml-1 hover:text-destructive"
                  >
                    ×
                  </button>
                </Badge>
              )}
              {selectedGenre !== "All" && (
                <Badge variant="secondary" className="gap-1">
                  Genre: {selectedGenre}
                  <button
                    onClick={() => handleGenreChange("All")}
                    className="ml-1 hover:text-destructive"
                  >
                    ×
                  </button>
                </Badge>
              )}
              {sortBy !== "latest" && (
                <Badge variant="secondary" className="gap-1">
                  Sort: {sortOptions.find((opt) => opt.value === sortBy)?.label}
                  <button
                    onClick={() => handleSortChange("latest")}
                    className="ml-1 hover:text-destructive"
                  >
                    ×
                  </button>
                </Badge>
              )}
            </div>
          </Card>
        </div>

        {/* Content */}
        <div className="max-w-7xl mx-auto">
          {isLoading ? (
            <div
              className={cn(
                viewMode === "grid"
                  ? "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6"
                  : "space-y-4"
              )}
            >
              {/* Show skeleton cards while loading */}
              {Array.from({ length: 8 }).map((_, index) => (
                <StoryCardSkeleton
                  key={`skeleton-${index}`}
                  variant={viewMode === "list" ? "list" : "default"}
                />
              ))}
            </div>
          ) : stories.length === 0 ? (
            <Card className="text-center py-12">
              <CardContent>
                <BookOpen className="h-12 w-12 text-muted-foreground mx-auto mb-4" />
                <h3 className="text-lg font-semibold mb-2">No stories found</h3>
                <p className="text-muted-foreground mb-4">
                  Try adjusting your search or filter criteria to find more
                  stories.
                </p>
                {!isAuthenticated && (
                  <div>
                    <p className="text-sm text-muted-foreground mb-4">
                      Sign up to get personalized recommendations!
                    </p>
                    <Button asChild>
                      <Link to="/auth/signup">Create Free Account</Link>
                    </Button>
                  </div>
                )}
              </CardContent>
            </Card>
          ) : (
            <>
              {/* Stories Grid/List */}
              <div
                className={cn(
                  viewMode === "grid"
                    ? "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6"
                    : "space-y-4"
                )}
              >
                {stories.map((story) => (
                  <StoryCard
                    key={story.id}
                    story={story}
                    variant={viewMode === "list" ? "compact" : "default"}
                  />
                ))}
              </div>

              {/* Pagination */}
              {totalPages > 1 && (
                <div className="flex items-center justify-center gap-2 mt-8">
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={() => handlePageChange(currentPage - 1)}
                    disabled={currentPage <= 1}
                  >
                    Previous
                  </Button>

                  {Array.from({ length: Math.min(5, totalPages) }).map(
                    (_, i) => {
                      const page = Math.max(1, currentPage - 2) + i;
                      if (page > totalPages) return null;

                      return (
                        <Button
                          key={page}
                          variant={page === currentPage ? "default" : "outline"}
                          size="sm"
                          onClick={() => handlePageChange(page)}
                        >
                          {page}
                        </Button>
                      );
                    }
                  )}

                  <Button
                    variant="outline"
                    size="sm"
                    onClick={() => handlePageChange(currentPage + 1)}
                    disabled={currentPage >= totalPages}
                  >
                    Next
                  </Button>
                </div>
              )}
            </>
          )}
        </div>

        {/* Bottom CTA for non-authenticated users */}
        {!isAuthenticated && stories.length > 0 && (
          <section className="max-w-7xl mx-auto mt-12">
            <Card className="bg-gradient-to-r from-primary/10 to-accent/10 border-0">
              <CardContent className="p-8 text-center">
                <h3 className="text-2xl font-bold mb-2">
                  Want Personalized Recommendations?
                </h3>
                <p className="text-muted-foreground mb-4">
                  Join StoriVault to get story suggestions tailored to your
                  taste!
                </p>
                <Button size="lg" asChild>
                  <Link to="/auth/signup">Sign Up Free</Link>
                </Button>
              </CardContent>
            </Card>
          </section>
        )}
      </div>
    </MainLayout>
  );
}
```

---

#### 📄 src\pages\StoryDetailPage.tsx
<a name='src-pages-StoryDetailPagetsx'></a>

**Path:** `src\pages\StoryDetailPage.tsx`

```tsx
"use client";

import { useState, useEffect } from "react";
import { useParams, useNavigate, Link } from "react-router-dom";
import {
  BookOpen,
  Heart,
  Eye,
  Bookmark,
  Share2,
  ChevronLeft,
  MessageCircle,
  Calendar,
  Edit,
  Lock,
  Globe,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { MainLayout } from "@/components/layout/main-layout";
import { StoryDetailSkeleton } from "@/components/ui/story-detail-skeleton";
import { useAuthStore } from "@/store/authStore";
import { useUiStore } from "@/store/uiStore";
import { Story, User } from "@/types";
import { storiesApi, usersApi } from "@/apis";
import { formatNumber, formatDate } from "@/helper/formatting";
import { cn } from "@/lib/utils";

interface ExtendedAuthor extends User {
  is_following?: boolean;
  total_stories?: number;
  total_reads?: number;
}

export function StoryDetailPage() {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const { user, isAuthenticated } = useAuthStore();
  const { addToast } = useUiStore();

  // Story data states
  const [story, setStory] = useState<Story | null>(null);
  const [author, setAuthor] = useState<ExtendedAuthor | null>(null);
  const [relatedStories, setRelatedStories] = useState<Story[]>([]);

  // UI states
  const [isLoading, setIsLoading] = useState(true);
  const [isLiked, setIsLiked] = useState(false);
  const [isSaved, setIsSaved] = useState(false);
  const [isFollowing, setIsFollowing] = useState(false);

  // Is this the author's own story?
  const isOwnStory = user?.id === story?.author_id;

  useEffect(() => {
    if (!id) return;
    fetchStoryDetails();
    trackReadingHistory();
  }, [id]);

  const fetchStoryDetails = async () => {
    if (!id) return;

    try {
      setIsLoading(true);

      // Fetch story details
      const storyData = await storiesApi.getStory(id);

      // Check if story is private and user is not the owner
      if (
        storyData.visibility === "private" &&
        storyData.author_id !== user?.id
      ) {
        addToast({
          title: "Private Story",
          description: "This story is private and cannot be accessed",
          type: "error",
        });
        navigate("/stories");
        return;
      }

      setStory(storyData);

      // Fetch author details
      try {
        const authorData = await usersApi.getUserByUsername(
          storyData.author_id
        );
        const extendedAuthor: ExtendedAuthor = {
          ...authorData,
          total_stories: Math.floor(Math.random() * 50) + 5,
          total_reads: Math.floor(Math.random() * 100000) + 10000,
        };
        setAuthor(extendedAuthor);

        // Check following status
        const followingList = JSON.parse(
          localStorage.getItem("following_users") || "[]"
        );
        setIsFollowing(followingList.includes(authorData.id));
      } catch {
        // Create fallback author if API fails
        const fallbackAuthor: ExtendedAuthor = {
          id: storyData.author_id,
          username: `author_${storyData.author_id.slice(0, 8)}`,
          email: "",
          bio: "Storyteller",
          profile_pic: `https://api.dicebear.com/7.x/avataaars/svg?seed=${storyData.author_id}`,
          followers_count: 0,
          following_count: 0,
          stories_count: 1,
          created_at: new Date().toISOString(),
          updated_at: new Date().toISOString(),
          total_stories: 1,
          total_reads: storyData.reads_count,
        };
        setAuthor(fallbackAuthor);
      }

      // Check if user has liked/saved this story
      if (isAuthenticated && user) {
        const likedStories = JSON.parse(
          localStorage.getItem("liked_stories") || "[]"
        );
        const savedStories = JSON.parse(
          localStorage.getItem("saved_stories") || "[]"
        );
        setIsLiked(likedStories.includes(id));
        setIsSaved(savedStories.includes(id));
      }

      // Fetch related stories (only public ones)
      const relatedRes = await storiesApi.getStories({
        genre: storyData.genre,
        limit: 4,
      });
      setRelatedStories(
        relatedRes.items.filter((s) => s.id !== id && s.visibility === "public")
      );
    } catch (error) {
      console.error("Failed to fetch story details:", error);
      addToast({
        title: "Error",
        description: "Failed to load story details",
        type: "error",
      });
      navigate("/stories");
    } finally {
      setIsLoading(false);
    }
  };

  const trackReadingHistory = () => {
    if (!id) return;

    const readStories = JSON.parse(
      localStorage.getItem("read_stories") || "[]"
    );
    if (!readStories.includes(id)) {
      readStories.push(id);
      localStorage.setItem("read_stories", JSON.stringify(readStories));
    }
  };

  const handleFollow = async () => {
    if (!isAuthenticated || !author) {
      navigate("/auth/login");
      return;
    }

    const followingUsers = JSON.parse(
      localStorage.getItem("following_users") || "[]"
    );

    if (isFollowing) {
      const updated = followingUsers.filter((uid: string) => uid !== author.id);
      localStorage.setItem("following_users", JSON.stringify(updated));
      setAuthor({
        ...author,
        followers_count: Math.max(0, author.followers_count - 1),
      });
    } else {
      followingUsers.push(author.id);
      localStorage.setItem("following_users", JSON.stringify(followingUsers));
      setAuthor({
        ...author,
        followers_count: author.followers_count + 1,
      });
    }

    setIsFollowing(!isFollowing);
  };

  const handleLike = async () => {
    if (!isAuthenticated) {
      navigate("/auth/login");
      return;
    }

    const likedStories = JSON.parse(
      localStorage.getItem("liked_stories") || "[]"
    );

    if (isLiked) {
      const updated = likedStories.filter((sid: string) => sid !== id);
      localStorage.setItem("liked_stories", JSON.stringify(updated));
    } else {
      likedStories.push(id);
      localStorage.setItem("liked_stories", JSON.stringify(likedStories));
    }

    setIsLiked(!isLiked);
    if (story) {
      setStory({
        ...story,
        votes_count: isLiked ? story.votes_count - 1 : story.votes_count + 1,
      });
    }
  };

  const handleSave = async () => {
    if (!isAuthenticated) {
      navigate("/auth/login");
      return;
    }

    const savedStories = JSON.parse(
      localStorage.getItem("saved_stories") || "[]"
    );

    if (isSaved) {
      const updated = savedStories.filter((sid: string) => sid !== id);
      localStorage.setItem("saved_stories", JSON.stringify(updated));
    } else {
      savedStories.push(id);
      localStorage.setItem("saved_stories", JSON.stringify(savedStories));
    }

    setIsSaved(!isSaved);
  };

  const handleShare = async () => {
    if (navigator.share && story) {
      try {
        await navigator.share({
          title: story.title,
          text: story.description,
          url: window.location.href,
        });
      } catch (error) {
        // User cancelled
      }
    } else {
      navigator.clipboard.writeText(window.location.href);
      addToast({
        title: "Link copied!",
        description: "Story link copied to clipboard",
        type: "success",
      });
    }
  };

  if (isLoading) {
    return (
      <MainLayout>
        <StoryDetailSkeleton />
      </MainLayout>
    );
  }

  if (!story) {
    return (
      <MainLayout>
        <div className="text-center py-12">
          <h2 className="text-2xl font-bold mb-2">Story not found</h2>
          <Button onClick={() => navigate("/stories")}>Browse Stories</Button>
        </div>
      </MainLayout>
    );
  }

  return (
    <MainLayout>
      <div className="min-h-screen bg-gradient-to-b from-background to-muted/20">
        {/* Mobile-Optimized Story Header */}
        <div className="relative">
          {/* Hero Background - Hidden on mobile to improve readability */}
          <div
            className="absolute inset-0 h-[300px] sm:h-[400px] md:h-[500px] bg-cover bg-center hidden sm:block"
            style={{
              backgroundImage: `url(${
                story.cover_image ||
                "https://source.unsplash.com/1600x500/?book,library"
              })`,
            }}
          >
            <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-background" />
          </div>

          <div className="relative z-10 max-w-7xl mx-auto px-4 pt-4 sm:pt-8 pb-8 sm:pb-20">
            <Button
              variant="ghost"
              className="mb-4 text-gray-700 sm:text-white hover:bg-gray-100 sm:hover:bg-white/10"
              onClick={() => navigate(-1)}
            >
              <ChevronLeft className="h-4 w-4 mr-2" />
              Back
            </Button>

            {/* Mobile Layout - Better readability */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 sm:gap-8">
              {/* Cover Image - Centered on mobile */}
              <div className="flex justify-center lg:justify-start">
                <div className="relative group">
                  <img
                    src={
                      story.cover_image ||
                      "https://source.unsplash.com/400x600/?book,novel"
                    }
                    alt={story.title}
                    className="w-48 h-72 sm:w-64 sm:h-96 object-cover rounded-xl shadow-2xl"
                  />
                  {story.visibility === "private" && (
                    <div className="absolute top-4 left-4 bg-black/60 backdrop-blur-sm rounded px-3 py-1">
                      <Lock className="h-4 w-4 text-white inline mr-1" />
                      <span className="text-sm text-white">Private</span>
                    </div>
                  )}
                </div>
              </div>

              {/* Story Info - Optimized for mobile */}
              <div className="lg:col-span-2 space-y-4 sm:space-y-6">
                {/* Title and Description - Better contrast on mobile */}
                <div className="bg-white sm:bg-transparent rounded-lg p-4 sm:p-0 shadow-sm sm:shadow-none">
                  <h1 className="text-2xl sm:text-4xl md:text-5xl font-bold mb-3 text-gray-900 sm:text-white">
                    {story.title}
                  </h1>
                  <p className="text-base sm:text-lg text-gray-700 sm:text-gray-200 leading-relaxed">
                    {story.description}
                  </p>
                </div>

                {/* Author Info - Better mobile styling */}
                {author && (
                  <div className="bg-white sm:bg-white/10 backdrop-blur-sm rounded-xl p-4 shadow-sm sm:shadow-none">
                    <Link
                      to={`/profile/${author.username}`}
                      className="flex items-center gap-4 group"
                    >
                      <Avatar className="h-12 sm:h-14 w-12 sm:w-14 border-2 border-gray-200 sm:border-white/20">
                        <AvatarImage src={author.profile_pic || undefined} />
                        <AvatarFallback className="bg-orange-100 text-orange-700 sm:bg-primary/20 sm:text-white">
                          {author.username?.[0]?.toUpperCase() || "A"}
                        </AvatarFallback>
                      </Avatar>
                      <div className="flex-1">
                        <p className="font-semibold text-base sm:text-lg text-gray-900 sm:text-white group-hover:text-orange-600 sm:group-hover:text-primary-light transition-colors">
                          @{author.username}
                        </p>
                        <p className="text-sm text-gray-600 sm:text-gray-300">
                          {formatNumber(author.followers_count)} followers •{" "}
                          {author.total_stories || 0} stories
                        </p>
                      </div>
                      {author.username !== user?.username && (
                        <Button
                          variant={isFollowing ? "secondary" : "default"}
                          size="sm"
                          onClick={(e) => {
                            e.preventDefault();
                            handleFollow();
                          }}
                          className={cn(
                            "ml-auto",
                            isFollowing
                              ? "bg-gray-200 hover:bg-gray-300 text-gray-800"
                              : "bg-orange-500 hover:bg-orange-600 text-white sm:bg-white sm:hover:bg-gray-100 sm:text-gray-900"
                          )}
                        >
                          {isFollowing ? "Following" : "Follow"}
                        </Button>
                      )}
                    </Link>
                  </div>
                )}

                {/* Stats Grid - Mobile optimized */}
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-4">
                  <div className="bg-white sm:bg-gray-800/90 backdrop-blur-sm rounded-lg p-3 sm:p-4 text-center border border-gray-200 sm:border-gray-700 shadow-sm sm:shadow-none">
                    <Eye className="h-5 sm:h-6 w-5 sm:w-6 mx-auto mb-1 sm:mb-2 text-gray-700 sm:text-white" />
                    <p className="text-lg sm:text-2xl font-bold text-gray-900 sm:text-white">
                      {formatNumber(story.reads_count)}
                    </p>
                    <p className="text-xs sm:text-sm text-gray-600 sm:text-gray-300">
                      Reads
                    </p>
                  </div>
                  <div className="bg-white sm:bg-gray-800/90 backdrop-blur-sm rounded-lg p-3 sm:p-4 text-center border border-gray-200 sm:border-gray-700 shadow-sm sm:shadow-none">
                    <Heart className="h-5 sm:h-6 w-5 sm:w-6 mx-auto mb-1 sm:mb-2 text-gray-700 sm:text-white" />
                    <p className="text-lg sm:text-2xl font-bold text-gray-900 sm:text-white">
                      {formatNumber(story.votes_count)}
                    </p>
                    <p className="text-xs sm:text-sm text-gray-600 sm:text-gray-300">
                      Likes
                    </p>
                  </div>
                  <div className="bg-white sm:bg-gray-800/90 backdrop-blur-sm rounded-lg p-3 sm:p-4 text-center border border-gray-200 sm:border-gray-700 shadow-sm sm:shadow-none">
                    <MessageCircle className="h-5 sm:h-6 w-5 sm:w-6 mx-auto mb-1 sm:mb-2 text-gray-700 sm:text-white" />
                    <p className="text-lg sm:text-2xl font-bold text-gray-900 sm:text-white">
                      {formatNumber(story.comments_count)}
                    </p>
                    <p className="text-xs sm:text-sm text-gray-600 sm:text-gray-300">
                      Comments
                    </p>
                  </div>
                  <div className="bg-white sm:bg-gray-800/90 backdrop-blur-sm rounded-lg p-3 sm:p-4 text-center border border-gray-200 sm:border-gray-700 shadow-sm sm:shadow-none">
                    <Calendar className="h-5 sm:h-6 w-5 sm:w-6 mx-auto mb-1 sm:mb-2 text-gray-700 sm:text-white" />
                    <p className="text-xs sm:text-sm font-bold text-gray-900 sm:text-white">
                      {formatDate(story.created_at)}
                    </p>
                    <p className="text-xs sm:text-sm text-gray-600 sm:text-gray-300">
                      Published
                    </p>
                  </div>
                </div>

                {/* Tags - Mobile friendly */}
                <div className="flex flex-wrap gap-2">
                  <Badge
                    variant="secondary"
                    className="bg-orange-100 text-orange-700 border-orange-200 sm:bg-white/20 sm:text-white sm:border-white/30"
                  >
                    {story.genre}
                  </Badge>
                  {story.tags.map((tag, index) => (
                    <Badge
                      key={index}
                      variant="outline"
                      className="text-gray-700 border-gray-300 bg-white/50 sm:text-white sm:border-white/30 sm:bg-white/10"
                    >
                      #{tag}
                    </Badge>
                  ))}
                </div>

                {/* Action Buttons - Mobile optimized */}
                <div className="flex flex-col sm:flex-row gap-2 sm:gap-3">
                  {isOwnStory ? (
                    <>
                      <Button
                        size="lg"
                        className="bg-orange-500 hover:bg-orange-600 text-white shadow-lg w-full sm:w-auto"
                        onClick={() => navigate(`/stories/${id}/edit`)}
                      >
                        <Edit className="h-5 w-5 mr-2" />
                        Edit Story
                      </Button>
                      <Button
                        size="lg"
                        variant="secondary"
                        className="bg-white hover:bg-gray-100 text-gray-800 shadow-lg w-full sm:w-auto"
                        onClick={handleShare}
                      >
                        <Share2 className="h-5 w-5 mr-2" />
                        Share
                      </Button>
                    </>
                  ) : (
                    <>
                      <Button
                        size="lg"
                        className="bg-orange-500 hover:bg-orange-600 text-white shadow-lg w-full sm:w-auto"
                        onClick={() => navigate(`/stories/${id}/read`)}
                      >
                        <BookOpen className="h-5 w-5 mr-2" />
                        Start Reading
                      </Button>

                      <div className="grid grid-cols-3 gap-2 sm:flex sm:flex-row">
                        <Button
                          size="lg"
                          variant={isLiked ? "default" : "secondary"}
                          className={cn(
                            "shadow-lg",
                            isLiked
                              ? "bg-red-500 hover:bg-red-600 text-white"
                              : "bg-white hover:bg-gray-100 text-gray-800"
                          )}
                          onClick={handleLike}
                        >
                          <Heart
                            className={cn(
                              "h-5 w-5 sm:mr-2",
                              isLiked ? "fill-current" : ""
                            )}
                          />
                          <span className="hidden sm:inline">
                            {isLiked ? "Liked" : "Like"}
                          </span>
                        </Button>

                        <Button
                          size="lg"
                          variant={isSaved ? "default" : "secondary"}
                          className={cn(
                            "shadow-lg",
                            isSaved
                              ? "bg-green-600 hover:bg-green-700 text-white"
                              : "bg-white hover:bg-gray-100 text-gray-800"
                          )}
                          onClick={handleSave}
                        >
                          <Bookmark
                            className={cn(
                              "h-5 w-5 sm:mr-2",
                              isSaved ? "fill-current" : ""
                            )}
                          />
                          <span className="hidden sm:inline">
                            {isSaved ? "Saved" : "Save"}
                          </span>
                        </Button>

                        <Button
                          size="lg"
                          variant="secondary"
                          className="bg-white hover:bg-gray-100 text-gray-800 shadow-lg"
                          onClick={handleShare}
                        >
                          <Share2 className="h-5 w-5 sm:mr-2" />
                          <span className="hidden sm:inline">Share</span>
                        </Button>
                      </div>
                    </>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Main Content Area */}
        <div className="max-w-7xl mx-auto px-4 py-8">
          <Tabs defaultValue="about" className="space-y-6">
            <TabsList className="bg-white border w-full justify-start">
              <TabsTrigger value="about">About</TabsTrigger>
              <TabsTrigger value="details">Details</TabsTrigger>
            </TabsList>

            {/* About Tab */}
            <TabsContent value="about" className="space-y-6">
              <Card className="bg-white">
                <CardContent className="p-4 sm:p-6">
                  <h3 className="text-lg font-semibold mb-4">Story Summary</h3>
                  <p className="text-gray-700 whitespace-pre-line">
                    {story.description || "No description available."}
                  </p>
                </CardContent>
              </Card>

              {author && (
                <Card className="bg-white">
                  <CardContent className="p-4 sm:p-6">
                    <h3 className="text-lg font-semibold mb-4">
                      About the Author
                    </h3>
                    <div className="flex items-start gap-4">
                      <Avatar className="h-12 sm:h-16 w-12 sm:w-16 flex-shrink-0">
                        <AvatarImage src={author.profile_pic || undefined} />
                        <AvatarFallback>
                          {author.username?.[0]?.toUpperCase()}
                        </AvatarFallback>
                      </Avatar>
                      <div className="flex-1 min-w-0">
                        <h4 className="font-semibold">@{author.username}</h4>
                        <p className="text-sm text-muted-foreground mt-1">
                          {author.bio || "No bio available"}
                        </p>
                        <div className="flex flex-wrap gap-2 sm:gap-4 mt-3 text-sm">
                          <span>
                            <strong>
                              {formatNumber(author.followers_count)}
                            </strong>{" "}
                            followers
                          </span>
                          <span>
                            <strong>{author.total_stories}</strong> stories
                          </span>
                          <span className="hidden sm:inline">
                            <strong>
                              {formatNumber(author.total_reads || 0)}
                            </strong>{" "}
                            total reads
                          </span>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              )}
            </TabsContent>

            {/* Details Tab */}
            <TabsContent value="details" className="space-y-6">
              <Card className="bg-white">
                <CardContent className="p-4 sm:p-6">
                  <h3 className="text-lg font-semibold mb-4">Story Details</h3>
                  <div className="space-y-3">
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Genre</span>
                      <span>{story.genre}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Published</span>
                      <span>{formatDate(story.created_at)}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">
                        Last Updated
                      </span>
                      <span>{formatDate(story.updated_at)}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Visibility</span>
                      <Badge
                        variant={
                          story.visibility === "private"
                            ? "secondary"
                            : "default"
                        }
                      >
                        {story.visibility === "private" ? (
                          <>
                            <Lock className="h-3 w-3 mr-1" />
                            Private
                          </>
                        ) : (
                          <>
                            <Globe className="h-3 w-3 mr-1" />
                            Public
                          </>
                        )}
                      </Badge>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Total Reads</span>
                      <span>{formatNumber(story.reads_count)}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Total Likes</span>
                      <span>{formatNumber(story.votes_count)}</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>

          {/* Related Stories */}
          {relatedStories.length > 0 && (
            <div className="mt-12">
              <h2 className="text-xl sm:text-2xl font-bold mb-6">
                More Like This
              </h2>
              <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-6">
                {relatedStories.map((relatedStory) => (
                  <Link
                    key={relatedStory.id}
                    to={`/stories/${relatedStory.id}`}
                    className="group"
                  >
                    <Card className="overflow-hidden hover:shadow-lg transition-all bg-white">
                      <div className="aspect-[2/3] relative">
                        <img
                          src={
                            relatedStory.cover_image ||
                            `https://source.unsplash.com/400x600/?book,${relatedStory.genre}`
                          }
                          alt={relatedStory.title}
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform"
                        />
                      </div>
                      <CardContent className="p-3 sm:p-4">
                        <h3 className="font-semibold line-clamp-2 text-sm sm:text-base">
                          {relatedStory.title}
                        </h3>
                        <p className="text-xs sm:text-sm text-muted-foreground mt-1">
                          {formatNumber(relatedStory.reads_count)} reads
                        </p>
                      </CardContent>
                    </Card>
                  </Link>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </MainLayout>
  );
}
```

---

#### 📄 src\pages\StoryReaderPage.tsx
<a name='src-pages-StoryReaderPagetsx'></a>

**Path:** `src\pages\StoryReaderPage.tsx`

```tsx
import { useState, useEffect } from "react";
import { useParams, useNavigate, Link } from "react-router-dom";
import {
  ChevronLeft,
  ChevronRight,
  BookOpen,
  List,
  Settings,
  Heart,
  MessageCircle,
  Sun,
  Moon,
  Type,
  Minus,
  Plus,
  AlignLeft,
  AlignCenter,
  AlignJustify,
  X,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Slider } from "@/components/ui/slider";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";
import { Separator } from "@/components/ui/separator";
import { ReaderSkeleton } from "@/components/ui/reader-skeleton";
import { Badge } from "@/components/ui/badge";
import { useAuthStore } from "@/store/authStore";
import { useUiStore } from "@/store/uiStore";
import { Chapter, Story } from "@/types/api";
import { chaptersApi, storiesApi } from "@/apis";
import { cn } from "@/lib/utils";

// Reading themes
const readingThemes = {
  light: {
    name: "Light",
    background: "#ffffff",
    text: "#1a1a1a",
    secondaryText: "#666666",
    sliderTrack: "#e5e5e5",
    sliderThumb: "#ff6b35",
  },
  sepia: {
    name: "Sepia",
    background: "#f7f1e8",
    text: "#5c4b37",
    secondaryText: "#8b7355",
    sliderTrack: "#e8dcc4",
    sliderThumb: "#8b7355",
  },
  dark: {
    name: "Dark",
    background: "#1a1a1a",
    text: "#e8e6e3",
    secondaryText: "#a8a29e",
    sliderTrack: "#404040",
    sliderThumb: "#ff6b35",
  },
  night: {
    name: "Night",
    background: "#0d1117",
    text: "#c9d1d9",
    secondaryText: "#8b949e",
    sliderTrack: "#30363d",
    sliderThumb: "#58a6ff",
  },
};

export function StoryReaderPage() {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const { user, isAuthenticated } = useAuthStore();
  const { addToast } = useUiStore();

  const [story, setStory] = useState<Story | null>(null);
  const [chapters, setChapters] = useState<Chapter[]>([]);
  const [currentChapterIndex, setCurrentChapterIndex] = useState(0);
  const [isLoading, setIsLoading] = useState(true);

  // Reading settings state
  const [fontSize, setFontSize] = useState(18);
  const [lineHeight, setLineHeight] = useState(1.8);
  const [fontFamily, setFontFamily] = useState("serif");
  const [textAlign, setTextAlign] = useState<"left" | "center" | "justify">(
    "left"
  );
  const [theme, setTheme] = useState<keyof typeof readingThemes>("light");
  const [showSettingsDialog, setShowSettingsDialog] = useState(false);
  const [showChapterList, setShowChapterList] = useState(false);

  const currentChapter = chapters[currentChapterIndex];
  const hasNextChapter = currentChapterIndex < chapters.length - 1;
  const hasPreviousChapter = currentChapterIndex > 0;

  // Load saved preferences
  useEffect(() => {
    const savedPreferences = localStorage.getItem("reading-preferences");
    if (savedPreferences) {
      try {
        const prefs = JSON.parse(savedPreferences);
        setFontSize(prefs.fontSize || 18);
        setLineHeight(prefs.lineHeight || 1.8);
        setFontFamily(prefs.fontFamily || "serif");
        setTextAlign(prefs.textAlign || "left");
        setTheme(prefs.theme || "light");
      } catch (error) {
        console.error("Failed to load reading preferences:", error);
      }
    }
  }, []);

  // Save preferences when they change
  useEffect(() => {
    const preferences = {
      fontSize,
      lineHeight,
      fontFamily,
      textAlign,
      theme,
    };
    localStorage.setItem("reading-preferences", JSON.stringify(preferences));
  }, [fontSize, lineHeight, fontFamily, textAlign, theme]);

  useEffect(() => {
    if (!id) return;
    fetchStoryAndChapters();
  }, [id]);

  useEffect(() => {
    if (currentChapter && isAuthenticated) {
      // Track reading progress
      chaptersApi.setReadProgress(currentChapter.id, id!).catch(console.error);
    }
  }, [currentChapter?.id, isAuthenticated, id]);

  const fetchStoryAndChapters = async () => {
    if (!id) return;

    try {
      setIsLoading(true);

      // Fetch story details
      const storyData = await storiesApi.getStory(id);

      // Check if story is private and user is not the owner
      if (
        storyData.visibility === "private" &&
        storyData.author_id !== user?.id
      ) {
        addToast({
          title: "Private Story",
          description: "This story is private and cannot be accessed",
          type: "error",
        });
        navigate("/stories");
        return;
      }

      setStory(storyData);

      // Fetch chapters
      const chaptersData = await chaptersApi.getChaptersByStory(id, true);

      if (chaptersData.length === 0) {
        addToast({
          title: "No Chapters",
          description: "This story doesn't have any published chapters yet",
          type: "info",
        });
        navigate(`/stories/${id}`);
        return;
      }

      // Sort chapters by order
      const sortedChapters = chaptersData.sort((a, b) => a.order - b.order);
      setChapters(sortedChapters);
    } catch (error) {
      console.error("Failed to fetch story and chapters:", error);
      addToast({
        title: "Error",
        description: "Failed to load story content",
        type: "error",
      });
      navigate("/stories");
    } finally {
      setIsLoading(false);
    }
  };

  const goToNextChapter = () => {
    if (hasNextChapter) {
      setCurrentChapterIndex(currentChapterIndex + 1);
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  const goToPreviousChapter = () => {
    if (hasPreviousChapter) {
      setCurrentChapterIndex(currentChapterIndex - 1);
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  const goToChapter = (index: number) => {
    setCurrentChapterIndex(index);
    setShowChapterList(false);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const resetSettings = () => {
    setFontSize(18);
    setLineHeight(1.8);
    setFontFamily("serif");
    setTextAlign("left");
    setTheme("light");
  };

  if (isLoading) {
    return <ReaderSkeleton />;
  }

  if (!story || !currentChapter) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <Card>
          <CardContent className="p-6">
            <h2 className="text-xl font-bold mb-2">Story not found</h2>
            <Button onClick={() => navigate("/stories")}>Browse Stories</Button>
          </CardContent>
        </Card>
      </div>
    );
  }

  const currentTheme = readingThemes[theme];

  return (
    <div
      className="min-h-screen transition-colors duration-300"
      style={{
        backgroundColor: currentTheme.background,
        color: currentTheme.text,
      }}
    >
      {/* Custom Slider Styles */}
      <style>{`
        .custom-slider {
          position: relative;
          display: flex;
          align-items: center;
          width: 100%;
          height: 2rem;
        }
        
        .custom-slider-track {
          position: relative;
          height: 6px;
          width: 100%;
          border-radius: 3px;
          background: ${currentTheme.sliderTrack};
        }
        
        .custom-slider-range {
          position: absolute;
          height: 100%;
          border-radius: 3px;
          background: ${currentTheme.sliderThumb};
        }
        
        .custom-slider-thumb {
          width: 20px;
          height: 20px;
          border-radius: 50%;
          background: ${currentTheme.sliderThumb};
          box-shadow: 0 2px 4px rgba(0,0,0,0.2);
          cursor: pointer;
        }
        
        .custom-slider-thumb:hover {
          transform: scale(1.1);
        }
        
        .custom-slider-thumb:focus {
          outline: 2px solid ${currentTheme.sliderThumb};
          outline-offset: 2px;
        }
      `}</style>

      {/* Reader Header */}
      <header
        className="sticky top-0 z-40 border-b backdrop-blur-sm"
        style={{
          backgroundColor: `${currentTheme.background}ee`,
          borderColor:
            theme === "dark" || theme === "night" ? "#333" : "#e5e5e5",
        }}
      >
        <div className="container mx-auto px-4 py-3">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              <Button
                variant="ghost"
                size="sm"
                onClick={() => navigate(`/stories/${id}`)}
                style={{ color: currentTheme.text }}
              >
                <ChevronLeft className="h-4 w-4 mr-1" />
                Back
              </Button>
              <div className="hidden md:block">
                <Link
                  to={`/stories/${id}`}
                  className="font-semibold hover:underline"
                  style={{ color: currentTheme.text }}
                >
                  {story.title}
                </Link>
                <p
                  className="text-sm"
                  style={{ color: currentTheme.secondaryText }}
                >
                  Chapter {currentChapterIndex + 1} of {chapters.length}:{" "}
                  {currentChapter.title}
                </p>
              </div>
            </div>

            <div className="flex items-center gap-2">
              {/* Chapter List */}
              <Button
                variant="outline"
                size="sm"
                onClick={() => setShowChapterList(true)}
                style={{
                  borderColor:
                    theme === "dark" || theme === "night" ? "#444" : "#d1d5db",
                  color: currentTheme.text,
                }}
              >
                <List className="h-4 w-4 mr-2" />
                Chapters
              </Button>

              {/* Reading Settings */}
              <Button
                variant="outline"
                size="sm"
                onClick={() => setShowSettingsDialog(true)}
                style={{
                  borderColor:
                    theme === "dark" || theme === "night" ? "#444" : "#d1d5db",
                  color: currentTheme.text,
                }}
              >
                <Settings className="h-4 w-4" />
              </Button>
            </div>
          </div>
        </div>
      </header>

      {/* Reader Content */}
      <main className="container mx-auto px-4 py-8 max-w-4xl">
        <div className="mb-8">
          <h1
            className="text-3xl md:text-4xl font-bold mb-2"
            style={{ color: currentTheme.text }}
          >
            {currentChapter.title}
          </h1>
          <div
            className="flex items-center gap-4 text-sm"
            style={{ color: currentTheme.secondaryText }}
          >
            <span>
              Chapter {currentChapterIndex + 1} of {chapters.length}
            </span>
            <Badge
              variant="secondary"
              style={{
                backgroundColor:
                  theme === "dark" || theme === "night" ? "#333" : "#f3f4f6",
                color: currentTheme.secondaryText,
              }}
            >
              <BookOpen className="h-3 w-3 mr-1" />
              {currentChapter.reads_count} reads
            </Badge>
          </div>
        </div>

        <Card
          className="mb-8 border-0 shadow-none"
          style={{
            backgroundColor: currentTheme.background,
          }}
        >
          <CardContent className="p-0">
            <div
              style={{
                fontSize: `${fontSize}px`,
                fontFamily:
                  fontFamily === "serif"
                    ? "Georgia, 'Times New Roman', serif"
                    : fontFamily === "sans-serif"
                    ? "'Inter', system-ui, sans-serif"
                    : "'Courier New', monospace",
                lineHeight: lineHeight,
                textAlign: textAlign,
                color: currentTheme.text,
              }}
              className="prose prose-lg dark:prose-invert max-w-none"
            >
              {currentChapter.content ? (
                <div className="whitespace-pre-wrap">
                  {currentChapter.content}
                </div>
              ) : (
                <p
                  className="italic"
                  style={{ color: currentTheme.secondaryText }}
                >
                  No content available for this chapter.
                </p>
              )}
            </div>
          </CardContent>
        </Card>

        {/* Chapter Navigation */}
        <div className="flex items-center justify-between mb-8">
          <Button
            variant="outline"
            onClick={goToPreviousChapter}
            disabled={!hasPreviousChapter}
            style={{
              borderColor:
                theme === "dark" || theme === "night" ? "#444" : "#d1d5db",
              color: currentTheme.text,
              opacity: !hasPreviousChapter ? 0.5 : 1,
            }}
          >
            <ChevronLeft className="h-4 w-4 mr-2" />
            Previous Chapter
          </Button>

          <span
            className="text-sm"
            style={{ color: currentTheme.secondaryText }}
          >
            {currentChapterIndex + 1} / {chapters.length}
          </span>

          <Button
            variant="outline"
            onClick={goToNextChapter}
            disabled={!hasNextChapter}
            style={{
              borderColor:
                theme === "dark" || theme === "night" ? "#444" : "#d1d5db",
              color: currentTheme.text,
              opacity: !hasNextChapter ? 0.5 : 1,
            }}
          >
            Next Chapter
            <ChevronRight className="h-4 w-4 ml-2" />
          </Button>
        </div>

        {/* End of Story */}
        {!hasNextChapter && (
          <Card
            style={{
              backgroundColor:
                theme === "dark" || theme === "night" ? "#1f1f1f" : "#f9fafb",
              borderColor:
                theme === "dark" || theme === "night" ? "#333" : "#e5e5e5",
            }}
          >
            <CardContent className="p-6 text-center">
              <h3
                className="text-lg font-semibold mb-2"
                style={{ color: currentTheme.text }}
              >
                You've reached the end!
              </h3>
              <p className="mb-4" style={{ color: currentTheme.secondaryText }}>
                Thanks for reading {story.title}
              </p>
              <div className="flex justify-center gap-2">
                <Button onClick={() => navigate(`/stories/${id}`)}>
                  Back to Story
                </Button>
                <Button variant="outline" onClick={() => navigate("/stories")}>
                  Browse More Stories
                </Button>
              </div>
            </CardContent>
          </Card>
        )}
      </main>

      {/* Settings Dialog - Fixed with visible sliders */}
      <Dialog open={showSettingsDialog} onOpenChange={setShowSettingsDialog}>
        <DialogContent
          className="sm:max-w-[500px] max-h-[90vh] overflow-y-auto"
          style={{
            backgroundColor:
              theme === "dark" || theme === "night" ? "#1f1f1f" : "white",
            color: currentTheme.text,
            borderColor:
              theme === "dark" || theme === "night" ? "#333" : "#e5e5e5",
          }}
        >
          <DialogHeader>
            <DialogTitle style={{ color: currentTheme.text }}>
              Reading Settings
            </DialogTitle>
            <DialogDescription style={{ color: currentTheme.secondaryText }}>
              Customize your reading experience
            </DialogDescription>
          </DialogHeader>

          <div className="space-y-6 py-4">
            {/* Theme Selection */}
            <div>
              <Label
                className="text-base font-medium mb-3 block"
                style={{ color: currentTheme.text }}
              >
                Theme
              </Label>
              <div className="grid grid-cols-2 gap-2">
                {Object.entries(readingThemes).map(([key, themeOption]) => (
                  <button
                    key={key}
                    onClick={() => setTheme(key as keyof typeof readingThemes)}
                    className={cn(
                      "p-3 rounded-lg border-2 transition-all",
                      theme === key
                        ? "border-orange-500 shadow-md"
                        : "border-gray-200 hover:border-gray-300"
                    )}
                    style={{
                      backgroundColor: themeOption.background,
                      color: themeOption.text,
                      borderColor:
                        theme === key ? currentTheme.sliderThumb : undefined,
                    }}
                  >
                    <div className="flex items-center justify-center gap-2">
                      {key === "light" && <Sun className="h-4 w-4" />}
                      {key === "dark" && <Moon className="h-4 w-4" />}
                      {key === "sepia" && <BookOpen className="h-4 w-4" />}
                      {key === "night" && <Moon className="h-4 w-4" />}
                      <span className="text-sm font-medium">
                        {themeOption.name}
                      </span>
                    </div>
                  </button>
                ))}
              </div>
            </div>

            <Separator style={{ backgroundColor: currentTheme.sliderTrack }} />

            {/* Font Size with Fixed Slider */}
            <div>
              <Label
                className="text-base font-medium mb-3 block"
                style={{ color: currentTheme.text }}
              >
                Font Size: {fontSize}px
              </Label>
              <div className="flex items-center gap-3">
                <Button
                  variant="outline"
                  size="sm"
                  onClick={() => setFontSize(Math.max(12, fontSize - 2))}
                  className="h-9 w-9 p-0"
                  style={{
                    borderColor: currentTheme.sliderTrack,
                    color: currentTheme.text,
                  }}
                >
                  <Minus className="h-4 w-4" />
                </Button>

                {/* Custom HTML Range Input for better visibility */}
                <input
                  type="range"
                  min={12}
                  max={32}
                  step={1}
                  value={fontSize}
                  onChange={(e) => setFontSize(Number(e.target.value))}
                  className="flex-1"
                  style={{
                    background: `linear-gradient(to right, ${
                      currentTheme.sliderThumb
                    } 0%, ${currentTheme.sliderThumb} ${
                      ((fontSize - 12) / 20) * 100
                    }%, ${currentTheme.sliderTrack} ${
                      ((fontSize - 12) / 20) * 100
                    }%, ${currentTheme.sliderTrack} 100%)`,
                    height: "6px",
                    borderRadius: "3px",
                    outline: "none",
                    WebkitAppearance: "none",
                    cursor: "pointer",
                  }}
                />

                <Button
                  variant="outline"
                  size="sm"
                  onClick={() => setFontSize(Math.min(32, fontSize + 2))}
                  className="h-9 w-9 p-0"
                  style={{
                    borderColor: currentTheme.sliderTrack,
                    color: currentTheme.text,
                  }}
                >
                  <Plus className="h-4 w-4" />
                </Button>
              </div>
              <div
                className="mt-2 p-3 rounded-lg border"
                style={{
                  backgroundColor:
                    theme === "dark" || theme === "night"
                      ? "#2a2a2a"
                      : "#f9f9f9",
                  borderColor: currentTheme.sliderTrack,
                  color: currentTheme.text,
                }}
              >
                <p style={{ fontSize: `${fontSize}px` }}>
                  Preview: The quick brown fox jumps over the lazy dog.
                </p>
              </div>
            </div>

            <Separator style={{ backgroundColor: currentTheme.sliderTrack }} />

            {/* Line Height with Fixed Slider */}
            <div>
              <Label
                className="text-base font-medium mb-3 block"
                style={{ color: currentTheme.text }}
              >
                Line Height: {lineHeight.toFixed(1)}
              </Label>

              {/* Custom HTML Range Input */}
              <input
                type="range"
                min={1.2}
                max={2.5}
                step={0.1}
                value={lineHeight}
                onChange={(e) => setLineHeight(Number(e.target.value))}
                className="w-full"
                style={{
                  background: `linear-gradient(to right, ${
                    currentTheme.sliderThumb
                  } 0%, ${currentTheme.sliderThumb} ${
                    ((lineHeight - 1.2) / 1.3) * 100
                  }%, ${currentTheme.sliderTrack} ${
                    ((lineHeight - 1.2) / 1.3) * 100
                  }%, ${currentTheme.sliderTrack} 100%)`,
                  height: "6px",
                  borderRadius: "3px",
                  outline: "none",
                  WebkitAppearance: "none",
                  cursor: "pointer",
                }}
              />
            </div>

            <Separator style={{ backgroundColor: currentTheme.sliderTrack }} />

            {/* Font Family */}
            <div>
              <Label
                className="text-base font-medium mb-3 block"
                style={{ color: currentTheme.text }}
              >
                Font Family
              </Label>
              <RadioGroup value={fontFamily} onValueChange={setFontFamily}>
                <div className="space-y-2">
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem
                      value="serif"
                      id="serif"
                      style={{
                        borderColor: currentTheme.sliderTrack,
                      }}
                    />
                    <Label
                      htmlFor="serif"
                      className="font-serif cursor-pointer"
                      style={{ color: currentTheme.text }}
                    >
                      Serif (Georgia)
                    </Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem
                      value="sans-serif"
                      id="sans-serif"
                      style={{
                        borderColor: currentTheme.sliderTrack,
                      }}
                    />
                    <Label
                      htmlFor="sans-serif"
                      className="cursor-pointer"
                      style={{ color: currentTheme.text }}
                    >
                      Sans-serif (Inter)
                    </Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem
                      value="monospace"
                      id="monospace"
                      style={{
                        borderColor: currentTheme.sliderTrack,
                      }}
                    />
                    <Label
                      htmlFor="monospace"
                      className="font-mono cursor-pointer"
                      style={{ color: currentTheme.text }}
                    >
                      Monospace (Courier)
                    </Label>
                  </div>
                </div>
              </RadioGroup>
            </div>

            <Separator style={{ backgroundColor: currentTheme.sliderTrack }} />

            {/* Text Alignment */}
            <div>
              <Label
                className="text-base font-medium mb-3 block"
                style={{ color: currentTheme.text }}
              >
                Text Alignment
              </Label>
              <div className="grid grid-cols-3 gap-2">
                <Button
                  variant={textAlign === "left" ? "default" : "outline"}
                  size="sm"
                  onClick={() => setTextAlign("left")}
                  className="w-full"
                  style={{
                    backgroundColor:
                      textAlign === "left"
                        ? currentTheme.sliderThumb
                        : "transparent",
                    borderColor: currentTheme.sliderTrack,
                    color: textAlign === "left" ? "white" : currentTheme.text,
                  }}
                >
                  <AlignLeft className="h-4 w-4 mr-2" />
                  Left
                </Button>
                <Button
                  variant={textAlign === "center" ? "default" : "outline"}
                  size="sm"
                  onClick={() => setTextAlign("center")}
                  className="w-full"
                  style={{
                    backgroundColor:
                      textAlign === "center"
                        ? currentTheme.sliderThumb
                        : "transparent",
                    borderColor: currentTheme.sliderTrack,
                    color: textAlign === "center" ? "white" : currentTheme.text,
                  }}
                >
                  <AlignCenter className="h-4 w-4 mr-2" />
                  Center
                </Button>
                <Button
                  variant={textAlign === "justify" ? "default" : "outline"}
                  size="sm"
                  onClick={() => setTextAlign("justify")}
                  className="w-full"
                  style={{
                    backgroundColor:
                      textAlign === "justify"
                        ? currentTheme.sliderThumb
                        : "transparent",
                    borderColor: currentTheme.sliderTrack,
                    color:
                      textAlign === "justify" ? "white" : currentTheme.text,
                  }}
                >
                  <AlignJustify className="h-4 w-4 mr-2" />
                  Justify
                </Button>
              </div>
            </div>
          </div>

          <div
            className="flex justify-between pt-4 border-t"
            style={{ borderColor: currentTheme.sliderTrack }}
          >
            <Button
              variant="outline"
              onClick={resetSettings}
              style={{
                borderColor: currentTheme.sliderTrack,
                color: currentTheme.text,
              }}
            >
              Reset to Default
            </Button>
            <Button
              onClick={() => setShowSettingsDialog(false)}
              style={{
                backgroundColor: currentTheme.sliderThumb,
                color: "white",
              }}
            >
              Done
            </Button>
          </div>
        </DialogContent>
      </Dialog>

      {/* Chapter List Sheet */}
      <Sheet open={showChapterList} onOpenChange={setShowChapterList}>
        <SheetContent
          side="left"
          className="w-[300px] sm:w-[400px]"
          style={{
            backgroundColor: currentTheme.background,
            color: currentTheme.text,
          }}
        >
          <SheetHeader>
            <SheetTitle style={{ color: currentTheme.text }}>
              Chapters
            </SheetTitle>
          </SheetHeader>
          <div className="mt-6 space-y-2 max-h-[calc(100vh-8rem)] overflow-y-auto">
            {chapters.map((chapter, index) => (
              <button
                key={chapter.id}
                onClick={() => goToChapter(index)}
                className={cn(
                  "w-full text-left p-3 rounded-lg transition-colors",
                  index === currentChapterIndex
                    ? "bg-orange-500 text-white"
                    : theme === "dark" || theme === "night"
                    ? "hover:bg-gray-800"
                    : "hover:bg-gray-100"
                )}
                style={{
                  backgroundColor:
                    index === currentChapterIndex ? undefined : "transparent",
                  color:
                    index === currentChapterIndex
                      ? undefined
                      : currentTheme.text,
                }}
              >
                <div className="font-medium">Chapter {index + 1}</div>
                <div className="text-sm opacity-90">{chapter.title}</div>
              </button>
            ))}
          </div>
        </SheetContent>
      </Sheet>
    </div>
  );
}
```

---

### 📁 src\store

#### 📄 src\store\authStore.ts
<a name='src-store-authStorets'></a>

**Path:** `src\store\authStore.ts`

```typescript
import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import { User, ApiError } from '@/types';
import { authApi } from '@/apis/auth';

interface AuthState {
  // State
  accessToken: string | null;
  user: User | null;
  isAuthenticated: boolean;
  isLoading: boolean;
  error: string | null;
  
  // Actions
  login: (email: string, password: string) => Promise<void>;
  signup: (username: string, email: string, password: string) => Promise<void>;
  logout: () => void;
  fetchMe: () => Promise<void>;
  updateUser: (user: User) => void;
  clearError: () => void;
  setLoading: (loading: boolean) => void;
}

export const useAuthStore = create<AuthState>()(
  persist(
    (set, get) => ({
      // Initial state
      accessToken: null,
      user: null,
      isAuthenticated: false,
      isLoading: false,
      error: null,

      // Actions
      login: async (email: string, password: string) => {
        try {
          set({ isLoading: true, error: null });
          
          const tokenResponse = await authApi.login(email, password);
          const userResponse = await authApi.getMe(tokenResponse.access_token);
          
          set({
            accessToken: tokenResponse.access_token,
            user: userResponse,
            isAuthenticated: true,
            isLoading: false,
            error: null
          });
        } catch (error: any) {
          const errorMessage = error.details?.message || error.message || 'Login failed';
          set({
            accessToken: null,
            user: null,
            isAuthenticated: false,
            isLoading: false,
            error: errorMessage
          });
          throw error;
        }
      },

      signup: async (username: string, email: string, password: string) => {
        try {
          set({ isLoading: true, error: null });
          
          const user = await authApi.signup(username, email, password);
          
          // Auto-login after signup
          await get().login(email, password);
          
          set({ isLoading: false, error: null });
        } catch (error: any) {
          const errorMessage = error.details?.message || error.message || 'Signup failed';
          set({
            isLoading: false,
            error: errorMessage
          });
          throw error;
        }
      },

      logout: () => {
        set({
          accessToken: null,
          user: null,
          isAuthenticated: false,
          error: null
        });
      },

      fetchMe: async () => {
        const { accessToken } = get();
        if (!accessToken) return;

        try {
          set({ isLoading: true, error: null });
          const user = await authApi.getMe(accessToken);
          
          set({
            user,
            isAuthenticated: true,
            isLoading: false,
            error: null
          });
        } catch (error: any) {
          if (error.status === 401) {
            // Token expired, logout
            get().logout();
          } else {
            set({
              isLoading: false,
              error: error.message || 'Failed to fetch user'
            });
          }
        }
      },

      updateUser: (user: User) => {
        set({ user });
      },

      clearError: () => {
        set({ error: null });
      },

      setLoading: (loading: boolean) => {
        set({ isLoading: loading });
      }
    }),
    {
      name: 'auth-storage',
      partialize: (state) => ({
        accessToken: state.accessToken,
        user: state.user,
        isAuthenticated: state.isAuthenticated
      })
    }
  )
);
```

---

#### 📄 src\store\uiStore.ts
<a name='src-store-uiStorets'></a>

**Path:** `src\store\uiStore.ts`

```typescript
import { create } from 'zustand';
import { Toast, Modal, Theme } from '@/types';

interface UiState {
  // Theme
  theme: Theme;
  
  // Toasts
  toasts: Toast[];
  
  // Modals
  modals: Modal[];
  
  // Loading states
  globalLoading: boolean;
  
  // Actions
  setTheme: (theme: Theme) => void;
  addToast: (toast: Omit<Toast, 'id'>) => void;
  removeToast: (id: string) => void;
  clearToasts: () => void;
  openModal: (component: React.ComponentType<any>, props?: any) => string;
  closeModal: (id: string) => void;
  closeAllModals: () => void;
  setGlobalLoading: (loading: boolean) => void;
}

let toastIdCounter = 0;
let modalIdCounter = 0;

export const useUiStore = create<UiState>((set, get) => ({
  // Initial state
  theme: 'system',
  toasts: [],
  modals: [],
  globalLoading: false,

  // Theme actions
  setTheme: (theme: Theme) => {
    set({ theme });
    
    // Apply theme to document
    if (theme === 'dark') {
      document.documentElement.classList.add('dark');
    } else if (theme === 'light') {
      document.documentElement.classList.remove('dark');
    } else {
      // System theme
      const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
      if (prefersDark) {
        document.documentElement.classList.add('dark');
      } else {
        document.documentElement.classList.remove('dark');
      }
    }
  },

  // Toast actions
  addToast: (toast: Omit<Toast, 'id'>) => {
    const id = `toast-${++toastIdCounter}`;
    const newToast: Toast = { ...toast, id };
    
    set((state) => ({
      toasts: [...state.toasts, newToast]
    }));

    // Auto-remove toast after duration
    const duration = toast.duration || 5000;
    setTimeout(() => {
      get().removeToast(id);
    }, duration);
  },

  removeToast: (id: string) => {
    set((state) => ({
      toasts: state.toasts.filter(toast => toast.id !== id)
    }));
  },

  clearToasts: () => {
    set({ toasts: [] });
  },

  // Modal actions
  openModal: (component: React.ComponentType<any>, props?: any) => {
    const id = `modal-${++modalIdCounter}`;
    const modal: Modal = { id, component, props };
    
    set((state) => ({
      modals: [...state.modals, modal]
    }));

    return id;
  },

  closeModal: (id: string) => {
    set((state) => ({
      modals: state.modals.filter(modal => modal.id !== id)
    }));
  },

  closeAllModals: () => {
    set({ modals: [] });
  },

  // Loading actions
  setGlobalLoading: (loading: boolean) => {
    set({ globalLoading: loading });
  }
}));

// Initialize theme on load
if (typeof window !== 'undefined') {
  const store = useUiStore.getState();
  store.setTheme(store.theme);
  
  // Listen for system theme changes
  window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', (e) => {
    if (store.theme === 'system') {
      if (e.matches) {
        document.documentElement.classList.add('dark');
      } else {
        document.documentElement.classList.remove('dark');
      }
    }
  });
}
```

---

### 📁 src\types

#### 📄 src\types\api.ts
<a name='src-types-apits'></a>

**Path:** `src\types\api.ts`

```typescript
// API Response Types
export interface ApiEnvelope<T = any> {
  success: boolean;
  message: string;
  data: T;
  error?: {
    details?: Record<string, string[]>;
    message?: string;
  } | null;
}

export interface PaginatedResponse<T> {
  total: number;
  page: number;
  limit: number; 
  items: T[];
}

// Auth Types
export interface LoginRequest {
  username: string; // email
  password: string;
}

export interface SignupRequest {
  username: string;
  email: string;
  password: string;
}

export interface TokenResponse {
  access_token: string;
  token_type: string;
}

// User Types
export interface User {
  id: string;
  username: string;
  email: string;
  bio: string | null;
  profile_pic: string | null;
  followers_count: number;
  following_count: number;
  stories_count: number;
  created_at: string;
  updated_at: string;
}

export interface UpdateProfileRequest {
  bio?: string | null;
  profile_pic?: string | null;
}

export interface ChangePasswordRequest {
  old_password: string;
  new_password: string;
}

// Story Types
export interface Story {
  id: string;
  author_id: string;
  title: string;
  description: string;
  genre: string;
  tags: string[];
  cover_image: string | null;
  cover_key: string | null;
  visibility: "public" | "private";
  reads_count: number;
  votes_count: number;
  comments_count: number;
  created_at: string;
  updated_at: string;
}

export interface CreateStoryRequest {
  title: string;
  description?: string;
  genre: string;
  tags?: string[];
  visibility?: "public" | "private";
  cover_image?: string;
}

export interface UpdateStoryRequest {
  title?: string;
  description?: string;
  genre?: string;
  tags?: string[];
  visibility?: "public" | "private";
  cover_image?: string;
}

export interface StoriesQuery {
  page?: number;
  limit?: number;
  genre?: string;
  sort?: "latest" | "popular" | "trending";
}

export interface SearchQuery {
  q: string;
  page?: number;
  limit?: number;
}

// Upload Types
export interface UploadResponse {
  key: string;
  filename: string;
  content_type: string;
  public_url: string;
  read_url: string;
}

export interface PresignRequest {
  filename: string;
  content_type: string;
  folder?: "images" | "covers" | "media" | "avatars";
}

export interface PresignResponse {
  key: string;
  method: "PUT";
  headers: Record<string, string>;
  upload_url: string;
  public_url: string;
  read_url: string;
}

export interface GetUrlQuery {
  key: string;
  expires?: number;
}

export interface GetUrlResponse {
  key: string;
  signed_url: string;
  expires_in: number;
}

// Chapter Types
export interface Chapter {
  id: string;
  story_id: string;
  title: string;
  content: string | null;
  order: number;
  published: boolean;
  votes_count: number;
  reads_count: number;
  created_at: string;
  updated_at: string;
}

export interface CreateChapterRequest {
  story_id: string;
  title: string;
  content: string;
  order: number;
  published?: boolean;
}

export interface UpdateChapterRequest {
  title?: string;
  content?: string;
  order?: number;
  published?: boolean;
}

// Vote Types
export interface VoteRequest {
  chapter_id: string; // 24-hex ObjectId
}

// Error Types
export interface ApiError extends Error {
  status?: number;
  details?: Record<string, string[]>;
}
```

---

#### 📄 src\types\index.ts
<a name='src-types-indexts'></a>

**Path:** `src\types\index.ts`

```typescript
export * from './api';

// UI Types
export interface LoadingState {
  isLoading: boolean;
  error?: string | null;
}

export interface Toast {
  id: string;
  title: string;
  description?: string;
  type: 'success' | 'error' | 'warning' | 'info';
  duration?: number;
}

export interface Modal {
  id: string;
  component: React.ComponentType<any>;
  props?: any;
}

// Form Types
export interface FormField {
  name: string;
  value: string;
  error?: string;
  touched: boolean;
}

export interface FormState {
  fields: Record<string, FormField>;
  isSubmitting: boolean;
  isValid: boolean;
}

// Theme Types
export type Theme = 'light' | 'dark' | 'system';

// Navigation Types
export interface NavigationItem {
  label: string;
  href: string;
  icon?: string;
  badge?: number;
}
```

---

### 📁 src\utils

#### 📄 src\utils\favicon-generator.ts
<a name='src-utils-favicon-generatorts'></a>

**Path:** `src\utils\favicon-generator.ts`

```typescript
// src/utils/favicon-generator.ts
export function generateFaviconSVG(): string {
  return `
    <svg width="32" height="32" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg">
      <rect width="32" height="32" rx="6" fill="#FF6B35"/>
      <path d="M5 6h9v20H5z" fill="white" opacity="0.9"/>
      <path d="M18 6h9v20h-9z" fill="white" opacity="0.85"/>
      <rect x="14" y="6" width="4" height="20" fill="#E85D04"/>
      <path d="M16 3v10l-2-2-2 2V3h4z" fill="#FFD700"/>
    </svg>
  `;
}

// Add this to your index.html or generate dynamically
export function setFavicon() {
  const svgString = generateFaviconSVG();
  const blob = new Blob([svgString], { type: 'image/svg+xml' });
  const url = URL.createObjectURL(blob);
  
  const link = document.querySelector("link[rel~='icon']") as HTMLLinkElement || 
               document.createElement('link');
  link.rel = 'icon';
  link.href = url;
  
  if (!document.querySelector("link[rel~='icon']")) {
    document.head.appendChild(link);
  }
}
```

---

### 📁 src\components\layout

#### 📄 src\components\layout\footer.tsx
<a name='src-components-layout-footertsx'></a>

**Path:** `src\components\layout\footer.tsx`

```tsx
"use client";

import { Link } from "react-router-dom";
import { Github, Twitter, Mail, ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Logo } from "@/components/ui/logo";

export function Footer() {
  const currentYear = new Date().getFullYear();

  const footerLinks = {
    product: [
      { label: "Features", href: "/features" },
      { label: "Pricing", href: "/pricing" },
      { label: "Stories", href: "/stories" },
      { label: "Authors", href: "/authors" },
    ],
    company: [
      { label: "About", href: "/about" },
      { label: "Blog", href: "/blog" },
      { label: "Careers", href: "/careers" },
      { label: "Contact", href: "/contact" },
    ],
    legal: [
      { label: "Privacy Policy", href: "/privacy" },
      { label: "Terms of Service", href: "/terms" },
      { label: "Cookie Policy", href: "/cookies" },
      { label: "Guidelines", href: "/guidelines" },
    ],
    social: [
      { label: "Twitter", href: "https://twitter.com", icon: Twitter },
      { label: "GitHub", href: "https://github.com", icon: Github },
      { label: "Email", href: "mailto:support@storivault.com", icon: Mail },
    ],
  };

  return (
    <footer className="bg-background border-t mt-auto">
      {/* Main Footer Content - Dark Background */}
      <div className="bg-gray-800">
        <div className="container mx-auto px-4 py-12">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
            {/* Brand Section with New Logo */}
            <div className="lg:col-span-2">
              <Logo size="md" className="mb-4" />
              <p className="text-gray-300 mb-4 max-w-sm">
                Your gateway to infinite stories. Discover captivating tales,
                connect with passionate writers, and immerse yourself in worlds
                beyond imagination.
              </p>
              <div className="flex gap-2">
                {footerLinks.social.map((social) => {
                  const Icon = social.icon;
                  return (
                    <Button
                      key={social.label}
                      variant="ghost"
                      size="sm"
                      className="h-9 w-9 p-0 hover:bg-gray-700 text-gray-300 hover:text-white"
                      asChild
                    >
                      <a
                        href={social.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={social.label}
                      >
                        <Icon className="h-4 w-4" />
                      </a>
                    </Button>
                  );
                })}
              </div>
            </div>

            {/* Product Links */}
            <div>
              <h3 className="font-semibold mb-4 text-sm uppercase tracking-wider text-white">
                Product
              </h3>
              <ul className="space-y-2">
                {footerLinks.product.map((link) => (
                  <li key={link.label}>
                    <Link
                      to={link.href}
                      className="text-gray-300 hover:text-white transition-colors text-sm"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Company Links */}
            <div>
              <h3 className="font-semibold mb-4 text-sm uppercase tracking-wider text-white">
                Company
              </h3>
              <ul className="space-y-2">
                {footerLinks.company.map((link) => (
                  <li key={link.label}>
                    <Link
                      to={link.href}
                      className="text-gray-300 hover:text-white transition-colors text-sm"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Legal Links */}
            <div>
              <h3 className="font-semibold mb-4 text-sm uppercase tracking-wider text-white">
                Legal
              </h3>
              <ul className="space-y-2">
                {footerLinks.legal.map((link) => (
                  <li key={link.label}>
                    <Link
                      to={link.href}
                      className="text-gray-300 hover:text-white transition-colors text-sm"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Footer - Light Background */}
      <div className="bg-background border-t border-gray-200">
        <div className="container mx-auto px-4 py-4">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="text-sm text-muted-foreground">
              <span>© {currentYear} StoriVault. All rights reserved.</span>
            </div>

            {/* Powered by NexusNao - Right Side */}
            <div className="flex items-center gap-1 text-sm text-muted-foreground">
              <span>Powered by</span>
              <a
                href="https://nexusnao.com"
                target="_blank"
                rel="noopener noreferrer"
                className="font-semibold text-primary hover:text-primary-hover inline-flex items-center gap-1 transition-colors"
              >
                NexusNao
                <ExternalLink className="h-3 w-3" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
```

---

#### 📄 src\components\layout\header.tsx
<a name='src-components-layout-headertsx'></a>

**Path:** `src\components\layout\header.tsx`

```tsx
// src/components/layout/header.tsx
"use client";

import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import {
  Search,
  Bell,
  Plus,
  User,
  Settings,
  LogOut,
  Library,
  Menu,
  X,
  ChevronDown,
  BookOpen,
  PenTool,
  FileText,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Logo } from "@/components/ui/logo";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
  DropdownMenuLabel,
} from "@/components/ui/dropdown-menu";
import { useAuthStore } from "@/store/authStore";
import { cn } from "@/lib/utils";

const browseCategories = [
  { label: "Browse", href: "/stories", isHeader: true },
  { label: "Romance", href: "/stories?genre=Romance" },
  { label: "Fantasy", href: "/stories?genre=Fantasy" },
  { label: "Mystery", href: "/stories?genre=Mystery" },
  { label: "Sci-Fi", href: "/stories?genre=Sci-Fi" },
  { label: "Horror", href: "/stories?genre=Horror" },
  { label: "Adventure", href: "/stories?genre=Adventure" },
  { label: "Drama", href: "/stories?genre=Drama" },
  { label: "Comedy", href: "/stories?genre=Comedy" },
  { label: "Thriller", href: "/stories?genre=Thriller" },
  { label: "Historical", href: "/stories?genre=Historical" },
  { label: "Poetry", href: "/stories?genre=Poetry" },
  { label: "Non-Fiction", href: "/stories?genre=Non-Fiction" },
];

export function Header() {
  const navigate = useNavigate();
  const [searchQuery, setSearchQuery] = useState("");
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [mobileSearchOpen, setMobileSearchOpen] = useState(false);
  const { user, isAuthenticated, logout } = useAuthStore();

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      navigate(`/stories?q=${encodeURIComponent(searchQuery.trim())}`);
      setMobileSearchOpen(false);
      setSearchQuery("");
    }
  };

  const handleLogout = () => {
    logout();
    navigate("/");
    setMobileMenuOpen(false);
  };

  const closeMobileMenu = () => {
    setMobileMenuOpen(false);
  };

  return (
    <>
      {/* Fixed Header */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-white border-b shadow-sm">
        <div className="relative">
          {/* Main Header Content */}
          <div className="h-14 sm:h-16 px-3 sm:px-6 lg:px-8">
            <div className="flex h-full items-center justify-between max-w-7xl mx-auto">
              {/* Left Section - Mobile Menu and Logo */}
              <div className="flex items-center gap-2 sm:gap-4">
                {/* Mobile Menu Button */}
                <Button
                  variant="ghost"
                  size="sm"
                  className="sm:hidden h-8 w-8 p-0"
                  onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                >
                  {mobileMenuOpen ? (
                    <X className="h-5 w-5" />
                  ) : (
                    <Menu className="h-5 w-5" />
                  )}
                </Button>

                {/* Logo with Text on Mobile, Full Logo on Desktop */}
                <Link to="/" className="flex items-center gap-2">
                  {/* Mobile - Show StoriVault text */}
                  <div className="sm:hidden flex items-center gap-2">
                    {/* Book Icon */}
                    <svg
                      viewBox="0 0 48 48"
                      className="h-8 w-8"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <defs>
                        <linearGradient
                          id="mobileBookGradient"
                          x1="0%"
                          y1="0%"
                          x2="100%"
                          y2="100%"
                        >
                          <stop offset="0%" stopColor="#FF6B35" />
                          <stop offset="100%" stopColor="#FFA500" />
                        </linearGradient>
                      </defs>
                      <path
                        d="M6 8C6 6.89543 6.89543 6 8 6H22V38H8C6.89543 38 6 37.1046 6 36V8Z"
                        fill="url(#mobileBookGradient)"
                      />
                      <path
                        d="M26 6H40C41.1046 6 42 6.89543 42 8V36C42 37.1046 41.1046 38 40 38H26V6Z"
                        fill="url(#mobileBookGradient)"
                        opacity="0.8"
                      />
                      <rect x="22" y="6" width="4" height="32" fill="#E85D04" />
                    </svg>
                    {/* StoriVault Text */}
                    <span className="font-bold text-lg">
                      <span className="text-orange-500">Stori</span>
                      <span className="text-gray-700">Vault</span>
                    </span>
                  </div>

                  {/* Desktop - Full Logo Component */}
                  <div className="hidden sm:block">
                    <Logo size="sm" showText={true} />
                  </div>
                </Link>

                {/* Browse Dropdown - Desktop Only */}
                <DropdownMenu>
                  <DropdownMenuTrigger asChild>
                    <Button
                      variant="ghost"
                      size="sm"
                      className="hidden sm:flex items-center gap-1 font-medium"
                    >
                      Browse
                      <ChevronDown className="h-4 w-4" />
                    </Button>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent
                    align="start"
                    className="w-56 max-h-[80vh] overflow-y-auto bg-white"
                  >
                    {browseCategories.map((category, index) =>
                      category.isHeader ? (
                        <DropdownMenuLabel
                          key={index}
                          className="font-bold text-gray-900"
                        >
                          {category.label}
                        </DropdownMenuLabel>
                      ) : (
                        <DropdownMenuItem key={index} asChild>
                          <Link to={category.href} className="cursor-pointer">
                            {category.label}
                          </Link>
                        </DropdownMenuItem>
                      )
                    )}
                  </DropdownMenuContent>
                </DropdownMenu>
              </div>

              {/* Center - Desktop Search */}
              <div className="hidden md:flex flex-1 max-w-md mx-8">
                <form onSubmit={handleSearch} className="relative w-full">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
                  <Input
                    type="search"
                    placeholder="Search stories, authors..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="pl-10 w-full rounded-full border-gray-300 focus:border-orange-400 focus:ring-orange-400 bg-gray-50"
                  />
                </form>
              </div>

              {/* Right Section */}
              <div className="flex items-center gap-1 sm:gap-2">
                {/* Mobile Search Toggle */}
                <Button
                  variant="ghost"
                  size="sm"
                  className="md:hidden h-8 w-8 p-0"
                  onClick={() => setMobileSearchOpen(!mobileSearchOpen)}
                >
                  <Search className="h-5 w-5" />
                </Button>

                {isAuthenticated ? (
                  <>
                    {/* Write Button - Desktop */}
                    <Button
                      variant="ghost"
                      size="sm"
                      className="hidden sm:flex items-center gap-1 font-medium"
                      asChild
                    >
                      <Link to="/stories/create">
                        <PenTool className="h-4 w-4" />
                        Write
                      </Link>
                    </Button>

                    {/* Notifications - Desktop */}
                    <Button
                      variant="ghost"
                      size="sm"
                      className="hidden sm:block h-8 w-8 p-0"
                    >
                      <Bell className="h-5 w-5" />
                    </Button>

                    {/* User Menu */}
                    <DropdownMenu>
                      <DropdownMenuTrigger asChild>
                        <Button
                          variant="ghost"
                          size="sm"
                          className="h-8 w-8 rounded-full p-0"
                        >
                          <Avatar className="h-8 w-8">
                            <AvatarImage
                              src={user?.profile_pic || undefined}
                              alt={user?.username}
                            />
                            <AvatarFallback className="bg-orange-100 text-orange-700">
                              {user?.username?.charAt(0).toUpperCase() || "U"}
                            </AvatarFallback>
                          </Avatar>
                        </Button>
                      </DropdownMenuTrigger>
                      <DropdownMenuContent
                        className="w-56"
                        align="end"
                        sideOffset={5}
                      >
                        <div className="flex items-center justify-start gap-2 p-2">
                          <div className="flex flex-col space-y-1 leading-none">
                            <p className="font-medium text-sm">
                              {user?.username}
                            </p>
                            <p className="text-xs text-gray-500">
                              {user?.email}
                            </p>
                          </div>
                        </div>
                        <DropdownMenuSeparator />
                        <DropdownMenuItem asChild>
                          <Link
                            to={`/profile/${user?.username}`}
                            className="cursor-pointer"
                          >
                            <User className="mr-2 h-4 w-4" />
                            Profile
                          </Link>
                        </DropdownMenuItem>
                        <DropdownMenuItem asChild>
                          <Link to="/library" className="cursor-pointer">
                            <Library className="mr-2 h-4 w-4" />
                            My Library
                          </Link>
                        </DropdownMenuItem>
                        <DropdownMenuItem asChild>
                          <Link to="/my-stories" className="cursor-pointer">
                            <FileText className="mr-2 h-4 w-4" />
                            My Stories
                          </Link>
                        </DropdownMenuItem>
                        <DropdownMenuItem asChild>
                          <Link
                            to="/stories/create"
                            className="cursor-pointer sm:hidden"
                          >
                            <PenTool className="mr-2 h-4 w-4" />
                            Write Story
                          </Link>
                        </DropdownMenuItem>
                        <DropdownMenuSeparator />
                        <DropdownMenuItem asChild>
                          <Link to="/settings" className="cursor-pointer">
                            <Settings className="mr-2 h-4 w-4" />
                            Settings
                          </Link>
                        </DropdownMenuItem>
                        <DropdownMenuItem
                          onClick={handleLogout}
                          className="cursor-pointer text-red-600 hover:text-red-600 hover:bg-red-50"
                        >
                          <LogOut className="mr-2 h-4 w-4" />
                          Sign Out
                        </DropdownMenuItem>
                      </DropdownMenuContent>
                    </DropdownMenu>
                  </>
                ) : (
                  <>
                    {/* Sign In and Sign Up buttons for non-authenticated users */}
                    <Button
                      variant="ghost"
                      size="sm"
                      className="text-sm font-medium"
                      asChild
                    >
                      <Link to="/auth/login">Sign In</Link>
                    </Button>
                    <Button
                      size="sm"
                      className="hidden sm:inline-flex bg-gradient-to-r from-orange-500 to-amber-500 hover:from-orange-600 hover:to-amber-600 text-white text-sm font-medium"
                      asChild
                    >
                      <Link to="/auth/signup">Sign Up</Link>
                    </Button>
                  </>
                )}
              </div>
            </div>
          </div>

          {/* Mobile Search Bar - Expandable */}
          {mobileSearchOpen && (
            <div className="md:hidden border-t bg-white px-4 py-3">
              <form onSubmit={handleSearch} className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
                <Input
                  type="search"
                  placeholder="Search stories, authors..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="pl-10 w-full rounded-full text-sm border-gray-300 bg-gray-50"
                  autoFocus
                />
              </form>
            </div>
          )}

          {/* Mobile Menu - Slide Down */}
          {mobileMenuOpen && (
            <div className="sm:hidden border-t bg-white">
              <div className="px-4 py-3 space-y-1">
                {/* Browse Section for Mobile */}
                <div className="pb-2 mb-2 border-b border-gray-200">
                  <p className="text-xs uppercase tracking-wider text-gray-500 font-semibold mb-2 px-3">
                    Browse Stories
                  </p>
                  {browseCategories.slice(1, 7).map((category, index) => (
                    <Link
                      key={index}
                      to={category.href}
                      className="block px-3 py-2 rounded-md text-sm font-medium text-gray-700 hover:bg-gray-100"
                      onClick={closeMobileMenu}
                    >
                      {category.label}
                    </Link>
                  ))}
                  <Link
                    to="/stories"
                    className="block px-3 py-2 rounded-md text-sm font-medium text-orange-600 hover:bg-orange-50"
                    onClick={closeMobileMenu}
                  >
                    View All Categories →
                  </Link>
                </div>

                {/* Write Section for Mobile */}
                {isAuthenticated ? (
                  <div className="pb-2 mb-2 border-b border-gray-200">
                    <p className="text-xs uppercase tracking-wider text-gray-500 font-semibold mb-2 px-3">
                      Writing
                    </p>
                    <Link
                      to="/stories/create"
                      className="flex items-center px-3 py-2 rounded-md text-sm font-medium text-gray-700 hover:bg-gray-100"
                      onClick={closeMobileMenu}
                    >
                      <Plus className="mr-2 h-4 w-4" />
                      Create New Story
                    </Link>
                    <Link
                      to="/my-stories"
                      className="flex items-center px-3 py-2 rounded-md text-sm font-medium text-gray-700 hover:bg-gray-100"
                      onClick={closeMobileMenu}
                    >
                      <FileText className="mr-2 h-4 w-4" />
                      My Stories
                    </Link>
                  </div>
                ) : (
                  <div className="pb-2 mb-2 border-b border-gray-200">
                    <p className="text-xs uppercase tracking-wider text-gray-500 font-semibold mb-2 px-3">
                      Get Started
                    </p>
                    <Link
                      to="/auth/signup"
                      className="flex items-center px-3 py-2 rounded-md text-sm font-medium text-gray-700 hover:bg-gray-100"
                      onClick={closeMobileMenu}
                    >
                      <PenTool className="mr-2 h-4 w-4" />
                      Sign Up to Write
                    </Link>
                  </div>
                )}

                {/* User Actions */}
                {isAuthenticated ? (
                  <>
                    <Link
                      to="/library"
                      className="flex items-center px-3 py-2 rounded-md text-sm font-medium text-gray-700 hover:bg-gray-100"
                      onClick={closeMobileMenu}
                    >
                      <Library className="mr-2 h-4 w-4" />
                      My Library
                    </Link>
                    <Link
                      to={`/profile/${user?.username}`}
                      className="flex items-center px-3 py-2 rounded-md text-sm font-medium text-gray-700 hover:bg-gray-100"
                      onClick={closeMobileMenu}
                    >
                      <User className="mr-2 h-4 w-4" />
                      Profile
                    </Link>
                    <Link
                      to="/settings"
                      className="flex items-center px-3 py-2 rounded-md text-sm font-medium text-gray-700 hover:bg-gray-100"
                      onClick={closeMobileMenu}
                    >
                      <Settings className="mr-2 h-4 w-4" />
                      Settings
                    </Link>
                    <button
                      onClick={handleLogout}
                      className="flex items-center w-full text-left px-3 py-2 rounded-md text-sm font-medium text-red-600 hover:bg-red-50"
                    >
                      <LogOut className="mr-2 h-4 w-4" />
                      Sign Out
                    </button>
                  </>
                ) : null}
              </div>
            </div>
          )}
        </div>
      </header>

      {/* Spacer to prevent content from going under fixed header */}
      <div className="h-14 sm:h-16" />
    </>
  );
}
```

---

#### 📄 src\components\layout\main-layout.tsx
<a name='src-components-layout-main-layouttsx'></a>

**Path:** `src\components\layout\main-layout.tsx`

```tsx
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
}

export function MainLayout({
  children,
  className,
  showFooter = true,
}: MainLayoutProps) {
  const { isAuthenticated, fetchMe } = useAuthStore();

  // Fetch user data on mount if authenticated
  useEffect(() => {
    if (isAuthenticated) {
      fetchMe();
    }
  }, [isAuthenticated, fetchMe]);

  return (
    <div className="min-h-screen bg-background flex flex-col">
      <Header />
      <main className={cn("flex-1 flex flex-col", className)}>
        <div className="flex-1">{children}</div>
        {showFooter && !isAuthenticated && <Footer />}
      </main>
    </div>
  );
}
```

---

### 📁 src\components\ui

#### 📄 src\components\ui\auth-skeleton.tsx
<a name='src-components-ui-auth-skeletontsx'></a>

**Path:** `src\components\ui\auth-skeleton.tsx`

```tsx
import { Skeleton } from "./skeleton";

export function AuthFormSkeleton() {
  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center py-12 px-4">
      <div className="max-w-md w-full space-y-8">
        <div className="bg-white py-8 px-6 shadow-xl rounded-lg sm:px-10">
          {/* Logo Skeleton */}
          <div className="flex justify-center mb-6">
            <div className="flex items-center gap-2">
              <Skeleton className="h-10 w-10" variant="rounded" />
              <div className="space-y-1">
                <Skeleton className="h-6 w-24" variant="text" />
                <Skeleton className="h-3 w-20" variant="text" />
              </div>
            </div>
          </div>

          {/* Header Skeleton */}
          <div className="text-center mb-8">
            <Skeleton className="h-8 w-48 mx-auto mb-2" variant="text" />
            <Skeleton className="h-4 w-64 mx-auto" variant="text" />
          </div>

          {/* Form Fields Skeleton */}
          <div className="space-y-5">
            {/* Field 1 */}
            <div>
              <Skeleton className="h-4 w-24 mb-2" variant="text" />
              <Skeleton className="h-10 w-full" variant="rounded" />
            </div>

            {/* Field 2 */}
            <div>
              <div className="flex justify-between items-center mb-2">
                <Skeleton className="h-4 w-24" variant="text" />
                <Skeleton className="h-4 w-28" variant="text" />
              </div>
              <Skeleton className="h-10 w-full" variant="rounded" />
            </div>

            {/* Field 3 */}
            <div>
              <Skeleton className="h-4 w-32 mb-2" variant="text" />
              <Skeleton className="h-10 w-full" variant="rounded" />
            </div>

            {/* Submit Button */}
            <Skeleton className="h-10 w-full" variant="rounded" />
          </div>

          {/* Divider and Footer Link */}
          <div className="mt-6">
            <div className="relative mb-6">
              <div className="absolute inset-0 flex items-center">
                <Skeleton className="h-px w-full" />
              </div>
              <div className="relative flex justify-center">
                <div className="px-2 bg-white">
                  <Skeleton className="h-4 w-32" variant="text" />
                </div>
              </div>
            </div>

            <div className="text-center">
              <Skeleton className="h-4 w-32 mx-auto" variant="text" />
            </div>
          </div>
        </div>

        {/* Terms and Privacy Links */}
        <div className="text-center">
          <Skeleton className="h-3 w-64 mx-auto" variant="text" />
        </div>
      </div>
    </div>
  );
}
```

---

#### 📄 src\components\ui\create-story-skeleton.tsx
<a name='src-components-ui-create-story-skeletontsx'></a>

**Path:** `src\components\ui\create-story-skeleton.tsx`

```tsx
import { Skeleton } from "./skeleton";
import { Card } from "./card";

export function CreateStorySkeleton() {
  return (
    <div className="max-w-6xl mx-auto px-4 py-6">
      {/* Header */}
      <div className="flex items-center justify-between mb-6">
        <Skeleton className="h-8 w-48" variant="text" />
        <div className="flex gap-2">
          <Skeleton className="h-9 w-20" variant="rounded" />
          <Skeleton className="h-9 w-24" variant="rounded" />
          <Skeleton className="h-9 w-32" variant="rounded" />
        </div>
      </div>

      {/* Tabs */}
      <Skeleton className="h-10 w-full max-w-md mb-6" variant="rounded" />

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Cover Upload */}
        <Card>
          <div className="p-4">
            <Skeleton className="h-6 w-32 mb-4" variant="text" />
            <Skeleton className="aspect-[2/3]" variant="rounded" />
          </div>
        </Card>

        {/* Form Fields */}
        <div className="space-y-4">
          <div>
            <Skeleton className="h-4 w-16 mb-2" variant="text" />
            <Skeleton className="h-10 w-full" variant="rounded" />
          </div>

          <div>
            <Skeleton className="h-4 w-24 mb-2" variant="text" />
            <Skeleton className="h-24 w-full" variant="rounded" />
          </div>

          <div>
            <Skeleton className="h-4 w-20 mb-2" variant="text" />
            <Skeleton className="h-10 w-full" variant="rounded" />
          </div>

          <div>
            <Skeleton className="h-4 w-12 mb-2" variant="text" />
            <div className="flex gap-2">
              <Skeleton className="h-10 flex-1" variant="rounded" />
              <Skeleton className="h-10 w-20" variant="rounded" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
```

---

#### 📄 src\components\ui\edit-story-skeleton.tsx
<a name='src-components-ui-edit-story-skeletontsx'></a>

**Path:** `src\components\ui\edit-story-skeleton.tsx`

```tsx
import { Skeleton } from "./skeleton";
import { Card } from "./card";

export function EditStorySkeleton() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white border-b sticky top-0 z-40">
        <div className="max-w-7xl mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              <Skeleton className="h-8 w-24" variant="rounded" />
              <Skeleton className="h-8 w-px" />
              <div>
                <Skeleton className="h-6 w-24" variant="text" />
                <Skeleton className="h-3 w-32 mt-1" variant="text" />
              </div>
            </div>
            <div className="flex gap-2">
              <Skeleton className="h-9 w-24" variant="rounded" />
              <Skeleton className="h-9 w-32" variant="rounded" />
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 py-6">
        {/* Tabs */}
        <Skeleton className="h-10 w-full max-w-md mb-6" variant="rounded" />

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Cover Image Section */}
          <Card className="lg:col-span-1 bg-white">
            <div className="p-4">
              <Skeleton className="h-6 w-32 mb-2" variant="text" />
              <Skeleton className="h-4 w-full mb-4" variant="text" />
              <Skeleton className="aspect-[2/3]" variant="rounded" />
            </div>
          </Card>

          {/* Story Info */}
          <div className="lg:col-span-2 space-y-6">
            <Card className="bg-white">
              <div className="p-6 space-y-4">
                <Skeleton className="h-6 w-40 mb-4" variant="text" />

                {/* Title */}
                <div>
                  <Skeleton className="h-4 w-16 mb-2" variant="text" />
                  <Skeleton className="h-10 w-full" variant="rounded" />
                </div>

                {/* Description */}
                <div>
                  <Skeleton className="h-4 w-24 mb-2" variant="text" />
                  <Skeleton className="h-32 w-full" variant="rounded" />
                </div>

                {/* Genre */}
                <div>
                  <Skeleton className="h-4 w-16 mb-2" variant="text" />
                  <Skeleton className="h-10 w-full" variant="rounded" />
                </div>

                {/* Tags */}
                <div>
                  <Skeleton className="h-4 w-12 mb-2" variant="text" />
                  <div className="flex gap-2">
                    <Skeleton className="h-10 flex-1" variant="rounded" />
                    <Skeleton className="h-10 w-20" variant="rounded" />
                  </div>
                  <div className="flex gap-2 mt-2">
                    {Array.from({ length: 3 }).map((_, i) => (
                      <Skeleton
                        key={i}
                        className="h-6 w-16"
                        variant="rounded"
                      />
                    ))}
                  </div>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}
```

---

#### 📄 src\components\ui\feed-skeleton.tsx
<a name='src-components-ui-feed-skeletontsx'></a>

**Path:** `src\components\ui\feed-skeleton.tsx`

```tsx
import { Skeleton } from "./skeleton";
import { Card } from "./card";

export function FeedSkeleton() {
  return (
    <div className="max-w-6xl mx-auto px-4 py-6">
      {/* Header */}
      <div className="flex items-center justify-between mb-6">
        <Skeleton className="h-8 w-32" variant="text" />
        <div className="flex items-center gap-2">
          <Skeleton className="h-9 w-20" variant="rounded" />
          <Skeleton className="h-9 w-32" variant="rounded" />
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
        <div className="lg:col-span-3">
          {/* Tabs */}
          <Skeleton className="h-10 w-full mb-6" variant="rounded" />

          {/* Grid of story cards */}
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {Array.from({ length: 6 }).map((_, i) => (
              <div
                key={i}
                className="group relative aspect-[4/5] overflow-hidden rounded-lg bg-gray-100"
              >
                <Skeleton className="h-full w-full" variant="rectangular" />
              </div>
            ))}
          </div>
        </div>

        {/* Sidebar */}
        <div className="hidden lg:block space-y-4">
          {/* User Card */}
          <Card className="p-4">
            <div className="flex items-center gap-3">
              <Skeleton className="h-14 w-14" variant="circular" />
              <div className="flex-1">
                <Skeleton className="h-4 w-24 mb-2" variant="text" />
                <Skeleton className="h-3 w-32" variant="text" />
              </div>
            </div>
            <Skeleton className="h-9 w-full mt-4" variant="rounded" />
          </Card>

          {/* Suggested Authors */}
          <Card className="p-4">
            <div className="flex items-center justify-between mb-4">
              <Skeleton className="h-5 w-32" variant="text" />
              <Skeleton className="h-4 w-12" variant="text" />
            </div>
            <div className="space-y-3">
              {Array.from({ length: 3 }).map((_, i) => (
                <div key={i} className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <Skeleton className="h-8 w-8" variant="circular" />
                    <div>
                      <Skeleton className="h-3 w-20 mb-1" variant="text" />
                      <Skeleton className="h-3 w-28" variant="text" />
                    </div>
                  </div>
                  <Skeleton className="h-7 w-16" variant="rounded" />
                </div>
              ))}
            </div>
          </Card>
        </div>
      </div>
    </div>
  );
}
```

---

#### 📄 src\components\ui\file-dropzone.tsx
<a name='src-components-ui-file-dropzonetsx'></a>

**Path:** `src\components\ui\file-dropzone.tsx`

```tsx
'use client';

import { useCallback, useState } from 'react';
import { Upload, X, File, Image } from 'lucide-react';
import { cn } from '@/lib/utils';
import { Button } from './button';

interface FileDropzoneProps {
  onFileSelect: (file: File) => void;
  accept?: string;
  maxSize?: number; // in bytes
  className?: string;
  disabled?: boolean;
  multiple?: boolean;
  value?: File | File[] | null;
  onRemove?: (index?: number) => void;
}

export function FileDropzone({
  onFileSelect,
  accept = 'image/*',
  maxSize = 5 * 1024 * 1024, // 5MB default
  className,
  disabled = false,
  multiple = false,
  value,
  onRemove,
}: FileDropzoneProps) {
  const [isDragOver, setIsDragOver] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const validateFile = useCallback((file: File): boolean => {
    setError(null);
    
    if (maxSize && file.size > maxSize) {
      setError(`File size must be less than ${Math.round(maxSize / 1024 / 1024)}MB`);
      return false;
    }

    if (accept && !accept.split(',').some(type => {
      const trimmedType = type.trim();
      if (trimmedType.endsWith('/*')) {
        return file.type.startsWith(trimmedType.slice(0, -1));
      }
      return file.type === trimmedType;
    })) {
      setError('File type not supported');
      return false;
    }

    return true;
  }, [accept, maxSize]);

  const handleFileSelect = useCallback((files: FileList) => {
    const fileArray = Array.from(files);
    
    if (multiple) {
      const validFiles = fileArray.filter(validateFile);
      validFiles.forEach(onFileSelect);
    } else {
      const file = fileArray[0];
      if (file && validateFile(file)) {
        onFileSelect(file);
      }
    }
  }, [multiple, validateFile, onFileSelect]);

  const handleDrop = useCallback((e: React.DragEvent) => {
    e.preventDefault();
    setIsDragOver(false);
    
    if (disabled) return;
    
    const files = e.dataTransfer.files;
    if (files.length > 0) {
      handleFileSelect(files);
    }
  }, [disabled, handleFileSelect]);

  const handleDragOver = useCallback((e: React.DragEvent) => {
    e.preventDefault();
    if (!disabled) {
      setIsDragOver(true);
    }
  }, [disabled]);

  const handleDragLeave = useCallback(() => {
    setIsDragOver(false);
  }, []);

  const handleClick = () => {
    if (disabled) return;
    
    const input = document.createElement('input');
    input.type = 'file';
    input.accept = accept;
    input.multiple = multiple;
    input.onchange = (e) => {
      const files = (e.target as HTMLInputElement).files;
      if (files) {
        handleFileSelect(files);
      }
    };
    input.click();
  };

  const renderPreview = () => {
    if (!value) return null;

    const files = Array.isArray(value) ? value : [value];
    
    return (
      <div className="mt-4 space-y-2">
        {files.map((file, index) => (
          <div key={`${file.name}-${index}`} className="flex items-center gap-3 p-3 bg-secondary rounded-lg">
            <div className="flex-shrink-0">
              {file.type.startsWith('image/') ? (
                <Image className="h-5 w-5 text-primary" />
              ) : (
                <File className="h-5 w-5 text-muted-foreground" />
              )}
            </div>
            <div className="flex-1 min-w-0">
              <p className="text-sm font-medium truncate">{file.name}</p>
              <p className="text-xs text-muted-foreground">
                {(file.size / 1024 / 1024).toFixed(2)} MB
              </p>
            </div>
            {onRemove && (
              <Button
                type="button"
                variant="ghost"
                size="sm"
                onClick={() => onRemove(multiple ? index : undefined)}
                className="flex-shrink-0"
              >
                <X className="h-4 w-4" />
              </Button>
            )}
          </div>
        ))}
      </div>
    );
  };

  return (
    <div className={cn("space-y-2", className)}>
      <div
        className={cn(
          "relative border-2 border-dashed rounded-lg p-6 transition-colors cursor-pointer",
          "hover:border-primary/50 hover:bg-primary/5",
          isDragOver && "border-primary bg-primary/10",
          disabled && "opacity-50 cursor-not-allowed",
          error && "border-destructive",
          !error && !isDragOver && "border-border"
        )}
        onDrop={handleDrop}
        onDragOver={handleDragOver}
        onDragLeave={handleDragLeave}
        onClick={handleClick}
      >
        <div className="flex flex-col items-center justify-center text-center">
          <Upload className={cn(
            "h-10 w-10 mb-4",
            isDragOver ? "text-primary" : "text-muted-foreground"
          )} />
          <p className="text-sm font-medium mb-1">
            Drop files here or click to browse
          </p>
          <p className="text-xs text-muted-foreground">
            {accept === 'image/*' ? 'Images only' : accept} • Max {Math.round(maxSize / 1024 / 1024)}MB
          </p>
        </div>
      </div>
      
      {error && (
        <p className="text-sm text-destructive">{error}</p>
      )}
      
      {renderPreview()}
    </div>
  );
}
```

---

#### 📄 src\components\ui\image-with-fallback.tsx
<a name='src-components-ui-image-with-fallbacktsx'></a>

**Path:** `src\components\ui\image-with-fallback.tsx`

```tsx
'use client';

import { useState } from 'react';
import { cn } from '@/lib/utils';

interface ImageWithFallbackProps extends React.ImgHTMLAttributes<HTMLImageElement> {
  fallback?: string;
  fallbackComponent?: React.ReactNode;
}

export function ImageWithFallback({
  src,
  fallback = '/placeholder.svg',
  fallbackComponent,
  className,
  alt,
  ...props
}: ImageWithFallbackProps) {
  const [hasError, setHasError] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  const handleError = () => {
    setHasError(true);
    setIsLoading(false);
  };

  const handleLoad = () => {
    setIsLoading(false);
  };

  if (hasError && fallbackComponent) {
    return <>{fallbackComponent}</>;
  }

  return (
    <div className="relative">
      {isLoading && (
        <div className={cn(
          "absolute inset-0 bg-muted animate-pulse rounded",
          className
        )} />
      )}
      <img
        {...props}
        src={hasError ? fallback : src}
        alt={alt}
        className={cn(
          "transition-opacity duration-200",
          isLoading ? "opacity-0" : "opacity-100",
          className
        )}
        onError={handleError}
        onLoad={handleLoad}
      />
    </div>
  );
}
```

---

#### 📄 src\components\ui\loading-spinner.tsx
<a name='src-components-ui-loading-spinnertsx'></a>

**Path:** `src\components\ui\loading-spinner.tsx`

```tsx
import { cn } from '@/lib/utils';

interface LoadingSpinnerProps {
  size?: 'sm' | 'md' | 'lg';
  className?: string;
}

export function LoadingSpinner({ size = 'md', className }: LoadingSpinnerProps) {
  const sizeClasses = {
    sm: 'h-4 w-4',
    md: 'h-6 w-6',
    lg: 'h-8 w-8'
  };

  return (
    <div className={cn(
      "animate-spin rounded-full border-2 border-current border-t-transparent",
      sizeClasses[size],
      className
    )} />
  );
}
```

---

#### 📄 src\components\ui\logo.tsx
<a name='src-components-ui-logotsx'></a>

**Path:** `src\components\ui\logo.tsx`

```tsx
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
```

---

#### 📄 src\components\ui\profile-skeleton.tsx
<a name='src-components-ui-profile-skeletontsx'></a>

**Path:** `src\components\ui\profile-skeleton.tsx`

```tsx
import { Skeleton } from "./skeleton";
import { Card } from "./card";

export function ProfileSkeleton() {
  return (
    <div className="max-w-5xl mx-auto px-4 py-8">
      {/* Profile Header Skeleton */}
      <div className="flex flex-col md:flex-row items-start md:items-center gap-6 md:gap-8 mb-8">
        <Skeleton
          className="h-28 w-28 sm:h-32 sm:w-32 md:h-40 md:w-40"
          variant="circular"
        />

        <div className="flex-1 w-full space-y-3">
          <div className="flex flex-col md:flex-row md:items-center gap-4">
            <Skeleton className="h-8 w-32" variant="text" />
            <div className="flex gap-2">
              <Skeleton className="h-8 w-24" variant="rounded" />
              <Skeleton className="h-8 w-8" variant="rounded" />
            </div>
          </div>

          {/* Stats */}
          <div className="flex gap-6">
            <Skeleton className="h-5 w-20" variant="text" />
            <Skeleton className="h-5 w-24" variant="text" />
            <Skeleton className="h-5 w-24" variant="text" />
          </div>

          {/* Bio */}
          <Skeleton className="h-4 w-full max-w-md" variant="text" />
          <Skeleton className="h-4 w-3/4 max-w-md" variant="text" />

          {/* Additional Info */}
          <div className="flex gap-4">
            <Skeleton className="h-4 w-32" variant="text" />
            <Skeleton className="h-6 w-24" variant="rounded" />
          </div>
        </div>
      </div>

      {/* Tabs Skeleton */}
      <Skeleton className="h-10 w-full max-w-xs mb-6" variant="rounded" />

      {/* Stories Grid Skeleton */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-1 md:gap-4">
        {Array.from({ length: 6 }).map((_, i) => (
          <Skeleton key={i} className="aspect-[4/5]" variant="rounded" />
        ))}
      </div>
    </div>
  );
}
```

---

#### 📄 src\components\ui\reader-skeleton.tsx
<a name='src-components-ui-reader-skeletontsx'></a>

**Path:** `src\components\ui\reader-skeleton.tsx`

```tsx
import { Skeleton } from "./skeleton";
import { Card } from "./card";

export function ReaderSkeleton() {
  return (
    <div className="min-h-screen bg-background">
      {/* Reader Header */}
      <header className="sticky top-0 z-50 border-b bg-background/95 backdrop-blur">
        <div className="container mx-auto px-4 py-3">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              <Skeleton className="h-8 w-20" variant="rounded" />
              <div className="hidden md:block space-y-1">
                <Skeleton className="h-5 w-48" variant="text" />
                <Skeleton className="h-4 w-32" variant="text" />
              </div>
            </div>
            <div className="flex gap-2">
              <Skeleton className="h-8 w-24" variant="rounded" />
              <Skeleton className="h-8 w-8" variant="rounded" />
            </div>
          </div>
        </div>
      </header>

      {/* Reader Content */}
      <main className="container mx-auto px-4 py-8 max-w-4xl">
        <div className="mb-8">
          <Skeleton className="h-10 w-3/4 mb-2" variant="text" />
          <div className="flex gap-4">
            <Skeleton className="h-5 w-32" variant="text" />
            <Skeleton className="h-5 w-24" variant="rounded" />
          </div>
        </div>

        <Card>
          <div className="p-8 space-y-4">
            {Array.from({ length: 15 }).map((_, i) => (
              <Skeleton
                key={i}
                className="h-4 w-full"
                variant="text"
                style={{ width: `${Math.random() * 20 + 80}%` }}
              />
            ))}
          </div>
        </Card>

        {/* Navigation */}
        <div className="flex justify-between mt-8">
          <Skeleton className="h-10 w-36" variant="rounded" />
          <Skeleton className="h-5 w-12" variant="text" />
          <Skeleton className="h-10 w-36" variant="rounded" />
        </div>
      </main>
    </div>
  );
}
```

---

#### 📄 src\components\ui\story-card-skeleton.tsx
<a name='src-components-ui-story-card-skeletontsx'></a>

**Path:** `src\components\ui\story-card-skeleton.tsx`

```tsx
import { Skeleton } from "./skeleton";
import { Card } from "./card";

interface StoryCardSkeletonProps {
  variant?: "default" | "compact" | "list" | "featured";
}

export function StoryCardSkeleton({
  variant = "default",
}: StoryCardSkeletonProps) {
  if (variant === "compact" || variant === "list") {
    return (
      <div className="flex gap-3 p-3">
        <Skeleton width={64} height={80} variant="rounded" />
        <div className="flex-1 space-y-2">
          <Skeleton className="h-4 w-3/4" variant="text" />
          <Skeleton className="h-3 w-full" variant="text" />
          <Skeleton className="h-3 w-1/2" variant="text" />
        </div>
      </div>
    );
  }

  if (variant === "featured") {
    return (
      <Card className="overflow-hidden">
        <Skeleton className="aspect-[16/9] w-full" variant="rectangular" />
        <div className="p-4 space-y-3">
          <Skeleton className="h-6 w-20" variant="rounded" />
          <Skeleton className="h-5 w-3/4" variant="text" />
          <Skeleton className="h-4 w-full" variant="text" />
          <div className="flex justify-between">
            <Skeleton className="h-3 w-16" variant="text" />
            <Skeleton className="h-3 w-16" variant="text" />
          </div>
        </div>
      </Card>
    );
  }

  return (
    <Card className="overflow-hidden">
      <Skeleton className="aspect-[2/3] w-full" variant="rectangular" />
      <div className="p-4 space-y-3">
        <Skeleton className="h-5 w-3/4" variant="text" />
        <Skeleton className="h-4 w-full" variant="text" />
        <Skeleton className="h-4 w-2/3" variant="text" />
        <div className="flex gap-2">
          <Skeleton className="h-6 w-16" variant="rounded" />
          <Skeleton className="h-6 w-16" variant="rounded" />
        </div>
      </div>
    </Card>
  );
}
```

---

#### 📄 src\components\ui\story-card.tsx
<a name='src-components-ui-story-cardtsx'></a>

**Path:** `src\components\ui\story-card.tsx`

```tsx
'use client';

import { Link } from 'react-router-dom';
import { Eye, Heart, MessageCircle, Clock } from 'lucide-react';
import { Story } from '@/types';
import { ImageWithFallback } from './image-with-fallback';
import { Badge } from './badge';
import { cn } from '@/lib/utils';

interface StoryCardProps {
  story: Story;
  className?: string;
  showStats?: boolean;
  variant?: 'default' | 'compact' | 'featured';
}

export function StoryCard({ 
  story, 
  className, 
  showStats = true,
  variant = 'default' 
}: StoryCardProps) {
  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return new Intl.RelativeTimeFormat('en', { numeric: 'auto' }).format(
      Math.ceil((date.getTime() - Date.now()) / (1000 * 60 * 60 * 24)),
      'day'
    );
  };

  const formatCount = (count: number) => {
    if (count >= 1000000) return `${(count / 1000000).toFixed(1)}M`;
    if (count >= 1000) return `${(count / 1000).toFixed(1)}K`;
    return count.toString();
  };

  if (variant === 'compact') {
    return (
      <Link to={`/stories/${story.id}`}>
        <div className={cn(
          "group flex gap-3 p-3 rounded-lg transition-colors hover:bg-secondary/50",
          className
        )}>
          <div className="relative flex-shrink-0">
            <ImageWithFallback
              src={story.cover_image || '/placeholder.svg'}
              alt={story.title}
              className="w-16 h-20 object-cover rounded-md"
            />
          </div>
          <div className="flex-1 min-w-0">
            <h3 className="font-semibold text-sm line-clamp-2 group-hover:text-primary transition-colors">
              {story.title}
            </h3>
            <p className="text-xs text-muted-foreground mt-1 line-clamp-2">
              {story.description}
            </p>
            <div className="flex items-center gap-2 mt-2">
              <Badge variant="secondary" className="text-xs px-2 py-0">
                {story.genre}
              </Badge>
              {showStats && (
                <div className="flex items-center gap-1 text-xs text-muted-foreground">
                  <Eye className="h-3 w-3" />
                  {formatCount(story.reads_count)}
                </div>
              )}
            </div>
          </div>
        </div>
      </Link>
    );
  }

  if (variant === 'featured') {
    return (
      <Link to={`/stories/${story.id}`}>
        <div className={cn(
          "group relative overflow-hidden rounded-xl bg-gradient-card shadow-medium hover:shadow-strong transition-all duration-300",
          className
        )}>
          <div className="aspect-[16/9] relative">
            <ImageWithFallback
              src={story.cover_image || '/placeholder.svg'}
              alt={story.title}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
            <div className="absolute bottom-4 left-4 right-4 text-white">
              <Badge variant="secondary" className="mb-2 bg-primary text-primary-foreground">
                {story.genre}
              </Badge>
              <h3 className="font-bold text-lg line-clamp-2 group-hover:text-primary-light transition-colors">
                {story.title}
              </h3>
              <p className="text-sm text-gray-200 mt-1 line-clamp-2">
                {story.description}
              </p>
            </div>
          </div>
          {showStats && (
            <div className="p-4 flex items-center justify-between text-sm text-muted-foreground">
              <div className="flex items-center gap-4">
                <div className="flex items-center gap-1">
                  <Eye className="h-4 w-4" />
                  {formatCount(story.reads_count)}
                </div>
                <div className="flex items-center gap-1">
                  <Heart className="h-4 w-4" />
                  {formatCount(story.votes_count)}
                </div>
                <div className="flex items-center gap-1">
                  <MessageCircle className="h-4 w-4" />
                  {formatCount(story.comments_count)}
                </div>
              </div>
              <div className="flex items-center gap-1">
                <Clock className="h-4 w-4" />
                {formatDate(story.updated_at)}
              </div>
            </div>
          )}
        </div>
      </Link>
    );
  }

  return (
    <Link to={`/stories/${story.id}`}>
      <div className={cn(
        "group bg-card rounded-lg shadow-soft hover:shadow-medium transition-all duration-300 overflow-hidden",
        className
      )}>
        <div className="aspect-[2/3] relative">
          <ImageWithFallback
            src={story.cover_image || '/placeholder.svg'}
            alt={story.title}
            className="w-full h-full object-cover"
          />
          <div className="absolute top-2 right-2">
            <Badge variant="secondary" className="bg-background/90 text-foreground">
              {story.genre}
            </Badge>
          </div>
        </div>
        <div className="p-4">
          <h3 className="font-semibold line-clamp-2 group-hover:text-primary transition-colors">
            {story.title}
          </h3>
          <p className="text-sm text-muted-foreground mt-1 line-clamp-2">
            {story.description}
          </p>
          {story.tags.length > 0 && (
            <div className="flex flex-wrap gap-1 mt-2">
              {story.tags.slice(0, 2).map((tag, index) => (
                <Badge key={index} variant="outline" className="text-xs">
                  {tag}
                </Badge>
              ))}
              {story.tags.length > 2 && (
                <span className="text-xs text-muted-foreground">
                  +{story.tags.length - 2} more
                </span>
              )}
            </div>
          )}
          {showStats && (
            <div className="flex items-center justify-between mt-3 text-sm text-muted-foreground">
              <div className="flex items-center gap-3">
                <div className="flex items-center gap-1">
                  <Eye className="h-4 w-4" />
                  {formatCount(story.reads_count)}
                </div>
                <div className="flex items-center gap-1">
                  <Heart className="h-4 w-4" />
                  {formatCount(story.votes_count)}
                </div>
              </div>
              <div className="flex items-center gap-1">
                <Clock className="h-4 w-4" />
                {formatDate(story.updated_at)}
              </div>
            </div>
          )}
        </div>
      </div>
    </Link>
  );
}
```

---

#### 📄 src\components\ui\story-detail-skeleton.tsx
<a name='src-components-ui-story-detail-skeletontsx'></a>

**Path:** `src\components\ui\story-detail-skeleton.tsx`

```tsx
import { Skeleton } from "./skeleton";
import { Card } from "./card";

export function StoryDetailSkeleton() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-background to-muted/20">
      {/* Hero Section */}
      <div className="relative">
        <Skeleton
          className="absolute inset-0 h-[500px]"
          variant="rectangular"
        />
        <div className="absolute inset-0 h-[500px] bg-gradient-to-b from-black/70 via-black/50 to-background" />

        <div className="relative z-10 max-w-7xl mx-auto px-4 pt-8 pb-20">
          <Skeleton className="h-9 w-20 mb-4" variant="rounded" />

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="flex justify-center lg:justify-start">
              <Skeleton className="w-64 h-96 rounded-xl" variant="rounded" />
            </div>

            <div className="lg:col-span-2 space-y-6">
              <div>
                <Skeleton className="h-12 w-3/4 mb-3" variant="text" />
                <Skeleton className="h-6 w-full mb-2" variant="text" />
                <Skeleton className="h-6 w-5/6" variant="text" />
              </div>

              {/* Author Info */}
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4">
                <div className="flex items-center gap-4">
                  <Skeleton className="h-14 w-14" variant="circular" />
                  <div>
                    <Skeleton className="h-5 w-32 mb-2" variant="text" />
                    <Skeleton className="h-4 w-48" variant="text" />
                  </div>
                  <Skeleton className="h-9 w-24 ml-auto" variant="rounded" />
                </div>
              </div>

              {/* Stats Grid */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                {Array.from({ length: 4 }).map((_, i) => (
                  <Skeleton
                    key={i}
                    className="h-24 rounded-lg"
                    variant="rounded"
                  />
                ))}
              </div>

              {/* Action Buttons */}
              <div className="flex flex-col sm:flex-row gap-3">
                <Skeleton className="h-11 w-36" variant="rounded" />
                <Skeleton className="h-11 w-24" variant="rounded" />
                <Skeleton className="h-11 w-24" variant="rounded" />
                <Skeleton className="h-11 w-24" variant="rounded" />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Content Area */}
      <div className="max-w-7xl mx-auto px-4 py-8">
        <Card className="bg-white p-6">
          <Skeleton className="h-6 w-32 mb-4" variant="text" />
          <Skeleton className="h-4 w-full mb-2" variant="text" />
          <Skeleton className="h-4 w-full mb-2" variant="text" />
          <Skeleton className="h-4 w-3/4" variant="text" />
        </Card>
      </div>
    </div>
  );
}
```

---

#### 📄 src\components\ui\toast-provider.tsx
<a name='src-components-ui-toast-providertsx'></a>

**Path:** `src\components\ui\toast-provider.tsx`

```tsx
'use client';

import { useEffect } from 'react';
import { CheckCircle, XCircle, AlertCircle, Info, X } from 'lucide-react';
import { useUiStore } from '@/store/uiStore';
import { cn } from '@/lib/utils';

const toastIcons = {
  success: CheckCircle,
  error: XCircle,
  warning: AlertCircle,
  info: Info,
};

const toastStyles = {
  success: 'bg-success-light text-success border-success/20',
  error: 'bg-destructive-light text-destructive border-destructive/20',
  warning: 'bg-warning-light text-warning border-warning/20',
  info: 'bg-accent/10 text-accent border-accent/20',
};

export function ToastProvider() {
  const { toasts, removeToast } = useUiStore();

  return (
    <div className="fixed top-4 right-4 z-50 space-y-2">
      {toasts.map((toast) => {
        const Icon = toastIcons[toast.type];
        
        return (
          <div
            key={toast.id}
            className={cn(
              "flex items-start gap-3 p-4 rounded-lg border shadow-medium max-w-sm animate-in slide-in-from-right-full",
              toastStyles[toast.type]
            )}
          >
            <Icon className="h-5 w-5 flex-shrink-0 mt-0.5" />
            <div className="flex-1 min-w-0">
              <h4 className="font-semibold text-sm">{toast.title}</h4>
              {toast.description && (
                <p className="text-sm opacity-90 mt-1">{toast.description}</p>
              )}
            </div>
            <button
              onClick={() => removeToast(toast.id)}
              className="flex-shrink-0 opacity-70 hover:opacity-100 transition-opacity"
            >
              <X className="h-4 w-4" />
            </button>
          </div>
        );
      })}
    </div>
  );
}
```

---

#### 📄 src\components\ui\toast.tsx
<a name='src-components-ui-toasttsx'></a>

**Path:** `src\components\ui\toast.tsx`

```tsx
import * as React from "react";
import * as ToastPrimitives from "@radix-ui/react-toast";
import { cva, type VariantProps } from "class-variance-authority";
import { X } from "lucide-react";

import { cn } from "@/lib/utils";

const ToastProvider = ToastPrimitives.Provider;

const ToastViewport = React.forwardRef<
  React.ElementRef<typeof ToastPrimitives.Viewport>,
  React.ComponentPropsWithoutRef<typeof ToastPrimitives.Viewport>
>(({ className, ...props }, ref) => (
  <ToastPrimitives.Viewport
    ref={ref}
    className={cn(
      "fixed top-0 z-[100] flex max-h-screen w-full flex-col-reverse p-4 sm:bottom-0 sm:right-0 sm:top-auto sm:flex-col md:max-w-[420px]",
      className,
    )}
    {...props}
  />
));
ToastViewport.displayName = ToastPrimitives.Viewport.displayName;

const toastVariants = cva(
  "group pointer-events-auto relative flex w-full items-center justify-between space-x-4 overflow-hidden rounded-md border p-6 pr-8 shadow-lg transition-all data-[swipe=cancel]:translate-x-0 data-[swipe=end]:translate-x-[var(--radix-toast-swipe-end-x)] data-[swipe=move]:translate-x-[var(--radix-toast-swipe-move-x)] data-[swipe=move]:transition-none data-[state=open]:animate-in data-[state=closed]:animate-out data-[swipe=end]:animate-out data-[state=closed]:fade-out-80 data-[state=closed]:slide-out-to-right-full data-[state=open]:slide-in-from-top-full data-[state=open]:sm:slide-in-from-bottom-full",
  {
    variants: {
      variant: {
        default: "border bg-background text-foreground",
        destructive: "destructive group border-destructive bg-destructive text-destructive-foreground",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  },
);

const Toast = React.forwardRef<
  React.ElementRef<typeof ToastPrimitives.Root>,
  React.ComponentPropsWithoutRef<typeof ToastPrimitives.Root> & VariantProps<typeof toastVariants>
>(({ className, variant, ...props }, ref) => {
  return <ToastPrimitives.Root ref={ref} className={cn(toastVariants({ variant }), className)} {...props} />;
});
Toast.displayName = ToastPrimitives.Root.displayName;

const ToastAction = React.forwardRef<
  React.ElementRef<typeof ToastPrimitives.Action>,
  React.ComponentPropsWithoutRef<typeof ToastPrimitives.Action>
>(({ className, ...props }, ref) => (
  <ToastPrimitives.Action
    ref={ref}
    className={cn(
      "inline-flex h-8 shrink-0 items-center justify-center rounded-md border bg-transparent px-3 text-sm font-medium ring-offset-background transition-colors group-[.destructive]:border-muted/40 hover:bg-secondary group-[.destructive]:hover:border-destructive/30 group-[.destructive]:hover:bg-destructive group-[.destructive]:hover:text-destructive-foreground focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 group-[.destructive]:focus:ring-destructive disabled:pointer-events-none disabled:opacity-50",
      className,
    )}
    {...props}
  />
));
ToastAction.displayName = ToastPrimitives.Action.displayName;

const ToastClose = React.forwardRef<
  React.ElementRef<typeof ToastPrimitives.Close>,
  React.ComponentPropsWithoutRef<typeof ToastPrimitives.Close>
>(({ className, ...props }, ref) => (
  <ToastPrimitives.Close
    ref={ref}
    className={cn(
      "absolute right-2 top-2 rounded-md p-1 text-foreground/50 opacity-0 transition-opacity group-hover:opacity-100 group-[.destructive]:text-red-300 hover:text-foreground group-[.destructive]:hover:text-red-50 focus:opacity-100 focus:outline-none focus:ring-2 group-[.destructive]:focus:ring-red-400 group-[.destructive]:focus:ring-offset-red-600",
      className,
    )}
    toast-close=""
    {...props}
  >
    <X className="h-4 w-4" />
  </ToastPrimitives.Close>
));
ToastClose.displayName = ToastPrimitives.Close.displayName;

const ToastTitle = React.forwardRef<
  React.ElementRef<typeof ToastPrimitives.Title>,
  React.ComponentPropsWithoutRef<typeof ToastPrimitives.Title>
>(({ className, ...props }, ref) => (
  <ToastPrimitives.Title ref={ref} className={cn("text-sm font-semibold", className)} {...props} />
));
ToastTitle.displayName = ToastPrimitives.Title.displayName;

const ToastDescription = React.forwardRef<
  React.ElementRef<typeof ToastPrimitives.Description>,
  React.ComponentPropsWithoutRef<typeof ToastPrimitives.Description>
>(({ className, ...props }, ref) => (
  <ToastPrimitives.Description ref={ref} className={cn("text-sm opacity-90", className)} {...props} />
));
ToastDescription.displayName = ToastPrimitives.Description.displayName;

type ToastProps = React.ComponentPropsWithoutRef<typeof Toast>;

type ToastActionElement = React.ReactElement<typeof ToastAction>;

export {
  type ToastProps,
  type ToastActionElement,
  ToastProvider,
  ToastViewport,
  Toast,
  ToastTitle,
  ToastDescription,
  ToastClose,
  ToastAction,
};
```

---

### 📁 src\pages\auth

#### 📄 src\pages\auth\LoginPage.tsx
<a name='src-pages-auth-LoginPagetsx'></a>

**Path:** `src\pages\auth\LoginPage.tsx`

```tsx
// src/pages/auth/LoginPage.tsx
"use client";

import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Eye, EyeOff, Mail, Lock, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Alert, AlertDescription } from "@/components/ui/alert";
import { LoadingSpinner } from "@/components/ui/loading-spinner";
import { Logo } from "@/components/ui/logo";
import { useAuthStore } from "@/store/authStore";
import { cn } from "@/lib/utils";

export function LoginPage() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const [showPassword, setShowPassword] = useState(false);
  const [errors, setErrors] = useState<Record<string, string>>({});

  const { login, isLoading, error, clearError } = useAuthStore();

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));

    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: "" }));
    }
    clearError();
  };

  const validateForm = () => {
    const newErrors: Record<string, string> = {};

    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "Please enter a valid email";
    }

    if (!formData.password) {
      newErrors.password = "Password is required";
    } else if (formData.password.length < 6) {
      newErrors.password = "Password must be at least 6 characters";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validateForm()) return;

    try {
      await login(formData.email, formData.password);
      navigate("/feed");
    } catch (error: any) {
      if (error.details) {
        const fieldErrors: Record<string, string> = {};
        Object.entries(error.details).forEach(([field, messages]) => {
          fieldErrors[field] = Array.isArray(messages) ? messages[0] : messages;
        });
        setErrors(fieldErrors);
      }
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full space-y-8">
        {/* Card Container */}
        <div className="bg-white py-8 px-6 shadow-xl rounded-lg sm:px-10">
          {/* Logo */}
          <div className="flex justify-center mb-6">
            <Logo size="md" showText={true} />
          </div>

          {/* Header */}
          <div className="text-center mb-8">
            <h2 className="text-2xl font-bold text-gray-900">Welcome back!</h2>
            <p className="mt-2 text-sm text-gray-600">
              Sign in to continue your reading journey
            </p>
          </div>

          {/* Error Alert */}
          {error && (
            <Alert variant="destructive" className="mb-6">
              <AlertDescription>{error}</AlertDescription>
            </Alert>
          )}

          {/* Form */}
          <form onSubmit={handleSubmit} className="space-y-5">
            {/* Email Field */}
            <div>
              <Label
                htmlFor="email"
                className="block text-sm font-medium text-gray-700 mb-1"
              >
                Email Address
              </Label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <Mail className="h-4 w-4 text-gray-400" />
                </div>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  autoComplete="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  placeholder="your@email.com"
                  className={cn(
                    "pl-10 block w-full",
                    "border-gray-300 focus:border-orange-500 focus:ring-orange-500",
                    errors.email &&
                      "border-red-500 focus:border-red-500 focus:ring-red-500"
                  )}
                  disabled={isLoading}
                />
              </div>
              {errors.email && (
                <p className="mt-1 text-sm text-red-600">{errors.email}</p>
              )}
            </div>

            {/* Password Field */}
            <div>
              <div className="flex items-center justify-between mb-1">
                <Label
                  htmlFor="password"
                  className="block text-sm font-medium text-gray-700"
                >
                  Password
                </Label>
                <Link
                  to="/auth/forgot-password"
                  className="text-sm text-orange-600 hover:text-orange-500"
                >
                  Forgot password?
                </Link>
              </div>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <Lock className="h-4 w-4 text-gray-400" />
                </div>
                <Input
                  id="password"
                  name="password"
                  type={showPassword ? "text" : "password"}
                  autoComplete="current-password"
                  value={formData.password}
                  onChange={handleInputChange}
                  placeholder="••••••••"
                  className={cn(
                    "pl-10 pr-10 block w-full",
                    "border-gray-300 focus:border-orange-500 focus:ring-orange-500",
                    errors.password &&
                      "border-red-500 focus:border-red-500 focus:ring-red-500"
                  )}
                  disabled={isLoading}
                />
                <button
                  type="button"
                  className="absolute inset-y-0 right-0 pr-3 flex items-center"
                  onClick={() => setShowPassword(!showPassword)}
                >
                  {showPassword ? (
                    <EyeOff className="h-4 w-4 text-gray-400 hover:text-gray-600" />
                  ) : (
                    <Eye className="h-4 w-4 text-gray-400 hover:text-gray-600" />
                  )}
                </button>
              </div>
              {errors.password && (
                <p className="mt-1 text-sm text-red-600">{errors.password}</p>
              )}
            </div>

            {/* Submit Button */}
            <div>
              <Button
                type="submit"
                className="w-full flex justify-center items-center py-2.5 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-orange-500"
                disabled={isLoading}
              >
                {isLoading ? (
                  <>
                    <LoadingSpinner size="sm" className="mr-2" />
                    Signing in...
                  </>
                ) : (
                  <>
                    <Sparkles className="h-4 w-4 mr-2" />
                    Sign In to StoriVault
                  </>
                )}
              </Button>
            </div>
          </form>

          {/* Sign Up Link */}
          <div className="mt-6">
            <div className="relative">
              <div className="absolute inset-0 flex items-center">
                <div className="w-full border-t border-gray-200" />
              </div>
              <div className="relative flex justify-center text-sm">
                <span className="px-2 bg-white text-gray-500">
                  New to StoriVault?
                </span>
              </div>
            </div>

            <div className="mt-6 text-center">
              <Link
                to="/auth/signup"
                className="font-medium text-orange-600 hover:text-orange-500"
              >
                Create an account
              </Link>
            </div>
          </div>
        </div>

        {/* Terms and Privacy */}
        <p className="text-center text-xs text-gray-500">
          By signing in, you agree to our{" "}
          <Link to="/terms" className="text-orange-600 hover:text-orange-500">
            Terms of Service
          </Link>{" "}
          and{" "}
          <Link to="/privacy" className="text-orange-600 hover:text-orange-500">
            Privacy Policy
          </Link>
        </p>
      </div>
    </div>
  );
}
```

---

#### 📄 src\pages\auth\SignupPage.tsx
<a name='src-pages-auth-SignupPagetsx'></a>

**Path:** `src\pages\auth\SignupPage.tsx`

```tsx
// src/pages/auth/SignupPage.tsx
"use client";

import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Eye, EyeOff, Mail, Lock, User, Sparkles, Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Alert, AlertDescription } from "@/components/ui/alert";
import { LoadingSpinner } from "@/components/ui/loading-spinner";
import { Progress } from "@/components/ui/progress";
import { Logo } from "@/components/ui/logo";
import { useAuthStore } from "@/store/authStore";
import { cn } from "@/lib/utils";

export function SignupPage() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
    confirmPassword: "",
  });
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [passwordStrength, setPasswordStrength] = useState(0);

  const { signup, isLoading, error, clearError } = useAuthStore();

  const calculatePasswordStrength = (password: string) => {
    let strength = 0;
    if (password.length >= 8) strength += 25;
    if (password.match(/[a-z]/) && password.match(/[A-Z]/)) strength += 25;
    if (password.match(/[0-9]/)) strength += 25;
    if (password.match(/[^a-zA-Z0-9]/)) strength += 25;
    setPasswordStrength(strength);
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));

    if (name === "password") {
      calculatePasswordStrength(value);
    }

    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: "" }));
    }
    clearError();
  };

  const validateForm = () => {
    const newErrors: Record<string, string> = {};

    if (!formData.username.trim()) {
      newErrors.username = "Username is required";
    } else if (formData.username.length < 3) {
      newErrors.username = "Username must be at least 3 characters";
    } else if (!/^[a-zA-Z0-9_-]+$/.test(formData.username)) {
      newErrors.username =
        "Username can only contain letters, numbers, hyphens, and underscores";
    }

    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "Please enter a valid email";
    }

    if (!formData.password) {
      newErrors.password = "Password is required";
    } else if (formData.password.length < 8) {
      newErrors.password = "Password must be at least 8 characters";
    }

    if (!formData.confirmPassword) {
      newErrors.confirmPassword = "Please confirm your password";
    } else if (formData.password !== formData.confirmPassword) {
      newErrors.confirmPassword = "Passwords do not match";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validateForm()) return;

    try {
      await signup(formData.username, formData.email, formData.password);
      navigate("/feed");
    } catch (error: any) {
      if (error.details) {
        const fieldErrors: Record<string, string> = {};
        Object.entries(error.details).forEach(([field, messages]) => {
          fieldErrors[field] = Array.isArray(messages) ? messages[0] : messages;
        });
        setErrors(fieldErrors);
      }
    }
  };

  const getPasswordStrengthColor = () => {
    if (passwordStrength <= 25) return "bg-red-500";
    if (passwordStrength <= 50) return "bg-orange-500";
    if (passwordStrength <= 75) return "bg-yellow-500";
    return "bg-green-500";
  };

  const getPasswordStrengthText = () => {
    if (passwordStrength <= 25) return "Weak";
    if (passwordStrength <= 50) return "Fair";
    if (passwordStrength <= 75) return "Good";
    return "Strong";
  };

  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full space-y-8">
        {/* Card Container */}
        <div className="bg-white py-8 px-6 shadow-xl rounded-lg sm:px-10">
          {/* Logo */}
          <div className="flex justify-center mb-6">
            <Logo size="md" showText={true} />
          </div>

          {/* Header */}
          <div className="text-center mb-8">
            <h2 className="text-2xl font-bold text-gray-900">
              Join StoriVault
            </h2>
            <p className="mt-2 text-sm text-gray-600">
              Create your account and start your literary journey
            </p>
          </div>

          {/* Error Alert */}
          {error && (
            <Alert variant="destructive" className="mb-6">
              <AlertDescription>{error}</AlertDescription>
            </Alert>
          )}

          {/* Form */}
          <form onSubmit={handleSubmit} className="space-y-5">
            {/* Username Field */}
            <div>
              <Label
                htmlFor="username"
                className="block text-sm font-medium text-gray-700 mb-1"
              >
                Username
              </Label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <User className="h-4 w-4 text-gray-400" />
                </div>
                <Input
                  id="username"
                  name="username"
                  type="text"
                  autoComplete="username"
                  value={formData.username}
                  onChange={handleInputChange}
                  placeholder="Choose your pen name"
                  className={cn(
                    "pl-10 block w-full",
                    "border-gray-300 focus:border-orange-500 focus:ring-orange-500",
                    errors.username &&
                      "border-red-500 focus:border-red-500 focus:ring-red-500"
                  )}
                  disabled={isLoading}
                />
              </div>
              {errors.username && (
                <p className="mt-1 text-sm text-red-600">{errors.username}</p>
              )}
            </div>

            {/* Email Field */}
            <div>
              <Label
                htmlFor="email"
                className="block text-sm font-medium text-gray-700 mb-1"
              >
                Email Address
              </Label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <Mail className="h-4 w-4 text-gray-400" />
                </div>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  autoComplete="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  placeholder="your@email.com"
                  className={cn(
                    "pl-10 block w-full",
                    "border-gray-300 focus:border-orange-500 focus:ring-orange-500",
                    errors.email &&
                      "border-red-500 focus:border-red-500 focus:ring-red-500"
                  )}
                  disabled={isLoading}
                />
              </div>
              {errors.email && (
                <p className="mt-1 text-sm text-red-600">{errors.email}</p>
              )}
            </div>

            {/* Password Field */}
            <div>
              <Label
                htmlFor="password"
                className="block text-sm font-medium text-gray-700 mb-1"
              >
                Password
              </Label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <Lock className="h-4 w-4 text-gray-400" />
                </div>
                <Input
                  id="password"
                  name="password"
                  type={showPassword ? "text" : "password"}
                  autoComplete="new-password"
                  value={formData.password}
                  onChange={handleInputChange}
                  placeholder="Create a strong password"
                  className={cn(
                    "pl-10 pr-10 block w-full",
                    "border-gray-300 focus:border-orange-500 focus:ring-orange-500",
                    errors.password &&
                      "border-red-500 focus:border-red-500 focus:ring-red-500"
                  )}
                  disabled={isLoading}
                />
                <button
                  type="button"
                  className="absolute inset-y-0 right-0 pr-3 flex items-center"
                  onClick={() => setShowPassword(!showPassword)}
                >
                  {showPassword ? (
                    <EyeOff className="h-4 w-4 text-gray-400 hover:text-gray-600" />
                  ) : (
                    <Eye className="h-4 w-4 text-gray-400 hover:text-gray-600" />
                  )}
                </button>
              </div>
              {formData.password && (
                <div className="mt-2">
                  <div className="flex items-center justify-between mb-1">
                    <span className="text-xs text-gray-500">
                      Password strength
                    </span>
                    <span
                      className={cn(
                        "text-xs font-medium",
                        passwordStrength > 75
                          ? "text-green-600"
                          : passwordStrength > 50
                          ? "text-yellow-600"
                          : passwordStrength > 25
                          ? "text-orange-600"
                          : "text-red-600"
                      )}
                    >
                      {getPasswordStrengthText()}
                    </span>
                  </div>
                  <Progress value={passwordStrength} className="h-1.5" />
                </div>
              )}
              {errors.password && (
                <p className="mt-1 text-sm text-red-600">{errors.password}</p>
              )}
            </div>

            {/* Confirm Password Field */}
            <div>
              <Label
                htmlFor="confirmPassword"
                className="block text-sm font-medium text-gray-700 mb-1"
              >
                Confirm Password
              </Label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <Lock className="h-4 w-4 text-gray-400" />
                </div>
                <Input
                  id="confirmPassword"
                  name="confirmPassword"
                  type={showConfirmPassword ? "text" : "password"}
                  autoComplete="new-password"
                  value={formData.confirmPassword}
                  onChange={handleInputChange}
                  placeholder="Confirm your password"
                  className={cn(
                    "pl-10 pr-10 block w-full",
                    "border-gray-300 focus:border-orange-500 focus:ring-orange-500",
                    errors.confirmPassword &&
                      "border-red-500 focus:border-red-500 focus:ring-red-500"
                  )}
                  disabled={isLoading}
                />
                <button
                  type="button"
                  className="absolute inset-y-0 right-0 pr-3 flex items-center"
                  onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                >
                  {showConfirmPassword ? (
                    <EyeOff className="h-4 w-4 text-gray-400 hover:text-gray-600" />
                  ) : (
                    <Eye className="h-4 w-4 text-gray-400 hover:text-gray-600" />
                  )}
                </button>
                {formData.confirmPassword &&
                  formData.password === formData.confirmPassword && (
                    <div className="absolute inset-y-0 right-10 flex items-center pr-3">
                      <Check className="h-4 w-4 text-green-500" />
                    </div>
                  )}
              </div>
              {errors.confirmPassword && (
                <p className="mt-1 text-sm text-red-600">
                  {errors.confirmPassword}
                </p>
              )}
            </div>

            {/* Submit Button */}
            <div>
              <Button
                type="submit"
                className="w-full flex justify-center items-center py-2.5 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-orange-500"
                disabled={isLoading}
              >
                {isLoading ? (
                  <>
                    <LoadingSpinner size="sm" className="mr-2" />
                    Creating account...
                  </>
                ) : (
                  <>
                    <Sparkles className="h-4 w-4 mr-2" />
                    Create Your Account
                  </>
                )}
              </Button>
            </div>
          </form>

          {/* Sign In Link */}
          <div className="mt-6">
            <div className="relative">
              <div className="absolute inset-0 flex items-center">
                <div className="w-full border-t border-gray-200" />
              </div>
              <div className="relative flex justify-center text-sm">
                <span className="px-2 bg-white text-gray-500">
                  Already have an account?
                </span>
              </div>
            </div>

            <div className="mt-6 text-center">
              <Link
                to="/auth/login"
                className="font-medium text-orange-600 hover:text-orange-500"
              >
                Sign in instead
              </Link>
            </div>
          </div>
        </div>

        {/* Terms and Privacy */}
        <p className="text-center text-xs text-gray-500">
          By creating an account, you agree to our{" "}
          <Link to="/terms" className="text-orange-600 hover:text-orange-500">
            Terms of Service
          </Link>{" "}
          and{" "}
          <Link to="/privacy" className="text-orange-600 hover:text-orange-500">
            Privacy Policy
          </Link>
        </p>
      </div>
    </div>
  );
}
```

---

