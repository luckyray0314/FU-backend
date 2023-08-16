import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { OtherOngoingEffortEntity } from './entities/other-ongoing-effort.entity';
import { OtherOngoingEffortService } from './other-ongoing-effort.service';

@Module({
  imports: [TypeOrmModule.forFeature([OtherOngoingEffortEntity])],
  providers: [OtherOngoingEffortService],
  exports: [OtherOngoingEffortService]
})
export class OtherOngoingEffortModule { }
