import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { SelectedTypeOfEffortEntity } from './entities/selected-type-of-effort.entity';
import { TypeOfEffortEntity } from './entities/type-of-effort.entity';
import { SelectedTypeOfEffortRepository } from './selected-type-of-effort.repository';
import { SelectedTypeOfEffortService } from './selected-type-of-effort.service';
import { TypeOfEffortRepository } from './type-of-effort.repository';
import { TypeOfEffortService } from './type-of-effort.service';

@Module({
  imports: [TypeOrmModule.forFeature([TypeOfEffortEntity, SelectedTypeOfEffortEntity])],
  providers: [TypeOfEffortService, TypeOfEffortRepository, SelectedTypeOfEffortService, SelectedTypeOfEffortRepository],
  exports: [TypeOfEffortService, TypeOfEffortRepository, SelectedTypeOfEffortService, SelectedTypeOfEffortRepository]
})
export class TypeOfEffortModule { }
