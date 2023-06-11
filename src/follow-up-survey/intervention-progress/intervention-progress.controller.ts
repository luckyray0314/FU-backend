import { Controller } from '@nestjs/common';
import { Crud } from '@nestjsx/crud';
import { InterventionProgressService } from './intervention-progress.service';
import { InterventionProgressEntity } from './entities/intervention-progress.entity';

@Crud({
  model: {
    type: InterventionProgressEntity
  }
})
@Controller('intervention-progress')
export class InterventionProgressController {
  constructor(public service: InterventionProgressService) {}
}
