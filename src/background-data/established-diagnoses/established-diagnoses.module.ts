import { Module } from '@nestjs/common';
import { EstablishedDiagnosesService } from './established-diagnoses.service';
import { EstablishedDiagnosesController } from './established-diagnoses.controller';

@Module({
  controllers: [EstablishedDiagnosesController],
  providers: [EstablishedDiagnosesService]
})
export class EstablishedDiagnosesModule {}
