import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'
import path from "path"
import dts from "vite-plugin-dts"
// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), dts()],
  build: {
    lib: {
      entry: path.resolve(__dirname, "src/index.js"),
      name: 'sidebar-react-pro',
      fileName: (format) => `index.${format}.js`,
    },
    rollupOptions: {
      external: ['react', 'react-dom'],
      output: {
        globals: {
          react: 'React',
          'react-dom': 'ReactDOM',
        },
      },
    },
    sourcemap: true,
    emptyOutDir: true
  },
});
