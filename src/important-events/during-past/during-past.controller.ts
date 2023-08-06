import { Controller } from '@nestjs/common';
import { Crud } from '@nestjsx/crud';
import { DuringPastEntity } from './entities/during-past.entity';
import { DuringPastService } from './during-past.service';

@Crud({
  model: {
    type: DuringPastEntity
  },
  routes: {
    only: ["getManyBase"]
  }
})
@Controller('during-past')
export class DuringPastController {
  constructor(public service: DuringPastService) {}
}
