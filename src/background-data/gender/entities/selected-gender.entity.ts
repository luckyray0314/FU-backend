import {
  Column,
  Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn
} from "typeorm";
import { GenderEntity } from "./gender.entity";

@Entity("selected_gender")
export class SelectedGenderEntity {
  @PrimaryGeneratedColumn()
  id?: string;
  
  @Column()
  codeNumber: string;

  @ManyToOne(() => GenderEntity)
  @JoinColumn()
  gender: GenderEntity;
}