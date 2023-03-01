import {
  Entity,
  OneToOne,
  JoinColumn,
  PrimaryColumn,
} from "typeorm";
import { OtherInterventionsEntity } from "./other-interventions.entity";

@Entity("selected_other_intervention")
export class SelectedOtherInterventionsEntity {
  @PrimaryColumn()
  codeNumber: string;

  @OneToOne(() => OtherInterventionsEntity)
  @JoinColumn()
  otherIntervention: OtherInterventionsEntity;
}