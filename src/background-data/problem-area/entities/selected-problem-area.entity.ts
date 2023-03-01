import {
  Entity,
  OneToOne,
  JoinColumn,
  PrimaryColumn,
  Column,
} from "typeorm";
import { ProblemAreaEntity } from "./problem-area.entity";

@Entity("selected_problem_area")
export class SelectedProblemAreaEntity {
  @PrimaryColumn()
  codeNumber: string;

  @OneToOne(() => ProblemAreaEntity, { nullable: true })
  @JoinColumn()
  problemArea: ProblemAreaEntity;

  @Column({ nullable: true })
  other: string;
}