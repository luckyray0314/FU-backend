import {
  Column, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn
} from "typeorm";
import { FamilyConstellationEntity } from "./family-constellation.entity";

@Entity("selected_family_constellation")
export class SelectedFamilyConstellationEntity {
  @PrimaryGeneratedColumn()
  id?: string;
  
  @Column()
  codeNumber: string;

  @ManyToOne(() => FamilyConstellationEntity, { nullable: true })
  @JoinColumn()
  familyConstellation?: FamilyConstellationEntity;

  @Column({ nullable: true })
  other?: string;
}