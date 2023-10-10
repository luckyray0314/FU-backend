import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { ApiBody, ApiOkResponse, ApiTags } from '@nestjs/swagger';
import { ImportantEventsVuxBasicDataDto, ImportantEventsVuxDataDto } from './important-events-vux.dto';
import { ImportantEventsVuxService } from './important-events-vux.service';

@ApiTags('Important Events Vux Management')
@Controller('important-events-vux')
export class ImportantEventsVuxController {
  constructor(
    public service: ImportantEventsVuxService,
  ) { }

  @Get('/basicData')
  @ApiOkResponse({ type: ImportantEventsVuxBasicDataDto })
  async basicData(
  ): Promise<ImportantEventsVuxBasicDataDto> {
    return await this.service.basicData();
  }

  @Post('save')
  @ApiOkResponse({ type: () => Boolean })
  @ApiBody({ type: ImportantEventsVuxDataDto })
  async save(
    @Body() payload: ImportantEventsVuxDataDto,
  ): Promise<boolean> {
    return await this.service.save(payload);
  }

  @Get('/get/:codeNumber')
  @ApiOkResponse({ type: ImportantEventsVuxDataDto })
  async get(
    @Param('codeNumber') codeNumber: string
  ): Promise<ImportantEventsVuxDataDto> {
    return await this.service.get(codeNumber);
  }
}