/** @type {import('tailwindcss').Config} */
export const content = [
  "./app/**/*.{js,ts,jsx,tsx,mdx}",
  "./pages/**/*.{js,ts,jsx,tsx,mdx}",
  "./components/**/*.{js,ts,jsx,tsx,mdx}",

  // Or if using `src` directory:
  "./src/**/*.{js,ts,jsx,tsx,mdx}",
];
export const theme = {
  extend: {
    colors: {
      primary: '#D8B4E2',
      lavender: '#EAD4F3',
    },
    fontFamily: {
      serif: ['"Playfair Display"', 'serif'],
      sans: ['var(--font_aiRCYLyfer_default)', 'sans-serif'],
    },
  },
};
export const plugins = [];