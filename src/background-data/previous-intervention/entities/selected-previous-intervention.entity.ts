import {
  Entity,
  OneToOne,
  JoinColumn,
  PrimaryColumn,
  Column,
} from "typeorm";
import { PreviousIntervention } from "./previous-intervention.entity";

@Entity("selected_previous_intervention")
export class SelectedPreviousIntervention {
  @PrimaryColumn()
  codeNumber: string;

  @OneToOne(() => PreviousIntervention, { nullable: true })
  @JoinColumn()
  previousIntervention: PreviousIntervention;

  @Column({ nullable: true })
  other: string;
}