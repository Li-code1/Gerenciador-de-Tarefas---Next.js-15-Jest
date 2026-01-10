import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* Configurações de opções aqui */
  webpack: (config) => {
    return config;
  },
  // Isso desativa o Turbopack e força o Webpack
  experimental: {
    turbo: {
      // Deixe vazio ou configure se necessário, 
      // mas o segredo é rodar o comando sem a flag --turbo
    }
  }
};

export default nextConfig;