import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('previous_intervention')
export class PreviousIntervention {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  description: string;
}
