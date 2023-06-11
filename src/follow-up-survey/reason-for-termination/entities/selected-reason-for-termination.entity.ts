import {
  Column, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn
} from "typeorm";
import { ReasonForTerminationEntity } from "./reason-for-termination.entity";

@Entity("selected_reason_for_termination")
export class SelectedReasonForTerminationEntity {
  @PrimaryGeneratedColumn()
  id?: string;
  
  @Column()
  codeNumber: string;

  @ManyToOne(() => ReasonForTerminationEntity)
  @JoinColumn()
  reasonForTermination?: ReasonForTerminationEntity;

  @Column({ nullable: true })
  other?: string;
}