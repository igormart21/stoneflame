import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        bg: { DEFAULT: "#FAFAF7", secondary: "#F5F0E8", dark: "#1A1208" },
        card: "#FFFFFF",
        vulcanic: "#2B2118",
        "stone-dark": "#1A1208",
        stone: { DEFAULT: "#6B5E50", light: "#9A8E82", border: "#EDE7DC" },
        bronze: "#A36D3A",
        copper: "#C67C3B",
        offwhite: "#F5F2ED",
        ember: {
          low: "#8B2500",
          mid: "#C44B0A",
          high: "#FF6B1A",
          bright: "#FF9A4A",
        },
      },
      fontFamily: {
        display: ["var(--font-cormorant)", "Georgia", "serif"],
        body: ["var(--font-dm-sans)", "system-ui", "sans-serif"],
      },
      fontSize: {
        "10xl": ["10rem", { lineHeight: "1" }],
        "11xl": ["12rem", { lineHeight: "1" }],
      },
      letterSpacing: {
        widest2: "0.3em",
        widest3: "0.5em",
      },
      animation: {
        "fade-up": "fadeUp 0.9s cubic-bezier(0.25, 0.46, 0.45, 0.94) forwards",
        "fade-in": "fadeIn 1s ease forwards",
        "ember-rise": "emberRise var(--duration, 4s) ease-in infinite",
        "cursor-expand": "cursorExpand 0.3s ease forwards",
        "line-grow": "lineGrow 1.2s cubic-bezier(0.25, 0.46, 0.45, 0.94) forwards",
        "text-clip": "textClip 1s cubic-bezier(0.77, 0, 0.175, 1) forwards",
        "shimmer": "shimmer 2s linear infinite",
        "float": "float 6s ease-in-out infinite",
      },
      keyframes: {
        fadeUp: {
          "0%": { opacity: "0", transform: "translateY(40px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        fadeIn: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        emberRise: {
          "0%": { transform: "translateY(0) translateX(0) scale(1)", opacity: "0.9" },
          "50%": { transform: "translateY(-60px) translateX(var(--drift, 10px)) scale(0.8)", opacity: "0.6" },
          "100%": { transform: "translateY(-120px) translateX(var(--drift2, -5px)) scale(0)", opacity: "0" },
        },
        lineGrow: {
          "0%": { width: "0%" },
          "100%": { width: "100%" },
        },
        textClip: {
          "0%": { clipPath: "inset(0 100% 0 0)" },
          "100%": { clipPath: "inset(0 0% 0 0)" },
        },
        shimmer: {
          "0%": { backgroundPosition: "-200% 0" },
          "100%": { backgroundPosition: "200% 0" },
        },
        float: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-12px)" },
        },
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "stone-gradient": "linear-gradient(135deg, #1a1008 0%, #0B0B0B 50%, #1a1008 100%)",
        "ember-gradient": "radial-gradient(ellipse at center, #C67C3B22 0%, transparent 70%)",
        "copper-shimmer": "linear-gradient(90deg, transparent 0%, #C67C3B33 50%, transparent 100%)",
      },
      transitionTimingFunction: {
        luxury: "cubic-bezier(0.25, 0.46, 0.45, 0.94)",
        cinematic: "cubic-bezier(0.77, 0, 0.175, 1)",
      },
    },
  },
  plugins: [],
};

export default config;
