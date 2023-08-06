
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ChangeAccomodationEntity } from './entities/change-accomodation.entity';
import { ChangeAccomodationService } from './change-accomodation.service';

@Module({
  imports: [TypeOrmModule.forFeature([ChangeAccomodationEntity])],
  providers: [ChangeAccomodationService],
  exports: [ChangeAccomodationService]
})
export class ChangeAccomodationModule { }
