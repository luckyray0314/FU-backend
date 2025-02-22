import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
  UseGuards,
} from '@nestjs/common';
import { ApiBody, ApiOkResponse, ApiTags } from '@nestjs/swagger';
import { CodeNumberDto } from '../dto/codeNumber.dto';
import { CloseStatusDto } from './close-status.dto';
import { CloseStatusService } from './close.status.child.service';
import { ProcessorDto } from '../dto/processor.dto';
import { SessionAuthGuard } from 'src/auth/guards/session-auth.guard';
import { JWTAuthGuard } from 'src/auth/guards/jwt-auth.guard';

@ApiTags('Close Status and Processor Management')
@Controller('close-status')
export class CloseStatusController {
  constructor(public service: CloseStatusService) {}

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

  @Get('/getOne/:processor')
  @ApiOkResponse({ type: CloseStatusDto })
  async getOne1(
    @Param('codeNumber') codeNumber: string,
    @Param('processor') processor: string,
    @Param('isClosed') isClosed: string,
  ): Promise<CloseStatusDto> {
    return await this.service.getOneCloseStatus1({
      codeNumber,
      processor,
      isClosed,
    });
  }

  @Get('/getAll')
  @ApiOkResponse({ type: Array<CloseStatusDto> })
  async getAll(): Promise<CloseStatusDto[]> {
    return await this.service.findAll();
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

  @Delete(':codeNumber')
  @ApiOkResponse({ type: CodeNumberDto })
  async delete(
    @Param('codeNumber') codeNumber: string,
  ): Promise<CodeNumberDto> {
    return await this.service.delete(codeNumber);
  }
}
