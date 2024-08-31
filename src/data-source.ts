import { DataSource, DataSourceOptions } from 'typeorm';
import {
  POSTGRES_HOST,
  POSTGRES_NAME,
  POSTGRES_PASS,
  POSTGRES_PORT,
  POSTGRES_USER,
  VALLENTUNA_SURVEY_BACKEND_SSL_MODE,
} from './core/constants/environment.const';

export const dataSourceOptions: DataSourceOptions = {
  type: 'postgres',
  host: POSTGRES_HOST,
  port: Number(POSTGRES_PORT),
  username: POSTGRES_USER,
  password: POSTGRES_PASS,
  database: POSTGRES_NAME,
  entities: [__dirname + '/**/*.entity{.ts,.js}'],
  // migrations: [
  //   CreateUser1557166726050,
  //   CreateProfile1570141220019,
  //   CreateSessionStorage1584985637890,
  //   CreateTodo1597106889894,
  // ],
  migrationsRun: false,
  synchronize: true,
  // extra: {
  //   ssl:
  //     VALLENTUNA_SURVEY_BACKEND_SSL_MODE === 'require'
  //       ? {
  //           rejectUnauthorized: false,
  //         }
  //       : false,
  // },
};

export const appDataSource = new DataSource(dataSourceOptions);
