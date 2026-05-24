import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";
import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const apiProxy = {
  "/api": {
    target: "http://127.0.0.1:5000",
    changeOrigin: true,
  },
};

const disableHmr = process.env.VALUX_DISABLE_HMR === "1";

const publicImagesRoot = fileURLToPath(
  new URL("./public/images/", import.meta.url),
);

const contentTypes = {
  ".avif": "image/avif",
  ".gif": "image/gif",
  ".jpg": "image/jpeg",
  ".jpeg": "image/jpeg",
  ".png": "image/png",
  ".svg": "image/svg+xml",
  ".webp": "image/webp",
};

function setNoCacheHeaders(res) {
  res.setHeader(
    "Cache-Control",
    "no-store, no-cache, must-revalidate, proxy-revalidate",
  );
  res.setHeader("Pragma", "no-cache");
  res.setHeader("Expires", "0");
  res.setHeader("Surrogate-Control", "no-store");
}

function livePublicImages() {
  const serveImage = (req, res, next) => {
    const requestUrl = new URL(req.url ?? "/", "http://localhost");

    if (!requestUrl.pathname.startsWith("/images/")) {
      next();
      return;
    }

    const relativePath = decodeURIComponent(
      requestUrl.pathname.replace(/^\/images\//, ""),
    );
    const filePath = path.resolve(publicImagesRoot, relativePath);

    if (!filePath.startsWith(publicImagesRoot)) {
      res.statusCode = 403;
      res.end("Forbidden");
      return;
    }

    fs.stat(filePath, (statError, stats) => {
      if (statError || !stats.isFile()) {
        next();
        return;
      }

      setNoCacheHeaders(res);
      res.setHeader("Content-Length", stats.size);
      res.setHeader(
        "Content-Type",
        contentTypes[path.extname(filePath).toLowerCase()] ??
          "application/octet-stream",
      );
      res.setHeader("Last-Modified", stats.mtime.toUTCString());
      res.setHeader("ETag", `W/"${stats.size}-${Number(stats.mtimeMs)}"`);

      if (req.method === "HEAD") {
        res.end();
        return;
      }

      fs.createReadStream(filePath).pipe(res);
    });
  };

  return {
    name: "valux-live-public-images",
    configureServer(server) {
      server.middlewares.use(serveImage);
    },
    configurePreviewServer(server) {
      server.middlewares.use(serveImage);
    },
  };
}

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react({
      fastRefresh: false,
    }),
    tailwindcss(),
    livePublicImages(),
  ],
  server: {
    allowedHosts: true,
    hmr: disableHmr ? false : undefined,
    proxy: apiProxy,
  },
  preview: {
    allowedHosts: true,
    proxy: apiProxy,
  },
});
