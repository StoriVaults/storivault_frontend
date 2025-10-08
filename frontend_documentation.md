# 🎨 StoriVault Frontend Documentation

**Generated on:** 2025-10-08 04:11:11  
**Project Path:** `D:\NexusNao\PROJECTS\StoriVault\EDITING\frontend`  
**Project Name:** storivault-frontend  
**Version:** 1.0.0  

---

## 🚀 Project Overview

**Technology Stack:**
- **Framework:** React + TypeScript
- **Build Tool:** Vite
- **Styling:** Tailwind CSS
- **UI Components:** Custom components with shadcn/ui
- **State Management:** Zustand stores
- **HTTP Client:** Custom API client

**Key Dependencies:**
- react
- react-dom
- react-router-dom
- zustand
- axios
- @tanstack/react-query

---

## 📑 Table of Contents

### Configuration
- [eslint.config.js](#eslintconfigjs)
- [postcss.config.js](#postcssconfigjs)
- [tailwind.config.ts](#tailwindconfigts)
- [tsconfig.app.json](#tsconfigappjson)
- [tsconfig.json](#tsconfigjson)
- [tsconfig.node.json](#tsconfignodejson)
- [vite.config.ts](#viteconfigts)

### Source Code
#### Main
- [App.css](#src-Appcss)
- [App.tsx](#src-Apptsx)
- [index.css](#src-indexcss)
- [main.tsx](#src-maintsx)
- [utils.ts](#src-lib-utilsts)
- [vite-env.d.ts](#src-vite-envdts)

#### APIs
- [auth.ts](#src-apis-authts)
- [chapters.ts](#src-apis-chaptersts)
- [client.ts](#src-apis-clientts)
- [index.ts](#src-apis-indexts)
- [library.ts](#src-apis-libraryts)
- [stories.ts](#src-apis-storiests)
- [uploads.ts](#src-apis-uploadsts)
- [users.ts](#src-apis-usersts)
- [votes.ts](#src-apis-votests)

#### Components
- [accordion.tsx](#src-components-ui-accordiontsx)
- [alert-dialog.tsx](#src-components-ui-alert-dialogtsx)
- [alert.tsx](#src-components-ui-alerttsx)
- [aspect-ratio.tsx](#src-components-ui-aspect-ratiotsx)
- [auth-skeleton.tsx](#src-components-ui-auth-skeletontsx)
- [avatar.tsx](#src-components-ui-avatartsx)
- [badge.tsx](#src-components-ui-badgetsx)
- [breadcrumb.tsx](#src-components-ui-breadcrumbtsx)
- [button.tsx](#src-components-ui-buttontsx)
- [calendar.tsx](#src-components-ui-calendartsx)
- [card.tsx](#src-components-ui-cardtsx)
- [carousel.tsx](#src-components-ui-carouseltsx)
- [chart.tsx](#src-components-ui-charttsx)
- [checkbox.tsx](#src-components-ui-checkboxtsx)
- [collapsible.tsx](#src-components-ui-collapsibletsx)
- [command.tsx](#src-components-ui-commandtsx)
- [context-menu.tsx](#src-components-ui-context-menutsx)
- [create-story-skeleton.tsx](#src-components-ui-create-story-skeletontsx)
- [dialog.tsx](#src-components-ui-dialogtsx)
- [drawer.tsx](#src-components-ui-drawertsx)
- [dropdown-menu.tsx](#src-components-ui-dropdown-menutsx)
- [edit-story-skeleton.tsx](#src-components-ui-edit-story-skeletontsx)
- [feed-skeleton.tsx](#src-components-ui-feed-skeletontsx)
- [file-dropzone.tsx](#src-components-ui-file-dropzonetsx)
- [footer.tsx](#src-components-layout-footertsx)
- [form.tsx](#src-components-ui-formtsx)
- [header.tsx](#src-components-layout-headertsx)
- [hover-card.tsx](#src-components-ui-hover-cardtsx)
- [image-with-fallback.tsx](#src-components-ui-image-with-fallbacktsx)
- [input-otp.tsx](#src-components-ui-input-otptsx)
- [input.tsx](#src-components-ui-inputtsx)
- [label.tsx](#src-components-ui-labeltsx)
- [loading-spinner.tsx](#src-components-ui-loading-spinnertsx)
- [logo.tsx](#src-components-ui-logotsx)
- [main-layout.tsx](#src-components-layout-main-layouttsx)
- [menubar.tsx](#src-components-ui-menubartsx)
- [navigation-menu.tsx](#src-components-ui-navigation-menutsx)
- [pagination.tsx](#src-components-ui-paginationtsx)
- [popover.tsx](#src-components-ui-popovertsx)
- [profile-skeleton.tsx](#src-components-ui-profile-skeletontsx)
- [progress.tsx](#src-components-ui-progresstsx)
- [radio-group.tsx](#src-components-ui-radio-grouptsx)
- [reader-skeleton.tsx](#src-components-ui-reader-skeletontsx)
- [resizable.tsx](#src-components-ui-resizabletsx)
- [scroll-area.tsx](#src-components-ui-scroll-areatsx)
- [select.tsx](#src-components-ui-selecttsx)
- [separator.tsx](#src-components-ui-separatortsx)
- [sheet.tsx](#src-components-ui-sheettsx)
- [sidebar.tsx](#src-components-ui-sidebartsx)
- [skeleton.tsx](#src-components-ui-skeletontsx)
- [slider.tsx](#src-components-ui-slidertsx)
- [sonner.tsx](#src-components-ui-sonnertsx)
- [story-card-skeleton.tsx](#src-components-ui-story-card-skeletontsx)
- [story-card.tsx](#src-components-ui-story-cardtsx)
- [story-detail-skeleton.tsx](#src-components-ui-story-detail-skeletontsx)
- [switch.tsx](#src-components-ui-switchtsx)
- [table.tsx](#src-components-ui-tabletsx)
- [tabs.tsx](#src-components-ui-tabstsx)
- [textarea.tsx](#src-components-ui-textareatsx)
- [toast-provider.tsx](#src-components-ui-toast-providertsx)
- [toast.tsx](#src-components-ui-toasttsx)
- [toaster.tsx](#src-components-ui-toastertsx)
- [toggle-group.tsx](#src-components-ui-toggle-grouptsx)
- [toggle.tsx](#src-components-ui-toggletsx)
- [tooltip.tsx](#src-components-ui-tooltiptsx)
- [use-toast.ts](#src-components-ui-use-toastts)

#### Pages
- [CreateStoryPage.tsx](#src-pages-CreateStoryPagetsx)
- [EditStoryPage.tsx](#src-pages-EditStoryPagetsx)
- [FeedPage.tsx](#src-pages-FeedPagetsx)
- [GoogleSuccessPage.tsx](#src-pages-auth-GoogleSuccessPagetsx)
- [HomePage.tsx](#src-pages-HomePagetsx)
- [Index.tsx](#src-pages-Indextsx)
- [LoginPage.tsx](#src-pages-auth-LoginPagetsx)
- [NotFound.tsx](#src-pages-NotFoundtsx)
- [ProfilePage.tsx](#src-pages-ProfilePagetsx)
- [SettingsPage.tsx](#src-pages-SettingsPagetsx)
- [SignupPage.tsx](#src-pages-auth-SignupPagetsx)
- [StoriesPage.tsx](#src-pages-StoriesPagetsx)
- [StoryDetailPage.tsx](#src-pages-StoryDetailPagetsx)
- [StoryReaderPage.tsx](#src-pages-StoryReaderPagetsx)
- [VerifyEmailPage.tsx](#src-pages-auth-VerifyEmailPagetsx)

#### Store
- [authStore.ts](#src-store-authStorets)
- [uiStore.ts](#src-store-uiStorets)

#### Controllers
- [authController.ts](#src-controllers-authControllerts)
- [index.ts](#src-controllers-indexts)
- [storyController.ts](#src-controllers-storyControllerts)
- [userController.ts](#src-controllers-userControllerts)

#### Hooks
- [use-mobile.tsx](#src-hooks-use-mobiletsx)
- [use-toast.ts](#src-hooks-use-toastts)

#### Types
- [api.ts](#src-types-apits)
- [index.ts](#src-types-indexts)

#### Utils
- [favicon-generator.ts](#src-utils-favicon-generatorts)

#### Helpers
- [constants.ts](#src-helper-constantsts)
- [formatting.ts](#src-helper-formattingts)
- [index.ts](#src-helper-indexts)
- [validation.ts](#src-helper-validationts)

### Public Assets
- [favicon.svg](#public-faviconsvg)
- [placeholder.svg](#public-placeholdersvg)


---

## 📄 Source Code


## .Env Files

### <a id='env'></a> `.env`

**File Type:** .env

```text
VITE_API_URL=https://usman678zafar-storivault-backend.hf.space
VITE_FRONTEND_URL=https://www.storivault.site
```

---


## Components.Json Files

### <a id='componentsjson'></a> `components.json`

**Component:** components.json

```json
{
  "$schema": "https://ui.shadcn.com/schema.json",
  "style": "default",
  "rsc": false,
  "tsx": true,
  "tailwind": {
    "config": "tailwind.config.ts",
    "css": "src/index.css",
    "baseColor": "slate",
    "cssVariables": true,
    "prefix": ""
  },
  "aliases": {
    "components": "@/components",
    "utils": "@/lib/utils",
    "ui": "@/components/ui",
    "lib": "@/lib",
    "hooks": "@/hooks"
  }
}
```

---


## Eslint.Config.Js Files

### <a id='eslintconfigjs'></a> `eslint.config.js`

**File Type:** eslint.config.js

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


## Index.Html Files

### <a id='indexhtml'></a> `index.html`

**File Type:** index.html

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>StoriVault - Your Story Awaits</title>
    
    <!-- Favicon - Add these files to your public folder -->
    <link rel="icon" type="image/svg+xml" href="/favicon.svg" />
    <link rel="alternate icon" href="/favicon.ico" />
    <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
    <meta name="theme-color" content="#FF6B35" />
    
    <!-- Meta tags -->
    <meta name="description" content="Your gateway to infinite stories. Read and write amazing stories on StoriVault." />
    
    <!-- Google Fonts (if needed) -->
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap" rel="stylesheet">
  </head>
  <body>
    <!-- This div with id="root" is REQUIRED for React -->
    <div id="root"></div>
    
    <!-- This script tag is REQUIRED for Vite -->
    <script type="module" src="/src/main.tsx"></script>
  </body>
</html>
```

---


## Package.Json Files

### <a id='packagejson'></a> `package.json`

**File Type:** package.json

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
    "react-markdown": "^10.1.0",
    "react-resizable-panels": "^2.1.9",
    "react-router-dom": "^6.30.1",
    "recharts": "^2.15.4",
    "rehype-raw": "^7.0.0",
    "remark-gfm": "^4.0.1",
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


## Postcss.Config.Js Files

### <a id='postcssconfigjs'></a> `postcss.config.js`

**File Type:** postcss.config.js

```javascript
export default {
  plugins: {
    tailwindcss: {},
    autoprefixer: {},
  },
};
```

---


## Public Files

### <a id='public-faviconsvg'></a> `public\favicon.svg`

**File Type:** favicon.svg

```xml
<svg width="32" height="32" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg">
  <rect width="32" height="32" rx="6" fill="#FF6B35"/>
  
  <!-- Left book page -->
  <path d="M5 6h9v20H5z" fill="white" opacity="0.9"/>
  
  <!-- Right book page -->
  <path d="M18 6h9v20h-9z" fill="white" opacity="0.85"/>
  
  <!-- Book spine -->
  <rect x="14" y="6" width="4" height="20" fill="#E85D04"/>
  
  <!-- Bookmark -->
  <path d="M16 3v10l-2-2-2 2V3h4z" fill="#FFD700"/>
</svg>
```

---

### <a id='public-placeholdersvg'></a> `public\placeholder.svg`

**File Type:** placeholder.svg

```xml
<svg xmlns="http://www.w3.org/2000/svg" width="1200" height="1200" fill="none"><rect width="1200" height="1200" fill="#EAEAEA" rx="3"/><g opacity=".5"><g opacity=".5"><path fill="#FAFAFA" d="M600.709 736.5c-75.454 0-136.621-61.167-136.621-136.62 0-75.454 61.167-136.621 136.621-136.621 75.453 0 136.62 61.167 136.62 136.621 0 75.453-61.167 136.62-136.62 136.62Z"/><path stroke="#C9C9C9" stroke-width="2.418" d="M600.709 736.5c-75.454 0-136.621-61.167-136.621-136.62 0-75.454 61.167-136.621 136.621-136.621 75.453 0 136.62 61.167 136.62 136.621 0 75.453-61.167 136.62-136.62 136.62Z"/></g><path stroke="url(#a)" stroke-width="2.418" d="M0-1.209h553.581" transform="scale(1 -1) rotate(45 1163.11 91.165)"/><path stroke="url(#b)" stroke-width="2.418" d="M404.846 598.671h391.726"/><path stroke="url(#c)" stroke-width="2.418" d="M599.5 795.742V404.017"/><path stroke="url(#d)" stroke-width="2.418" d="m795.717 796.597-391.441-391.44"/><path fill="#fff" d="M600.709 656.704c-31.384 0-56.825-25.441-56.825-56.824 0-31.384 25.441-56.825 56.825-56.825 31.383 0 56.824 25.441 56.824 56.825 0 31.383-25.441 56.824-56.824 56.824Z"/><g clip-path="url(#e)"><path fill="#666" fill-rule="evenodd" d="M616.426 586.58h-31.434v16.176l3.553-3.554.531-.531h9.068l.074-.074 8.463-8.463h2.565l7.18 7.181V586.58Zm-15.715 14.654 3.698 3.699 1.283 1.282-2.565 2.565-1.282-1.283-5.2-5.199h-6.066l-5.514 5.514-.073.073v2.876a2.418 2.418 0 0 0 2.418 2.418h26.598a2.418 2.418 0 0 0 2.418-2.418v-8.317l-8.463-8.463-7.181 7.181-.071.072Zm-19.347 5.442v4.085a6.045 6.045 0 0 0 6.046 6.045h26.598a6.044 6.044 0 0 0 6.045-6.045v-7.108l1.356-1.355-1.282-1.283-.074-.073v-17.989h-38.689v23.43l-.146.146.146.147Z" clip-rule="evenodd"/></g><path stroke="#C9C9C9" stroke-width="2.418" d="M600.709 656.704c-31.384 0-56.825-25.441-56.825-56.824 0-31.384 25.441-56.825 56.825-56.825 31.383 0 56.824 25.441 56.824 56.825 0 31.383-25.441 56.824-56.824 56.824Z"/></g><defs><linearGradient id="a" x1="554.061" x2="-.48" y1=".083" y2=".087" gradientUnits="userSpaceOnUse"><stop stop-color="#C9C9C9" stop-opacity="0"/><stop offset=".208" stop-color="#C9C9C9"/><stop offset=".792" stop-color="#C9C9C9"/><stop offset="1" stop-color="#C9C9C9" stop-opacity="0"/></linearGradient><linearGradient id="b" x1="796.912" x2="404.507" y1="599.963" y2="599.965" gradientUnits="userSpaceOnUse"><stop stop-color="#C9C9C9" stop-opacity="0"/><stop offset=".208" stop-color="#C9C9C9"/><stop offset=".792" stop-color="#C9C9C9"/><stop offset="1" stop-color="#C9C9C9" stop-opacity="0"/></linearGradient><linearGradient id="c" x1="600.792" x2="600.794" y1="403.677" y2="796.082" gradientUnits="userSpaceOnUse"><stop stop-color="#C9C9C9" stop-opacity="0"/><stop offset=".208" stop-color="#C9C9C9"/><stop offset=".792" stop-color="#C9C9C9"/><stop offset="1" stop-color="#C9C9C9" stop-opacity="0"/></linearGradient><linearGradient id="d" x1="404.85" x2="796.972" y1="403.903" y2="796.02" gradientUnits="userSpaceOnUse"><stop stop-color="#C9C9C9" stop-opacity="0"/><stop offset=".208" stop-color="#C9C9C9"/><stop offset=".792" stop-color="#C9C9C9"/><stop offset="1" stop-color="#C9C9C9" stop-opacity="0"/></linearGradient><clipPath id="e"><path fill="#fff" d="M581.364 580.535h38.689v38.689h-38.689z"/></clipPath></defs></svg>
```

---


## Readme.Md Files

### <a id='READMEmd'></a> `README.md`

**File Type:** README.md

```markdown
# Welcome to your Lovable project

## Project info

**URL**: https://lovable.dev/projects/f947e21b-5566-4f3a-9849-d3c0baf77b71

## How can I edit this code?

There are several ways of editing your application.

**Use Lovable**

Simply visit the [Lovable Project](https://lovable.dev/projects/f947e21b-5566-4f3a-9849-d3c0baf77b71) and start prompting.

Changes made via Lovable will be committed automatically to this repo.

**Use your preferred IDE**

If you want to work locally using your own IDE, you can clone this repo and push changes. Pushed changes will also be reflected in Lovable.

The only requirement is having Node.js & npm installed - [install with nvm](https://github.com/nvm-sh/nvm#installing-and-updating)

Follow these steps:

```sh
# Step 1: Clone the repository using the project's Git URL.
git clone <YOUR_GIT_URL>

# Step 2: Navigate to the project directory.
cd <YOUR_PROJECT_NAME>

# Step 3: Install the necessary dependencies.
npm i

# Step 4: Start the development server with auto-reloading and an instant preview.
npm run dev
```

**Edit a file directly in GitHub**

- Navigate to the desired file(s).
- Click the "Edit" button (pencil icon) at the top right of the file view.
- Make your changes and commit the changes.

**Use GitHub Codespaces**

- Navigate to the main page of your repository.
- Click on the "Code" button (green button) near the top right.
- Select the "Codespaces" tab.
- Click on "New codespace" to launch a new Codespace environment.
- Edit files directly within the Codespace and commit and push your changes once you're done.

## What technologies are used for this project?

This project is built with:

- Vite
- TypeScript
- React
- shadcn-ui
- Tailwind CSS

## How can I deploy this project?

Simply open [Lovable](https://lovable.dev/projects/f947e21b-5566-4f3a-9849-d3c0baf77b71) and click on Share -> Publish.

## Can I connect a custom domain to my Lovable project?

Yes, you can!

To connect a domain, navigate to Project > Settings > Domains and click Connect Domain.

Read more here: [Setting up a custom domain](https://docs.lovable.dev/features/custom-domain#custom-domain)
```

---


## Apis Files

### <a id='src-apis-authts'></a> `src\apis\auth.ts`

**API Module:** auth.ts

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

### <a id='src-apis-chaptersts'></a> `src\apis\chapters.ts`

**API Module:** chapters.ts

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

### <a id='src-apis-clientts'></a> `src\apis\client.ts`

**API Module:** client.ts

```typescript
import axios, { AxiosInstance, AxiosError, AxiosResponse } from 'axios';
import { ApiEnvelope, ApiError } from '@/types';

// Use environment variable or fallback to production URL
const API_URL = import.meta.env.VITE_API_URL || 'https://usman678zafar-storivault-backend.hf.space';

// Create axios instance
export const apiClient: AxiosInstance = axios.create({
  baseURL: API_URL,
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

### <a id='src-apis-indexts'></a> `src\apis\index.ts`

**API Module:** index.ts

```typescript
export * from './client';
export * from './auth';
export * from './users';
export * from './stories';
export * from './chapters';
export * from './uploads';
export * from './votes';
export * from './library';
```

---

### <a id='src-apis-libraryts'></a> `src\apis\library.ts`

**API Module:** library.ts

```typescript
import { apiClient } from './client';
import { Story, PaginatedResponse } from '@/types';

export const libraryApi = {
  // Save story to library
  saveStory: async (storyId: string): Promise<void> => {
    await apiClient.post(`/library/${storyId}`);
  },

  // Remove story from library
  removeStory: async (storyId: string): Promise<void> => {
    await apiClient.delete(`/library/${storyId}`);
  },

  // Get saved stories
  getSavedStories: async (page = 1, limit = 20): Promise<PaginatedResponse<Story>> => {
    const response = await apiClient.get<PaginatedResponse<Story>>('/library', {
      params: { page, limit }
    });
    return response.data;
  }
};
```

---

### <a id='src-apis-storiests'></a> `src\apis\stories.ts`

**API Module:** stories.ts

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

### <a id='src-apis-uploadsts'></a> `src\apis\uploads.ts`

**API Module:** uploads.ts

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

### <a id='src-apis-usersts'></a> `src\apis\users.ts`

**API Module:** users.ts

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

  // Upload cover image
  uploadCoverImage: async (file: File): Promise<User> => {
    const formData = createFormData({ file });

    const response = await apiClient.post<User>('/users/me/cover-image', formData, {
      headers: {
        'Content-Type': 'multipart/form-data',
      },
    });

    return response.data;
  },

  // Delete cover image
  deleteCoverImage: async (): Promise<User> => {
    const response = await apiClient.delete<User>('/users/me/cover-image');
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
  },

  // Get user settings
  getSettings: async (): Promise<any> => {
    const response = await apiClient.get('/users/me/settings');
    return response.data;
  },

  // Update user settings
  updateSettings: async (settings: any): Promise<any> => {
    const response = await apiClient.put('/users/me/settings', settings);
    return response.data;
  }
};
```

---

### <a id='src-apis-votests'></a> `src\apis\votes.ts`

**API Module:** votes.ts

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
  },

  // Unvote a chapter
  unvote: async (chapterId: string): Promise<void> => {
    const request: VoteRequest = {
      chapter_id: chapterId
    };

    await apiClient.delete('/votes', { data: request });
  }
};
```

---


## App.Css Files

### <a id='src-Appcss'></a> `src\App.css`

**File Type:** App.css

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


## App.Tsx Files

### <a id='src-Apptsx'></a> `src\App.tsx`

**File Type:** App.tsx

```tsx
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { ToastProvider } from "@/components/ui/toast-provider";
import { SettingsPage } from "./pages/SettingsPage";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { useAuthStore } from "@/store/authStore";
import { useEffect } from "react";
import { GoogleSuccessPage } from "./pages/auth/GoogleSuccessPage";
import { VerifyEmailPage } from "./pages/auth/VerifyEmailPage";

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
              path="/auth/google-success"
              element={
                <PublicOnlyRoute>
                  <GoogleSuccessPage />
                </PublicOnlyRoute>
              }
            />
            <Route
              path="/auth/verify-email"
              element={<VerifyEmailPage />}
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
                  <SettingsPage />
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


## Components Files

### <a id='src-components-layout-footertsx'></a> `src\components\layout\footer.tsx`

**Component:** footer.tsx

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

### <a id='src-components-layout-headertsx'></a> `src\components\layout\header.tsx`

**Component:** header.tsx

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

### <a id='src-components-layout-main-layouttsx'></a> `src\components\layout\main-layout.tsx`

**Component:** main-layout.tsx

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

### <a id='src-components-ui-accordiontsx'></a> `src\components\ui\accordion.tsx`

**Component:** accordion.tsx

```tsx
import * as React from "react";
import * as AccordionPrimitive from "@radix-ui/react-accordion";
import { ChevronDown } from "lucide-react";

import { cn } from "@/lib/utils";

const Accordion = AccordionPrimitive.Root;

const AccordionItem = React.forwardRef<
  React.ElementRef<typeof AccordionPrimitive.Item>,
  React.ComponentPropsWithoutRef<typeof AccordionPrimitive.Item>
>(({ className, ...props }, ref) => (
  <AccordionPrimitive.Item ref={ref} className={cn("border-b", className)} {...props} />
));
AccordionItem.displayName = "AccordionItem";

const AccordionTrigger = React.forwardRef<
  React.ElementRef<typeof AccordionPrimitive.Trigger>,
  React.ComponentPropsWithoutRef<typeof AccordionPrimitive.Trigger>
>(({ className, children, ...props }, ref) => (
  <AccordionPrimitive.Header className="flex">
    <AccordionPrimitive.Trigger
      ref={ref}
      className={cn(
        "flex flex-1 items-center justify-between py-4 font-medium transition-all hover:underline [&[data-state=open]>svg]:rotate-180",
        className,
      )}
      {...props}
    >
      {children}
      <ChevronDown className="h-4 w-4 shrink-0 transition-transform duration-200" />
    </AccordionPrimitive.Trigger>
  </AccordionPrimitive.Header>
));
AccordionTrigger.displayName = AccordionPrimitive.Trigger.displayName;

const AccordionContent = React.forwardRef<
  React.ElementRef<typeof AccordionPrimitive.Content>,
  React.ComponentPropsWithoutRef<typeof AccordionPrimitive.Content>
>(({ className, children, ...props }, ref) => (
  <AccordionPrimitive.Content
    ref={ref}
    className="overflow-hidden text-sm transition-all data-[state=closed]:animate-accordion-up data-[state=open]:animate-accordion-down"
    {...props}
  >
    <div className={cn("pb-4 pt-0", className)}>{children}</div>
  </AccordionPrimitive.Content>
));

AccordionContent.displayName = AccordionPrimitive.Content.displayName;

export { Accordion, AccordionItem, AccordionTrigger, AccordionContent };
```

---

### <a id='src-components-ui-alert-dialogtsx'></a> `src\components\ui\alert-dialog.tsx`

**Component:** alert-dialog.tsx

```tsx
import * as React from "react";
import * as AlertDialogPrimitive from "@radix-ui/react-alert-dialog";

import { cn } from "@/lib/utils";
import { buttonVariants } from "@/components/ui/button";

const AlertDialog = AlertDialogPrimitive.Root;

const AlertDialogTrigger = AlertDialogPrimitive.Trigger;

const AlertDialogPortal = AlertDialogPrimitive.Portal;

const AlertDialogOverlay = React.forwardRef<
  React.ElementRef<typeof AlertDialogPrimitive.Overlay>,
  React.ComponentPropsWithoutRef<typeof AlertDialogPrimitive.Overlay>
>(({ className, ...props }, ref) => (
  <AlertDialogPrimitive.Overlay
    className={cn(
      "fixed inset-0 z-50 bg-black/80 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0",
      className,
    )}
    {...props}
    ref={ref}
  />
));
AlertDialogOverlay.displayName = AlertDialogPrimitive.Overlay.displayName;

const AlertDialogContent = React.forwardRef<
  React.ElementRef<typeof AlertDialogPrimitive.Content>,
  React.ComponentPropsWithoutRef<typeof AlertDialogPrimitive.Content>
>(({ className, ...props }, ref) => (
  <AlertDialogPortal>
    <AlertDialogOverlay />
    <AlertDialogPrimitive.Content
      ref={ref}
      className={cn(
        "fixed left-[50%] top-[50%] z-50 grid w-full max-w-lg translate-x-[-50%] translate-y-[-50%] gap-4 border bg-background p-6 shadow-lg duration-200 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[state=closed]:slide-out-to-left-1/2 data-[state=closed]:slide-out-to-top-[48%] data-[state=open]:slide-in-from-left-1/2 data-[state=open]:slide-in-from-top-[48%] sm:rounded-lg",
        className,
      )}
      {...props}
    />
  </AlertDialogPortal>
));
AlertDialogContent.displayName = AlertDialogPrimitive.Content.displayName;

const AlertDialogHeader = ({ className, ...props }: React.HTMLAttributes<HTMLDivElement>) => (
  <div className={cn("flex flex-col space-y-2 text-center sm:text-left", className)} {...props} />
);
AlertDialogHeader.displayName = "AlertDialogHeader";

const AlertDialogFooter = ({ className, ...props }: React.HTMLAttributes<HTMLDivElement>) => (
  <div className={cn("flex flex-col-reverse sm:flex-row sm:justify-end sm:space-x-2", className)} {...props} />
);
AlertDialogFooter.displayName = "AlertDialogFooter";

const AlertDialogTitle = React.forwardRef<
  React.ElementRef<typeof AlertDialogPrimitive.Title>,
  React.ComponentPropsWithoutRef<typeof AlertDialogPrimitive.Title>
>(({ className, ...props }, ref) => (
  <AlertDialogPrimitive.Title ref={ref} className={cn("text-lg font-semibold", className)} {...props} />
));
AlertDialogTitle.displayName = AlertDialogPrimitive.Title.displayName;

const AlertDialogDescription = React.forwardRef<
  React.ElementRef<typeof AlertDialogPrimitive.Description>,
  React.ComponentPropsWithoutRef<typeof AlertDialogPrimitive.Description>
>(({ className, ...props }, ref) => (
  <AlertDialogPrimitive.Description ref={ref} className={cn("text-sm text-muted-foreground", className)} {...props} />
));
AlertDialogDescription.displayName = AlertDialogPrimitive.Description.displayName;

const AlertDialogAction = React.forwardRef<
  React.ElementRef<typeof AlertDialogPrimitive.Action>,
  React.ComponentPropsWithoutRef<typeof AlertDialogPrimitive.Action>
>(({ className, ...props }, ref) => (
  <AlertDialogPrimitive.Action ref={ref} className={cn(buttonVariants(), className)} {...props} />
));
AlertDialogAction.displayName = AlertDialogPrimitive.Action.displayName;

const AlertDialogCancel = React.forwardRef<
  React.ElementRef<typeof AlertDialogPrimitive.Cancel>,
  React.ComponentPropsWithoutRef<typeof AlertDialogPrimitive.Cancel>
>(({ className, ...props }, ref) => (
  <AlertDialogPrimitive.Cancel
    ref={ref}
    className={cn(buttonVariants({ variant: "outline" }), "mt-2 sm:mt-0", className)}
    {...props}
  />
));
AlertDialogCancel.displayName = AlertDialogPrimitive.Cancel.displayName;

export {
  AlertDialog,
  AlertDialogPortal,
  AlertDialogOverlay,
  AlertDialogTrigger,
  AlertDialogContent,
  AlertDialogHeader,
  AlertDialogFooter,
  AlertDialogTitle,
  AlertDialogDescription,
  AlertDialogAction,
  AlertDialogCancel,
};
```

---

### <a id='src-components-ui-alerttsx'></a> `src\components\ui\alert.tsx`

**Component:** alert.tsx

```tsx
import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";

const alertVariants = cva(
  "relative w-full rounded-lg border p-4 [&>svg~*]:pl-7 [&>svg+div]:translate-y-[-3px] [&>svg]:absolute [&>svg]:left-4 [&>svg]:top-4 [&>svg]:text-foreground",
  {
    variants: {
      variant: {
        default: "bg-background text-foreground",
        destructive: "border-destructive/50 text-destructive dark:border-destructive [&>svg]:text-destructive",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  },
);

const Alert = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement> & VariantProps<typeof alertVariants>
>(({ className, variant, ...props }, ref) => (
  <div ref={ref} role="alert" className={cn(alertVariants({ variant }), className)} {...props} />
));
Alert.displayName = "Alert";

const AlertTitle = React.forwardRef<HTMLParagraphElement, React.HTMLAttributes<HTMLHeadingElement>>(
  ({ className, ...props }, ref) => (
    <h5 ref={ref} className={cn("mb-1 font-medium leading-none tracking-tight", className)} {...props} />
  ),
);
AlertTitle.displayName = "AlertTitle";

const AlertDescription = React.forwardRef<HTMLParagraphElement, React.HTMLAttributes<HTMLParagraphElement>>(
  ({ className, ...props }, ref) => (
    <div ref={ref} className={cn("text-sm [&_p]:leading-relaxed", className)} {...props} />
  ),
);
AlertDescription.displayName = "AlertDescription";

export { Alert, AlertTitle, AlertDescription };
```

---

### <a id='src-components-ui-aspect-ratiotsx'></a> `src\components\ui\aspect-ratio.tsx`

**Component:** aspect-ratio.tsx

```tsx
import * as AspectRatioPrimitive from "@radix-ui/react-aspect-ratio";

const AspectRatio = AspectRatioPrimitive.Root;

export { AspectRatio };
```

---

### <a id='src-components-ui-auth-skeletontsx'></a> `src\components\ui\auth-skeleton.tsx`

**Component:** auth-skeleton.tsx

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

### <a id='src-components-ui-avatartsx'></a> `src\components\ui\avatar.tsx`

**Component:** avatar.tsx

```tsx
import * as React from "react";
import * as AvatarPrimitive from "@radix-ui/react-avatar";

import { cn } from "@/lib/utils";

const Avatar = React.forwardRef<
  React.ElementRef<typeof AvatarPrimitive.Root>,
  React.ComponentPropsWithoutRef<typeof AvatarPrimitive.Root>
>(({ className, ...props }, ref) => (
  <AvatarPrimitive.Root
    ref={ref}
    className={cn("relative flex h-10 w-10 shrink-0 overflow-hidden rounded-full", className)}
    {...props}
  />
));
Avatar.displayName = AvatarPrimitive.Root.displayName;

const AvatarImage = React.forwardRef<
  React.ElementRef<typeof AvatarPrimitive.Image>,
  React.ComponentPropsWithoutRef<typeof AvatarPrimitive.Image>
>(({ className, ...props }, ref) => (
  <AvatarPrimitive.Image ref={ref} className={cn("aspect-square h-full w-full", className)} {...props} />
));
AvatarImage.displayName = AvatarPrimitive.Image.displayName;

const AvatarFallback = React.forwardRef<
  React.ElementRef<typeof AvatarPrimitive.Fallback>,
  React.ComponentPropsWithoutRef<typeof AvatarPrimitive.Fallback>
>(({ className, ...props }, ref) => (
  <AvatarPrimitive.Fallback
    ref={ref}
    className={cn("flex h-full w-full items-center justify-center rounded-full bg-muted", className)}
    {...props}
  />
));
AvatarFallback.displayName = AvatarPrimitive.Fallback.displayName;

export { Avatar, AvatarImage, AvatarFallback };
```

---

### <a id='src-components-ui-badgetsx'></a> `src\components\ui\badge.tsx`

**Component:** badge.tsx

```tsx
import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";

const badgeVariants = cva(
  "inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2",
  {
    variants: {
      variant: {
        default: "border-transparent bg-primary text-primary-foreground hover:bg-primary/80",
        secondary: "border-transparent bg-secondary text-secondary-foreground hover:bg-secondary/80",
        destructive: "border-transparent bg-destructive text-destructive-foreground hover:bg-destructive/80",
        outline: "text-foreground",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  },
);

export interface BadgeProps extends React.HTMLAttributes<HTMLDivElement>, VariantProps<typeof badgeVariants> {}

function Badge({ className, variant, ...props }: BadgeProps) {
  return <div className={cn(badgeVariants({ variant }), className)} {...props} />;
}

export { Badge, badgeVariants };
```

---

### <a id='src-components-ui-breadcrumbtsx'></a> `src\components\ui\breadcrumb.tsx`

**Component:** breadcrumb.tsx

```tsx
import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { ChevronRight, MoreHorizontal } from "lucide-react";

import { cn } from "@/lib/utils";

const Breadcrumb = React.forwardRef<
  HTMLElement,
  React.ComponentPropsWithoutRef<"nav"> & {
    separator?: React.ReactNode;
  }
>(({ ...props }, ref) => <nav ref={ref} aria-label="breadcrumb" {...props} />);
Breadcrumb.displayName = "Breadcrumb";

const BreadcrumbList = React.forwardRef<HTMLOListElement, React.ComponentPropsWithoutRef<"ol">>(
  ({ className, ...props }, ref) => (
    <ol
      ref={ref}
      className={cn(
        "flex flex-wrap items-center gap-1.5 break-words text-sm text-muted-foreground sm:gap-2.5",
        className,
      )}
      {...props}
    />
  ),
);
BreadcrumbList.displayName = "BreadcrumbList";

const BreadcrumbItem = React.forwardRef<HTMLLIElement, React.ComponentPropsWithoutRef<"li">>(
  ({ className, ...props }, ref) => (
    <li ref={ref} className={cn("inline-flex items-center gap-1.5", className)} {...props} />
  ),
);
BreadcrumbItem.displayName = "BreadcrumbItem";

const BreadcrumbLink = React.forwardRef<
  HTMLAnchorElement,
  React.ComponentPropsWithoutRef<"a"> & {
    asChild?: boolean;
  }
>(({ asChild, className, ...props }, ref) => {
  const Comp = asChild ? Slot : "a";

  return <Comp ref={ref} className={cn("transition-colors hover:text-foreground", className)} {...props} />;
});
BreadcrumbLink.displayName = "BreadcrumbLink";

const BreadcrumbPage = React.forwardRef<HTMLSpanElement, React.ComponentPropsWithoutRef<"span">>(
  ({ className, ...props }, ref) => (
    <span
      ref={ref}
      role="link"
      aria-disabled="true"
      aria-current="page"
      className={cn("font-normal text-foreground", className)}
      {...props}
    />
  ),
);
BreadcrumbPage.displayName = "BreadcrumbPage";

const BreadcrumbSeparator = ({ children, className, ...props }: React.ComponentProps<"li">) => (
  <li role="presentation" aria-hidden="true" className={cn("[&>svg]:size-3.5", className)} {...props}>
    {children ?? <ChevronRight />}
  </li>
);
BreadcrumbSeparator.displayName = "BreadcrumbSeparator";

const BreadcrumbEllipsis = ({ className, ...props }: React.ComponentProps<"span">) => (
  <span
    role="presentation"
    aria-hidden="true"
    className={cn("flex h-9 w-9 items-center justify-center", className)}
    {...props}
  >
    <MoreHorizontal className="h-4 w-4" />
    <span className="sr-only">More</span>
  </span>
);
BreadcrumbEllipsis.displayName = "BreadcrumbElipssis";

export {
  Breadcrumb,
  BreadcrumbList,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbPage,
  BreadcrumbSeparator,
  BreadcrumbEllipsis,
};
```

---

### <a id='src-components-ui-buttontsx'></a> `src\components\ui\button.tsx`

**Component:** button.tsx

```tsx
import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0",
  {
    variants: {
      variant: {
        default: "bg-gradient-primary text-primary-foreground hover:opacity-90 shadow-primary/20 hover:shadow-primary/40 shadow-lg",
        destructive: "bg-destructive text-destructive-foreground hover:bg-destructive/90",
        outline: "border border-input bg-background hover:bg-accent hover:text-accent-foreground",
        secondary: "bg-secondary text-secondary-foreground hover:bg-secondary-hover",
        ghost: "hover:bg-accent hover:text-accent-foreground",
        link: "text-primary underline-offset-4 hover:underline",
        hero: "bg-white text-primary hover:bg-gray-100 shadow-medium font-semibold",
      },
      size: {
        default: "h-10 px-4 py-2",
        sm: "h-9 rounded-md px-3",
        lg: "h-11 rounded-md px-8",
        icon: "h-10 w-10",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  },
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button";
    return <Comp className={cn(buttonVariants({ variant, size, className }))} ref={ref} {...props} />;
  },
);
Button.displayName = "Button";

export { Button, buttonVariants };
```

---

### <a id='src-components-ui-calendartsx'></a> `src\components\ui\calendar.tsx`

**Component:** calendar.tsx

```tsx
import * as React from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { DayPicker } from "react-day-picker";

import { cn } from "@/lib/utils";
import { buttonVariants } from "@/components/ui/button";

export type CalendarProps = React.ComponentProps<typeof DayPicker>;

function Calendar({ className, classNames, showOutsideDays = true, ...props }: CalendarProps) {
  return (
    <DayPicker
      showOutsideDays={showOutsideDays}
      className={cn("p-3", className)}
      classNames={{
        months: "flex flex-col sm:flex-row space-y-4 sm:space-x-4 sm:space-y-0",
        month: "space-y-4",
        caption: "flex justify-center pt-1 relative items-center",
        caption_label: "text-sm font-medium",
        nav: "space-x-1 flex items-center",
        nav_button: cn(
          buttonVariants({ variant: "outline" }),
          "h-7 w-7 bg-transparent p-0 opacity-50 hover:opacity-100",
        ),
        nav_button_previous: "absolute left-1",
        nav_button_next: "absolute right-1",
        table: "w-full border-collapse space-y-1",
        head_row: "flex",
        head_cell: "text-muted-foreground rounded-md w-9 font-normal text-[0.8rem]",
        row: "flex w-full mt-2",
        cell: "h-9 w-9 text-center text-sm p-0 relative [&:has([aria-selected].day-range-end)]:rounded-r-md [&:has([aria-selected].day-outside)]:bg-accent/50 [&:has([aria-selected])]:bg-accent first:[&:has([aria-selected])]:rounded-l-md last:[&:has([aria-selected])]:rounded-r-md focus-within:relative focus-within:z-20",
        day: cn(buttonVariants({ variant: "ghost" }), "h-9 w-9 p-0 font-normal aria-selected:opacity-100"),
        day_range_end: "day-range-end",
        day_selected:
          "bg-primary text-primary-foreground hover:bg-primary hover:text-primary-foreground focus:bg-primary focus:text-primary-foreground",
        day_today: "bg-accent text-accent-foreground",
        day_outside:
          "day-outside text-muted-foreground opacity-50 aria-selected:bg-accent/50 aria-selected:text-muted-foreground aria-selected:opacity-30",
        day_disabled: "text-muted-foreground opacity-50",
        day_range_middle: "aria-selected:bg-accent aria-selected:text-accent-foreground",
        day_hidden: "invisible",
        ...classNames,
      }}
      components={{
        IconLeft: ({ ..._props }) => <ChevronLeft className="h-4 w-4" />,
        IconRight: ({ ..._props }) => <ChevronRight className="h-4 w-4" />,
      }}
      {...props}
    />
  );
}
Calendar.displayName = "Calendar";

export { Calendar };
```

---

### <a id='src-components-ui-cardtsx'></a> `src\components\ui\card.tsx`

**Component:** card.tsx

```tsx
import * as React from "react";

import { cn } from "@/lib/utils";

const Card = React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(({ className, ...props }, ref) => (
  <div ref={ref} className={cn("rounded-lg border bg-card text-card-foreground shadow-sm", className)} {...props} />
));
Card.displayName = "Card";

const CardHeader = React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(
  ({ className, ...props }, ref) => (
    <div ref={ref} className={cn("flex flex-col space-y-1.5 p-6", className)} {...props} />
  ),
);
CardHeader.displayName = "CardHeader";

const CardTitle = React.forwardRef<HTMLParagraphElement, React.HTMLAttributes<HTMLHeadingElement>>(
  ({ className, ...props }, ref) => (
    <h3 ref={ref} className={cn("text-2xl font-semibold leading-none tracking-tight", className)} {...props} />
  ),
);
CardTitle.displayName = "CardTitle";

const CardDescription = React.forwardRef<HTMLParagraphElement, React.HTMLAttributes<HTMLParagraphElement>>(
  ({ className, ...props }, ref) => (
    <p ref={ref} className={cn("text-sm text-muted-foreground", className)} {...props} />
  ),
);
CardDescription.displayName = "CardDescription";

const CardContent = React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(
  ({ className, ...props }, ref) => <div ref={ref} className={cn("p-6 pt-0", className)} {...props} />,
);
CardContent.displayName = "CardContent";

const CardFooter = React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(
  ({ className, ...props }, ref) => (
    <div ref={ref} className={cn("flex items-center p-6 pt-0", className)} {...props} />
  ),
);
CardFooter.displayName = "CardFooter";

export { Card, CardHeader, CardFooter, CardTitle, CardDescription, CardContent };
```

---

### <a id='src-components-ui-carouseltsx'></a> `src\components\ui\carousel.tsx`

**Component:** carousel.tsx

```tsx
import * as React from "react";
import useEmblaCarousel, { type UseEmblaCarouselType } from "embla-carousel-react";
import { ArrowLeft, ArrowRight } from "lucide-react";

import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";

type CarouselApi = UseEmblaCarouselType[1];
type UseCarouselParameters = Parameters<typeof useEmblaCarousel>;
type CarouselOptions = UseCarouselParameters[0];
type CarouselPlugin = UseCarouselParameters[1];

type CarouselProps = {
  opts?: CarouselOptions;
  plugins?: CarouselPlugin;
  orientation?: "horizontal" | "vertical";
  setApi?: (api: CarouselApi) => void;
};

type CarouselContextProps = {
  carouselRef: ReturnType<typeof useEmblaCarousel>[0];
  api: ReturnType<typeof useEmblaCarousel>[1];
  scrollPrev: () => void;
  scrollNext: () => void;
  canScrollPrev: boolean;
  canScrollNext: boolean;
} & CarouselProps;

const CarouselContext = React.createContext<CarouselContextProps | null>(null);

function useCarousel() {
  const context = React.useContext(CarouselContext);

  if (!context) {
    throw new Error("useCarousel must be used within a <Carousel />");
  }

  return context;
}

const Carousel = React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement> & CarouselProps>(
  ({ orientation = "horizontal", opts, setApi, plugins, className, children, ...props }, ref) => {
    const [carouselRef, api] = useEmblaCarousel(
      {
        ...opts,
        axis: orientation === "horizontal" ? "x" : "y",
      },
      plugins,
    );
    const [canScrollPrev, setCanScrollPrev] = React.useState(false);
    const [canScrollNext, setCanScrollNext] = React.useState(false);

    const onSelect = React.useCallback((api: CarouselApi) => {
      if (!api) {
        return;
      }

      setCanScrollPrev(api.canScrollPrev());
      setCanScrollNext(api.canScrollNext());
    }, []);

    const scrollPrev = React.useCallback(() => {
      api?.scrollPrev();
    }, [api]);

    const scrollNext = React.useCallback(() => {
      api?.scrollNext();
    }, [api]);

    const handleKeyDown = React.useCallback(
      (event: React.KeyboardEvent<HTMLDivElement>) => {
        if (event.key === "ArrowLeft") {
          event.preventDefault();
          scrollPrev();
        } else if (event.key === "ArrowRight") {
          event.preventDefault();
          scrollNext();
        }
      },
      [scrollPrev, scrollNext],
    );

    React.useEffect(() => {
      if (!api || !setApi) {
        return;
      }

      setApi(api);
    }, [api, setApi]);

    React.useEffect(() => {
      if (!api) {
        return;
      }

      onSelect(api);
      api.on("reInit", onSelect);
      api.on("select", onSelect);

      return () => {
        api?.off("select", onSelect);
      };
    }, [api, onSelect]);

    return (
      <CarouselContext.Provider
        value={{
          carouselRef,
          api: api,
          opts,
          orientation: orientation || (opts?.axis === "y" ? "vertical" : "horizontal"),
          scrollPrev,
          scrollNext,
          canScrollPrev,
          canScrollNext,
        }}
      >
        <div
          ref={ref}
          onKeyDownCapture={handleKeyDown}
          className={cn("relative", className)}
          role="region"
          aria-roledescription="carousel"
          {...props}
        >
          {children}
        </div>
      </CarouselContext.Provider>
    );
  },
);
Carousel.displayName = "Carousel";

const CarouselContent = React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(
  ({ className, ...props }, ref) => {
    const { carouselRef, orientation } = useCarousel();

    return (
      <div ref={carouselRef} className="overflow-hidden">
        <div
          ref={ref}
          className={cn("flex", orientation === "horizontal" ? "-ml-4" : "-mt-4 flex-col", className)}
          {...props}
        />
      </div>
    );
  },
);
CarouselContent.displayName = "CarouselContent";

const CarouselItem = React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(
  ({ className, ...props }, ref) => {
    const { orientation } = useCarousel();

    return (
      <div
        ref={ref}
        role="group"
        aria-roledescription="slide"
        className={cn("min-w-0 shrink-0 grow-0 basis-full", orientation === "horizontal" ? "pl-4" : "pt-4", className)}
        {...props}
      />
    );
  },
);
CarouselItem.displayName = "CarouselItem";

const CarouselPrevious = React.forwardRef<HTMLButtonElement, React.ComponentProps<typeof Button>>(
  ({ className, variant = "outline", size = "icon", ...props }, ref) => {
    const { orientation, scrollPrev, canScrollPrev } = useCarousel();

    return (
      <Button
        ref={ref}
        variant={variant}
        size={size}
        className={cn(
          "absolute h-8 w-8 rounded-full",
          orientation === "horizontal"
            ? "-left-12 top-1/2 -translate-y-1/2"
            : "-top-12 left-1/2 -translate-x-1/2 rotate-90",
          className,
        )}
        disabled={!canScrollPrev}
        onClick={scrollPrev}
        {...props}
      >
        <ArrowLeft className="h-4 w-4" />
        <span className="sr-only">Previous slide</span>
      </Button>
    );
  },
);
CarouselPrevious.displayName = "CarouselPrevious";

const CarouselNext = React.forwardRef<HTMLButtonElement, React.ComponentProps<typeof Button>>(
  ({ className, variant = "outline", size = "icon", ...props }, ref) => {
    const { orientation, scrollNext, canScrollNext } = useCarousel();

    return (
      <Button
        ref={ref}
        variant={variant}
        size={size}
        className={cn(
          "absolute h-8 w-8 rounded-full",
          orientation === "horizontal"
            ? "-right-12 top-1/2 -translate-y-1/2"
            : "-bottom-12 left-1/2 -translate-x-1/2 rotate-90",
          className,
        )}
        disabled={!canScrollNext}
        onClick={scrollNext}
        {...props}
      >
        <ArrowRight className="h-4 w-4" />
        <span className="sr-only">Next slide</span>
      </Button>
    );
  },
);
CarouselNext.displayName = "CarouselNext";

export { type CarouselApi, Carousel, CarouselContent, CarouselItem, CarouselPrevious, CarouselNext };
```

---

### <a id='src-components-ui-charttsx'></a> `src\components\ui\chart.tsx`

**Component:** chart.tsx

```tsx
import * as React from "react";
import * as RechartsPrimitive from "recharts";

import { cn } from "@/lib/utils";

// Format: { THEME_NAME: CSS_SELECTOR }
const THEMES = { light: "", dark: ".dark" } as const;

export type ChartConfig = {
  [k in string]: {
    label?: React.ReactNode;
    icon?: React.ComponentType;
  } & ({ color?: string; theme?: never } | { color?: never; theme: Record<keyof typeof THEMES, string> });
};

type ChartContextProps = {
  config: ChartConfig;
};

const ChartContext = React.createContext<ChartContextProps | null>(null);

function useChart() {
  const context = React.useContext(ChartContext);

  if (!context) {
    throw new Error("useChart must be used within a <ChartContainer />");
  }

  return context;
}

const ChartContainer = React.forwardRef<
  HTMLDivElement,
  React.ComponentProps<"div"> & {
    config: ChartConfig;
    children: React.ComponentProps<typeof RechartsPrimitive.ResponsiveContainer>["children"];
  }
>(({ id, className, children, config, ...props }, ref) => {
  const uniqueId = React.useId();
  const chartId = `chart-${id || uniqueId.replace(/:/g, "")}`;

  return (
    <ChartContext.Provider value={{ config }}>
      <div
        data-chart={chartId}
        ref={ref}
        className={cn(
          "flex aspect-video justify-center text-xs [&_.recharts-cartesian-axis-tick_text]:fill-muted-foreground [&_.recharts-cartesian-grid_line[stroke='#ccc']]:stroke-border/50 [&_.recharts-curve.recharts-tooltip-cursor]:stroke-border [&_.recharts-dot[stroke='#fff']]:stroke-transparent [&_.recharts-layer]:outline-none [&_.recharts-polar-grid_[stroke='#ccc']]:stroke-border [&_.recharts-radial-bar-background-sector]:fill-muted [&_.recharts-rectangle.recharts-tooltip-cursor]:fill-muted [&_.recharts-reference-line_[stroke='#ccc']]:stroke-border [&_.recharts-sector[stroke='#fff']]:stroke-transparent [&_.recharts-sector]:outline-none [&_.recharts-surface]:outline-none",
          className,
        )}
        {...props}
      >
        <ChartStyle id={chartId} config={config} />
        <RechartsPrimitive.ResponsiveContainer>{children}</RechartsPrimitive.ResponsiveContainer>
      </div>
    </ChartContext.Provider>
  );
});
ChartContainer.displayName = "Chart";

const ChartStyle = ({ id, config }: { id: string; config: ChartConfig }) => {
  const colorConfig = Object.entries(config).filter(([_, config]) => config.theme || config.color);

  if (!colorConfig.length) {
    return null;
  }

  return (
    <style
      dangerouslySetInnerHTML={{
        __html: Object.entries(THEMES)
          .map(
            ([theme, prefix]) => `
${prefix} [data-chart=${id}] {
${colorConfig
  .map(([key, itemConfig]) => {
    const color = itemConfig.theme?.[theme as keyof typeof itemConfig.theme] || itemConfig.color;
    return color ? `  --color-${key}: ${color};` : null;
  })
  .join("\n")}
}
`,
          )
          .join("\n"),
      }}
    />
  );
};

const ChartTooltip = RechartsPrimitive.Tooltip;

const ChartTooltipContent = React.forwardRef<
  HTMLDivElement,
  React.ComponentProps<typeof RechartsPrimitive.Tooltip> &
    React.ComponentProps<"div"> & {
      hideLabel?: boolean;
      hideIndicator?: boolean;
      indicator?: "line" | "dot" | "dashed";
      nameKey?: string;
      labelKey?: string;
    }
>(
  (
    {
      active,
      payload,
      className,
      indicator = "dot",
      hideLabel = false,
      hideIndicator = false,
      label,
      labelFormatter,
      labelClassName,
      formatter,
      color,
      nameKey,
      labelKey,
    },
    ref,
  ) => {
    const { config } = useChart();

    const tooltipLabel = React.useMemo(() => {
      if (hideLabel || !payload?.length) {
        return null;
      }

      const [item] = payload;
      const key = `${labelKey || item.dataKey || item.name || "value"}`;
      const itemConfig = getPayloadConfigFromPayload(config, item, key);
      const value =
        !labelKey && typeof label === "string"
          ? config[label as keyof typeof config]?.label || label
          : itemConfig?.label;

      if (labelFormatter) {
        return <div className={cn("font-medium", labelClassName)}>{labelFormatter(value, payload)}</div>;
      }

      if (!value) {
        return null;
      }

      return <div className={cn("font-medium", labelClassName)}>{value}</div>;
    }, [label, labelFormatter, payload, hideLabel, labelClassName, config, labelKey]);

    if (!active || !payload?.length) {
      return null;
    }

    const nestLabel = payload.length === 1 && indicator !== "dot";

    return (
      <div
        ref={ref}
        className={cn(
          "grid min-w-[8rem] items-start gap-1.5 rounded-lg border border-border/50 bg-background px-2.5 py-1.5 text-xs shadow-xl",
          className,
        )}
      >
        {!nestLabel ? tooltipLabel : null}
        <div className="grid gap-1.5">
          {payload.map((item, index) => {
            const key = `${nameKey || item.name || item.dataKey || "value"}`;
            const itemConfig = getPayloadConfigFromPayload(config, item, key);
            const indicatorColor = color || item.payload.fill || item.color;

            return (
              <div
                key={item.dataKey}
                className={cn(
                  "flex w-full flex-wrap items-stretch gap-2 [&>svg]:h-2.5 [&>svg]:w-2.5 [&>svg]:text-muted-foreground",
                  indicator === "dot" && "items-center",
                )}
              >
                {formatter && item?.value !== undefined && item.name ? (
                  formatter(item.value, item.name, item, index, item.payload)
                ) : (
                  <>
                    {itemConfig?.icon ? (
                      <itemConfig.icon />
                    ) : (
                      !hideIndicator && (
                        <div
                          className={cn("shrink-0 rounded-[2px] border-[--color-border] bg-[--color-bg]", {
                            "h-2.5 w-2.5": indicator === "dot",
                            "w-1": indicator === "line",
                            "w-0 border-[1.5px] border-dashed bg-transparent": indicator === "dashed",
                            "my-0.5": nestLabel && indicator === "dashed",
                          })}
                          style={
                            {
                              "--color-bg": indicatorColor,
                              "--color-border": indicatorColor,
                            } as React.CSSProperties
                          }
                        />
                      )
                    )}
                    <div
                      className={cn(
                        "flex flex-1 justify-between leading-none",
                        nestLabel ? "items-end" : "items-center",
                      )}
                    >
                      <div className="grid gap-1.5">
                        {nestLabel ? tooltipLabel : null}
                        <span className="text-muted-foreground">{itemConfig?.label || item.name}</span>
                      </div>
                      {item.value && (
                        <span className="font-mono font-medium tabular-nums text-foreground">
                          {item.value.toLocaleString()}
                        </span>
                      )}
                    </div>
                  </>
                )}
              </div>
            );
          })}
        </div>
      </div>
    );
  },
);
ChartTooltipContent.displayName = "ChartTooltip";

const ChartLegend = RechartsPrimitive.Legend;

const ChartLegendContent = React.forwardRef<
  HTMLDivElement,
  React.ComponentProps<"div"> &
    Pick<RechartsPrimitive.LegendProps, "payload" | "verticalAlign"> & {
      hideIcon?: boolean;
      nameKey?: string;
    }
>(({ className, hideIcon = false, payload, verticalAlign = "bottom", nameKey }, ref) => {
  const { config } = useChart();

  if (!payload?.length) {
    return null;
  }

  return (
    <div
      ref={ref}
      className={cn("flex items-center justify-center gap-4", verticalAlign === "top" ? "pb-3" : "pt-3", className)}
    >
      {payload.map((item) => {
        const key = `${nameKey || item.dataKey || "value"}`;
        const itemConfig = getPayloadConfigFromPayload(config, item, key);

        return (
          <div
            key={item.value}
            className={cn("flex items-center gap-1.5 [&>svg]:h-3 [&>svg]:w-3 [&>svg]:text-muted-foreground")}
          >
            {itemConfig?.icon && !hideIcon ? (
              <itemConfig.icon />
            ) : (
              <div
                className="h-2 w-2 shrink-0 rounded-[2px]"
                style={{
                  backgroundColor: item.color,
                }}
              />
            )}
            {itemConfig?.label}
          </div>
        );
      })}
    </div>
  );
});
ChartLegendContent.displayName = "ChartLegend";

// Helper to extract item config from a payload.
function getPayloadConfigFromPayload(config: ChartConfig, payload: unknown, key: string) {
  if (typeof payload !== "object" || payload === null) {
    return undefined;
  }

  const payloadPayload =
    "payload" in payload && typeof payload.payload === "object" && payload.payload !== null
      ? payload.payload
      : undefined;

  let configLabelKey: string = key;

  if (key in payload && typeof payload[key as keyof typeof payload] === "string") {
    configLabelKey = payload[key as keyof typeof payload] as string;
  } else if (
    payloadPayload &&
    key in payloadPayload &&
    typeof payloadPayload[key as keyof typeof payloadPayload] === "string"
  ) {
    configLabelKey = payloadPayload[key as keyof typeof payloadPayload] as string;
  }

  return configLabelKey in config ? config[configLabelKey] : config[key as keyof typeof config];
}

export { ChartContainer, ChartTooltip, ChartTooltipContent, ChartLegend, ChartLegendContent, ChartStyle };
```

---

### <a id='src-components-ui-checkboxtsx'></a> `src\components\ui\checkbox.tsx`

**Component:** checkbox.tsx

```tsx
import * as React from "react";
import * as CheckboxPrimitive from "@radix-ui/react-checkbox";
import { Check } from "lucide-react";

import { cn } from "@/lib/utils";

const Checkbox = React.forwardRef<
  React.ElementRef<typeof CheckboxPrimitive.Root>,
  React.ComponentPropsWithoutRef<typeof CheckboxPrimitive.Root>
>(({ className, ...props }, ref) => (
  <CheckboxPrimitive.Root
    ref={ref}
    className={cn(
      "peer h-4 w-4 shrink-0 rounded-sm border border-primary ring-offset-background data-[state=checked]:bg-primary data-[state=checked]:text-primary-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50",
      className,
    )}
    {...props}
  >
    <CheckboxPrimitive.Indicator className={cn("flex items-center justify-center text-current")}>
      <Check className="h-4 w-4" />
    </CheckboxPrimitive.Indicator>
  </CheckboxPrimitive.Root>
));
Checkbox.displayName = CheckboxPrimitive.Root.displayName;

export { Checkbox };
```

---

### <a id='src-components-ui-collapsibletsx'></a> `src\components\ui\collapsible.tsx`

**Component:** collapsible.tsx

```tsx
import * as CollapsiblePrimitive from "@radix-ui/react-collapsible";

const Collapsible = CollapsiblePrimitive.Root;

const CollapsibleTrigger = CollapsiblePrimitive.CollapsibleTrigger;

const CollapsibleContent = CollapsiblePrimitive.CollapsibleContent;

export { Collapsible, CollapsibleTrigger, CollapsibleContent };
```

---

### <a id='src-components-ui-commandtsx'></a> `src\components\ui\command.tsx`

**Component:** command.tsx

```tsx
import * as React from "react";
import { type DialogProps } from "@radix-ui/react-dialog";
import { Command as CommandPrimitive } from "cmdk";
import { Search } from "lucide-react";

import { cn } from "@/lib/utils";
import { Dialog, DialogContent } from "@/components/ui/dialog";

const Command = React.forwardRef<
  React.ElementRef<typeof CommandPrimitive>,
  React.ComponentPropsWithoutRef<typeof CommandPrimitive>
>(({ className, ...props }, ref) => (
  <CommandPrimitive
    ref={ref}
    className={cn(
      "flex h-full w-full flex-col overflow-hidden rounded-md bg-popover text-popover-foreground",
      className,
    )}
    {...props}
  />
));
Command.displayName = CommandPrimitive.displayName;

interface CommandDialogProps extends DialogProps {}

const CommandDialog = ({ children, ...props }: CommandDialogProps) => {
  return (
    <Dialog {...props}>
      <DialogContent className="overflow-hidden p-0 shadow-lg">
        <Command className="[&_[cmdk-group-heading]]:px-2 [&_[cmdk-group-heading]]:font-medium [&_[cmdk-group-heading]]:text-muted-foreground [&_[cmdk-group]:not([hidden])_~[cmdk-group]]:pt-0 [&_[cmdk-group]]:px-2 [&_[cmdk-input-wrapper]_svg]:h-5 [&_[cmdk-input-wrapper]_svg]:w-5 [&_[cmdk-input]]:h-12 [&_[cmdk-item]]:px-2 [&_[cmdk-item]]:py-3 [&_[cmdk-item]_svg]:h-5 [&_[cmdk-item]_svg]:w-5">
          {children}
        </Command>
      </DialogContent>
    </Dialog>
  );
};

const CommandInput = React.forwardRef<
  React.ElementRef<typeof CommandPrimitive.Input>,
  React.ComponentPropsWithoutRef<typeof CommandPrimitive.Input>
>(({ className, ...props }, ref) => (
  <div className="flex items-center border-b px-3" cmdk-input-wrapper="">
    <Search className="mr-2 h-4 w-4 shrink-0 opacity-50" />
    <CommandPrimitive.Input
      ref={ref}
      className={cn(
        "flex h-11 w-full rounded-md bg-transparent py-3 text-sm outline-none placeholder:text-muted-foreground disabled:cursor-not-allowed disabled:opacity-50",
        className,
      )}
      {...props}
    />
  </div>
));

CommandInput.displayName = CommandPrimitive.Input.displayName;

const CommandList = React.forwardRef<
  React.ElementRef<typeof CommandPrimitive.List>,
  React.ComponentPropsWithoutRef<typeof CommandPrimitive.List>
>(({ className, ...props }, ref) => (
  <CommandPrimitive.List
    ref={ref}
    className={cn("max-h-[300px] overflow-y-auto overflow-x-hidden", className)}
    {...props}
  />
));

CommandList.displayName = CommandPrimitive.List.displayName;

const CommandEmpty = React.forwardRef<
  React.ElementRef<typeof CommandPrimitive.Empty>,
  React.ComponentPropsWithoutRef<typeof CommandPrimitive.Empty>
>((props, ref) => <CommandPrimitive.Empty ref={ref} className="py-6 text-center text-sm" {...props} />);

CommandEmpty.displayName = CommandPrimitive.Empty.displayName;

const CommandGroup = React.forwardRef<
  React.ElementRef<typeof CommandPrimitive.Group>,
  React.ComponentPropsWithoutRef<typeof CommandPrimitive.Group>
>(({ className, ...props }, ref) => (
  <CommandPrimitive.Group
    ref={ref}
    className={cn(
      "overflow-hidden p-1 text-foreground [&_[cmdk-group-heading]]:px-2 [&_[cmdk-group-heading]]:py-1.5 [&_[cmdk-group-heading]]:text-xs [&_[cmdk-group-heading]]:font-medium [&_[cmdk-group-heading]]:text-muted-foreground",
      className,
    )}
    {...props}
  />
));

CommandGroup.displayName = CommandPrimitive.Group.displayName;

const CommandSeparator = React.forwardRef<
  React.ElementRef<typeof CommandPrimitive.Separator>,
  React.ComponentPropsWithoutRef<typeof CommandPrimitive.Separator>
>(({ className, ...props }, ref) => (
  <CommandPrimitive.Separator ref={ref} className={cn("-mx-1 h-px bg-border", className)} {...props} />
));
CommandSeparator.displayName = CommandPrimitive.Separator.displayName;

const CommandItem = React.forwardRef<
  React.ElementRef<typeof CommandPrimitive.Item>,
  React.ComponentPropsWithoutRef<typeof CommandPrimitive.Item>
>(({ className, ...props }, ref) => (
  <CommandPrimitive.Item
    ref={ref}
    className={cn(
      "relative flex cursor-default select-none items-center rounded-sm px-2 py-1.5 text-sm outline-none data-[disabled=true]:pointer-events-none data-[selected='true']:bg-accent data-[selected=true]:text-accent-foreground data-[disabled=true]:opacity-50",
      className,
    )}
    {...props}
  />
));

CommandItem.displayName = CommandPrimitive.Item.displayName;

const CommandShortcut = ({ className, ...props }: React.HTMLAttributes<HTMLSpanElement>) => {
  return <span className={cn("ml-auto text-xs tracking-widest text-muted-foreground", className)} {...props} />;
};
CommandShortcut.displayName = "CommandShortcut";

export {
  Command,
  CommandDialog,
  CommandInput,
  CommandList,
  CommandEmpty,
  CommandGroup,
  CommandItem,
  CommandShortcut,
  CommandSeparator,
};
```

---

### <a id='src-components-ui-context-menutsx'></a> `src\components\ui\context-menu.tsx`

**Component:** context-menu.tsx

```tsx
import * as React from "react";
import * as ContextMenuPrimitive from "@radix-ui/react-context-menu";
import { Check, ChevronRight, Circle } from "lucide-react";

import { cn } from "@/lib/utils";

const ContextMenu = ContextMenuPrimitive.Root;

const ContextMenuTrigger = ContextMenuPrimitive.Trigger;

const ContextMenuGroup = ContextMenuPrimitive.Group;

const ContextMenuPortal = ContextMenuPrimitive.Portal;

const ContextMenuSub = ContextMenuPrimitive.Sub;

const ContextMenuRadioGroup = ContextMenuPrimitive.RadioGroup;

const ContextMenuSubTrigger = React.forwardRef<
  React.ElementRef<typeof ContextMenuPrimitive.SubTrigger>,
  React.ComponentPropsWithoutRef<typeof ContextMenuPrimitive.SubTrigger> & {
    inset?: boolean;
  }
>(({ className, inset, children, ...props }, ref) => (
  <ContextMenuPrimitive.SubTrigger
    ref={ref}
    className={cn(
      "flex cursor-default select-none items-center rounded-sm px-2 py-1.5 text-sm outline-none data-[state=open]:bg-accent data-[state=open]:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
      inset && "pl-8",
      className,
    )}
    {...props}
  >
    {children}
    <ChevronRight className="ml-auto h-4 w-4" />
  </ContextMenuPrimitive.SubTrigger>
));
ContextMenuSubTrigger.displayName = ContextMenuPrimitive.SubTrigger.displayName;

const ContextMenuSubContent = React.forwardRef<
  React.ElementRef<typeof ContextMenuPrimitive.SubContent>,
  React.ComponentPropsWithoutRef<typeof ContextMenuPrimitive.SubContent>
>(({ className, ...props }, ref) => (
  <ContextMenuPrimitive.SubContent
    ref={ref}
    className={cn(
      "z-50 min-w-[8rem] overflow-hidden rounded-md border bg-popover p-1 text-popover-foreground shadow-md data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2",
      className,
    )}
    {...props}
  />
));
ContextMenuSubContent.displayName = ContextMenuPrimitive.SubContent.displayName;

const ContextMenuContent = React.forwardRef<
  React.ElementRef<typeof ContextMenuPrimitive.Content>,
  React.ComponentPropsWithoutRef<typeof ContextMenuPrimitive.Content>
>(({ className, ...props }, ref) => (
  <ContextMenuPrimitive.Portal>
    <ContextMenuPrimitive.Content
      ref={ref}
      className={cn(
        "z-50 min-w-[8rem] overflow-hidden rounded-md border bg-popover p-1 text-popover-foreground shadow-md animate-in fade-in-80 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2",
        className,
      )}
      {...props}
    />
  </ContextMenuPrimitive.Portal>
));
ContextMenuContent.displayName = ContextMenuPrimitive.Content.displayName;

const ContextMenuItem = React.forwardRef<
  React.ElementRef<typeof ContextMenuPrimitive.Item>,
  React.ComponentPropsWithoutRef<typeof ContextMenuPrimitive.Item> & {
    inset?: boolean;
  }
>(({ className, inset, ...props }, ref) => (
  <ContextMenuPrimitive.Item
    ref={ref}
    className={cn(
      "relative flex cursor-default select-none items-center rounded-sm px-2 py-1.5 text-sm outline-none data-[disabled]:pointer-events-none data-[disabled]:opacity-50 focus:bg-accent focus:text-accent-foreground",
      inset && "pl-8",
      className,
    )}
    {...props}
  />
));
ContextMenuItem.displayName = ContextMenuPrimitive.Item.displayName;

const ContextMenuCheckboxItem = React.forwardRef<
  React.ElementRef<typeof ContextMenuPrimitive.CheckboxItem>,
  React.ComponentPropsWithoutRef<typeof ContextMenuPrimitive.CheckboxItem>
>(({ className, children, checked, ...props }, ref) => (
  <ContextMenuPrimitive.CheckboxItem
    ref={ref}
    className={cn(
      "relative flex cursor-default select-none items-center rounded-sm py-1.5 pl-8 pr-2 text-sm outline-none data-[disabled]:pointer-events-none data-[disabled]:opacity-50 focus:bg-accent focus:text-accent-foreground",
      className,
    )}
    checked={checked}
    {...props}
  >
    <span className="absolute left-2 flex h-3.5 w-3.5 items-center justify-center">
      <ContextMenuPrimitive.ItemIndicator>
        <Check className="h-4 w-4" />
      </ContextMenuPrimitive.ItemIndicator>
    </span>
    {children}
  </ContextMenuPrimitive.CheckboxItem>
));
ContextMenuCheckboxItem.displayName = ContextMenuPrimitive.CheckboxItem.displayName;

const ContextMenuRadioItem = React.forwardRef<
  React.ElementRef<typeof ContextMenuPrimitive.RadioItem>,
  React.ComponentPropsWithoutRef<typeof ContextMenuPrimitive.RadioItem>
>(({ className, children, ...props }, ref) => (
  <ContextMenuPrimitive.RadioItem
    ref={ref}
    className={cn(
      "relative flex cursor-default select-none items-center rounded-sm py-1.5 pl-8 pr-2 text-sm outline-none data-[disabled]:pointer-events-none data-[disabled]:opacity-50 focus:bg-accent focus:text-accent-foreground",
      className,
    )}
    {...props}
  >
    <span className="absolute left-2 flex h-3.5 w-3.5 items-center justify-center">
      <ContextMenuPrimitive.ItemIndicator>
        <Circle className="h-2 w-2 fill-current" />
      </ContextMenuPrimitive.ItemIndicator>
    </span>
    {children}
  </ContextMenuPrimitive.RadioItem>
));
ContextMenuRadioItem.displayName = ContextMenuPrimitive.RadioItem.displayName;

const ContextMenuLabel = React.forwardRef<
  React.ElementRef<typeof ContextMenuPrimitive.Label>,
  React.ComponentPropsWithoutRef<typeof ContextMenuPrimitive.Label> & {
    inset?: boolean;
  }
>(({ className, inset, ...props }, ref) => (
  <ContextMenuPrimitive.Label
    ref={ref}
    className={cn("px-2 py-1.5 text-sm font-semibold text-foreground", inset && "pl-8", className)}
    {...props}
  />
));
ContextMenuLabel.displayName = ContextMenuPrimitive.Label.displayName;

const ContextMenuSeparator = React.forwardRef<
  React.ElementRef<typeof ContextMenuPrimitive.Separator>,
  React.ComponentPropsWithoutRef<typeof ContextMenuPrimitive.Separator>
>(({ className, ...props }, ref) => (
  <ContextMenuPrimitive.Separator ref={ref} className={cn("-mx-1 my-1 h-px bg-border", className)} {...props} />
));
ContextMenuSeparator.displayName = ContextMenuPrimitive.Separator.displayName;

const ContextMenuShortcut = ({ className, ...props }: React.HTMLAttributes<HTMLSpanElement>) => {
  return <span className={cn("ml-auto text-xs tracking-widest text-muted-foreground", className)} {...props} />;
};
ContextMenuShortcut.displayName = "ContextMenuShortcut";

export {
  ContextMenu,
  ContextMenuTrigger,
  ContextMenuContent,
  ContextMenuItem,
  ContextMenuCheckboxItem,
  ContextMenuRadioItem,
  ContextMenuLabel,
  ContextMenuSeparator,
  ContextMenuShortcut,
  ContextMenuGroup,
  ContextMenuPortal,
  ContextMenuSub,
  ContextMenuSubContent,
  ContextMenuSubTrigger,
  ContextMenuRadioGroup,
};
```

---

### <a id='src-components-ui-create-story-skeletontsx'></a> `src\components\ui\create-story-skeleton.tsx`

**Component:** create-story-skeleton.tsx

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

### <a id='src-components-ui-dialogtsx'></a> `src\components\ui\dialog.tsx`

**Component:** dialog.tsx

```tsx
import * as React from "react";
import * as DialogPrimitive from "@radix-ui/react-dialog";
import { X } from "lucide-react";

import { cn } from "@/lib/utils";

const Dialog = DialogPrimitive.Root;

const DialogTrigger = DialogPrimitive.Trigger;

const DialogPortal = DialogPrimitive.Portal;

const DialogClose = DialogPrimitive.Close;

const DialogOverlay = React.forwardRef<
  React.ElementRef<typeof DialogPrimitive.Overlay>,
  React.ComponentPropsWithoutRef<typeof DialogPrimitive.Overlay>
>(({ className, ...props }, ref) => (
  <DialogPrimitive.Overlay
    ref={ref}
    className={cn(
      "fixed inset-0 z-50 bg-black/80 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0",
      className,
    )}
    {...props}
  />
));
DialogOverlay.displayName = DialogPrimitive.Overlay.displayName;

const DialogContent = React.forwardRef<
  React.ElementRef<typeof DialogPrimitive.Content>,
  React.ComponentPropsWithoutRef<typeof DialogPrimitive.Content>
>(({ className, children, ...props }, ref) => (
  <DialogPortal>
    <DialogOverlay />
    <DialogPrimitive.Content
      ref={ref}
      className={cn(
        "fixed left-[50%] top-[50%] z-50 grid w-full max-w-lg translate-x-[-50%] translate-y-[-50%] gap-4 border bg-background p-6 shadow-lg duration-200 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[state=closed]:slide-out-to-left-1/2 data-[state=closed]:slide-out-to-top-[48%] data-[state=open]:slide-in-from-left-1/2 data-[state=open]:slide-in-from-top-[48%] sm:rounded-lg",
        className,
      )}
      {...props}
    >
      {children}
      <DialogPrimitive.Close className="absolute right-4 top-4 rounded-sm opacity-70 ring-offset-background transition-opacity data-[state=open]:bg-accent data-[state=open]:text-muted-foreground hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:pointer-events-none">
        <X className="h-4 w-4" />
        <span className="sr-only">Close</span>
      </DialogPrimitive.Close>
    </DialogPrimitive.Content>
  </DialogPortal>
));
DialogContent.displayName = DialogPrimitive.Content.displayName;

const DialogHeader = ({ className, ...props }: React.HTMLAttributes<HTMLDivElement>) => (
  <div className={cn("flex flex-col space-y-1.5 text-center sm:text-left", className)} {...props} />
);
DialogHeader.displayName = "DialogHeader";

const DialogFooter = ({ className, ...props }: React.HTMLAttributes<HTMLDivElement>) => (
  <div className={cn("flex flex-col-reverse sm:flex-row sm:justify-end sm:space-x-2", className)} {...props} />
);
DialogFooter.displayName = "DialogFooter";

const DialogTitle = React.forwardRef<
  React.ElementRef<typeof DialogPrimitive.Title>,
  React.ComponentPropsWithoutRef<typeof DialogPrimitive.Title>
>(({ className, ...props }, ref) => (
  <DialogPrimitive.Title
    ref={ref}
    className={cn("text-lg font-semibold leading-none tracking-tight", className)}
    {...props}
  />
));
DialogTitle.displayName = DialogPrimitive.Title.displayName;

const DialogDescription = React.forwardRef<
  React.ElementRef<typeof DialogPrimitive.Description>,
  React.ComponentPropsWithoutRef<typeof DialogPrimitive.Description>
>(({ className, ...props }, ref) => (
  <DialogPrimitive.Description ref={ref} className={cn("text-sm text-muted-foreground", className)} {...props} />
));
DialogDescription.displayName = DialogPrimitive.Description.displayName;

export {
  Dialog,
  DialogPortal,
  DialogOverlay,
  DialogClose,
  DialogTrigger,
  DialogContent,
  DialogHeader,
  DialogFooter,
  DialogTitle,
  DialogDescription,
};
```

---

### <a id='src-components-ui-drawertsx'></a> `src\components\ui\drawer.tsx`

**Component:** drawer.tsx

```tsx
import * as React from "react";
import { Drawer as DrawerPrimitive } from "vaul";

import { cn } from "@/lib/utils";

const Drawer = ({ shouldScaleBackground = true, ...props }: React.ComponentProps<typeof DrawerPrimitive.Root>) => (
  <DrawerPrimitive.Root shouldScaleBackground={shouldScaleBackground} {...props} />
);
Drawer.displayName = "Drawer";

const DrawerTrigger = DrawerPrimitive.Trigger;

const DrawerPortal = DrawerPrimitive.Portal;

const DrawerClose = DrawerPrimitive.Close;

const DrawerOverlay = React.forwardRef<
  React.ElementRef<typeof DrawerPrimitive.Overlay>,
  React.ComponentPropsWithoutRef<typeof DrawerPrimitive.Overlay>
>(({ className, ...props }, ref) => (
  <DrawerPrimitive.Overlay ref={ref} className={cn("fixed inset-0 z-50 bg-black/80", className)} {...props} />
));
DrawerOverlay.displayName = DrawerPrimitive.Overlay.displayName;

const DrawerContent = React.forwardRef<
  React.ElementRef<typeof DrawerPrimitive.Content>,
  React.ComponentPropsWithoutRef<typeof DrawerPrimitive.Content>
>(({ className, children, ...props }, ref) => (
  <DrawerPortal>
    <DrawerOverlay />
    <DrawerPrimitive.Content
      ref={ref}
      className={cn(
        "fixed inset-x-0 bottom-0 z-50 mt-24 flex h-auto flex-col rounded-t-[10px] border bg-background",
        className,
      )}
      {...props}
    >
      <div className="mx-auto mt-4 h-2 w-[100px] rounded-full bg-muted" />
      {children}
    </DrawerPrimitive.Content>
  </DrawerPortal>
));
DrawerContent.displayName = "DrawerContent";

const DrawerHeader = ({ className, ...props }: React.HTMLAttributes<HTMLDivElement>) => (
  <div className={cn("grid gap-1.5 p-4 text-center sm:text-left", className)} {...props} />
);
DrawerHeader.displayName = "DrawerHeader";

const DrawerFooter = ({ className, ...props }: React.HTMLAttributes<HTMLDivElement>) => (
  <div className={cn("mt-auto flex flex-col gap-2 p-4", className)} {...props} />
);
DrawerFooter.displayName = "DrawerFooter";

const DrawerTitle = React.forwardRef<
  React.ElementRef<typeof DrawerPrimitive.Title>,
  React.ComponentPropsWithoutRef<typeof DrawerPrimitive.Title>
>(({ className, ...props }, ref) => (
  <DrawerPrimitive.Title
    ref={ref}
    className={cn("text-lg font-semibold leading-none tracking-tight", className)}
    {...props}
  />
));
DrawerTitle.displayName = DrawerPrimitive.Title.displayName;

const DrawerDescription = React.forwardRef<
  React.ElementRef<typeof DrawerPrimitive.Description>,
  React.ComponentPropsWithoutRef<typeof DrawerPrimitive.Description>
>(({ className, ...props }, ref) => (
  <DrawerPrimitive.Description ref={ref} className={cn("text-sm text-muted-foreground", className)} {...props} />
));
DrawerDescription.displayName = DrawerPrimitive.Description.displayName;

export {
  Drawer,
  DrawerPortal,
  DrawerOverlay,
  DrawerTrigger,
  DrawerClose,
  DrawerContent,
  DrawerHeader,
  DrawerFooter,
  DrawerTitle,
  DrawerDescription,
};
```

---

### <a id='src-components-ui-dropdown-menutsx'></a> `src\components\ui\dropdown-menu.tsx`

**Component:** dropdown-menu.tsx

```tsx
"use client";

import * as React from "react";
import * as DropdownMenuPrimitive from "@radix-ui/react-dropdown-menu";
import { Check, ChevronRight, Circle } from "lucide-react";

import { cn } from "@/lib/utils";

const DropdownMenu = DropdownMenuPrimitive.Root;

const DropdownMenuTrigger = DropdownMenuPrimitive.Trigger;

const DropdownMenuGroup = DropdownMenuPrimitive.Group;

const DropdownMenuPortal = DropdownMenuPrimitive.Portal;

const DropdownMenuSub = DropdownMenuPrimitive.Sub;

const DropdownMenuRadioGroup = DropdownMenuPrimitive.RadioGroup;

const DropdownMenuSubTrigger = React.forwardRef<
  React.ElementRef<typeof DropdownMenuPrimitive.SubTrigger>,
  React.ComponentPropsWithoutRef<typeof DropdownMenuPrimitive.SubTrigger> & {
    inset?: boolean;
  }
>(({ className, inset, children, ...props }, ref) => (
  <DropdownMenuPrimitive.SubTrigger
    ref={ref}
    className={cn(
      "flex cursor-default select-none items-center rounded-sm px-2 py-1.5 text-sm outline-none focus:bg-accent data-[state=open]:bg-accent",
      inset && "pl-8",
      className
    )}
    {...props}
  >
    {children}
    <ChevronRight className="ml-auto h-4 w-4" />
  </DropdownMenuPrimitive.SubTrigger>
));
DropdownMenuSubTrigger.displayName =
  DropdownMenuPrimitive.SubTrigger.displayName;

const DropdownMenuSubContent = React.forwardRef<
  React.ElementRef<typeof DropdownMenuPrimitive.SubContent>,
  React.ComponentPropsWithoutRef<typeof DropdownMenuPrimitive.SubContent>
>(({ className, ...props }, ref) => (
  <DropdownMenuPrimitive.SubContent
    ref={ref}
    className={cn(
      "z-50 min-w-[8rem] overflow-hidden rounded-md border bg-white p-1 text-popover-foreground shadow-lg data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2",
      className
    )}
    {...props}
  />
));
DropdownMenuSubContent.displayName =
  DropdownMenuPrimitive.SubContent.displayName;

const DropdownMenuContent = React.forwardRef<
  React.ElementRef<typeof DropdownMenuPrimitive.Content>,
  React.ComponentPropsWithoutRef<typeof DropdownMenuPrimitive.Content>
>(({ className, sideOffset = 4, ...props }, ref) => (
  <DropdownMenuPrimitive.Portal>
    <DropdownMenuPrimitive.Content
      ref={ref}
      sideOffset={sideOffset}
      className={cn(
        "z-50 min-w-[8rem] overflow-hidden rounded-md border border-gray-200 bg-white p-1 text-gray-950 shadow-md data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2",
        className
      )}
      {...props}
    />
  </DropdownMenuPrimitive.Portal>
));
DropdownMenuContent.displayName = DropdownMenuPrimitive.Content.displayName;

const DropdownMenuItem = React.forwardRef<
  React.ElementRef<typeof DropdownMenuPrimitive.Item>,
  React.ComponentPropsWithoutRef<typeof DropdownMenuPrimitive.Item> & {
    inset?: boolean;
  }
>(({ className, inset, ...props }, ref) => (
  <DropdownMenuPrimitive.Item
    ref={ref}
    className={cn(
      "relative flex cursor-default select-none items-center rounded-sm px-2 py-1.5 text-sm outline-none transition-colors focus:bg-gray-100 focus:text-gray-900 data-[disabled]:pointer-events-none data-[disabled]:opacity-50",
      inset && "pl-8",
      className
    )}
    {...props}
  />
));
DropdownMenuItem.displayName = DropdownMenuPrimitive.Item.displayName;

const DropdownMenuCheckboxItem = React.forwardRef<
  React.ElementRef<typeof DropdownMenuPrimitive.CheckboxItem>,
  React.ComponentPropsWithoutRef<typeof DropdownMenuPrimitive.CheckboxItem>
>(({ className, children, checked, ...props }, ref) => (
  <DropdownMenuPrimitive.CheckboxItem
    ref={ref}
    className={cn(
      "relative flex cursor-default select-none items-center rounded-sm py-1.5 pl-8 pr-2 text-sm outline-none transition-colors focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50",
      className
    )}
    checked={checked}
    {...props}
  >
    <span className="absolute left-2 flex h-3.5 w-3.5 items-center justify-center">
      <DropdownMenuPrimitive.ItemIndicator>
        <Check className="h-4 w-4" />
      </DropdownMenuPrimitive.ItemIndicator>
    </span>
    {children}
  </DropdownMenuPrimitive.CheckboxItem>
));
DropdownMenuCheckboxItem.displayName =
  DropdownMenuPrimitive.CheckboxItem.displayName;

const DropdownMenuRadioItem = React.forwardRef<
  React.ElementRef<typeof DropdownMenuPrimitive.RadioItem>,
  React.ComponentPropsWithoutRef<typeof DropdownMenuPrimitive.RadioItem>
>(({ className, children, ...props }, ref) => (
  <DropdownMenuPrimitive.RadioItem
    ref={ref}
    className={cn(
      "relative flex cursor-default select-none items-center rounded-sm py-1.5 pl-8 pr-2 text-sm outline-none transition-colors focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50",
      className
    )}
    {...props}
  >
    <span className="absolute left-2 flex h-3.5 w-3.5 items-center justify-center">
      <DropdownMenuPrimitive.ItemIndicator>
        <Circle className="h-2 w-2 fill-current" />
      </DropdownMenuPrimitive.ItemIndicator>
    </span>
    {children}
  </DropdownMenuPrimitive.RadioItem>
));
DropdownMenuRadioItem.displayName = DropdownMenuPrimitive.RadioItem.displayName;

const DropdownMenuLabel = React.forwardRef<
  React.ElementRef<typeof DropdownMenuPrimitive.Label>,
  React.ComponentPropsWithoutRef<typeof DropdownMenuPrimitive.Label> & {
    inset?: boolean;
  }
>(({ className, inset, ...props }, ref) => (
  <DropdownMenuPrimitive.Label
    ref={ref}
    className={cn(
      "px-2 py-1.5 text-sm font-semibold",
      inset && "pl-8",
      className
    )}
    {...props}
  />
));
DropdownMenuLabel.displayName = DropdownMenuPrimitive.Label.displayName;

const DropdownMenuSeparator = React.forwardRef<
  React.ElementRef<typeof DropdownMenuPrimitive.Separator>,
  React.ComponentPropsWithoutRef<typeof DropdownMenuPrimitive.Separator>
>(({ className, ...props }, ref) => (
  <DropdownMenuPrimitive.Separator
    ref={ref}
    className={cn("-mx-1 my-1 h-px bg-gray-200", className)}
    {...props}
  />
));
DropdownMenuSeparator.displayName = DropdownMenuPrimitive.Separator.displayName;

const DropdownMenuShortcut = ({
  className,
  ...props
}: React.HTMLAttributes<HTMLSpanElement>) => {
  return (
    <span
      className={cn("ml-auto text-xs tracking-widest opacity-60", className)}
      {...props}
    />
  );
};
DropdownMenuShortcut.displayName = "DropdownMenuShortcut";

export {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuCheckboxItem,
  DropdownMenuRadioItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuShortcut,
  DropdownMenuGroup,
  DropdownMenuPortal,
  DropdownMenuSub,
  DropdownMenuSubContent,
  DropdownMenuSubTrigger,
  DropdownMenuRadioGroup,
};
```

---

### <a id='src-components-ui-edit-story-skeletontsx'></a> `src\components\ui\edit-story-skeleton.tsx`

**Component:** edit-story-skeleton.tsx

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

### <a id='src-components-ui-feed-skeletontsx'></a> `src\components\ui\feed-skeleton.tsx`

**Component:** feed-skeleton.tsx

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

### <a id='src-components-ui-file-dropzonetsx'></a> `src\components\ui\file-dropzone.tsx`

**Component:** file-dropzone.tsx

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

### <a id='src-components-ui-formtsx'></a> `src\components\ui\form.tsx`

**Component:** form.tsx

```tsx
import * as React from "react";
import * as LabelPrimitive from "@radix-ui/react-label";
import { Slot } from "@radix-ui/react-slot";
import { Controller, ControllerProps, FieldPath, FieldValues, FormProvider, useFormContext } from "react-hook-form";

import { cn } from "@/lib/utils";
import { Label } from "@/components/ui/label";

const Form = FormProvider;

type FormFieldContextValue<
  TFieldValues extends FieldValues = FieldValues,
  TName extends FieldPath<TFieldValues> = FieldPath<TFieldValues>,
> = {
  name: TName;
};

const FormFieldContext = React.createContext<FormFieldContextValue>({} as FormFieldContextValue);

const FormField = <
  TFieldValues extends FieldValues = FieldValues,
  TName extends FieldPath<TFieldValues> = FieldPath<TFieldValues>,
>({
  ...props
}: ControllerProps<TFieldValues, TName>) => {
  return (
    <FormFieldContext.Provider value={{ name: props.name }}>
      <Controller {...props} />
    </FormFieldContext.Provider>
  );
};

const useFormField = () => {
  const fieldContext = React.useContext(FormFieldContext);
  const itemContext = React.useContext(FormItemContext);
  const { getFieldState, formState } = useFormContext();

  const fieldState = getFieldState(fieldContext.name, formState);

  if (!fieldContext) {
    throw new Error("useFormField should be used within <FormField>");
  }

  const { id } = itemContext;

  return {
    id,
    name: fieldContext.name,
    formItemId: `${id}-form-item`,
    formDescriptionId: `${id}-form-item-description`,
    formMessageId: `${id}-form-item-message`,
    ...fieldState,
  };
};

type FormItemContextValue = {
  id: string;
};

const FormItemContext = React.createContext<FormItemContextValue>({} as FormItemContextValue);

const FormItem = React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(
  ({ className, ...props }, ref) => {
    const id = React.useId();

    return (
      <FormItemContext.Provider value={{ id }}>
        <div ref={ref} className={cn("space-y-2", className)} {...props} />
      </FormItemContext.Provider>
    );
  },
);
FormItem.displayName = "FormItem";

const FormLabel = React.forwardRef<
  React.ElementRef<typeof LabelPrimitive.Root>,
  React.ComponentPropsWithoutRef<typeof LabelPrimitive.Root>
>(({ className, ...props }, ref) => {
  const { error, formItemId } = useFormField();

  return <Label ref={ref} className={cn(error && "text-destructive", className)} htmlFor={formItemId} {...props} />;
});
FormLabel.displayName = "FormLabel";

const FormControl = React.forwardRef<React.ElementRef<typeof Slot>, React.ComponentPropsWithoutRef<typeof Slot>>(
  ({ ...props }, ref) => {
    const { error, formItemId, formDescriptionId, formMessageId } = useFormField();

    return (
      <Slot
        ref={ref}
        id={formItemId}
        aria-describedby={!error ? `${formDescriptionId}` : `${formDescriptionId} ${formMessageId}`}
        aria-invalid={!!error}
        {...props}
      />
    );
  },
);
FormControl.displayName = "FormControl";

const FormDescription = React.forwardRef<HTMLParagraphElement, React.HTMLAttributes<HTMLParagraphElement>>(
  ({ className, ...props }, ref) => {
    const { formDescriptionId } = useFormField();

    return <p ref={ref} id={formDescriptionId} className={cn("text-sm text-muted-foreground", className)} {...props} />;
  },
);
FormDescription.displayName = "FormDescription";

const FormMessage = React.forwardRef<HTMLParagraphElement, React.HTMLAttributes<HTMLParagraphElement>>(
  ({ className, children, ...props }, ref) => {
    const { error, formMessageId } = useFormField();
    const body = error ? String(error?.message) : children;

    if (!body) {
      return null;
    }

    return (
      <p ref={ref} id={formMessageId} className={cn("text-sm font-medium text-destructive", className)} {...props}>
        {body}
      </p>
    );
  },
);
FormMessage.displayName = "FormMessage";

export { useFormField, Form, FormItem, FormLabel, FormControl, FormDescription, FormMessage, FormField };
```

---

### <a id='src-components-ui-hover-cardtsx'></a> `src\components\ui\hover-card.tsx`

**Component:** hover-card.tsx

```tsx
import * as React from "react";
import * as HoverCardPrimitive from "@radix-ui/react-hover-card";

import { cn } from "@/lib/utils";

const HoverCard = HoverCardPrimitive.Root;

const HoverCardTrigger = HoverCardPrimitive.Trigger;

const HoverCardContent = React.forwardRef<
  React.ElementRef<typeof HoverCardPrimitive.Content>,
  React.ComponentPropsWithoutRef<typeof HoverCardPrimitive.Content>
>(({ className, align = "center", sideOffset = 4, ...props }, ref) => (
  <HoverCardPrimitive.Content
    ref={ref}
    align={align}
    sideOffset={sideOffset}
    className={cn(
      "z-50 w-64 rounded-md border bg-popover p-4 text-popover-foreground shadow-md outline-none data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2",
      className,
    )}
    {...props}
  />
));
HoverCardContent.displayName = HoverCardPrimitive.Content.displayName;

export { HoverCard, HoverCardTrigger, HoverCardContent };
```

---

### <a id='src-components-ui-image-with-fallbacktsx'></a> `src\components\ui\image-with-fallback.tsx`

**Component:** image-with-fallback.tsx

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

### <a id='src-components-ui-input-otptsx'></a> `src\components\ui\input-otp.tsx`

**Component:** input-otp.tsx

```tsx
import * as React from "react";
import { OTPInput, OTPInputContext } from "input-otp";
import { Dot } from "lucide-react";

import { cn } from "@/lib/utils";

const InputOTP = React.forwardRef<React.ElementRef<typeof OTPInput>, React.ComponentPropsWithoutRef<typeof OTPInput>>(
  ({ className, containerClassName, ...props }, ref) => (
    <OTPInput
      ref={ref}
      containerClassName={cn("flex items-center gap-2 has-[:disabled]:opacity-50", containerClassName)}
      className={cn("disabled:cursor-not-allowed", className)}
      {...props}
    />
  ),
);
InputOTP.displayName = "InputOTP";

const InputOTPGroup = React.forwardRef<React.ElementRef<"div">, React.ComponentPropsWithoutRef<"div">>(
  ({ className, ...props }, ref) => <div ref={ref} className={cn("flex items-center", className)} {...props} />,
);
InputOTPGroup.displayName = "InputOTPGroup";

const InputOTPSlot = React.forwardRef<
  React.ElementRef<"div">,
  React.ComponentPropsWithoutRef<"div"> & { index: number }
>(({ index, className, ...props }, ref) => {
  const inputOTPContext = React.useContext(OTPInputContext);
  const { char, hasFakeCaret, isActive } = inputOTPContext.slots[index];

  return (
    <div
      ref={ref}
      className={cn(
        "relative flex h-10 w-10 items-center justify-center border-y border-r border-input text-sm transition-all first:rounded-l-md first:border-l last:rounded-r-md",
        isActive && "z-10 ring-2 ring-ring ring-offset-background",
        className,
      )}
      {...props}
    >
      {char}
      {hasFakeCaret && (
        <div className="pointer-events-none absolute inset-0 flex items-center justify-center">
          <div className="animate-caret-blink h-4 w-px bg-foreground duration-1000" />
        </div>
      )}
    </div>
  );
});
InputOTPSlot.displayName = "InputOTPSlot";

const InputOTPSeparator = React.forwardRef<React.ElementRef<"div">, React.ComponentPropsWithoutRef<"div">>(
  ({ ...props }, ref) => (
    <div ref={ref} role="separator" {...props}>
      <Dot />
    </div>
  ),
);
InputOTPSeparator.displayName = "InputOTPSeparator";

export { InputOTP, InputOTPGroup, InputOTPSlot, InputOTPSeparator };
```

---

### <a id='src-components-ui-inputtsx'></a> `src\components\ui\input.tsx`

**Component:** input.tsx

```tsx
import * as React from "react";

import { cn } from "@/lib/utils";

const Input = React.forwardRef<HTMLInputElement, React.ComponentProps<"input">>(
  ({ className, type, ...props }, ref) => {
    return (
      <input
        type={type}
        className={cn(
          "flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-base ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 md:text-sm",
          className,
        )}
        ref={ref}
        {...props}
      />
    );
  },
);
Input.displayName = "Input";

export { Input };
```

---

### <a id='src-components-ui-labeltsx'></a> `src\components\ui\label.tsx`

**Component:** label.tsx

```tsx
import * as React from "react";
import * as LabelPrimitive from "@radix-ui/react-label";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";

const labelVariants = cva("text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70");

const Label = React.forwardRef<
  React.ElementRef<typeof LabelPrimitive.Root>,
  React.ComponentPropsWithoutRef<typeof LabelPrimitive.Root> & VariantProps<typeof labelVariants>
>(({ className, ...props }, ref) => (
  <LabelPrimitive.Root ref={ref} className={cn(labelVariants(), className)} {...props} />
));
Label.displayName = LabelPrimitive.Root.displayName;

export { Label };
```

---

### <a id='src-components-ui-loading-spinnertsx'></a> `src\components\ui\loading-spinner.tsx`

**Component:** loading-spinner.tsx

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

### <a id='src-components-ui-logotsx'></a> `src\components\ui\logo.tsx`

**Component:** logo.tsx

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

### <a id='src-components-ui-menubartsx'></a> `src\components\ui\menubar.tsx`

**Component:** menubar.tsx

```tsx
import * as React from "react";
import * as MenubarPrimitive from "@radix-ui/react-menubar";
import { Check, ChevronRight, Circle } from "lucide-react";

import { cn } from "@/lib/utils";

const MenubarMenu = MenubarPrimitive.Menu;

const MenubarGroup = MenubarPrimitive.Group;

const MenubarPortal = MenubarPrimitive.Portal;

const MenubarSub = MenubarPrimitive.Sub;

const MenubarRadioGroup = MenubarPrimitive.RadioGroup;

const Menubar = React.forwardRef<
  React.ElementRef<typeof MenubarPrimitive.Root>,
  React.ComponentPropsWithoutRef<typeof MenubarPrimitive.Root>
>(({ className, ...props }, ref) => (
  <MenubarPrimitive.Root
    ref={ref}
    className={cn("flex h-10 items-center space-x-1 rounded-md border bg-background p-1", className)}
    {...props}
  />
));
Menubar.displayName = MenubarPrimitive.Root.displayName;

const MenubarTrigger = React.forwardRef<
  React.ElementRef<typeof MenubarPrimitive.Trigger>,
  React.ComponentPropsWithoutRef<typeof MenubarPrimitive.Trigger>
>(({ className, ...props }, ref) => (
  <MenubarPrimitive.Trigger
    ref={ref}
    className={cn(
      "flex cursor-default select-none items-center rounded-sm px-3 py-1.5 text-sm font-medium outline-none data-[state=open]:bg-accent data-[state=open]:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
      className,
    )}
    {...props}
  />
));
MenubarTrigger.displayName = MenubarPrimitive.Trigger.displayName;

const MenubarSubTrigger = React.forwardRef<
  React.ElementRef<typeof MenubarPrimitive.SubTrigger>,
  React.ComponentPropsWithoutRef<typeof MenubarPrimitive.SubTrigger> & {
    inset?: boolean;
  }
>(({ className, inset, children, ...props }, ref) => (
  <MenubarPrimitive.SubTrigger
    ref={ref}
    className={cn(
      "flex cursor-default select-none items-center rounded-sm px-2 py-1.5 text-sm outline-none data-[state=open]:bg-accent data-[state=open]:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
      inset && "pl-8",
      className,
    )}
    {...props}
  >
    {children}
    <ChevronRight className="ml-auto h-4 w-4" />
  </MenubarPrimitive.SubTrigger>
));
MenubarSubTrigger.displayName = MenubarPrimitive.SubTrigger.displayName;

const MenubarSubContent = React.forwardRef<
  React.ElementRef<typeof MenubarPrimitive.SubContent>,
  React.ComponentPropsWithoutRef<typeof MenubarPrimitive.SubContent>
>(({ className, ...props }, ref) => (
  <MenubarPrimitive.SubContent
    ref={ref}
    className={cn(
      "z-50 min-w-[8rem] overflow-hidden rounded-md border bg-popover p-1 text-popover-foreground data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2",
      className,
    )}
    {...props}
  />
));
MenubarSubContent.displayName = MenubarPrimitive.SubContent.displayName;

const MenubarContent = React.forwardRef<
  React.ElementRef<typeof MenubarPrimitive.Content>,
  React.ComponentPropsWithoutRef<typeof MenubarPrimitive.Content>
>(({ className, align = "start", alignOffset = -4, sideOffset = 8, ...props }, ref) => (
  <MenubarPrimitive.Portal>
    <MenubarPrimitive.Content
      ref={ref}
      align={align}
      alignOffset={alignOffset}
      sideOffset={sideOffset}
      className={cn(
        "z-50 min-w-[12rem] overflow-hidden rounded-md border bg-popover p-1 text-popover-foreground shadow-md data-[state=open]:animate-in data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2",
        className,
      )}
      {...props}
    />
  </MenubarPrimitive.Portal>
));
MenubarContent.displayName = MenubarPrimitive.Content.displayName;

const MenubarItem = React.forwardRef<
  React.ElementRef<typeof MenubarPrimitive.Item>,
  React.ComponentPropsWithoutRef<typeof MenubarPrimitive.Item> & {
    inset?: boolean;
  }
>(({ className, inset, ...props }, ref) => (
  <MenubarPrimitive.Item
    ref={ref}
    className={cn(
      "relative flex cursor-default select-none items-center rounded-sm px-2 py-1.5 text-sm outline-none data-[disabled]:pointer-events-none data-[disabled]:opacity-50 focus:bg-accent focus:text-accent-foreground",
      inset && "pl-8",
      className,
    )}
    {...props}
  />
));
MenubarItem.displayName = MenubarPrimitive.Item.displayName;

const MenubarCheckboxItem = React.forwardRef<
  React.ElementRef<typeof MenubarPrimitive.CheckboxItem>,
  React.ComponentPropsWithoutRef<typeof MenubarPrimitive.CheckboxItem>
>(({ className, children, checked, ...props }, ref) => (
  <MenubarPrimitive.CheckboxItem
    ref={ref}
    className={cn(
      "relative flex cursor-default select-none items-center rounded-sm py-1.5 pl-8 pr-2 text-sm outline-none data-[disabled]:pointer-events-none data-[disabled]:opacity-50 focus:bg-accent focus:text-accent-foreground",
      className,
    )}
    checked={checked}
    {...props}
  >
    <span className="absolute left-2 flex h-3.5 w-3.5 items-center justify-center">
      <MenubarPrimitive.ItemIndicator>
        <Check className="h-4 w-4" />
      </MenubarPrimitive.ItemIndicator>
    </span>
    {children}
  </MenubarPrimitive.CheckboxItem>
));
MenubarCheckboxItem.displayName = MenubarPrimitive.CheckboxItem.displayName;

const MenubarRadioItem = React.forwardRef<
  React.ElementRef<typeof MenubarPrimitive.RadioItem>,
  React.ComponentPropsWithoutRef<typeof MenubarPrimitive.RadioItem>
>(({ className, children, ...props }, ref) => (
  <MenubarPrimitive.RadioItem
    ref={ref}
    className={cn(
      "relative flex cursor-default select-none items-center rounded-sm py-1.5 pl-8 pr-2 text-sm outline-none data-[disabled]:pointer-events-none data-[disabled]:opacity-50 focus:bg-accent focus:text-accent-foreground",
      className,
    )}
    {...props}
  >
    <span className="absolute left-2 flex h-3.5 w-3.5 items-center justify-center">
      <MenubarPrimitive.ItemIndicator>
        <Circle className="h-2 w-2 fill-current" />
      </MenubarPrimitive.ItemIndicator>
    </span>
    {children}
  </MenubarPrimitive.RadioItem>
));
MenubarRadioItem.displayName = MenubarPrimitive.RadioItem.displayName;

const MenubarLabel = React.forwardRef<
  React.ElementRef<typeof MenubarPrimitive.Label>,
  React.ComponentPropsWithoutRef<typeof MenubarPrimitive.Label> & {
    inset?: boolean;
  }
>(({ className, inset, ...props }, ref) => (
  <MenubarPrimitive.Label
    ref={ref}
    className={cn("px-2 py-1.5 text-sm font-semibold", inset && "pl-8", className)}
    {...props}
  />
));
MenubarLabel.displayName = MenubarPrimitive.Label.displayName;

const MenubarSeparator = React.forwardRef<
  React.ElementRef<typeof MenubarPrimitive.Separator>,
  React.ComponentPropsWithoutRef<typeof MenubarPrimitive.Separator>
>(({ className, ...props }, ref) => (
  <MenubarPrimitive.Separator ref={ref} className={cn("-mx-1 my-1 h-px bg-muted", className)} {...props} />
));
MenubarSeparator.displayName = MenubarPrimitive.Separator.displayName;

const MenubarShortcut = ({ className, ...props }: React.HTMLAttributes<HTMLSpanElement>) => {
  return <span className={cn("ml-auto text-xs tracking-widest text-muted-foreground", className)} {...props} />;
};
MenubarShortcut.displayname = "MenubarShortcut";

export {
  Menubar,
  MenubarMenu,
  MenubarTrigger,
  MenubarContent,
  MenubarItem,
  MenubarSeparator,
  MenubarLabel,
  MenubarCheckboxItem,
  MenubarRadioGroup,
  MenubarRadioItem,
  MenubarPortal,
  MenubarSubContent,
  MenubarSubTrigger,
  MenubarGroup,
  MenubarSub,
  MenubarShortcut,
};
```

---

### <a id='src-components-ui-navigation-menutsx'></a> `src\components\ui\navigation-menu.tsx`

**Component:** navigation-menu.tsx

```tsx
import * as React from "react";
import * as NavigationMenuPrimitive from "@radix-ui/react-navigation-menu";
import { cva } from "class-variance-authority";
import { ChevronDown } from "lucide-react";

import { cn } from "@/lib/utils";

const NavigationMenu = React.forwardRef<
  React.ElementRef<typeof NavigationMenuPrimitive.Root>,
  React.ComponentPropsWithoutRef<typeof NavigationMenuPrimitive.Root>
>(({ className, children, ...props }, ref) => (
  <NavigationMenuPrimitive.Root
    ref={ref}
    className={cn("relative z-10 flex max-w-max flex-1 items-center justify-center", className)}
    {...props}
  >
    {children}
    <NavigationMenuViewport />
  </NavigationMenuPrimitive.Root>
));
NavigationMenu.displayName = NavigationMenuPrimitive.Root.displayName;

const NavigationMenuList = React.forwardRef<
  React.ElementRef<typeof NavigationMenuPrimitive.List>,
  React.ComponentPropsWithoutRef<typeof NavigationMenuPrimitive.List>
>(({ className, ...props }, ref) => (
  <NavigationMenuPrimitive.List
    ref={ref}
    className={cn("group flex flex-1 list-none items-center justify-center space-x-1", className)}
    {...props}
  />
));
NavigationMenuList.displayName = NavigationMenuPrimitive.List.displayName;

const NavigationMenuItem = NavigationMenuPrimitive.Item;

const navigationMenuTriggerStyle = cva(
  "group inline-flex h-10 w-max items-center justify-center rounded-md bg-background px-4 py-2 text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground focus:outline-none disabled:pointer-events-none disabled:opacity-50 data-[active]:bg-accent/50 data-[state=open]:bg-accent/50",
);

const NavigationMenuTrigger = React.forwardRef<
  React.ElementRef<typeof NavigationMenuPrimitive.Trigger>,
  React.ComponentPropsWithoutRef<typeof NavigationMenuPrimitive.Trigger>
>(({ className, children, ...props }, ref) => (
  <NavigationMenuPrimitive.Trigger
    ref={ref}
    className={cn(navigationMenuTriggerStyle(), "group", className)}
    {...props}
  >
    {children}{" "}
    <ChevronDown
      className="relative top-[1px] ml-1 h-3 w-3 transition duration-200 group-data-[state=open]:rotate-180"
      aria-hidden="true"
    />
  </NavigationMenuPrimitive.Trigger>
));
NavigationMenuTrigger.displayName = NavigationMenuPrimitive.Trigger.displayName;

const NavigationMenuContent = React.forwardRef<
  React.ElementRef<typeof NavigationMenuPrimitive.Content>,
  React.ComponentPropsWithoutRef<typeof NavigationMenuPrimitive.Content>
>(({ className, ...props }, ref) => (
  <NavigationMenuPrimitive.Content
    ref={ref}
    className={cn(
      "left-0 top-0 w-full data-[motion^=from-]:animate-in data-[motion^=to-]:animate-out data-[motion^=from-]:fade-in data-[motion^=to-]:fade-out data-[motion=from-end]:slide-in-from-right-52 data-[motion=from-start]:slide-in-from-left-52 data-[motion=to-end]:slide-out-to-right-52 data-[motion=to-start]:slide-out-to-left-52 md:absolute md:w-auto",
      className,
    )}
    {...props}
  />
));
NavigationMenuContent.displayName = NavigationMenuPrimitive.Content.displayName;

const NavigationMenuLink = NavigationMenuPrimitive.Link;

const NavigationMenuViewport = React.forwardRef<
  React.ElementRef<typeof NavigationMenuPrimitive.Viewport>,
  React.ComponentPropsWithoutRef<typeof NavigationMenuPrimitive.Viewport>
>(({ className, ...props }, ref) => (
  <div className={cn("absolute left-0 top-full flex justify-center")}>
    <NavigationMenuPrimitive.Viewport
      className={cn(
        "origin-top-center relative mt-1.5 h-[var(--radix-navigation-menu-viewport-height)] w-full overflow-hidden rounded-md border bg-popover text-popover-foreground shadow-lg data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-90 md:w-[var(--radix-navigation-menu-viewport-width)]",
        className,
      )}
      ref={ref}
      {...props}
    />
  </div>
));
NavigationMenuViewport.displayName = NavigationMenuPrimitive.Viewport.displayName;

const NavigationMenuIndicator = React.forwardRef<
  React.ElementRef<typeof NavigationMenuPrimitive.Indicator>,
  React.ComponentPropsWithoutRef<typeof NavigationMenuPrimitive.Indicator>
>(({ className, ...props }, ref) => (
  <NavigationMenuPrimitive.Indicator
    ref={ref}
    className={cn(
      "top-full z-[1] flex h-1.5 items-end justify-center overflow-hidden data-[state=visible]:animate-in data-[state=hidden]:animate-out data-[state=hidden]:fade-out data-[state=visible]:fade-in",
      className,
    )}
    {...props}
  >
    <div className="relative top-[60%] h-2 w-2 rotate-45 rounded-tl-sm bg-border shadow-md" />
  </NavigationMenuPrimitive.Indicator>
));
NavigationMenuIndicator.displayName = NavigationMenuPrimitive.Indicator.displayName;

export {
  navigationMenuTriggerStyle,
  NavigationMenu,
  NavigationMenuList,
  NavigationMenuItem,
  NavigationMenuContent,
  NavigationMenuTrigger,
  NavigationMenuLink,
  NavigationMenuIndicator,
  NavigationMenuViewport,
};
```

---

### <a id='src-components-ui-paginationtsx'></a> `src\components\ui\pagination.tsx`

**Component:** pagination.tsx

```tsx
import * as React from "react";
import { ChevronLeft, ChevronRight, MoreHorizontal } from "lucide-react";

import { cn } from "@/lib/utils";
import { ButtonProps, buttonVariants } from "@/components/ui/button";

const Pagination = ({ className, ...props }: React.ComponentProps<"nav">) => (
  <nav
    role="navigation"
    aria-label="pagination"
    className={cn("mx-auto flex w-full justify-center", className)}
    {...props}
  />
);
Pagination.displayName = "Pagination";

const PaginationContent = React.forwardRef<HTMLUListElement, React.ComponentProps<"ul">>(
  ({ className, ...props }, ref) => (
    <ul ref={ref} className={cn("flex flex-row items-center gap-1", className)} {...props} />
  ),
);
PaginationContent.displayName = "PaginationContent";

const PaginationItem = React.forwardRef<HTMLLIElement, React.ComponentProps<"li">>(({ className, ...props }, ref) => (
  <li ref={ref} className={cn("", className)} {...props} />
));
PaginationItem.displayName = "PaginationItem";

type PaginationLinkProps = {
  isActive?: boolean;
} & Pick<ButtonProps, "size"> &
  React.ComponentProps<"a">;

const PaginationLink = ({ className, isActive, size = "icon", ...props }: PaginationLinkProps) => (
  <a
    aria-current={isActive ? "page" : undefined}
    className={cn(
      buttonVariants({
        variant: isActive ? "outline" : "ghost",
        size,
      }),
      className,
    )}
    {...props}
  />
);
PaginationLink.displayName = "PaginationLink";

const PaginationPrevious = ({ className, ...props }: React.ComponentProps<typeof PaginationLink>) => (
  <PaginationLink aria-label="Go to previous page" size="default" className={cn("gap-1 pl-2.5", className)} {...props}>
    <ChevronLeft className="h-4 w-4" />
    <span>Previous</span>
  </PaginationLink>
);
PaginationPrevious.displayName = "PaginationPrevious";

const PaginationNext = ({ className, ...props }: React.ComponentProps<typeof PaginationLink>) => (
  <PaginationLink aria-label="Go to next page" size="default" className={cn("gap-1 pr-2.5", className)} {...props}>
    <span>Next</span>
    <ChevronRight className="h-4 w-4" />
  </PaginationLink>
);
PaginationNext.displayName = "PaginationNext";

const PaginationEllipsis = ({ className, ...props }: React.ComponentProps<"span">) => (
  <span aria-hidden className={cn("flex h-9 w-9 items-center justify-center", className)} {...props}>
    <MoreHorizontal className="h-4 w-4" />
    <span className="sr-only">More pages</span>
  </span>
);
PaginationEllipsis.displayName = "PaginationEllipsis";

export {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
};
```

---

### <a id='src-components-ui-popovertsx'></a> `src\components\ui\popover.tsx`

**Component:** popover.tsx

```tsx
import * as React from "react";
import * as PopoverPrimitive from "@radix-ui/react-popover";

import { cn } from "@/lib/utils";

const Popover = PopoverPrimitive.Root;

const PopoverTrigger = PopoverPrimitive.Trigger;

const PopoverContent = React.forwardRef<
  React.ElementRef<typeof PopoverPrimitive.Content>,
  React.ComponentPropsWithoutRef<typeof PopoverPrimitive.Content>
>(({ className, align = "center", sideOffset = 4, ...props }, ref) => (
  <PopoverPrimitive.Portal>
    <PopoverPrimitive.Content
      ref={ref}
      align={align}
      sideOffset={sideOffset}
      className={cn(
        "z-50 w-72 rounded-md border bg-popover p-4 text-popover-foreground shadow-md outline-none data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2",
        className,
      )}
      {...props}
    />
  </PopoverPrimitive.Portal>
));
PopoverContent.displayName = PopoverPrimitive.Content.displayName;

export { Popover, PopoverTrigger, PopoverContent };
```

---

### <a id='src-components-ui-profile-skeletontsx'></a> `src\components\ui\profile-skeleton.tsx`

**Component:** profile-skeleton.tsx

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

### <a id='src-components-ui-progresstsx'></a> `src\components\ui\progress.tsx`

**Component:** progress.tsx

```tsx
import * as React from "react";
import * as ProgressPrimitive from "@radix-ui/react-progress";

import { cn } from "@/lib/utils";

const Progress = React.forwardRef<
  React.ElementRef<typeof ProgressPrimitive.Root>,
  React.ComponentPropsWithoutRef<typeof ProgressPrimitive.Root>
>(({ className, value, ...props }, ref) => (
  <ProgressPrimitive.Root
    ref={ref}
    className={cn("relative h-4 w-full overflow-hidden rounded-full bg-secondary", className)}
    {...props}
  >
    <ProgressPrimitive.Indicator
      className="h-full w-full flex-1 bg-primary transition-all"
      style={{ transform: `translateX(-${100 - (value || 0)}%)` }}
    />
  </ProgressPrimitive.Root>
));
Progress.displayName = ProgressPrimitive.Root.displayName;

export { Progress };
```

---

### <a id='src-components-ui-radio-grouptsx'></a> `src\components\ui\radio-group.tsx`

**Component:** radio-group.tsx

```tsx
import * as React from "react";
import * as RadioGroupPrimitive from "@radix-ui/react-radio-group";
import { Circle } from "lucide-react";

import { cn } from "@/lib/utils";

const RadioGroup = React.forwardRef<
  React.ElementRef<typeof RadioGroupPrimitive.Root>,
  React.ComponentPropsWithoutRef<typeof RadioGroupPrimitive.Root>
>(({ className, ...props }, ref) => {
  return <RadioGroupPrimitive.Root className={cn("grid gap-2", className)} {...props} ref={ref} />;
});
RadioGroup.displayName = RadioGroupPrimitive.Root.displayName;

const RadioGroupItem = React.forwardRef<
  React.ElementRef<typeof RadioGroupPrimitive.Item>,
  React.ComponentPropsWithoutRef<typeof RadioGroupPrimitive.Item>
>(({ className, ...props }, ref) => {
  return (
    <RadioGroupPrimitive.Item
      ref={ref}
      className={cn(
        "aspect-square h-4 w-4 rounded-full border border-primary text-primary ring-offset-background focus:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50",
        className,
      )}
      {...props}
    >
      <RadioGroupPrimitive.Indicator className="flex items-center justify-center">
        <Circle className="h-2.5 w-2.5 fill-current text-current" />
      </RadioGroupPrimitive.Indicator>
    </RadioGroupPrimitive.Item>
  );
});
RadioGroupItem.displayName = RadioGroupPrimitive.Item.displayName;

export { RadioGroup, RadioGroupItem };
```

---

### <a id='src-components-ui-reader-skeletontsx'></a> `src\components\ui\reader-skeleton.tsx`

**Component:** reader-skeleton.tsx

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

### <a id='src-components-ui-resizabletsx'></a> `src\components\ui\resizable.tsx`

**Component:** resizable.tsx

```tsx
import { GripVertical } from "lucide-react";
import * as ResizablePrimitive from "react-resizable-panels";

import { cn } from "@/lib/utils";

const ResizablePanelGroup = ({ className, ...props }: React.ComponentProps<typeof ResizablePrimitive.PanelGroup>) => (
  <ResizablePrimitive.PanelGroup
    className={cn("flex h-full w-full data-[panel-group-direction=vertical]:flex-col", className)}
    {...props}
  />
);

const ResizablePanel = ResizablePrimitive.Panel;

const ResizableHandle = ({
  withHandle,
  className,
  ...props
}: React.ComponentProps<typeof ResizablePrimitive.PanelResizeHandle> & {
  withHandle?: boolean;
}) => (
  <ResizablePrimitive.PanelResizeHandle
    className={cn(
      "relative flex w-px items-center justify-center bg-border after:absolute after:inset-y-0 after:left-1/2 after:w-1 after:-translate-x-1/2 data-[panel-group-direction=vertical]:h-px data-[panel-group-direction=vertical]:w-full data-[panel-group-direction=vertical]:after:left-0 data-[panel-group-direction=vertical]:after:h-1 data-[panel-group-direction=vertical]:after:w-full data-[panel-group-direction=vertical]:after:-translate-y-1/2 data-[panel-group-direction=vertical]:after:translate-x-0 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring focus-visible:ring-offset-1 [&[data-panel-group-direction=vertical]>div]:rotate-90",
      className,
    )}
    {...props}
  >
    {withHandle && (
      <div className="z-10 flex h-4 w-3 items-center justify-center rounded-sm border bg-border">
        <GripVertical className="h-2.5 w-2.5" />
      </div>
    )}
  </ResizablePrimitive.PanelResizeHandle>
);

export { ResizablePanelGroup, ResizablePanel, ResizableHandle };
```

---

### <a id='src-components-ui-scroll-areatsx'></a> `src\components\ui\scroll-area.tsx`

**Component:** scroll-area.tsx

```tsx
import * as React from "react";
import * as ScrollAreaPrimitive from "@radix-ui/react-scroll-area";

import { cn } from "@/lib/utils";

const ScrollArea = React.forwardRef<
  React.ElementRef<typeof ScrollAreaPrimitive.Root>,
  React.ComponentPropsWithoutRef<typeof ScrollAreaPrimitive.Root>
>(({ className, children, ...props }, ref) => (
  <ScrollAreaPrimitive.Root ref={ref} className={cn("relative overflow-hidden", className)} {...props}>
    <ScrollAreaPrimitive.Viewport className="h-full w-full rounded-[inherit]">{children}</ScrollAreaPrimitive.Viewport>
    <ScrollBar />
    <ScrollAreaPrimitive.Corner />
  </ScrollAreaPrimitive.Root>
));
ScrollArea.displayName = ScrollAreaPrimitive.Root.displayName;

const ScrollBar = React.forwardRef<
  React.ElementRef<typeof ScrollAreaPrimitive.ScrollAreaScrollbar>,
  React.ComponentPropsWithoutRef<typeof ScrollAreaPrimitive.ScrollAreaScrollbar>
>(({ className, orientation = "vertical", ...props }, ref) => (
  <ScrollAreaPrimitive.ScrollAreaScrollbar
    ref={ref}
    orientation={orientation}
    className={cn(
      "flex touch-none select-none transition-colors",
      orientation === "vertical" && "h-full w-2.5 border-l border-l-transparent p-[1px]",
      orientation === "horizontal" && "h-2.5 flex-col border-t border-t-transparent p-[1px]",
      className,
    )}
    {...props}
  >
    <ScrollAreaPrimitive.ScrollAreaThumb className="relative flex-1 rounded-full bg-border" />
  </ScrollAreaPrimitive.ScrollAreaScrollbar>
));
ScrollBar.displayName = ScrollAreaPrimitive.ScrollAreaScrollbar.displayName;

export { ScrollArea, ScrollBar };
```

---

### <a id='src-components-ui-selecttsx'></a> `src\components\ui\select.tsx`

**Component:** select.tsx

```tsx
import * as React from "react";
import * as SelectPrimitive from "@radix-ui/react-select";
import { Check, ChevronDown, ChevronUp } from "lucide-react";

import { cn } from "@/lib/utils";

const Select = SelectPrimitive.Root;

const SelectGroup = SelectPrimitive.Group;

const SelectValue = SelectPrimitive.Value;

const SelectTrigger = React.forwardRef<
  React.ElementRef<typeof SelectPrimitive.Trigger>,
  React.ComponentPropsWithoutRef<typeof SelectPrimitive.Trigger>
>(({ className, children, ...props }, ref) => (
  <SelectPrimitive.Trigger
    ref={ref}
    className={cn(
      "flex h-10 w-full items-center justify-between rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 [&>span]:line-clamp-1",
      className,
    )}
    {...props}
  >
    {children}
    <SelectPrimitive.Icon asChild>
      <ChevronDown className="h-4 w-4 opacity-50" />
    </SelectPrimitive.Icon>
  </SelectPrimitive.Trigger>
));
SelectTrigger.displayName = SelectPrimitive.Trigger.displayName;

const SelectScrollUpButton = React.forwardRef<
  React.ElementRef<typeof SelectPrimitive.ScrollUpButton>,
  React.ComponentPropsWithoutRef<typeof SelectPrimitive.ScrollUpButton>
>(({ className, ...props }, ref) => (
  <SelectPrimitive.ScrollUpButton
    ref={ref}
    className={cn("flex cursor-default items-center justify-center py-1", className)}
    {...props}
  >
    <ChevronUp className="h-4 w-4" />
  </SelectPrimitive.ScrollUpButton>
));
SelectScrollUpButton.displayName = SelectPrimitive.ScrollUpButton.displayName;

const SelectScrollDownButton = React.forwardRef<
  React.ElementRef<typeof SelectPrimitive.ScrollDownButton>,
  React.ComponentPropsWithoutRef<typeof SelectPrimitive.ScrollDownButton>
>(({ className, ...props }, ref) => (
  <SelectPrimitive.ScrollDownButton
    ref={ref}
    className={cn("flex cursor-default items-center justify-center py-1", className)}
    {...props}
  >
    <ChevronDown className="h-4 w-4" />
  </SelectPrimitive.ScrollDownButton>
));
SelectScrollDownButton.displayName = SelectPrimitive.ScrollDownButton.displayName;

const SelectContent = React.forwardRef<
  React.ElementRef<typeof SelectPrimitive.Content>,
  React.ComponentPropsWithoutRef<typeof SelectPrimitive.Content>
>(({ className, children, position = "popper", ...props }, ref) => (
  <SelectPrimitive.Portal>
    <SelectPrimitive.Content
      ref={ref}
      className={cn(
        "relative z-50 max-h-96 min-w-[8rem] overflow-hidden rounded-md border bg-white dark:bg-gray-800 text-popover-foreground shadow-md data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2",
        position === "popper" &&
          "data-[side=bottom]:translate-y-1 data-[side=left]:-translate-x-1 data-[side=right]:translate-x-1 data-[side=top]:-translate-y-1",
        className,
      )}
      position={position}
      {...props}
    >
      <SelectScrollUpButton />
      <SelectPrimitive.Viewport
        className={cn(
          "p-1",
          position === "popper" &&
            "h-[var(--radix-select-trigger-height)] w-full min-w-[var(--radix-select-trigger-width)]",
        )}
      >
        {children}
      </SelectPrimitive.Viewport>
      <SelectScrollDownButton />
    </SelectPrimitive.Content>
  </SelectPrimitive.Portal>
));
SelectContent.displayName = SelectPrimitive.Content.displayName;

const SelectLabel = React.forwardRef<
  React.ElementRef<typeof SelectPrimitive.Label>,
  React.ComponentPropsWithoutRef<typeof SelectPrimitive.Label>
>(({ className, ...props }, ref) => (
  <SelectPrimitive.Label ref={ref} className={cn("py-1.5 pl-8 pr-2 text-sm font-semibold", className)} {...props} />
));
SelectLabel.displayName = SelectPrimitive.Label.displayName;

const SelectItem = React.forwardRef<
  React.ElementRef<typeof SelectPrimitive.Item>,
  React.ComponentPropsWithoutRef<typeof SelectPrimitive.Item>
>(({ className, children, ...props }, ref) => (
  <SelectPrimitive.Item
    ref={ref}
    className={cn(
      "relative flex w-full cursor-default select-none items-center rounded-sm py-1.5 pl-8 pr-2 text-sm outline-none data-[disabled]:pointer-events-none data-[disabled]:opacity-50 focus:bg-gray-100 dark:focus:bg-gray-700 focus:text-accent-foreground hover:bg-gray-50 dark:hover:bg-gray-700",
      className,
    )}
    {...props}
  >
    <span className="absolute left-2 flex h-3.5 w-3.5 items-center justify-center">
      <SelectPrimitive.ItemIndicator>
        <Check className="h-4 w-4" />
      </SelectPrimitive.ItemIndicator>
    </span>

    <SelectPrimitive.ItemText>{children}</SelectPrimitive.ItemText>
  </SelectPrimitive.Item>
));
SelectItem.displayName = SelectPrimitive.Item.displayName;

const SelectSeparator = React.forwardRef<
  React.ElementRef<typeof SelectPrimitive.Separator>,
  React.ComponentPropsWithoutRef<typeof SelectPrimitive.Separator>
>(({ className, ...props }, ref) => (
  <SelectPrimitive.Separator ref={ref} className={cn("-mx-1 my-1 h-px bg-muted", className)} {...props} />
));
SelectSeparator.displayName = SelectPrimitive.Separator.displayName;

export {
  Select,
  SelectGroup,
  SelectValue,
  SelectTrigger,
  SelectContent,
  SelectLabel,
  SelectItem,
  SelectSeparator,
  SelectScrollUpButton,
  SelectScrollDownButton,
};
```

---

### <a id='src-components-ui-separatortsx'></a> `src\components\ui\separator.tsx`

**Component:** separator.tsx

```tsx
import * as React from "react";
import * as SeparatorPrimitive from "@radix-ui/react-separator";
import { cn } from "@/lib/utils";

const Separator = React.forwardRef<
  React.ElementRef<typeof SeparatorPrimitive.Root>,
  React.ComponentPropsWithoutRef<typeof SeparatorPrimitive.Root>
>(
  (
    { className, orientation = "horizontal", decorative = true, ...props },
    ref
  ) => (
    <SeparatorPrimitive.Root
      ref={ref}
      decorative={decorative}
      orientation={orientation}
      className={cn(
        "shrink-0 bg-border",
        orientation === "horizontal" ? "h-[1px] w-full" : "h-full w-[1px]",
        className
      )}
      {...props}
    />
  )
);
Separator.displayName = SeparatorPrimitive.Root.displayName;

export { Separator };
```

---

### <a id='src-components-ui-sheettsx'></a> `src\components\ui\sheet.tsx`

**Component:** sheet.tsx

```tsx
import * as SheetPrimitive from "@radix-ui/react-dialog";
import { cva, type VariantProps } from "class-variance-authority";
import { X } from "lucide-react";
import * as React from "react";

import { cn } from "@/lib/utils";

const Sheet = SheetPrimitive.Root;

const SheetTrigger = SheetPrimitive.Trigger;

const SheetClose = SheetPrimitive.Close;

const SheetPortal = SheetPrimitive.Portal;

const SheetOverlay = React.forwardRef<
  React.ElementRef<typeof SheetPrimitive.Overlay>,
  React.ComponentPropsWithoutRef<typeof SheetPrimitive.Overlay>
>(({ className, ...props }, ref) => (
  <SheetPrimitive.Overlay
    className={cn(
      "fixed inset-0 z-50 bg-black/80 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0",
      className,
    )}
    {...props}
    ref={ref}
  />
));
SheetOverlay.displayName = SheetPrimitive.Overlay.displayName;

const sheetVariants = cva(
  "fixed z-50 gap-4 bg-background p-6 shadow-lg transition ease-in-out data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:duration-300 data-[state=open]:duration-500",
  {
    variants: {
      side: {
        top: "inset-x-0 top-0 border-b data-[state=closed]:slide-out-to-top data-[state=open]:slide-in-from-top",
        bottom:
          "inset-x-0 bottom-0 border-t data-[state=closed]:slide-out-to-bottom data-[state=open]:slide-in-from-bottom",
        left: "inset-y-0 left-0 h-full w-3/4 border-r data-[state=closed]:slide-out-to-left data-[state=open]:slide-in-from-left sm:max-w-sm",
        right:
          "inset-y-0 right-0 h-full w-3/4  border-l data-[state=closed]:slide-out-to-right data-[state=open]:slide-in-from-right sm:max-w-sm",
      },
    },
    defaultVariants: {
      side: "right",
    },
  },
);

interface SheetContentProps
  extends React.ComponentPropsWithoutRef<typeof SheetPrimitive.Content>,
    VariantProps<typeof sheetVariants> {}

const SheetContent = React.forwardRef<React.ElementRef<typeof SheetPrimitive.Content>, SheetContentProps>(
  ({ side = "right", className, children, ...props }, ref) => (
    <SheetPortal>
      <SheetOverlay />
      <SheetPrimitive.Content ref={ref} className={cn(sheetVariants({ side }), className)} {...props}>
        {children}
        <SheetPrimitive.Close className="absolute right-4 top-4 rounded-sm opacity-70 ring-offset-background transition-opacity data-[state=open]:bg-secondary hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:pointer-events-none">
          <X className="h-4 w-4" />
          <span className="sr-only">Close</span>
        </SheetPrimitive.Close>
      </SheetPrimitive.Content>
    </SheetPortal>
  ),
);
SheetContent.displayName = SheetPrimitive.Content.displayName;

const SheetHeader = ({ className, ...props }: React.HTMLAttributes<HTMLDivElement>) => (
  <div className={cn("flex flex-col space-y-2 text-center sm:text-left", className)} {...props} />
);
SheetHeader.displayName = "SheetHeader";

const SheetFooter = ({ className, ...props }: React.HTMLAttributes<HTMLDivElement>) => (
  <div className={cn("flex flex-col-reverse sm:flex-row sm:justify-end sm:space-x-2", className)} {...props} />
);
SheetFooter.displayName = "SheetFooter";

const SheetTitle = React.forwardRef<
  React.ElementRef<typeof SheetPrimitive.Title>,
  React.ComponentPropsWithoutRef<typeof SheetPrimitive.Title>
>(({ className, ...props }, ref) => (
  <SheetPrimitive.Title ref={ref} className={cn("text-lg font-semibold text-foreground", className)} {...props} />
));
SheetTitle.displayName = SheetPrimitive.Title.displayName;

const SheetDescription = React.forwardRef<
  React.ElementRef<typeof SheetPrimitive.Description>,
  React.ComponentPropsWithoutRef<typeof SheetPrimitive.Description>
>(({ className, ...props }, ref) => (
  <SheetPrimitive.Description ref={ref} className={cn("text-sm text-muted-foreground", className)} {...props} />
));
SheetDescription.displayName = SheetPrimitive.Description.displayName;

export {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetOverlay,
  SheetPortal,
  SheetTitle,
  SheetTrigger,
};
```

---

### <a id='src-components-ui-sidebartsx'></a> `src\components\ui\sidebar.tsx`

**Component:** sidebar.tsx

```tsx
import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { VariantProps, cva } from "class-variance-authority";
import { PanelLeft } from "lucide-react";

import { useIsMobile } from "@/hooks/use-mobile";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Separator } from "@/components/ui/separator";
import { Sheet, SheetContent } from "@/components/ui/sheet";
import { Skeleton } from "@/components/ui/skeleton";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";

const SIDEBAR_COOKIE_NAME = "sidebar:state";
const SIDEBAR_COOKIE_MAX_AGE = 60 * 60 * 24 * 7;
const SIDEBAR_WIDTH = "16rem";
const SIDEBAR_WIDTH_MOBILE = "18rem";
const SIDEBAR_WIDTH_ICON = "3rem";
const SIDEBAR_KEYBOARD_SHORTCUT = "b";

type SidebarContext = {
  state: "expanded" | "collapsed";
  open: boolean;
  setOpen: (open: boolean) => void;
  openMobile: boolean;
  setOpenMobile: (open: boolean) => void;
  isMobile: boolean;
  toggleSidebar: () => void;
};

const SidebarContext = React.createContext<SidebarContext | null>(null);

function useSidebar() {
  const context = React.useContext(SidebarContext);
  if (!context) {
    throw new Error("useSidebar must be used within a SidebarProvider.");
  }

  return context;
}

const SidebarProvider = React.forwardRef<
  HTMLDivElement,
  React.ComponentProps<"div"> & {
    defaultOpen?: boolean;
    open?: boolean;
    onOpenChange?: (open: boolean) => void;
  }
>(({ defaultOpen = true, open: openProp, onOpenChange: setOpenProp, className, style, children, ...props }, ref) => {
  const isMobile = useIsMobile();
  const [openMobile, setOpenMobile] = React.useState(false);

  // This is the internal state of the sidebar.
  // We use openProp and setOpenProp for control from outside the component.
  const [_open, _setOpen] = React.useState(defaultOpen);
  const open = openProp ?? _open;
  const setOpen = React.useCallback(
    (value: boolean | ((value: boolean) => boolean)) => {
      const openState = typeof value === "function" ? value(open) : value;
      if (setOpenProp) {
        setOpenProp(openState);
      } else {
        _setOpen(openState);
      }

      // This sets the cookie to keep the sidebar state.
      document.cookie = `${SIDEBAR_COOKIE_NAME}=${openState}; path=/; max-age=${SIDEBAR_COOKIE_MAX_AGE}`;
    },
    [setOpenProp, open],
  );

  // Helper to toggle the sidebar.
  const toggleSidebar = React.useCallback(() => {
    return isMobile ? setOpenMobile((open) => !open) : setOpen((open) => !open);
  }, [isMobile, setOpen, setOpenMobile]);

  // Adds a keyboard shortcut to toggle the sidebar.
  React.useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === SIDEBAR_KEYBOARD_SHORTCUT && (event.metaKey || event.ctrlKey)) {
        event.preventDefault();
        toggleSidebar();
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [toggleSidebar]);

  // We add a state so that we can do data-state="expanded" or "collapsed".
  // This makes it easier to style the sidebar with Tailwind classes.
  const state = open ? "expanded" : "collapsed";

  const contextValue = React.useMemo<SidebarContext>(
    () => ({
      state,
      open,
      setOpen,
      isMobile,
      openMobile,
      setOpenMobile,
      toggleSidebar,
    }),
    [state, open, setOpen, isMobile, openMobile, setOpenMobile, toggleSidebar],
  );

  return (
    <SidebarContext.Provider value={contextValue}>
      <TooltipProvider delayDuration={0}>
        <div
          style={
            {
              "--sidebar-width": SIDEBAR_WIDTH,
              "--sidebar-width-icon": SIDEBAR_WIDTH_ICON,
              ...style,
            } as React.CSSProperties
          }
          className={cn("group/sidebar-wrapper flex min-h-svh w-full has-[[data-variant=inset]]:bg-sidebar", className)}
          ref={ref}
          {...props}
        >
          {children}
        </div>
      </TooltipProvider>
    </SidebarContext.Provider>
  );
});
SidebarProvider.displayName = "SidebarProvider";

const Sidebar = React.forwardRef<
  HTMLDivElement,
  React.ComponentProps<"div"> & {
    side?: "left" | "right";
    variant?: "sidebar" | "floating" | "inset";
    collapsible?: "offcanvas" | "icon" | "none";
  }
>(({ side = "left", variant = "sidebar", collapsible = "offcanvas", className, children, ...props }, ref) => {
  const { isMobile, state, openMobile, setOpenMobile } = useSidebar();

  if (collapsible === "none") {
    return (
      <div
        className={cn("flex h-full w-[--sidebar-width] flex-col bg-sidebar text-sidebar-foreground", className)}
        ref={ref}
        {...props}
      >
        {children}
      </div>
    );
  }

  if (isMobile) {
    return (
      <Sheet open={openMobile} onOpenChange={setOpenMobile} {...props}>
        <SheetContent
          data-sidebar="sidebar"
          data-mobile="true"
          className="w-[--sidebar-width] bg-sidebar p-0 text-sidebar-foreground [&>button]:hidden"
          style={
            {
              "--sidebar-width": SIDEBAR_WIDTH_MOBILE,
            } as React.CSSProperties
          }
          side={side}
        >
          <div className="flex h-full w-full flex-col">{children}</div>
        </SheetContent>
      </Sheet>
    );
  }

  return (
    <div
      ref={ref}
      className="group peer hidden text-sidebar-foreground md:block"
      data-state={state}
      data-collapsible={state === "collapsed" ? collapsible : ""}
      data-variant={variant}
      data-side={side}
    >
      {/* This is what handles the sidebar gap on desktop */}
      <div
        className={cn(
          "relative h-svh w-[--sidebar-width] bg-transparent transition-[width] duration-200 ease-linear",
          "group-data-[collapsible=offcanvas]:w-0",
          "group-data-[side=right]:rotate-180",
          variant === "floating" || variant === "inset"
            ? "group-data-[collapsible=icon]:w-[calc(var(--sidebar-width-icon)_+_theme(spacing.4))]"
            : "group-data-[collapsible=icon]:w-[--sidebar-width-icon]",
        )}
      />
      <div
        className={cn(
          "fixed inset-y-0 z-10 hidden h-svh w-[--sidebar-width] transition-[left,right,width] duration-200 ease-linear md:flex",
          side === "left"
            ? "left-0 group-data-[collapsible=offcanvas]:left-[calc(var(--sidebar-width)*-1)]"
            : "right-0 group-data-[collapsible=offcanvas]:right-[calc(var(--sidebar-width)*-1)]",
          // Adjust the padding for floating and inset variants.
          variant === "floating" || variant === "inset"
            ? "p-2 group-data-[collapsible=icon]:w-[calc(var(--sidebar-width-icon)_+_theme(spacing.4)_+2px)]"
            : "group-data-[collapsible=icon]:w-[--sidebar-width-icon] group-data-[side=left]:border-r group-data-[side=right]:border-l",
          className,
        )}
        {...props}
      >
        <div
          data-sidebar="sidebar"
          className="flex h-full w-full flex-col bg-sidebar group-data-[variant=floating]:rounded-lg group-data-[variant=floating]:border group-data-[variant=floating]:border-sidebar-border group-data-[variant=floating]:shadow"
        >
          {children}
        </div>
      </div>
    </div>
  );
});
Sidebar.displayName = "Sidebar";

const SidebarTrigger = React.forwardRef<React.ElementRef<typeof Button>, React.ComponentProps<typeof Button>>(
  ({ className, onClick, ...props }, ref) => {
    const { toggleSidebar } = useSidebar();

    return (
      <Button
        ref={ref}
        data-sidebar="trigger"
        variant="ghost"
        size="icon"
        className={cn("h-7 w-7", className)}
        onClick={(event) => {
          onClick?.(event);
          toggleSidebar();
        }}
        {...props}
      >
        <PanelLeft />
        <span className="sr-only">Toggle Sidebar</span>
      </Button>
    );
  },
);
SidebarTrigger.displayName = "SidebarTrigger";

const SidebarRail = React.forwardRef<HTMLButtonElement, React.ComponentProps<"button">>(
  ({ className, ...props }, ref) => {
    const { toggleSidebar } = useSidebar();

    return (
      <button
        ref={ref}
        data-sidebar="rail"
        aria-label="Toggle Sidebar"
        tabIndex={-1}
        onClick={toggleSidebar}
        title="Toggle Sidebar"
        className={cn(
          "absolute inset-y-0 z-20 hidden w-4 -translate-x-1/2 transition-all ease-linear after:absolute after:inset-y-0 after:left-1/2 after:w-[2px] group-data-[side=left]:-right-4 group-data-[side=right]:left-0 hover:after:bg-sidebar-border sm:flex",
          "[[data-side=left]_&]:cursor-w-resize [[data-side=right]_&]:cursor-e-resize",
          "[[data-side=left][data-state=collapsed]_&]:cursor-e-resize [[data-side=right][data-state=collapsed]_&]:cursor-w-resize",
          "group-data-[collapsible=offcanvas]:translate-x-0 group-data-[collapsible=offcanvas]:after:left-full group-data-[collapsible=offcanvas]:hover:bg-sidebar",
          "[[data-side=left][data-collapsible=offcanvas]_&]:-right-2",
          "[[data-side=right][data-collapsible=offcanvas]_&]:-left-2",
          className,
        )}
        {...props}
      />
    );
  },
);
SidebarRail.displayName = "SidebarRail";

const SidebarInset = React.forwardRef<HTMLDivElement, React.ComponentProps<"main">>(({ className, ...props }, ref) => {
  return (
    <main
      ref={ref}
      className={cn(
        "relative flex min-h-svh flex-1 flex-col bg-background",
        "peer-data-[variant=inset]:min-h-[calc(100svh-theme(spacing.4))] md:peer-data-[variant=inset]:m-2 md:peer-data-[state=collapsed]:peer-data-[variant=inset]:ml-2 md:peer-data-[variant=inset]:ml-0 md:peer-data-[variant=inset]:rounded-xl md:peer-data-[variant=inset]:shadow",
        className,
      )}
      {...props}
    />
  );
});
SidebarInset.displayName = "SidebarInset";

const SidebarInput = React.forwardRef<React.ElementRef<typeof Input>, React.ComponentProps<typeof Input>>(
  ({ className, ...props }, ref) => {
    return (
      <Input
        ref={ref}
        data-sidebar="input"
        className={cn(
          "h-8 w-full bg-background shadow-none focus-visible:ring-2 focus-visible:ring-sidebar-ring",
          className,
        )}
        {...props}
      />
    );
  },
);
SidebarInput.displayName = "SidebarInput";

const SidebarHeader = React.forwardRef<HTMLDivElement, React.ComponentProps<"div">>(({ className, ...props }, ref) => {
  return <div ref={ref} data-sidebar="header" className={cn("flex flex-col gap-2 p-2", className)} {...props} />;
});
SidebarHeader.displayName = "SidebarHeader";

const SidebarFooter = React.forwardRef<HTMLDivElement, React.ComponentProps<"div">>(({ className, ...props }, ref) => {
  return <div ref={ref} data-sidebar="footer" className={cn("flex flex-col gap-2 p-2", className)} {...props} />;
});
SidebarFooter.displayName = "SidebarFooter";

const SidebarSeparator = React.forwardRef<React.ElementRef<typeof Separator>, React.ComponentProps<typeof Separator>>(
  ({ className, ...props }, ref) => {
    return (
      <Separator
        ref={ref}
        data-sidebar="separator"
        className={cn("mx-2 w-auto bg-sidebar-border", className)}
        {...props}
      />
    );
  },
);
SidebarSeparator.displayName = "SidebarSeparator";

const SidebarContent = React.forwardRef<HTMLDivElement, React.ComponentProps<"div">>(({ className, ...props }, ref) => {
  return (
    <div
      ref={ref}
      data-sidebar="content"
      className={cn(
        "flex min-h-0 flex-1 flex-col gap-2 overflow-auto group-data-[collapsible=icon]:overflow-hidden",
        className,
      )}
      {...props}
    />
  );
});
SidebarContent.displayName = "SidebarContent";

const SidebarGroup = React.forwardRef<HTMLDivElement, React.ComponentProps<"div">>(({ className, ...props }, ref) => {
  return (
    <div
      ref={ref}
      data-sidebar="group"
      className={cn("relative flex w-full min-w-0 flex-col p-2", className)}
      {...props}
    />
  );
});
SidebarGroup.displayName = "SidebarGroup";

const SidebarGroupLabel = React.forwardRef<HTMLDivElement, React.ComponentProps<"div"> & { asChild?: boolean }>(
  ({ className, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "div";

    return (
      <Comp
        ref={ref}
        data-sidebar="group-label"
        className={cn(
          "flex h-8 shrink-0 items-center rounded-md px-2 text-xs font-medium text-sidebar-foreground/70 outline-none ring-sidebar-ring transition-[margin,opa] duration-200 ease-linear focus-visible:ring-2 [&>svg]:size-4 [&>svg]:shrink-0",
          "group-data-[collapsible=icon]:-mt-8 group-data-[collapsible=icon]:opacity-0",
          className,
        )}
        {...props}
      />
    );
  },
);
SidebarGroupLabel.displayName = "SidebarGroupLabel";

const SidebarGroupAction = React.forwardRef<HTMLButtonElement, React.ComponentProps<"button"> & { asChild?: boolean }>(
  ({ className, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button";

    return (
      <Comp
        ref={ref}
        data-sidebar="group-action"
        className={cn(
          "absolute right-3 top-3.5 flex aspect-square w-5 items-center justify-center rounded-md p-0 text-sidebar-foreground outline-none ring-sidebar-ring transition-transform hover:bg-sidebar-accent hover:text-sidebar-accent-foreground focus-visible:ring-2 [&>svg]:size-4 [&>svg]:shrink-0",
          // Increases the hit area of the button on mobile.
          "after:absolute after:-inset-2 after:md:hidden",
          "group-data-[collapsible=icon]:hidden",
          className,
        )}
        {...props}
      />
    );
  },
);
SidebarGroupAction.displayName = "SidebarGroupAction";

const SidebarGroupContent = React.forwardRef<HTMLDivElement, React.ComponentProps<"div">>(
  ({ className, ...props }, ref) => (
    <div ref={ref} data-sidebar="group-content" className={cn("w-full text-sm", className)} {...props} />
  ),
);
SidebarGroupContent.displayName = "SidebarGroupContent";

const SidebarMenu = React.forwardRef<HTMLUListElement, React.ComponentProps<"ul">>(({ className, ...props }, ref) => (
  <ul ref={ref} data-sidebar="menu" className={cn("flex w-full min-w-0 flex-col gap-1", className)} {...props} />
));
SidebarMenu.displayName = "SidebarMenu";

const SidebarMenuItem = React.forwardRef<HTMLLIElement, React.ComponentProps<"li">>(({ className, ...props }, ref) => (
  <li ref={ref} data-sidebar="menu-item" className={cn("group/menu-item relative", className)} {...props} />
));
SidebarMenuItem.displayName = "SidebarMenuItem";

const sidebarMenuButtonVariants = cva(
  "peer/menu-button flex w-full items-center gap-2 overflow-hidden rounded-md p-2 text-left text-sm outline-none ring-sidebar-ring transition-[width,height,padding] hover:bg-sidebar-accent hover:text-sidebar-accent-foreground focus-visible:ring-2 active:bg-sidebar-accent active:text-sidebar-accent-foreground disabled:pointer-events-none disabled:opacity-50 group-has-[[data-sidebar=menu-action]]/menu-item:pr-8 aria-disabled:pointer-events-none aria-disabled:opacity-50 data-[active=true]:bg-sidebar-accent data-[active=true]:font-medium data-[active=true]:text-sidebar-accent-foreground data-[state=open]:hover:bg-sidebar-accent data-[state=open]:hover:text-sidebar-accent-foreground group-data-[collapsible=icon]:!size-8 group-data-[collapsible=icon]:!p-2 [&>span:last-child]:truncate [&>svg]:size-4 [&>svg]:shrink-0",
  {
    variants: {
      variant: {
        default: "hover:bg-sidebar-accent hover:text-sidebar-accent-foreground",
        outline:
          "bg-background shadow-[0_0_0_1px_hsl(var(--sidebar-border))] hover:bg-sidebar-accent hover:text-sidebar-accent-foreground hover:shadow-[0_0_0_1px_hsl(var(--sidebar-accent))]",
      },
      size: {
        default: "h-8 text-sm",
        sm: "h-7 text-xs",
        lg: "h-12 text-sm group-data-[collapsible=icon]:!p-0",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  },
);

const SidebarMenuButton = React.forwardRef<
  HTMLButtonElement,
  React.ComponentProps<"button"> & {
    asChild?: boolean;
    isActive?: boolean;
    tooltip?: string | React.ComponentProps<typeof TooltipContent>;
  } & VariantProps<typeof sidebarMenuButtonVariants>
>(({ asChild = false, isActive = false, variant = "default", size = "default", tooltip, className, ...props }, ref) => {
  const Comp = asChild ? Slot : "button";
  const { isMobile, state } = useSidebar();

  const button = (
    <Comp
      ref={ref}
      data-sidebar="menu-button"
      data-size={size}
      data-active={isActive}
      className={cn(sidebarMenuButtonVariants({ variant, size }), className)}
      {...props}
    />
  );

  if (!tooltip) {
    return button;
  }

  if (typeof tooltip === "string") {
    tooltip = {
      children: tooltip,
    };
  }

  return (
    <Tooltip>
      <TooltipTrigger asChild>{button}</TooltipTrigger>
      <TooltipContent side="right" align="center" hidden={state !== "collapsed" || isMobile} {...tooltip} />
    </Tooltip>
  );
});
SidebarMenuButton.displayName = "SidebarMenuButton";

const SidebarMenuAction = React.forwardRef<
  HTMLButtonElement,
  React.ComponentProps<"button"> & {
    asChild?: boolean;
    showOnHover?: boolean;
  }
>(({ className, asChild = false, showOnHover = false, ...props }, ref) => {
  const Comp = asChild ? Slot : "button";

  return (
    <Comp
      ref={ref}
      data-sidebar="menu-action"
      className={cn(
        "absolute right-1 top-1.5 flex aspect-square w-5 items-center justify-center rounded-md p-0 text-sidebar-foreground outline-none ring-sidebar-ring transition-transform peer-hover/menu-button:text-sidebar-accent-foreground hover:bg-sidebar-accent hover:text-sidebar-accent-foreground focus-visible:ring-2 [&>svg]:size-4 [&>svg]:shrink-0",
        // Increases the hit area of the button on mobile.
        "after:absolute after:-inset-2 after:md:hidden",
        "peer-data-[size=sm]/menu-button:top-1",
        "peer-data-[size=default]/menu-button:top-1.5",
        "peer-data-[size=lg]/menu-button:top-2.5",
        "group-data-[collapsible=icon]:hidden",
        showOnHover &&
          "group-focus-within/menu-item:opacity-100 group-hover/menu-item:opacity-100 data-[state=open]:opacity-100 peer-data-[active=true]/menu-button:text-sidebar-accent-foreground md:opacity-0",
        className,
      )}
      {...props}
    />
  );
});
SidebarMenuAction.displayName = "SidebarMenuAction";

const SidebarMenuBadge = React.forwardRef<HTMLDivElement, React.ComponentProps<"div">>(
  ({ className, ...props }, ref) => (
    <div
      ref={ref}
      data-sidebar="menu-badge"
      className={cn(
        "pointer-events-none absolute right-1 flex h-5 min-w-5 select-none items-center justify-center rounded-md px-1 text-xs font-medium tabular-nums text-sidebar-foreground",
        "peer-hover/menu-button:text-sidebar-accent-foreground peer-data-[active=true]/menu-button:text-sidebar-accent-foreground",
        "peer-data-[size=sm]/menu-button:top-1",
        "peer-data-[size=default]/menu-button:top-1.5",
        "peer-data-[size=lg]/menu-button:top-2.5",
        "group-data-[collapsible=icon]:hidden",
        className,
      )}
      {...props}
    />
  ),
);
SidebarMenuBadge.displayName = "SidebarMenuBadge";

const SidebarMenuSkeleton = React.forwardRef<
  HTMLDivElement,
  React.ComponentProps<"div"> & {
    showIcon?: boolean;
  }
>(({ className, showIcon = false, ...props }, ref) => {
  // Random width between 50 to 90%.
  const width = React.useMemo(() => {
    return `${Math.floor(Math.random() * 40) + 50}%`;
  }, []);

  return (
    <div
      ref={ref}
      data-sidebar="menu-skeleton"
      className={cn("flex h-8 items-center gap-2 rounded-md px-2", className)}
      {...props}
    >
      {showIcon && <Skeleton className="size-4 rounded-md" data-sidebar="menu-skeleton-icon" />}
      <Skeleton
        className="h-4 max-w-[--skeleton-width] flex-1"
        data-sidebar="menu-skeleton-text"
        style={
          {
            "--skeleton-width": width,
          } as React.CSSProperties
        }
      />
    </div>
  );
});
SidebarMenuSkeleton.displayName = "SidebarMenuSkeleton";

const SidebarMenuSub = React.forwardRef<HTMLUListElement, React.ComponentProps<"ul">>(
  ({ className, ...props }, ref) => (
    <ul
      ref={ref}
      data-sidebar="menu-sub"
      className={cn(
        "mx-3.5 flex min-w-0 translate-x-px flex-col gap-1 border-l border-sidebar-border px-2.5 py-0.5",
        "group-data-[collapsible=icon]:hidden",
        className,
      )}
      {...props}
    />
  ),
);
SidebarMenuSub.displayName = "SidebarMenuSub";

const SidebarMenuSubItem = React.forwardRef<HTMLLIElement, React.ComponentProps<"li">>(({ ...props }, ref) => (
  <li ref={ref} {...props} />
));
SidebarMenuSubItem.displayName = "SidebarMenuSubItem";

const SidebarMenuSubButton = React.forwardRef<
  HTMLAnchorElement,
  React.ComponentProps<"a"> & {
    asChild?: boolean;
    size?: "sm" | "md";
    isActive?: boolean;
  }
>(({ asChild = false, size = "md", isActive, className, ...props }, ref) => {
  const Comp = asChild ? Slot : "a";

  return (
    <Comp
      ref={ref}
      data-sidebar="menu-sub-button"
      data-size={size}
      data-active={isActive}
      className={cn(
        "flex h-7 min-w-0 -translate-x-px items-center gap-2 overflow-hidden rounded-md px-2 text-sidebar-foreground outline-none ring-sidebar-ring aria-disabled:pointer-events-none aria-disabled:opacity-50 hover:bg-sidebar-accent hover:text-sidebar-accent-foreground focus-visible:ring-2 active:bg-sidebar-accent active:text-sidebar-accent-foreground disabled:pointer-events-none disabled:opacity-50 [&>span:last-child]:truncate [&>svg]:size-4 [&>svg]:shrink-0 [&>svg]:text-sidebar-accent-foreground",
        "data-[active=true]:bg-sidebar-accent data-[active=true]:text-sidebar-accent-foreground",
        size === "sm" && "text-xs",
        size === "md" && "text-sm",
        "group-data-[collapsible=icon]:hidden",
        className,
      )}
      {...props}
    />
  );
});
SidebarMenuSubButton.displayName = "SidebarMenuSubButton";

export {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupAction,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarInput,
  SidebarInset,
  SidebarMenu,
  SidebarMenuAction,
  SidebarMenuBadge,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarMenuSkeleton,
  SidebarMenuSub,
  SidebarMenuSubButton,
  SidebarMenuSubItem,
  SidebarProvider,
  SidebarRail,
  SidebarSeparator,
  SidebarTrigger,
  useSidebar,
};
```

---

### <a id='src-components-ui-skeletontsx'></a> `src\components\ui\skeleton.tsx`

**Component:** skeleton.tsx

```tsx
import { cn } from "@/lib/utils";

interface SkeletonProps extends React.HTMLAttributes<HTMLDivElement> {
  variant?: "rectangular" | "circular" | "text" | "rounded";
  animation?: "pulse" | "wave" | "none";
  width?: string | number;
  height?: string | number;
}

export function Skeleton({
  className,
  variant = "rectangular",
  animation = "pulse",
  width,
  height,
  ...props
}: SkeletonProps) {
  const variantStyles = {
    rectangular: "",
    circular: "rounded-full",
    text: "rounded h-4",
    rounded: "rounded-lg",
  };

  const animationStyles = {
    pulse: "animate-pulse",
    wave: "animate-shimmer",
    none: "",
  };

  return (
    <div
      className={cn(
        "bg-gray-200 dark:bg-gray-700",
        variantStyles[variant],
        animationStyles[animation],
        className
      )}
      style={{
        width: width,
        height: height,
      }}
      {...props}
    />
  );
}
```

---

### <a id='src-components-ui-slidertsx'></a> `src\components\ui\slider.tsx`

**Component:** slider.tsx

```tsx
import * as React from "react";
import * as SliderPrimitive from "@radix-ui/react-slider";

import { cn } from "@/lib/utils";

const Slider = React.forwardRef<
  React.ElementRef<typeof SliderPrimitive.Root>,
  React.ComponentPropsWithoutRef<typeof SliderPrimitive.Root>
>(({ className, ...props }, ref) => (
  <SliderPrimitive.Root
    ref={ref}
    className={cn("relative flex w-full touch-none select-none items-center", className)}
    {...props}
  >
    <SliderPrimitive.Track className="relative h-2 w-full grow overflow-hidden rounded-full bg-secondary">
      <SliderPrimitive.Range className="absolute h-full bg-primary" />
    </SliderPrimitive.Track>
    <SliderPrimitive.Thumb className="block h-5 w-5 rounded-full border-2 border-primary bg-background ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50" />
  </SliderPrimitive.Root>
));
Slider.displayName = SliderPrimitive.Root.displayName;

export { Slider };
```

---

### <a id='src-components-ui-sonnertsx'></a> `src\components\ui\sonner.tsx`

**Component:** sonner.tsx

```tsx
import { useTheme } from "next-themes";
import { Toaster as Sonner, toast } from "sonner";

type ToasterProps = React.ComponentProps<typeof Sonner>;

const Toaster = ({ ...props }: ToasterProps) => {
  const { theme = "system" } = useTheme();

  return (
    <Sonner
      theme={theme as ToasterProps["theme"]}
      className="toaster group"
      toastOptions={{
        classNames: {
          toast:
            "group toast group-[.toaster]:bg-background group-[.toaster]:text-foreground group-[.toaster]:border-border group-[.toaster]:shadow-lg",
          description: "group-[.toast]:text-muted-foreground",
          actionButton: "group-[.toast]:bg-primary group-[.toast]:text-primary-foreground",
          cancelButton: "group-[.toast]:bg-muted group-[.toast]:text-muted-foreground",
        },
      }}
      {...props}
    />
  );
};

export { Toaster, toast };
```

---

### <a id='src-components-ui-story-card-skeletontsx'></a> `src\components\ui\story-card-skeleton.tsx`

**Component:** story-card-skeleton.tsx

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

### <a id='src-components-ui-story-cardtsx'></a> `src\components\ui\story-card.tsx`

**Component:** story-card.tsx

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

### <a id='src-components-ui-story-detail-skeletontsx'></a> `src\components\ui\story-detail-skeleton.tsx`

**Component:** story-detail-skeleton.tsx

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

### <a id='src-components-ui-switchtsx'></a> `src\components\ui\switch.tsx`

**Component:** switch.tsx

```tsx
import * as React from "react";
import * as SwitchPrimitives from "@radix-ui/react-switch";

import { cn } from "@/lib/utils";

const Switch = React.forwardRef<
  React.ElementRef<typeof SwitchPrimitives.Root>,
  React.ComponentPropsWithoutRef<typeof SwitchPrimitives.Root>
>(({ className, ...props }, ref) => (
  <SwitchPrimitives.Root
    className={cn(
      "peer inline-flex h-6 w-11 shrink-0 cursor-pointer items-center rounded-full border-2 border-transparent transition-colors data-[state=checked]:bg-primary data-[state=unchecked]:bg-input focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background disabled:cursor-not-allowed disabled:opacity-50",
      className,
    )}
    {...props}
    ref={ref}
  >
    <SwitchPrimitives.Thumb
      className={cn(
        "pointer-events-none block h-5 w-5 rounded-full bg-background shadow-lg ring-0 transition-transform data-[state=checked]:translate-x-5 data-[state=unchecked]:translate-x-0",
      )}
    />
  </SwitchPrimitives.Root>
));
Switch.displayName = SwitchPrimitives.Root.displayName;

export { Switch };
```

---

### <a id='src-components-ui-tabletsx'></a> `src\components\ui\table.tsx`

**Component:** table.tsx

```tsx
import * as React from "react";

import { cn } from "@/lib/utils";

const Table = React.forwardRef<HTMLTableElement, React.HTMLAttributes<HTMLTableElement>>(
  ({ className, ...props }, ref) => (
    <div className="relative w-full overflow-auto">
      <table ref={ref} className={cn("w-full caption-bottom text-sm", className)} {...props} />
    </div>
  ),
);
Table.displayName = "Table";

const TableHeader = React.forwardRef<HTMLTableSectionElement, React.HTMLAttributes<HTMLTableSectionElement>>(
  ({ className, ...props }, ref) => <thead ref={ref} className={cn("[&_tr]:border-b", className)} {...props} />,
);
TableHeader.displayName = "TableHeader";

const TableBody = React.forwardRef<HTMLTableSectionElement, React.HTMLAttributes<HTMLTableSectionElement>>(
  ({ className, ...props }, ref) => (
    <tbody ref={ref} className={cn("[&_tr:last-child]:border-0", className)} {...props} />
  ),
);
TableBody.displayName = "TableBody";

const TableFooter = React.forwardRef<HTMLTableSectionElement, React.HTMLAttributes<HTMLTableSectionElement>>(
  ({ className, ...props }, ref) => (
    <tfoot ref={ref} className={cn("border-t bg-muted/50 font-medium [&>tr]:last:border-b-0", className)} {...props} />
  ),
);
TableFooter.displayName = "TableFooter";

const TableRow = React.forwardRef<HTMLTableRowElement, React.HTMLAttributes<HTMLTableRowElement>>(
  ({ className, ...props }, ref) => (
    <tr
      ref={ref}
      className={cn("border-b transition-colors data-[state=selected]:bg-muted hover:bg-muted/50", className)}
      {...props}
    />
  ),
);
TableRow.displayName = "TableRow";

const TableHead = React.forwardRef<HTMLTableCellElement, React.ThHTMLAttributes<HTMLTableCellElement>>(
  ({ className, ...props }, ref) => (
    <th
      ref={ref}
      className={cn(
        "h-12 px-4 text-left align-middle font-medium text-muted-foreground [&:has([role=checkbox])]:pr-0",
        className,
      )}
      {...props}
    />
  ),
);
TableHead.displayName = "TableHead";

const TableCell = React.forwardRef<HTMLTableCellElement, React.TdHTMLAttributes<HTMLTableCellElement>>(
  ({ className, ...props }, ref) => (
    <td ref={ref} className={cn("p-4 align-middle [&:has([role=checkbox])]:pr-0", className)} {...props} />
  ),
);
TableCell.displayName = "TableCell";

const TableCaption = React.forwardRef<HTMLTableCaptionElement, React.HTMLAttributes<HTMLTableCaptionElement>>(
  ({ className, ...props }, ref) => (
    <caption ref={ref} className={cn("mt-4 text-sm text-muted-foreground", className)} {...props} />
  ),
);
TableCaption.displayName = "TableCaption";

export { Table, TableHeader, TableBody, TableFooter, TableHead, TableRow, TableCell, TableCaption };
```

---

### <a id='src-components-ui-tabstsx'></a> `src\components\ui\tabs.tsx`

**Component:** tabs.tsx

```tsx
import * as React from "react";
import * as TabsPrimitive from "@radix-ui/react-tabs";

import { cn } from "@/lib/utils";

const Tabs = TabsPrimitive.Root;

const TabsList = React.forwardRef<
  React.ElementRef<typeof TabsPrimitive.List>,
  React.ComponentPropsWithoutRef<typeof TabsPrimitive.List>
>(({ className, ...props }, ref) => (
  <TabsPrimitive.List
    ref={ref}
    className={cn(
      "inline-flex h-10 items-center justify-center rounded-md bg-muted p-1 text-muted-foreground",
      className,
    )}
    {...props}
  />
));
TabsList.displayName = TabsPrimitive.List.displayName;

const TabsTrigger = React.forwardRef<
  React.ElementRef<typeof TabsPrimitive.Trigger>,
  React.ComponentPropsWithoutRef<typeof TabsPrimitive.Trigger>
>(({ className, ...props }, ref) => (
  <TabsPrimitive.Trigger
    ref={ref}
    className={cn(
      "inline-flex items-center justify-center whitespace-nowrap rounded-sm px-3 py-1.5 text-sm font-medium ring-offset-background transition-all data-[state=active]:bg-background data-[state=active]:text-foreground data-[state=active]:shadow-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50",
      className,
    )}
    {...props}
  />
));
TabsTrigger.displayName = TabsPrimitive.Trigger.displayName;

const TabsContent = React.forwardRef<
  React.ElementRef<typeof TabsPrimitive.Content>,
  React.ComponentPropsWithoutRef<typeof TabsPrimitive.Content>
>(({ className, ...props }, ref) => (
  <TabsPrimitive.Content
    ref={ref}
    className={cn(
      "mt-2 ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2",
      className,
    )}
    {...props}
  />
));
TabsContent.displayName = TabsPrimitive.Content.displayName;

export { Tabs, TabsList, TabsTrigger, TabsContent };
```

---

### <a id='src-components-ui-textareatsx'></a> `src\components\ui\textarea.tsx`

**Component:** textarea.tsx

```tsx
import * as React from "react";

import { cn } from "@/lib/utils";

export interface TextareaProps extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {}

const Textarea = React.forwardRef<HTMLTextAreaElement, TextareaProps>(({ className, ...props }, ref) => {
  return (
    <textarea
      className={cn(
        "flex min-h-[80px] w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50",
        className,
      )}
      ref={ref}
      {...props}
    />
  );
});
Textarea.displayName = "Textarea";

export { Textarea };
```

---

### <a id='src-components-ui-toast-providertsx'></a> `src\components\ui\toast-provider.tsx`

**Component:** toast-provider.tsx

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

### <a id='src-components-ui-toasttsx'></a> `src\components\ui\toast.tsx`

**Component:** toast.tsx

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

### <a id='src-components-ui-toastertsx'></a> `src\components\ui\toaster.tsx`

**Component:** toaster.tsx

```tsx
import { useToast } from "@/hooks/use-toast";
import { Toast, ToastClose, ToastDescription, ToastProvider, ToastTitle, ToastViewport } from "@/components/ui/toast";

export function Toaster() {
  const { toasts } = useToast();

  return (
    <ToastProvider>
      {toasts.map(function ({ id, title, description, action, ...props }) {
        return (
          <Toast key={id} {...props}>
            <div className="grid gap-1">
              {title && <ToastTitle>{title}</ToastTitle>}
              {description && <ToastDescription>{description}</ToastDescription>}
            </div>
            {action}
            <ToastClose />
          </Toast>
        );
      })}
      <ToastViewport />
    </ToastProvider>
  );
}
```

---

### <a id='src-components-ui-toggle-grouptsx'></a> `src\components\ui\toggle-group.tsx`

**Component:** toggle-group.tsx

```tsx
import * as React from "react";
import * as ToggleGroupPrimitive from "@radix-ui/react-toggle-group";
import { type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";
import { toggleVariants } from "@/components/ui/toggle";

const ToggleGroupContext = React.createContext<VariantProps<typeof toggleVariants>>({
  size: "default",
  variant: "default",
});

const ToggleGroup = React.forwardRef<
  React.ElementRef<typeof ToggleGroupPrimitive.Root>,
  React.ComponentPropsWithoutRef<typeof ToggleGroupPrimitive.Root> & VariantProps<typeof toggleVariants>
>(({ className, variant, size, children, ...props }, ref) => (
  <ToggleGroupPrimitive.Root ref={ref} className={cn("flex items-center justify-center gap-1", className)} {...props}>
    <ToggleGroupContext.Provider value={{ variant, size }}>{children}</ToggleGroupContext.Provider>
  </ToggleGroupPrimitive.Root>
));

ToggleGroup.displayName = ToggleGroupPrimitive.Root.displayName;

const ToggleGroupItem = React.forwardRef<
  React.ElementRef<typeof ToggleGroupPrimitive.Item>,
  React.ComponentPropsWithoutRef<typeof ToggleGroupPrimitive.Item> & VariantProps<typeof toggleVariants>
>(({ className, children, variant, size, ...props }, ref) => {
  const context = React.useContext(ToggleGroupContext);

  return (
    <ToggleGroupPrimitive.Item
      ref={ref}
      className={cn(
        toggleVariants({
          variant: context.variant || variant,
          size: context.size || size,
        }),
        className,
      )}
      {...props}
    >
      {children}
    </ToggleGroupPrimitive.Item>
  );
});

ToggleGroupItem.displayName = ToggleGroupPrimitive.Item.displayName;

export { ToggleGroup, ToggleGroupItem };
```

---

### <a id='src-components-ui-toggletsx'></a> `src\components\ui\toggle.tsx`

**Component:** toggle.tsx

```tsx
import * as React from "react";
import * as TogglePrimitive from "@radix-ui/react-toggle";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";

const toggleVariants = cva(
  "inline-flex items-center justify-center rounded-md text-sm font-medium ring-offset-background transition-colors hover:bg-muted hover:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 data-[state=on]:bg-accent data-[state=on]:text-accent-foreground",
  {
    variants: {
      variant: {
        default: "bg-transparent",
        outline: "border border-input bg-transparent hover:bg-accent hover:text-accent-foreground",
      },
      size: {
        default: "h-10 px-3",
        sm: "h-9 px-2.5",
        lg: "h-11 px-5",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  },
);

const Toggle = React.forwardRef<
  React.ElementRef<typeof TogglePrimitive.Root>,
  React.ComponentPropsWithoutRef<typeof TogglePrimitive.Root> & VariantProps<typeof toggleVariants>
>(({ className, variant, size, ...props }, ref) => (
  <TogglePrimitive.Root ref={ref} className={cn(toggleVariants({ variant, size, className }))} {...props} />
));

Toggle.displayName = TogglePrimitive.Root.displayName;

export { Toggle, toggleVariants };
```

---

### <a id='src-components-ui-tooltiptsx'></a> `src\components\ui\tooltip.tsx`

**Component:** tooltip.tsx

```tsx
import * as React from "react";
import * as TooltipPrimitive from "@radix-ui/react-tooltip";

import { cn } from "@/lib/utils";

const TooltipProvider = TooltipPrimitive.Provider;

const Tooltip = TooltipPrimitive.Root;

const TooltipTrigger = TooltipPrimitive.Trigger;

const TooltipContent = React.forwardRef<
  React.ElementRef<typeof TooltipPrimitive.Content>,
  React.ComponentPropsWithoutRef<typeof TooltipPrimitive.Content>
>(({ className, sideOffset = 4, ...props }, ref) => (
  <TooltipPrimitive.Content
    ref={ref}
    sideOffset={sideOffset}
    className={cn(
      "z-50 overflow-hidden rounded-md border bg-popover px-3 py-1.5 text-sm text-popover-foreground shadow-md animate-in fade-in-0 zoom-in-95 data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=closed]:zoom-out-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2",
      className,
    )}
    {...props}
  />
));
TooltipContent.displayName = TooltipPrimitive.Content.displayName;

export { Tooltip, TooltipTrigger, TooltipContent, TooltipProvider };
```

---

### <a id='src-components-ui-use-toastts'></a> `src\components\ui\use-toast.ts`

**Component:** use-toast.ts

```typescript
import { useToast, toast } from "@/hooks/use-toast";

export { useToast, toast };
```

---


## Controllers Files

### <a id='src-controllers-authControllerts'></a> `src\controllers\authController.ts`

**File Type:** authController.ts

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

### <a id='src-controllers-indexts'></a> `src\controllers\index.ts`

**File Type:** index.ts

```typescript
// Controllers orchestrate complex business logic flows
export * from './storyController';
export * from './userController';
export * from './authController';
```

---

### <a id='src-controllers-storyControllerts'></a> `src\controllers\storyController.ts`

**File Type:** storyController.ts

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

### <a id='src-controllers-userControllerts'></a> `src\controllers\userController.ts`

**File Type:** userController.ts

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


## Helper Files

### <a id='src-helper-constantsts'></a> `src\helper\constants.ts`

**File Type:** constants.ts

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

### <a id='src-helper-formattingts'></a> `src\helper\formatting.ts`

**File Type:** formatting.ts

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

### <a id='src-helper-indexts'></a> `src\helper\index.ts`

**File Type:** index.ts

```typescript
export * from './validation';
export * from './formatting';
export * from './constants';
```

---

### <a id='src-helper-validationts'></a> `src\helper\validation.ts`

**File Type:** validation.ts

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


## Hooks Files

### <a id='src-hooks-use-mobiletsx'></a> `src\hooks\use-mobile.tsx`

**File Type:** use-mobile.tsx

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

### <a id='src-hooks-use-toastts'></a> `src\hooks\use-toast.ts`

**File Type:** use-toast.ts

```typescript
import * as React from "react";

import type { ToastActionElement, ToastProps } from "@/components/ui/toast";

const TOAST_LIMIT = 1;
const TOAST_REMOVE_DELAY = 1000000;

type ToasterToast = ToastProps & {
  id: string;
  title?: React.ReactNode;
  description?: React.ReactNode;
  action?: ToastActionElement;
};

const actionTypes = {
  ADD_TOAST: "ADD_TOAST",
  UPDATE_TOAST: "UPDATE_TOAST",
  DISMISS_TOAST: "DISMISS_TOAST",
  REMOVE_TOAST: "REMOVE_TOAST",
} as const;

let count = 0;

function genId() {
  count = (count + 1) % Number.MAX_SAFE_INTEGER;
  return count.toString();
}

type ActionType = typeof actionTypes;

type Action =
  | {
      type: ActionType["ADD_TOAST"];
      toast: ToasterToast;
    }
  | {
      type: ActionType["UPDATE_TOAST"];
      toast: Partial<ToasterToast>;
    }
  | {
      type: ActionType["DISMISS_TOAST"];
      toastId?: ToasterToast["id"];
    }
  | {
      type: ActionType["REMOVE_TOAST"];
      toastId?: ToasterToast["id"];
    };

interface State {
  toasts: ToasterToast[];
}

const toastTimeouts = new Map<string, ReturnType<typeof setTimeout>>();

const addToRemoveQueue = (toastId: string) => {
  if (toastTimeouts.has(toastId)) {
    return;
  }

  const timeout = setTimeout(() => {
    toastTimeouts.delete(toastId);
    dispatch({
      type: "REMOVE_TOAST",
      toastId: toastId,
    });
  }, TOAST_REMOVE_DELAY);

  toastTimeouts.set(toastId, timeout);
};

export const reducer = (state: State, action: Action): State => {
  switch (action.type) {
    case "ADD_TOAST":
      return {
        ...state,
        toasts: [action.toast, ...state.toasts].slice(0, TOAST_LIMIT),
      };

    case "UPDATE_TOAST":
      return {
        ...state,
        toasts: state.toasts.map((t) => (t.id === action.toast.id ? { ...t, ...action.toast } : t)),
      };

    case "DISMISS_TOAST": {
      const { toastId } = action;

      // ! Side effects ! - This could be extracted into a dismissToast() action,
      // but I'll keep it here for simplicity
      if (toastId) {
        addToRemoveQueue(toastId);
      } else {
        state.toasts.forEach((toast) => {
          addToRemoveQueue(toast.id);
        });
      }

      return {
        ...state,
        toasts: state.toasts.map((t) =>
          t.id === toastId || toastId === undefined
            ? {
                ...t,
                open: false,
              }
            : t,
        ),
      };
    }
    case "REMOVE_TOAST":
      if (action.toastId === undefined) {
        return {
          ...state,
          toasts: [],
        };
      }
      return {
        ...state,
        toasts: state.toasts.filter((t) => t.id !== action.toastId),
      };
  }
};

const listeners: Array<(state: State) => void> = [];

let memoryState: State = { toasts: [] };

function dispatch(action: Action) {
  memoryState = reducer(memoryState, action);
  listeners.forEach((listener) => {
    listener(memoryState);
  });
}

type Toast = Omit<ToasterToast, "id">;

function toast({ ...props }: Toast) {
  const id = genId();

  const update = (props: ToasterToast) =>
    dispatch({
      type: "UPDATE_TOAST",
      toast: { ...props, id },
    });
  const dismiss = () => dispatch({ type: "DISMISS_TOAST", toastId: id });

  dispatch({
    type: "ADD_TOAST",
    toast: {
      ...props,
      id,
      open: true,
      onOpenChange: (open) => {
        if (!open) dismiss();
      },
    },
  });

  return {
    id: id,
    dismiss,
    update,
  };
}

function useToast() {
  const [state, setState] = React.useState<State>(memoryState);

  React.useEffect(() => {
    listeners.push(setState);
    return () => {
      const index = listeners.indexOf(setState);
      if (index > -1) {
        listeners.splice(index, 1);
      }
    };
  }, [state]);

  return {
    ...state,
    toast,
    dismiss: (toastId?: string) => dispatch({ type: "DISMISS_TOAST", toastId }),
  };
}

export { useToast, toast };
```

---


## Index.Css Files

### <a id='src-indexcss'></a> `src\index.css`

**File Type:** index.css

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

/* Add to the existing index.css */
@layer components {
  /* Settings page specific styles */
  .settings-section {
    @apply bg-white rounded-lg border shadow-sm;
  }
  
  .settings-header {
    @apply px-6 py-4 border-b;
  }
  
  .settings-content {
    @apply px-6 py-4;
  }
}
```

---


## Lib Files

### <a id='src-lib-utilsts'></a> `src\lib\utils.ts`

**File Type:** utils.ts

```typescript
import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}
```

---


## Main.Tsx Files

### <a id='src-maintsx'></a> `src\main.tsx`

**File Type:** main.tsx

```tsx
import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import "./index.css";

// Set document title
document.title = "StoriVault - Your Gateway to Infinite Stories";

createRoot(document.getElementById("root")!).render(<App />);
```

---


## Pages Files

### <a id='src-pages-auth-GoogleSuccessPagetsx'></a> `src\pages\auth\GoogleSuccessPage.tsx`

**Page Component:** GoogleSuccessPage.tsx

```tsx
import { useEffect, useState } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";
import { LoadingSpinner } from "@/components/ui/loading-spinner";
import { useAuthStore } from "@/store/authStore";
import { AlertCircle, CheckCircle } from "lucide-react";

export function GoogleSuccessPage() {
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const { setTokens, fetchMe } = useAuthStore();
  const [status, setStatus] = useState<"loading" | "success" | "error">("loading");
  const [message, setMessage] = useState("Completing sign in...");

  useEffect(() => {
    const handleGoogleSuccess = async () => {
      try {
        const accessToken = searchParams.get("access_token");
        const refreshToken = searchParams.get("refresh_token");
        const error = searchParams.get("error");

        if (error) {
          console.error("Google auth error:", error);
          setStatus("error");
          setMessage("Google authentication failed. Redirecting...");
          setTimeout(() => {
            navigate("/auth/login?error=google_auth_failed");
          }, 2000);
          return;
        }

        if (!accessToken || !refreshToken) {
          console.error("Missing tokens in callback");
          setStatus("error");
          setMessage("Authentication incomplete. Redirecting...");
          setTimeout(() => {
            navigate("/auth/login?error=missing_tokens");
          }, 2000);
          return;
        }

        // Store tokens
        setTokens(accessToken, refreshToken);

        // Fetch user data
        setMessage("Loading your profile...");
        await fetchMe();

        // Show success message briefly before redirect
        setStatus("success");
        setMessage("Success! Redirecting to your feed...");

        setTimeout(() => {
          navigate("/feed");
        }, 1500);
      } catch (err) {
        console.error("Error in Google callback:", err);
        setStatus("error");
        setMessage("Something went wrong. Redirecting...");
        setTimeout(() => {
          navigate("/auth/login?error=auth_processing_failed");
        }, 2000);
      }
    };

    handleGoogleSuccess();
  }, [searchParams, navigate, setTokens, fetchMe]);

  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center">
      <div className="text-center bg-white p-8 rounded-lg shadow-md max-w-md">
        {status === "loading" && (
          <>
            <LoadingSpinner size="lg" className="mx-auto mb-4" />
            <h2 className="text-xl font-semibold text-gray-900">
              {message}
            </h2>
            <p className="mt-2 text-sm text-gray-600">
              Please wait while we set up your account
            </p>
          </>
        )}

        {status === "success" && (
          <>
            <div className="mx-auto mb-4 w-16 h-16 bg-green-100 rounded-full flex items-center justify-center">
              <CheckCircle className="w-10 h-10 text-green-600" />
            </div>
            <h2 className="text-xl font-semibold text-gray-900">
              {message}
            </h2>
          </>
        )}

        {status === "error" && (
          <>
            <div className="mx-auto mb-4 w-16 h-16 bg-red-100 rounded-full flex items-center justify-center">
              <AlertCircle className="w-10 h-10 text-red-600" />
            </div>
            <h2 className="text-xl font-semibold text-gray-900">
              {message}
            </h2>
            <p className="mt-2 text-sm text-gray-600">
              You'll be redirected to the login page
            </p>
          </>
        )}
      </div>
    </div>
  );
}
```

---

### <a id='src-pages-auth-LoginPagetsx'></a> `src\pages\auth\LoginPage.tsx`

**Page Component:** LoginPage.tsx

```tsx
"use client";

import { useState, useEffect } from "react";
import { Link, useNavigate, useSearchParams } from "react-router-dom";
import { Eye, EyeOff, Mail, Lock, Sparkles, AlertCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Alert, AlertDescription } from "@/components/ui/alert";
import { LoadingSpinner } from "@/components/ui/loading-spinner";
import { Separator } from "@/components/ui/separator";
import { Logo } from "@/components/ui/logo";
import { useAuthStore } from "@/store/authStore";
import { cn } from "@/lib/utils";

export function LoginPage() {
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const [showPassword, setShowPassword] = useState(false);
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [googleError, setGoogleError] = useState<string | null>(null);

  const { login, loginWithGoogle, isLoading, error, clearError } =
    useAuthStore();

  // Check for Google auth errors in URL
  useEffect(() => {
    const error = searchParams.get("error");
    if (error === "google_auth_failed") {
      setGoogleError("Failed to sign in with Google. Please try again.");
    } else if (error === "missing_tokens") {
      setGoogleError("Authentication failed. Please try again.");
    }
  }, [searchParams]);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));

    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: "" }));
    }
    clearError();
    setGoogleError(null);
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
      if (error.message?.includes("sign in with Google")) {
        setErrors({
          email:
            "This account uses Google Sign-in. Please use the Google button below.",
        });
      } else if (error.details) {
        const fieldErrors: Record<string, string> = {};
        Object.entries(error.details).forEach(([field, messages]) => {
          fieldErrors[field] = Array.isArray(messages) ? messages[0] : messages;
        });
        setErrors(fieldErrors);
      }
    }
  };

  const handleGoogleLogin = () => {
    loginWithGoogle();
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

          {/* Error Alerts */}
          {(error || googleError) && (
            <Alert variant="destructive" className="mb-6">
              <AlertCircle className="h-4 w-4" />
              <AlertDescription>{error || googleError}</AlertDescription>
            </Alert>
          )}

          {/* Google Sign In Button */}
          <div className="mb-6">
            <Button
              type="button"
              onClick={handleGoogleLogin}
              variant="outline"
              className="w-full flex items-center justify-center gap-3 py-2.5 px-4 border-2 hover:bg-gray-50 transition-colors"
              disabled={isLoading}
            >
              <svg className="w-5 h-5" viewBox="0 0 24 24">
                <path
                  fill="#4285F4"
                  d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
                />
                <path
                  fill="#34A853"
                  d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
                />
                <path
                  fill="#FBBC05"
                  d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
                />
                <path
                  fill="#EA4335"
                  d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
                />
              </svg>
              <span className="font-medium">Continue with Google</span>
            </Button>
          </div>

          {/* Divider */}
          <div className="relative mb-6">
            <div className="absolute inset-0 flex items-center">
              <Separator />
            </div>
            <div className="relative flex justify-center text-xs uppercase">
              <span className="bg-white px-2 text-gray-500">
                Or continue with email
              </span>
            </div>
          </div>

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

### <a id='src-pages-auth-SignupPagetsx'></a> `src\pages\auth\SignupPage.tsx`

**Page Component:** SignupPage.tsx

```tsx
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
import { Separator } from "@/components/ui/separator";
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

  const { signup, loginWithGoogle, isLoading, error, clearError } =
    useAuthStore();

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

  const handleGoogleSignup = () => {
    loginWithGoogle();
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

          {/* Google Sign Up Button */}
          <div className="mb-6">
            <Button
              type="button"
              onClick={handleGoogleSignup}
              variant="outline"
              className="w-full flex items-center justify-center gap-3 py-2.5 px-4 border-2 hover:bg-gray-50 transition-colors"
              disabled={isLoading}
            >
              <svg className="w-5 h-5" viewBox="0 0 24 24">
                <path
                  fill="#4285F4"
                  d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
                />
                <path
                  fill="#34A853"
                  d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
                />
                <path
                  fill="#FBBC05"
                  d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
                />
                <path
                  fill="#EA4335"
                  d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
                />
              </svg>
              <span className="font-medium">Sign up with Google</span>
            </Button>
          </div>

          {/* Divider */}
          <div className="relative mb-6">
            <div className="absolute inset-0 flex items-center">
              <Separator />
            </div>
            <div className="relative flex justify-center text-xs uppercase">
              <span className="bg-white px-2 text-gray-500">
                Or sign up with email
              </span>
            </div>
          </div>

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

### <a id='src-pages-auth-VerifyEmailPagetsx'></a> `src\pages\auth\VerifyEmailPage.tsx`

**Page Component:** VerifyEmailPage.tsx

```tsx
import { useEffect, useState } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";
import { LoadingSpinner } from "@/components/ui/loading-spinner";
import { Button } from "@/components/ui/button";
import { AlertCircle, CheckCircle, Mail } from "lucide-react";
import { Logo } from "@/components/ui/logo";

export function VerifyEmailPage() {
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const [status, setStatus] = useState<"loading" | "success" | "error">("loading");
  const [message, setMessage] = useState("Verifying your email...");

  useEffect(() => {
    const verifyEmail = async () => {
      const token = searchParams.get("token");

      if (!token) {
        setStatus("error");
        setMessage("Invalid verification link");
        return;
      }

      try {
        const apiUrl = import.meta.env.VITE_API_URL || 'https://usman678zafar-storivault-backend.hf.space';
        const response = await fetch(`${apiUrl}/auth/verify-email`, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ token }),
        });

        const data = await response.json();

        if (response.ok) {
          setStatus("success");
          setMessage("Your email has been verified successfully!");
        } else {
          setStatus("error");
          setMessage(data.detail || "Verification failed. The link may be invalid or expired.");
        }
      } catch (error) {
        console.error("Email verification error:", error);
        setStatus("error");
        setMessage("Something went wrong. Please try again.");
      }
    };

    verifyEmail();
  }, [searchParams]);

  const handleContinue = () => {
    navigate("/auth/login");
  };

  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center py-12 px-4">
      <div className="max-w-md w-full">
        <div className="bg-white py-8 px-6 shadow-xl rounded-lg text-center">
          {/* Logo */}
          <div className="flex justify-center mb-6">
            <Logo size="md" showText={true} />
          </div>

          {/* Loading State */}
          {status === "loading" && (
            <>
              <LoadingSpinner size="lg" className="mx-auto mb-4" />
              <h2 className="text-2xl font-bold text-gray-900 mb-2">
                {message}
              </h2>
              <p className="text-sm text-gray-600">
                Please wait while we verify your email address
              </p>
            </>
          )}

          {/* Success State */}
          {status === "success" && (
            <>
              <div className="mx-auto mb-4 w-16 h-16 bg-green-100 rounded-full flex items-center justify-center">
                <CheckCircle className="w-10 h-10 text-green-600" />
              </div>
              <h2 className="text-2xl font-bold text-gray-900 mb-2">
                Email Verified!
              </h2>
              <p className="text-sm text-gray-600 mb-6">
                {message}
              </p>
              <Button
                onClick={handleContinue}
                className="w-full bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700"
              >
                Continue to Login
              </Button>
            </>
          )}

          {/* Error State */}
          {status === "error" && (
            <>
              <div className="mx-auto mb-4 w-16 h-16 bg-red-100 rounded-full flex items-center justify-center">
                <AlertCircle className="w-10 h-10 text-red-600" />
              </div>
              <h2 className="text-2xl font-bold text-gray-900 mb-2">
                Verification Failed
              </h2>
              <p className="text-sm text-gray-600 mb-6">
                {message}
              </p>
              <div className="space-y-3">
                <Button
                  onClick={handleContinue}
                  className="w-full bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700"
                >
                  Go to Login
                </Button>
                <Button
                  variant="outline"
                  onClick={() => navigate("/auth/signup")}
                  className="w-full"
                >
                  Create New Account
                </Button>
              </div>
            </>
          )}
        </div>

        {/* Help Text */}
        <p className="mt-4 text-center text-xs text-gray-500">
          Need help? Contact{" "}
          <a href="mailto:support@storivault.com" className="text-orange-600 hover:text-orange-500">
            support@storivault.com
          </a>
        </p>
      </div>
    </div>
  );
}
```

---

### <a id='src-pages-CreateStoryPagetsx'></a> `src\pages\CreateStoryPage.tsx`

**Page Component:** CreateStoryPage.tsx

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
  BookOpen,
  Settings,
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
      <div className="min-h-screen bg-gradient-to-br from-orange-50 via-amber-50 to-yellow-50">
        {/* Header */}
        <div className="bg-white border-b shadow-sm sticky top-0 z-10">
          <div className="max-w-6xl mx-auto px-4 py-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-4">
                <Button variant="ghost" onClick={() => navigate(-1)}>
                  <X className="h-5 w-5" />
                </Button>
                <div>
                  <h1 className="text-xl font-bold bg-gradient-to-r from-orange-600 to-amber-600 bg-clip-text text-transparent">
                    Create New Story
                  </h1>
                  <p className="text-xs text-gray-500">Share your creativity with the world</p>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <Button variant="outline" size="sm">
                  <Eye className="h-4 w-4 mr-2" />
                  Preview
                </Button>
                <Button
                  onClick={handleSubmit}
                  disabled={isSubmitting}
                  className="bg-gradient-to-r from-orange-500 to-amber-500 hover:from-orange-600 hover:to-amber-600 text-white"
                >
                  <Save className="h-4 w-4 mr-2" />
                  {isSubmitting ? "Publishing..." : "Publish Story"}
                </Button>
              </div>
            </div>
          </div>
        </div>

        {/* Main Content */}
        <div className="max-w-6xl mx-auto px-4 py-8">

        <Tabs value={activeTab} onValueChange={setActiveTab}>
          <TabsList className="grid w-full grid-cols-1 min-[450px]:grid-cols-3 bg-white shadow-sm rounded-xl p-1 mb-8">
            <TabsTrigger
              value="details"
              className="data-[state=active]:bg-gradient-to-r data-[state=active]:from-orange-500 data-[state=active]:to-amber-500 data-[state=active]:text-white rounded-lg transition-all"
            >
              <ImageIcon className="h-4 w-4 mr-2" />
              Story Details
            </TabsTrigger>
            <TabsTrigger
              value="chapters"
              className="data-[state=active]:bg-gradient-to-r data-[state=active]:from-orange-500 data-[state=active]:to-amber-500 data-[state=active]:text-white rounded-lg transition-all"
            >
              <BookOpen className="h-4 w-4 mr-2" />
              Chapters
            </TabsTrigger>
            <TabsTrigger
              value="settings"
              className="data-[state=active]:bg-gradient-to-r data-[state=active]:from-orange-500 data-[state=active]:to-amber-500 data-[state=active]:text-white rounded-lg transition-all"
            >
              <Settings className="h-4 w-4 mr-2" />
              Settings
            </TabsTrigger>
          </TabsList>

          {/* Story Details Tab */}
          <TabsContent value="details" className="space-y-6 mt-0">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Cover Image */}
              <Card className="bg-white shadow-md border-0 overflow-hidden">
                <CardHeader className="bg-gradient-to-r from-orange-100 to-amber-100">
                  <CardTitle className="text-lg flex items-center gap-2">
                    <ImageIcon className="h-5 w-5 text-orange-600" />
                    Cover Image
                  </CardTitle>
                  <p className="text-xs text-gray-600">Add an eye-catching cover for your story</p>
                </CardHeader>
                <CardContent className="pt-6">
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
              <Card className="bg-white shadow-md border-0">
                <CardHeader className="bg-gradient-to-r from-orange-100 to-amber-100">
                  <CardTitle className="text-lg">Story Information</CardTitle>
                  <p className="text-xs text-gray-600">Tell readers what your story is about</p>
                </CardHeader>
                <CardContent className="pt-6 space-y-4">
                  <div>
                    <Label htmlFor="title" className="text-sm font-semibold text-gray-700">
                      Title *
                    </Label>
                    <Input
                      id="title"
                      value={storyData.title}
                      onChange={(e) =>
                        setStoryData({ ...storyData, title: e.target.value })
                      }
                      placeholder="Enter a captivating title..."
                      className="mt-2 border-gray-300 focus:border-orange-500 focus:ring-orange-500"
                    />
                  </div>

                  <div>
                    <Label htmlFor="description" className="text-sm font-semibold text-gray-700">
                      Description
                    </Label>
                    <Textarea
                      id="description"
                      value={storyData.description}
                      onChange={(e) =>
                        setStoryData({
                          ...storyData,
                          description: e.target.value,
                        })
                      }
                      placeholder="Describe what makes your story unique..."
                      rows={4}
                      className="mt-2 border-gray-300 focus:border-orange-500 focus:ring-orange-500 resize-none"
                    />
                  </div>

                  <div>
                    <Label htmlFor="genre" className="text-sm font-semibold text-gray-700">
                      Genre *
                    </Label>
                    <Select
                      value={storyData.genre}
                      onValueChange={(value) =>
                        setStoryData({ ...storyData, genre: value })
                      }
                    >
                      <SelectTrigger className="mt-2 border-gray-300 focus:border-orange-500 focus:ring-orange-500">
                        <SelectValue placeholder="Choose a genre..." />
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
                    <Label htmlFor="tags" className="text-sm font-semibold text-gray-700">
                      Tags
                    </Label>
                    <p className="text-xs text-gray-500 mb-2">Help readers discover your story</p>
                    <div className="flex gap-2">
                      <Input
                        id="tags"
                        value={currentTag}
                        onChange={(e) => setCurrentTag(e.target.value)}
                        placeholder="e.g., romance, adventure..."
                        onKeyPress={(e) => {
                          if (e.key === "Enter") {
                            e.preventDefault();
                            addTag();
                          }
                        }}
                        className="border-gray-300 focus:border-orange-500 focus:ring-orange-500"
                      />
                      <Button
                        type="button"
                        onClick={addTag}
                        className="bg-gradient-to-r from-orange-500 to-amber-500 hover:from-orange-600 hover:to-amber-600"
                      >
                        <Plus className="h-4 w-4" />
                      </Button>
                    </div>
                    <div className="flex flex-wrap gap-2 mt-3">
                      {storyData.tags.map((tag) => (
                        <Badge
                          key={tag}
                          className="bg-gradient-to-r from-orange-100 to-amber-100 text-orange-700 hover:from-orange-200 hover:to-amber-200"
                        >
                          {tag}
                          <button className="ml-2" onClick={() => removeTag(tag)}>
                            <X className="h-3 w-3" />
                          </button>
                        </Badge>
                      ))}
                    </div>
                  </div>
                </CardContent>
              </Card>
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
      </div>
    </MainLayout>
  );
}
```

---

### <a id='src-pages-EditStoryPagetsx'></a> `src\pages\EditStoryPage.tsx`

**Page Component:** EditStoryPage.tsx

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

### <a id='src-pages-FeedPagetsx'></a> `src\pages\FeedPage.tsx`

**Page Component:** FeedPage.tsx

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

### <a id='src-pages-HomePagetsx'></a> `src\pages\HomePage.tsx`

**Page Component:** HomePage.tsx

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

### <a id='src-pages-Indextsx'></a> `src\pages\Index.tsx`

**Page Component:** Index.tsx

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

### <a id='src-pages-NotFoundtsx'></a> `src\pages\NotFound.tsx`

**Page Component:** NotFound.tsx

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

### <a id='src-pages-ProfilePagetsx'></a> `src\pages\ProfilePage.tsx`

**Page Component:** ProfilePage.tsx

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
  Home,
  Bell,
  MessageSquare,
  Heart,
  Archive,
  Clock,
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
import { storiesApi, usersApi, libraryApi } from "@/apis";
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

  // Cover image state
  const [newCoverImage, setNewCoverImage] = useState<File | null>(null);
  const [coverImagePreview, setCoverImagePreview] = useState<string>("");
  const [showCoverCropper, setShowCoverCropper] = useState(false);

  // Cropper state
  const [showCropper, setShowCropper] = useState(false);
  const [imageToCrop, setImageToCrop] = useState<string>("");
  const [crop, setCrop] = useState<Point>({ x: 0, y: 0 });
  const [zoom, setZoom] = useState(1);
  const [rotation, setRotation] = useState(0);
  const [croppedAreaPixels, setCroppedAreaPixels] = useState<Area | null>(null);
  const [cropType, setCropType] = useState<'profile' | 'cover'>('profile');

  // Profile picture modal viewer
  const [showProfilePicModal, setShowProfilePicModal] = useState(false);
  const [modalImageUrl, setModalImageUrl] = useState<string>("");

  const isOwnProfile = user?.username === username;

  useEffect(() => {
    console.log('Profile Debug:', {
      username,
      userUsername: user?.username,
      isOwnProfile,
      user: { id: user?.id, username: user?.username, profile_pic: user?.profile_pic, cover_image: user?.cover_image }
    });
    if (username) {
      fetchProfileData();
    }
  }, [username, user]);

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
      // Try to load from backend first
      try {
        const response = await libraryApi.getSavedStories(1, 100);
        setSavedStories(response.items);
        // Update localStorage as backup
        const savedIds = response.items.map(s => s.id);
        localStorage.setItem("saved_stories", JSON.stringify(savedIds));
        return;
      } catch (error) {
        console.error("Failed to fetch saved stories from backend:", error);
      }

      // Fallback to localStorage
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
        setCropType('profile');
        setShowCropper(true);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleCoverImageSelect = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      if (file.size > 10 * 1024 * 1024) {
        addToast({
          title: "File too large",
          description: "Cover image must be less than 10MB",
          type: "error",
        });
        return;
      }

      const reader = new FileReader();
      reader.onloadend = () => {
        setImageToCrop(reader.result as string);
        setCropType('cover');
        setShowCropper(true);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleRemoveCoverImage = async () => {
    try {
      const updatedUser = await usersApi.deleteCoverImage();
      setProfileUser(updatedUser);
      updateUser(updatedUser);
      setCoverImagePreview("");
      setNewCoverImage(null);
      addToast({
        title: "Cover image removed",
        description: "Your cover image has been removed",
        type: "success",
      });
    } catch (error) {
      addToast({
        title: "Error",
        description: "Failed to remove cover image",
        type: "error",
      });
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

      if (cropType === 'profile') {
        const croppedFile = new File([croppedBlob], "profile.jpg", {
          type: "image/jpeg",
        });

        setNewProfilePic(croppedFile);
        const reader = new FileReader();
        reader.onloadend = () => {
          setProfilePicPreview(reader.result as string);
        };
        reader.readAsDataURL(croppedFile);
      } else {
        const croppedFile = new File([croppedBlob], "cover.jpg", {
          type: "image/jpeg",
        });

        setNewCoverImage(croppedFile);
        const reader = new FileReader();
        reader.onloadend = () => {
          setCoverImagePreview(reader.result as string);
        };
        reader.readAsDataURL(croppedFile);
      }

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

      // Upload new cover image if selected
      if (newCoverImage) {
        try {
          const updatedUser = await usersApi.uploadCoverImage(newCoverImage);
          setProfileUser(updatedUser);
          updateUser(updatedUser);
          setCoverImagePreview(updatedUser.cover_image || "");
          addToast({
            title: "Cover image updated",
            description: "Your cover image has been updated successfully",
            type: "success",
          });
        } catch (error) {
          addToast({
            title: "Error",
            description: "Failed to upload cover image",
            type: "error",
          });
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
      setNewCoverImage(null);

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

  const handleRemoveFromSaved = async (storyId: string) => {
    try {
      // Try to remove from backend
      await libraryApi.removeStory(storyId);
    } catch (error) {
      console.error("Failed to remove from backend:", error);
    }

    // Update localStorage
    const savedIds = JSON.parse(localStorage.getItem("saved_stories") || "[]");
    const updated = savedIds.filter((id: string) => id !== storyId);
    localStorage.setItem("saved_stories", JSON.stringify(updated));

    // Update UI
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
      <div className="max-w-5xl mx-auto">
        {/* Cover Image */}
        <div className="relative w-full h-48 md:h-64 bg-gradient-to-r from-orange-200 to-amber-200 overflow-hidden">
          {profileUser.cover_image || coverImagePreview ? (
            <img
              src={coverImagePreview || profileUser.cover_image || undefined}
              alt="Cover"
              className="w-full h-full object-cover"
            />
          ) : null}

          {isOwnProfile && (
            <div className="absolute top-4 right-4 flex gap-2">
              <label>
                <Button
                  variant="secondary"
                  size="sm"
                  className="bg-white/90 hover:bg-white"
                  onClick={(e) => {
                    e.preventDefault();
                    document.getElementById('cover-upload')?.click();
                  }}
                >
                  <Camera className="h-4 w-4 mr-2" />
                  {profileUser.cover_image ? 'Change Cover' : 'Add Cover'}
                </Button>
                <input
                  id="cover-upload"
                  type="file"
                  accept="image/*"
                  onChange={handleCoverImageSelect}
                  className="hidden"
                />
              </label>

              {profileUser.cover_image && (
                <Button
                  variant="secondary"
                  size="sm"
                  className="bg-white/90 hover:bg-white"
                  onClick={handleRemoveCoverImage}
                >
                  <Trash2 className="h-4 w-4" />
                </Button>
              )}
            </div>
          )}
        </div>

        {/* Profile Content */}
        <div className="px-4 py-8">
          {/* Profile Header */}
          <div className="relative mb-8">
            {/* Profile Picture - Positioned to overlap cover image */}
            <div className="flex justify-center md:justify-start -mt-16 md:absolute md:left-4 md:top-0">
              <div className="flex-shrink-0 relative">
                <Avatar
                  className="h-28 w-28 sm:h-32 sm:w-32 md:h-40 md:w-40 border-4 border-white shadow-lg cursor-pointer hover:opacity-90 transition-opacity"
                  onClick={() => {
                    setModalImageUrl(profileUser.profile_pic || `https://api.dicebear.com/7.x/avataaars/svg?seed=${profileUser.username}`);
                    setShowProfilePicModal(true);
                  }}
                >
                  <AvatarImage src={profileUser.profile_pic || undefined} />
                  <AvatarFallback className="text-2xl md:text-3xl bg-gradient-to-br from-primary/20 to-primary/10">
                    {profileUser.username?.[0].toUpperCase()}
                  </AvatarFallback>
                </Avatar>
              </div>
            </div>

            {/* Profile Info */}
            <div className="flex-1 w-full pt-6 md:ml-48 md:pt-0">
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

        {/* Desktop Sidebar & Mobile Bottom Nav */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 mt-6">
          {/* Sidebar - Hidden on mobile, shown on desktop */}
          <aside className="hidden lg:block lg:col-span-3">
            <Card className="sticky top-20">
              <div className="p-4 space-y-1">
                <Button
                  variant="ghost"
                  className="w-full justify-start gap-3 hover:bg-gray-100"
                  onClick={() => navigate("/")}
                >
                  <Home className="h-5 w-5" />
                  <span>Home</span>
                </Button>

                <Button
                  variant="ghost"
                  className="w-full justify-start gap-3 hover:bg-gray-100"
                  onClick={() => navigate("/stories")}
                >
                  <BookOpen className="h-5 w-5" />
                  <span>Explore Stories</span>
                </Button>

                {isOwnProfile && (
                  <>
                    <Separator className="my-2" />

                    <Button
                      variant="ghost"
                      className="w-full justify-start gap-3 hover:bg-gray-100"
                      onClick={() => setActiveTab("saved")}
                    >
                      <Bookmark className="h-5 w-5" />
                      <span>Saved</span>
                    </Button>

                    <Button
                      variant="ghost"
                      className="w-full justify-start gap-3 hover:bg-gray-100"
                      onClick={() => navigate("/notifications")}
                    >
                      <Bell className="h-5 w-5" />
                      <span>Notifications</span>
                    </Button>

                    <Button
                      variant="ghost"
                      className="w-full justify-start gap-3 hover:bg-gray-100"
                      onClick={() => navigate("/messages")}
                    >
                      <MessageSquare className="h-5 w-5" />
                      <span>Messages</span>
                    </Button>

                    <Separator className="my-2" />

                    <Button
                      variant="ghost"
                      className="w-full justify-start gap-3 hover:bg-gray-100"
                      onClick={() => navigate("/settings")}
                    >
                      <Settings className="h-5 w-5" />
                      <span>Settings</span>
                    </Button>
                  </>
                )}
              </div>
            </Card>
          </aside>

          {/* Main Content Area */}
          <div className="lg:col-span-9">
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
            className="fixed bottom-20 lg:bottom-6 right-6 h-14 w-14 rounded-full shadow-lg bg-gradient-to-r from-orange-500 to-amber-500 hover:from-orange-600 hover:to-amber-600 z-40"
            size="icon"
            onClick={() => navigate("/stories/create")}
          >
            <Plus className="h-6 w-6" />
          </Button>
        )}
          </div>
        </div>

        {/* Mobile Bottom Navigation - Shown only on mobile */}
        {isOwnProfile && (
          <div className="lg:hidden fixed bottom-0 left-0 right-0 bg-white border-t shadow-lg z-50">
            <div className="flex items-center justify-around py-3 px-2">
              <Button
                variant="ghost"
                size="sm"
                className="flex flex-col items-center gap-1 h-auto py-2 px-3"
                onClick={() => navigate("/")}
              >
                <Home className="h-5 w-5" />
                <span className="text-xs">Home</span>
              </Button>

              <Button
                variant="ghost"
                size="sm"
                className="flex flex-col items-center gap-1 h-auto py-2 px-3"
                onClick={() => navigate("/stories")}
              >
                <BookOpen className="h-5 w-5" />
                <span className="text-xs">Explore</span>
              </Button>

              <Button
                variant="ghost"
                size="sm"
                className="flex flex-col items-center gap-1 h-auto py-2 px-3"
                onClick={() => setActiveTab("saved")}
              >
                <Bookmark className="h-5 w-5" />
                <span className="text-xs">Saved</span>
              </Button>

              <Button
                variant="ghost"
                size="sm"
                className="flex flex-col items-center gap-1 h-auto py-2 px-3"
                onClick={() => navigate("/notifications")}
              >
                <Bell className="h-5 w-5" />
                <span className="text-xs">Alerts</span>
              </Button>

              <Button
                variant="ghost"
                size="sm"
                className="flex flex-col items-center gap-1 h-auto py-2 px-3"
                onClick={() => navigate("/settings")}
              >
                <Settings className="h-5 w-5" />
                <span className="text-xs">Settings</span>
              </Button>
            </div>
          </div>
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
                  {cropType === 'profile' ? 'Crop Profile Picture' : 'Crop Cover Image'}
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
                {cropType === 'profile'
                  ? 'Adjust the image to fit perfectly in your round profile picture'
                  : 'Adjust the image for your profile cover'}
              </p>
            </div>

            {/* Cropper Area */}
            <div className="relative h-96 bg-gray-900">
              <Cropper
                image={imageToCrop}
                crop={crop}
                zoom={zoom}
                rotation={rotation}
                aspect={cropType === 'profile' ? 1 : 16/9}
                cropShape={cropType === 'profile' ? "round" : "rect"}
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

      {/* Profile Picture Modal Viewer */}
      {showProfilePicModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm" onClick={() => setShowProfilePicModal(false)}>
          <div className="relative max-w-md w-full aspect-square">
            <Button
              variant="ghost"
              size="icon"
              className="absolute top-4 right-4 bg-white/20 hover:bg-white/30 rounded-full text-white z-10"
              onClick={() => setShowProfilePicModal(false)}
            >
              <X className="h-6 w-6" />
            </Button>
            <div className="w-full h-full rounded-full overflow-hidden border-4 border-white shadow-2xl">
              <img
                src={modalImageUrl}
                alt="Profile"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      )}
        </div>
    </MainLayout>
  );
}
```

---

### <a id='src-pages-SettingsPagetsx'></a> `src\pages\SettingsPage.tsx`

**Page Component:** SettingsPage.tsx

```tsx
"use client";

import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import {
  User,
  Lock,
  Bell,
  Eye,
  Shield,
  Trash2,
  Save,
  ChevronLeft,
  Mail,
  Smartphone,
  Moon,
  Sun,
  Monitor,
  Globe,
  BookOpen,
  Download,
  AlertCircle,
  Check,
  X,
  Key,
  LogOut,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Switch } from "@/components/ui/switch";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { Separator } from "@/components/ui/separator";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { MainLayout } from "@/components/layout/main-layout";
import { LoadingSpinner } from "@/components/ui/loading-spinner";
import { useAuthStore } from "@/store/authStore";
import { useUiStore } from "@/store/uiStore";
import { usersApi } from "@/apis";
import { cn } from "@/lib/utils";

interface SettingsState {
  // Account Settings
  email: string;
  username: string;
  currentPassword: string;
  newPassword: string;
  confirmPassword: string;

  // Privacy Settings
  profileVisibility: "public" | "private" | "friends";
  showEmail: boolean;
  showReadingActivity: boolean;
  allowMessages: "everyone" | "following" | "none";
  defaultStoryVisibility: "public" | "private";

  // Notifications
  emailNotifications: boolean;
  pushNotifications: boolean;
  notifyNewFollower: boolean;
  notifyNewComment: boolean;
  notifyNewVote: boolean;
  notifyStoryUpdate: boolean;
  notifyWeeklyDigest: boolean;

  // Display
  theme: "light" | "dark" | "system";
  fontSize: "small" | "medium" | "large";
  readingMode: boolean;
  showMatureContent: boolean;

  // Security
  twoFactorEnabled: boolean;
  sessionTimeout: number;
  loginAlerts: boolean;
}

export function SettingsPage() {
  const navigate = useNavigate();
  const { user, isAuthenticated, logout } = useAuthStore();
  const { addToast, theme, setTheme } = useUiStore();

  const [activeTab, setActiveTab] = useState("account");
  const [isSaving, setIsSaving] = useState(false);
  const [hasChanges, setHasChanges] = useState(false);
  const [showDeleteDialog, setShowDeleteDialog] = useState(false);
  const [showPasswordDialog, setShowPasswordDialog] = useState(false);
  const [deleteConfirmText, setDeleteConfirmText] = useState("");

  // Load saved preferences
  const [settings, setSettings] = useState<SettingsState>({
    // Account
    email: user?.email || "",
    username: user?.username || "",
    currentPassword: "",
    newPassword: "",
    confirmPassword: "",

    // Privacy
    profileVisibility: "public",
    showEmail: false,
    showReadingActivity: true,
    allowMessages: "everyone",
    defaultStoryVisibility: "public",

    // Notifications
    emailNotifications: true,
    pushNotifications: false,
    notifyNewFollower: true,
    notifyNewComment: true,
    notifyNewVote: true,
    notifyStoryUpdate: true,
    notifyWeeklyDigest: false,

    // Display
    theme: theme || "system",
    fontSize: "medium",
    readingMode: false,
    showMatureContent: false,

    // Security
    twoFactorEnabled: false,
    sessionTimeout: 30,
    loginAlerts: true,
  });

  // Load saved settings from backend
  useEffect(() => {
    const loadSettings = async () => {
      try {
        // Try to load from backend first
        const backendSettings = await usersApi.getSettings();
        if (backendSettings && Object.keys(backendSettings).length > 0) {
          setSettings((prev) => ({ ...prev, ...backendSettings }));
          // Also save to localStorage as backup
          localStorage.setItem("user-settings", JSON.stringify(backendSettings));
        } else {
          // Fallback to localStorage
          const savedSettings = localStorage.getItem("user-settings");
          if (savedSettings) {
            try {
              const parsed = JSON.parse(savedSettings);
              setSettings((prev) => ({ ...prev, ...parsed }));
            } catch (error) {
              console.error("Failed to parse saved settings:", error);
            }
          }
        }
      } catch (error) {
        console.error("Failed to load settings from backend:", error);
        // Fallback to localStorage
        const savedSettings = localStorage.getItem("user-settings");
        if (savedSettings) {
          try {
            const parsed = JSON.parse(savedSettings);
            setSettings((prev) => ({ ...prev, ...parsed }));
          } catch (error) {
            console.error("Failed to parse saved settings:", error);
          }
        }
      }

      // Load reading preferences
      const readingPrefs = localStorage.getItem("reading-preferences");
      if (readingPrefs) {
        try {
          const parsed = JSON.parse(readingPrefs);
          setSettings((prev) => ({
            ...prev,
            fontSize:
              parsed.fontSize === 18
                ? "small"
                : parsed.fontSize === 22
                ? "large"
                : "medium",
          }));
        } catch (error) {
          console.error("Failed to load reading preferences:", error);
        }
      }
    };

    loadSettings();
  }, []);

  // Save settings to localStorage when they change
  useEffect(() => {
    if (hasChanges) {
      const settingsToSave = { ...settings };
      delete settingsToSave.currentPassword;
      delete settingsToSave.newPassword;
      delete settingsToSave.confirmPassword;
      localStorage.setItem("user-settings", JSON.stringify(settingsToSave));
    }
  }, [settings, hasChanges]);

  const handleSettingChange = (key: keyof SettingsState, value: any) => {
    setSettings((prev) => ({ ...prev, [key]: value }));
    setHasChanges(true);
  };

  const handleSaveSettings = async () => {
    setIsSaving(true);
    try {
      const settingsToSave = { ...settings };
      delete settingsToSave.currentPassword;
      delete settingsToSave.newPassword;
      delete settingsToSave.confirmPassword;
      delete settingsToSave.email;
      delete settingsToSave.username;

      // Save settings to backend
      try {
        await usersApi.updateSettings(settingsToSave);
      } catch (error) {
        console.error("Failed to save settings to backend:", error);
        // Continue anyway and save to localStorage
      }

      // Also save to localStorage as backup
      localStorage.setItem("user-settings", JSON.stringify(settingsToSave));

      // Apply theme
      setTheme(settings.theme as any);

      addToast({
        title: "Settings saved",
        description: "Your preferences have been updated successfully.",
        type: "success",
      });
      setHasChanges(false);
    } catch (error) {
      addToast({
        title: "Error",
        description: "Failed to save settings. Please try again.",
        type: "error",
      });
    } finally {
      setIsSaving(false);
    }
  };

  const handlePasswordChange = async () => {
    // Validation
    if (!settings.currentPassword || !settings.newPassword) {
      addToast({
        title: "Required fields",
        description: "Please fill in all password fields",
        type: "error",
      });
      return;
    }

    if (settings.newPassword !== settings.confirmPassword) {
      addToast({
        title: "Passwords don't match",
        description: "New password and confirmation must match",
        type: "error",
      });
      return;
    }

    if (settings.newPassword.length < 8) {
      addToast({
        title: "Password too short",
        description: "Password must be at least 8 characters",
        type: "error",
      });
      return;
    }

    setIsSaving(true);
    try {
      await usersApi.changePassword({
        old_password: settings.currentPassword,
        new_password: settings.newPassword,
      });

      addToast({
        title: "Password changed",
        description: "Your password has been updated successfully.",
        type: "success",
      });

      // Clear password fields
      setSettings((prev) => ({
        ...prev,
        currentPassword: "",
        newPassword: "",
        confirmPassword: "",
      }));
      setShowPasswordDialog(false);
    } catch (error: any) {
      addToast({
        title: "Error",
        description: error.message || "Failed to change password",
        type: "error",
      });
    } finally {
      setIsSaving(false);
    }
  };

  const handleDeleteAccount = async () => {
    if (deleteConfirmText !== user?.username) {
      addToast({
        title: "Confirmation required",
        description: "Please type your username to confirm deletion",
        type: "error",
      });
      return;
    }

    try {
      await usersApi.deleteAccount();
      logout();
      navigate("/");
      addToast({
        title: "Account deleted",
        description: "Your account has been permanently deleted.",
        type: "info",
      });
    } catch (error) {
      addToast({
        title: "Error",
        description: "Failed to delete account. Please try again.",
        type: "error",
      });
    }
  };

  const handleExportData = () => {
    // Create a data export
    const exportData = {
      user: {
        username: user?.username,
        email: user?.email,
        bio: user?.bio,
        created_at: user?.created_at,
      },
      settings: settings,
      readingHistory: JSON.parse(localStorage.getItem("read_stories") || "[]"),
      savedStories: JSON.parse(localStorage.getItem("saved_stories") || "[]"),
      exportedAt: new Date().toISOString(),
    };

    const blob = new Blob([JSON.stringify(exportData, null, 2)], {
      type: "application/json",
    });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = `storivault_data_${user?.username}_${Date.now()}.json`;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);

    addToast({
      title: "Data exported",
      description: "Your data has been downloaded successfully.",
      type: "success",
    });
  };

  if (!isAuthenticated) {
    navigate("/auth/login");
    return null;
  }

  return (
    <MainLayout showFooter={false}>
      <div className="min-h-screen bg-gray-50">
        {/* Header */}
        <div className="bg-white border-b sticky top-0 z-40">
          <div className="max-w-5xl mx-auto px-4 py-3 sm:py-4">
            {/* Mobile Header - Stack vertically */}
            <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
              <div className="flex items-center gap-3 min-w-0">
                <Button variant="ghost" size="sm" onClick={() => navigate(-1)} className="flex-shrink-0">
                  <ChevronLeft className="h-4 w-4 sm:mr-2" />
                  <span className="hidden sm:inline">Back</span>
                </Button>
                <h1 className="text-lg sm:text-xl font-bold truncate">Settings</h1>
              </div>
              {hasChanges && (
                <Button
                  onClick={handleSaveSettings}
                  disabled={isSaving}
                  size="sm"
                  className="bg-green-600 hover:bg-green-700 w-full sm:w-auto"
                >
                  {isSaving ? (
                    <>
                      <LoadingSpinner size="sm" className="mr-2" />
                      <span className="hidden sm:inline">Saving...</span>
                      <span className="sm:hidden">Saving</span>
                    </>
                  ) : (
                    <>
                      <Save className="h-4 w-4 mr-2" />
                      <span className="hidden sm:inline">Save Changes</span>
                      <span className="sm:hidden">Save</span>
                    </>
                  )}
                </Button>
              )}
            </div>
          </div>
        </div>

        {/* Main Content */}
        <div className="max-w-5xl mx-auto px-3 sm:px-4 py-4 sm:py-6">
          <Tabs value={activeTab} onValueChange={setActiveTab}>
            {/* Responsive Tab Navigation */}
            <div className="mb-4 sm:mb-6">
              <TabsList className="h-auto p-1 bg-white grid grid-cols-3 sm:flex sm:flex-wrap sm:w-auto">
                <TabsTrigger
                  value="account"
                  className="flex-col sm:flex-row gap-1 sm:gap-2 text-xs sm:text-sm px-2 py-2.5 sm:px-4 h-auto"
                >
                  <User className="h-3 w-3 sm:h-4 sm:w-4" />
                  <span className="truncate">Account</span>
                </TabsTrigger>
                <TabsTrigger
                  value="privacy"
                  className="flex-col sm:flex-row gap-1 sm:gap-2 text-xs sm:text-sm px-2 py-2.5 sm:px-4 h-auto"
                >
                  <Eye className="h-3 w-3 sm:h-4 sm:w-4" />
                  <span className="truncate">Privacy</span>
                </TabsTrigger>
                <TabsTrigger
                  value="notifications"
                  className="flex-col sm:flex-row gap-1 sm:gap-2 text-xs sm:text-sm px-2 py-2.5 sm:px-4 h-auto"
                >
                  <Bell className="h-3 w-3 sm:h-4 sm:w-4" />
                  <span className="truncate">Notifications</span>
                </TabsTrigger>
                <TabsTrigger
                  value="display"
                  className="flex-col sm:flex-row gap-1 sm:gap-2 text-xs sm:text-sm px-2 py-2.5 sm:px-4 h-auto"
                >
                  <Monitor className="h-3 w-3 sm:h-4 sm:w-4" />
                  <span className="truncate">Display</span>
                </TabsTrigger>
                <TabsTrigger
                  value="security"
                  className="flex-col sm:flex-row gap-1 sm:gap-2 text-xs sm:text-sm px-2 py-2.5 sm:px-4 h-auto"
                >
                  <Shield className="h-3 w-3 sm:h-4 sm:w-4" />
                  <span className="truncate">Security</span>
                </TabsTrigger>
              </TabsList>
            </div>

            {/* Account Settings */}
            <TabsContent value="account" className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle>Account Information</CardTitle>
                  <CardDescription>
                    Manage your basic account details
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div>
                    <Label htmlFor="username">Username</Label>
                    <Input
                      id="username"
                      value={settings.username}
                      disabled
                      className="mt-1 bg-gray-50"
                    />
                    <p className="text-xs text-gray-500 mt-1">
                      Usernames cannot be changed
                    </p>
                  </div>

                  <div>
                    <Label htmlFor="email">Email Address</Label>
                    <div className="flex flex-col sm:flex-row gap-2 mt-1">
                      <Input
                        id="email"
                        type="email"
                        value={settings.email}
                        disabled
                        className="flex-1 bg-gray-50"
                      />
                      <Button variant="outline" size="sm" disabled className="w-full sm:w-auto">
                        <Mail className="h-4 w-4 sm:mr-2" />
                        <span className="sm:inline">Verify</span>
                      </Button>
                    </div>
                    <p className="text-xs text-gray-500 mt-1">
                      Contact support to change your email
                    </p>
                  </div>

                  <Separator />

                  <div>
                    <h3 className="font-medium mb-3">Password</h3>
                    {user?.is_google_user ? (
                      <div className="space-y-2">
                        <Alert>
                          <AlertCircle className="h-4 w-4" />
                          <AlertDescription>
                            You signed in with Google. Password management is handled through your Google account.
                          </AlertDescription>
                        </Alert>
                      </div>
                    ) : (
                      <Button
                        variant="outline"
                        onClick={() => setShowPasswordDialog(true)}
                      >
                        <Key className="h-4 w-4 mr-2" />
                        Change Password
                      </Button>
                    )}
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Profile Settings</CardTitle>
                  <CardDescription>
                    Manage your public profile information
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <Button
                    variant="outline"
                    onClick={() => navigate(`/profile/${user?.username}`)}
                  >
                    <User className="h-4 w-4 mr-2" />
                    Edit Profile
                  </Button>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Data Management</CardTitle>
                  <CardDescription>
                    Export or delete your account data
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div>
                    <Button variant="outline" onClick={handleExportData}>
                      <Download className="h-4 w-4 mr-2" />
                      Export My Data
                    </Button>
                    <p className="text-sm text-gray-500 mt-2">
                      Download a copy of your StoriVault data
                    </p>
                  </div>

                  <Separator />

                  <div>
                    <Button
                      variant="destructive"
                      onClick={() => setShowDeleteDialog(true)}
                    >
                      <Trash2 className="h-4 w-4 mr-2" />
                      Delete Account
                    </Button>
                    <p className="text-sm text-gray-500 mt-2">
                      Permanently delete your account and all data
                    </p>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            {/* Privacy Settings */}
            <TabsContent value="privacy" className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle>Profile Privacy</CardTitle>
                  <CardDescription>
                    Control who can see your profile and activity
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div>
                    <Label>Profile Visibility</Label>
                    <RadioGroup
                      value={settings.profileVisibility}
                      onValueChange={(value) =>
                        handleSettingChange("profileVisibility", value)
                      }
                      className="mt-2 space-y-2"
                    >
                      <div className="flex items-start space-x-3">
                        <RadioGroupItem value="public" id="public" className="mt-0.5" />
                        <Label htmlFor="public" className="font-normal cursor-pointer">
                          <div className="flex items-center gap-2">
                            <Globe className="h-4 w-4 flex-shrink-0" />
                            <span className="font-medium">Public</span>
                          </div>
                          <p className="text-xs text-gray-500 mt-1 leading-relaxed">
                            Anyone can view your profile
                          </p>
                        </Label>
                      </div>
                      <div className="flex items-start space-x-3">
                        <RadioGroupItem value="friends" id="friends" className="mt-0.5" />
                        <Label htmlFor="friends" className="font-normal cursor-pointer">
                          <div className="flex items-center gap-2">
                            <User className="h-4 w-4 flex-shrink-0" />
                            <span className="font-medium">Following Only</span>
                          </div>
                          <p className="text-xs text-gray-500 mt-1 leading-relaxed">
                            Only people you follow can see your full profile
                          </p>
                        </Label>
                      </div>
                      <div className="flex items-start space-x-3">
                        <RadioGroupItem value="private" id="private" className="mt-0.5" />
                        <Label htmlFor="private" className="font-normal cursor-pointer">
                          <div className="flex items-center gap-2">
                            <Lock className="h-4 w-4 flex-shrink-0" />
                            <span className="font-medium">Private</span>
                          </div>
                          <p className="text-xs text-gray-500 mt-1 leading-relaxed">
                            Only you can see your profile
                          </p>
                        </Label>
                      </div>
                    </RadioGroup>
                  </div>

                  <Separator />

                  <div className="space-y-4">
                    <div className="flex items-start justify-between gap-4">
                      <div className="space-y-1 min-w-0 flex-1">
                        <Label htmlFor="show-email">Show Email Address</Label>
                        <p className="text-xs text-gray-500 leading-relaxed">
                          Display your email on your profile
                        </p>
                      </div>
                      <Switch
                        id="show-email"
                        checked={settings.showEmail}
                        onCheckedChange={(checked) =>
                          handleSettingChange("showEmail", checked)
                        }
                        className="flex-shrink-0 mt-1"
                      />
                    </div>

                    <div className="flex items-start justify-between gap-4">
                      <div className="space-y-1 min-w-0 flex-1">
                        <Label htmlFor="show-activity">
                          Show Reading Activity
                        </Label>
                        <p className="text-xs text-gray-500 leading-relaxed">
                          Let others see what you're reading
                        </p>
                      </div>
                      <Switch
                        id="show-activity"
                        checked={settings.showReadingActivity}
                        onCheckedChange={(checked) =>
                          handleSettingChange("showReadingActivity", checked)
                        }
                        className="flex-shrink-0 mt-1"
                      />
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Messaging</CardTitle>
                  <CardDescription>
                    Control who can send you messages
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div>
                    <Label htmlFor="messages" className="block mb-3">Allow messages from</Label>
                    <Select
                      value={settings.allowMessages}
                      onValueChange={(value) =>
                        handleSettingChange("allowMessages", value)
                      }
                    >
                      <SelectTrigger className="w-full">
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent className="w-full">
                        <SelectItem value="everyone">Everyone</SelectItem>
                        <SelectItem value="following">
                          People I follow
                        </SelectItem>
                        <SelectItem value="none">No one</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Story Defaults</CardTitle>
                  <CardDescription>
                    Default settings for new stories
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div>
                    <Label htmlFor="story-visibility" className="block mb-3">
                      Default Story Visibility
                    </Label>
                    <Select
                      value={settings.defaultStoryVisibility}
                      onValueChange={(value) =>
                        handleSettingChange("defaultStoryVisibility", value)
                      }
                    >
                      <SelectTrigger className="w-full">
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent className="w-full">
                        <SelectItem value="public">Public</SelectItem>
                        <SelectItem value="private">Private</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            {/* Notification Settings */}
            <TabsContent value="notifications" className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle>Notification Channels</CardTitle>
                  <CardDescription>
                    Choose how you want to receive notifications
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex items-start justify-between gap-4">
                    <div className="space-y-1 min-w-0 flex-1">
                      <Label htmlFor="email-notif">Email Notifications</Label>
                      <p className="text-xs text-gray-500 leading-relaxed">
                        Receive notifications via email
                      </p>
                    </div>
                    <Switch
                      id="email-notif"
                      checked={settings.emailNotifications}
                      onCheckedChange={(checked) =>
                        handleSettingChange("emailNotifications", checked)
                      }
                      className="flex-shrink-0 mt-1"
                    />
                  </div>

                  <div className="flex items-start justify-between gap-4">
                    <div className="space-y-1 min-w-0 flex-1">
                      <Label htmlFor="push-notif">Push Notifications</Label>
                      <p className="text-xs text-gray-500 leading-relaxed">
                        Browser push notifications
                      </p>
                    </div>
                    <Switch
                      id="push-notif"
                      checked={settings.pushNotifications}
                      onCheckedChange={(checked) =>
                        handleSettingChange("pushNotifications", checked)
                      }
                      className="flex-shrink-0 mt-1"
                    />
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Activity Notifications</CardTitle>
                  <CardDescription>
                    Get notified about interactions
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex items-center justify-between gap-4">
                    <Label htmlFor="follower-notif" className="flex-1 cursor-pointer">New Followers</Label>
                    <Switch
                      id="follower-notif"
                      checked={settings.notifyNewFollower}
                      onCheckedChange={(checked) =>
                        handleSettingChange("notifyNewFollower", checked)
                      }
                      className="flex-shrink-0"
                    />
                  </div>

                  <div className="flex items-center justify-between gap-4">
                    <Label htmlFor="comment-notif" className="flex-1 cursor-pointer">New Comments</Label>
                    <Switch
                      id="comment-notif"
                      checked={settings.notifyNewComment}
                      onCheckedChange={(checked) =>
                        handleSettingChange("notifyNewComment", checked)
                      }
                      className="flex-shrink-0"
                    />
                  </div>

                  <div className="flex items-center justify-between gap-4">
                    <Label htmlFor="vote-notif" className="flex-1 cursor-pointer">New Votes</Label>
                    <Switch
                      id="vote-notif"
                      checked={settings.notifyNewVote}
                      onCheckedChange={(checked) =>
                        handleSettingChange("notifyNewVote", checked)
                      }
                      className="flex-shrink-0"
                    />
                  </div>

                  <div className="flex items-center justify-between gap-4">
                    <Label htmlFor="update-notif" className="flex-1 cursor-pointer">Story Updates</Label>
                    <Switch
                      id="update-notif"
                      checked={settings.notifyStoryUpdate}
                      onCheckedChange={(checked) =>
                        handleSettingChange("notifyStoryUpdate", checked)
                      }
                      className="flex-shrink-0"
                    />
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Email Digests</CardTitle>
                  <CardDescription>Periodic summary emails</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex items-start justify-between gap-4">
                    <div className="space-y-1 min-w-0 flex-1">
                      <Label htmlFor="weekly-digest">Weekly Digest</Label>
                      <p className="text-xs text-gray-500 leading-relaxed">
                        Get a weekly summary of activity
                      </p>
                    </div>
                    <Switch
                      id="weekly-digest"
                      checked={settings.notifyWeeklyDigest}
                      onCheckedChange={(checked) =>
                        handleSettingChange("notifyWeeklyDigest", checked)
                      }
                      className="flex-shrink-0 mt-1"
                    />
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            {/* Display Settings */}
            <TabsContent value="display" className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle>Theme</CardTitle>
                  <CardDescription>
                    Choose your preferred color theme
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <RadioGroup
                    value={settings.theme}
                    onValueChange={(value) => {
                      handleSettingChange("theme", value);
                      setTheme(value as any);
                    }}
                    className="space-y-2"
                  >
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="light" id="light" />
                      <Label htmlFor="light" className="font-normal">
                        <Sun className="h-4 w-4 inline mr-2" />
                        Light
                      </Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="dark" id="dark" />
                      <Label htmlFor="dark" className="font-normal">
                        <Moon className="h-4 w-4 inline mr-2" />
                        Dark
                      </Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="system" id="system" />
                      <Label htmlFor="system" className="font-normal">
                        <Monitor className="h-4 w-4 inline mr-2" />
                        System
                      </Label>
                    </div>
                  </RadioGroup>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Reading Preferences</CardTitle>
                  <CardDescription>
                    Default settings for the story reader
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div>
                    <Label htmlFor="font-size" className="block mb-3">Default Font Size</Label>
                    <Select
                      value={settings.fontSize}
                      onValueChange={(value) =>
                        handleSettingChange("fontSize", value)
                      }
                    >
                      <SelectTrigger className="w-full">
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent className="w-full">
                        <SelectItem value="small">Small</SelectItem>
                        <SelectItem value="medium">Medium</SelectItem>
                        <SelectItem value="large">Large</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div className="flex items-start justify-between gap-4">
                    <div className="space-y-1 min-w-0 flex-1">
                      <Label htmlFor="reading-mode">
                        Simplified Reading Mode
                      </Label>
                      <p className="text-xs text-gray-500 leading-relaxed">
                        Hide distractions while reading
                      </p>
                    </div>
                    <Switch
                      id="reading-mode"
                      checked={settings.readingMode}
                      onCheckedChange={(checked) =>
                        handleSettingChange("readingMode", checked)
                      }
                      className="flex-shrink-0 mt-1"
                    />
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Content Preferences</CardTitle>
                  <CardDescription>
                    Control what content you see
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex items-start justify-between gap-4">
                    <div className="space-y-1 min-w-0 flex-1">
                      <Label htmlFor="mature-content">
                        Show Mature Content
                      </Label>
                      <p className="text-xs text-gray-500 leading-relaxed">
                        Display stories marked as mature
                      </p>
                    </div>
                    <Switch
                      id="mature-content"
                      checked={settings.showMatureContent}
                      onCheckedChange={(checked) =>
                        handleSettingChange("showMatureContent", checked)
                      }
                      className="flex-shrink-0 mt-1"
                    />
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            {/* Security Settings */}
            <TabsContent value="security" className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle>Two-Factor Authentication</CardTitle>
                  <CardDescription>
                    Add an extra layer of security to your account
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <Alert>
                    <AlertCircle className="h-4 w-4" />
                    <AlertTitle>Coming Soon</AlertTitle>
                    <AlertDescription>
                      Two-factor authentication will be available in a future
                      update.
                    </AlertDescription>
                  </Alert>
                  <div className="flex items-center justify-between">
                    <Label htmlFor="2fa">Enable 2FA</Label>
                    <Switch
                      id="2fa"
                      checked={settings.twoFactorEnabled}
                      disabled
                    />
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Session Management</CardTitle>
                  <CardDescription>Control your login sessions</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div>
                    <Label htmlFor="session-timeout" className="block mb-3">
                      Auto-logout after inactivity (days)
                    </Label>
                    <Select
                      value={settings.sessionTimeout.toString()}
                      onValueChange={(value) =>
                        handleSettingChange("sessionTimeout", parseInt(value))
                      }
                    >
                      <SelectTrigger className="w-full">
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent className="w-full">
                        <SelectItem value="7">7 days</SelectItem>
                        <SelectItem value="14">14 days</SelectItem>
                        <SelectItem value="30">30 days</SelectItem>
                        <SelectItem value="90">90 days</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div className="flex items-start justify-between gap-4">
                    <div className="space-y-1 min-w-0 flex-1">
                      <Label htmlFor="login-alerts">Login Alerts</Label>
                      <p className="text-xs text-gray-500 leading-relaxed">
                        Get notified of new login attempts
                      </p>
                    </div>
                    <Switch
                      id="login-alerts"
                      checked={settings.loginAlerts}
                      onCheckedChange={(checked) =>
                        handleSettingChange("loginAlerts", checked)
                      }
                      className="flex-shrink-0 mt-1"
                    />
                  </div>

                  <Separator />

                  <div>
                    <Button
                      variant="outline"
                      className="w-full"
                      onClick={() => {
                        logout();
                        navigate("/");
                      }}
                    >
                      <LogOut className="h-4 w-4 mr-2" />
                      Sign Out of All Devices
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </div>
      </div>

      {/* Change Password Dialog */}
      <Dialog open={showPasswordDialog} onOpenChange={setShowPasswordDialog}>
        <DialogContent className="sm:max-w-md mx-4">
          <DialogHeader>
            <DialogTitle className="text-lg sm:text-xl">Change Password</DialogTitle>
            <DialogDescription className="text-sm sm:text-base">
              Enter your current password and choose a new one
            </DialogDescription>
          </DialogHeader>

          <div className="space-y-4 py-4">
            <div>
              <Label htmlFor="current-password">Current Password</Label>
              <Input
                id="current-password"
                type="password"
                value={settings.currentPassword}
                onChange={(e) =>
                  handleSettingChange("currentPassword", e.target.value)
                }
                placeholder="Enter current password"
                className="mt-1"
              />
            </div>

            <div>
              <Label htmlFor="new-password">New Password</Label>
              <Input
                id="new-password"
                type="password"
                value={settings.newPassword}
                onChange={(e) =>
                  handleSettingChange("newPassword", e.target.value)
                }
                placeholder="Enter new password"
                className="mt-1"
              />
              {settings.newPassword && settings.newPassword.length < 8 && (
                <p className="text-xs text-red-500 mt-1">
                  Password must be at least 8 characters
                </p>
              )}
            </div>

            <div>
              <Label htmlFor="confirm-password">Confirm New Password</Label>
              <Input
                id="confirm-password"
                type="password"
                value={settings.confirmPassword}
                onChange={(e) =>
                  handleSettingChange("confirmPassword", e.target.value)
                }
                placeholder="Confirm new password"
                className="mt-1"
              />
              {settings.confirmPassword &&
                settings.newPassword !== settings.confirmPassword && (
                  <p className="text-xs text-red-500 mt-1">
                    Passwords don't match
                  </p>
                )}
            </div>
          </div>

          <DialogFooter>
            <Button
              variant="outline"
              onClick={() => {
                setShowPasswordDialog(false);
                setSettings((prev) => ({
                  ...prev,
                  currentPassword: "",
                  newPassword: "",
                  confirmPassword: "",
                }));
              }}
            >
              Cancel
            </Button>
            <Button onClick={handlePasswordChange} disabled={isSaving}>
              {isSaving ? (
                <>
                  <LoadingSpinner size="sm" className="mr-2" />
                  Changing...
                </>
              ) : (
                "Change Password"
              )}
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>

      {/* Delete Account Dialog */}
      <Dialog open={showDeleteDialog} onOpenChange={setShowDeleteDialog}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Delete Account</DialogTitle>
            <DialogDescription>
              This action cannot be undone. This will permanently delete your
              account and remove your data from our servers.
            </DialogDescription>
          </DialogHeader>

          <Alert variant="destructive">
            <AlertCircle className="h-4 w-4" />
            <AlertTitle>Warning</AlertTitle>
            <AlertDescription>
              All your stories, comments, and data will be permanently deleted.
            </AlertDescription>
          </Alert>

          <div>
            <Label htmlFor="delete-confirm">
              Type <strong>{user?.username}</strong> to confirm
            </Label>
            <Input
              id="delete-confirm"
              value={deleteConfirmText}
              onChange={(e) => setDeleteConfirmText(e.target.value)}
              placeholder="Enter your username"
              className="mt-1"
            />
          </div>

          <DialogFooter>
            <Button
              variant="outline"
              onClick={() => {
                setShowDeleteDialog(false);
                setDeleteConfirmText("");
              }}
            >
              Cancel
            </Button>
            <Button
              variant="destructive"
              onClick={handleDeleteAccount}
              disabled={deleteConfirmText !== user?.username}
            >
              Delete My Account
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </MainLayout>
  );
}
```

---

### <a id='src-pages-StoriesPagetsx'></a> `src\pages\StoriesPage.tsx`

**Page Component:** StoriesPage.tsx

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

### <a id='src-pages-StoryDetailPagetsx'></a> `src\pages\StoryDetailPage.tsx`

**Page Component:** StoryDetailPage.tsx

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

### <a id='src-pages-StoryReaderPagetsx'></a> `src\pages\StoryReaderPage.tsx`

**Page Component:** StoryReaderPage.tsx

```tsx
import { useState, useEffect } from "react";
import { useParams, useNavigate, Link } from "react-router-dom";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
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
                <ReactMarkdown
                  remarkPlugins={[remarkGfm]}
                  components={{
                    h1: ({ node, ...props }) => (
                      <h1 style={{ color: currentTheme.text }} {...props} />
                    ),
                    h2: ({ node, ...props }) => (
                      <h2 style={{ color: currentTheme.text }} {...props} />
                    ),
                    h3: ({ node, ...props }) => (
                      <h3 style={{ color: currentTheme.text }} {...props} />
                    ),
                    p: ({ node, ...props }) => (
                      <p style={{ color: currentTheme.text }} {...props} />
                    ),
                    strong: ({ node, ...props }) => (
                      <strong style={{ color: currentTheme.text, fontWeight: 'bold' }} {...props} />
                    ),
                    em: ({ node, ...props }) => (
                      <em style={{ color: currentTheme.text, fontStyle: 'italic' }} {...props} />
                    ),
                    a: ({ node, ...props }) => (
                      <a style={{ color: currentTheme.sliderThumb }} {...props} />
                    ),
                    blockquote: ({ node, ...props }) => (
                      <blockquote
                        style={{
                          borderLeftColor: currentTheme.sliderThumb,
                          color: currentTheme.secondaryText,
                        }}
                        {...props}
                      />
                    ),
                    code: ({ node, inline, ...props }: any) => {
                      return inline ? (
                        <code
                          style={{
                            backgroundColor: theme === "dark" || theme === "night" ? "#2a2a2a" : "#f3f4f6",
                            color: currentTheme.text,
                            padding: "2px 6px",
                            borderRadius: "3px",
                          }}
                          {...props}
                        />
                      ) : (
                        <code
                          style={{
                            backgroundColor: theme === "dark" || theme === "night" ? "#2a2a2a" : "#f3f4f6",
                            color: currentTheme.text,
                            display: "block",
                            padding: "12px",
                            borderRadius: "6px",
                          }}
                          {...props}
                        />
                      );
                    },
                  }}
                >
                  {currentChapter.content}
                </ReactMarkdown>
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


## Store Files

### <a id='src-store-authStorets'></a> `src\store\authStore.ts`

**State Store:** authStore.ts

```typescript
import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import { User, ApiError } from '@/types';
import { authApi } from '@/apis/auth';

interface AuthState {
  // State
  accessToken: string | null;
  refreshToken: string | null;
  user: User | null;
  isAuthenticated: boolean;
  isLoading: boolean;
  error: string | null;
  
  // Actions
  login: (email: string, password: string) => Promise<void>;
  signup: (username: string, email: string, password: string) => Promise<void>;
  loginWithGoogle: () => void;
  setTokens: (accessToken: string, refreshToken: string) => void;
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
      refreshToken: null,
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
            refreshToken: null,
            user: userResponse,
            isAuthenticated: true,
            isLoading: false,
            error: null
          });
        } catch (error: any) {
          const errorMessage = error.details?.message || error.message || 'Login failed';
          set({
            accessToken: null,
            refreshToken: null,
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

      loginWithGoogle: () => {
        // Redirect to backend Google OAuth endpoint
        window.location.href = `${import.meta.env.VITE_API_URL || 'https://usman678zafar-storivault-backend.hf.space'}/auth/google/login`;
      },

      setTokens: (accessToken: string, refreshToken: string) => {
        set({
          accessToken,
          refreshToken,
          isAuthenticated: true
        });
      },

      logout: () => {
        set({
          accessToken: null,
          refreshToken: null,
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
        refreshToken: state.refreshToken,
        user: state.user,
        isAuthenticated: state.isAuthenticated
      })
    }
  )
);
```

---

### <a id='src-store-uiStorets'></a> `src\store\uiStore.ts`

**State Store:** uiStore.ts

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


## Types Files

### <a id='src-types-apits'></a> `src\types\api.ts`

**File Type:** api.ts

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
  cover_image: string | null;
  is_google_user?: boolean;
  followers_count: number;
  following_count: number;
  stories_count: number;
  created_at: string;
  updated_at: string;
}

export interface UpdateProfileRequest {
  bio?: string | null;
  profile_pic?: string | null;
  cover_image?: string | null;
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

### <a id='src-types-indexts'></a> `src\types\index.ts`

**File Type:** index.ts

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


## Utils Files

### <a id='src-utils-favicon-generatorts'></a> `src\utils\favicon-generator.ts`

**File Type:** favicon-generator.ts

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


## Vite Env.D.Ts Files

### <a id='src-vite-envdts'></a> `src\vite-env.d.ts`

**File Type:** vite-env.d.ts

```typescript
/// <reference types="vite/client" />
```

---


## Tailwind.Config.Ts Files

### <a id='tailwindconfigts'></a> `tailwind.config.ts`

**File Type:** tailwind.config.ts

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


## Tsconfig.App.Json Files

### <a id='tsconfigappjson'></a> `tsconfig.app.json`

**File Type:** tsconfig.app.json

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


## Tsconfig.Json Files

### <a id='tsconfigjson'></a> `tsconfig.json`

**File Type:** tsconfig.json

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


## Tsconfig.Node.Json Files

### <a id='tsconfignodejson'></a> `tsconfig.node.json`

**File Type:** tsconfig.node.json

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


## Vercel.Json Files

### <a id='verceljson'></a> `vercel.json`

**File Type:** vercel.json

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


## Vite.Config.Ts Files

### <a id='viteconfigts'></a> `vite.config.ts`

**File Type:** vite.config.ts

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


## 📊 Documentation Statistics

- **Total Files Documented:** 126
- **Total Size:** 644,968 characters

**File Type Distribution:**
- `.css`: 2 files
- `.html`: 1 files
- `.js`: 2 files
- `.json`: 6 files
- `.md`: 1 files
- `.svg`: 2 files
- `.ts`: 28 files
- `.tsx`: 83 files
- `no-ext`: 1 files

---
*End of Frontend Documentation*
