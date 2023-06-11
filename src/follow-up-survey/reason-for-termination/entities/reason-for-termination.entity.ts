import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('reason_for_termination')
export class ReasonForTerminationEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  description: string;
}
