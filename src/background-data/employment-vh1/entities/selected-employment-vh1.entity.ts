import {
  Entity,
  OneToOne,
  JoinColumn,
  PrimaryColumn,
} from "typeorm";
import { EmploymentVh1 } from "./employment-vh1.entity";

@Entity("selected_employment_vh1")
export class SelectedEmploymentVh1 {
  @PrimaryColumn()
  codeNumber: string;

  @OneToOne(() => EmploymentVh1)
  @JoinColumn()
  employmentVh1: EmploymentVh1;
}