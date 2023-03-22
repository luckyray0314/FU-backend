import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ReasonForTerminationService } from './reason-for-termination.service';
import { ReasonForTerminationEntity } from './entities/reason-for-termination.entity';

@Module({
  imports: [TypeOrmModule.forFeature([ReasonForTerminationEntity])],
  providers: [ReasonForTerminationService],
  exports: [ReasonForTerminationService]
})
export class ReasonForTerminationModule { }
