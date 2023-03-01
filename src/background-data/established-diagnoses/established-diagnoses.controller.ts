import { Controller } from '@nestjs/common';
import { Crud } from '@nestjsx/crud';
import { EstablishedDiagnosesEntity } from './entities/established-diagnoses.entity';
import { EstablishedDiagnosesService } from './established-diagnoses.service';

@Crud({
  model: {
    type: EstablishedDiagnosesEntity
  },
  routes: {
    only: ["getManyBase"]
  }
})
@Controller('established-diagnoses')
export class EstablishedDiagnosesController {
  constructor(public service: EstablishedDiagnosesService) {}
}
