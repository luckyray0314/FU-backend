import {
  Column, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn
} from "typeorm";
import { ReasonForUpdateEntity } from "./reason-for-update.entity";

@Entity("selected_reason_for_update")
export class SelectedReasonForUpdateEntity {
  @PrimaryGeneratedColumn()
  id?: string;
  
  @Column()
  codeNumber: string;

  @ManyToOne(() => ReasonForUpdateEntity)
  @JoinColumn()
  reasonForUpdate: ReasonForUpdateEntity;
}