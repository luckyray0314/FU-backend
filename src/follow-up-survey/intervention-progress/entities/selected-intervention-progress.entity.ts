import {
  Column, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn
} from "typeorm";
import { InterventionProgressEntity } from "./intervention-progress.entity";

@Entity("selected_intervention_progress")
export class SelectedInterventionProgressEntity {
  @PrimaryGeneratedColumn()
  id?: string;
  
  @Column()
  codeNumber: string;

  @ManyToOne(() => InterventionProgressEntity)
  @JoinColumn()
  interventionProgress: InterventionProgressEntity;
}