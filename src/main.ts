import { NestFactory } from '@nestjs/core';

import { AppModule } from './app.module';
import { SeedService } from './seeds/seed.service';
import { setup } from './setup';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  setup(app);

  const seedService = app.get<SeedService>(SeedService);
  await seedService.seedBackgroundMetadata();
  await seedService.seedScoreData();
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


  await app.listen(process.env.VALLENTUNA_SURVEY_BACKEND_PORT || 5000);
}
bootstrap();
