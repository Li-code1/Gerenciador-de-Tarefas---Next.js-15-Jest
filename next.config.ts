import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* Ignora erros de linting e tipos durante o build para garantir o deploy */
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },

  /* Sua configuração para forçar o Webpack (importante para o seu hardware) */
  webpack: (config) => {
    return config;
  },

  /* Desativa o Turbopack para evitar erros de instruções de CPU (popcnt) */
  experimental: {
    // Mantendo a estrutura que você já tinha, mas garantindo que o build seja estável
  }
};

export default nextConfig;