import { defineConfig } from "vite"
import react from "@vitejs/plugin-react"
import { resolve } from "path"

export default defineConfig({
  plugins: [react()],
  root: "src",
  base: "/three-playground/",
  publicDir: "models",
  assetsInclude: ["**/*.glb", "**/*.gltf"],
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, "src/index.html"),
        chair: resolve(__dirname, "src/chair/index.html"),
        city: resolve(__dirname, "src/city/index.html"),
        astronaut: resolve(__dirname, "src/astronaut/index.html"),
      },
    },
  },
})
