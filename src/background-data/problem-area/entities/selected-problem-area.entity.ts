import {
  Entity,
  OneToOne,
  JoinColumn,
  PrimaryColumn,
  Column,
} from "typeorm";
import { ProblemArea } from "./problem-area.entity";

@Entity("selected_problem_area")
export class SelectedProblemArea {
  @PrimaryColumn()
  codeNumber: string;

  @OneToOne(() => ProblemArea, { nullable: true })
  @JoinColumn()
  problemArea: ProblemArea;

  @Column({ nullable: true })
  other: string;
}