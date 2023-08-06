import { Controller } from '@nestjs/common';
import { Crud } from '@nestjsx/crud';
import { ChangeEmploymentVh1Entity } from './entities/change-employment-vh1.entity';
import { ChangeEmploymentVh1Service } from './change-employment-vh1.service';

@Crud({
  model: {
    type: ChangeEmploymentVh1Entity
  },
  routes: {
    only: ["getManyBase"]
  }
})
@Controller('child-school')
export class ChangeEmploymentVh1Controller {
  constructor(public service: ChangeEmploymentVh1Service) {}
}
