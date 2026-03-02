import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

export default defineConfig({
  plugins: [vue()],
  // 核心：兼容浏览器的构建配置，彻底解决裸导入
  build: {
    target: 'es2015',
    // 强制将所有依赖打包到最终文件，消除裸导入
    rollupOptions: {
      external: [], // 不排除任何依赖，全部打包
      output: {
        format: 'es', // Vue 3 推荐的 ES 模块格式
        // 确保资源路径是相对的
        entryFileNames: 'assets/[name].js',
        chunkFileNames: 'assets/[name].js',
        assetFileNames: 'assets/[name].[ext]'
      }
    },
    sourcemap: false
  },
  // 关键：相对路径，解决资源 404
  base: './',
  server: {
    port: 3000,
    open: true
  }
})
