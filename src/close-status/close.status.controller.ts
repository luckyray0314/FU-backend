import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { ApiBody, ApiOkResponse, ApiTags } from '@nestjs/swagger';
import { CloseStatusDto } from './dto/close-status.dto';
import { CloseStatusService } from './close.status.service';

@ApiTags('Close Status Management')
@Controller('close-status')
export class CloseStatusController {
  constructor(
    public service: CloseStatusService,
  ) { }

  // @Get('/getByOccasion/:occasion')
  // @ApiOkResponse({ type: CloseStatusDto })
  // async getByOccasion(
  //   @Param("occasion") occasion: number
  // ): Promise<CloseStatusDto> {
  //   return await this.service.getCloseStatusByOccasion(occasion);
  // }

  @Get('/getOne/:processor')
  @ApiOkResponse({ type: CloseStatusDto })
  async getOne(
    @Param("codeNumber") codeNumber: string,
    @Param("processor") processor: string,
    @Param("closeStatus") closeStatus: boolean,
  ): Promise<CloseStatusDto> {
    return await this.service.getOneCloseStatus({   
      codeNumber,
      processor,
      closeStatus
    });
  }

  @Post('/create')
  @ApiOkResponse({ type: () => Boolean })
  async create(
    @Body() payload: CloseStatusDto,
  ): Promise<boolean> {
    return await this.service.createCloseStatusData(payload);
  }
}
