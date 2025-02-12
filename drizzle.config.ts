import type { Config } from 'drizzle-kit';

export default {
  schema: './src/db/schema.ts',
  out: './drizzle',
  dialect: 'postgresql',
  dbCredentials: {
    host: process.env.DB_HOST || 'localhost', // 환경변수에서 호스트 가져오기 
    port: Number(process.env.DB_PORT) || 5432, // 환경변수에서 포트 가져오기
    user: process.env.DB_USER || 'postgres', // 환경변수에서 사용자 가져오기
    password: process.env.DB_PASSWORD || 'postgres', // 환경변수에서 비밀번호 가져오기
    database: process.env.DB_NAME || 'culture_db', // 환경변수에서 데이터베이스 이름 가져오기
  },
} satisfies Config;   