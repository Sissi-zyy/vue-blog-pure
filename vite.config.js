import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

export default defineConfig({
  plugins: [vue()],
  // 核心修复：打包为 iife 格式，消除浏览器裸导入
  build: {
    target: 'es2015',
    modulePreload: {
      polyfill: false
    },
    rollupOptions: {
      output: {
        // 改为兼容的 iife 格式，移除 manualChunks
        format: 'iife',
        entryFileNames: 'assets/index.js',
        chunkFileNames: 'assets/[name].js',
        assetFileNames: 'assets/[name].[ext]'
      }
    },
    sourcemap: false
  },
  // 相对路径适配 Netlify
  base: './',
  server: {
    port: 3000,
    open: true
  }
})
