import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Crud } from '@nestjsx/crud';
import { Repository } from 'typeorm';
import { Gender } from './entities/gender.entity';

@Injectable()
@Crud({
  model: {
    type: Gender
  }
})
export class GenderService {
  constructor(@InjectRepository(Gender) private readonly genderRepository: Repository<Gender>) {}
}
