import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ScoreEntity } from './entities/score.entity';
import { ScoreController } from './score.controller';
import { ScoreRepository } from './score.repository';
import { ScoreService } from './score.service';

@Module({
  imports: [TypeOrmModule.forFeature([ScoreEntity])],
  providers: [ScoreService, ScoreRepository, ScoreController],
  controllers: [ScoreController],
  exports: [ScoreService, ScoreRepository, ScoreController]
})
export class ScoreModule { }
