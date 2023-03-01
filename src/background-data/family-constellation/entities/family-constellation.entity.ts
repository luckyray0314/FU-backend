import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('family_constellation')
export class FamilyConstellation {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  description: string;
}
