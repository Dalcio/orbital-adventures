/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{ts,tsx,mdx}",
    "./src/components/**/*.{ts,tsx,mdx}",
    "./src/app/**/*.{ts,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
    fontSie: {
      h1: "9rem",
      h2: "6rem",
      h3: "4rem",
      h4: "2rem",
      h5: ["1.8rem", { letterSpacing: 4.75 }],
      sh1: "1.8rem",
      sh2: ["0.9rem", { letterSpacing: 2.33 }],
      nav: ["1rem", { letterSpacing: 2.7 }],
      body: "1rem",
    },
  },
  plugins: [],
};
