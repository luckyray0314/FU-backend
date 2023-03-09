import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { SelectedWhoParticipatesEntity } from './entities/selected-who-participates.entity';
import { WhoParticipatesEntity } from './entities/who-participates.entity';
import { SelectedWhoParticipatesRepository } from './selected-who-participates.repository';
import { SelectedWhoParticipatesService } from './selected-who-participates.service';
import { WhoParticipatesRepository } from './who-participates.repository';
import { WhoParticipatesService } from './who-participates.service';

@Module({
  imports: [TypeOrmModule.forFeature([WhoParticipatesEntity, SelectedWhoParticipatesEntity])],
  providers: [WhoParticipatesService, WhoParticipatesRepository, SelectedWhoParticipatesService, SelectedWhoParticipatesRepository],
  exports: [WhoParticipatesService, WhoParticipatesRepository, SelectedWhoParticipatesService, SelectedWhoParticipatesRepository]
})
export class WhoParticipatesModule { }
