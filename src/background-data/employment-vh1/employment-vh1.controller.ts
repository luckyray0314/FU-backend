import { Controller } from '@nestjs/common';
import { Crud } from '@nestjsx/crud';
import { EmploymentVh1Service } from './employment-vh1.service';
import { EmploymentVh1Entity } from './entities/employment-vh1.entity';

@Crud({
  model: {
    type: EmploymentVh1Entity
  }
})
@Controller('employment-vh1')
export class EmploymentVh1Controller {
  constructor(public employmentVh1Service: EmploymentVh1Service) {}
}
