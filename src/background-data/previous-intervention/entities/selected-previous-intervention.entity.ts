import {
  Column, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn
} from "typeorm";
import { PreviousInterventionEntity } from "./previous-intervention.entity";

@Entity("selected_previous_intervention")
export class SelectedPreviousInterventionEntity {
  @PrimaryGeneratedColumn()
  id?: string;
  
  @Column()
  codeNumber: string;

  @ManyToOne(() => PreviousInterventionEntity, { nullable: true })
  @JoinColumn()
  previousIntervention?: PreviousInterventionEntity;

  @Column({ nullable: true })
  other?: string;
}