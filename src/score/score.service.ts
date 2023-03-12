import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { TypeOrmCrudService } from '@nestjsx/crud-typeorm';
import { Repository } from 'typeorm';
import { ScoreEntity } from './entities/score.entity';

@Injectable()
export class ScoreService extends TypeOrmCrudService<ScoreEntity> {
  constructor(@InjectRepository(ScoreEntity) repo: Repository<ScoreEntity>) {
    super(repo);
  }

  async create(entity: ScoreEntity) {
    return this.repo.insert(entity);
  }

  async update(id: number, entity: ScoreEntity) {
    return this.repo.update(id, entity);
  }

  async numOfClients(codeNumbers: string[], startDate: string, endDate: string) {
    return codeNumbers.length === 0 ? 0 : await this.repo.createQueryBuilder("score")
      .select("DISTINCT(codeNumber)")
      .where("score.codeNumber IN (:...codeNumbers)", { codeNumbers })
      .andWhere("score.date BETWEEN :startDate AND :endDate", { startDate, endDate })
      .getCount();
  }

  async avgOfOrsAndScore15() {
    return await this.repo.createQueryBuilder("score")
      .select("AVG(ors)", "ors")
      .addSelect("AVG(score15)", "score15")
      .getRawOne();
  }
}
