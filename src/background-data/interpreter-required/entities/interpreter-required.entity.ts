import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('interpreter_required')
export class InterpreterRequiredEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  description: string;
}
