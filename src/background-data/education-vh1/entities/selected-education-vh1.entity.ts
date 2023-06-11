import {
  Column, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn
} from "typeorm";
import { EducationVh1Entity } from "./education-vh1.entity";

@Entity("selected_education_vh1")
export class SelectedEducationVh1Entity {
  @PrimaryGeneratedColumn()
  id?: string;
  
  @Column()
  codeNumber: string;

  @ManyToOne(() => EducationVh1Entity)
  @JoinColumn()
  educationVh1: EducationVh1Entity;
}