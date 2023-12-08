import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { ApiBody, ApiOkResponse, ApiTags } from '@nestjs/swagger';
import { AdultCodeNumberDto } from './dto/adultCodeNumber.dto';
import { AdultFollowUpFilterDto } from './dto/adultFollowUpFilter.dto';
import { AdultFollowUpFilterResultDto } from './dto/adultFollowUpFilterResult.dto';
import {
  AdultOrsAndScore15WithOccasionDto,
  AdultScoreDto,
} from './dto/adultScore.dto';
import { AdultScoreService } from './adult-score.service';

@ApiTags('Adult Score15 And ORS + Satisfaction Score Management')
@Controller('adult-score')
export class AdultScoreController {
  constructor(public service: AdultScoreService) {}

  @Get('/getOne/:codeNumber/:person/:occasion')
  @ApiOkResponse({ type: AdultScoreDto })
  async getOne(
    @Param('codeNumber') codeNumber: string,
    @Param('person') person: number,
    @Param('occasion') occasion: number,
  ): Promise<AdultScoreDto> {
    return await this.service.getOneScore({
      codeNumber,
      person,
      occasion,
    });
  }

  @Get('/getByOccasion/:occasion')
  @ApiOkResponse({ type: [AdultScoreDto] }) // note the square brackets around ScoreDto
  async getByOccasion(@Param('occasion') occasion: number): Promise<number> {
    const scores = await this.service.getScoreByOccasion(occasion);
    return scores.length;
  }

  @Post('/create')
  @ApiOkResponse({ type: () => Boolean })
  async create(@Body() payload: AdultScoreDto): Promise<boolean> {
    return await this.service.createScoreData(payload);
  }

  @Post('/getFollowUpFilterResult')
  @ApiOkResponse({ type: () => AdultFollowUpFilterResultDto })
  @ApiBody({ type: () => AdultFollowUpFilterDto })
  async getFilterResult(
    @Body() payload: AdultFollowUpFilterDto,
  ): Promise<AdultFollowUpFilterResultDto> {
    return await this.service.getFollowUpFilterResult(payload);
  }

  @Get('/getScoresByCodeNumberAndOccasion/:codeNumber')
  @ApiOkResponse({ type: () => Array<AdultOrsAndScore15WithOccasionDto> })
  async getScoresByCodeNumberAndOccasion(
    @Param('codeNumber') codeNumber: string,
  ): Promise<AdultOrsAndScore15WithOccasionDto[]> {
    return await this.service.getScoresByCodeNumberAndOccasion(codeNumber);
  }
}
