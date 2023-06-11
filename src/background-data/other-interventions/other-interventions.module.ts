import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { OtherInterventionsEntity } from './entities/other-interventions.entity';
import { OtherInterventionsService } from './other-interventions.service';

@Module({
  imports: [TypeOrmModule.forFeature([OtherInterventionsEntity])],
  providers: [OtherInterventionsService],
  exports: [OtherInterventionsService]
})
export class OtherInterventionsModule { }
