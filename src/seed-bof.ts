import { INestApplication } from '@nestjs/common';
import { SeedBofService } from './seeds/bof/seed-bof.service';

export async function seedBof(
  app: INestApplication,
): Promise<INestApplication> {
  const seedService = app.get<SeedBofService>(SeedBofService);

  /* console.log('Start clear data bof');
  await seedService.clearBofData();
  console.log('End clear data bof'); */

  console.log('Start background data bof seed');
  await seedService.seedBackgroundDataBof();
  console.log('End background data bof seed');

  console.log('Start follow up seed');
  await seedService.seedFollowUpData();
  console.log('End follow up seed');

  console.log('Start important event bof seed');
  await seedService.seedImportantEventBof();
  console.log('End important event bof seed');

  /* console.log('Start bof seed');
  await seedService.seedBofData();
  console.log('End bof seed'); */

  return app;
}
