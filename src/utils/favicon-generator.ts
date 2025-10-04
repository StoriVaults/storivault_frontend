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
