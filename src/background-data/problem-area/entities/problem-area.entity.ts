import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('problem_area')
export class ProblemAreaEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  description: string;
}
