import { defineConfig } from 'vite'
import uni from '@dcloudio/vite-plugin-uni'
import AutoImport from 'unplugin-auto-import/vite'
import WindiCSS from 'vite-plugin-windicss';
import MiniProgramTailwind from '@dcasia/mini-program-tailwind-webpack-plugin/rollup';
import path from 'path'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    uni(),
    AutoImport({
      imports: ['vue', 'uni-app'],
      dts: './auto-imports.d.ts', // 安装好依赖后，重新运行编译即可自动在根目录下生成此声明文件
    }),
    WindiCSS(),
    MiniProgramTailwind()
  ],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'src'),
      '@img': path.resolve(__dirname, 'src/static/images'),
    },
  },
  css: {
    preprocessorOptions: {
      scss: {
        additionalData: `@import "@/styles/vars.scss";`,
      },
    },
  },
})
