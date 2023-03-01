import {
  Entity,
  OneToOne,
  JoinColumn,
  PrimaryColumn,
} from "typeorm";
import { ReasonForUpdateEntity } from "./reason-for-update.entity";

@Entity("selected_reason_for_update")
export class SelectedReasonForUpdateEntity {
  @PrimaryColumn()
  codeNumber: string;

  @OneToOne(() => ReasonForUpdateEntity)
  @JoinColumn()
  reasonForUpdate: ReasonForUpdateEntity;
}