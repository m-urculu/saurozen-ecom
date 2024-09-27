import type { Config } from "tailwindcss";
import textShadow from 'tailwindcss-textshadow'; 

const config: Config = {  
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      screens: {
        'mobile-breakpoint': '393px', // Custom breakpoint for 393px
      },
      fontFamily: {
        orbitron: ['Orbitron', 'sans-serif'],
        designer: ['Designer', 'sans-serif'],
      },
      textShadow: {
        'custom': '0 4px 4px rgba(0, 0, 0, 0.25)',
        'custom2': '0 4px 4px rgba(19, 8, 35, 0.4)'
      },
      colors: {
        'Limerick': '#9DC913',
        'Cetacean-Blue': '#160233',
        'Bright-Gray': '#EEEDF7',
        'Ateneo-Blue': '#0A4164',
        'Limerick': '#9DC913'
      },
    },
  },
  plugins: [textShadow],
};
export default config;
