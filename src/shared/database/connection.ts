import { Pool } from 'pg';
import 'dotenv/config'; 

const pool = new Pool({ connectionString: process.env.DATABASE_URL });

export const connection = {
    getClient: async () => {
      await pool.connect();
      return pool;
    },
};

