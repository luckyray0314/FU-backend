import { Controller } from '@nestjs/common';
import { ReasonForUpdateService } from './reason-for-update.service';

@Controller('reason-for-update')
export class ReasonForUpdateController {
  constructor(private readonly reasonForUpdateService: ReasonForUpdateService) {}
}
