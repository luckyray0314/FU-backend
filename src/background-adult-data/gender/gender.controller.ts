import { Controller } from '@nestjs/common';
import { Crud } from '@nestjsx/crud';
import { GenderAdultEntity } from './entities/gender.entity';
import { GenderAdultService } from './gender.service';

@Crud({
  model: {
    type: GenderAdultEntity
  }
})
@Controller('gender-adult')
export class GenderAdultController {
  constructor(public service: GenderAdultService) { }
}
