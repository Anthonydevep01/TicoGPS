import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'
import tsconfigPaths from "vite-tsconfig-paths";

// https://vite.dev/config/
export default defineConfig({
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
  build: {
    sourcemap: 'hidden',
  },
  plugins: [
    react({
      babel: {
        plugins: [
          // Only include react-dev-locator in development
          ...(process.env.NODE_ENV === 'development' ? ['react-dev-locator'] : []),
        ],
      },
    }),
    tsconfigPaths()
  ],
})
