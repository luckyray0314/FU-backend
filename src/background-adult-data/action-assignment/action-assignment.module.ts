import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ActionAssignmentEntity } from './entities/action-assignment.entity';
import { ActionAssignmentService } from './action-assignment.service';

@Module({
  imports: [TypeOrmModule.forFeature([ActionAssignmentEntity])],
  providers: [ActionAssignmentService],
  exports: [ActionAssignmentService]
})
export class ActionAssignmentModule { }
