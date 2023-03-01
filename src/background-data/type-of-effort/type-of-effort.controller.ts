import { Controller } from '@nestjs/common';
import { TypeOfEffortService } from './type-of-effort.service';

@Controller('type-of-effort')
export class TypeOfEffortController {
  constructor(private readonly typeOfEffortService: TypeOfEffortService) {}
}
