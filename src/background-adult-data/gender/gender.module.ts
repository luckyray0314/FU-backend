import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { GenderAdultEntity } from './entities/gender.entity';
import { GenderAdultService } from './gender.service';

@Module({
  imports: [TypeOrmModule.forFeature([GenderAdultEntity])],
  providers: [GenderAdultService],
  exports: [GenderAdultService]
})
export class GenderAdultModule { }
