import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('action_assignment')
export class ActionAssignmentEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  description: string;
}
