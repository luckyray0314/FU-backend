import {
  Entity,
  OneToOne,
  JoinColumn,
  PrimaryColumn,
} from "typeorm";
import { EducationVh2Entity } from "./education-vh2.entity";

@Entity("selected_education_vh2")
export class SelectedEducationVh2Entity {
  @PrimaryColumn()
  codeNumber: string;

  @OneToOne(() => EducationVh2Entity)
  @JoinColumn()
  educationVh2: EducationVh2Entity;
}