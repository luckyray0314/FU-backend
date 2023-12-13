import { Body, Controller, Get, Param, Patch, Post, UseGuards } from '@nestjs/common';
import { ApiBody, ApiOkResponse, ApiTags } from '@nestjs/swagger';
import { CloseStatusAdultService } from './close.status.adult.service';
import { CloseStatusDto } from 'src/close-status/dto/close-status.dto';
import { ProcessorDto } from '../dto/processor.dto';
import { CodeNumberDto } from '../dto/codeNumber.dto';
import { SessionAuthGuard } from 'src/auth/guards/session-auth.guard';
import { JWTAuthGuard } from 'src/auth/guards/jwt-auth.guard';

@ApiTags('Close Status Adult and Processor Management')
@Controller('close-status-adult')
export class CloseStatusAdultController {
  constructor(public service: CloseStatusAdultService) {}

  @Post('/create')
  @ApiOkResponse({ type: () => Boolean })
  async create(@Body() payload: CloseStatusDto): Promise<boolean> {
    return await this.service.createCloseStatusData(payload);
  }

  @Get('/getByCodeNumber/:codeNumber')
  @ApiOkResponse({ type: [CloseStatusDto] }) // note the square brackets around ScoreDto
  async getByOccasion(
    @Param('codeNumber') codeNumber: string,
  ): Promise<number> {
    const statuses = await this.service.getCloseStatusByCodeNumber(codeNumber);
    return statuses.length;
  }

  @Get('/getOne/:codeNumber')
  @ApiOkResponse({ type: CloseStatusDto })
  async getOne(
    @Param('codeNumber') codeNumber: string,
    @Param('processor') processor: string,
    @Param('isClosed') isClosed: string,
  ): Promise<CloseStatusDto> {
    return await this.service.getOneCloseStatus({
      codeNumber,
      processor,
      isClosed,
    });
  }

  @Get('/getAll')
  @ApiOkResponse({ type: Array<CloseStatusDto> })
  async getAll(): Promise<CloseStatusDto[]> {
    return await this.service.getAll();
  }

  @Get('/getLast')
  @ApiOkResponse({ type: CodeNumberDto })
  async getLast(): Promise<CodeNumberDto> {
    return await this.service.getLast();
  }

  @Patch('/update-processor/:codeNumber')
  @UseGuards(SessionAuthGuard, JWTAuthGuard)
  @ApiOkResponse({ type: () => CloseStatusDto })
  async updateProcessor(
    @Param('codeNumber') codeNumber,
    @Body() payload: ProcessorDto,
  ): Promise<CloseStatusDto> {
    return this.service.updateProcessor(codeNumber, payload);
  }
}
