import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('family_constellation')
export class FamilyConstellationEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  description: string;
}
