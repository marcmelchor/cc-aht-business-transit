import { Pool } from 'pg';

import { environment } from '../environments/environment';


export const pool: Pool = new Pool({
  user: environment.db.user,
  host: environment.db.host,
  password: environment.db.password,
  database: environment.db.database,
  port: environment.db.port,
});
