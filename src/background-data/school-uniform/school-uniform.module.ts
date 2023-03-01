import { Module } from '@nestjs/common';
import { SchoolUniformService } from './school-uniform.service';
import { SchoolUniformController } from './school-uniform.controller';

@Module({
  controllers: [SchoolUniformController],
  providers: [SchoolUniformService]
})
export class SchoolUniformModule {}
