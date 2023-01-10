import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { resolve, dirname } from 'node:path'
import { fileURLToPath } from 'url'
import vueI18n from '@intlify/vite-plugin-vue-i18n'

export default defineConfig({
    plugins: [
        vue(),
        vueI18n({
            /* options */
            // locale messages resource pre-compile option
            include: resolve(dirname(fileURLToPath(import.meta.url)), './ui/i18n/**'),
        }),
    ],
    meteor: {
        clientEntry: 'ui/main.js',
    },
    optimizeDeps: {
        exclude: ['vue-meteor-tracker'],
    },
});