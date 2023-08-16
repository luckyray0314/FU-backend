import { Controller } from '@nestjs/common';
import { Crud } from '@nestjsx/crud';
import { EmploymentEntity } from './entities/employment.entity';
import { EmploymentService } from './employment.service';

@Crud({
  model: {
    type: EmploymentEntity
  },
  routes: {
    only: ["getManyBase"]
  }
})
@Controller('employment')
export class EmploymentController {
  constructor(public service: EmploymentService) {}
}
