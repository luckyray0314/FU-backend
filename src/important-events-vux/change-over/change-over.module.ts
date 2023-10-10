
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ChangeOverEntity } from './entities/change-over.entity';
import { ChangeOverService } from './change-over.service';

@Module({
  imports: [TypeOrmModule.forFeature([ChangeOverEntity])],
  providers: [ChangeOverService],
  exports: [ChangeOverService]
})
export class ChangeOverModule { }
