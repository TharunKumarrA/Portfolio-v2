/** @type {import('tailwindcss').Config} */
const tailwindConfig = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "#191919",
        text: "#FFFFFF",
        primary: "#D8392B",
        secondary: "#101010",
        foreground: "var(--foreground)",
      },
      fontSize: {
        h1: ['5.61rem', { lineHeight: '1.1' }],  // 90px
        h2: ['4.209rem', { lineHeight: '1.2' }], // 67.34px
        h3: ['3.157rem', { lineHeight: '1.3' }], // 50.51px
        h4: ['2.369rem', { lineHeight: '1.4' }], // 37.9px
        h5: ['1.777rem', { lineHeight: '1.5' }], // 28.43px
        h6: ['1.333rem', { lineHeight: '1.6' }], // 21.33px
        p: ['1rem', { lineHeight: '1.6' }],      // 16px
        small: ['0.75rem', { lineHeight: '1.4' }], // 12px
        vsmall: ['0.563rem', { lineHeight: '1.3' }], // 9px
      },
      fontFamily: {
        heading: ["var(--font-space-mono)", "monospace"], // Use Space Mono
        body: ["var(--font-rubik)", "sans-serif"],        // Use Rubik
      },
    },
  },
  plugins: [],
};

export default tailwindConfig;
