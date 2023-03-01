import {
  Entity,
  OneToOne,
  JoinColumn,
  PrimaryColumn,
} from "typeorm";
import { FamilyConstellation } from "./family-constellation.entity";

@Entity("selected_family_constellation")
export class SelectedFamilyConstellation {
  @PrimaryColumn()
  codeNumber: string;

  @OneToOne(() => FamilyConstellation)
  @JoinColumn()
  familyConstellation: FamilyConstellation;
}