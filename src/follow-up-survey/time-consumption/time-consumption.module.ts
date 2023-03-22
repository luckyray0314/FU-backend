import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { TimeConsumptionService } from './time-consumption.service';
import { TimeConsumptionEntity } from './entities/time-consumption.entity';

@Module({
  imports: [TypeOrmModule.forFeature([TimeConsumptionEntity])],
  providers: [TimeConsumptionService],
  exports: [TimeConsumptionService]
})
export class TimeConsumptionModule { }
