import {
  Column, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn
} from "typeorm";
import { SchoolUniformEntity } from "./school-uniform.entity";

@Entity("selected_school_uniform")
export class SelectedSchoolUniformEntity {
  @PrimaryGeneratedColumn()
  id?: string;
  
  @Column()
  codeNumber: string;

  @ManyToOne(() => SchoolUniformEntity)
  @JoinColumn()
  schoolUniform: SchoolUniformEntity;
}