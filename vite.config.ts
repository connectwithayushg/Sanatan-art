import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
import { VitePWA } from 'vite-plugin-pwa'

export default defineConfig({
  plugins: [
    react(),
    tailwindcss(),
    VitePWA({
      registerType: 'autoUpdate',
      includeAssets: ['icon.svg', 'apple-touch-icon.png'],
      manifest: {
        name: 'सनातन ऐप · Sanatan App',
        short_name: 'सनातन',
        description: 'दीपावली लक्ष्मी पूजन मुहूर्त, विधि, आरती और शुभकामना कार्ड',
        lang: 'hi',
        theme_color: '#fbf4e8',
        background_color: '#fbf4e8',
        display: 'standalone',
        start_url: '/',
        icons: [
          { src: 'icon-192.png', sizes: '192x192', type: 'image/png' },
          { src: 'icon-512.png', sizes: '512x512', type: 'image/png' },
          { src: 'icon-512.png', sizes: '512x512', type: 'image/png', purpose: 'maskable' },
        ],
      },
      workbox: {
        globPatterns: ['**/*.{js,css,html,png,svg,jpg}', '**/*-{devanagari,latin}-*.woff2'],
        // Full-size card photos load only when picked, so the offline download stays small.
        globIgnores: ['art/photo/**'],
      },
    }),
  ],
})
