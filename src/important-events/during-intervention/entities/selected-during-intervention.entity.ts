import {
  Column, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn
} from "typeorm";
import { DuringInterventionEntity } from "./during-intervention.entity";

@Entity("selected_during_intervention")
export class SelectedDuringInterventionEntity {
  @PrimaryGeneratedColumn()
  id?: string;
  
  @Column()
  codeNumber: string;

  @ManyToOne(() => DuringInterventionEntity, { nullable: true })
  @JoinColumn()
  duringIntervention?: DuringInterventionEntity;
}