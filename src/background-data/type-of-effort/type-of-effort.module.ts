import { Module } from '@nestjs/common';
import { TypeOfEffortService } from './type-of-effort.service';
import { TypeOfEffortController } from './type-of-effort.controller';

@Module({
  controllers: [TypeOfEffortController],
  providers: [TypeOfEffortService]
})
export class TypeOfEffortModule {}
