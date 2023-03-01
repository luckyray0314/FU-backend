import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('interpreter_required')
export class InterpreterRequired {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  description: string;
}
