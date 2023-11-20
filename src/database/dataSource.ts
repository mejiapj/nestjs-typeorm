import { DataSource } from 'typeorm';

/*host: 'localhost',
  port: 5432,
  username: 'postgres',
  password: 'admin',
  database: 'my_db',
 */

export const connectionSource = new DataSource({
  type: 'postgres',
  url: 'postgres://postgres:admin@localhost:5432/my_db',
  synchronize: false,
  logging: false,
  entities: ['src/**/*.entity.ts'],
  migrations: ['src/database/migrations/*.ts'],
  migrationsTableName: 'migrations',
});
