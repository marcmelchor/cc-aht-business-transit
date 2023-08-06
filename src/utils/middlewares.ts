import { NextFunction, Request, Response } from 'express';
import { environment } from '../environments/environment';

export const isAllowed = async (req: Request, res: Response, next: NextFunction): Promise<Response | void> => {
  try {
    const authHeaderToken: string | undefined = req.headers.authorization;
    const autSinkToken: string = `Bearer ${environment.transportAndLoadToken}`;
    if (!authHeaderToken || authHeaderToken !== autSinkToken) {
      return res.status(403).json({message: 'Unauthorized to consume endpoint'});
    }

    return next();
  } catch (err: any) {
    return res.status(400).json({message: err.message});
  }
}
