import { Controller } from '@nestjs/common';
import { EducationVh1Service } from './education-vh1.service';

@Controller('education-vh1')
export class EducationVh1Controller {
  constructor(private readonly educationVh1Service: EducationVh1Service) {}
}
