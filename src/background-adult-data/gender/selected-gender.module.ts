import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { SelectedGenderAdultEntity } from './entities/selected-gender.entity';
import { SelectedGenderAdultService } from './selected-gender.service';

@Module({
  imports: [TypeOrmModule.forFeature([SelectedGenderAdultEntity])],
  providers: [SelectedGenderAdultService],
  exports: [SelectedGenderAdultService]
})
export class SelectedGenderAdultModule { }
