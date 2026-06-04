import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";

// disclozure.github.io is a user site → served from "/"
// For a project site (e.g. user.github.io/repo), change base to "/repo/".
export default defineConfig({
  plugins: [react(), tailwindcss()],
  base: "/",
});
