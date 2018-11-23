import { Response, Request } from 'express';

export interface ResponseRequest {
  (req: Request, res: Response): Promise<Response>;
}
