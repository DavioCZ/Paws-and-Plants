import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/app/**/*.{ts,tsx}",
    "./src/components/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        ink: "#1E2A25",
        sage: "#2E7D6B",
        "sage-600": "#2F6E5D",
        blush: "#F3B7C4",
        "blush-200": "#F6C9D5",
        cream: "#F4F1EA",
        "cream-50": "#F7F2EC",
      },
      maxWidth: {
        prose: "70ch",
      },
    },
  },
  plugins: [],
};
export default config;
