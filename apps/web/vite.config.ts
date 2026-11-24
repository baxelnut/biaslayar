import { fileURLToPath, URL } from "node:url";
import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";

const path = (value: string) => fileURLToPath(new URL(value, import.meta.url));

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      "@": path("./src"),
      "@biaslayar/components": path("../../packages/shared/src/components"),
      "@biaslayar/data": path("../../packages/shared/src/data"),
      "@biaslayar/hooks": path("../../packages/shared/src/hooks"),
      "@biaslayar/lib": path("../../packages/shared/src/lib"),
      "@biaslayar/types": path("../../packages/shared/src/types"),
    },
  },
  server: { port: 5173 },
});
