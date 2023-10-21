import { defineConfig } from 'vite';
import laravel from 'laravel-vite-plugin';
import react from '@vitejs/plugin-react';

export default defineConfig({
    plugins: [
        laravel({
            input: [
                'resources/sass/app.scss',
                'resources/js/app.jsx',
            ],
            refresh: true,
        }),
        react(),
    ],
    build: {
        outDir: 'public/build',
        assetsDir: '',
        rollupOptions: {
            input: 'resources/js/app.jsx'
        }
    },
    publicDir: 'fake_dir_so_nothing_gets_copied',
    base: process.env.NODE_ENV === 'production' ? '/assets/' : '/',
    esbuild: {
        loader: 'jsx',
        include: /\.jsx?$/,
        exclude: /node_modules/
    },

    css: {
        preprocessorOptions: {
          scss: {
            additionalData: `@import "src/styles/main.css";`
          }
        }
      }
      
});
