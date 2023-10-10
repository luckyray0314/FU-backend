import { Controller } from '@nestjs/common';
import { Crud } from '@nestjsx/crud';
import { ChangeLiveEntity } from './entities/change-live.entity';
import { ChangeLiveService } from './change-live.service';

@Crud({
  model: {
    type: ChangeLiveEntity
  },
  routes: {
    only: ["getManyBase"]
  }
})
@Controller('change_live')
export class ChangeLiveController {
  constructor(public service: ChangeLiveService) {}
}
