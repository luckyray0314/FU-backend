import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { ApiBody, ApiOkResponse, ApiTags } from '@nestjs/swagger';
import { CodeNumberDto } from './dto/codeNumber.dto';
import { CloseStatusAdultDto } from './dto/close-status-adult.dto';
import { CloseStatusAdultService } from './close.status.adult.service';

@ApiTags('Close Status Adult and Processor Management')
@Controller('close-status-adult')
export class CloseStatusAdultController {
    constructor(
        public service: CloseStatusAdultService,
    ) { }

    @Post('/create')
    @ApiOkResponse({ type: () => Boolean })
    async create(
        @Body() payload: CloseStatusAdultDto,
    ): Promise<boolean> {
        return await this.service.createCloseStatusData(payload);
    }

    @Get('/getByCodeNumber/:codeNumber')
    @ApiOkResponse({ type: [CloseStatusAdultDto] }) // note the square brackets around ScoreDto
    async getByOccasion(
        @Param("codeNumber") codeNumber: string
    ): Promise<number> {
        const statuses = await this.service.getCloseStatusByCodeNumber(codeNumber);
        return statuses.length
    }

    @Get('/getOne/:codeNumber')
    @ApiOkResponse({ type: CloseStatusAdultDto })
    async getOne(
      @Param("codeNumber") codeNumber: string,
      @Param("processor") processor: string,
      @Param("isClosed") isClosed: string
    ): Promise<CloseStatusAdultDto> {
      return await this.service.getOneCloseStatus({
        codeNumber,
        processor,
        isClosed
      });
    }

    @Get('/getAll')
    @ApiOkResponse({ type: Array<CloseStatusAdultDto> })
    async getAll(): Promise<CloseStatusAdultDto[]> {
      return await this.service.getAll();
    }
}
