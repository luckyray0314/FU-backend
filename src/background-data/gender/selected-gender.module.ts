import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { SelectedGenderEntity } from './entities/selected-gender.entity';
import { SelectedGenderService } from './selected-gender.service';

@Module({
  imports: [TypeOrmModule.forFeature([SelectedGenderEntity])],
  providers: [SelectedGenderService],
  exports: [SelectedGenderService]
})
export class SelectedGenderModule { }
