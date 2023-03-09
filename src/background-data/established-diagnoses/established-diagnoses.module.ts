import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { EstablishedDiagnosesEntity } from './entities/established-diagnoses.entity';
import { SelectedEstablishedDiagnosesEntity } from './entities/selected-established-diagnoses.entity';
import { EstablishedDiagnosesRepository } from './established-diagnoses.repository';
import { EstablishedDiagnosesService } from './established-diagnoses.service';
import { SelectedEstablishedDiagnosesRepository } from './selected-established-diagnoses.repository';
import { SelectedEstablishedDiagnosesService } from './selected-established-diagnoses.service';

@Module({
  imports: [TypeOrmModule.forFeature([EstablishedDiagnosesEntity, SelectedEstablishedDiagnosesEntity])],
  providers: [EstablishedDiagnosesService, EstablishedDiagnosesRepository, SelectedEstablishedDiagnosesService, SelectedEstablishedDiagnosesRepository],
  exports: [EstablishedDiagnosesService, EstablishedDiagnosesRepository, SelectedEstablishedDiagnosesService, SelectedEstablishedDiagnosesRepository]
})
export class EstablishedDiagnosesModule { }
