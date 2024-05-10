import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import path from "path";
import dts from "vite-plugin-dts";

// https://vitejs.dev/config/

const outDir = path.resolve(__dirname, "dist");
export default defineConfig({
  plugins: [
    vue(),
    dts({
      exclude: ["node_modules"],
      outDir: path.resolve(outDir, "types"),
      staticImport: false,
      cleanVueFileName: false,
    })
  ],
  root: './demo',
  build: {
    // assets path
    assetsDir: path.resolve(__dirname, "src", "assets"),
    // output path
    outDir: outDir,
    // sourcemap settings。
    sourcemap: false,
    lib: {
      entry: path.resolve(__dirname, "src", "index.ts"),
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
