import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { SelectedActionAssignmentEntity } from './entities/selected-action-assignment.entity';
import { SelectedActionAssignmentService } from './selected-action-assignment.service';

@Module({
  imports: [TypeOrmModule.forFeature([SelectedActionAssignmentEntity])],
  providers: [SelectedActionAssignmentService],
  exports: [SelectedActionAssignmentService]
})
export class SelectedActionAssignmentModule { }
