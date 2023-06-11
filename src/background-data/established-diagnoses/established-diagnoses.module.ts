import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { EstablishedDiagnosesEntity } from './entities/established-diagnoses.entity';
import { EstablishedDiagnosesService } from './established-diagnoses.service';

@Module({
  imports: [TypeOrmModule.forFeature([EstablishedDiagnosesEntity])],
  providers: [EstablishedDiagnosesService],
  exports: [EstablishedDiagnosesService]
})
export class EstablishedDiagnosesModule { }
