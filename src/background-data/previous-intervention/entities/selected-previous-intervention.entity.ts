import {
  Entity,
  OneToOne,
  JoinColumn,
  PrimaryColumn,
  Column,
} from "typeorm";
import { PreviousInterventionEntity } from "./previous-intervention.entity";

@Entity("selected_previous_intervention")
export class SelectedPreviousInterventionEntity {
  @PrimaryColumn()
  codeNumber: string;

  @OneToOne(() => PreviousInterventionEntity, { nullable: true })
  @JoinColumn()
  previousIntervention: PreviousInterventionEntity;

  @Column({ nullable: true })
  other: string;
}