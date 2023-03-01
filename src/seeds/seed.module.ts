import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Gender } from 'src/background-data/gender/entities/gender.entity';
import { GenderModule } from 'src/background-data/gender/gender.module';
import { GenderRepository } from 'src/background-data/gender/gender.repository';

import { SeedService } from './seed.service';

@Module({
  imports: [GenderModule, TypeOrmModule.forFeature([Gender, GenderRepository])],
  providers: [SeedService],
})
export class SeedModule {}
