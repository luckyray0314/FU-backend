import { Controller } from '@nestjs/common';
import { EmploymentVh1Service } from './employment-vh1.service';

@Controller('employment-vh1')
export class EmploymentVh1Controller {
  constructor(private readonly employmentVh1Service: EmploymentVh1Service) {}
}
