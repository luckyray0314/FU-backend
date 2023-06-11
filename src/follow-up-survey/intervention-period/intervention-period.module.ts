import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { InterventionPeriodService } from './intervention-period.service';
import { InterventionPeriodEntity } from './entities/intervention-period.entity';

@Module({
  imports: [TypeOrmModule.forFeature([InterventionPeriodEntity])],
  providers: [InterventionPeriodService],
  exports: [InterventionPeriodService]
})
export class InterventionPeriodModule { }
