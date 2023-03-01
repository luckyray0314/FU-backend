import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { GenderEntity } from './entities/gender.entity';
import { GenderRepository } from './gender.repository';
import { GenderService } from './gender.service';

@Module({
  imports: [TypeOrmModule.forFeature([ GenderEntity ])],
  providers: [GenderService, GenderRepository],
  exports: [GenderService, GenderRepository]
})
export class GenderModule {}
