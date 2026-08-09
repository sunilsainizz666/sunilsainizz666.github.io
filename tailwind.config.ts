import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "#0B0B0F",
        surface: "#11131A",
        border: "rgba(255,255,255,0.08)",
        primary: "#7C5CFF",
        secondary: "#00D4FF",
        accent: "#9B8CFF",
        foreground: "#F5F7FB",
        muted: "#9AA4B2",
      },
      fontFamily: {
        sans: ["var(--font-inter)", "system-ui", "sans-serif"],
      },
      animation: {
        "pulse-slow": "pulse 3s ease-in-out infinite",
      },
    },
  },
  plugins: [],
};

export default config;
