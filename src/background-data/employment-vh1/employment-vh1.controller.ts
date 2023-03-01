import { Controller } from '@nestjs/common';
import { Crud } from '@nestjsx/crud';
import { EmploymentVh1Service } from './employment-vh1.service';
import { EmploymentVh1Entity } from './entities/employment-vh1.entity';

@Crud({
  model: {
    type: EmploymentVh1Entity
  },
  routes: {
    only: ["getManyBase"]
  }
})
@Controller('employment-vh1')
export class EmploymentVh1Controller {
  constructor(public service: EmploymentVh1Service) {}
}
