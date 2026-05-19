import { Request, Response } from "express";

export class HealthController {
  handle(_request: Request, response: Response) {
    return response.status(200).json({ status: "ok" });
  }
}
