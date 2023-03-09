import { Body, Controller, Get, Param, Post, Request } from '@nestjs/common';
import { ApiOkResponse, ApiTags } from '@nestjs/swagger';
import { ScoreDto } from './dto/score.dto';
import { ScoreService } from './score.service';

@ApiTags('Score15 And ORS + Satisfaction Score Management')
@Controller('score')
export class ScoreController {
  constructor(public service: ScoreService) { }

  @Get('/get')
  @ApiOkResponse({ type: Array<ScoreDto> })
  async get(
  ): Promise<ScoreDto[]> {
    return await this.service.find();
  }

  @Post('/create')
  @ApiOkResponse({ type: () => Boolean })
  async create(
    @Body() payload: ScoreDto,
    @Request() req,
  ): Promise<boolean> {
    try {
      const scoreEntity = await this.service.findOne({
        where: {
          codeNumber: payload.codeNumber,
          person: payload.person,
          occasion: payload.occasion
        }
      });
      if (scoreEntity) {
        scoreEntity.date = payload.date;
        scoreEntity.score15 = payload.score15;
        scoreEntity.ors = payload.ors;
        this.service.update(scoreEntity.id, scoreEntity);
      }
      else {
        this.service.create(payload);
      }
      return true;
    }
    catch (e) {
      console.log("create error: ", e);
      return false;
    }
  }
}
