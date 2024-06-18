import { defineConfig } from 'vite';
import laravel from 'laravel-vite-plugin';

export default defineConfig({
    plugins: [
        laravel({
            input: [
                    'resources/js/app.js',
                    'resources/css/test.css',
                    'resources/js/latest-books.js',
                    'resources/js/crime-books.js'
            ],
            refresh: true,
        }),
    ],
});
