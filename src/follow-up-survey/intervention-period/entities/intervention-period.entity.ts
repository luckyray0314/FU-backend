import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('intervention_period')
export class InterventionPeriodEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  description: string;
}
