import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { DuringOperationEntity } from './entities/during-operation.entity';
import { DuringOperationService } from './during-operation.service';

@Module({
  imports: [TypeOrmModule.forFeature([DuringOperationEntity])],
  providers: [DuringOperationService],
  exports: [DuringOperationService]
})
export class DuringOperationModule { }
