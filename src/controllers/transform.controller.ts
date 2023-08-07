import { Request, Response } from 'express';
import { DatabaseError, QueryResult } from 'pg';
import { getBloodDonorByType } from '../queries';



export const transform = async (req: Request, res: Response): Promise<Response> => {
  try {
    const type: string = req.query.type as string;
    const response: QueryResult = await getBloodDonorByType(type);
    return res.status(200).json({message: response.rows});
  } catch (err: DatabaseError | any) {
    return res.status(500).json({message: `Internal server error. ${err.message}`});
  }
}
