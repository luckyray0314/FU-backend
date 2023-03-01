import { Controller } from '@nestjs/common';
import { Crud } from '@nestjsx/crud';
import { Gender } from './entities/gender.entity';
import { GenderService } from './gender.service';

@Crud({
  model: {
    type: Gender
  }
})
@Controller('gender')
export class GenderController {
  constructor(public service: GenderService) {}
}
