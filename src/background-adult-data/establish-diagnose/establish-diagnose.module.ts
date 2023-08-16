import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { EstablishDiagnoseEntity } from './entities/establish-diagnose.entity';
import { EstablishDiagnoseService } from './establish-diagnose.service';

@Module({
  imports: [TypeOrmModule.forFeature([EstablishDiagnoseEntity])],
  providers: [EstablishDiagnoseService],
  exports: [EstablishDiagnoseService]
})
export class EstablishDiagnoseModule { }
