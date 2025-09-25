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
        brand: {
          spruce: "var(--brand-spruce)",
          sage: "var(--brand-sage)",
          cream: "var(--brand-cream)",
          sand: "var(--brand-sand)",
          clay: "var(--brand-clay)",
          chestnut: "var(--brand-chestnut)",
        },
        bg: "var(--color-bg)",
        surface: "var(--color-surface)",
        ink: "var(--color-ink)",
        muted: "var(--color-muted)",
        border: "var(--color-border)",
        ring: "var(--color-ring)",
      },
      maxWidth: { prose: "70ch" },
      borderRadius: { xl: "1rem", "2xl": "1.25rem" },
      boxShadow: { soft: "0 8px 24px rgba(0,0,0,0.06)" },
    },
  },
  plugins: [],
};
