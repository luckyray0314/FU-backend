import { Controller } from '@nestjs/common';
import { Crud } from '@nestjsx/crud';
import { EducationVh1Service } from './education-vh1.service';
import { EducationVh1Entity } from './entities/education-vh1.entity';

@Crud({
  model: {
    type: EducationVh1Entity
  }
})
@Controller('education-vh1')
export class EducationVh1Controller {
  constructor(public educationVh1Service: EducationVh1Service) {}
}
