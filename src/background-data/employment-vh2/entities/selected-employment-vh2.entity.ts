import {
  Entity,
  OneToOne,
  JoinColumn,
  PrimaryColumn,
} from "typeorm";
import { EmploymentVh2 } from "./employment-vh2.entity";

@Entity("selected_employment_vh2")
export class SelectedEmploymentVh2 {
  @PrimaryColumn()
  codeNumber: string;

  @OneToOne(() => EmploymentVh2)
  @JoinColumn()
  employmentVh2: EmploymentVh2;
}