import {
  Entity,
  OneToOne,
  JoinColumn,
  PrimaryColumn,
} from "typeorm";
import { SchoolUniform } from "./school-uniform.entity";

@Entity("selected_school_uniform")
export class SelectedSchoolUniform {
  @PrimaryColumn()
  codeNumber: string;

  @OneToOne(() => SchoolUniform)
  @JoinColumn()
  schoolUniform: SchoolUniform;
}