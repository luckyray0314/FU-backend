import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { InterventionProgressService } from './intervention-progress.service';
import { InterventionProgressEntity } from './entities/intervention-progress.entity';

@Module({
  imports: [TypeOrmModule.forFeature([InterventionProgressEntity])],
  providers: [InterventionProgressService],
  exports: [InterventionProgressService]
})
export class InterventionProgressModule { }
