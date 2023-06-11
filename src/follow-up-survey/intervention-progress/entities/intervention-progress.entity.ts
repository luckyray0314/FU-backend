import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('intervention_progress')
export class InterventionProgressEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  description: string;
}
