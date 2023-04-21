import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { ApiBody, ApiOkResponse, ApiTags } from '@nestjs/swagger';
import { CodeNumberDto } from './dto/codeNumber.dto';
import { FollowUpFilterDto } from './dto/followUpFilter.dto';
import { FollowUpFilterResultDto } from './dto/followUpFilterResult.dto';
import { OrsAndScore15WithOccasionDto, ScoreDto } from './dto/score.dto';
import { ScoreService } from './score.service';
import { ScoreFilterDto } from "./dto/score-filter.dto";

@ApiTags('Score15 And ORS + Satisfaction Score Management')
@Controller('score')
export class ScoreController {
  constructor(
    public service: ScoreService,
  ) { }

  @Get('/getOne/:codeNumber/:person/:occasion')
  @ApiOkResponse({ type: ScoreDto })
  async getOne(
    @Param("codeNumber") codeNumber: string,
    @Param("person") person: number,
    @Param("occasion") occasion: number
  ): Promise<ScoreDto> {
    return await this.service.getOneScore({
      codeNumber,
      person,
      occasion
    });
  }

  @Post('/create')
  @ApiOkResponse({ type: () => Boolean })
  async create(
    @Body() payload: ScoreDto,
  ): Promise<boolean> {
    return await this.service.createScoreData(payload);
  }

  @Post('/getFollowUpFilterResult')
  @ApiOkResponse({ type: () => FollowUpFilterResultDto })
  @ApiBody({ type: () => FollowUpFilterDto })
  async getFilterResult(
    @Body() payload: FollowUpFilterDto,
  ): Promise<FollowUpFilterResultDto> {
    return await this.service.getFollowUpFilterResult(payload);
  }

  @Post('/getScoresByCodeNumberAndOccasion')
  @ApiOkResponse({ type: () => Array<OrsAndScore15WithOccasionDto> })
  @ApiBody({ type: () => CodeNumberDto })
  async getScoresByCodeNumberAndOccasion(
    @Body() payload: CodeNumberDto
  ): Promise<OrsAndScore15WithOccasionDto[]> {
    return await this.service.getScoresByCodeNumberAndOccasion(payload.codeNumber);
  }
}
