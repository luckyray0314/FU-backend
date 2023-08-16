import { Controller } from '@nestjs/common';
import { Crud } from '@nestjsx/crud';
import { DuringOperationEntity } from './entities/during-operation.entity';
import { DuringOperationService } from './during-operation.service';

@Crud({
  model: {
    type: DuringOperationEntity
  },
  routes: {
    only: ["getManyBase"]
  }
})
@Controller('during-operation')
export class DuringOperationController {
  constructor(public service: DuringOperationService) {}
}
