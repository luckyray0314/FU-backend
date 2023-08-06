
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ChildSchoolEntity } from './entities/child-school.entity';
import { ChildSchoolService } from './child-school.service';

@Module({
  imports: [TypeOrmModule.forFeature([ChildSchoolEntity])],
  providers: [ChildSchoolService],
  exports: [ChildSchoolService]
})
export class ChildSchoolModule { }
