import { NestFactory } from '@nestjs/core';

import { AppModule } from './app.module';
import { VALLENTUNA_SURVEY_BACKEND_PORT } from './core/constants/environment.const';
import { SeedService } from './seeds/seed.service';
import { setup } from './setup';
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

  const seedService = app.get<SeedService>(SeedService);
  await seedService.seedBackgroundMetadata();
  await seedService.seedScoreData();
  await seedService.seedCloseStatusData();
  await seedService.seedAdultScoreData();
  await seedService.seedGenders();
  await seedService.seedEducationVh1s();
  await seedService.seedEducationVh2s();
  await seedService.seedEmploymentVh1s();
  await seedService.seedEmploymentVh2s();
  await seedService.seedEstablishedDiagnosess();
  await seedService.seedFamilyConstellations();
  await seedService.seedInterpreterRequireds();
  await seedService.seedOtherInterventionss();
  await seedService.seedPreviousInterventions();
  await seedService.seedProblemAreas();
  await seedService.seedReasonForUpdates();
  await seedService.seedSchoolUniforms();
  await seedService.seedTypeOfEfforts();
  await seedService.seedWhoParticipatess();
  await seedService.seedInterventionPeriods();
  await seedService.seedInterventionProgresss();
  await seedService.seedReasonForTerminations();
  await seedService.seedTimeConsumptions();
  await seedService.seedOtherInterventionsStarted();
  await seedService.seedDuringIntervention();
  await seedService.seedDuringPast();
  await seedService.seedChildSchool();
  await seedService.seedChangeAccomodation();
  await seedService.seedChangeEmploymentVh1();
  await seedService.seedChangeEmploymentVh2();

  await seedService.seedBackgroundAdultMetadata();
  await seedService.seedActionAssignment();
  await seedService.seedDuringOperation();
  await seedService.seedEducationLevel();
  await seedService.seedEmployment();
  await seedService.seedEstablishDiagnose();
  await seedService.seedFamilyConstellationAdult();
  await seedService.seedAdultGenders();
  await seedService.seedOtherOngoingEffort();
  await seedService.seedPreviousEffort();
  await seedService.seedProblemAreaAdult();


  await app.listen(VALLENTUNA_SURVEY_BACKEND_PORT || 5000);
}
bootstrap();

