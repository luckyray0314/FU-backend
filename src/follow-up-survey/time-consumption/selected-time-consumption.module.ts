import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { SelectedTimeConsumptionEntity } from './entities/selected-time-consumption.entity';
import { SelectedTimeConsumptionService } from './selected-time-consumption.service';

@Module({
  imports: [TypeOrmModule.forFeature([SelectedTimeConsumptionEntity])],
  providers: [SelectedTimeConsumptionService],
  exports: [SelectedTimeConsumptionService]
})
export class SelectedTimeConsumptionModule { }
