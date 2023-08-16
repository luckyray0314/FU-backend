import { Controller } from '@nestjs/common';
import { Crud } from '@nestjsx/crud';
import { EstablishDiagnoseEntity } from './entities/establish-diagnose.entity';
import { EstablishDiagnoseService } from './establish-diagnose.service';

@Crud({
  model: {
    type: EstablishDiagnoseEntity
  },
  routes: {
    only: ["getManyBase"]
  }
})
@Controller('establish-diagnose')
export class EstablishDiagnoseController {
  constructor(public service: EstablishDiagnoseService) {}
}
