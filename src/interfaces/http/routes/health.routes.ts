import { Router } from "express";

import { HealthController } from "../controllers/health.controller";

const healthController = new HealthController();

export const healthRoutes = Router();

healthRoutes.get("/", healthController.handle);
