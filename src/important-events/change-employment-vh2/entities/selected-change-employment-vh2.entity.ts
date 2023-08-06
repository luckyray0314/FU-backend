import {
  Column, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn
} from "typeorm";
import { ChangeEmploymentVh2Entity } from "./change-employment-vh2.entity";

@Entity("selected_change_employment_vh2")
export class SelectedChangeEmploymentVh2Entity {
  @PrimaryGeneratedColumn()
  id?: string;
  
  @Column()
  codeNumber: string;

  @ManyToOne(() => ChangeEmploymentVh2Entity, { nullable: true })
  @JoinColumn()
  changeEmploymentVh2?: ChangeEmploymentVh2Entity;
}