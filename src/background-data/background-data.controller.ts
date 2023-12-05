import {
  Body,
  Controller,
  Get,
  Param,
  Post,
  Req,
  Request,
  Res,
  UseGuards,
} from '@nestjs/common';
import {
  ApiBearerAuth,
  ApiBody,
  ApiOkResponse,
  ApiTags,
} from '@nestjs/swagger';
import { Response } from 'express';
import { JWTAuthGuard } from 'src/auth/guards/jwt-auth.guard';
import { SessionAuthGuard } from 'src/auth/guards/session-auth.guard';
import { EstimatesDto } from 'src/score/dto/estimates.dto';
import {
  BackgroundDataDto,
  BackgroundSurveyBasicDataDto,
  DocxBufferDto,
} from './background-data.dto';
import { BackgroundDataService } from './background-data.service';

@ApiTags('Background Data Survey Management')
@UseGuards(SessionAuthGuard, JWTAuthGuard)
@ApiBearerAuth()
@Controller('background-data')
export class BackgroundDataController {
  constructor(public service: BackgroundDataService) {}

  @Get('/basicData')
  @ApiOkResponse({ type: BackgroundSurveyBasicDataDto })
  async basicData(@Request() req: any): Promise<BackgroundSurveyBasicDataDto> {
    console.log('req', req);
    return await this.service.basicData();
  }

  @Post('create')
  @ApiOkResponse({ type: () => Boolean })
  @ApiBody({ type: BackgroundDataDto })
  async create(
    @Body() payload: BackgroundDataDto,
    @Request() req: any,
  ): Promise<boolean> {
    console.log(req);
    return await this.service.create(payload);
  }

  @Get('/get/:codeNumber')
  @ApiOkResponse({ type: BackgroundDataDto })
  async get(
    @Param('codeNumber') codeNumber: string,
  ): Promise<BackgroundDataDto> {
    return await this.service.get(codeNumber);
  }

  @Get('/getCaseList')
  @ApiOkResponse({ type: Array<EstimatesDto> })
  async getCaseList(): Promise<EstimatesDto[]> {
    return await this.service.getCaseList();
  }

  @Post('/download-docx')
  @ApiBody({ type: () => DocxBufferDto })
  async downloadDocx(@Body() payload: DocxBufferDto, @Res() res: Response) {
    const destPath = await this.service.downloadDocx(
      payload.codeNumber,
      payload.occasion,
      payload.appDomain,
      payload.childUri,
      payload.firstGuardianUri,
      payload.secondGuardianUri,
      payload.importantEventsUri,
    );
    return res.download(destPath);
  }
}
