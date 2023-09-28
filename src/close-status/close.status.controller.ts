import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { ApiBody, ApiOkResponse, ApiTags } from '@nestjs/swagger';
import { CodeNumberDto } from './dto/codeNumber.dto';
import { CloseStatusDto } from './dto/close-status.dto';
import { CloseStatusService } from './close.status.service';

@ApiTags('Close Status and Processor Management')
@Controller('close-status')
export class CloseStatusController {
    constructor(
        public service: CloseStatusService,
    ) { }

    @Post('/create')
    @ApiOkResponse({ type: () => Boolean })
    async create(
        @Body() payload: CloseStatusDto,
    ): Promise<boolean> {
        return await this.service.createCloseStatusData(payload);
    }

    @Get('/getByCodeNumber/:codeNumber')
    @ApiOkResponse({ type: [CloseStatusDto] }) // note the square brackets around ScoreDto
    async getByOccasion(
        @Param("codeNumber") codeNumber: string
    ): Promise<number> {
        const statuses = await this.service.getCloseStatusByCodeNumber(codeNumber);
        return statuses.length
    }

    @Get('/getOne/:codeNumber')
    @ApiOkResponse({ type: CloseStatusDto })
    async getOne(
      @Param("codeNumber") codeNumber: string,
      @Param("processor") processor: string,
      @Param("isClosed") isClosed: string
    ): Promise<CloseStatusDto> {
      return await this.service.getOneCloseStatus({
        codeNumber,
        processor,
        isClosed
      });
    }

}
