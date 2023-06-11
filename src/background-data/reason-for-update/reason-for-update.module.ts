import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ReasonForUpdateEntity } from './entities/reason-for-update.entity';
import { ReasonForUpdateRepository } from './reason-for-update.repository';
import { ReasonForUpdateService } from './reason-for-update.service';

@Module({
  imports: [TypeOrmModule.forFeature([ ReasonForUpdateEntity ])],
  providers: [ReasonForUpdateService, ReasonForUpdateRepository],
  exports: [ReasonForUpdateService, ReasonForUpdateRepository]
})
export class ReasonForUpdateModule {}
