import { Controller } from '@nestjs/common';
import { Crud } from '@nestjsx/crud';
import { TimeConsumptionService } from './time-consumption.service';
import { TimeConsumptionEntity } from './entities/time-consumption.entity';

@Crud({
  model: {
    type: TimeConsumptionEntity
  }
})
@Controller('time-consumption')
export class TimeConsumptionController {
  constructor(public service: TimeConsumptionService) {}
}
