import {
  Entity,
  OneToOne,
  JoinColumn,
  PrimaryColumn,
} from "typeorm";
import { OtherIntervention } from "./other-intervention.entity";

@Entity("selected_other_intervention")
export class SelectedOtherIntervention {
  @PrimaryColumn()
  codeNumber: string;

  @OneToOne(() => OtherIntervention)
  @JoinColumn()
  otherIntervention: OtherIntervention;
}