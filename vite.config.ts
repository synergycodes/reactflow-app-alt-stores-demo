import { defineConfig } from "vite";
import { fileURLToPath, URL } from "node:url";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss()],
  resolve: {
    alias: {
      "@ts": fileURLToPath(new URL("./src/consts/types.ts", import.meta.url)),
      "@": fileURLToPath(new URL("./src/", import.meta.url)),
    },
  },
});
