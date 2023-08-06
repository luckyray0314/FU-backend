import { Controller } from '@nestjs/common';
import { Crud } from '@nestjsx/crud';
import { ChangeEmploymentVh2Entity } from './entities/change-employment-vh2.entity';
import { ChangeEmploymentVh2Service } from './change-employment-vh2.service';

@Crud({
  model: {
    type: ChangeEmploymentVh2Entity
  },
  routes: {
    only: ["getManyBase"]
  }
})
@Controller('child-school')
export class ChangeEmploymentVh2Controller {
  constructor(public service: ChangeEmploymentVh2Service) {}
}
