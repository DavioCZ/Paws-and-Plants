/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx}",
    "./src/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        ink: "#1E2A25",
        sage: "#2E7D6B",
        sage600: "#2F6E5D",
        blush: "#F3B7C4",
        blush200: "#F6C9D5",
        cream: "#F4F1EA",
        cream50: "#F7F2EC",
      },
      maxWidth: { prose: "70ch" },
      borderRadius: { xl: "1rem", "2xl": "1.25rem" },
      boxShadow: { soft: "0 8px 24px rgba(0,0,0,0.06)" },
    },
  },
  plugins: [],
};
