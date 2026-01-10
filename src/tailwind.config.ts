import type { Config } from "tailwindcss";

const config: Config = {
  // O 'content' diz ao Tailwind quais arquivos ele deve "pintar"
  content: [
    "./src/**/*.{js,ts,jsx,tsx,mdx}", // ESSA LINHA É A MAIS IMPORTANTE
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      // Aqui você pode adicionar cores personalizadas depois
    },
  },
  plugins: [],
};
export default config;