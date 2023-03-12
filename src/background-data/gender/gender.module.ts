import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { GenderEntity } from './entities/gender.entity';
import { GenderService } from './gender.service';

@Module({
  imports: [TypeOrmModule.forFeature([GenderEntity])],
  providers: [GenderService],
  exports: [GenderService]
})
export class GenderModule { }
