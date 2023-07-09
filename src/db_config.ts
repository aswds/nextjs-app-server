import * as process from 'process';
import { TypeOrmModuleOptions } from '@nestjs/typeorm';
import { config } from 'dotenv';

config();

const env_const = process.env;
const db_config: TypeOrmModuleOptions = {
  type: 'mssql',
  host: env_const['DB_HOST'],
  port: parseInt(env_const.DB_PORT, 10),
  username: env_const.DB_USER,
  password: env_const.DB_PASSWORD,
  database: env_const.DB_NAME,
  extra: { trustServerCertificate: true },

  synchronize: true,
};

export default db_config;
