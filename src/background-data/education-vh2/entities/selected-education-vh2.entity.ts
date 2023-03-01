import {
  Entity,
  OneToOne,
  JoinColumn,
  PrimaryColumn,
} from "typeorm";
import { EducationVh2 } from "./education-vh2.entity";

@Entity("selected_education_vh2")
export class SelectedEducationVh2 {
  @PrimaryColumn()
  codeNumber: string;

  @OneToOne(() => EducationVh2)
  @JoinColumn()
  educationVh2: EducationVh2;
}