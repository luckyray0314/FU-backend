import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PreviousEffortEntity } from './entities/previous-effort.entity';
import { PreviousEffortService } from './previous-effort.service';

@Module({
  imports: [TypeOrmModule.forFeature([PreviousEffortEntity])],
  providers: [PreviousEffortService],
  exports: [PreviousEffortService]
})
export class PreviousEffortModule { }
