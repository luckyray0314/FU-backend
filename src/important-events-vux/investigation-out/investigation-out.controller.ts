import { Controller } from '@nestjs/common';
import { Crud } from '@nestjsx/crud';
import { InvestigationOutEntity } from './entities/investigation-out.entity';
import { InvestigationOutService } from './investigation-out.service';

@Crud({
  model: {
    type: InvestigationOutEntity
  },
  routes: {
    only: ["getManyBase"]
  }
})
@Controller('change_over')
export class InvestigationOutController {
  constructor(public service: InvestigationOutService) {}
}
