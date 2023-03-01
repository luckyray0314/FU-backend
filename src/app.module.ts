import { Module } from '@nestjs/common';
import { TerminusModule } from '@nestjs/terminus';
import { TypeOrmModule } from '@nestjs/typeorm';

import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthModule } from './auth/auth.module';
import { EducationVh1Module } from './background-data/education-vh1/education-vh1.module';
import { EducationVh2Module } from './background-data/education-vh2/education-vh2.module';
import { EmploymentVh1Module } from './background-data/employment-vh1/employment-vh1.module';
import { EmploymentVh2Module } from './background-data/employment-vh2/employment-vh2.module';
import { EstablishedDiagnosesModule } from './background-data/established-diagnoses/established-diagnoses.module';
import { FamilyConstellationModule } from './background-data/family-constellation/family-constellation.module';
import { GenderModule } from './background-data/gender/gender.module';
import { InterpreterRequiredModule } from './background-data/interpreter-required/interpreter-required.module';
import { OtherInterventionsModule } from './background-data/other-interventions/other-interventions.module';
import { PreviousInterventionModule } from './background-data/previous-intervention/previous-intervention.module';
import { ProblemAreaModule } from './background-data/problem-area/problem-area.module';
import { ReasonForUpdateModule } from './background-data/reason-for-update/reason-for-update.module';
import { SchoolUniformModule } from './background-data/school-uniform/school-uniform.module';
import { TypeOfEffortModule } from './background-data/type-of-effort/type-of-effort.module';
import { WhoParticipatesModule } from './background-data/who-participates/who-participates.module';
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
    GenderModule,
    EducationVh1Module,
    EducationVh2Module,
    EmploymentVh1Module,
    EmploymentVh2Module,
    EstablishedDiagnosesModule,
    FamilyConstellationModule,
    InterpreterRequiredModule,
    OtherInterventionsModule,
    PreviousInterventionModule,
    ProblemAreaModule,
    ReasonForUpdateModule,
    SchoolUniformModule,
    TypeOfEffortModule,
    WhoParticipatesModule,
  ],
  controllers: [AppController, HealthController],
  providers: [
    AppService
  ],
})
export class AppModule {}
