/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  content: [
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        base: {
          DEFAULT: "#0B0F14",
          deep: "#070A0D",
        },
        surface: {
          DEFAULT: "#121821",
          raised: "#1C2530",
          border: "#26313F",
        },
        signal: {
          DEFAULT: "#5EEAD4",
          dim: "#2DD4BF",
          glow: "#99F6E4",
        },
        ink: {
          DEFAULT: "#E8EDF2",
          muted: "#94A3B8",
          faint: "#5B6B7D",
        },
        warn: {
          DEFAULT: "#FBBF24",
        },
        danger: {
          DEFAULT: "#FB7185",
        },
      },
      fontFamily: {
        display: ["var(--font-space-grotesk)", "sans-serif"],
        body: ["var(--font-inter)", "sans-serif"],
        mono: ["var(--font-jetbrains-mono)", "monospace"],
      },
      backgroundImage: {
        "grid-pattern":
          "linear-gradient(rgba(94, 234, 212, 0.06) 1px, transparent 1px), linear-gradient(90deg, rgba(94, 234, 212, 0.06) 1px, transparent 1px)",
      },
      animation: {
        blink: "blink 1s step-end infinite",
        "fade-up": "fadeUp 0.7s cubic-bezier(0.16, 1, 0.3, 1) forwards",
        scan: "scan 3s linear infinite",
      },
      keyframes: {
        blink: {
          "0%, 100%": { opacity: "1" },
          "50%": { opacity: "0" },
        },
        fadeUp: {
          "0%": { opacity: "0", transform: "translateY(24px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        scan: {
          "0%": { transform: "translateY(-100%)" },
          "100%": { transform: "translateY(100%)" },
        },
      },
    },
  },
  plugins: [],
};
