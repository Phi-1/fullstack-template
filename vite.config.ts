import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig({
    plugins: [vue()],
    root: "src/frontend",
    build: {
        outDir: "../../dist/frontend",
        emptyOutDir: true
    }
})
