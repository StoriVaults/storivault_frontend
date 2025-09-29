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
- [vite.config.ts](#viteconfigts)

### 📁 src

- [App.css](#src-Appcss)
- [App.tsx](#src-Apptsx)
- [index.css](#src-indexcss)
- [main.tsx](#src-maintsx)
- [vite-env.d.ts](#src-vite-envdts)

### 📁 src\apis

- [auth.ts](#src-apis-authts)
- [client.ts](#src-apis-clientts)
- [index.ts](#src-apis-indexts)
- [stories.ts](#src-apis-storiests)
- [uploads.ts](#src-apis-uploadsts)
- [users.ts](#src-apis-usersts)
- [votes.ts](#src-apis-votests)

### 📁 src\components\layout

- [header.tsx](#src-components-layout-headertsx)
- [main-layout.tsx](#src-components-layout-main-layouttsx)

### 📁 src\components\ui

- [file-dropzone.tsx](#src-components-ui-file-dropzonetsx)
- [image-with-fallback.tsx](#src-components-ui-image-with-fallbacktsx)
- [loading-spinner.tsx](#src-components-ui-loading-spinnertsx)
- [story-card.tsx](#src-components-ui-story-cardtsx)
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

- [HomePage.tsx](#src-pages-HomePagetsx)
- [Index.tsx](#src-pages-Indextsx)
- [NotFound.tsx](#src-pages-NotFoundtsx)
- [StoriesPage.tsx](#src-pages-StoriesPagetsx)

### 📁 src\pages\auth

- [LoginPage.tsx](#src-pages-auth-LoginPagetsx)
- [SignupPage.tsx](#src-pages-auth-SignupPagetsx)

### 📁 src\store

- [authStore.ts](#src-store-authStorets)
- [uiStore.ts](#src-store-uiStorets)

### 📁 src\types

- [api.ts](#src-types-apits)
- [index.ts](#src-types-indexts)

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
      "react-refresh/only-export-components": [
        "warn",
        { allowConstantExport: true },
      ],
      "@typescript-eslint/no-unused-vars": "off",
    },
  }
);
```

---

#### 📄 package.json

<a name='packagejson'></a>

**Path:** `package.json`

```json
{
  "name": "vite_react_shadcn_ts",
  "private": true,
  "version": "0.0.0",
  "type": "module",
  "scripts": {
    "dev": "vite",
    "build": "vite build",
    "build:dev": "vite build --mode development",
    "lint": "eslint .",
    "preview": "vite preview"
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
    "axios": "^1.12.2",
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
import type { Config } from "tailwindcss";

export default {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}",
  ],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      colors: {
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
          hover: "hsl(var(--primary-hover))",
          light: "hsl(var(--primary-light))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
          hover: "hsl(var(--secondary-hover))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
          light: "hsl(var(--destructive-light))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
          hover: "hsl(var(--accent-hover))",
        },
        success: {
          DEFAULT: "hsl(var(--success))",
          foreground: "hsl(var(--success-foreground))",
          light: "hsl(var(--success-light))",
        },
        warning: {
          DEFAULT: "hsl(var(--warning))",
          foreground: "hsl(var(--warning-foreground))",
          light: "hsl(var(--warning-light))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
        reading: {
          bg: "hsl(var(--reading-bg))",
          text: "hsl(var(--reading-text))",
        },
      },
      backgroundImage: {
        "gradient-primary": "var(--gradient-primary)",
        "gradient-hero": "var(--gradient-hero)",
        "gradient-card": "var(--gradient-card)",
      },
      boxShadow: {
        soft: "var(--shadow-soft)",
        medium: "var(--shadow-medium)",
        strong: "var(--shadow-strong)",
        primary: "var(--shadow-primary)",
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      keyframes: {
        "accordion-down": {
          from: {
            height: "0",
          },
          to: {
            height: "var(--radix-accordion-content-height)",
          },
        },
        "accordion-up": {
          from: {
            height: "var(--radix-accordion-content-height)",
          },
          to: {
            height: "0",
          },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config;
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
  "references": [
    { "path": "./tsconfig.app.json" },
    { "path": "./tsconfig.node.json" }
  ],
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
  plugins: [react(), mode === "development" && componentTagger()].filter(
    Boolean
  ),
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
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
import { BrowserRouter, Routes, Route } from "react-router-dom";

// Pages
import { HomePage } from "./pages/HomePage";
import { LoginPage } from "./pages/auth/LoginPage";
import { SignupPage } from "./pages/auth/SignupPage";
import { StoriesPage } from "./pages/StoriesPage";
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

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <ToastProvider />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/auth/login" element={<LoginPage />} />
          <Route path="/auth/signup" element={<SignupPage />} />
          <Route path="/stories" element={<StoriesPage />} />
          <Route path="/stories/search" element={<StoriesPage />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

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
    --gradient-primary: linear-gradient(
      135deg,
      hsl(16 100% 50%),
      hsl(16 100% 45%)
    );
    --gradient-hero: linear-gradient(
      135deg,
      hsl(16 100% 50%),
      hsl(210 100% 50%)
    );
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

    --gradient-primary: linear-gradient(
      135deg,
      hsl(16 100% 55%),
      hsl(16 100% 50%)
    );
    --gradient-hero: linear-gradient(
      135deg,
      hsl(16 100% 55%),
      hsl(210 100% 60%)
    );
    --gradient-card: linear-gradient(135deg, hsl(220 13% 8%), hsl(220 13% 10%));

    --shadow-soft: 0 2px 8px -2px hsl(0 0% 0% / 0.3);
    --shadow-medium: 0 4px 16px -4px hsl(0 0% 0% / 0.4);
    --shadow-strong: 0 8px 32px -8px hsl(0 0% 0% / 0.5);
    --shadow-primary: 0 4px 16px -4px hsl(16 100% 55% / 0.4);
  }
}

@layer base {
  * {
    @apply border-border;
  }

  body {
    @apply bg-background text-foreground;
  }
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
import { apiClient, createFormData } from "./client";
import { TokenResponse, User, SignupRequest } from "@/types";

export const authApi = {
  // Login with email/password
  login: async (email: string, password: string): Promise<TokenResponse> => {
    const formData = createFormData({
      username: email, // Backend expects 'username' field for email
      password: password,
    });

    const response = await apiClient.post<TokenResponse>(
      "/auth/token",
      formData,
      {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      }
    );

    return response.data;
  },

  // Sign up new user
  signup: async (
    username: string,
    email: string,
    password: string
  ): Promise<User> => {
    const request: SignupRequest = {
      username,
      email,
      password,
    };

    const response = await apiClient.post<User>("/auth/signup", request);
    return response.data;
  },

  // Get current user profile
  getMe: async (token?: string): Promise<User> => {
    const headers = token ? { Authorization: `Bearer ${token}` } : {};

    const response = await apiClient.get<User>("/users/me", { headers });
    return response.data;
  },
};
```

---

#### 📄 src\apis\client.ts

<a name='src-apis-clientts'></a>

**Path:** `src\apis\client.ts`

```typescript
import axios, { AxiosInstance, AxiosError, AxiosResponse } from "axios";
import { ApiEnvelope, ApiError } from "@/types";

// Create axios instance
export const apiClient: AxiosInstance = axios.create({
  baseURL: "https://usman678zafar-storivault-backend.hf.space",
  timeout: 30000,
  headers: {
    "Content-Type": "application/json",
  },
});

// Request interceptor to add auth token
apiClient.interceptors.request.use(
  (config) => {
    // Get token from auth store
    const authStorage = localStorage.getItem("auth-storage");
    if (authStorage) {
      try {
        const { state } = JSON.parse(authStorage);
        if (state?.accessToken) {
          config.headers.Authorization = `Bearer ${state.accessToken}`;
        }
      } catch (error) {
        console.warn("Failed to parse auth storage:", error);
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
    if (response.config.url?.includes("/auth/token")) {
      return response;
    }

    // Unwrap envelope for other endpoints
    const envelope = response.data as ApiEnvelope;

    if (envelope.success) {
      return { ...response, data: envelope.data };
    } else {
      // Convert envelope error to ApiError
      const apiError: ApiError = new Error(
        envelope.message || "API Error"
      ) as ApiError;
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

      if (data && typeof data === "object") {
        if (data.success === false) {
          // Envelope error
          apiError.message = data.message || "API Error";
          apiError.details = data.error?.details;
        } else if (data.detail) {
          // FastAPI validation error
          apiError.message = Array.isArray(data.detail)
            ? data.detail.map((d: any) => d.msg).join(", ")
            : data.detail;
        } else {
          apiError.message = error.message;
        }
      } else {
        apiError.message = error.message;
      }

      apiError.status = error.response.status;

      // Handle 401 errors - logout user
      if (error.response.status === 401) {
        // Clear auth storage
        localStorage.removeItem("auth-storage");

        // Redirect to login if not already there
        if (
          typeof window !== "undefined" &&
          !window.location.pathname.includes("/auth")
        ) {
          window.location.href = "/auth/login";
        }
      }
    } else if (error.request) {
      // Network error
      apiError.message = "Network error. Please check your connection.";
    } else {
      // Other error
      apiError.message = error.message || "Unknown error occurred";
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
        formData.append(key, value.join(","));
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
export * from "./client";
export * from "./auth";
export * from "./users";
export * from "./stories";
export * from "./uploads";
export * from "./votes";
```

---

#### 📄 src\apis\stories.ts

<a name='src-apis-storiests'></a>

**Path:** `src\apis\stories.ts`

```typescript
import { apiClient, createFormData } from "./client";
import {
  Story,
  CreateStoryRequest,
  UpdateStoryRequest,
  StoriesQuery,
  SearchQuery,
  PaginatedResponse,
} from "@/types";

export const storiesApi = {
  // Create story with multipart form (including cover upload)
  createStoryMultipart: async (data: {
    title: string;
    description?: string;
    genre: string;
    tags?: string;
    visibility?: "public" | "private";
    cover?: File;
  }): Promise<Story> => {
    const formData = createFormData(data);

    const response = await apiClient.post<Story>("/stories", formData, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    });

    return response.data;
  },

  // Create story with JSON
  createStory: async (data: CreateStoryRequest): Promise<Story> => {
    const response = await apiClient.post<Story>("/stories/json", data);
    return response.data;
  },

  // Update story cover
  updateStoryCover: async (storyId: string, cover: File): Promise<Story> => {
    const formData = createFormData({ cover });

    const response = await apiClient.patch<Story>(
      `/stories/${storyId}/cover`,
      formData,
      {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      }
    );

    return response.data;
  },

  // Get stories with filters and pagination
  getStories: async (
    query: StoriesQuery = {}
  ): Promise<PaginatedResponse<Story>> => {
    const response = await apiClient.get<PaginatedResponse<Story>>("/stories", {
      params: query,
    });
    return response.data;
  },

  // Search stories
  searchStories: async (
    query: SearchQuery
  ): Promise<PaginatedResponse<Story>> => {
    const response = await apiClient.get<PaginatedResponse<Story>>(
      "/stories/search",
      {
        params: query,
      }
    );
    return response.data;
  },

  // Get story by ID
  getStory: async (storyId: string): Promise<Story> => {
    const response = await apiClient.get<Story>(`/stories/${storyId}`);
    return response.data;
  },

  // Update story
  updateStory: async (
    storyId: string,
    data: UpdateStoryRequest
  ): Promise<Story> => {
    const response = await apiClient.patch<Story>(`/stories/${storyId}`, data);
    return response.data;
  },

  // Delete story
  deleteStory: async (storyId: string): Promise<void> => {
    await apiClient.delete(`/stories/${storyId}`);
  },
};
```

---

#### 📄 src\apis\uploads.ts

<a name='src-apis-uploadsts'></a>

**Path:** `src\apis\uploads.ts`

```typescript
import { apiClient, createFormData } from "./client";
import {
  UploadResponse,
  PresignRequest,
  PresignResponse,
  GetUrlQuery,
  GetUrlResponse,
} from "@/types";

export const uploadsApi = {
  // Check upload status
  getStatus: async (): Promise<{ configured: boolean }> => {
    const response = await apiClient.get<{ configured: boolean }>(
      "/uploads/status"
    );
    return response.data;
  },

  // Direct file upload
  uploadFile: async (
    file: File,
    folder?: "images" | "covers" | "media" | "avatars"
  ): Promise<UploadResponse> => {
    const formData = createFormData({ uploadedFile: file });

    const params = folder ? { folder } : {};

    const response = await apiClient.post<UploadResponse>(
      "/uploads/file",
      formData,
      {
        params,
        headers: {
          "Content-Type": "multipart/form-data",
        },
      }
    );

    return response.data;
  },

  // Get presigned URL for upload
  getPresignedUrl: async (data: PresignRequest): Promise<PresignResponse> => {
    const response = await apiClient.post<PresignResponse>(
      "/uploads/presign",
      data
    );
    return response.data;
  },

  // Get signed URL for private file access
  getSignedUrl: async (query: GetUrlQuery): Promise<GetUrlResponse> => {
    const response = await apiClient.get<GetUrlResponse>("/uploads/get-url", {
      params: query,
    });
    return response.data;
  },

  // Delete file
  deleteFile: async (key: string): Promise<{ key: string }> => {
    const response = await apiClient.delete<{ key: string }>(`/uploads/${key}`);
    return response.data;
  },
};
```

---

#### 📄 src\apis\users.ts

<a name='src-apis-usersts'></a>

**Path:** `src\apis\users.ts`

```typescript
import { apiClient, createFormData } from "./client";
import {
  User,
  UpdateProfileRequest,
  ChangePasswordRequest,
  PaginatedResponse,
} from "@/types";

export const usersApi = {
  // Update current user profile
  updateProfile: async (data: UpdateProfileRequest): Promise<User> => {
    const response = await apiClient.patch<User>("/users/me", data);
    return response.data;
  },

  // Upload profile picture
  uploadProfilePicture: async (file: File): Promise<User> => {
    const formData = createFormData({ file });

    const response = await apiClient.post<User>(
      "/users/me/profile-pic",
      formData,
      {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      }
    );

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
  getFollowers: async (
    username: string,
    page = 1,
    limit = 20
  ): Promise<PaginatedResponse<User>> => {
    const response = await apiClient.get<PaginatedResponse<User>>(
      `/users/${username}/followers`,
      {
        params: { page, limit },
      }
    );
    return response.data;
  },

  // Get user following
  getFollowing: async (
    username: string,
    page = 1,
    limit = 20
  ): Promise<PaginatedResponse<User>> => {
    const response = await apiClient.get<PaginatedResponse<User>>(
      `/users/${username}/following`,
      {
        params: { page, limit },
      }
    );
    return response.data;
  },

  // Change password
  changePassword: async (data: ChangePasswordRequest): Promise<void> => {
    await apiClient.post("/users/me/password", data);
  },

  // Delete account
  deleteAccount: async (): Promise<void> => {
    await apiClient.delete("/users/me");
  },
};
```

---

#### 📄 src\apis\votes.ts

<a name='src-apis-votests'></a>

**Path:** `src\apis\votes.ts`

```typescript
import { apiClient } from "./client";
import { VoteRequest } from "@/types";

export const votesApi = {
  // Vote on a chapter
  vote: async (chapterId: string): Promise<void> => {
    const request: VoteRequest = {
      chapter_id: chapterId,
    };

    await apiClient.post("/votes", request);
  },
};
```

---

### 📁 src\controllers

#### 📄 src\controllers\authController.ts

<a name='src-controllers-authControllerts'></a>

**Path:** `src\controllers\authController.ts`

```typescript
import { authApi } from "@/apis";
import { useAuthStore } from "@/store/authStore";
import { useUiStore } from "@/store/uiStore";

export class AuthController {
  static async loginWithToast(
    email: string,
    password: string
  ): Promise<boolean> {
    const { login } = useAuthStore.getState();
    const { addToast } = useUiStore.getState();

    try {
      await login(email, password);
      addToast({
        title: "Welcome back!",
        description: "You have successfully signed in.",
        type: "success",
      });
      return true;
    } catch (error: any) {
      addToast({
        title: "Login failed",
        description:
          error.message || "Please check your credentials and try again.",
        type: "error",
      });
      return false;
    }
  }

  static async signupWithToast(
    username: string,
    email: string,
    password: string
  ): Promise<boolean> {
    const { signup } = useAuthStore.getState();
    const { addToast } = useUiStore.getState();

    try {
      await signup(username, email, password);
      addToast({
        title: "Welcome to StoriVault!",
        description: "Your account has been created successfully.",
        type: "success",
      });
      return true;
    } catch (error: any) {
      addToast({
        title: "Signup failed",
        description:
          error.message || "Please check your information and try again.",
        type: "error",
      });
      return false;
    }
  }

  static logoutWithToast(): void {
    const { logout } = useAuthStore.getState();
    const { addToast } = useUiStore.getState();

    logout();
    addToast({
      title: "Signed out",
      description: "You have been successfully signed out.",
      type: "success",
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
export * from "./storyController";
export * from "./userController";
export * from "./authController";
```

---

#### 📄 src\controllers\storyController.ts

<a name='src-controllers-storyControllerts'></a>

**Path:** `src\controllers\storyController.ts`

```typescript
import { storiesApi, uploadsApi } from "@/apis";
import { useUiStore } from "@/store/uiStore";
import { Story, CreateStoryRequest } from "@/types";

export class StoryController {
  static async createStoryWithCover(
    data: Omit<CreateStoryRequest, "cover_image"> & { cover?: File }
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
          tags: data.tags?.join(","),
          visibility: data.visibility,
          cover: data.cover,
        });
      } else {
        // Create story without cover
        story = await storiesApi.createStory({
          title: data.title,
          description: data.description,
          genre: data.genre,
          tags: data.tags,
          visibility: data.visibility,
        });
      }

      addToast({
        title: "Story created!",
        description: "Your story has been published successfully.",
        type: "success",
      });

      return story;
    } catch (error: any) {
      addToast({
        title: "Failed to create story",
        description: error.message || "Please try again later.",
        type: "error",
      });
      return null;
    }
  }

  static async updateStoryCover(
    storyId: string,
    cover: File
  ): Promise<Story | null> {
    const { addToast } = useUiStore.getState();

    try {
      const story = await storiesApi.updateStoryCover(storyId, cover);

      addToast({
        title: "Cover updated!",
        description: "Your story cover has been updated successfully.",
        type: "success",
      });

      return story;
    } catch (error: any) {
      addToast({
        title: "Failed to update cover",
        description: error.message || "Please try again later.",
        type: "error",
      });
      return null;
    }
  }

  static async deleteStoryWithConfirmation(storyId: string): Promise<boolean> {
    const { addToast } = useUiStore.getState();

    const confirmed = window.confirm(
      "Are you sure you want to delete this story? This action cannot be undone."
    );

    if (!confirmed) return false;

    try {
      await storiesApi.deleteStory(storyId);

      addToast({
        title: "Story deleted",
        description: "Your story has been deleted successfully.",
        type: "success",
      });

      return true;
    } catch (error: any) {
      addToast({
        title: "Failed to delete story",
        description: error.message || "Please try again later.",
        type: "error",
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
import { usersApi } from "@/apis";
import { useAuthStore } from "@/store/authStore";
import { useUiStore } from "@/store/uiStore";
import { User, UpdateProfileRequest } from "@/types";

export class UserController {
  static async updateProfileWithToast(
    data: UpdateProfileRequest
  ): Promise<User | null> {
    const { updateUser } = useAuthStore.getState();
    const { addToast } = useUiStore.getState();

    try {
      const user = await usersApi.updateProfile(data);
      updateUser(user);

      addToast({
        title: "Profile updated!",
        description: "Your profile has been updated successfully.",
        type: "success",
      });

      return user;
    } catch (error: any) {
      addToast({
        title: "Failed to update profile",
        description: error.message || "Please try again later.",
        type: "error",
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
        title: "Profile picture updated!",
        description: "Your profile picture has been updated successfully.",
        type: "success",
      });

      return user;
    } catch (error: any) {
      addToast({
        title: "Failed to update profile picture",
        description: error.message || "Please try again later.",
        type: "error",
      });
      return null;
    }
  }

  static async followUserWithToast(username: string): Promise<boolean> {
    const { addToast } = useUiStore.getState();

    try {
      await usersApi.followUser(username);

      addToast({
        title: "Following!",
        description: `You are now following @${username}.`,
        type: "success",
      });

      return true;
    } catch (error: any) {
      addToast({
        title: "Failed to follow user",
        description: error.message || "Please try again later.",
        type: "error",
      });
      return false;
    }
  }

  static async unfollowUserWithToast(username: string): Promise<boolean> {
    const { addToast } = useUiStore.getState();

    try {
      await usersApi.unfollowUser(username);

      addToast({
        title: "Unfollowed",
        description: `You have unfollowed @${username}.`,
        type: "success",
      });

      return true;
    } catch (error: any) {
      addToast({
        title: "Failed to unfollow user",
        description: error.message || "Please try again later.",
        type: "error",
      });
      return false;
    }
  }

  static async changePasswordWithToast(
    oldPassword: string,
    newPassword: string
  ): Promise<boolean> {
    const { addToast } = useUiStore.getState();

    try {
      await usersApi.changePassword({
        old_password: oldPassword,
        new_password: newPassword,
      });

      addToast({
        title: "Password changed!",
        description: "Your password has been updated successfully.",
        type: "success",
      });

      return true;
    } catch (error: any) {
      addToast({
        title: "Failed to change password",
        description:
          error.message || "Please check your current password and try again.",
        type: "error",
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

export const API_BASE_URL = "https://usman678zafar-storivault-backend.hf.space";

export const GENRES = [
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
  "Young Adult",
  "Literary Fiction",
  "Poetry",
  "Non-Fiction",
] as const;

export const STORY_VISIBILITY = {
  PUBLIC: "public",
  PRIVATE: "private",
} as const;

export const SORT_OPTIONS = {
  LATEST: "latest",
  POPULAR: "popular",
  TRENDING: "trending",
} as const;

export const FILE_LIMITS = {
  IMAGE_MAX_SIZE: 5 * 1024 * 1024, // 5MB
  COVER_MAX_SIZE: 5 * 1024 * 1024, // 5MB
  ALLOWED_IMAGE_TYPES: ["image/jpeg", "image/jpg", "image/png", "image/webp"],
} as const;

export const PAGINATION = {
  DEFAULT_LIMIT: 12,
  MAX_LIMIT: 50,
} as const;

export const QUERY_KEYS = {
  STORIES: "stories",
  STORY: "story",
  USER: "user",
  USERS: "users",
  SEARCH: "search",
  FOLLOWERS: "followers",
  FOLLOWING: "following",
} as const;

export const ROUTES = {
  HOME: "/",
  LOGIN: "/auth/login",
  SIGNUP: "/auth/signup",
  STORIES: "/stories",
  STORY_DETAIL: "/stories/:id",
  STORY_CREATE: "/stories/create",
  STORY_EDIT: "/stories/:id/edit",
  USER_PROFILE: "/users/:username",
  SETTINGS: "/settings",
  LIBRARY: "/library",
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
  const formatter = new Intl.RelativeTimeFormat("en", { numeric: "auto" });

  const diffInMs = date.getTime() - Date.now();
  const diffInDays = Math.ceil(diffInMs / (1000 * 60 * 60 * 24));

  return formatter.format(diffInDays, "day");
};

export const truncateText = (text: string, maxLength: number): string => {
  if (text.length <= maxLength) return text;
  return text.slice(0, maxLength) + "...";
};

export const capitalizeFirst = (str: string): string => {
  return str.charAt(0).toUpperCase() + str.slice(1).toLowerCase();
};

export const slugify = (text: string): string => {
  return text
    .toLowerCase()
    .replace(/[^\w\s-]/g, "") // Remove special characters
    .replace(/[\s_-]+/g, "-") // Replace spaces and underscores with hyphens
    .replace(/^-+|-+$/g, ""); // Remove leading/trailing hyphens
};

export const parseTagString = (tagString: string): string[] => {
  return tagString
    .split(",")
    .map((tag) => tag.trim())
    .filter((tag) => tag.length > 0);
};

export const formatTagsForDisplay = (tags: string[]): string => {
  if (tags.length === 0) return "";
  if (tags.length === 1) return tags[0];
  if (tags.length === 2) return tags.join(" and ");
  return `${tags.slice(0, -1).join(", ")}, and ${tags[tags.length - 1]}`;
};
```

---

#### 📄 src\helper\index.ts

<a name='src-helper-indexts'></a>

**Path:** `src\helper\index.ts`

```typescript
export * from "./validation";
export * from "./formatting";
export * from "./constants";
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
    return "Username is required";
  }
  if (username.length < 3) {
    return "Username must be at least 3 characters";
  }
  if (username.length > 30) {
    return "Username must be less than 30 characters";
  }
  if (!/^[a-zA-Z0-9_-]+$/.test(username)) {
    return "Username can only contain letters, numbers, hyphens, and underscores";
  }
  return null;
};

export const validatePassword = (password: string): string | null => {
  if (!password) {
    return "Password is required";
  }
  if (password.length < 6) {
    return "Password must be at least 6 characters";
  }
  if (password.length > 128) {
    return "Password must be less than 128 characters";
  }
  return null;
};

export const validateStoryTitle = (title: string): string | null => {
  if (!title.trim()) {
    return "Title is required";
  }
  if (title.length > 200) {
    return "Title must be less than 200 characters";
  }
  return null;
};

export const validateStoryDescription = (
  description: string
): string | null => {
  if (description.length > 2000) {
    return "Description must be less than 2000 characters";
  }
  return null;
};

export const validateObjectId = (id: string): boolean => {
  return /^[0-9a-fA-F]{24}$/.test(id);
};

export const validateFileSize = (
  file: File,
  maxSizeInMB: number
): string | null => {
  const maxSizeInBytes = maxSizeInMB * 1024 * 1024;
  if (file.size > maxSizeInBytes) {
    return `File size must be less than ${maxSizeInMB}MB`;
  }
  return null;
};

export const validateImageFile = (file: File): string | null => {
  const allowedTypes = ["image/jpeg", "image/jpg", "image/png", "image/webp"];
  if (!allowedTypes.includes(file.type)) {
    return "Only JPEG, PNG, and WebP images are allowed";
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
  const [isMobile, setIsMobile] = React.useState<boolean | undefined>(
    undefined
  );

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

#### 📄 src\pages\HomePage.tsx

<a name='src-pages-HomePagetsx'></a>

**Path:** `src\pages\HomePage.tsx`

```tsx
"use client";

import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import {
  TrendingUp,
  Star,
  Users2,
  Sparkles,
  ArrowRight,
  BookOpen,
  PenTool,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { StoryCard } from "@/components/ui/story-card";
import { LoadingSpinner } from "@/components/ui/loading-spinner";
import { MainLayout } from "@/components/layout/main-layout";
import { useAuthStore } from "@/store/authStore";
import { Story } from "@/types";
import { storiesApi } from "@/apis";

export function HomePage() {
  const { isAuthenticated, user } = useAuthStore();
  const [featuredStories, setFeaturedStories] = useState<Story[]>([]);
  const [trendingStories, setTrendingStories] = useState<Story[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchHomeData = async () => {
      try {
        // Fetch featured and trending stories
        const [featuredResponse, trendingResponse] = await Promise.all([
          storiesApi.getStories({ page: 1, limit: 3, sort: "popular" }),
          storiesApi.getStories({ page: 1, limit: 6, sort: "trending" }),
        ]);

        setFeaturedStories(featuredResponse.items);
        setTrendingStories(trendingResponse.items);
      } catch (error) {
        console.error("Failed to fetch home data:", error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchHomeData();
  }, []);

  if (isLoading) {
    return (
      <MainLayout>
        <div className="flex items-center justify-center min-h-[60vh]">
          <LoadingSpinner size="lg" />
        </div>
      </MainLayout>
    );
  }

  return (
    <MainLayout>
      <div className="space-y-12">
        {/* Hero Section */}
        <section className="relative overflow-hidden bg-gradient-hero rounded-2xl text-white mx-4 mt-6">
          <div className="absolute inset-0 bg-black/20"></div>
          <div className="relative px-8 py-16 md:px-16 md:py-24">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
                Your Gateway to
                <span className="block bg-gradient-to-r from-white to-primary-light bg-clip-text text-transparent">
                  Infinite Stories
                </span>
              </h1>
              <p className="text-xl md:text-2xl text-gray-200 mb-8 max-w-2xl mx-auto leading-relaxed">
                Discover captivating tales, connect with passionate writers, and
                immerse yourself in worlds beyond imagination.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                {isAuthenticated ? (
                  <>
                    <Button
                      size="lg"
                      className="bg-white text-primary hover:bg-gray-100"
                      asChild
                    >
                      <Link to="/stories">
                        <BookOpen className="mr-2 h-5 w-5" />
                        Explore Stories
                      </Link>
                    </Button>
                    <Button
                      size="lg"
                      variant="outline"
                      className="border-white text-white hover:bg-white/10"
                      asChild
                    >
                      <Link to="/stories/create">
                        <PenTool className="mr-2 h-5 w-5" />
                        Start Writing
                      </Link>
                    </Button>
                  </>
                ) : (
                  <>
                    <Button
                      size="lg"
                      className="bg-white text-primary hover:bg-gray-100"
                      asChild
                    >
                      <Link to="/auth/signup">
                        Get Started Free
                        <ArrowRight className="ml-2 h-5 w-5" />
                      </Link>
                    </Button>
                    <Button
                      size="lg"
                      variant="outline"
                      className="border-white text-white hover:bg-white/10"
                      asChild
                    >
                      <Link to="/stories">Browse Stories</Link>
                    </Button>
                  </>
                )}
              </div>
            </div>
          </div>
        </section>

        {/* Featured Stories */}
        {featuredStories.length > 0 && (
          <section className="px-4">
            <div className="max-w-7xl mx-auto">
              <div className="flex items-center justify-between mb-8">
                <div>
                  <h2 className="text-3xl font-bold flex items-center gap-3">
                    <Star className="h-8 w-8 text-primary" />
                    Featured Stories
                  </h2>
                  <p className="text-muted-foreground mt-1">
                    Hand-picked stories you'll love
                  </p>
                </div>
                <Button variant="outline" asChild>
                  <Link to="/stories?sort=popular">
                    View All
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {featuredStories.map((story) => (
                  <StoryCard key={story.id} story={story} variant="featured" />
                ))}
              </div>
            </div>
          </section>
        )}

        {/* Stats Section */}
        <section className="px-4 bg-secondary/30">
          <div className="max-w-7xl mx-auto py-16">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">
                Join Our Growing Community
              </h2>
              <p className="text-muted-foreground text-lg">
                Thousands of readers and writers sharing their passion for
                storytelling
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <Card className="text-center border-0 shadow-soft">
                <CardContent className="pt-6">
                  <div className="h-12 w-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <BookOpen className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="text-2xl font-bold text-primary">10K+</h3>
                  <p className="text-muted-foreground">Stories Published</p>
                </CardContent>
              </Card>
              <Card className="text-center border-0 shadow-soft">
                <CardContent className="pt-6">
                  <div className="h-12 w-12 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Users2 className="h-6 w-6 text-accent" />
                  </div>
                  <h3 className="text-2xl font-bold text-accent">25K+</h3>
                  <p className="text-muted-foreground">Active Readers</p>
                </CardContent>
              </Card>
              <Card className="text-center border-0 shadow-soft">
                <CardContent className="pt-6">
                  <div className="h-12 w-12 bg-success/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <PenTool className="h-6 w-6 text-success" />
                  </div>
                  <h3 className="text-2xl font-bold text-success">5K+</h3>
                  <p className="text-muted-foreground">Authors</p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Trending Stories */}
        {trendingStories.length > 0 && (
          <section className="px-4">
            <div className="max-w-7xl mx-auto">
              <div className="flex items-center justify-between mb-8">
                <div>
                  <h2 className="text-3xl font-bold flex items-center gap-3">
                    <TrendingUp className="h-8 w-8 text-primary" />
                    Trending Now
                  </h2>
                  <p className="text-muted-foreground mt-1">
                    Stories everyone's talking about
                  </p>
                </div>
                <Button variant="outline" asChild>
                  <Link to="/stories?sort=trending">
                    View All
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                {trendingStories.map((story) => (
                  <StoryCard key={story.id} story={story} />
                ))}
              </div>
            </div>
          </section>
        )}

        {/* CTA Section */}
        {!isAuthenticated && (
          <section className="px-4">
            <div className="max-w-4xl mx-auto">
              <Card className="bg-gradient-primary text-white border-0 shadow-strong">
                <CardContent className="p-12 text-center">
                  <Sparkles className="h-12 w-12 mx-auto mb-6 text-white" />
                  <h2 className="text-3xl font-bold mb-4">
                    Ready to Start Your Story?
                  </h2>
                  <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
                    Join StoriVault today and become part of a vibrant community
                    of storytellers and book lovers.
                  </p>
                  <div className="flex flex-col sm:flex-row gap-4 justify-center">
                    <Button
                      size="lg"
                      className="bg-white text-primary hover:bg-gray-100"
                      asChild
                    >
                      <Link to="/auth/signup">
                        Create Free Account
                        <ArrowRight className="ml-2 h-5 w-5" />
                      </Link>
                    </Button>
                    <Button
                      size="lg"
                      variant="outline"
                      className="border-white text-white hover:bg-white/10"
                      asChild
                    >
                      <Link to="/auth/login">Sign In</Link>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </div>
          </section>
        )}

        {/* Personal Welcome */}
        {isAuthenticated && user && (
          <section className="px-4">
            <div className="max-w-4xl mx-auto">
              <Card className="bg-gradient-card border-0 shadow-medium">
                <CardContent className="p-8 text-center">
                  <h2 className="text-2xl font-bold mb-4">
                    Welcome back, {user.username}! 📚
                  </h2>
                  <p className="text-muted-foreground mb-6">
                    Ready to continue your reading journey or share a new story?
                  </p>
                  <div className="flex flex-col sm:flex-row gap-4 justify-center">
                    <Button asChild>
                      <Link to="/library">
                        <BookOpen className="mr-2 h-4 w-4" />
                        My Library
                      </Link>
                    </Button>
                    <Button variant="outline" asChild>
                      <Link to="/stories/create">
                        <PenTool className="mr-2 h-4 w-4" />
                        Write a Story
                      </Link>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </div>
          </section>
        )}
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
        <p className="text-xl text-muted-foreground">
          Start building your amazing project here!
        </p>
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
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
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

#### 📄 src\pages\StoriesPage.tsx

<a name='src-pages-StoriesPagetsx'></a>

**Path:** `src\pages\StoriesPage.tsx`

```tsx
"use client";

import { useState, useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import { Search, Filter, Grid, List, BookOpen } from "lucide-react";
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
import { Card, CardContent } from "@/components/ui/card";
import { StoryCard } from "@/components/ui/story-card";
import { LoadingSpinner } from "@/components/ui/loading-spinner";
import { MainLayout } from "@/components/layout/main-layout";
import { Story, PaginatedResponse } from "@/types";
import { storiesApi } from "@/apis";
import { cn } from "@/lib/utils";

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
  const [isLoading, setIsLoading] = useState(true);
  const [pagination, setPagination] = useState<
    Pick<PaginatedResponse<any>, "total" | "page" | "limit">
  >({
    total: 0,
    page: 1,
    limit: 12,
  });

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
  };

  const totalPages = Math.ceil(pagination.total / pagination.limit);

  return (
    <MainLayout>
      <div className="space-y-6 p-4">
        {/* Header */}
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
            {pagination.total} {pagination.total === 1 ? "story" : "stories"}{" "}
            found
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
            <div className="flex items-center justify-center py-12">
              <LoadingSpinner size="lg" />
            </div>
          ) : stories.length === 0 ? (
            <Card className="text-center py-12">
              <CardContent>
                <BookOpen className="h-12 w-12 text-muted-foreground mx-auto mb-4" />
                <h3 className="text-lg font-semibold mb-2">No stories found</h3>
                <p className="text-muted-foreground">
                  Try adjusting your search or filter criteria to find more
                  stories.
                </p>
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
      </div>
    </MainLayout>
  );
}
```

---

### 📁 src\store

#### 📄 src\store\authStore.ts

<a name='src-store-authStorets'></a>

**Path:** `src\store\authStore.ts`

```typescript
import { create } from "zustand";
import { persist } from "zustand/middleware";
import { User, ApiError } from "@/types";
import { authApi } from "@/apis/auth";

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
            error: null,
          });
        } catch (error: any) {
          const errorMessage =
            error.details?.message || error.message || "Login failed";
          set({
            accessToken: null,
            user: null,
            isAuthenticated: false,
            isLoading: false,
            error: errorMessage,
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
          const errorMessage =
            error.details?.message || error.message || "Signup failed";
          set({
            isLoading: false,
            error: errorMessage,
          });
          throw error;
        }
      },

      logout: () => {
        set({
          accessToken: null,
          user: null,
          isAuthenticated: false,
          error: null,
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
            error: null,
          });
        } catch (error: any) {
          if (error.status === 401) {
            // Token expired, logout
            get().logout();
          } else {
            set({
              isLoading: false,
              error: error.message || "Failed to fetch user",
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
      },
    }),
    {
      name: "auth-storage",
      partialize: (state) => ({
        accessToken: state.accessToken,
        user: state.user,
        isAuthenticated: state.isAuthenticated,
      }),
    }
  )
);
```

---

#### 📄 src\store\uiStore.ts

<a name='src-store-uiStorets'></a>

**Path:** `src\store\uiStore.ts`

```typescript
import { create } from "zustand";
import { Toast, Modal, Theme } from "@/types";

interface UiState {
  // Theme
  theme: Theme;

  // Toasts
  toasts: Toast[];

  // Modals
  modals: Modal[];

  // Loading states
  globalLoading: boolean;

  // Sidebar
  sidebarOpen: boolean;

  // Actions
  setTheme: (theme: Theme) => void;
  addToast: (toast: Omit<Toast, "id">) => void;
  removeToast: (id: string) => void;
  clearToasts: () => void;
  openModal: (component: React.ComponentType<any>, props?: any) => string;
  closeModal: (id: string) => void;
  closeAllModals: () => void;
  setGlobalLoading: (loading: boolean) => void;
  setSidebarOpen: (open: boolean) => void;
  toggleSidebar: () => void;
}

let toastIdCounter = 0;
let modalIdCounter = 0;

export const useUiStore = create<UiState>((set, get) => ({
  // Initial state
  theme: "system",
  toasts: [],
  modals: [],
  globalLoading: false,
  sidebarOpen: false,

  // Theme actions
  setTheme: (theme: Theme) => {
    set({ theme });

    // Apply theme to document
    if (theme === "dark") {
      document.documentElement.classList.add("dark");
    } else if (theme === "light") {
      document.documentElement.classList.remove("dark");
    } else {
      // System theme
      const prefersDark = window.matchMedia(
        "(prefers-color-scheme: dark)"
      ).matches;
      if (prefersDark) {
        document.documentElement.classList.add("dark");
      } else {
        document.documentElement.classList.remove("dark");
      }
    }
  },

  // Toast actions
  addToast: (toast: Omit<Toast, "id">) => {
    const id = `toast-${++toastIdCounter}`;
    const newToast: Toast = { ...toast, id };

    set((state) => ({
      toasts: [...state.toasts, newToast],
    }));

    // Auto-remove toast after duration
    const duration = toast.duration || 5000;
    setTimeout(() => {
      get().removeToast(id);
    }, duration);
  },

  removeToast: (id: string) => {
    set((state) => ({
      toasts: state.toasts.filter((toast) => toast.id !== id),
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
      modals: [...state.modals, modal],
    }));

    return id;
  },

  closeModal: (id: string) => {
    set((state) => ({
      modals: state.modals.filter((modal) => modal.id !== id),
    }));
  },

  closeAllModals: () => {
    set({ modals: [] });
  },

  // Loading actions
  setGlobalLoading: (loading: boolean) => {
    set({ globalLoading: loading });
  },

  // Sidebar actions
  setSidebarOpen: (open: boolean) => {
    set({ sidebarOpen: open });
  },

  toggleSidebar: () => {
    set((state) => ({ sidebarOpen: !state.sidebarOpen }));
  },
}));

// Initialize theme on load
if (typeof window !== "undefined") {
  const store = useUiStore.getState();
  store.setTheme(store.theme);

  // Listen for system theme changes
  window
    .matchMedia("(prefers-color-scheme: dark)")
    .addEventListener("change", (e) => {
      if (store.theme === "system") {
        if (e.matches) {
          document.documentElement.classList.add("dark");
        } else {
          document.documentElement.classList.remove("dark");
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
export * from "./api";

// UI Types
export interface LoadingState {
  isLoading: boolean;
  error?: string | null;
}

export interface Toast {
  id: string;
  title: string;
  description?: string;
  type: "success" | "error" | "warning" | "info";
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
export type Theme = "light" | "dark" | "system";

// Navigation Types
export interface NavigationItem {
  label: string;
  href: string;
  icon?: string;
  badge?: number;
}
```

---

### 📁 src\components\layout

#### 📄 src\components\layout\header.tsx

<a name='src-components-layout-headertsx'></a>

**Path:** `src\components\layout\header.tsx`

```tsx
"use client";

import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import {
  Search,
  Bell,
  Plus,
  Menu,
  User,
  Settings,
  LogOut,
  BookOpen,
  Library,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { useAuthStore } from "@/store/authStore";
import { useUiStore } from "@/store/uiStore";
import { cn } from "@/lib/utils";

export function Header() {
  const navigate = useNavigate();
  const [searchQuery, setSearchQuery] = useState("");
  const { user, isAuthenticated, logout } = useAuthStore();
  const { toggleSidebar } = useUiStore();

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      navigate(`/stories/search?q=${encodeURIComponent(searchQuery.trim())}`);
    }
  };

  const handleLogout = () => {
    logout();
    navigate("/");
  };

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center justify-between">
        {/* Left side */}
        <div className="flex items-center gap-4">
          <Button
            variant="ghost"
            size="sm"
            className="md:hidden"
            onClick={toggleSidebar}
          >
            <Menu className="h-5 w-5" />
          </Button>

          <Link to="/" className="flex items-center gap-2">
            <div className="h-8 w-8 rounded-lg bg-gradient-primary flex items-center justify-center">
              <BookOpen className="h-5 w-5 text-white" />
            </div>
            <span className="font-bold text-xl bg-gradient-primary bg-clip-text text-transparent">
              StoriVault
            </span>
          </Link>
        </div>

        {/* Center - Search */}
        <div className="hidden md:flex flex-1 max-w-md mx-8">
          <form onSubmit={handleSearch} className="relative w-full">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
            <Input
              type="search"
              placeholder="Search stories, authors..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="pl-10 w-full"
            />
          </form>
        </div>

        {/* Right side */}
        <div className="flex items-center gap-2">
          <Button variant="ghost" size="sm" className="md:hidden">
            <Search className="h-5 w-5" />
          </Button>

          {isAuthenticated ? (
            <>
              <Button variant="ghost" size="sm" asChild>
                <Link to="/stories/create">
                  <Plus className="h-5 w-5" />
                  <span className="hidden sm:inline ml-2">Write</span>
                </Link>
              </Button>

              <Button variant="ghost" size="sm">
                <Bell className="h-5 w-5" />
              </Button>

              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button
                    variant="ghost"
                    size="sm"
                    className="relative h-8 w-8 rounded-full"
                  >
                    <Avatar className="h-8 w-8">
                      <AvatarImage
                        src={user?.profile_pic || undefined}
                        alt={user?.username}
                      />
                      <AvatarFallback>
                        {user?.username?.charAt(0).toUpperCase() || "U"}
                      </AvatarFallback>
                    </Avatar>
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent className="w-56" align="end" forceMount>
                  <div className="flex items-center justify-start gap-2 p-2">
                    <div className="flex flex-col space-y-1 leading-none">
                      <p className="font-medium">{user?.username}</p>
                      <p className="text-xs text-muted-foreground">
                        {user?.email}
                      </p>
                    </div>
                  </div>
                  <DropdownMenuSeparator />
                  <DropdownMenuItem asChild>
                    <Link to={`/users/${user?.username}`}>
                      <User className="mr-2 h-4 w-4" />
                      Profile
                    </Link>
                  </DropdownMenuItem>
                  <DropdownMenuItem asChild>
                    <Link to="/library">
                      <Library className="mr-2 h-4 w-4" />
                      My Library
                    </Link>
                  </DropdownMenuItem>
                  <DropdownMenuItem asChild>
                    <Link to="/settings">
                      <Settings className="mr-2 h-4 w-4" />
                      Settings
                    </Link>
                  </DropdownMenuItem>
                  <DropdownMenuSeparator />
                  <DropdownMenuItem onClick={handleLogout}>
                    <LogOut className="mr-2 h-4 w-4" />
                    Log out
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            </>
          ) : (
            <div className="flex items-center gap-2">
              <Button variant="ghost" size="sm" asChild>
                <Link to="/auth/login">Sign In</Link>
              </Button>
              <Button size="sm" asChild>
                <Link to="/auth/signup">Sign Up</Link>
              </Button>
            </div>
          )}
        </div>
      </div>
    </header>
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
import { Sidebar } from "./sidebar";
import { useAuthStore } from "@/store/authStore";
import { cn } from "@/lib/utils";

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
        <main
          className={cn(
            "flex-1 md:ml-64 transition-all duration-300",
            className
          )}
        >
          {children}
        </main>
      </div>
    </div>
  );
}
```

---

### 📁 src\components\ui

#### 📄 src\components\ui\file-dropzone.tsx

<a name='src-components-ui-file-dropzonetsx'></a>

**Path:** `src\components\ui\file-dropzone.tsx`

```tsx
"use client";

import { useCallback, useState } from "react";
import { Upload, X, File, Image } from "lucide-react";
import { cn } from "@/lib/utils";
import { Button } from "./button";

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
  accept = "image/*",
  maxSize = 5 * 1024 * 1024, // 5MB default
  className,
  disabled = false,
  multiple = false,
  value,
  onRemove,
}: FileDropzoneProps) {
  const [isDragOver, setIsDragOver] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const validateFile = useCallback(
    (file: File): boolean => {
      setError(null);

      if (maxSize && file.size > maxSize) {
        setError(
          `File size must be less than ${Math.round(maxSize / 1024 / 1024)}MB`
        );
        return false;
      }

      if (
        accept &&
        !accept.split(",").some((type) => {
          const trimmedType = type.trim();
          if (trimmedType.endsWith("/*")) {
            return file.type.startsWith(trimmedType.slice(0, -1));
          }
          return file.type === trimmedType;
        })
      ) {
        setError("File type not supported");
        return false;
      }

      return true;
    },
    [accept, maxSize]
  );

  const handleFileSelect = useCallback(
    (files: FileList) => {
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
    },
    [multiple, validateFile, onFileSelect]
  );

  const handleDrop = useCallback(
    (e: React.DragEvent) => {
      e.preventDefault();
      setIsDragOver(false);

      if (disabled) return;

      const files = e.dataTransfer.files;
      if (files.length > 0) {
        handleFileSelect(files);
      }
    },
    [disabled, handleFileSelect]
  );

  const handleDragOver = useCallback(
    (e: React.DragEvent) => {
      e.preventDefault();
      if (!disabled) {
        setIsDragOver(true);
      }
    },
    [disabled]
  );

  const handleDragLeave = useCallback(() => {
    setIsDragOver(false);
  }, []);

  const handleClick = () => {
    if (disabled) return;

    const input = document.createElement("input");
    input.type = "file";
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
          <div
            key={`${file.name}-${index}`}
            className="flex items-center gap-3 p-3 bg-secondary rounded-lg"
          >
            <div className="flex-shrink-0">
              {file.type.startsWith("image/") ? (
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
          <Upload
            className={cn(
              "h-10 w-10 mb-4",
              isDragOver ? "text-primary" : "text-muted-foreground"
            )}
          />
          <p className="text-sm font-medium mb-1">
            Drop files here or click to browse
          </p>
          <p className="text-xs text-muted-foreground">
            {accept === "image/*" ? "Images only" : accept} • Max{" "}
            {Math.round(maxSize / 1024 / 1024)}MB
          </p>
        </div>
      </div>

      {error && <p className="text-sm text-destructive">{error}</p>}

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
"use client";

import { useState } from "react";
import { cn } from "@/lib/utils";

interface ImageWithFallbackProps
  extends React.ImgHTMLAttributes<HTMLImageElement> {
  fallback?: string;
  fallbackComponent?: React.ReactNode;
}

export function ImageWithFallback({
  src,
  fallback = "/placeholder.svg",
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
        <div
          className={cn(
            "absolute inset-0 bg-muted animate-pulse rounded",
            className
          )}
        />
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
import { cn } from "@/lib/utils";

interface LoadingSpinnerProps {
  size?: "sm" | "md" | "lg";
  className?: string;
}

export function LoadingSpinner({
  size = "md",
  className,
}: LoadingSpinnerProps) {
  const sizeClasses = {
    sm: "h-4 w-4",
    md: "h-6 w-6",
    lg: "h-8 w-8",
  };

  return (
    <div
      className={cn(
        "animate-spin rounded-full border-2 border-current border-t-transparent",
        sizeClasses[size],
        className
      )}
    />
  );
}
```

---

#### 📄 src\components\ui\story-card.tsx

<a name='src-components-ui-story-cardtsx'></a>

**Path:** `src\components\ui\story-card.tsx`

```tsx
"use client";

import { Link } from "react-router-dom";
import { Eye, Heart, MessageCircle, Clock } from "lucide-react";
import { Story } from "@/types";
import { ImageWithFallback } from "./image-with-fallback";
import { Badge } from "./badge";
import { cn } from "@/lib/utils";

interface StoryCardProps {
  story: Story;
  className?: string;
  showStats?: boolean;
  variant?: "default" | "compact" | "featured";
}

export function StoryCard({
  story,
  className,
  showStats = true,
  variant = "default",
}: StoryCardProps) {
  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return new Intl.RelativeTimeFormat("en", { numeric: "auto" }).format(
      Math.ceil((date.getTime() - Date.now()) / (1000 * 60 * 60 * 24)),
      "day"
    );
  };

  const formatCount = (count: number) => {
    if (count >= 1000000) return `${(count / 1000000).toFixed(1)}M`;
    if (count >= 1000) return `${(count / 1000).toFixed(1)}K`;
    return count.toString();
  };

  if (variant === "compact") {
    return (
      <Link to={`/stories/${story.id}`}>
        <div
          className={cn(
            "group flex gap-3 p-3 rounded-lg transition-colors hover:bg-secondary/50",
            className
          )}
        >
          <div className="relative flex-shrink-0">
            <ImageWithFallback
              src={story.cover_image || "/placeholder.svg"}
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

  if (variant === "featured") {
    return (
      <Link to={`/stories/${story.id}`}>
        <div
          className={cn(
            "group relative overflow-hidden rounded-xl bg-gradient-card shadow-medium hover:shadow-strong transition-all duration-300",
            className
          )}
        >
          <div className="aspect-[16/9] relative">
            <ImageWithFallback
              src={story.cover_image || "/placeholder.svg"}
              alt={story.title}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
            <div className="absolute bottom-4 left-4 right-4 text-white">
              <Badge
                variant="secondary"
                className="mb-2 bg-primary text-primary-foreground"
              >
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
      <div
        className={cn(
          "group bg-card rounded-lg shadow-soft hover:shadow-medium transition-all duration-300 overflow-hidden",
          className
        )}
      >
        <div className="aspect-[2/3] relative">
          <ImageWithFallback
            src={story.cover_image || "/placeholder.svg"}
            alt={story.title}
            className="w-full h-full object-cover"
          />
          <div className="absolute top-2 right-2">
            <Badge
              variant="secondary"
              className="bg-background/90 text-foreground"
            >
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

#### 📄 src\components\ui\toast-provider.tsx

<a name='src-components-ui-toast-providertsx'></a>

**Path:** `src\components\ui\toast-provider.tsx`

```tsx
"use client";

import { useEffect } from "react";
import { CheckCircle, XCircle, AlertCircle, Info, X } from "lucide-react";
import { useUiStore } from "@/store/uiStore";
import { cn } from "@/lib/utils";

const toastIcons = {
  success: CheckCircle,
  error: XCircle,
  warning: AlertCircle,
  info: Info,
};

const toastStyles = {
  success: "bg-success-light text-success border-success/20",
  error: "bg-destructive-light text-destructive border-destructive/20",
  warning: "bg-warning-light text-warning border-warning/20",
  info: "bg-accent/10 text-accent border-accent/20",
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
      className
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
        destructive:
          "destructive group border-destructive bg-destructive text-destructive-foreground",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  }
);

const Toast = React.forwardRef<
  React.ElementRef<typeof ToastPrimitives.Root>,
  React.ComponentPropsWithoutRef<typeof ToastPrimitives.Root> &
    VariantProps<typeof toastVariants>
>(({ className, variant, ...props }, ref) => {
  return (
    <ToastPrimitives.Root
      ref={ref}
      className={cn(toastVariants({ variant }), className)}
      {...props}
    />
  );
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
      className
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
      className
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
  <ToastPrimitives.Title
    ref={ref}
    className={cn("text-sm font-semibold", className)}
    {...props}
  />
));
ToastTitle.displayName = ToastPrimitives.Title.displayName;

const ToastDescription = React.forwardRef<
  React.ElementRef<typeof ToastPrimitives.Description>,
  React.ComponentPropsWithoutRef<typeof ToastPrimitives.Description>
>(({ className, ...props }, ref) => (
  <ToastPrimitives.Description
    ref={ref}
    className={cn("text-sm opacity-90", className)}
    {...props}
  />
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
"use client";

import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Eye, EyeOff, BookOpen, Mail, Lock } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Alert, AlertDescription } from "@/components/ui/alert";
import { LoadingSpinner } from "@/components/ui/loading-spinner";
import { useAuthStore } from "@/store/authStore";
import { useUiStore } from "@/store/uiStore";
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
  const { addToast } = useUiStore();

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));

    // Clear error when user starts typing
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
      addToast({
        title: "Welcome back!",
        description: "You have successfully signed in.",
        type: "success",
      });
      navigate("/");
    } catch (error: any) {
      // Error handling is done in the store
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
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-primary/5 via-background to-accent/5 p-4">
      <div className="w-full max-w-md">
        {/* Logo */}
        <div className="flex items-center justify-center mb-8">
          <Link to="/" className="flex items-center gap-3">
            <div className="h-12 w-12 rounded-xl bg-gradient-primary flex items-center justify-center shadow-primary">
              <BookOpen className="h-7 w-7 text-white" />
            </div>
            <span className="font-bold text-2xl bg-gradient-primary bg-clip-text text-transparent">
              StoriVault
            </span>
          </Link>
        </div>

        <Card className="shadow-strong border-0 bg-card/50 backdrop-blur-sm">
          <CardHeader className="space-y-1 text-center">
            <CardTitle className="text-2xl font-bold">Welcome back</CardTitle>
            <CardDescription>
              Sign in to your account to continue your reading journey
            </CardDescription>
          </CardHeader>
          <CardContent>
            {error && (
              <Alert variant="destructive" className="mb-6">
                <AlertDescription>{error}</AlertDescription>
              </Alert>
            )}

            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="email">Email</Label>
                <div className="relative">
                  <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    placeholder="Enter your email"
                    className={cn(
                      "pl-10",
                      errors.email &&
                        "border-destructive focus-visible:ring-destructive"
                    )}
                    disabled={isLoading}
                  />
                </div>
                {errors.email && (
                  <p className="text-sm text-destructive">{errors.email}</p>
                )}
              </div>

              <div className="space-y-2">
                <Label htmlFor="password">Password</Label>
                <div className="relative">
                  <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                  <Input
                    id="password"
                    name="password"
                    type={showPassword ? "text" : "password"}
                    value={formData.password}
                    onChange={handleInputChange}
                    placeholder="Enter your password"
                    className={cn(
                      "pl-10 pr-10",
                      errors.password &&
                        "border-destructive focus-visible:ring-destructive"
                    )}
                    disabled={isLoading}
                  />
                  <Button
                    type="button"
                    variant="ghost"
                    size="sm"
                    className="absolute right-1 top-1/2 transform -translate-y-1/2 h-8 w-8 p-0"
                    onClick={() => setShowPassword(!showPassword)}
                    disabled={isLoading}
                  >
                    {showPassword ? (
                      <EyeOff className="h-4 w-4" />
                    ) : (
                      <Eye className="h-4 w-4" />
                    )}
                  </Button>
                </div>
                {errors.password && (
                  <p className="text-sm text-destructive">{errors.password}</p>
                )}
              </div>

              <Button
                type="submit"
                className="w-full bg-gradient-primary hover:opacity-90"
                disabled={isLoading}
              >
                {isLoading ? (
                  <>
                    <LoadingSpinner size="sm" className="mr-2" />
                    Signing in...
                  </>
                ) : (
                  "Sign In"
                )}
              </Button>
            </form>

            <div className="mt-6 text-center text-sm">
              <span className="text-muted-foreground">
                Don't have an account?{" "}
              </span>
              <Link
                to="/auth/signup"
                className="font-medium text-primary hover:text-primary/80 transition-colors"
              >
                Sign up
              </Link>
            </div>
          </CardContent>
        </Card>
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
"use client";

import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Eye, EyeOff, BookOpen, Mail, Lock, User } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Alert, AlertDescription } from "@/components/ui/alert";
import { LoadingSpinner } from "@/components/ui/loading-spinner";
import { useAuthStore } from "@/store/authStore";
import { useUiStore } from "@/store/uiStore";
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

  const { signup, isLoading, error, clearError } = useAuthStore();
  const { addToast } = useUiStore();

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));

    // Clear error when user starts typing
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
    } else if (formData.password.length < 6) {
      newErrors.password = "Password must be at least 6 characters";
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
      addToast({
        title: "Welcome to StoriVault!",
        description: "Your account has been created successfully.",
        type: "success",
      });
      navigate("/");
    } catch (error: any) {
      // Error handling is done in the store
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
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-primary/5 via-background to-accent/5 p-4">
      <div className="w-full max-w-md">
        {/* Logo */}
        <div className="flex items-center justify-center mb-8">
          <Link to="/" className="flex items-center gap-3">
            <div className="h-12 w-12 rounded-xl bg-gradient-primary flex items-center justify-center shadow-primary">
              <BookOpen className="h-7 w-7 text-white" />
            </div>
            <span className="font-bold text-2xl bg-gradient-primary bg-clip-text text-transparent">
              StoriVault
            </span>
          </Link>
        </div>

        <Card className="shadow-strong border-0 bg-card/50 backdrop-blur-sm">
          <CardHeader className="space-y-1 text-center">
            <CardTitle className="text-2xl font-bold">
              Create your account
            </CardTitle>
            <CardDescription>
              Join thousands of readers and writers on StoriVault
            </CardDescription>
          </CardHeader>
          <CardContent>
            {error && (
              <Alert variant="destructive" className="mb-6">
                <AlertDescription>{error}</AlertDescription>
              </Alert>
            )}

            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="username">Username</Label>
                <div className="relative">
                  <User className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                  <Input
                    id="username"
                    name="username"
                    type="text"
                    value={formData.username}
                    onChange={handleInputChange}
                    placeholder="Choose a username"
                    className={cn(
                      "pl-10",
                      errors.username &&
                        "border-destructive focus-visible:ring-destructive"
                    )}
                    disabled={isLoading}
                  />
                </div>
                {errors.username && (
                  <p className="text-sm text-destructive">{errors.username}</p>
                )}
              </div>

              <div className="space-y-2">
                <Label htmlFor="email">Email</Label>
                <div className="relative">
                  <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    placeholder="Enter your email"
                    className={cn(
                      "pl-10",
                      errors.email &&
                        "border-destructive focus-visible:ring-destructive"
                    )}
                    disabled={isLoading}
                  />
                </div>
                {errors.email && (
                  <p className="text-sm text-destructive">{errors.email}</p>
                )}
              </div>

              <div className="space-y-2">
                <Label htmlFor="password">Password</Label>
                <div className="relative">
                  <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                  <Input
                    id="password"
                    name="password"
                    type={showPassword ? "text" : "password"}
                    value={formData.password}
                    onChange={handleInputChange}
                    placeholder="Create a password"
                    className={cn(
                      "pl-10 pr-10",
                      errors.password &&
                        "border-destructive focus-visible:ring-destructive"
                    )}
                    disabled={isLoading}
                  />
                  <Button
                    type="button"
                    variant="ghost"
                    size="sm"
                    className="absolute right-1 top-1/2 transform -translate-y-1/2 h-8 w-8 p-0"
                    onClick={() => setShowPassword(!showPassword)}
                    disabled={isLoading}
                  >
                    {showPassword ? (
                      <EyeOff className="h-4 w-4" />
                    ) : (
                      <Eye className="h-4 w-4" />
                    )}
                  </Button>
                </div>
                {errors.password && (
                  <p className="text-sm text-destructive">{errors.password}</p>
                )}
              </div>

              <div className="space-y-2">
                <Label htmlFor="confirmPassword">Confirm Password</Label>
                <div className="relative">
                  <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                  <Input
                    id="confirmPassword"
                    name="confirmPassword"
                    type={showConfirmPassword ? "text" : "password"}
                    value={formData.confirmPassword}
                    onChange={handleInputChange}
                    placeholder="Confirm your password"
                    className={cn(
                      "pl-10 pr-10",
                      errors.confirmPassword &&
                        "border-destructive focus-visible:ring-destructive"
                    )}
                    disabled={isLoading}
                  />
                  <Button
                    type="button"
                    variant="ghost"
                    size="sm"
                    className="absolute right-1 top-1/2 transform -translate-y-1/2 h-8 w-8 p-0"
                    onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                    disabled={isLoading}
                  >
                    {showConfirmPassword ? (
                      <EyeOff className="h-4 w-4" />
                    ) : (
                      <Eye className="h-4 w-4" />
                    )}
                  </Button>
                </div>
                {errors.confirmPassword && (
                  <p className="text-sm text-destructive">
                    {errors.confirmPassword}
                  </p>
                )}
              </div>

              <Button
                type="submit"
                className="w-full bg-gradient-primary hover:opacity-90"
                disabled={isLoading}
              >
                {isLoading ? (
                  <>
                    <LoadingSpinner size="sm" className="mr-2" />
                    Creating account...
                  </>
                ) : (
                  "Create Account"
                )}
              </Button>
            </form>

            <div className="mt-6 text-center text-sm">
              <span className="text-muted-foreground">
                Already have an account?{" "}
              </span>
              <Link
                to="/auth/login"
                className="font-medium text-primary hover:text-primary/80 transition-colors"
              >
                Sign in
              </Link>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
```

---
