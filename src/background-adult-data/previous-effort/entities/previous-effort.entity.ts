import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('previous_effort')
export class PreviousEffortEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  description: string;
}
