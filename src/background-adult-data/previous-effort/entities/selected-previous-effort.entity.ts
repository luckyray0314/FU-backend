import {
  Column, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn
} from "typeorm";
import { PreviousEffortEntity } from "./previous-effort.entity";

@Entity("selected_previous_effort")
export class SelectedPreviousEffortEntity {
  @PrimaryGeneratedColumn()
  id?: string;
  
  @Column()
  codeNumber: string;

  @ManyToOne(() => PreviousEffortEntity)
  @JoinColumn()
  previousEffort: PreviousEffortEntity;
}