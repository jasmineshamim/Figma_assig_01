import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    screens: {
      'sm': '680px',
      'md': '1108px',
      'lg': '100px',
      'xl': '1280px',
      '2xl': '1536px',
    },
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
      maxWidth: {
        'screen-sm': '700px',
        'screen-md': '700px',
        'screen-lg': '1024px',
        'screen-xl': '1280px',
        'screen-2xl': '1536px',
        // Add custom max widths here
      },
      minWidth: {
        'screen-sm': '700px',
        'screen-md': '800px',
        'screen-lg': '600px',
        'screen-xl': '1280px',
        'screen-2xl': '1536px',
        // Add custom min widths here
      },
    },
  },
  plugins: [],
};

export default config;
