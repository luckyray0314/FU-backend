import { Injectable } from '@nestjs/common';

import { genderSeedData } from '../core/constants/seed.constant';

@Injectable()
export class SeedService {
  /* constructor(private favService: FavService) {}

  async seedGenders(): Promise<void> {
    const favCount = await this.favService.count();
    if (favCount > 0) {
      return;
    }
    for await (const data of genderSeedData) {
      await this.favService.create({ data });
    }
  } */
}
