import { Body, Controller, Get, Param, Post, Res, UseGuards } from '@nestjs/common';
import { ApiBody, ApiOkResponse, ApiTags } from '@nestjs/swagger';
import { Response } from "express";
import { JWTAuthGuard } from "src/auth/guards/jwt-auth.guard";
import { SessionAuthGuard } from "src/auth/guards/session-auth.guard";
import { EstimatesDto } from 'src/score/dto/estimates.dto';
import { BackgroundAdultDataDto, BackgroundAdultSurveyBasicDataDto, DocxBufferDto } from './background-adult-data.dto';
import { BackgroundAdultDataService } from './background-adult-data.service';

@ApiTags('Background Adult Data Survey Management')
@UseGuards(SessionAuthGuard, JWTAuthGuard)
@Controller('background-adult-data')
export class BackgroundAdultDataController {
  constructor(
    public service: BackgroundAdultDataService,
  ) { }

  @Get('/basicData')
  @ApiOkResponse({ type: BackgroundAdultSurveyBasicDataDto })
  async basicData(
  ): Promise<BackgroundAdultSurveyBasicDataDto> {
    return await this.service.basicData();
  }

  @Post('create')
  @ApiOkResponse({ type: () => Boolean })
  @ApiBody({ type: BackgroundAdultDataDto })
  async create(
    @Body() payload: BackgroundAdultDataDto,
  ): Promise<boolean> {
    return await this.service.create(payload);
  }

  @Get('/get/:codeNumber')
  @ApiOkResponse({ type: BackgroundAdultDataDto })
  async get(
    @Param('codeNumber') codeNumber: string
  ): Promise<BackgroundAdultDataDto> {
    return await this.service.get(codeNumber);
  }

  @Get('/getCaseList')
  @ApiOkResponse({ type: Array<EstimatesDto> })
  async getCaseList(): Promise<EstimatesDto[]> {
    return await this.service.getCaseList();
  }

  @Post('/download-docx')
  @ApiBody({ type: () => DocxBufferDto })
  async downloadDocx(
    @Body() payload: DocxBufferDto,
    @Res() res: Response
  ) {
    const destPath = await this.service.downloadDocx(payload.codeNumber, payload.occasion);
    return res.download(destPath);
  }
}