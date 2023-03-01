import { Module } from '@nestjs/common';
import { TerminusModule } from '@nestjs/terminus';
import { TypeOrmModule } from '@nestjs/typeorm';

import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthModule } from './auth/auth.module';
import { GenderModule } from './background-data/gender/gender.module';
import { dataSourceOptions } from './data-source';
import { HealthController } from './health.controller';
import { SeedModule } from './seeds/seed.module';
import { UserModule } from './user/user.module';

@Module({
  imports: [
    TypeOrmModule.forRoot({ ...dataSourceOptions, autoLoadEntities: true }),
    TerminusModule,
    SeedModule,
    UserModule,
    AuthModule,
    GenderModule
  ],
  controllers: [AppController, HealthController],
  providers: [
    AppService
  ],
})
export class AppModule {}
