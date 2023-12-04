import { Controller, Get, UseGuards } from '@nestjs/common';
import { ApiBearerAuth, ApiOkResponse, ApiTags } from '@nestjs/swagger';
import { JWTAuthGuard } from "src/auth/guards/jwt-auth.guard";
import { SessionAuthGuard } from "src/auth/guards/session-auth.guard";
import { FollowUpMetadataDto } from './follow-up-data.dto';
import { FollowUpMetadataService } from './follow-up-metadata.service';

@ApiTags('Follow Up Data Survey Management')
@UseGuards(SessionAuthGuard, JWTAuthGuard)
@Controller('follow-up-metadata')
@ApiBearerAuth()
export class FollowUpMetadataController {
  constructor(public service: FollowUpMetadataService) {}

  @Get('/metadata')
  @ApiOkResponse({ type: Array<FollowUpMetadataDto> })
  async metadata(): Promise<FollowUpMetadataDto[]> {
    return await this.service.find();
  }
}
