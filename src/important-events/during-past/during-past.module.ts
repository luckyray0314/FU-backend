
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { DuringPastEntity } from './entities/during-past.entity';
import { DuringPastService } from './during-past.service';

@Module({
  imports: [TypeOrmModule.forFeature([DuringPastEntity])],
  providers: [DuringPastService],
  exports: [DuringPastService]
})
export class DuringPastModule { }
