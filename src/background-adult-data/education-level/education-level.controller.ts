import { Controller } from '@nestjs/common';
import { Crud } from '@nestjsx/crud';
import { EducationLevelEntity } from './entities/education-level.entity';
import { EducationLevelService } from './education-level.service';

@Crud({
  model: {
    type: EducationLevelEntity
  },
  routes: {
    only: ["getManyBase"]
  }
})
@Controller('education-level')
export class EducationLevelController {
  constructor(public service: EducationLevelService) {}
}
