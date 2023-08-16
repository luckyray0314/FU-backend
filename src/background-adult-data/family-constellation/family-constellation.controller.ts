import { Controller } from '@nestjs/common';
import { Crud } from '@nestjsx/crud';
import { FamilyConstellationAdultEntity } from './entities/family-constellation.entity';
import { FamilyConstellationAdultService } from './family-constellation.service';

@Crud({
  model: {
    type: FamilyConstellationAdultEntity
  },
  routes: {
    only: ["getManyBase"]
  }
})
@Controller('family-constellation-adult')
export class FamilyConstellationAdultController {
  constructor(public service: FamilyConstellationAdultService) {}
}
