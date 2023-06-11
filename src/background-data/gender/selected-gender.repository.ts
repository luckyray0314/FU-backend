import { EntityRepository, Repository } from 'typeorm';
import { SelectedGenderEntity } from './entities/selected-gender.entity';

@EntityRepository(SelectedGenderEntity)
export class SelectedGenderRepository extends Repository<SelectedGenderEntity> { }
