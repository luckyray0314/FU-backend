import { Controller } from '@nestjs/common';
import { Crud } from '@nestjsx/crud';
import { TypeOfEffortEntity } from './entities/type-of-effort.entity';
import { TypeOfEffortService } from './type-of-effort.service';

@Crud({
  model: {
    type: TypeOfEffortEntity
  }
})
@Controller('type-of-effort')
export class TypeOfEffortController {
  constructor(public typeOfEffortService: TypeOfEffortService) {}
}
