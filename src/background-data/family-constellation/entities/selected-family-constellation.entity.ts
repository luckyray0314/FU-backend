import {
  Entity,
  OneToOne,
  JoinColumn,
  PrimaryColumn,
  Column,
} from "typeorm";
import { FamilyConstellationEntity } from "./family-constellation.entity";

@Entity("selected_family_constellation")
export class SelectedFamilyConstellationEntity {
  @PrimaryColumn()
  codeNumber: string;

  @OneToOne(() => FamilyConstellationEntity, { nullable: true })
  @JoinColumn()
  familyConstellation: FamilyConstellationEntity;

  @Column({ nullable: true })
  other: string;
}