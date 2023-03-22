import { Controller, Get } from '@nestjs/common';
import { ApiOkResponse, ApiTags } from '@nestjs/swagger';
import { FollowUpMetadataDto } from './follow-up-data.dto';
import { FollowUpMetadataService } from './follow-up-metadata.service';

@ApiTags('Follow Up Data Survey Management')
@Controller('follow-up-metadata')
export class FollowUpMetadataController {
  constructor(
    public service: FollowUpMetadataService,
  ) { }

  @Get('/metadata')
  @ApiOkResponse({ type: Array<FollowUpMetadataDto> })
  async metadata(
  ): Promise<FollowUpMetadataDto[]> {
    return await this.service.find();
  }
}

