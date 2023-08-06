import { Controller } from '@nestjs/common';
import { Crud } from '@nestjsx/crud';
import { ChildSchoolEntity } from './entities/child-school.entity';
import { ChildSchoolService } from './child-school.service';

@Crud({
  model: {
    type: ChildSchoolEntity
  },
  routes: {
    only: ["getManyBase"]
  }
})
@Controller('child-school')
export class ChildSchoolController {
  constructor(public service: ChildSchoolService) {}
}
