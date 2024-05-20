import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import dts from 'vite-plugin-dts';

export default defineConfig({
  plugins: [
    react(),
    dts({
      insertTypesEntry: true,
    })
  ],
  build: {
    lib: {
      entry: './src/index.ts', // Single entry point for the library
      name: 'df-coding',
      fileName: (format) => `df-coding.${format}.js`,
      formats: ['es', 'cjs'] // Specify the formats you want to build
    },
    rollupOptions: {
      // Ensure to externalize dependencies that shouldn't be bundled
      external: ['react', 'react-dom'],
      output: {
        globals: {
          react: 'React',
          'react-dom': 'ReactDOM'
        }
      }
    }
  }
});
