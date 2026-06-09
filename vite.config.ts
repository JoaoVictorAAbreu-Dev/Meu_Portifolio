import { defineConfig, loadEnv } from "vite";
import react from "@vitejs/plugin-react";
import { resolveSiteUrl } from "./scripts/resolve-site-url.mjs";

export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, ".", "");
  const siteUrl = resolveSiteUrl({
    ...process.env,
    ...env,
  });

  return {
    plugins: [
      react(),
      {
        name: "inject-site-url",
        transformIndexHtml(html) {
          return html.replaceAll("__SITE_URL__", siteUrl);
        },
      },
    ],
    base: env.VITE_BASE_PATH || "/",
    define: {
      __SITE_URL__: JSON.stringify(siteUrl),
    },
  };
});
