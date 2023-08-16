import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { EmploymentEntity } from './entities/employment.entity';
import { EmploymentService } from './employment.service';

@Module({
  imports: [TypeOrmModule.forFeature([EmploymentEntity])],
  providers: [EmploymentService],
  exports: [EmploymentService]
})
export class EmploymentModule { }
