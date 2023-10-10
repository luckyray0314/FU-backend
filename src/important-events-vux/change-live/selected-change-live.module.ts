import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { SelectedChangeLiveEntity } from './entities/selected-change-live.entity';
import { SelectedChangeLiveService } from './selected-change-live.service';

@Module({
  imports: [TypeOrmModule.forFeature([SelectedChangeLiveEntity])],
  providers: [SelectedChangeLiveService],
  exports: [SelectedChangeLiveService]
})
export class SelectedChangeLiveModule { }
