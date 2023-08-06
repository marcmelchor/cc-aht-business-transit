import { pool } from '../utils/database';
import { QueryResult } from 'pg';


export async function getDevelopers(): Promise<QueryResult> {
  return await pool.query('SELECT * FROM developers');
}
