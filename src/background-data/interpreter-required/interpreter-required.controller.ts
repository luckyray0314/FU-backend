import { Controller } from '@nestjs/common';
import { Crud } from '@nestjsx/crud';
import { InterpreterRequiredEntity } from './entities/interpreter-required.entity';
import { InterpreterRequiredService } from './interpreter-required.service';

@Crud({
  model: {
    type: InterpreterRequiredEntity
  },
  routes: {
    only: ["getManyBase"]
  }
})
@Controller('interpreter-required')
export class InterpreterRequiredController {
  constructor(public service: InterpreterRequiredService) {}
}
