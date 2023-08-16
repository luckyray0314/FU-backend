import {
  Column, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn
} from "typeorm";
import { EducationLevelEntity } from "./education-level.entity";

@Entity("selected_education_level")
export class SelectedEducationLevelEntity {
  @PrimaryGeneratedColumn()
  id?: string;
  
  @Column()
  codeNumber: string;

  @ManyToOne(() => EducationLevelEntity)
  @JoinColumn()
  educationLevel: EducationLevelEntity;
}