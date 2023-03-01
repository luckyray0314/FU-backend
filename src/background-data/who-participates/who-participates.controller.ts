import { Controller } from '@nestjs/common';
import { WhoParticipatesService } from './who-participates.service';

@Controller('who-participates')
export class WhoParticipatesController {
  constructor(private readonly whoParticipatesService: WhoParticipatesService) {}
}
