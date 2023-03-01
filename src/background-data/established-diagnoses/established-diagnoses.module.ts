import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { EstablishedDiagnosesEntity } from './entities/established-diagnoses.entity';
import { EstablishedDiagnosesController } from './established-diagnoses.controller';
import { EstablishedDiagnosesRepository } from './established-diagnoses.repository';
import { EstablishedDiagnosesService } from './established-diagnoses.service';

@Module({
  imports: [TypeOrmModule.forFeature([ EstablishedDiagnosesEntity ])],
  providers: [EstablishedDiagnosesService, EstablishedDiagnosesRepository],
  controllers: [EstablishedDiagnosesController],
  exports: [EstablishedDiagnosesService, EstablishedDiagnosesRepository]
})
export class EstablishedDiagnosesModule {}
