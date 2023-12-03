import { defineConfig, splitVendorChunkPlugin } from "vite";
import react from "@vitejs/plugin-react";
import { manualChunksPlugin } from "vite-plugin-webpackchunkname";

export default defineConfig({
  plugins: [react(), splitVendorChunkPlugin(), manualChunksPlugin()],
});
