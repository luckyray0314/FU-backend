import { Controller } from '@nestjs/common';
import { Crud } from '@nestjsx/crud';
import { ProblemAreaEntity } from './entities/problem-area.entity';
import { ProblemAreaService } from './problem-area.service';

@Crud({
  model: {
    type: ProblemAreaEntity
  }
})
@Controller('problem-area')
export class ProblemAreaController {
  constructor(public problemAreaService: ProblemAreaService) {}
}
