import { Controller, Get, UseGuards } from '@nestjs/common';
import { ApiBearerAuth, ApiOkResponse, ApiTags } from '@nestjs/swagger';
import { JWTAuthGuard } from "src/auth/guards/jwt-auth.guard";
import { SessionAuthGuard } from "src/auth/guards/session-auth.guard";
import { BackgroundAdultMetadataDto } from './background-adult-data.dto';
import { BackgroundAdultMetadataService } from './background-adult-metadata.service';

@ApiTags('Background Adult Data Survey Management')
@UseGuards(SessionAuthGuard, JWTAuthGuard)
@ApiBearerAuth()
@Controller('background-adult-metadata')
export class BackgroundAdultMetadataController {
  constructor(public service: BackgroundAdultMetadataService) {}

  @Get('/metadata')
  @ApiOkResponse({ type: Array<BackgroundAdultMetadataDto> })
  async metadata(): Promise<BackgroundAdultMetadataDto[]> {
    return await this.service.find();
  }
}
