import { Controller } from '@nestjs/common';
import { Crud } from '@nestjsx/crud';
import { OtherInterventionsEntity } from './entities/other-interventions.entity';
import { OtherInterventionsService } from './other-interventions.service';

@Crud({
  model: {
    type: OtherInterventionsEntity
  }
})
@Controller('other-interventions')
export class OtherInterventionsController {
  constructor(public otherInterventionsService: OtherInterventionsService) {}
}
