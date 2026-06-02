/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: "class",
  theme: {
      extend: {
          "colors": {
              "primary": "#0058be",
              "primary-container": "#2170e4",
              "on-primary": "#ffffff",
              "secondary": "#8127cf",
              "tertiary": "#00628d",
              "background": "#f7f9fb",
              "surface": "#ffffff",
              "surface-container": "#f2f4f6",
              "surface-variant": "#e0e3e5",
              "on-background": "#191c1e",
              "on-surface": "#191c1e",
              "on-surface-variant": "#424754",
              "outline": "#727785",
              "outline-variant": "#c2c6d6",
              "success-green": "#10B981",
              "error": "#ba1a1a",
              "slate-50": "#f8fafc",
              "slate-100": "#f1f5f9",
              "slate-900": "#0f172a"
          },
          "borderRadius": {
              "DEFAULT": "0.25rem",
              "lg": "0.5rem",
              "xl": "0.75rem",
              "2xl": "1rem",
              "full": "9999px"
          },
          "spacing": {
              "gutter": "1.5rem",
              "container-padding": "2rem",
              "section-margin": "3rem",
              "card-gap": "1rem"
          },
          "fontFamily": {
              "headline-sm": ["Outfit"],
              "label-caps": ["Inter"],
              "headline-lg": ["Outfit"],
              "code-sm": ["JetBrains Mono"],
              "headline-md": ["Outfit"],
              "body-md": ["Inter"],
              "body-lg": ["Inter"]
          },
          "fontSize": {
              "headline-sm": ["18px", {"lineHeight": "1.4", "fontWeight": "600"}],
              "label-caps": ["12px", {"lineHeight": "1", "letterSpacing": "0.05em", "fontWeight": "700"}],
              "headline-lg": ["32px", {"lineHeight": "1.2", "letterSpacing": "-0.02em", "fontWeight": "700"}],
              "code-sm": ["13px", {"lineHeight": "1.4", "fontWeight": "500"}],
              "headline-md": ["24px", {"lineHeight": "1.3", "fontWeight": "600"}],
              "body-md": ["14px", {"lineHeight": "1.5", "fontWeight": "400"}],
              "body-lg": ["16px", {"lineHeight": "1.6", "fontWeight": "400"}]
          }
      },
  },
  plugins: [],
}
