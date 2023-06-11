import { Controller } from '@nestjs/common';
import { Crud } from '@nestjsx/crud';
import { InterventionPeriodService } from './intervention-period.service';
import { InterventionPeriodEntity } from './entities/intervention-period.entity';

@Crud({
  model: {
    type: InterventionPeriodEntity
  }
})
@Controller('intervention-period')
export class InterventionPeriodController {
  constructor(public service: InterventionPeriodService) {}
}
