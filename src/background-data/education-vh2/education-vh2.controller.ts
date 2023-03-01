import { Controller } from '@nestjs/common';
import { EducationVh2Service } from './education-vh2.service';

@Controller('education-vh2')
export class EducationVh2Controller {
  constructor(private readonly educationVh2Service: EducationVh2Service) {}
}
