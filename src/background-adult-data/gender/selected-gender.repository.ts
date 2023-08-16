import { EntityRepository, Repository } from 'typeorm';
import { SelectedGenderAdultEntity } from './entities/selected-gender.entity';

@EntityRepository(SelectedGenderAdultEntity)
export class SelectedGenderAdultRepository extends Repository<SelectedGenderAdultEntity> { }
