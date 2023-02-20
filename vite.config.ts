import { fileURLToPath, URL } from 'node:url'
import { defineConfig, loadEnv, } from 'vite'
import { viteMockServe } from 'vite-plugin-mock'
import viteCompression from 'vite-plugin-compression'
import vue from '@vitejs/plugin-vue'

// 自动按需引入 elementUI 组件库
import AutoImport from 'unplugin-auto-import/vite'
import Components from 'unplugin-vue-components/vite'
import { ElementPlusResolver } from 'unplugin-vue-components/resolvers'
// 手动按需引入组件样式文件
import ElementPlus from 'unplugin-element-plus/vite'

// https://vitejs.dev/config/
export default (mode: string,) => {
  const env = loadEnv(mode, '');

  return defineConfig({
    base: './', //打包路径
    plugins: [
      vue(),
      viteMockServe({
        mockPath: 'mock',
        localEnabled: true,
      }),
      ElementPlus(),
      AutoImport({
        resolvers: [ElementPlusResolver()],
      }),
      Components({
        dirs: ['src/components'], // 指定组件所在文件夹的位置，默认是src/components
        extensions: ['vue'], //文件扩展
        dts: 'src/components.d.ts', // 配置type文件生成位置
        resolvers: [ElementPlusResolver()],
      }),
      // gzip压缩 生产环境生成 .gz 文件
      viteCompression({
        verbose: true,
        disable: false,
        threshold: 10240,
        algorithm: 'gzip',
        ext: '.gz',
      }),
    ],
    // 配置别名
    resolve: {
      alias: {
        '@': fileURLToPath(new URL('./src', import.meta.url))
      },
      // 导入时想要省略的扩展名列表  不建议使用 .vue 影响IDE和类型支持
      extensions: ['.js', '.ts', '.jsx', '.tsx', '.json'],
    },
    css: {
      preprocessorOptions: {
        scss: {
          // additionalData: `$injectedColor:orange;`,
          // additionalData: '@import "@/assets/global.scss";',
        },
      },
    },
    // 引入第三方的配置
    optimizeDeps: {
      include: ['axios'],
    },
    //启动服务配置
    server: {
      host: "0.0.0.0", // 指定服务器应该监听哪个 IP 地址。 如果将此设置为 0.0.0.0 或者 true 将监听所有地址，包括局域网和公网地址
      cors: true, // 为开发服务器配置 CORS , 默认启用并允许任何源
      open: true, // 服务启动时自动在浏览器中打开应用
      https: false, // 是否启用 http 2
      port: 1013,
      strictPort: false, //设为true时端口被占用则直接退出，不会尝试下一个可用端口
      proxy: {
        '/fapp': {
          target: env.VITE_BASIC_URL, //代理接口
          changeOrigin: true,
          // rewrite: (path) => path.replace(/^\/fapp/, ''),
        },

        // 字符串简写写法
        // '/': 'http://localhost:8229',
      },
    },
    // 生产环境打包配置
    build: {
      target: 'modules',
      outDir: 'dist', // 指定输出路径
      emptyOutDir: true, // 默认情况下，若 outDir 在 root 目录下，则 Vite 会在构建时清空该目录。
      assetsDir: 'static', // 指定生成静态资源的存放路径
      minify: "terser", // esbuild || terser, 混淆器 , terser 构建后文件体积更小
      reportCompressedSize: false, // 启用/禁用 gzip 压缩大小报告。压缩大型输出文件可能会很慢，因此禁用该功能可能会提高大型项目的构建性能。
      terserOptions: {
        compress: {
          // 打包生产环境 去除 console 和 debug
          drop_console: true,
          drop_debugger: true,
        },
      },
      rollupOptions: {
        output: {
          //静态资源分类打包
          chunkFileNames: 'static/js/[name]-[hash].js',
          entryFileNames: 'static/js/[name]-[hash].js',
          assetFileNames: 'static/[ext]/[name]-[hash].[ext]',
        },
      },
    },
  })


} 