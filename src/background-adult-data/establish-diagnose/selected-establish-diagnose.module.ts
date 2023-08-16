import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { SelectedEstablishDiagnoseEntity } from './entities/selected-establish-diagnose.entity';
import { SelectedEstablishDiagnoseService } from './selected-establish-diagnose.service';

@Module({
  imports: [TypeOrmModule.forFeature([SelectedEstablishDiagnoseEntity])],
  providers: [SelectedEstablishDiagnoseService],
  exports: [SelectedEstablishDiagnoseService]
})
export class SelectedEstablishDiagnoseModule { }
