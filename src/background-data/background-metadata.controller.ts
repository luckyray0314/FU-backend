import { Controller, Get } from '@nestjs/common';
import { ApiOkResponse, ApiTags } from '@nestjs/swagger';
import { BackgroundMetadataDto } from './background-data.dto';
import { BackgroundMetadataService } from './background-metadata.service';

@ApiTags('Background Data Survey Management')
@Controller('background-metadata')
export class BackgroundMetadataController {
  constructor(
    public service: BackgroundMetadataService,
  ) { }

  @Get('/metadata')
  @ApiOkResponse({ type: Array<BackgroundMetadataDto> })
  async metadata(
  ): Promise<BackgroundMetadataDto[]> {
    return await this.service.find();
  }
}

