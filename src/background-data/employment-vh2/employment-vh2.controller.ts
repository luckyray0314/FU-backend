import { Controller } from '@nestjs/common';
import { EmploymentVh2Service } from './employment-vh2.service';

@Controller('employment-vh2')
export class EmploymentVh2Controller {
  constructor(private readonly employmentVh2Service: EmploymentVh2Service) {}
}
