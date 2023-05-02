/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    screens: {
      mobile: "480px",
      tablet: "768px",
      laptop: "976px",
      desktop: "1440px",
    },
    colors: {
      white: "#ffffff",
      gray: "#475569",
      "text-primary": "#0F172A",
      "text-secondary": "#0F172A",
      "border-color" : "#E2E8F0",
      "hover-text": "#0AE5E9",
    },
  },
  plugins: [],
};
