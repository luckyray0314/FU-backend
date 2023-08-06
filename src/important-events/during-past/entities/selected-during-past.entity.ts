import {
  Column, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn
} from "typeorm";
import { DuringPastEntity } from "./during-past.entity";

@Entity("selected_during_past")
export class SelectedDuringPastEntity {
  @PrimaryGeneratedColumn()
  id?: string;
  
  @Column()
  codeNumber: string;

  @ManyToOne(() => DuringPastEntity, { nullable: true })
  @JoinColumn()
  duringPast?: DuringPastEntity;
}