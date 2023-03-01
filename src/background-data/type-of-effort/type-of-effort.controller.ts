import { Controller } from '@nestjs/common';
import { Crud } from '@nestjsx/crud';
import { TypeOfEffortEntity } from './entities/type-of-effort.entity';
import { TypeOfEffortService } from './type-of-effort.service';

@Crud({
  model: {
    type: TypeOfEffortEntity
  },
  routes: {
    only: ["getManyBase"]
  }
})
@Controller('type-of-effort')
export class TypeOfEffortController {
  constructor(public service: TypeOfEffortService) {}
}
