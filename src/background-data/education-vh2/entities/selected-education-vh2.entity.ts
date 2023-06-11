import {
  Column, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn
} from "typeorm";
import { EducationVh2Entity } from "./education-vh2.entity";

@Entity("selected_education_vh2")
export class SelectedEducationVh2Entity {
  @PrimaryGeneratedColumn()
  id?: string;
  
  @Column()
  codeNumber: string;

  @ManyToOne(() => EducationVh2Entity)
  @JoinColumn()
  educationVh2: EducationVh2Entity;
}