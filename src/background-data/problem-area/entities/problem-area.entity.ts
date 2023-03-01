import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('problem_area')
export class ProblemArea {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  description: string;
}
