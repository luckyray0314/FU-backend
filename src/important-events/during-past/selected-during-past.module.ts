import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { SelectedDuringPastEntity } from './entities/selected-during-past.entity';
import { SelectedDuringPastService } from './selected-during-past.service';

@Module({
  imports: [TypeOrmModule.forFeature([SelectedDuringPastEntity])],
  providers: [SelectedDuringPastService],
  exports: [SelectedDuringPastService]
})
export class SelectedDuringPastModule { }
