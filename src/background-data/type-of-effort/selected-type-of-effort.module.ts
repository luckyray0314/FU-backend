import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { SelectedTypeOfEffortEntity } from './entities/selected-type-of-effort.entity';
import { SelectedTypeOfEffortService } from './selected-type-of-effort.service';

@Module({
  imports: [TypeOrmModule.forFeature([SelectedTypeOfEffortEntity])],
  providers: [SelectedTypeOfEffortService],
  exports: [SelectedTypeOfEffortService]
})
export class SelectedTypeOfEffortModule { }
