import { Controller } from '@nestjs/common';
import { Crud } from '@nestjsx/crud';
import { OtherInterventionsStartedEntity } from './entities/otherinterventions-started.entity';
import { OtherInterventionsStartedService } from './otherinterventions-started.service';

@Crud({
  model: {
    type: OtherInterventionsStartedEntity
  },
  routes: {
    only: ["getManyBase"]
  }
})
@Controller('otherinterventions-started')
export class OtherInterventionsStartedController {
  constructor(public service: OtherInterventionsStartedService) {}
}
