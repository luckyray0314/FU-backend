import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('family_constellation_adult')
export class FamilyConstellationAdultEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  description: string;
}
