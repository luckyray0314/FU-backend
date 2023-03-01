import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { OtherInterventionsEntity } from './entities/other-interventions.entity';
import { OtherInterventionsController } from './other-interventions.controller';
import { OtherInterventionsRepository } from './other-interventions.repository';
import { OtherInterventionsService } from './other-interventions.service';

@Module({
  imports: [TypeOrmModule.forFeature([ OtherInterventionsEntity ])],
  providers: [OtherInterventionsService, OtherInterventionsRepository],
  controllers: [OtherInterventionsController],
  exports: [OtherInterventionsService, OtherInterventionsRepository]
})
export class OtherInterventionsModule {}
