import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { SelectedDuringOperationEntity } from './entities/selected-during-operation.entity';
import { SelectedDuringOperationService } from './selected-during-operation.service';

@Module({
  imports: [TypeOrmModule.forFeature([SelectedDuringOperationEntity])],
  providers: [SelectedDuringOperationService],
  exports: [SelectedDuringOperationService]
})
export class SelectedDuringOperationModule { }
