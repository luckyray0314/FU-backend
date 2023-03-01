import { Controller } from '@nestjs/common';
import { Crud } from '@nestjsx/crud';
import { WhoParticipatesEntity } from './entities/who-participates.entity';
import { WhoParticipatesService } from './who-participates.service';

@Crud({
  model: {
    type: WhoParticipatesEntity
  },
  routes: {
    only: ["getManyBase"]
  }
})
@Controller('who-participates')
export class WhoParticipatesController {
  constructor(public service: WhoParticipatesService) {}
}
