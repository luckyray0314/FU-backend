import {
  Entity,
  OneToOne,
  JoinColumn,
  PrimaryColumn,
} from "typeorm";
import { EmploymentVh1Entity } from "./employment-vh1.entity";

@Entity("selected_employment_vh1")
export class SelectedEmploymentVh1Entity {
  @PrimaryColumn()
  codeNumber: string;

  @OneToOne(() => EmploymentVh1Entity)
  @JoinColumn()
  employmentVh1: EmploymentVh1Entity;
}