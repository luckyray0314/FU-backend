import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { GenderEntity } from 'src/background-data/gender/entities/gender.entity';
import { Repository } from 'typeorm';

import { genderSeedData } from '../core/constants/seed.constant';

@Injectable()
export class SeedService {
  constructor(@InjectRepository(GenderEntity) private readonly genderRepository: Repository<GenderEntity>) {}

  async seedGenders(): Promise<void> {
    const genderCount = await this.genderRepository.count();
    if (genderCount > 0) {
      return;
    }
    this.genderRepository.save(genderSeedData);
  }
}
