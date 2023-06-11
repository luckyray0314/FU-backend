import { Controller } from '@nestjs/common';
import { Crud } from '@nestjsx/crud';
import { ReasonForTerminationService } from './reason-for-termination.service';
import { ReasonForTerminationEntity } from './entities/reason-for-termination.entity';

@Crud({
  model: {
    type: ReasonForTerminationEntity
  }
})
@Controller('reason-for-termination')
export class ReasonForTerminationController {
  constructor(public service: ReasonForTerminationService) {}
}
