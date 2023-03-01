import {
  Entity,
  OneToOne,
  JoinColumn,
  PrimaryColumn,
} from "typeorm";
import { EmploymentVh2Entity } from "./employment-vh2.entity";

@Entity("selected_employment_vh2")
export class SelectedEmploymentVh2Entity {
  @PrimaryColumn()
  codeNumber: string;

  @OneToOne(() => EmploymentVh2Entity)
  @JoinColumn()
  employmentVh2: EmploymentVh2Entity;
}