import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

export default defineConfig({
  plugins: [vue()],
  // 核心修复：关闭模块预加载，强制打包为单文件
  build: {
    target: 'es2015',
    modulePreload: {
      polyfill: false
    },
    rollupOptions: {
      output: {
        // 强制打包为单个文件，消除裸导入
        format: 'iife',
        entryFileNames: 'assets/index.js',
        chunkFileNames: 'assets/[name].js',
        assetFileNames: 'assets/[name].[ext]',
        // 禁止拆分代码，确保所有依赖都在一个文件里
        manualChunks: () => 'index.js'
      }
    },
    // 关闭源码映射，避免额外文件加载问题
    sourcemap: false
  },
  // 相对路径适配 Netlify
  base: './',
  server: {
    port: 3000,
    open: true
  }
})