import { defineConfig, type Plugin } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";
import { componentTagger } from "lovable-tagger";

const marketplaceDevApi = (): Plugin => ({
  name: "marketplace-dev-api",
  configureServer(server) {
    process.env.MARKETPLACE_DEV_MODE ||= "true";
    server.middlewares.use(async (req, res, next) => {
      const url = req.url || "";
      if (!url.startsWith("/api/aws-marketplace/")) {
        next();
        return;
      }
      try {
        const action = url.split("?")[0].split("/").filter(Boolean)[2] || "";
        const mod = await server.ssrLoadModule("/api/aws-marketplace/[action].ts");
        (req as { query?: Record<string, string> }).query = { action };
        await mod.default(req, res);
      } catch (error) {
        console.error(error);
        if (!res.writableEnded) {
          res.statusCode = 500;
          res.setHeader("Content-Type", "application/json");
          res.end(JSON.stringify({ error: "Marketplace API failed in development." }));
        }
      }
    });
  },
});

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => ({
  server: {
    host: "::",
    port: 8080,
  },
  plugins: [react(), mode === "development" && componentTagger(), mode === "development" && marketplaceDevApi()].filter(Boolean),
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
}));
