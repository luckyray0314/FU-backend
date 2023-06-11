import {
  Column, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn
} from "typeorm";
import { InterventionPeriodEntity } from "./intervention-period.entity";

@Entity("selected_intervention_period")
export class SelectedInterventionPeriodEntity {
  @PrimaryGeneratedColumn()
  id?: string;
  
  @Column()
  codeNumber: string;

  @ManyToOne(() => InterventionPeriodEntity)
  @JoinColumn()
  interventionPeriod: InterventionPeriodEntity;
}