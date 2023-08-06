import { Controller } from '@nestjs/common';
import { Crud } from '@nestjsx/crud';
import { ChangeAccomodationEntity } from './entities/change-accomodation.entity';
import { ChangeAccomodationService } from './change-accomodation.service';

@Crud({
  model: {
    type: ChangeAccomodationEntity
  },
  routes: {
    only: ["getManyBase"]
  }
})
@Controller('child-school')
export class ChangeAccomodationController {
  constructor(public service: ChangeAccomodationService) {}
}
