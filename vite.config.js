import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

export default defineConfig({
    plugins: [vue()],
    meteor: {
        clientEntry: 'ui/main.js',
    },
    optimizeDeps: {
        exclude: ['vue-meteor-tracker'],
    },
})