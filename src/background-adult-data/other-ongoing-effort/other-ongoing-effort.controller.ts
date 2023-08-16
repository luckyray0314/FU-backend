import { Controller } from '@nestjs/common';
import { Crud } from '@nestjsx/crud';
import { OtherOngoingEffortEntity } from './entities/other-ongoing-effort.entity';
import { OtherOngoingEffortService } from './other-ongoing-effort.service';

@Crud({
  model: {
    type: OtherOngoingEffortEntity
  },
  routes: {
    only: ["getManyBase"]
  }
})
@Controller('other-ongoing-effort')
export class OtherOngoingEffortController {
  constructor(public service: OtherOngoingEffortService) {}
}
