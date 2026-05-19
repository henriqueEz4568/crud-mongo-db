import express from "express";

import { healthRoutes } from "./interfaces/http/routes/health.routes";

export function createApp() {
  const app = express();

  app.use(express.json());
  app.use("/health", healthRoutes);

  return app;
}
