import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    colors: {
      "rich-green": "#1B5E3F",
      "deep-dark-blue": "#0F1B3C",
      "off-white": "#F8F9FA",
      "light-gray": "#E8E9EB",
      "bright-emerald": "#2DD4BF",
      "charcoal-gray": "#1F2937",
    },
    extend: {
      fontFamily: {
        display: ["var(--font-display)", "system-ui"],
        body: ["var(--font-body)", "system-ui"],
        sans: ["var(--font-montserrat)", "system-ui", "sans-serif"],
        mono: ["var(--font-geist-mono)", "monospace"],
      },
      fontSize: {
        xs: "14px",
        sm: "15px",
        base: "16px",
        lg: "18px",
        xl: "20px",
        "2xl": "24px",
        "3xl": "32px",
        "4xl": "40px",
        "5xl": "48px",
      },
    },
  },
  plugins: [],
};

export default config;
