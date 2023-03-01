import { Controller } from '@nestjs/common';
import { EstablishedDiagnosesService } from './established-diagnoses.service';

@Controller('established-diagnoses')
export class EstablishedDiagnosesController {
  constructor(private readonly establishedDiagnosesService: EstablishedDiagnosesService) {}
}
