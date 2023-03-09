import {
  Column, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn
} from "typeorm";
import { EmploymentVh2Entity } from "./employment-vh2.entity";

@Entity("selected_employment_vh2")
export class SelectedEmploymentVh2Entity {
  @PrimaryGeneratedColumn()
  id?: string;
  
  @Column()
  codeNumber: string;

  @ManyToOne(() => EmploymentVh2Entity)
  @JoinColumn()
  employmentVh2: EmploymentVh2Entity;
}