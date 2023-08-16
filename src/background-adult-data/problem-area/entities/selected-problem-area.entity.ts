import {
  Column, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn
} from "typeorm";
import { ProblemAreaAdultEntity } from "./problem-area.entity";

@Entity("selected_problem_area_adult")
export class SelectedProblemAreaAdultEntity {
  @PrimaryGeneratedColumn()
  id?: string;
  
  @Column()
  codeNumber: string;

  @ManyToOne(() => ProblemAreaAdultEntity, { nullable: true })
  @JoinColumn()
  problemAreaAdult?: ProblemAreaAdultEntity;

  @Column({ nullable: true })
  other?: string;
}