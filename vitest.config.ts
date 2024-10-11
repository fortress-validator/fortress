import path from 'path';
import { defineConfig } from 'vitest/config';

export default defineConfig({
  test: {
    environment: 'jsdom',
    include: [
      'lib/**/*.test.ts',
      'plugins/**/*.test.ts',
    ],
  },
  resolve: {
    alias: {
      '~': path.resolve(__dirname, 'lib'),
    },
  },
});
