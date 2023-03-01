import { Controller } from '@nestjs/common';
import { InterpreterRequiredService } from './interpreter-required.service';

@Controller('interpreter-required')
export class InterpreterRequiredController {
  constructor(private readonly interpreterRequiredService: InterpreterRequiredService) {}
}
