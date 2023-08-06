import { Controller, Get, UseGuards } from '@nestjs/common';
import { ApiOkResponse, ApiTags } from '@nestjs/swagger';
import { JWTAuthGuard } from "src/auth/guards/jwt-auth.guard";
import { SessionAuthGuard } from "src/auth/guards/session-auth.guard";
import { ImportantEventsBasicDataDto } from './important-events.dto';
import { ImportantEventsService } from './important-events.service';

@ApiTags('Important Events')
@UseGuards(SessionAuthGuard, JWTAuthGuard)
@Controller('importantEvents')
export class ImportantEventsController {
  constructor(
    public service: ImportantEventsService,
  ) { }

  @Get('/basicData')
  @ApiOkResponse({ type: ImportantEventsBasicDataDto })
  async basicData(
  ): Promise<ImportantEventsBasicDataDto> {
    return await this.service.basicData();
  }
}