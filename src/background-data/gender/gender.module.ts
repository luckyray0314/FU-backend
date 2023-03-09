import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { GenderEntity } from './entities/gender.entity';
import { SelectedGenderEntity } from './entities/selected-gender.entity';
import { GenderRepository } from './gender.repository';
import { GenderService } from './gender.service';
import { SelectedGenderRepository } from './selected-gender.repository';
import { SelectedGenderService } from './selected-gender.service';

@Module({
  imports: [TypeOrmModule.forFeature([GenderEntity, SelectedGenderEntity])],
  providers: [GenderService, GenderRepository, SelectedGenderService, SelectedGenderRepository],
  exports: [GenderService, GenderRepository, SelectedGenderService, SelectedGenderRepository]
})
export class GenderModule { }
