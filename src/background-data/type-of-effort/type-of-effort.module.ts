import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { TypeOfEffortEntity } from './entities/type-of-effort.entity';
import { TypeOfEffortService } from './type-of-effort.service';

@Module({
  imports: [TypeOrmModule.forFeature([TypeOfEffortEntity])],
  providers: [TypeOfEffortService],
  exports: [TypeOfEffortService]
})
export class TypeOfEffortModule { }
