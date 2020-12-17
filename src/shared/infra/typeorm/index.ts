import { createConnection } from 'typeorm';

import databaseConfig from '@config/database';

const { host, port, username, password, database } = databaseConfig.postgres;

createConnection({
  type: 'postgres',
  host,
  port,
  username,
  password,
  database,
  migrations: ['./src/shared/infra/typeorm/migrations/*.ts'],
  entities: ['./src/modules/**/infra/typeorm/entities/*.ts'],
  migrationsRun: false,
});
