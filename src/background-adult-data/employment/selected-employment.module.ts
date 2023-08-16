import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { SelectedEmploymentEntity } from './entities/selected-employment.entity';
import { SelectedEmploymentService } from './selected-employment.service';

@Module({
  imports: [TypeOrmModule.forFeature([SelectedEmploymentEntity])],
  providers: [SelectedEmploymentService],
  exports: [SelectedEmploymentService]
})
export class SelectedEmploymentModule { }
