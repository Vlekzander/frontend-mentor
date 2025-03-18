import { defineConfig } from 'vite'
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
    plugins: [
        tailwindcss(),
    ],
    server: {
        watch: {
            usePolling: true,
        },
    },
    build: {
        rollupOptions: {
            input: {
                main: 'index.html',
                project1: 'projects/project-1/index.html',
                project2: 'projects/project-2/index.html',
            }
        }
    },
    base: '/frontend-mentor/'
})
