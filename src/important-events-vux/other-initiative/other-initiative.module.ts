
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { OtherInitiativeEntity } from './entities/other-initiative.entity';
import { OtherInitiativeService } from './other-initiative.service';

@Module({
  imports: [TypeOrmModule.forFeature([OtherInitiativeEntity])],
  providers: [OtherInitiativeService],
  exports: [OtherInitiativeService]
})
export class OtherInitiativeModule { }
