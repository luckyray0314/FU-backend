import {
  Entity,
  OneToOne,
  JoinColumn,
  PrimaryColumn,
} from "typeorm";
import { WhoParticipatesEntity } from "./who-participates.entity";

@Entity("selected_who_participates")
export class SelectedWhoParticipatesEntity {
  @PrimaryColumn()
  codeNumber: string;

  @OneToOne(() => WhoParticipatesEntity)
  @JoinColumn()
  whoParticipates: WhoParticipatesEntity;
}