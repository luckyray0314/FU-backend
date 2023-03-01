import {
  Entity,
  OneToOne,
  JoinColumn,
  PrimaryColumn,
} from "typeorm";
import { FamilyConstellationEntity } from "./family-constellation.entity";

@Entity("selected_family_constellation")
export class SelectedFamilyConstellationEntity {
  @PrimaryColumn()
  codeNumber: string;

  @OneToOne(() => FamilyConstellationEntity)
  @JoinColumn()
  familyConstellation: FamilyConstellationEntity;
}