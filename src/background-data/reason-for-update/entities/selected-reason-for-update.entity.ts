import {
  Entity,
  OneToOne,
  JoinColumn,
  PrimaryColumn,
} from "typeorm";
import { ReasonForUpdate } from "./reason-for-update.entity";

@Entity("selected_reason_for_update")
export class SelectedReasonForUpdate {
  @PrimaryColumn()
  codeNumber: string;

  @OneToOne(() => ReasonForUpdate)
  @JoinColumn()
  reasonForUpdate: ReasonForUpdate;
}