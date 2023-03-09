import {
  Column, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn
} from "typeorm";
import { ProblemAreaEntity } from "./problem-area.entity";

@Entity("selected_problem_area")
export class SelectedProblemAreaEntity {
  @PrimaryGeneratedColumn()
  id?: string;
  
  @Column()
  codeNumber: string;

  @ManyToOne(() => ProblemAreaEntity, { nullable: true })
  @JoinColumn()
  problemArea?: ProblemAreaEntity;

  @Column({ nullable: true })
  other?: string;
}