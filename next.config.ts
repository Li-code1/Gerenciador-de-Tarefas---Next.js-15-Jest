import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  // Removi a configuração manual de Webpack que pode estar conflitando na Vercel
  // A Vercel já sabe gerenciar isso sozinha no ambiente dela
};

export default nextConfig;