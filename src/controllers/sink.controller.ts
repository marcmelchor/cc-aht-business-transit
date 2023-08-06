import { Request, Response } from 'express';
import { DatabaseError, QueryResult } from 'pg';

import { getDevelopers } from '../queries';


export const sinkData = async (req: Request, res: Response): Promise<Response> => {
  console.log(req.body);
  try {
    const response: QueryResult = await getDevelopers();
    return res.status(200).json(response.rows);
  } catch (err: DatabaseError | any) {
    return res.status(500).json({message: `Internal server error. ${err.message}`});
  }
}
