import {
  Entity,
  OneToOne,
  JoinColumn,
  PrimaryColumn,
} from "typeorm";
import { EducationVh1 } from "./education-vh1.entity";

@Entity("selected_education_vh1")
export class SelectedEducationVh1 {
  @PrimaryColumn()
  codeNumber: string;

  @OneToOne(() => EducationVh1)
  @JoinColumn()
  educationVh1: EducationVh1;
}