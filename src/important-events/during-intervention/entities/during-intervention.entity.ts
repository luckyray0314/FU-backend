import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('during_intervention')
export class DuringInterventionEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  description: string;
}
