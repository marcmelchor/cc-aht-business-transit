import { Request, Response } from 'express';
import { QueryResult } from 'pg';
import { pool } from '../utils/database';

export const sinkData = async (_req: Request, res: Response): Promise<void> => {
  const response: QueryResult = await pool.query('SELECT * FROM developers');
  res.json(response.rows);
}
