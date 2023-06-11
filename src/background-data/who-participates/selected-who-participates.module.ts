import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { SelectedWhoParticipatesEntity } from './entities/selected-who-participates.entity';
import { SelectedWhoParticipatesService } from './selected-who-participates.service';

@Module({
  imports: [TypeOrmModule.forFeature([SelectedWhoParticipatesEntity])],
  providers: [SelectedWhoParticipatesService],
  exports: [SelectedWhoParticipatesService]
})
export class SelectedWhoParticipatesModule { }
