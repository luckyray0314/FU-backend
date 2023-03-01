import { Controller } from '@nestjs/common';
import { SchoolUniformService } from './school-uniform.service';

@Controller('school-uniform')
export class SchoolUniformController {
  constructor(private readonly schoolUniformService: SchoolUniformService) {}
}
