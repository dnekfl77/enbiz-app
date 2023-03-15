// https://nuxt.com/docs/api/configuration/nuxt-config
import { resolve } from 'path';

export default defineNuxtConfig({
  vite: {
    server: {
      watch: {
        usePolling: true,
      },
    },
    plugins: [],
  },
  css: [
    // ...
    '~/assets/css/main.css',
  ],
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
  modules: [
    // ...
    '@pinia/nuxt',
    '@pinia-plugin-persistedstate/nuxt',
    '@nuxtjs/device',
  ],
  runtimeConfig: {
    public: {
      ...process.env,
    },
    app: {
      initialCache: false,
    },
  },
  nitro: {
    devProxy: {
      '/api': {
        target: 'http://localhost:8090/api',
        changeOrigin: true,
      },
    },
  },
  experimental: {
    reactivityTransform: true,
  },
  
});
