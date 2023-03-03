import {
  Entity,
  OneToOne,
  JoinColumn,
  PrimaryColumn,
  Column,
} from "typeorm";
import { OtherInterventionsEntity } from "./other-interventions.entity";

@Entity("selected_other_intervention")
export class SelectedOtherInterventionsEntity {
  @PrimaryColumn()
  codeNumber: string;

  @OneToOne(() => OtherInterventionsEntity, { nullable: true })
  @JoinColumn()
  otherIntervention: OtherInterventionsEntity;

  @Column({ nullable: true })
  other: string;
}