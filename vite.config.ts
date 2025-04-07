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
                project3: 'projects/project-3/index.html',
                project5: 'projects/project-5/index.html',
                project6: 'projects/project-6/index.html',
                project7: 'projects/project-7/index.html',
            }
        }
    },
    base: '/frontend-mentor/'
})
