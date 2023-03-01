import { Controller } from '@nestjs/common';
import { FamilyConstellationService } from './family-constellation.service';

@Controller('family-constellation')
export class FamilyConstellationController {
  constructor(private readonly familyConstellationService: FamilyConstellationService) {}
}
