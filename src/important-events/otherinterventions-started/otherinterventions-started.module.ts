
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { OtherInterventionsStartedEntity } from './entities/otherinterventions-started.entity';
import { OtherInterventionsStartedService } from './otherinterventions-started.service';

@Module({
  imports: [TypeOrmModule.forFeature([OtherInterventionsStartedEntity])],
  providers: [OtherInterventionsStartedService],
  exports: [OtherInterventionsStartedService]
})
export class OtherInterventionsStartedModule { }
