import {
  Column, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn
} from "typeorm";
import { EmploymentVh1Entity } from "./employment-vh1.entity";

@Entity("selected_employment_vh1")
export class SelectedEmploymentVh1Entity {
  @PrimaryGeneratedColumn()
  id?: string;
  
  @Column()
  codeNumber: string;

  @ManyToOne(() => EmploymentVh1Entity)
  @JoinColumn()
  employmentVh1: EmploymentVh1Entity;
}