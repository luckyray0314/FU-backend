
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ChangeLiveEntity } from './entities/change-live.entity';
import { ChangeLiveService } from './change-live.service';

@Module({
  imports: [TypeOrmModule.forFeature([ChangeLiveEntity])],
  providers: [ChangeLiveService],
  exports: [ChangeLiveService]
})
export class ChangeLiveModule { }
