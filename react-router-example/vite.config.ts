import { reactRouter } from "@react-router/dev/vite";
import tailwindcss from "@tailwindcss/vite";
import { defineConfig } from "vite";
import tsconfigPaths from "vite-tsconfig-paths";

export default defineConfig({
  optimizeDeps: {
    include: ["suffix-node-modules"],
  },
  ssr: {
    noExternal: ["suffix-node-modules"],
  },

  plugins: [tailwindcss(), reactRouter(), tsconfigPaths()],

  build: {
    cssMinify: true,
    ssr: false,
  },
});
