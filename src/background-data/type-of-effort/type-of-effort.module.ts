import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { TypeOfEffortEntity } from './entities/type-of-effort.entity';
import { TypeOfEffortRepository } from './type-of-effort.repository';
import { TypeOfEffortService } from './type-of-effort.service';

@Module({
  imports: [TypeOrmModule.forFeature([ TypeOfEffortEntity ])],
  providers: [TypeOfEffortService, TypeOfEffortRepository],
  exports: [TypeOfEffortService, TypeOfEffortRepository]
})
export class TypeOfEffortModule {}
