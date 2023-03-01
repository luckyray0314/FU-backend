import { DataSourceOptions, DataSource } from 'typeorm';

import { CreateUser1557166726050 } from './migrations/1557166726050-CreateUser';
import { CreateProfile1570141220019 } from './migrations/1570141220019-CreateProfile';
import { CreateSessionStorage1584985637890 } from './migrations/1584985637890-CreateSessionStorage';
import { CreateTodo1597106889894 } from './migrations/1597106889894-CreateTodo';

export const dataSourceOptions: DataSourceOptions = {
  type: 'postgres',
  host: 'localhost',
  port: 5432,
  username: 'postgres',
  password: 'postgres',
  database: 'survey',
  entities: [__dirname + '/**/*.entity{.ts,.js}'],
  // migrations: [
  //   CreateUser1557166726050,
  //   CreateProfile1570141220019,
  //   CreateSessionStorage1584985637890,
  //   CreateTodo1597106889894,
  // ],
  migrationsRun: false,
  synchronize: true,
  extra: {
    ssl:
      process.env.VALLENTUNA_SURVEY_BACKEND_SSL_MODE === 'require'
        ? {
            rejectUnauthorized: false,
          }
        : false,
  },
};

export const appDataSource = new DataSource(dataSourceOptions);
