import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { WhoParticipatesEntity } from './entities/who-participates.entity';
import { WhoParticipatesService } from './who-participates.service';

@Module({
  imports: [TypeOrmModule.forFeature([WhoParticipatesEntity])],
  providers: [WhoParticipatesService],
  exports: [WhoParticipatesService]
})
export class WhoParticipatesModule { }
