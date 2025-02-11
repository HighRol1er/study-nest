import { drizzle } from 'drizzle-orm/node-postgres';
import { Pool } from 'pg';

const pool = new Pool({
  host: 'localhost',
  port: 5432,
  user: 'postgres',
  password: 'hunterjoe98',
  database: 'culture_db',
});

// 연결 테스트
pool.connect((err) => {
  if (err) {
    console.error('Database connection error:', err);
  } else {
    console.log('Successfully connected to database');
  }
});

export const db = drizzle(pool); 