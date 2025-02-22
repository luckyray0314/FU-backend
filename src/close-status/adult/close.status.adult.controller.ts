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
import { CloseStatusAdultService } from './close.status.adult.service';
import { ProcessorDto } from '../dto/processor.dto';
import { CodeNumberDto } from '../dto/codeNumber.dto';
import { SessionAuthGuard } from 'src/auth/guards/session-auth.guard';
import { JWTAuthGuard } from 'src/auth/guards/jwt-auth.guard';
import { CloseStatusAdultDto } from './close-status.adult.dto';

@ApiTags('Close Status Adult and Processor Management')
@Controller('close-status-adult')
export class CloseStatusAdultController {
  constructor(public service: CloseStatusAdultService) {}

  @Post('/create')
  @ApiOkResponse({ type: () => Boolean })
  async create(@Body() payload: CloseStatusAdultDto): Promise<boolean> {
    return await this.service.createCloseStatusData(payload);
  }

  @Get('/getByCodeNumber/:codeNumber')
  @ApiOkResponse({ type: [CloseStatusAdultDto] }) // note the square brackets around ScoreDto
  async getByOccasion(
    @Param('codeNumber') codeNumber: string,
  ): Promise<number> {
    const statuses = await this.service.getCloseStatusByCodeNumber(codeNumber);
    return statuses.length;
  }

  @Get('/getOne/:codeNumber')
  @ApiOkResponse({ type: CloseStatusAdultDto })
  async getOne(
    @Param('codeNumber') codeNumber: string,
    @Param('processor') processor: string,
    @Param('isClosed') isClosed: string,
  ): Promise<CloseStatusAdultDto> {
    return await this.service.getOneCloseStatus({
      codeNumber,
      processor,
      isClosed,
    });
  }

  @Get('/getAll')
  @ApiOkResponse({ type: Array<CloseStatusAdultDto> })
  async getAll(): Promise<CloseStatusAdultDto[]> {
    return await this.service.findAll();
  }

  @Get('/getLast')
  @ApiOkResponse({ type: CodeNumberDto })
  async getLast(): Promise<CodeNumberDto> {
    return await this.service.getLast();
  }

  @Patch('/update-processor/:codeNumber')
  @UseGuards(SessionAuthGuard, JWTAuthGuard)
  @ApiOkResponse({ type: () => CloseStatusAdultDto })
  async updateProcessor(
    @Param('codeNumber') codeNumber,
    @Body() payload: ProcessorDto,
  ): Promise<CloseStatusAdultDto> {
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
