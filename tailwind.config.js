import { nextui } from "@nextui-org/theme";
import { lightColors, darkColors } from "./styles/colors";

/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        "./components/**/*.{js,ts,jsx,tsx,mdx}",
        "./app/**/*.{js,ts,jsx,tsx,mdx}",
        "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}",
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
    plugins: [
        nextui({
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
                dividerWeight: "1px", // h-divider the default height applied to the divider component
                fontSize: {
                    tiny: "0.75rem", // text-tiny
                    small: "0.875rem", // text-small
                    medium: "1rem", // text-medium
                    large: "1.125rem", // text-large
                },
                lineHeight: {
                    tiny: "1rem", // text-tiny
                    small: "1.25rem", // text-small
                    medium: "1.5rem", // text-medium
                    large: "1.75rem", // text-large
                },
            },
            themes: {
                light: {
                    // colors: lightColors,
                    colors: {
                        background: "#FFFFFF", // or DEFAULT
                        foreground: "#11181C", // or 50 to 900 DEFAULT
                        primary: {
                            //... 50 to 900
                            foreground: "#FFFFFF",
                            DEFAULT: "#006FEE",
                        },
                        secondary: {
                            foreground: "#FFFFFF",
                            DEFAULT: "#f31260",
                        },
                        // ... rest of the colors
                    },
                },
                dark: {
                    // colors: darkColors,
                    colors: {
                        background: "#000000", // or DEFAULT
                        foreground: "#ECEDEE", // or 50 to 900 DEFAULT
                        primary: {
                            //... 50 to 900
                            foreground: "#FFFFFF",
                            DEFAULT: "#006FEE",
                        },
                        secondary: {
                            foreground: "#FFFFFF",
                            DEFAULT: "#f31260",
                        },
                    },
                },
            },
        }),
    ],
};
