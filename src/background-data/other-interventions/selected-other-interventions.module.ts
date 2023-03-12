import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { SelectedOtherInterventionsEntity } from './entities/selected-other-interventions.entity';
import { SelectedOtherInterventionsService } from './selected-other-interventions.service';

@Module({
  imports: [TypeOrmModule.forFeature([SelectedOtherInterventionsEntity])],
  providers: [SelectedOtherInterventionsService],
  exports: [SelectedOtherInterventionsService]
})
export class SelectedOtherInterventionsModule { }
