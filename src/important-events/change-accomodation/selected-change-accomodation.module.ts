import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { SelectedChangeAccomodationEntity } from './entities/selected-change-accomodation.entity';
import { SelectedChangeAccomodationService } from './selected-change-accomodation.service';

@Module({
  imports: [TypeOrmModule.forFeature([SelectedChangeAccomodationEntity])],
  providers: [SelectedChangeAccomodationService],
  exports: [SelectedChangeAccomodationService]
})
export class SelectedChangeAccomodationModule { }
