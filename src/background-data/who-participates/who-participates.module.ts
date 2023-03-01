import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { WhoParticipatesEntity } from './entities/who-participates.entity';
import { WhoParticipatesRepository } from './who-participates.repository';
import { WhoParticipatesService } from './who-participates.service';

@Module({
  imports: [TypeOrmModule.forFeature([ WhoParticipatesEntity ])],
  providers: [WhoParticipatesService, WhoParticipatesRepository],
  exports: [WhoParticipatesService, WhoParticipatesRepository]
})
export class WhoParticipatesModule {}
