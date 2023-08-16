import { Controller } from '@nestjs/common';
import { Crud } from '@nestjsx/crud';
import { ProblemAreaAdultEntity } from './entities/problem-area.entity';
import { ProblemAreaAdultService } from './problem-area.service';

@Crud({
  model: {
    type: ProblemAreaAdultEntity
  },
  routes: {
    only: ["getManyBase"]
  }
})
@Controller('problem-area-adult')
export class ProblemAreaAdultController {
  constructor(public service: ProblemAreaAdultService) {}
}
