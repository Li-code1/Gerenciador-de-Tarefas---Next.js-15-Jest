import nextJest from 'next/jest.js'; // Adicionamos o .js aqui

const createJestConfig = nextJest({
  // Forneça o caminho para o seu aplicativo Next.js para carregar next.config.js e arquivos .env em seu ambiente de teste
  dir: './',
});

// Adicione qualquer configuração personalizada do Jest para ser passada ao Next.js
const config = {
  setupFilesAfterEnv: ['<rootDir>/jest.setup.ts'],
  testEnvironment: 'jest-environment-jsdom',
  moduleNameMapper: {
    // Lida com aliases de caminhos (se você usa @/ no seu projeto)
    '^@/(.*)$': '<rootDir>/src/$1',
  },
};

// createJestConfig é exportado desta forma para garantir que o next/jest possa carregar a configuração do Next.js que é assíncrona
export default createJestConfig(config);