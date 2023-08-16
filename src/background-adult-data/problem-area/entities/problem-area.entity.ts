import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('problem_area_adult')
export class ProblemAreaAdultEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  description: string;
}
