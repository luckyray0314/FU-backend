import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { SelectedEstablishedDiagnosesEntity } from './entities/selected-established-diagnoses.entity';
import { SelectedEstablishedDiagnosesService } from './selected-established-diagnoses.service';

@Module({
  imports: [TypeOrmModule.forFeature([SelectedEstablishedDiagnosesEntity])],
  providers: [SelectedEstablishedDiagnosesService],
  exports: [SelectedEstablishedDiagnosesService]
})
export class SelectedEstablishedDiagnosesModule { }
