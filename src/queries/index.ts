import { pool } from '../utils/database';
import { QueryResult } from 'pg';

import { Producer } from '../models/producer.model';


export async function postBloodDonor(data: Producer): Promise<QueryResult> {
  return await pool.query(
    'INSERT INTO donors(donor_id, type, rh_factor, blood_group, username) VALUES ($1, $2, $3, $4, $5)',
    [data.id, data.type, data.rh_factor, data.group, data.username]);
}
