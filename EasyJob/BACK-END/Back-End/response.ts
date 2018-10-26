import { Response, Request } from "express";

export interface responseRequest {
  (req: Request, res: Response): Promise<Response>;
}
