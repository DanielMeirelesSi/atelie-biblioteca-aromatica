import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/app/**/*.{ts,tsx}",
    "./src/components/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        plum: {
          DEFAULT: "#4B155A",
          light: "#70407A",
        },
        lilac: "#C6A7CA",
        cream: "#F7EEF6",
        gold: "#B98A34",
        ink: "#291A2D",
      },
      fontFamily: {
        display: ["var(--font-display)", "Georgia", "serif"],
        sans: ["var(--font-sans)", "system-ui", "sans-serif"],
        script: ["var(--font-script)", "cursive"],
      },
      maxWidth: {
        content: "1240px",
      },
      boxShadow: {
        card: "0 1px 2px rgba(41, 26, 45, 0.04), 0 8px 24px rgba(75, 21, 90, 0.06)",
        "card-hover": "0 2px 6px rgba(41, 26, 45, 0.06), 0 14px 32px rgba(75, 21, 90, 0.12)",
        float: "0 6px 20px rgba(75, 21, 90, 0.28)",
      },
      keyframes: {
        "fade-up": {
          "0%": { opacity: "0", transform: "translateY(12px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        "sheet-up": {
          "0%": { transform: "translateY(100%)" },
          "100%": { transform: "translateY(0)" },
        },
        "drawer-in": {
          "0%": { transform: "translateX(100%)" },
          "100%": { transform: "translateX(0)" },
        },
        "fade-in": {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
      },
      animation: {
        "fade-up": "fade-up 0.5s ease both",
        "sheet-up": "sheet-up 0.28s ease both",
        "drawer-in": "drawer-in 0.28s ease both",
        "fade-in": "fade-in 0.2s ease both",
      },
    },
  },
  plugins: [],
};

export default config;
