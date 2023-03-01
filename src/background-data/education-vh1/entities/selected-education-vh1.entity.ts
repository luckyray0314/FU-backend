import {
  Entity,
  OneToOne,
  JoinColumn,
  PrimaryColumn,
} from "typeorm";
import { EducationVh1Entity } from "./education-vh1.entity";

@Entity("selected_education_vh1")
export class SelectedEducationVh1Entity {
  @PrimaryColumn()
  codeNumber: string;

  @OneToOne(() => EducationVh1Entity)
  @JoinColumn()
  educationVh1: EducationVh1Entity;
}