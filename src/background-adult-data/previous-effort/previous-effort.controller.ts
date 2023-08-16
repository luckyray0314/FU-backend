import { Controller } from '@nestjs/common';
import { Crud } from '@nestjsx/crud';
import { PreviousEffortEntity } from './entities/previous-effort.entity';
import { PreviousEffortService } from './previous-effort.service';

@Crud({
  model: {
    type: PreviousEffortEntity
  },
  routes: {
    only: ["getManyBase"]
  }
})
@Controller('previous-effort')
export class PreviousEffortController {
  constructor(public service: PreviousEffortService) {}
}
