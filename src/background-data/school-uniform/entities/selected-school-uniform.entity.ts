import {
  Entity,
  OneToOne,
  JoinColumn,
  PrimaryColumn,
} from "typeorm";
import { SchoolUniformEntity } from "./school-uniform.entity";

@Entity("selected_school_uniform")
export class SelectedSchoolUniformEntity {
  @PrimaryColumn()
  codeNumber: string;

  @OneToOne(() => SchoolUniformEntity)
  @JoinColumn()
  schoolUniform: SchoolUniformEntity;
}