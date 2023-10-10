import { Controller } from '@nestjs/common';
import { Crud } from '@nestjsx/crud';
import { ChangeOverEntity } from './entities/change-over.entity';
import { ChangeOverService } from './change-over.service';

@Crud({
  model: {
    type: ChangeOverEntity
  },
  routes: {
    only: ["getManyBase"]
  }
})
@Controller('change_over')
export class ChangeOverController {
  constructor(public service: ChangeOverService) {}
}
