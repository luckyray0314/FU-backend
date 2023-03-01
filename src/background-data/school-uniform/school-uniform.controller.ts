import { Controller } from '@nestjs/common';
import { Crud } from '@nestjsx/crud';
import { SchoolUniformEntity } from './entities/school-uniform.entity';
import { SchoolUniformService } from './school-uniform.service';

@Crud({
  model: {
    type: SchoolUniformEntity
  }
})
@Controller('school-uniform')
export class SchoolUniformController {
  constructor(public schoolUniformService: SchoolUniformService) {}
}
