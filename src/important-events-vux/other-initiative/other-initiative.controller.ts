import { Controller } from '@nestjs/common';
import { Crud } from '@nestjsx/crud';
import { OtherInitiativeEntity } from './entities/other-initiative.entity';
import { OtherInitiativeService } from './other-initiative.service';

@Crud({
  model: {
    type: OtherInitiativeEntity
  },
  routes: {
    only: ["getManyBase"]
  }
})
@Controller('change_over')
export class OtherInitiativeController {
  constructor(public service: OtherInitiativeService) {}
}
