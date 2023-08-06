import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { ApiBody, ApiOkResponse, ApiTags } from '@nestjs/swagger';
import { ImportantEventsBasicDataDto, ImportantEventsDataDto } from './important-events.dto';
import { ImportantEventsService } from './important-events.service';

@ApiTags('Important Events Management')
@Controller('important-events')
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

  @Post('save')
  @ApiOkResponse({ type: () => Boolean })
  @ApiBody({ type: ImportantEventsDataDto })
  async save(
    @Body() payload: ImportantEventsDataDto,
  ): Promise<boolean> {
    return await this.service.save(payload);
  }

  @Get('/get/:codeNumber')
  @ApiOkResponse({ type: ImportantEventsDataDto })
  async get(
    @Param('codeNumber') codeNumber: string
  ): Promise<ImportantEventsDataDto> {
    return await this.service.get(codeNumber);
  }
}