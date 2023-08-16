import {
  Column, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn
} from "typeorm";
import { OtherOngoingEffortEntity } from "./other-ongoing-effort.entity";

@Entity("selected_other_ongoing_effort")
export class SelectedOtherOngoingEffortEntity {
  @PrimaryGeneratedColumn()
  id?: string;
  
  @Column()
  codeNumber: string;

  @ManyToOne(() => OtherOngoingEffortEntity)
  @JoinColumn()
  otherOngoingEffort: OtherOngoingEffortEntity;
}