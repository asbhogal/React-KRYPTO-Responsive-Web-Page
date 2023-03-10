import { defineConfig } from "vite";
import { createHtmlPlugin } from "vite-plugin-html";
import react from '@vitejs/plugin-react';
import path from 'path';
import cleanPlugin from 'vite-plugin-clean';

export default defineConfig ({
    root: 'src',
    build: {
        outDir: '../dist',
    },
    resolve: {
        alias: {
          '@': path.resolve(__dirname, './src'),
        }
    },
    css: {
        devSourcemap: true,
    },
    plugins: [
        react(),
        cleanPlugin(),
        createHtmlPlugin({
            minify: true,
            inject: {
                data: {
                    title: 'KRYPTO - Responsive Web Page'
                }
            }
        })
    ]
})