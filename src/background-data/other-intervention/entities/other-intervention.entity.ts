import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('other_intervention')
export class OtherIntervention {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  description: string;
}
