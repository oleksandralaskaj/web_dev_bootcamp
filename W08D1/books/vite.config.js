import {defineConfig} from 'vite';
import laravel from 'laravel-vite-plugin';
import react from '@vitejs/plugin-react';

export default defineConfig({
    plugins: [
        laravel({
            input: [
                'resources/js/app.js',
                'resources/css/test.css',
                'resources/js/latest-books.js',
                'resources/js/crime-books.js',
                'resources/js/book-search.js',
                'resources/js/users-list/src/main.jsx'
            ],
            refresh: true,
        }),
    ],
});
