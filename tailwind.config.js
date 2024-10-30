import { nextui } from '@nextui-org/theme';
import { lightColors, darkColors } from "./styles/colors";

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}'
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["var(--font-sans)"],
        mono: ["var(--font-geist-mono)"],
      },
    },
  },
  darkMode: "class",
  plugins: [nextui({
    // defaultTheme:"light",
    layout: {
        disabledOpacity: "0.3",
        radius: {
          small: "4px", // rounded-small
          medium: "8px", // rounded-medium
          large: "12px", // rounded-large
        },
        borderWidth: {
          small: "1px", // border-small
          medium: "2px", // border-medium
          large: "3px", // border-large
        },
      },
      themes: {
        light: {
          colors: lightColors
        },
        dark: {
          colors: darkColors,
        },
      },
    }),
  ],
}
