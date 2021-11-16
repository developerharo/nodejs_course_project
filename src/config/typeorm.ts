import { createConnection } from 'typeorm';
import path from 'path';

import { environment } from './environment';
// console.log(environment);
export async function connect() {
  await createConnection({
    type: 'postgres',
    port: Number(environment.DB_PORT),
    username: environment.DB_USERNAME,
    password: environment.DB_PASSWORD,
    database: environment.DB_DATABASE,
    entities: [
      path.join(__dirname, '../entity/**/**.ts')
    ],
    synchronize: true,
  })
  console.log(`Database ${environment.DB_DATABASE} running at ${environment.DB_PORT}`);
}