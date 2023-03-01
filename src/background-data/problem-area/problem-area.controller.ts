import { Controller } from '@nestjs/common';
import { ProblemAreaService } from './problem-area.service';

@Controller('problem-area')
export class ProblemAreaController {
  constructor(private readonly problemAreaService: ProblemAreaService) {}
}
