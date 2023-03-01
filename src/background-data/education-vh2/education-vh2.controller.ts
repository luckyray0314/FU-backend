import { Controller } from '@nestjs/common';
import { Crud } from '@nestjsx/crud';
import { EducationVh2Service } from './education-vh2.service';
import { EducationVh2Entity } from './entities/education-vh2.entity';

@Crud({
  model: {
    type: EducationVh2Entity
  },
  routes: {
    only: ["getManyBase"]
  }
})
@Controller('education-vh2')
export class EducationVh2Controller {
  constructor(public service: EducationVh2Service) {}
}
