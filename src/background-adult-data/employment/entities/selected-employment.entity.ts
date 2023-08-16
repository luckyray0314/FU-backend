import {
  Column, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn
} from "typeorm";
import { EmploymentEntity } from "./employment.entity";

@Entity("selected_employment")
export class SelectedEmploymentEntity {
  @PrimaryGeneratedColumn()
  id?: string;
  
  @Column()
  codeNumber: string;

  @ManyToOne(() => EmploymentEntity)
  @JoinColumn()
  employment: EmploymentEntity;
}