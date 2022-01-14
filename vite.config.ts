import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import vueJsx from "@vitejs/plugin-vue-jsx";
import path from "path";
import dts from "vite-plugin-dts";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    vueJsx({}),
    dts({
      exclude: ["node_modules"],
      outputDir: "dist/types",
      staticImport: false,
      cleanVueFileName: false,
      skipDiagnostics: false,
      logDiagnostics: true
    })
  ],
  build: {
    // 静态文件目录
    assetsDir: "src/assets",
    // 生成文件目录
    outDir: "dist",
    // 构建后是否生成 source map 文件。
    sourcemap: false,
    lib: {
      entry: path.resolve(__dirname, "src/index.ts"),
      // formats: ["es"],
      name: "vue-treeselect",
      fileName: `treeselect`
    },
    rollupOptions: {
      external: ["vue", "lodash"],
      output: {
        globals: {
          vue: "Vue",
          lodash: "lodash"
        },
        exports: "named"
      }
    }
  },
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src")
    }
  }
});
