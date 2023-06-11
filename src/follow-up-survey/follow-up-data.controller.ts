import { Body, Controller, Get, Param, Post, UseGuards } from '@nestjs/common';
import { ApiBody, ApiOkResponse, ApiTags } from '@nestjs/swagger';
import { JWTAuthGuard } from "src/auth/guards/jwt-auth.guard";
import { SessionAuthGuard } from "src/auth/guards/session-auth.guard";
import { FollowUpDataDto, FollowUpSurveyBasicDataDto } from './follow-up-data.dto';
import { FollowUpDataService } from './follow-up-data.service';

@ApiTags('Follow Up Data Survey Management')
@UseGuards(SessionAuthGuard, JWTAuthGuard)
@Controller('follow-up-data')
export class FollowUpDataController {
  constructor(
    public service: FollowUpDataService,
  ) { }

  @Get('/basicData')
  @ApiOkResponse({ type: FollowUpSurveyBasicDataDto })
  async basicData(
  ): Promise<FollowUpSurveyBasicDataDto> {
    return await this.service.basicData();
  }

  @Post('create')
  @ApiOkResponse({ type: () => Boolean })
  @ApiBody({ type: FollowUpDataDto })
  async create(
    @Body() payload: FollowUpDataDto,
  ): Promise<boolean> {
    return await this.service.create(payload);
  }

  @Get('/get/:codeNumber')
  @ApiOkResponse({ type: FollowUpDataDto })
  async get(
    @Param('codeNumber') codeNumber: string
  ): Promise<FollowUpDataDto> {
    return await this.service.get(codeNumber);
  }
}

