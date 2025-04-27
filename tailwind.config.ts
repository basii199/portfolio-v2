import type { Config } from "tailwindcss";

export default {
  darkMode: "class", // This is the crucial line for dark mode
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  // ... rest of your config
} satisfies Config;