import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('previous_intervention')
export class PreviousInterventionEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  description: string;
}
