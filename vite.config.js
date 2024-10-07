import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { resolve } from "path"
// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
  ],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    }
  },
  build:{
    rollupOptions:{
      input:{
        index: resolve(__dirname, "index.html"),  // 入口文件（每个都要声明）
        home: resolve(__dirname, "home.html") 
      }
    }
  }
})
