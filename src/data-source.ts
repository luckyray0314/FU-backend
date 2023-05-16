import { DataSourceOptions, DataSource } from 'typeorm';

export const dataSourceOptions: DataSourceOptions = {
  type: 'postgres',
  host: '194.242.11.106',
  port: 5432,
  username: 'postgres',
  password: 'm81p7*3G8zs7',
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
