import { Controller } from '@nestjs/common';
import { Crud } from '@nestjsx/crud';
import { DuringInterventionEntity } from './entities/during-intervention.entity';
import { DuringInterventionService } from './during-intervention.service';

@Crud({
  model: {
    type: DuringInterventionEntity
  },
  routes: {
    only: ["getManyBase"]
  }
})
@Controller('during-intervention')
export class DuringInterventionController {
  constructor(public service: DuringInterventionService) {}
}
