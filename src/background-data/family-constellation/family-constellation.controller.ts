import { Controller } from '@nestjs/common';
import { Crud } from '@nestjsx/crud';
import { FamilyConstellationEntity } from './entities/family-constellation.entity';
import { FamilyConstellationService } from './family-constellation.service';

@Crud({
  model: {
    type: FamilyConstellationEntity
  }
})
@Controller('family-constellation')
export class FamilyConstellationController {
  constructor(public familyConstellationService: FamilyConstellationService) {}
}
