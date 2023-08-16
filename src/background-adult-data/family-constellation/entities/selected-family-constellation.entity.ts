import {
  Column, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn
} from "typeorm";
import { FamilyConstellationAdultEntity } from "./family-constellation.entity";

@Entity("selected_family_constellation_adult")
export class SelectedFamilyConstellationAdultEntity {
  @PrimaryGeneratedColumn()
  id?: string;
  
  @Column()
  codeNumber: string;

  @ManyToOne(() => FamilyConstellationAdultEntity)
  @JoinColumn()
  familyConstellationAdult: FamilyConstellationAdultEntity;
}