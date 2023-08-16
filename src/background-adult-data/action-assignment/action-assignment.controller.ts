import { Controller } from '@nestjs/common';
import { Crud } from '@nestjsx/crud';
import { ActionAssignmentEntity } from './entities/action-assignment.entity';
import { ActionAssignmentService } from './action-assignment.service';

@Crud({
  model: {
    type: ActionAssignmentEntity
  },
  routes: {
    only: ["getManyBase"]
  }
})
@Controller('action-assignment')
export class ActionAssignmentController {
  constructor(public service: ActionAssignmentService) {}
}
