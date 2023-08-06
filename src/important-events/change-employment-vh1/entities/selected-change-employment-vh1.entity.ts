import {
  Column, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn
} from "typeorm";
import { ChangeEmploymentVh1Entity } from "./change-employment-vh1.entity";

@Entity("selected_change_employment_vh1")
export class SelectedChangeEmploymentVh1Entity {
  @PrimaryGeneratedColumn()
  id?: string;
  
  @Column()
  codeNumber: string;

  @ManyToOne(() => ChangeEmploymentVh1Entity, { nullable: true })
  @JoinColumn()
  changeEmploymentVh1?: ChangeEmploymentVh1Entity;
}