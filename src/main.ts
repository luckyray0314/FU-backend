import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { VALLENTUNA_SURVEY_BACKEND_PORT } from './core/constants/environment.const';
import { setup } from './setup';
import { seedVux } from './seed-vux';
import { seedFollowUp } from './seed-follow-up';
import { seedImportantEventVux } from './seed-important-event-vux';
import { seedBackgroundDataVux } from './seed-background-data-vux';
import { seedImportantEventBof } from './seed-important-event-bof';
// import { createClient } from '@supabase/supabase-js';
// import { Pool } from 'pg';

// const supabaseUrl = 'https://lxstflrwscwaenzwsiwv.supabase.co';
// const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imx4c3RmbHJ3c2N3YWVuendzaXd2Iiwicm9sZSI6ImFub24iLCJpYXQiOjE2OTExMzk4NzYsImV4cCI6MjAwNjcxNTg3Nn0.ieQl89Swq9w-VJ6gOYtXG2sjEyhXlImJprtHhJWjxMU';
// const supabaseClient = createClient(supabaseUrl, supabaseKey);

// const pgPool = new Pool({
//   user: 'postgres',
//   host: 'localhost',
//   database: 'survey',
//   password: 'm81p7*3G8zs7',
//   port: 5432,
// });

// async function moveData() {
//   const { data: users, error } = await supabaseClient.from('vallentuna_users').select('*');
//   console.log("users,", users)
//   if (error) {
//     console.log(error);
//     return;
//   }

//   for (const user of users) {
//     const { id, email, name } = user;
//     const query = {
//       text: 'INSERT INTO users(id, email, name, password) VALUES($1, $2, $3, $4)',
//       values: [id, email, name, "ooo"],
//     };
//     await pgPool.query(query);
//   }

//   console.log('Data moved successfully!');
// }

// moveData();

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  setup(app);
  /* await seedBackgroundDataVux(app);
  await seedImportantEventVux(app);
  await seedFollowUp(app);
  await seedVux(app); */

  await app.listen(VALLENTUNA_SURVEY_BACKEND_PORT);
}
bootstrap();
