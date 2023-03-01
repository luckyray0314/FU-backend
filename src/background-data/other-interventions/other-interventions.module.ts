import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { OtherInterventionsEntity } from './entities/other-interventions.entity';
import { OtherInterventionsRepository } from './other-interventions.repository';
import { OtherInterventionsService } from './other-interventions.service';

@Module({
  imports: [TypeOrmModule.forFeature([ OtherInterventionsEntity ])],
  providers: [OtherInterventionsService, OtherInterventionsRepository],
  exports: [OtherInterventionsService, OtherInterventionsRepository]
})
export class OtherInterventionsModule {}
