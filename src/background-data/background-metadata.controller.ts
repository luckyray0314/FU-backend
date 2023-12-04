import { Controller, Get, UseGuards } from '@nestjs/common';
import { ApiBearerAuth, ApiOkResponse, ApiTags } from '@nestjs/swagger';
import { JWTAuthGuard } from "src/auth/guards/jwt-auth.guard";
import { SessionAuthGuard } from "src/auth/guards/session-auth.guard";
import { BackgroundMetadataDto } from './background-data.dto';
import { BackgroundMetadataService } from './background-metadata.service';

@ApiTags('Background Data Survey Management')
@UseGuards(SessionAuthGuard, JWTAuthGuard)
@ApiBearerAuth()
@Controller('background-metadata')
export class BackgroundMetadataController {
  constructor(public service: BackgroundMetadataService) {}

  @Get('/metadata')
  @ApiOkResponse({ type: Array<BackgroundMetadataDto> })
  async metadata(): Promise<BackgroundMetadataDto[]> {
    return await this.service.find();
  }
}
