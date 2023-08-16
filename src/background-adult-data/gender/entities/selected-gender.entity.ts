import {
  Column,
  Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn
} from "typeorm";
import { GenderAdultEntity } from "./gender.entity";

@Entity("selected_gender_adult")
export class SelectedGenderAdultEntity {
  @PrimaryGeneratedColumn()
  id?: string;
  
  @Column()
  codeNumber: string;

  @ManyToOne(() => GenderAdultEntity)
  @JoinColumn()
  genderAdult: GenderAdultEntity;
}